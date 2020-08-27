using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace BaseRemoteCall
{
    /// <summary>
    /// 远程代理服务生成器
    /// </summary>
    public class RemoteProxyGenerator
    {
        static Dictionary<string, HttpClient> clients = new Dictionary<string, HttpClient>();
        /// <summary>
        /// 通过代理类发送消息到远程服务器
        /// </summary>
        /// <typeparam name="TIn"></typeparam>
        /// <typeparam name="TOut"></typeparam>
        /// <param name="input"></param>
        /// <param name="serviceName"></param>
        /// <param name="FlowControlCfgKey"></param>
        /// <param name="pathName"></param>
        /// <returns></returns>
        public async Task<TOut> SendAsync<TIn, TOut>(TIn input, string serviceName, string pathName) where TOut : class
        {
            return await SendAsync<TIn, TOut>(input, serviceName, pathName, null);
        }
        public async Task<object> SendObjAsync<TIn>(TIn input, Type OutType, string serviceName, string pathName)
        {
            return await SendAsync<TIn, object>(input, serviceName, pathName, OutType);
        }
        private async Task<TOut> SendAsync<TIn, TOut>(TIn input, string serviceName, string pathName, Type OutType = null) where TOut : class
        {
            try
            {
                Console.WriteLine("开始执行远程调用");
                HttpClient client;
                if (!clients.TryGetValue(serviceName, out client))
                {
                    client = new HttpClient();
                    clients.Add(serviceName, client);
                }
                var request = new HttpRequestMessage(HttpMethod.Post, $"http://{serviceName}/{pathName}".ToLower()) { Version = new Version(1, 1) };
                request.Content = new StringContent(JsonConvert.SerializeObject(input));
                request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                Console.WriteLine($"发送请求至{$"http://{serviceName}/{pathName}".ToLower()}...");
                var remoteresult = await client.SendAsync(request);
                Console.WriteLine($"得到响应（{remoteresult.StatusCode}）...");
                var result = await remoteresult.Content.ReadAsStringAsync();
                Console.WriteLine($"解析回调结果：{result}");
                return JsonConvert.DeserializeObject<TOut>(result);
            }
            catch (Exception e)
            {
                Console.WriteLine($"远程调用失败:{e.Message},堆栈跟踪:{e.StackTrace.ToString()}");
            }
            return await Task.FromResult(default(TOut));
        }
    }
}

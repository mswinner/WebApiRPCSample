using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyModel;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.Loader;
using System.Text;
using System.Threading.Tasks;

namespace BaseRemoteCall
{
    public class RemoteProxyBuilder
    {
        /// <summary>
        /// 依赖注入本地服务
        /// </summary>
        /// <param name="service"></param>
        public static void RegisterRpcService(IServiceCollection service)
        {
            foreach (var remotetype in new RemoteServiceList())
            {
                service.AddScoped(remotetype.InterfaceType, (_) => remotetype.ProxyImpl);
                RemoteProxyDecoratorBuilder.RegisterProxyInDic(remotetype);
            }
            service.AddScoped<IProxyClientFactory, ProxyClientFactory>();
        }
    }
}

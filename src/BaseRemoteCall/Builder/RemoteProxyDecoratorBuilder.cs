using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace BaseRemoteCall
{
    public class RemoteProxyDecoratorBuilder
    {
        public static ConcurrentDictionary<string, MethodDelegateInfo> Remotemethods = new ConcurrentDictionary<string, MethodDelegateInfo>();
        public T CreateProxyInstance<T>()
        {
            return DispatchProxy.Create<T, RemoteProxyDecorator>();
        }
        public static void RegisterProxyInDic(RemoteServiceItem item)
        {
            var serviceName = item.ServiceName;
            foreach (var subinfo in item.SubInfos)
            {
                var tmpmod = new MethodDelegateInfo()
                {
                    ServiceName = serviceName,
                    PathName = $"{subinfo.subPath}{subinfo.methodName}".ToLower(),
                    MethodInfo = typeof(RemoteProxyGenerator).GetMethod("SendAsync").MakeGenericMethod(subinfo.input, subinfo.output.GenericTypeArguments[0])
                };
                tmpmod.MethodDelegate = (IRemoteMethodDelegate)Activator.CreateInstance(typeof(RemoteMethodDelegate<,>).MakeGenericType(subinfo.input, subinfo.output), tmpmod.MethodInfo, new RemoteProxyGenerator());
                if (!Remotemethods.TryAdd($"{item.InterfaceType.Name}/{subinfo.methodName}".ToLower(), tmpmod))
                {
                    Console.WriteLine($"无法为远程代理添加同名服务{tmpmod.ServiceName}/{tmpmod.PathName},请确保服务名全局唯一");
                }
            }
        }
    }
}

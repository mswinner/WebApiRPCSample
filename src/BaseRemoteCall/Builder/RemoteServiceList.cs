using BaseRemoteCall.Common;
using BaseRemoteCall.Set;
using Microsoft.Extensions.DependencyModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.Loader;
using System.Text;

namespace BaseRemoteCall
{
    public class RemoteServiceList : List<RemoteServiceItem>
    {
        //构造远程代理服务列表
        //获取所有标记RemoteServiceAttribute的接口
        //移除掉被控制器继承的部分
        //通过RemoteProxyDecoratorBuilder创建代理
        public RemoteServiceList()
        { 
            var TargetType = typeof(RemoteProxyDecoratorBuilder);
            foreach (var remotetype in ReflectionHelper.GetRemoteInterfaces<RemoteServiceAttribute>())
            {
                this.Add(new RemoteServiceItem(remotetype, TargetType));
            }
        }
    }

    public class RemoteServiceItem
    {
        public Type InterfaceType { get; set; }
        public string ServiceName { get; set; }
        public List<(string subPath, string methodName, Type input, Type output)> SubInfos { get; set; }
        public object ProxyImpl { get; set; }
        public RemoteServiceItem(Type remoteType, Type proxyType)
        {
            InterfaceType = remoteType;
            ProxyImpl = proxyType.GetMethod("CreateProxyInstance").MakeGenericMethod(remoteType).Invoke(Activator.CreateInstance(proxyType), new object[] { });
            var paths = ReflectionHelper.GetRemoteAttrInfo(remoteType);
            ServiceName = paths.ServiceRoute;
            SubInfos = paths.SubInfos;
        }
    }
}

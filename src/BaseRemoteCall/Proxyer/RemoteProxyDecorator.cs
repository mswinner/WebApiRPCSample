using Newtonsoft.Json;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace BaseRemoteCall
{
    public class RemoteProxyDecorator : DispatchProxy
    {
        IRemoteMethodDelegate GetProxy(string key, out string ServiceName, out string PathName)
        {
            var remotemethod = RemoteProxyDecoratorBuilder.Remotemethods.First(x => x.Key.Equals(key)).Value;
            ServiceName = remotemethod.ServiceName;
            PathName = remotemethod.PathName;
            return remotemethod.MethodDelegate;
        }
        protected override object Invoke(MethodInfo targetMethod, object[] args)
        {
            return GetProxy($"{targetMethod.DeclaringType.Name}/{targetMethod.Name}".ToLower(), out string ServiceName, out string PathName).Excute(args[0], ServiceName, PathName);
        }
    }
}

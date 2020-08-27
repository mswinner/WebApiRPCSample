using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BaseRemoteCall
{
    public interface IProxyClientFactory
    {
        T GetProxy<T>();
    }
    public class ProxyClientFactory: IProxyClientFactory
    {
        IServiceProvider serviceProvider;
        public ProxyClientFactory(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }
        public T GetProxy<T>()
        {
            return serviceProvider.GetService<T>();
        }
    }
}

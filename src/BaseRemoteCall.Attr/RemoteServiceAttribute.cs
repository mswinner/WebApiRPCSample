using System;

namespace BaseRemoteCall.Set
{
    [AttributeUsage(AttributeTargets.Interface)]
    public class RemoteServiceAttribute : Attribute
    {
        public string ServiceRoute { get; set; }
        public RemoteServiceAttribute(string serviceRoute)
        {
            this.ServiceRoute = serviceRoute;
        }
    }
    [AttributeUsage(AttributeTargets.Method)]
    public class RemoteFunctionAttribute : Attribute
    {
        public string SubRoute { get; set; }
        public RemoteFunctionAttribute(string subRoute)
        {
            this.SubRoute = subRoute;
        }
    }
}
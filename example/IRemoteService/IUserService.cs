using BaseRemoteCall.Set;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IRemoteService
{
    [RemoteService("UserService")]
    public interface IUserService
    {
        [RemoteFunction("api/User/")]
        Task<UserOutput> GetUserInfo(UserInput input);
    }

    public class UserInput
    {
        public int id { get; set; }
    }
    public class UserOutput
    {
        public string name { get; set; }
        public string year { get; set; }
        public string schoolname { get; set; }
    }
}

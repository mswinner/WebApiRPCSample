using BaseRemoteCall.Set;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace IRemoteService
{
    [RemoteService("SchoolService")]
    public interface ISchoolService
    {
        [RemoteFunction("api/School/")]
        Task<UserSchoolInfoOutput> GetSchoolInfo(UserSchoolInfoInput input);
    }


    public class UserSchoolInfoInput
    {
        public int id { get; set; }
    }
    public class UserSchoolInfoOutput
    {
        public string schoolname { get; set; }
    }
}

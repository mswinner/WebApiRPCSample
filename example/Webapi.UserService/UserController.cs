using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseRemoteCall;
using IRemoteService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webapi.UserService
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase, IUserService
    {
        ISchoolService schoolService;
        public UserController(IProxyClientFactory proxyClient)
        {
            schoolService = proxyClient.GetProxy<ISchoolService>();
        }
        [HttpPost]
        public async Task<UserOutput> GetUserInfo(UserInput input)
        {
            var result = new UserOutput();
            if (input.id == 1)
            {
                result.name = "小明";
                result.year = "19岁";
            }
            //远程调用学校服务获取学校信息
            var schoolinfo = await schoolService.GetSchoolInfo(new UserSchoolInfoInput() { id = 1 });
            if (schoolinfo != null)
                result.schoolname = schoolinfo.schoolname;
            else
                result.schoolname = "RPC调用失败,请查看日志";
            return result;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRemoteService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.SchoolService
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SchoolController : ControllerBase, ISchoolService
    {
        [HttpPost]
        public async Task<UserSchoolInfoOutput> GetSchoolInfo(UserSchoolInfoInput input)
        {
            var result = new UserSchoolInfoOutput();
            if (input.id == 1)
            {
                result.schoolname = "树德中学";
            }
            return await Task.FromResult(result);
        }
    }
}

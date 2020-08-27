using BaseRemoteCall.Set;
using Microsoft.Extensions.DependencyModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.Loader;
using System.Text;

namespace BaseRemoteCall.Common
{
    public class ReflectionHelper
    { 
        /// <summary>
        /// 获取所有程序集
        /// </summary>
        /// <returns></returns>
        static List<Assembly> GetAllAssembly()
        {
            var list = new List<Assembly>();
            var deps = DependencyContext.Default;
            var libs = deps.CompileLibraries.Where(lib => !lib.Serviceable && lib.Type != "package");//排除所有的系统程序集、Nuget下载包
            foreach (var lib in libs)
            {
                try
                {
                    var assembly = AssemblyLoadContext.Default.LoadFromAssemblyName(new AssemblyName(lib.Name));
                    list.Add(assembly);
                }
                catch (Exception)
                {
                    // ignored
                }
            }
            return list;
        }
        /// <summary>
        /// 获取远程接口
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static IEnumerable<Type> GetRemoteInterfaces<T>()
        {
            var types = GetAllAssembly().SelectMany(a => a.GetTypes());
            foreach (var type in types.Where(t => t.GetCustomAttributes(typeof(T)).Any()))
            {
                if (!types.Any(x => x.GetInterfaces().Contains(type)))
                    yield return type;
            }
        }

        /// <summary>
        /// 获取远程接口标识
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        public static (string ServiceRoute, List<(string, string, Type, Type)> SubInfos) GetRemoteAttrInfo(Type type)
        {
            var attr = type.GetCustomAttribute<RemoteServiceAttribute>().ServiceRoute;
            var subinfos = new List<(string, string, Type, Type)>();
            type.GetMethods().Where(x => x.GetCustomAttributes<RemoteFunctionAttribute>().Any()).ToList().ForEach(x =>
            {
                var subpath = x.GetCustomAttribute<RemoteFunctionAttribute>().SubRoute;
                var input = x.GetParameters()[0].ParameterType;//限定入参只能有一个
                var output = x.ReturnType;//限定出参必须是Task<t>
                subinfos.Add((subpath, x.Name, input, output));
            });
            return (attr, subinfos);
        }
    }
}

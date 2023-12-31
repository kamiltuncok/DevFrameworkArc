﻿using Core.CrossCuttingConcerns.Logging;
using Core.CrossCuttingConcerns.Logging.Log4Net;
using PostSharp.Aspects;
using PostSharp.Extensibility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Core.Aspects.Postsharp.LogAspects
{
    [Serializable]
    [MulticastAttributeUsage(MulticastTargets.Method, TargetMemberAttributes = MulticastAttributes.Instance)]
    public class LogAspect : OnMethodBoundaryAspect
    {
        private Type _type;
        LoggerService _loggerService;

        public LogAspect(Type type)
        {
            _type = type;
        }

        public override void RuntimeInitialize(MethodBase method)
        {
            if (_type.BaseType != typeof(LoggerService))
            {
                throw new Exception("Wrong Logger Type");
            }
            _loggerService = (LoggerService)Activator.CreateInstance(_type);
            base.RuntimeInitialize(method);
        }

        public override void OnEntry(MethodExecutionArgs args)
        {
            if (!_loggerService.IsInfoEnabled)
            {
                return;
            }
            try
            {
                var logParameters = args.Method.GetParameters().Select((t, i) => new LogParameter
                {
                    Name = t.Name,
                    Type = t.ParameterType.Name,
                    Value = args.Arguments.GetArgument(i)
                }).ToList();

                var logDetail = new LogDetail
                {
                    FullName = args.Method.DeclaringType == null ? null : args.Method.DeclaringType.Name,
                    MethodName = args.Method.Name,
                    Parameters = logParameters
                };

                _loggerService.Info(logDetail);
            }
            catch (Exception)
            {

            }
        }

    }
}

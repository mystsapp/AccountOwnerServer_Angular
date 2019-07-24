﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contracts;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IRepositoryWrapper _repoWrapper;

        // private readonly ILoggerManager _logger;

        public ValuesController(/*ILoggerManager logger*/ IRepositoryWrapper repoWrapper)
        {
            // _logger = logger;
            _repoWrapper = repoWrapper;
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            //_logger.LogInfo("Here is info message from our values controller.");
            //_logger.LogDebug("Here is debug message from our values controller.");
            //_logger.LogWarn("Here is warn message from our values controller.");
            //_logger.LogError("Here is error message from our values controller.");

            var domesticAccount = _repoWrapper.Account.FindByCondition(x => x.AccountType.Equals("Domestic"));
            var owner = _repoWrapper.Owner.FindAll();

            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

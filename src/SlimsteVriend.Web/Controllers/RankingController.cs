using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SlimsteVriend.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/ranking")]
    public class RankingController : Controller
    {
        private static string[] Candidates => new string[] { "Dolan", "Spooderman", "StarWars Kid", "Obama", "Nicolas" };

        [HttpGet]
        public List<string> Get()
        {
            var rnd = new Random();
            return Candidates.OrderBy(c => rnd.Next()).ToList();
        }
    }
}
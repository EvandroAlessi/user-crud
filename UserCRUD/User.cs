using System;
using System.Collections.Generic;

namespace API
{
    public partial class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }
        public EducationalLevel EducationalLevel { get; set; }
    }
}

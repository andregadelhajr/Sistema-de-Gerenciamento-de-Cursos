using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace APICurso.Models
{
    public class Usuario
    {
        public int UsuarioId { get; set; }
        public string Nome { get; set; }
        
        public string IdentityUserId { get; set; }
        public IdentityUser IdentityUser { get; set; }
    }
}

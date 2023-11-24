using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace APICurso.Models
{
    public class Categoria
    {
        public int CategoriaId { get; set; }

        [DisplayName("Nome da Categoria")]
        [Required(ErrorMessage = "Campo Obrigatório")]
        public string Nome { get; set; }

    }
}
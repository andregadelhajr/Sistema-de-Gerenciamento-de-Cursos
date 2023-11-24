using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace APICurso.Models
{
    public class Curso
    {
        public int CursoId { get; set; }

        [DisplayName("Descrição")]
        [Required(ErrorMessage = "Campo Obrigatório")]
        public string Descricao { get; set; }

        [DisplayName("Data Inicial")]
        [Required(ErrorMessage = "Campo Obrigatório")]
        public DateTime DtInicial{ get; set; }

        [DisplayName("Data Final")]
        [Required(ErrorMessage = "Campo Obrigatório")]
        public DateTime DtFinal { get; set; }

        [Required(ErrorMessage = "Campo Obrigatório")]
        public int QtdAlunos { get; set; }
        public bool Status { get; set; } = true;

        [DisplayName("Usuário")]
        public string User { get; set; }

        public Categoria Categoria { get; set; }
        public int CategoriaId { get; set; }

    }
}
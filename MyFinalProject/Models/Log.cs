using System;
using System.ComponentModel;

namespace APICurso.Models
{
    public class Log
    {
        public int LogId { get; set; }
        public DateTime DtInclusao { get; set; }
        public DateTime? DtAtualizacao { get; set; }

        [DisplayName("Usuário")]
        public string User { get; set; }

        public Curso Curso { get; set; }
        public int CursoId { get; set; }
    }
}
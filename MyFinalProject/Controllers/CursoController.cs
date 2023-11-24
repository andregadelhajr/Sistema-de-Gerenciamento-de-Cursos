using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using APICurso.Models;
using MyFinalProject.Data;

namespace MyFinalProject
{
    [Authorize]
    public class CursoController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CursoController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Curso
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.Cursos
                                .AsNoTracking()
                                .Where(x=>x.User == User.Identity.Name)
                                .Include(c => c.Categoria);

            return View(await applicationDbContext.ToListAsync());
        }

        // GET: Curso/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var curso = await _context.Cursos
                .Include(c => c.Categoria)
                .FirstOrDefaultAsync(m => m.CursoId == id);

            if (curso == null)
            {
                return NotFound();
            }

            if (curso.User != User.Identity.Name)
            {
                return NotFound();
            }

            return View(curso);
        }

        // GET: Curso/Create
        public IActionResult Create()
        {
            ViewData["CategoriaId"] = new SelectList(_context.Categorias, "CategoriaId", "Nome");
            return View();
        }

        // POST: Curso/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("CursoId,Descricao,DtInicial,DtFinal,QtdAlunos,Status,User,CategoriaId")] Curso curso)
        {
            if (ModelState.IsValid)
            {
                curso.User = User.Identity.Name;
                _context.Add(curso);
                await _context.SaveChangesAsync();

                // Adiciona uma entrada de log após a criação do curso
                var log = new Log
                {
                    DtInclusao = DateTime.Now,
                    DtAtualizacao = DateTime.Now,
                    User = User.Identity.Name,
                    CursoId = curso.CursoId
                };

                _context.Add(log);
                await _context.SaveChangesAsync();

                return RedirectToAction(nameof(Index));
            }
            ViewData["CategoriaId"] = new SelectList(_context.Categorias, "CategoriaId", "Nome", curso.CategoriaId);
            return View(curso);
        }

        // GET: Curso/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var curso = await _context.Cursos.FindAsync(id);
            if (curso == null)
            {
                return NotFound();
            }

            if (curso.User != User.Identity.Name)
            {
                return NotFound();
            }

            ViewData["CategoriaId"] = new SelectList(_context.Categorias, "CategoriaId", "Nome", curso.CategoriaId);
            return View(curso);
        }

        // POST: Curso/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("CursoId,Descricao,DtInicial,DtFinal,QtdAlunos,Status,CategoriaId")] Curso curso)
        {
            if (id != curso.CursoId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    curso.User = User.Identity.Name;
                    _context.Update(curso);
                    await _context.SaveChangesAsync();

                    var log = await _context.Logs
                        .Where(l => l.CursoId == id && l.User == User.Identity.Name)
                        .FirstOrDefaultAsync();

                    if (log != null)
                    {
                        log.DtAtualizacao = DateTime.Now;
                        _context.Logs.Update(log);
                        await _context.SaveChangesAsync();
                    }
                    
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CursoExists(curso.CursoId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["CategoriaId"] = new SelectList(_context.Categorias, "CategoriaId", "Nome", curso.CategoriaId);
            return View(curso);
        }

        // GET: Curso/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var curso = await _context.Cursos
                .Include(c => c.Categoria)
                .FirstOrDefaultAsync(m => m.CursoId == id);
            if (curso == null)
            {
                return NotFound();
            }

            if (curso.User != User.Identity.Name)
            {
                return NotFound();
            }

            return View(curso);
        }

        // POST: Curso/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var curso = await _context.Cursos.FindAsync(id);
            _context.Cursos.Remove(curso);
            await _context.SaveChangesAsync();

            var log = await _context.Logs
                .Where(l => l.CursoId == id && l.User == User.Identity.Name)
                .FirstOrDefaultAsync();

            if (log != null)
            {
                log.DtAtualizacao = DateTime.Now;
                _context.Logs.Update(log);
                await _context.SaveChangesAsync();
            }

            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(Index));
        }

        private bool CursoExists(int id)
        {
            return _context.Cursos.Any(e => e.CursoId == id);
        }
    }
}

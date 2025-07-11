import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({ providedIn: 'root' })
export class ControleLivrosService {
  private livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo 1', autores: ['Autor 1', 'Autor 2'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo 2', autores: ['Autor 3'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo 3', autores: ['Autor 4', 'Autor 5'] }
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo), 0) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) this.livros.splice(index, 1);
  }
}
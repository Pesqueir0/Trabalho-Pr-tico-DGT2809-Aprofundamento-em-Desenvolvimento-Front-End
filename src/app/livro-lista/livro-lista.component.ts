import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html'
})
export class LivroListaComponent implements OnInit {
  public livros: Livro[] = [];

  constructor(private servLivros: ControleLivrosService, private servEditora: ControleEditoraService) {}

  ngOnInit() {
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number) => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
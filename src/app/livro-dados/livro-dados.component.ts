import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html'
})
export class LivroDadosComponent implements OnInit {
  public livro = new Livro();
  public autoresForm = '';
  public editoras = [];

  constructor(
    private servLivros: ControleLivrosService,
    private servEditora: ControleEditoraService,
    private router: Router
  ) {}

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { LivroListaComponent } from './app/livro-lista/livro-lista.component';
import { LivroDadosComponent } from './app/livro-dados/livro-dados.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      { path: 'lista', component: LivroListaComponent },
      { path: 'dados', component: LivroDadosComponent }
    ])
  ]
}).catch(err => console.error(err));

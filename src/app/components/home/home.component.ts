import { Component, inject } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  name = "André";
  idButton = "botao";
  deveMostrarTitulo = false;
  listItems = ["um", "dois", "três"];

  meuBooleano = false;

  atualizaBooleano(valor: boolean) {
    this.meuBooleano = valor;
  }

  submit() {
    this.enviaFormularioService.enviaInformacaoParaBackend("Enviando informação");
  }
}

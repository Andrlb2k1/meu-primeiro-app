import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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

  @Input("name") minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();

  meuBooleano = false;

  atualizaBooleano(valor: boolean) {
    this.meuBooleano = valor;
  }

  submit() {
    this.emitindoValorName.emit(this.name);
    this.enviaFormularioService.enviaInformacaoParaBackend("Enviando informação");
  }
}

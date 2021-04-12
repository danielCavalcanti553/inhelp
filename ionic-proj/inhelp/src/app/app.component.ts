import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Buscar', url: '/pesquisar-profissionais', icon: 'navigate' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Contratações', url: '/contratacoes-anteriores', icon: 'person' },
    { title: 'Sair', url: '/login', icon: 'arrow-back-circle' },

  ];
  public labels = [];
  constructor() {}
}

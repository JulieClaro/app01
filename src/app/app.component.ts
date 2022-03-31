import { Component, OnInit } from '@angular/core';

// Importa dependências
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  user: any; // Usuário logado

  constructor(
    private auth: Auth // Injeção de dependência
  ) { }

  // Executada sempre que esta página é 'aberta'
  ngOnInit() {

    onAuthStateChanged(this.auth, user => { // Se usuário está logado...
      if (user) { this.user = user; }       // Atualiza 'this.user'
      else { this.user = false; }           // Se não, 'this.user' será 'false'
    });

  }
}

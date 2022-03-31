import { Component, OnInit } from '@angular/core';

// Importa dependências
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(

    // Injeta dependências
    public auth: Auth,
    private route: Router
  ) { }

  ngOnInit() { }

  // Função de logout
  logout() {
    this.auth.signOut()

      // Quando fizer logout...
      .then(() => {

        // Envia para a página inicial
        this.route.navigate(['/inicio']);
      }
      );
  }
}

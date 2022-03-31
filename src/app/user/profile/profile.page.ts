import { Component, OnInit } from '@angular/core';

import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // Variável que armazena dados do usuário logado
  public user: any;

  constructor(

    // Injeta dependências
    private auth: Auth,
    private route: Router
  ) { }

  ngOnInit() {

    onAuthStateChanged(this.auth, user => {
      if (user) {
        this.user = user;
      } else {
        this.route.navigate(['/usuario/login']);
      }
    });

  }

}

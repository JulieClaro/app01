import { Component, OnInit } from '@angular/core';

// Importa dependências
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    // Injeta dependências
    private auth: Auth,
    public alertController: AlertController,
    private route: Router
  ) { }

  ngOnInit() { }

  // Função de login, executada pelo botão
  login() {

    // Faz a autenticação do usuário pelo provedor
    signInWithPopup(this.auth, new GoogleAuthProvider())

      // Se der certo...
      .then(

        // Obtém os dados do usuário
        (user) => {

          // "Chama" a caixa de alerta
          this.presentAlert(user.user.displayName);
        }
      );
  }

  // Exibe uma caixa de alerta ao logar-se
  // Referências: https://ionicframework.com/docs/api/alert
  async presentAlert(userName) {
    const alert = await this.alertController.create({
      header: `Olá ${userName}!`,
      message: 'Você já pode acessar nosso conteúdo exclusivo...',
      buttons: [
        {
          text: 'Ok',
          handler: () => {

            // Quando clicar em [Ok] na caixa, vai para a página inicial
            this.route.navigate(['/inicio']);
          }
        }
      ]
    });
    await alert.present();
  }

}

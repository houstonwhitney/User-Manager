import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  form_con: FormGroup;
  erreur: string = "";

  constructor(private form: FormBuilder,
    private user: UserService,
    private rout: Router) { }

  ngOnInit(): void {
    this.init();
  }


  init() {
    this.form_con = this.form.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const login: string = this.form_con.value['login'];
    const password: string = this.form_con.value['password'];
    const p = this.user.findByLogin(login);
    console.log("bonour "+password+ "  "+login);
    if (p === null) {
      this.erreur = "Cet utilisateur n'existe pas";
    } else {
      if (p.getPassword() === "") {
        const pwd = prompt("entrez un mot de passe pour valider votre compre");
        this.user.createPassword(pwd, login);
      } else {
        if (password === "") {
          this.erreur = "veuillez entrer un mot de passe";
        } else {
          if (p.getPassword() === password) {
            this.user.userConnect = 2;
            this.rout.navigate(['/gest3']);
          } else {
            this.erreur = "mot de passe incorect";
          }

        }



      }
    }
  }

}

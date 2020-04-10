import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})


export class ArticleComponent implements OnInit {
  form_rech : FormGroup;
  mot_clef : string ="";
  listePersonne = [];
  constructor(private user: UserService,
    private root : Router,
    private form : FormBuilder) { }

  ngOnInit(): void {
    this.listePersonne = this.user.listeUser;
    this.form_rech = this.form.group({
      rech : ['', Validators.required]
    });

  }

  deletUser(login: string) {
    this.user.deletePerson(login);
    this.root.navigate(['']);
  }

  upStatus(login: string) {
    this.user.setAmin(login);
    this.root.navigate(['/gest1']);
  }

  findUser(){
    this.listePersonne = this.user.findUsersByLogin(this.mot_clef);
    this.root.navigate(['/gest1']);
  }
}

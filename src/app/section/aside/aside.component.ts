import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators, FormControlName} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  formulaire : FormGroup;
  constructor(private user : UserService,
              private formBuilder: FormBuilder,
              private root: Router) { }

  ngOnInit(): void {
    this.init();
    console.log('eeeeseed')
  }
  init(){
    this.formulaire = this.formBuilder.group( {
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      login : ['', Validators.required],
      date : ['', Validators.required],
      lieu : ['', Validators.required]
    });
  }

  onSubmit(){
    const val = this.formulaire.value;
    this.user.addPerson(val['nom'],val['prenom'],val['login'],val['date'],val['lieu'],"membre");
    this.root.navigate(['/gest1']);
  }

    
}

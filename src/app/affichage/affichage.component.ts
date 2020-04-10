import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  listePersonne = [];
  constructor(private user : UserService) { }

  ngOnInit(): void {
    this.listePersonne = this.user.listeUser;
  }
}

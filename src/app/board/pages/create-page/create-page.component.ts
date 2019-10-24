import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createCard() {

  }

  returnToBoard() {
   this.router.navigate(['/board'])
  }

}
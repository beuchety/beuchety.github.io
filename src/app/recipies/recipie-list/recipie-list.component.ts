import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient1 = new Ingredient('sugar', 1);
  ingredient2 = new Ingredient( 'milk', 3);
  ingredients: Ingredient[] = [ this.ingredient1, this.ingredient2];
  constructor() { }

  ngOnInit() {
  }

}

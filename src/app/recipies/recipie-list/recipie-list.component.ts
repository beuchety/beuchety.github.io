import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe-model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('food',
      'a test recipe',
      'https://get.pxhere.com/photo/dish-meal-food-fresh-italy-recipe-gourmet-snack-cuisine-delicious-pasta-basil-cheese-noodle-pesto-tasty-spaghetti-vegetarian-food-italian-traditional-olive-staple-food-thai-food-italian-food-tagliatelle-chinese-noodles-carbonara-leaf-vegetable-european-food-capellini-linguine-spaghetti-aglio-e-olio-spaghetti-alla-puttanesca-pasta-on-a-fork-singapore-style-noodles-taglierini-1375412.jpg')
    ];
  constructor() {
  }

  ngOnInit() {
  }

}

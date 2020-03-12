import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  links = [
    {
      routerLink: "news",
      text: "News",
      icon: "fas fa-newspaper pb-1"
    },
    {
      routerLink: "products",
      text: "Products",
      icon: "fas fa-utensils pb-1"
    },
    {
      routerLink: "calculator",
      text: "Calculator",
      icon: "fas fa-calculator pb-1"
    },
    {
      routerLink: "",
      text: "Fav. Prod",
      icon: "fas fa-star pb-1"
    },
    {
      routerLink: "",
      text: "Fav. Recipes",
      icon: "fas fa-star pb-1"
    },
    {
      routerLink: "",
      text: "Recipes",
      icon: "fas fa-clipboard-list pb-1"
    },
    {
      routerLink: "diary",
      text: "Diary",
      icon: "fas fa-book pb-1"
    },
    {
      routerLink: "",
      text: "Diet",
      icon: "fas fa-hamburger pb-1"
    }
  ]

  constructor() { }

  getSidebarLinks(): Array<any> {
    return this.links;
  }

}

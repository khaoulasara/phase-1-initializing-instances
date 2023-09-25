// Write your code here
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  class Dinner {
    #dessert;
  
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  }
const breakfast = new Breakfast("pancakes", "coffee");
const lunch = new Lunch("caesar salad", "tomato soup", "iced tea");
const dinner = new Dinner("green salad", "vegetable soup", "grilled salmon", "chocolate cake");

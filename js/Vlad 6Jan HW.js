// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.


class Storage {
  #items; // [item, item]
  constructor(items){
    this.#items = items;
  }
  getItems(){
    return this.#items
  }
  addItem(newItem){
    this.#items.push(newItem)
  }
  removeItem(itemToRemove){
   this.#items = this.#items.filter((elem,inde,array)=>{
      return elem!==itemToRemove
    })

  }
}
to make with slice and splice

arrays methods to read
finish HW
// const array = ['audi', 'bmw', 'opel']
// const carsLength = array.map((elem, index, array)=>{
//   return elem.length
// })

// const shortCar = array.find((elem, idx, arr )=>{
//   return elem.length < 4
// })

// const filteresCars = array.filter((elem, idx, arr)=>{
//   return elem.length > 3
// })

// console.log(filteresCars)
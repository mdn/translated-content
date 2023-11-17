---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
---

{{JSRef("Global_Objects", "Function")}}

## Сводка

Метод **`call()`** вызывает функцию с указанным значением `this` и индивидуально предоставленными аргументами.

> **Примечание:** хотя синтаксис этой функции практически полностью идентичен функции {{jsxref("Function.prototype.apply", "apply()")}}, фундаментальное различие между ними заключается в том, что функция `call()` принимает **список аргументов**, в то время, как функция `apply()` **- одиночный массив аргументов**.

## Синтаксис

```
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

### Параметры

- `thisArg`
  - : Значение `this`, предоставляемое для вызова функции _`fun`_. Обратите внимание, что `this` может не быть реальным значением, видимым этим методом: если метод является функцией в {{jsxref("Functions_and_function_scope/Strict_mode", "нестрогом режиме", "", 1)}}, значения {{jsxref("Global_Objects/null", "null")}} и {{jsxref("Global_Objects/undefined", "undefined")}} будут заменены глобальным объектом, а примитивные значения будут упакованы в объекты.
- `arg1, arg2, ...`
  - : Аргументы для объекта.

## Описание

Вы можете присваивать различные объекты `this` при вызове существующей функции. `this` ссылается на текущий объект, вызвавший объект. С помощью `call` вы можете написать метод один раз, а затем наследовать его в других объектах, без необходимости переписывать метод для каждого нового объекта.

## Примеры

### Пример: использование `call` для связи конструкторов объекта в цепочку

Вы можете использовать метод `call` для объединения в цепочку {{jsxref("Operators/new", "конструкторов", "", 1)}} объекта, как в Java. В следующем примере для объекта продукта `Product` объявлен конструктор с двумя параметрами, названием `name` и ценой `price`. Продукт инициализирует свойства `name` и `price`, а специализированные функции определяют ещё категорию `category`.

```js
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError(
      "Нельзя создать продукт " + this.name + " с отрицательной ценой",
    );
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "еда";
}

Food.prototype = Object.create(Product.prototype);

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "игрушка";
}

Toy.prototype = Object.create(Product.prototype);

var cheese = new Food("фета", 5);
var fun = new Toy("робот", 40);
```

### Пример: использование `call` для вызова анонимной функции

В этом чисто искусственном примере, мы создаём анонимную функцию и используем `call` для вызова её на каждом элементе массива. Главная задача анонимной функции здесь — добавить функцию печати в каждый объект, способную напечатать правильный индекс объекта в массиве. Передача объекта в качестве значения `this` не является острой необходимостью, но мы делаем это в целях объяснения.

```js
var animals = [
  { species: "Лев", name: "Король" },
  { species: "Кит", name: "Фэйл" },
];

for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
  }).call(animals[i], i);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}

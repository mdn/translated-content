---
title: Object.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Object/toString
original_slug: Web/JavaScript/Reference/Global_Objects/Object/toSource
---

{{JSRef("Global_Objects", "Object")}} {{non-standard_header}}

Метод **`toSource()`** возвращает строку, представляющую исходный код объекта.

## Синтаксис

```
Object.toSource();
obj.toSource();
```

### Параметры

Нет.

## Описание

Метод `toSource()` возвращает следующие значения:

- Для встроенного объекта {{jsxref("Global_Objects/Object", "Object")}}, метод `toSource()` возвращает следующую строку, указывающую, что исходный код не доступен:

  ```js
  function Object() {
      [native code]
  }
  ```

- Для экземпляров {{jsxref("Global_Objects/Object", "Object")}}, метод `toSource()` возвращает строку, представляющую исходный код.

Вы можете вызывать метод `toSource()` во время отладки для просмотра содержимого объекта.

### Переопределение метода `toSource()`

Вы можете безопасно переопределять метод `toSource()` для объектов. Например:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.toSource = function Person_toSource() {
  return 'new Person(' + uneval(this.name) + ')';
};

console.log(new Person('Joe').toSource()); // ---> new Person("Joe")
```

### Встроенные методы `toSource()`

Каждый тип ядра JavaScript имеет свой собственный метод `toSource()`. Вот эти объекты:

- {{jsxref("Array.prototype.toSource()")}} {{non-standard_inline}} — метод объекта {{jsxref("Global_Objects/Array", "Array")}}.
- {{jsxref("Boolean.prototype.toSource()")}} {{non-standard_inline}} — метод объекта {{jsxref("Global_Objects/Boolean", "Boolean")}}.
- {{jsxref("Date.prototype.toSource()")}} {{non-standard_inline}} — метод объекта {{jsxref("Global_Objects/Date", "Date")}}.
- {{jsxref("Function.prototype.toSource()")}} {{non-standard_inline}} — метод объекта {{jsxref("Global_Objects/Function", "Function")}}.
- {{jsxref("Number.prototype.toSource()")}} {{non-standard_inline}} — метод объекта {{jsxref("Global_Objects/Number", "Number")}}.
- {{jsxref("Regexp.prototype.toSource()")}} {{non-standard_inline}} — метод объекта {{jsxref("Global_Objects/RegExp", "RegExp")}}.
- {{jsxref("String.prototype.toSource()")}} {{non-standard_inline}} — метод объекта {{jsxref("Global_Objects/String", "String")}}.
- {{jsxref("Symbol.prototype.toSource()")}} {{non-standard_inline}} — метод объекта {{jsxref("Global_Objects/Symbol", "Symbol")}}.
- `Math.toSource()` — возвращает строку "Math".

### Ограничение на циклические объекты

В том случае, если объекты содержат ссылки на самих себя, например циклический связанный список или дерево, которое можно обходить в обоих направлениях, метод `toSource()` не создаёт такие ссылки, начиная с Firefox 24. Например:

```js
var obj1 = {};
var obj2 = { a: obj1 };
obj1.b = obj2;

console.log('Циклическая ссылка: ' + (obj1.b.a == obj1));

var objSource = obj1.toSource(); // вернёт "({b:{a:{}}})"

obj1 = eval(objSource);

console.log('Циклическая ссылка: ' + (obj1.b.a == obj1));
```

Если же вам позарез нужно использовать метод `toSource()` для циклической структуры, объект должен предоставить переопределённый метод `toSource()`, либо с помощью ссылки на конструктор, либо предоставив анонимную функцию.

## Примеры

### Пример: использование метода `toSource()`

Следующий код определяет тип объекта `Dog` и создаёт объект `theDog` типа `Dog`:

```js
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Болтушка', 'лабрадор', 'шоколадный', 'девочка');
```

Вызов метода `toSource()` на объекте `theDog` отобразит исходный код JavaScript, который определяет объект:

```js
theDog.toSource();
// вернёт ({name:"Болтушка", breed:"лабрадор", color:"шоколадный", sex:"девочка"})
```

## Спецификации

Не является частью какого-либо стандарта. Реализована в JavaScript 1.3.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toString()")}}

---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
---

{{JSRef}}

Метод **`toString()`** возвращает строку, представляющую объект.

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## Синтаксис

```
obj.toString()
```

### Возвращаемое значение

Строка, представляющая объект.

## Описание

Каждый объект имеет метод `toString()`, автоматически вызывающийся, когда объект должен быть представлен в виде текстового значения или когда объект участвует в выражении, где ожидается строка. По умолчанию, метод `toString()` наследуется каждым объектом, произошедшим от объекта {{jsxref("Global_Objects/Object", "Object")}}. Если этот метод не переопределён в пользовательском объекте, `toString()` возвращает строку вида "\[object _тип_]", где `тип` — это тип объекта. Это иллюстрирует следующий код:

```js
var o = new Object();
o.toString(); // вернёт [object Object]
```

> **Примечание:** начиная с JavaScript 1.8.5, метод `toString()`, вызванный на {{jsxref("Global_Objects/null", "null")}}, возвращает строку `[object Null]`, а вызванный для {{jsxref("Global_Objects/undefined", "undefined")}}, возвращает строку `[object Undefined]`, как определено в 5-м издании ECMAScript и последующих исправлениях. Смотрите пример [использование метода toString() для определения типа объекта](#using_tostring_to_detect_object_type).

## Примеры

### Пример: переопределение метода `toString` по умолчанию

Вы можете создать функцию, которая будет вызываться вместо метода `toString()` по умолчанию. Метод `toString()` не принимает аргументов и должен возвращать строку. Создаваемый вами метод `toString()` может возвращать любую строку, какую вы захотите, но он будет наиболее полезным, если будет возвращать информацию об объекте.

Следующий код определяет объект `Dog` и создаёт `theDog`, объект типа `Dog`:

```js
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog("Болтушка", "лабрадор", "шоколадный", "девочка");
```

Если вы вызовете метод `toString()` на этом пользовательском объекте, он вернёт значение по умолчанию, унаследованное от {{jsxref("Global_Objects/Object", "Object")}}:

```js
theDog.toString(); // вернёт [object Object]
```

Следующий код создаёт и присваивает метод `dogToString()`, переопределяющий метод `toString()` по умолчанию. Эта функция генерирует строку, содержащую кличку, породу, цвет и пол объекта, в форме "`свойство = значение;`".

```js
Dog.prototype.toString = function dogToString() {
  var ret =
    "Собачка " +
    this.name +
    " - " +
    this.sex +
    ", " +
    this.color +
    " " +
    this.breed;
  return ret;
};
```

или

```js
Dog.prototype.toString = function dogToString() {
  return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
};
```

После объявления этого метода, при любом использовании переменной `theDog` в строковом контексте, JavaScript будет автоматически вызывать функцию `dogToString()`, возвращающую следующую строку:

```
Собачка Болтушка - девочка, шоколадный лабрадор
```

### Пример: использование метода `toString` для определения типа объекта

Метод `toString()` можно использовать с любым объектом для получения его класса. Для использования метода `Object.prototype.toString()` с любым объектом, вам необходимо вызвать на нём функции {{jsxref("Function.prototype.call()")}} или {{jsxref("Function.prototype.apply()")}}, передав объект, который вы хотите исследовать, первым параметром `thisArg`.

```js
var toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
toString.call(Math); // [object Math]

// Начиная с JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}

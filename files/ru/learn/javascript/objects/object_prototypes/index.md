---
title: Прототипы объектов
slug: Learn/JavaScript/Objects/Object_prototypes
tags:
  - JavaScript
  - create()
  - Конструктор
  - Начинающий
  - ООП
  - Обучение
  - Объект
  - Статья
  - прототип
translation_of: Learn/JavaScript/Objects/Object_prototypes
original_slug: Learn/JavaScript/Объекты/Object_prototypes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects")}}Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга. В этой статье мы объясним, как работают цепочки прототипов, и рассмотрим, как свойство prototype можно использовать для добавления методов к существующим конструкторам.

<table>
  <tbody>
    <tr>
      <th scope="row">Необходимые знания:</th>
      <td>
        Знакомство с основами JavaScript
        (смотри
        <a href="/ru-RU/docs/Learn/JavaScript/First_steps">Первые шаги</a> и
        <a href="/ru-RU/docs/Learn/JavaScript/Building_blocks"
          >Строительные блоки</a
        >) и
        <a href="/ru-RU/docs/Learn/JavaScript/Objects/Basics"
          >Введение в объекты</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Цель:</th>
      <td>
        Чтобы понять прототипы объектов JavaScript, как работают цепочки прототипов,
и как установить прототип объекта.
      </td>
    </tr>
  </tbody>
</table>

## Цепочка прототипов

В консоли браузера попробуйте создать объектный литерал:

```js
const myObject = {
  city: "Москва",
  greet() {
    console.log(`Привет из ${this.city}`);
  },
};

myObject.greet(); // Привет из Москва
```

Это объект с одним свойством `city`, и одним методом `greet()`. Если вы введете в консоль имя объекта, за которым следует точка, например `MyObject.`, то в консоли появится список всех свойств, доступных этому объекту. Вы увидите, что наряду с `городом` и `приветствием` есть множество других свойств!

```
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```

Попробуйте получить доступ к одному из них:

```js
myObject.toString(); // "[object Object]"
```

Это работает (даже если не очевидно, что делает `toString()`).

Что это за дополнительные свойства и откуда они берутся?

Каждый объект в JavaScript имеет встроенное свойство, которое называется его **прототипом**. Прототип сам по себе является объектом, поэтому у прототипа будет свой собственный прототип, образующий так называемую **цепочку прототипов**. Цепочка заканчивается, когда мы достигаем прототипа, который равен `null` для своего собственного прототипа.

> **Примечание:** Свойство объекта, указывающее на его прототип, **не** называется `prototype`. Его название не является стандартным, но на практике все браузеры используют [`__proto__`](/ru-RU/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). Стандартным способом доступа к прототипу объекта является метод {{jsxref("Object/getPrototypeOf", "Object.getPrototypeOf()")}}.

Когда вы пытаетесь получить доступ к свойству объекта: если свойство не может быть найдено в самом объекте, выполняется поиск свойства в прототипе. Если свойство по-прежнему не может быть найдено, то выполняется поиск в прототипе прототипа и так далее (по цепочке), пока либо свойство не будет найдено, либо не будет достигнут конец цепочки, и в этом случае возвращается `undefined`.

Поэтому, когда мы вызываем `MyObject.toString()`, браузер делает это:

- ищет `toString` в `MyObject`
- не может найти его там, поэтому ищет в прототипе объекта `MyObject` `toString`
- находит его там и вызывает его.

Что является прототипом для `MyObject`? Чтобы выяснить это, мы можем использовать функцию `Object.getPrototypeOf()`:

```js
Object.getPrototypeOf(myObject); // Object { }
```
Это объект под названием `Object.prototype`, и есть самый базовый прототип, который есть у всех объектов по умолчанию. Прототип `Object.prototype` равен `null`, поэтому он находится в конце цепочки прототипов:

![Prototype chain for myObject](myobject-prototype-chain.svg)

## Резюме

В этой статье рассмотрены прототипы объектов JavaScript (в том числе и то, как прототип цепочки объектов позволяет объектам наследовать функции друг от друга), свойство прототипа и как его можно использовать для добавления методов к конструкторам и другие связанные с этой статьёй темы.

В следующей статье мы рассмотрим то, как вы можете реализовать наследование функциональности между двумя собственными настраиваемыми объектами.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects")}}

## В этом модуле

- [Основы объекта](/ru/docs/Learn/JavaScript/Объекты/Основы)
- [Объектно-ориентированный JavaScript для начинающих](/ru/docs/Learn/JavaScript/Объекты/Object-oriented_JS)
- [Прототипы объектов](/ru/docs/Learn/JavaScript/Объекты/Object_prototypes)
- [Наследование в JavaScript](/ru/docs/Learn/JavaScript/Объекты/Inheritance)
- [Работа с данными JSON](/ru/docs/Learn/JavaScript/Объекты/JSON)
- [Практика построения объектов](/ru/docs/Learn/JavaScript/Объекты/Object_building_practice)
- [Добавление функций в нашу демонстрацию прыгающих шаров](/ru/docs/Learn/JavaScript/Объекты/Adding_bouncing_balls_features)

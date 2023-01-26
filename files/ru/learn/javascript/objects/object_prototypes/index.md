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

| Необходимые знания: | Базовая компьютерная грамотность, базовое понимание HTML и CSS, знакомство с основами JavaScript (см. [Первые шаги](/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8) и [Строительные блоки](/ru/docs/Learn/JavaScript/Building_blocks)) и основы OOJS (см. [Введение в объекты](/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B)). |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:               | Понять прототипы объектов JavaScript, как работают прототипные цепочки и как добавить новые методы в `prototype` свойство.           <table>
  <tbody>
    <tr>
      <th scope="row">Необходимые знания:</th>
      <td>
        Знакомство с основами JavaScript
        (смотри
        <a href="/ru-RU/docs/Learn/JavaScript/First_steps">Первые шаги</a> и
        <a href="/ru-RU/docs/Learn/JavaScript/Building_blocks"
          >Строительные блоки</a
        >), и
        <a href="/ru-RU/docs/Learn/JavaScript/Objects/Basics"
          >Введение в объекты</a
        >).
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
</table>                                                                                                                                                                                                                                                         |

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

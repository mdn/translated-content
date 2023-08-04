---
title: class expression
slug: Web/JavaScript/Reference/Operators/class
---

{{jsSidebar("Operators")}}

**Class expression** это способ определения класса в ECMAScript 2015 (ES6). Схожий с [function expressions](/ru/docs/Web/JavaScript/Reference/Operators/function), class expressions может быть именованным либо не иметь имени. Если он именованный, то его имя доступно только внутри класса. JavaScript классы используют прототипно-ориентирование наследование.

## Синтаксис

```
var MyClass = class [className] [extends] {
  // тело класса
};
```

## Описание

Class expression имеет схожий синтаксис с {{jsxref("Statements/class", "class declaration (statement)", "", "true")}}. Однако в class expression можно опустить имя класса ("binding identifier"), что не допустимо с {{jsxref("Statements/class", "class declaration", "", "true")}}. Также class expression позволяет повторно объявить уже существующий класс и это **не приведёт к ошибке типа**, как при использовании {{jsxref("Statements/class", "class declaration", "", "true")}}. Свойство конструктора является опциональным. Результатом вызова оператора {{jsxref("Operators/typeof", "typeof")}} на классах, сгенерированных при помощи class expression, всегда будет "function".

Так же, как и при использовании class declaration, тело класса у class expression будет исполняться в {{jsxref("Strict_mode", "строгом режиме", "", 1)}}.

```js
"use strict";
var Foo = class {}; // свойство конструктора опционально
var Foo = class {}; // повторное объявление разрешено

typeof Foo; // возвращает "function"
typeof class {}; // возвращает "function"

Foo instanceof Object; // true
Foo instanceof Function; // true
class Foo {} // Throws TypeError, doesn't allow re-declaration
```

## Примеры

### Простой class expression

Простой анонимный class expression, на который можно сослаться с помощью переменной "Foo".

```js
var Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

var instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // "Foo"
```

### Именованный class expression

Если вы хотите сослаться на конкретный класс внутри тела класса, вы можете создать именованный class expression. Это имя будет доступно только внутри области видимости самого class expression.

```js
var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
};
var bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"
```

## Спецификация

| Спецификация                                                           | Статус               | Комментарий                |
| ---------------------------------------------------------------------- | -------------------- | -------------------------- |
| {{SpecName('ES6', '#sec-class-definitions', 'Class definitions')}}     | {{Spec2('ES6')}}     | Первоначальное определение |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                            |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [`function` expression](/ru/docs/Web/JavaScript/Reference/Operators/function)
- [`class` statement](/ru/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/ru/docs/Web/JavaScript/Reference/Classes)

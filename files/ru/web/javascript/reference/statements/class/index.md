---
title: class
slug: Web/JavaScript/Reference/Statements/class
---

{{jsSidebar("Statements")}}

**Class declaration** создаёт новый класс с данным именем на основе прототипного наследования.

Можно так же определить класс, используя {{jsxref("Operators/class", "class expression", "", 1)}}. Но в отличие от class expression, class declaration не позволяет снова объявить уже существующий класс, это **приведёт к ошибке типа**.

## Синтаксис

```js
class name [extends] {
  // тело класса
}
```

## Описание

Как и class expression, тело class declaration будет исполняться в {{jsxref("Strict_mode", "строгом режиме", "", 1)}}. Свойство конструктора является опциональным.

Class declaration не {{Glossary("Hoisting", "поднимается")}} (в отличие от [декларируемых функций](/ru/docs/Web/JavaScript/Reference/Statements/function)).

## Примеры

### Простой class declaration

В следующем примере сначала определяется класс с именем Polygon, затем он наследуется для создания класса Square. Заметьте, что super(), используемый в конструкторе, может быть использован только в конструкторе и должен быть вызван до того, как будет использовано ключевое слово this.

```js
class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }
}
```

> **Предупреждение:** ### Попытка объявить класс дваждыПереопределение класса с помощью class declaration вызовет ошибку типа. `js class Foo {}; class Foo {}; // Uncaught TypeError: Identifier 'Foo' has already been declared` Та же ошибка будет вызвана, если класс был определён перед использованием class declaration.
>
> ```js
> var Foo = class {};
> class Foo {} // Uncaught TypeError: Identifier 'Foo' has already been declared
> ```

## Спецификации

| Спецификация                                                           | Статус               | Комментарий         |
| ---------------------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES6', '#sec-class-definitions', 'Class definitions')}}     | {{Spec2('ES6')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                     |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [`function` declaration](/ru/docs/Web/JavaScript/Reference/Statements/function)
- [`class` expression](/ru/docs/Web/JavaScript/Reference/Operators/class)
- [Classes](/ru/docs/Web/JavaScript/Reference/Classes)

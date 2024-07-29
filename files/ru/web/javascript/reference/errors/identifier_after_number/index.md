---
title: "SyntaxError: identifier starts immediately after numeric literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
---

{{JSSidebar("Errors")}}

Исключение "identifier starts immediately after numeric literal" возникает, если имя переменной, свойства или функции начинается с цифры. По правилам имя может начинаться только с буквы, подчеркивания (\_) или знака доллара ($).

## Сообщение

```plain
SyntaxError: Unexpected identifier after numeric literal (Edge)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: Unexpected number (Chrome)
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что не так?

Имена переменных, а также свойств и функций, называемые {{Glossary("Identifier", "идентификаторами")}}, должны соответствовать определённым правилам.

Идентификатор в JavaScript должен начинаться с буквы, символа подчёркивания (\_) или знака доллара ($) и не может начинаться с цифры. Цифрами (0-9) могут быть только второй и следующие символы.

## Примеры

### Имена переменных, начинающиеся с числовых литералов

Имена переменных не могут начинаться с цифер в JavaScript. Следующий код приведёт к ошибкам:

```js-nolint example-bad
var 1life = 'foo';
// SyntaxError: identifier starts immediately after numeric literal

var foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal

alert(1.foo);
// SyntaxError: identifier starts immediately after numeric literal
```

Вы можете переназвать вашу переменную, чтобы избежать ведущего числа.

```js example-good
var life1 = "foo";
var foo = life1;
```

## Смотрите также

- [Лексический синтаксис](/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Грамматика и типы](/ru/docs/Web/JavaScript/Guide/Grammar_and_types)

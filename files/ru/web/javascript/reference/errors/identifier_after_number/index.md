---
title: "SyntaxError: identifier starts immediately after numeric literal(идентификатор начинается сразу после числового литерала)"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
---

{{JSSidebar("Errors")}}

## Сообщение

```
SyntaxError: непредвиденный идентификатор после числового литерала (Edge)
SyntaxError: идентификатор запускается сразу после числового литерала (Firefox)
SyntaxError: непредвиденное число (Chrome)
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

Имена переменных, называемых {{Glossary("Identifier", "identifiers")}} соответствуют определённым правилам, которых должен придерживаться ваш код!

Идентификатор JavaScript должен начинаться с буквы, символа подчёркивания ( \_ ) или знака доллара ($). Они не могут начать с цифры! Только последующие символы могут быть цифрами (0-9).

## Примеры

### Имена переменных, начинающиеся с числовых литералов

Имена переменных не могут начинаться с чисел в JavaScript. Следующие сбои:

```js example-bad
var 1life = 'foo';
// SyntaxError:  идентификатор начинается сразу после числового литерала

var foo = 1life;
// SyntaxError:  идентификатор начинается сразу после числового литерала

alert(1.foo);
// SyntaxError:  идентификатор начинается сразу после числового литерала
```

Вы можете переназвать вашу переменную чтобы избежать ведущего числа.

```js example-good
var life1 = "foo";
var foo = life1;
```

## Смотрите также

- [Lexical grammar](/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Variables](/ru/docs/Web/JavaScript/Guide/Grammar_and_types#Variables) in the [JavaScript Guide](/ru/docs/Web/JavaScript/Guide)

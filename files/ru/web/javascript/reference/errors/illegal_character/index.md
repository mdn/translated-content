---
title: "SyntaxError: illegal character"
slug: Web/JavaScript/Reference/Errors/Illegal_character
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: illegal character (Firefox)
SyntaxError: Invalid or unexpected token (Chrome)
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

Присутствует недопустимый или неожиданный знак, который не принадлежит данной позиции в коде. Используйте редактор, поддерживающий подсветку синтаксиса, и внимательно проверьте ваш код на предмет таких несовпадений, как знак минус (`-`) вместо тире (`–`) или простые кавычки (`"`) вместо нестандартных знаков цитирования (`“`).

## Примеры

### Несоответствующие символы

Некоторые символы выглядят одинаково, но становится причиной того, что анализатор не выполняет интерпретацию вашего кода.

```js example-bad
“This looks like a string”;
// SyntaxError: illegal character

42 – 13;
// SyntaxError: illegal character
```

Так должно работать:

```js example-good
"This is actually a string";

42 - 13;
```

### Пропущенные символы

Это просто — пропустить символ здесь или там.

```js example-bad
var colors = ['#000', #333', '#666'];
// SyntaxError: illegal character
```

Добавляем пропущенную кавычку для `'#333'` .

```js example-good
var colors = ["#000", "#333", "#666"];
```

### Скрытые символы

Подчас копирования кода из внешнего источника могут встречаться недействительные символы. Будьте внимательны!

```js example-bad
var foo = 'bar';​
// SyntaxError: illegal character
```

Если проверить этот код в редакторе вроде Vim, вы можете увидеть, что в коде присутствует символ, именуемый [нулевой пробел (zero-width space (ZWSP) (U+200B))](https://en.wikipedia.org/wiki/Zero-width_space).

```js
var foo = 'bar';​<200b>
```

## Смотрите также

- [Lexical grammar](/ru/docs/Web/JavaScript/Reference/Lexical_grammar)

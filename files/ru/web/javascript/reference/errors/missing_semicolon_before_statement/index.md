---
title: "SyntaxError: missing ; before statement"
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: Expected ';' (Edge)
SyntaxError: missing ; before statement (Firefox)
```

## Тип ошибки

{{jsxref("SyntaxError")}}.

## Что пошло не так?

Отсутствует точка с запятой (`;`). [Инструкции JavaScript](/ru/docs/Web/JavaScript/Reference/Statements) должны заканчиваться точкой с запятой. В некоторых случаях имеет место [автоматическая вставка точки с запятой (ASI)](/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Автоматическая_вставка_точки_с_запятой), но в данном случае необходимо её поставить, чтобы JavaScript мог правильно обработать исходный код.

Часто эта ошибка является следствием другой ошибки, например, некорректного экранирования строк или неправильного использования `var`. Кроме того, где-то может быть слишком много скобок. Тщательно проверьте синтаксис при возникновении этой ошибки.

## Примеры

### Неэкранированные строки

Эта ошибка может легко возникнуть, если не экранировать строку правильным образом, из-за чего JavaScript будет рассматривать это место как конец строки. Например:

```js-nolint example-bad
var foo = 'Tom's bar';
// SyntaxError: missing ; before statement
```

Можно использовать двойные кавычки или экранировать апостроф:

```js-nolint example-good
var foo = "Tom's bar";
var foo = 'Tom\'s bar';
```

### Объявление свойств через var

**Нельзя** объявить свойство объекта или массива с помощью `var`.

```js example-bad
var obj = {};
var obj.foo = 'привет'; // SyntaxError missing ; before statement

var array = [];
var array[0] = 'всем'; // SyntaxError missing ; before statement
```

Ключевое слово `var` необходимо опустить:

```js example-good
var obj = {};
obj.foo = "привет";

var array = [];
array[0] = "всем";
```

### Неправильные ключевые слова

При переходе с другого языка программирования частой проблемой является использование ключевых слов, которые в JavaScript имеют другое значение или ничего не означают.

```js example-bad
def print(info){
  console.log(info);
}; // SyntaxError missing ; before statement
```

Вместо `def` используйте `function`:

```js example-good
function print(info) {
  console.log(info);
}
```

## Смотрите также

- [Автоматическая вставка точки с запятой (ASI)](/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Автоматическая_вставка_точки_с_запятой)
- [Инструкции JavaScript](/ru/docs/Web/JavaScript/Reference/Statements)

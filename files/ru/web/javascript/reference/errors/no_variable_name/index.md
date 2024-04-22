---
title: "SyntaxError: missing variable name"
slug: Web/JavaScript/Reference/Errors/No_variable_name
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

У переменной отсутствует имя. Скорее всего, дело в синтаксической ошибке в вашем коде. Может, где-то неправильно стоит запятая, или у вас возникли трудности с именованием. Прекрасно вас понимаем! Придумывать названия – очень непросто.

## Примеры

### Отсутствует имя переменной

```js example-bad
var = "foo";
```

Придумывать хорошие имена переменным очень тяжело, все мы с таким сталкивались.

```js example-good
var ohGodWhy = "foo";
```

### Зарезервированные ключевые слова не могут использоваться как имена переменных

Есть несколько имён, которые являются [зарезервированными ключевыми словами](/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Ключевые_слова). Их нельзя использовать. Увы :(

```js example-bad
var debugger = "whoop";
// SyntaxError: missing variable name
```

### Объявление нескольких переменных

При объявлении нескольких переменных обращайте особое внимание на запятые. Нет ли лишних запятых? Не поставили ли вы случайно запятые вместо точек с запятыми?

```js example-bad
var x, y = "foo",
var x, = "foo"

var first = document.getElementById('раз'),
var second = document.getElementById('два'),

// SyntaxError: missing variable name
```

Исправленный вариант:

```js example-good
var x,
  y = "foo";
var x = "foo";

var first = document.getElementById("раз");
var second = document.getElementById("два");
```

### Массивы

Литералам {{jsxref("Array")}} в JavaScript необходимы квадратные скобки вокруг значений. Такое не сработает:

```js example-bad
var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

А вот так будет правильно:

```js example-good
var arr = [1, 2, 3, 4, 5];
```

## Смотрите также

- [Хорошие имена переменных (на англ.)](http://wiki.c2.com/?GoodVariableNames)
- [`var`](/ru/docs/Web/JavaScript/Reference/Statements/var)
- [Объявления переменных в Руководстве по JavaScript](/ru/docs/Web/JavaScript/Guide/Grammar_and_types#Объявления)

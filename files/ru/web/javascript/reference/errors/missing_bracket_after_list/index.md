---
title: "SyntaxError: missing ] after element list"
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: missing ] after element list
```

## Тип ошибки

{{jsxref("SyntaxError")}}.

## Что пошло не так?

Ошибка в синтаксисе инициализации массива. Скорее всего, пропущена закрывающая квадратная скобка ("`]`") или запятая ("`,`").

## Примеры

### Незавершённый инициализатор массива

```js example-bad
var list = [1, 2,

var instruments = [
  'Укулеле',
  'Гитара',
  'Пианино'
};

var data = [{foo: 'bar'} {bar: 'foo'}];
```

Правильные варианты:

```js example-good
var list = [1, 2];

var instruments = ["Укулеле", "Гитара", "Пианино"];

var data = [{ foo: "bar" }, { bar: "foo" }];
```

## Смотрите также

- {{jsxref("Array")}}

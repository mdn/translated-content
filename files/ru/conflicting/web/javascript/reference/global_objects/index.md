---
title: uneval()
slug: conflicting/Web/JavaScript/Reference/Global_Objects
original_slug: Web/JavaScript/Reference/Global_Objects/uneval
---

{{jsSidebar("Objects")}}{{Non-standard_header}}

**Сводка**

**`uneval()`** метод создаёт строковое представление исходного кода объекта.

## Синтаксис

```
uneval(object)
```

### Параметры

- `object`
  - : JavaScript-выражение или оператор.

> **Примечание:** вы не получите корректное JSON-представление объекта.

## Описание

`uneval()` является функцией высшего порядка и не связана с любым объектом.

## Примеры

```js
var a = 1;
uneval(a); // возвращает строку, содержащую 1

var b = "1";
uneval(b) // возвращает строку, содержащую "1"

uneval(function foo(){}); // возвращает "(function foo(){})"


var a = uneval(function foo(){return 'привет'});
var foo = eval(a);
foo(); // возвращает "привет"
```

## Технические характеристики

Не является частью какой-либо спецификации.

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("JSON.stringify")}}
- {{jsxref("JSON.parse")}}
- {{jsxref("Object.toSource")}}

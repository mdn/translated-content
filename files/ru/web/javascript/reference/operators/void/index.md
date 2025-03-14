---
title: void operator
slug: Web/JavaScript/Reference/Operators/void
---

{{jsSidebar("Operators")}}

**Оператор `void`** вычисляет переданное _выражение_ и возвращает {{jsxref("Global_Objects/undefined", "undefined")}}.

## Синтаксис

```
void expression
```

## Описание

Этот оператор позволяет вставлять выражения, которые производят дополнительные действия, в места, где ожидается {{jsxref("Global_Objects/undefined", "undefined")}}.

Оператор `void` часто используется для получения примитивного значения `undefined`, используя `"void(0)"` (что эквивалентно `"void 0"`). В подобных случаях можно просто использовать глобальную переменную {{jsxref("Global_Objects/undefined", "undefined")}} (предполагая, что её значение по умолчанию не было изменено).

## Самовызывающаяся функция (IIFE)

С оператором void можно использовать самовызывающиеся функции.

```js
void (function iife() {
  var bar = function () {};
  var baz = function () {};
  var foo = function () {
    bar();
    baz();
  };
  var biz = function () {};

  foo();
  biz();
})();
```

## JavaScript URIs

Когда браузер переходит по `javascript: URI`, он вычисляет код в `URI` и заменяет содержание страницы возвращённым значением, если оно не равно {{jsxref("Global_Objects/undefined", "undefined")}}. Можно воспользоваться оператором `void` для возврата {{jsxref("Global_Objects/undefined", "undefined")}}. Например:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

Однако заметим, что не рекомендуется использовать псевдо-протокол `javascript:`. Лучше прибегнуть к другим альтернативам, таким, как обработчики событий.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`undefined`](/ru/docs/Web/JavaScript/Reference/Global_Objects/undefined)

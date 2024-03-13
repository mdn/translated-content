---
title: "SyntaxError: missing } after function body"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: missing } after function body
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

Допущена синтаксическая ошибка где-то в коде создания функции. Кроме того, проверьте, все ли закрывающие круглые и фигурные скобки расставлены в правильном порядке. Справиться с беспорядком поможет использование отступов, а также более аккуратное форматирование кода в целом.

## Примеры

### Забытая закрывающая фигурная скобка

Часто в коде функции может быть забыта фигурная скобка:

```js example-bad
var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
};
```

Правильный код:

```js example-good
var charge = function () {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
};
```

Ещё больше путаницы может внести использование {{Glossary("IIFE")}}, [замыканий](/ru/docs/Web/JavaScript/Closures) и прочих конструкций, где используется большое количество различных скобок:

```js example-bad
(function() { if (true) { return false; } );
```

Зачастую облегчить поиск ошибок можно, проверив отступы ещё раз или расставив их по-другому.

```js example-good
(function () {
  if (true) {
    return false;
  }
});
```

## Смотрите также

- [Функции](/ru/docs/Web/JavaScript/Guide/Functions)

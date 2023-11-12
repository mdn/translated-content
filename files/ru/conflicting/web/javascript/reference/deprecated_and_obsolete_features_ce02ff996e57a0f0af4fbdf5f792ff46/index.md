---
title: "Предупреждение: затворы выражения являются устаревшими"
slug: conflicting/Web/JavaScript/Reference/Deprecated_and_obsolete_features_ce02ff996e57a0f0af4fbdf5f792ff46
original_slug: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
---

{{jsSidebar("Errors")}}

## Сообщение

```
Warning: замыкания выражений являются устаревшими
```

## Тип ошибки

Предупреждающий. Выполнение скрипта не будет остановлено.

## Что пошло не так?

Нестандартный синтаксис закрытия выражений (сокращённый синтаксис функций) устарел и больше не должен использоваться. Этот синтаксис будет полностью удалён в Этот синтаксис будет полностью удалён в {{bug(1083458)}} а скрипты с его помощью {{jsxref("SyntaxError")}} затем.

## Примеры

### Неправильный синтаксис

Замыкания выражений пропускают фигурные скобки или операторы return из объявлений функций или определений методов в объектах.

```js example-bad
var x = function() 1;

var obj = {
  count: function() 1
};
```

### Стандартный синтаксис

To convert the non-standard expression closures syntax to standard ECMAScript syntax, you can add curly braces and return statements.

```js example-good
var x = function() { return 1; }

var obj = {
  count: function() { return 1; }
};
```

### Стандартный синтаксис с использованием функций со стрелками:

```js example-good
var x = () => 1;
```

### Стандартный синтаксис с использованием сокращённого синтаксиса метода

Замыкания выражений также можно найти с помощью getter'а и setter'а, например:

```js example-bad
var obj = {
  get x() 1,
  set x(v) this.v = v
};
```

With ES2015 [method definitions](/ru/docs/Web/JavaScript/Reference/Functions/Method_definitions), это может быть конвертированно в:

```js example-good
var obj = {
  get x() { return 1 },
  set x(v) { this.v = v }
};
```

## Смотрите также

- [Expression closures](/ru/docs/Web/JavaScript/Reference/Operators/Expression_closures) (Закрытие выражений)
- [Arrow functions](/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (Стрелочные функции)
- [Method definitions](/ru/docs/Web/JavaScript/Reference/Functions/Method_definitions) (Определение метода)

---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: 'return' statement outside of function (Edge)
SyntaxError: return not in function (Firefox)
SyntaxError: yield not in function (Firefox)
```

## Тип ошибки

{{jsxref("SyntaxError")}}.

## Что пошло не так?

Вызов оператора [`return`](/ru/docs/Web/JavaScript/Reference/Statements/return) или [`yield`](/ru/docs/Web/JavaScript/Reference/Operators/yield) был осуществлён вне [функции](/ru/docs/Web/JavaScript/Guide/Functions). Может, где-то пропущена фигурная скобка? Операторы `return` и `yield` не могут существовать вне функции, поскольку они завершают (или останавливают и возобновляют) её исполнение и указывают значение, возвращаемое в место, откуда она была вызвана.

## Примеры

```js example-bad
var cheer = function(score) {
  if (score === 147)
    return 'Максимум!';
  };
  if (score > 100) {
    return 'Столетие!';
  }
}

// SyntaxError: return not in function
```

На первый взгляд кажется, что фигурные скобки расставлены правильно, но в данном примере пропущена `{` после первого оператора `if`. Правильный вариант:

```js example-good
var cheer = function (score) {
  if (score === 147) {
    return "Максимум!";
  }
  if (score > 100) {
    return "Столетие!";
  }
};
```

## Смотрите также

- [`return`](/ru/docs/Web/JavaScript/Reference/Statements/return)
- [`yield`](/ru/docs/Web/JavaScript/Reference/Operators/yield)

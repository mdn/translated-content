---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
l10n:
  sourceCommit: bd401d0045851cd5c7c145c3acdeabe5062059f5
---

{{jsSidebar("Errors")}}

Исключения JavaScript «неожиданный токен» возникают, когда синтаксический анализатор не видит в заданной позиции распознаваемый им токен, поэтому он не может понять структуру программы. Это может быть даже из-за опечатки.

## Сообщение

```plain
SyntaxError: Unexpected token ';' (V8)
SyntaxError: Unexpected identifier 'x' (V8)
SyntaxError: Unexpected number (V8)
SyntaxError: Unexpected string (V8)
SyntaxError: Unexpected regular expression (V8)
SyntaxError: Unexpected template string (V8)

SyntaxError: unexpected token: identifier (Firefox)
SyntaxError: expected expression, got "x" (Firefox)
SyntaxError: expected property name, got "x" (Firefox)
SyntaxError: expected target, got "x" (Firefox)
SyntaxError: expected meta, got "x" (Firefox)
SyntaxError: expected rest argument name, got "x" (Firefox)
SyntaxError: expected closing parenthesis, got "x" (Firefox)
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

Вместо определённой конструкции языка было использовано что-то другое. Возможно, это просто опечатка.

## Примеры

### Ожидаемое выражение

Например, в цепочке выражений в конце не допускается использование запятых.

```js-nolint example-bad
for (let i = 0; i < 5,; ++i) {
  console.log(i);
}
// Uncaught SyntaxError: expected expression, got ';'
```

Правильным вариантом будет убрать запятую или добавить ещё одно выражение:

```js example-good
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
```

### Недостаточно скобок

Иногда можно потерять скобки при использовании `if`:

```js-nolint example-bad
function round(n, upperBound, lowerBound) {
  if (n > upperBound) || (n < lowerBound) { // Здесь не хватает скобок!
    throw new Error(`Число ${n} больше ${upperBound} или меньше ${lowerBound}`);
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
} // SyntaxError: expected expression, got '||'
```

На первый взгляд кажется, что скобки расставлены правильно, но обратите внимание, что `||` находится не в скобках. Необходимо заключить `||` в скобки:

```js-nolint example-good
function round(n, upperBound, lowerBound) {
  if ((n > upperBound) || (n < lowerBound)) {
    throw new Error(
      `Число ${n} больше ${upperBound} или меньше ${lowerBound}`,
    );
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
}
```

## Смотрите также

- {{jsxref("SyntaxError")}}

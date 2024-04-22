---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: expected expression, got "x"
SyntaxError: expected property name, got "x"
SyntaxError: expected target, got "x"
SyntaxError: expected rest argument name, got "x"
SyntaxError: expected closing parenthesis, got "x"
SyntaxError: expected '=>' after argument list, got "x"
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

Вместо определённой конструкции языка было использовано что-то другое. Возможно, просто опечатка.

## Примеры

### Ожидаемое выражение

Недопустимыми являются, к примеру, запятые после элементов цепочки выражений.

```js example-bad
for (let i = 0; i < 5,; ++i) {
  console.log(i);
}
// SyntaxError: expected expression, got ';'
```

Правильным вариантом будет убрать запятую или добавить ещё одно выражение:

```js example-good
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
```

### Недостаточно скобок

Иногда можно потерять скобки при использовании `if`:

```js example-bad
function round(n, upperBound, lowerBound){
  if(n > upperBound) || (n < lowerBound){
    throw 'Число ' + String(n) + ' больше, чем ' + String(upperBound) + ', или меньше, чем ' + String(lowerBound);
  }else if(n < ((upperBound + lowerBound)/2)){
    return lowerBound;
  }else{
    return upperBound;
  }
} // SyntaxError: expected expression, got '||'
```

На первый взгляд кажется, что скобки расставлены правильно, но обратите внимание, что `||` находится не в скобках. Необходимо заключить `||` в скобки:

```js example-good
function round(n, upperBound, lowerBound) {
  if (n > upperBound || n < lowerBound) {
    throw (
      "Число " +
      String(n) +
      " больше, чем " +
      String(upperBound) +
      ", или меньше, чем " +
      String(lowerBound)
    );
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
}
```

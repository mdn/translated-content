---
title: return
slug: Web/JavaScript/Reference/Statements/return
---

{{jsSidebar("Statements")}}

Оператор **`return`** завершает выполнение текущей функции и возвращает её значение.

{{EmbedInteractiveExample("pages/js/statement-return.html")}}

## Синтаксис

```
return [[выражение]];
```

- `выражение`
  - : Выражение, значение которого будет возвращено. Если не указано, вместо него возвращается `undefined`.

## Описание

При вызове оператора `return` в функции её выполнение прекращается. Указанное значение возвращается в место вызова функции. Например, приведённая ниже функция возвращает возведённое в квадрат значение своего аргумента, `x` (где `x` – это число):

```js
function square(x) {
  return x * x;
}
var demo = square(3);
// значение demo будет равняться 9
```

Если возвращаемое значение не указано, вместо него возвращается `undefined`.

Следующие выражения всегда прерывают выполнение функции:

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

### Автоматическая расстановка точек с запятыми

На выражение `return` влияет [автоматическая расстановка точек с запятыми (ASI)](/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion). Разрыв строки не допускается между ключевым словом `return` и выражением.

```js-nolint
return
a + b;
```

трансформируется ASI в:

```js
return;
a + b;
```

В консоли появится предупреждение "unreachable code after return statement".

> **Примечание:** Начиная с Gecko 40, предупреждение в консоли появляется, если обнаружен недостижимый код после `return`.

Для того, чтобы избежать данной проблемы (предотвратить ASI), можно использовать скобки:

```js
return (
  a + b;
);
```

## Примеры

### Прерывание функции

Функция немедленно останавливается в точке, где вызывается `return`.

```js
function counter() {
  for (var count = 1; ; count++) {
    // бесконечный цикл
    console.log(count + "A"); // до 5
    if (count === 5) {
      return;
    }
    console.log(count + "B"); // до 4
  }
  console.log(count + "C"); // никогда не появляется
}

counter();

// Выводит:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
```

### Возвращение функции

Смотрите также статью о [замыканиях](/ru/docs/Web/JavaScript/Closures).

```js
function magic(x) {
  return function calc(x) {
    return x * 42;
  };
}

var answer = magic();
answer(1337); // 56154
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Функции](/ru/docs/Web/JavaScript/Reference/Functions)
- [Замыкания](/ru/docs/Web/JavaScript/Closures)

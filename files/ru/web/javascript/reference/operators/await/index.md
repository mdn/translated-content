---
title: await
slug: Web/JavaScript/Reference/Operators/await
---

{{jsSidebar("Operators")}}

Оператор `await` используется для ожидания окончания {{jsxref("Promise")}}. Может быть использован только внутри {{jsxref("Statements/async_function", "async function")}} или на верхнем уровне [модуля](/ru/docs/Web/JavaScript/Guide/Modules).

## Синтаксис

```
[rv] = await expression;
```

- `expression`
  - : {{jsxref("Promise")}} или любое другое значение для ожидания разрешения.
- `rv`
  - : Возвращает полученное из `Promise` значение, либо само значение, если оно не является `Promise.`

## Описание

Оператор `await` заставляет функцию, объявленную с использованием оператора `async`, ждать выполнения `Promise` и продолжать выполнение после возвращения `Promise` значения. Впоследствии возвращает полученное из `Promise` значение. Если типом значения, к которому был применён оператор `await`, является не `Promise`, то значение приводится к успешно выполненному `Promise`.

Если `Promise` отклоняется, то `await` генерирует исключение с отклонённым значением.

## Примеры

`await` ожидает разрешения `Promise` и возвращает полученное значение.

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```

Если типом значения является не `Promise`, значение преобразуется к успешно выполненному `Promise`.

```js
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

Если `Promise` отклонён, то выбрасывается исключение с переданным значением.

```js
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
```

Обработка отклонённого `Promise` без `try/catch` блока.

```js
var response = await promisedFunction().catch((err) => {
  console.log(err);
});
// response получит значение undefined, если Promise будет отклонён
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## See also

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object

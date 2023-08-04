---
title: Истинноподобное значение
slug: Glossary/Truthy
---

В {{Glossary("JavaScript")}} **истинноподобное (truthy)** значение — это значение, рассматривающиеся как `true` в {{Glossary("Boolean", "булевом")}} контексте. К истинноподобным значениям относятся все значения кроме {{Glossary("Falsy", "ложноподобных")}} значений. То есть все значения **истинноподобны** кроме `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` и `NaN`.

В булевых контекстах {{Glossary("JavaScript")}} использует механизм {{Glossary("Type_Coercion", "приведения типов")}}.

Примеры _истинноподобных_ значений в JavaScript (которые будут принудительно приведены к `true` в булевых контекстах, выполняя таким образом содержимое блока `if`):

```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

### Оператор логического И, &&

Если первый операнд истинноподобен, то [оператор логического И](/ru/docs/Web/JavaScript/Reference/Operators/Logical_AND) вернёт второй операнд:

```js
true && "dog"
// возвращает "dog"

[] && "dog"
// возвращает "dog"
```

## Смотрите также

- {{Glossary("Falsy")}}
- {{Glossary("Type_Coercion", "Приведение типов")}}
- {{Glossary("Boolean")}}

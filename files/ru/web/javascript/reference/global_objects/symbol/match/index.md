---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
---

{{JSRef}}

**`Symbol.match`** — известный символ, определяющий соответствие строки регулярному выражению. Этот метод вызывается функцией {{jsxref("String.prototype.match()")}}.

{{js_property_attributes(0,0,0)}}

## Описание

Данный метод также используется для того, чтобы определить, обладает ли объект поведением регулярного выражения. Например, методы {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} и {{jsxref("String.prototype.includes()")}} проверяют, является ли первый аргумент регулярным выражением, и бросают {{jsxref("TypeError")}}, если это так. Соответственно, если символ `match` установлен в `false` (или имеет {{Glossary("Falsy", "ложное")}} значение) — это говорит о том, что объект не предназначен для использования в качестве регулярного выражения.

## Примеры

### Блокировка проверки i`sRegExp`

Следующий код выбросит {{jsxref("TypeError")}}:

```js
"/bar/".startsWith(/bar/); // Бросает TypeError, так как /bar/ является
// регулярным выражением и Symbol.match не изменён.
```

Несмотря на это, если вы зададите свойству `Symbol.match` значение `false`, проверка `isRegExp` (которая использует свойство `match`) покажет, что объект не является регулярным выражением — как следствие, методы `startsWith` и `endsWith` не станут бросать `TypeError`.

```js
var re = /foo/;
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false
```

## Спецификации

| Спецификация                                             | Статус           | Комментарий              |
| -------------------------------------------------------- | ---------------- | ------------------------ |
| {{SpecName('ES6', '#sec-symbol.match', 'Symbol.match')}} | {{Spec2('ES6')}} | Изначальное определение. |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}

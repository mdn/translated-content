---
title: "URIError: malformed URI sequence"
slug: Web/JavaScript/Reference/Errors/Malformed_URI
---

{{jsSidebar("Errors")}}

## Сообщение

```
URIError: malformed URI sequence (Firefox)
URIError: URI malformed (Chrome)
```

## Тип ошибки

{{jsxref("URIError")}}

## Что пошло не так?

Декодирование или кодирование URI не было успешным. Аргумент переданный функциям {{jsxref("decodeURI")}}, {{jsxref("encodeURI")}}, {{jsxref("encodeURIComponent")}}, или {{jsxref("decodeURIComponent")}} был недопустимым, из-за этого функция не смогла выполнить кодирование или декодирование.

## Примеры

### Кодирование

Кодирование заменяет каждое вхождение конкретного символа одним, двумя, тремя или четырьмя управляющими последовательностями, представленными стандартом UTF-8. {{jsxref("URIError")}} возникнет, при попытке кодирования суррогата, не являющегося частью high-low пары, например:

```js example-bad
encodeURI("\uD800");
// "URIError: malformed URI sequence"

encodeURI("\uDFFF");
// "URIError: malformed URI sequence"
```

Нормальная high-low пара. Например:

```js example-good
encodeURI("\uD800\uDFFF");
// "%F0%90%8F%BF"
```

### Декодирование

Декодирование заменяет каждую управляющую последовательность в закодированном URI компоненте символом, который она представляет. Если такого символа нет, возникнет ошибка:

```js example-bad
decodeURIComponent("%E0%A4%A");
// "URIError: malformed URI sequence"
```

Правильный вариант обычно выглядит так:

```js example-good
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

## Смотрите также

- {{jsxref("URIError")}}
- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}

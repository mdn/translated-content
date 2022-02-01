---
title: URL.hash
slug: Web/API/URL/hash
tags:
  - API
  - URL API
  - URL
  - Property
  - Reference
translation_of: Web/API/URL/hash
---
{{ APIRef("URL API") }}

Свойство **`hash`** интерфейса {{domxref("URL")}} — это строка типа {{domxref("USVString")}},
содержащая символ `'#'`, после которого идет идентификатор фрагмента URL-адреса.

Фрагмент не [кодируется](/en-US/docs/Glossary/percent-encoding). Если URL-адрес не имеет
идентификатора фрагмента, то данное свойство содержит пустую строку — `""`.

{{AvailableInWorkers}}

## Синтаксис

```js
const string = url.hash
url.hash = newHash
```

### Значение

Строка типа {{domxref("USVString")}}.

## Примеры

```js
const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/href#Examples');
console.log(url.hash); // Выведет: '#Examples'
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("URL")}}, которому принадлежит это свойство.

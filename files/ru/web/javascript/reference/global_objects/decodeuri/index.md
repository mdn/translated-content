---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
---

{{jsSidebar("Objects")}}

Метод **`decodeURI()`** декодирует унифицированный идентификатор ресурса (URI), созданный при помощи метода {{jsxref("encodeURI")}} или другой подобной процедуры.

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

## Синтаксис

```
decodeURI(encodedURI)
```

### Параметры

- `encodedURI`
  - : Полный закодированный унифицированный идентификатор ресурса.

### Возвращаемое значение

Новая строка, представляющая собой незакодированную версию данного унифицированного идентификатора ресурса.

### Exceptions

Throws an {{jsxref("URIError")}} ("malformed URI sequence") exception when `encodedURI` contains invalid character sequences.

## Описание

Заменяет каждую управляющую последовательность в закодированном URI соответствующим символом. Не декодирует последовательности, которые невозможно сформировать с помощью {{jsxref("encodeURI")}}. Символ "#" декодированию не подвергается.

## Примеры

### Декодирование кириллического URL

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### Catching errors

```
try {
  var a = decodeURI('%E0%A4%A');
} catch(e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("decodeURIComponent")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}

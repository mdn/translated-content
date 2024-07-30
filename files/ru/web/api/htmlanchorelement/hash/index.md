---
title: "HTMLAnchorElement: свойство hash"
slug: Web/API/HTMLAnchorElement/hash
l10n:
  sourceCommit: 3e301467a02808e9fc488d7012f1f49eb66a5980
---

{{ APIRef("HTML DOM") }}

Свойство **`HTMLHyperlinkElementUtils.hash`** возвращает строку, содержащую `'#'` с последующим якорем URL.

Якорь URL [закодирован](https://en.wikipedia.org/wiki/Percent-encoding). Если в URL нет якоря, это свойство содержит пустую строку (`""`).

## Значение

Строка.

## Примеры

### Получение якоря из ссылки

При наличии такой ссылки

```html
<a id="myAnchor" href="/ru/docs/Web/API/HTMLAnchorElement/hash#примеры">
  Примеры
</a>
```

можно получить из неё якорь таким образом:

```js
const anchor = document.getElementById("myAnchor");
anchor.hash; // '#примеры'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("HTMLAnchorElement")}}.

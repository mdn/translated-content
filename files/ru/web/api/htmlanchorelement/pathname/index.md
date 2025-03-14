---
title: "HTMLAnchorElement: свойство pathname"
slug: Web/API/HTMLAnchorElement/pathname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Свойство **`HTMLAnchorElement.pathname`** — это строка, начинающаяся с символа`'/'`, за которым следует путь к ресурсу, не включающий параметры запроса и якорь. Если пути нет, то будет возвращена пустая строка.

## Значение

Строка.

## Примеры

```js
// Документ содержит элемент <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement">
const anchor = document.getElementById("myAnchor");
anchor.pathname; // вернёт '/en-US/docs/HTMLAnchorElement'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("HTMLAnchorElement")}}.

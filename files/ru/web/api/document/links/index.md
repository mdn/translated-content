---
title: Document.links
slug: Web/API/Document/links
---

{{ APIRef("DOM") }}

Возвращает объект всех элементов {{HTMLElement("area")}} и {{HTMLElement("a")}}, присутствующих на странице с значением атрибута [href](/ru/docs/Web/API/URLUtils.href).

## Синтаксис

```
nodeList = document.links
```

### Значение

{{domxref("HTMLCollection")}}.

## Пример

```js
var links = document.links;
for (var i = 0; i < links.length; i++) {
  var linkHref = document.createTextNode(links[i].href);
  var lineBreak = document.createElement("br");
  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

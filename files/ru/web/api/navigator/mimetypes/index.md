---
title: "Navigator: свойство mimeTypes"
slug: Web/API/Navigator/mimeTypes
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

Возвращает объект {{domxref("MimeTypeArray")}}, который содержит список объектов {{domxref("MimeType")}}, представляющий собой MIME-типы, известные браузеру.

## Синтаксис

```
mimeTypes = navigator.mimeTypes;
```

`mimeTypes` - объект `MimeTypeArray,` который имеет свойство `length`, а также методы `item(index)` и `namedItem(name)`.

## Примеры

```js
function isJavaPresent() {
  return "application/x-java-applet" in navigator.mimeTypes;
}

function getJavaPluginDescription() {
  var mimetype = navigator.mimeTypes["application/x-java-applet"];
  if (mimetype === undefined) {
    // no Java plugin present
    return undefined;
  }
  return mimetype.enabledPlugin.description;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

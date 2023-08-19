---
title: document.images
slug: Web/API/Document/images
---

{{ ApiRef() }}

### Кратко об объекте

`document.images` возвращает коллекцию [изображений](/ru/Web/API/HTMLImageElement) в текущем HTML документе.

### Синтаксис

```js
var htmlCollection = document.images;
```

### Пример

```js
var images = document.images;

for (var i = 0; i < images.length; i++) {
  if (images[i].src == "banner.gif") {
    alert("Баннер найден!");
  }
}
```

### Примечания

`document.images.length` — возвращает количество изображений на странице.

`document.images` является частью DOM HTML, и работает только в HTML документах.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

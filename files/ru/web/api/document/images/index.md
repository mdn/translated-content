---
title: document.images
slug: Web/API/Document/images
tags:
  - DOM
  - JavaScript
translation_of: Web/API/Document/images
original_slug: DOM/document.images
---
{{ ApiRef() }}

### Кратко об объекте

`document.images` возвращает коллекцию [изображений](/ru/Web/API/HTMLImageElement) в текущем HTML документе.

### Синтаксис

```
var htmlCollection = document.images;
```

### Пример

```
var images = document.images;

for(var i = 0; i < images.length; i++) {
    if(images[i].src == "banner.gif") {
      alert('Баннер найден!');
    };
};
```

### Примечания

`document.images.length` — возвращает количество изображений на странице.

`document.images` является частью DOM HTML, и работает только в HTML документах.

### Спецификация

[DOM Level 2 HTML: HTMLDocument.images](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-90379117)

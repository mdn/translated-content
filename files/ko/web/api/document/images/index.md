---
title: Document.images
slug: Web/API/Document/images
---

{{APIRef("DOM")}}

`document.images` 는 현재 HTML document 내부의 [images](/ko/docs/DOM/Image) collection을 반환합니다.

## Syntax

```js
var htmlCollection = document.images;
```

## Example

```js
var ilist = document.images;

for (var i = 0; i < ilist.length; i++) {
  if (ilist[i].src == "banner.gif") {
    // found the banner
  }
}
```

## Notes

`document.images.length` – 페이지의 이미지 갯수를 반환하는 속성

`document.images` 는 DOM HTML의 part이며, HTML documents 에서만 지원된다.

## 명세서

{{Specifications}}

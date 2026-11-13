---
title: Document.referrer
slug: Web/API/Document/referrer
---

{{APIRef("DOM")}}링크를 통해 현재 페이지로 이동 시킨, 전 페이지의 URI 정보를 반환.

## Syntax

```js
string = document.referrer;
```

## Notes

페이지로 바로 접근하였을 경우 이 값은 빈 문자열을 반환함.(링크를 통해서 온것이 아닌, 예를 들면, 북마크를 통해서 이동했을 경우). 문자열만을 반환하기 때문에, 참조 페이지(referring page)에 대한 DOM 액세스가 제공되지 않음.

## Specification

- [DOM Level 2: referrer](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-95229140)

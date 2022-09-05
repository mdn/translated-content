---
title: visibilitychange
slug: Web/API/Document/visibilitychange_event
---
{{APIRef}}

`visibilitychange` 이벤트는 브라우저 탭의 컨텐츠가 visible 또는 hidden 상태로 변화할 때 발생된다.

| Bubbles                | Yes                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Cancelable             | No                                                                                   |
| Interface              | {{domxref("event")}}                                                         |
| Event handler property | {{domxref("Document.onvisibilitychange", "onvisibilitychange")}} |

## 예제

```js
document.addEventListener("visibilitychange", function() {
  console.log( document.visibilityState );
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Page Visibility API](/ko/docs/Web/API/Page_Visibility_API)
- [Using the Page Visibility API](/ko/docs/DOM/Using_the_Page_Visibility_API)
- {{domxref("Document.visibilityState")}}

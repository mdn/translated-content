---
title: document.anchors
slug: Web/API/Document/anchors
---

{{APIRef("DOM")}} {{deprecated_header()}}

{{domxref("Document")}} 인터페이스의 **`anchors`** 읽기 전용 속성은 문서 내의 모든 앵커 목록을 반환합니다.

## 예제

```js
if (document.anchors.length >= 5) {
  dump("dump found too many anchors");
  window.location = "http://www.google.com";
}
```

## 알아두기

이전 버전과의 호환성을 제공하기 위해, 반환된 anchor들의 목록은 `name` 속성(attribute)으로 생성된 anchors들만 포함하고 `id` 속성(attribute)으로 생성된 것들은 포함하지 않습니다.

## 브라우저 호환성

{{Compat}}

---
title: DOMRect()
slug: Web/API/DOMRect/DOMRect
tags:
  - API
  - Constructor
  - DOM Reference
  - DOMRect
  - Experimental
  - Geometry
  - Reference
browser-compat: api.DOMRect.DOMRect
---
{{APIRef("DOM")}}{{ SeeCompatTable() }}

**`DOMRect()`** 생성자는 새로운 {{domxref("DOMRect")}} 객체를 생성합니다.

## 구문

```js
var myDOMRect = new DOMRect(x, y, width, height);
```

### 파라미터

- x
  - : `DOMRect`의 오리진 `x`좌표.
- y
  - : `DOMRect`의 오리진 `y`좌표.
- width
  - : `DOMRect`의 너비.
- height
  - : `DOMRect`의 높이.

## 예제

새로운 `DOMRect`를 생성하려면 다음과 같이 한 줄의 코드를 실행하면 됩니다.

```js
myDOMRect = new DOMRect(0,0,100,100);
// 콘솔에서 'myDOMRect'를 실행하면 다음을 반환합니다
// DOMRect { x: 0, y: 0, width: 100, height: 100, top: 0, right: 100, bottom: 100, left: 0 }
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}

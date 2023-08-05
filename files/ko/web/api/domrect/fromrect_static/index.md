---
title: DOMRect.fromRect()
slug: Web/API/DOMRect/fromRect_static
---

{{APIRef("Geometry Interfaces")}}

{{domxref("DOMRect")}} 객체의 **`fromRect()`** 정적 메서드는 주어진 좌표와 크기를 가진 새로운 `DOMRect` 객체를 반환합니다.

## 구문

```js
DOMRect.fromRect(rectangle);
```

### 매개변수

- `rectangle` {{optional_inline}}

  - : 직사각형의 위치와 크기를 지정하는 객체입니다. 모든 속성의 기본 값은 `0`입니다. 포함할 수 있는 속성은 다음과 같습니다.

    - `x`: 직사각형 왼쪽 모서리의 좌표입니다.
    - `y`: 직사각형 위쪽 모서리의 좌표입니다.
    - `width`: 직사각형의 너비입니다.
    - `height`: 직사각형의 높이입니다.

### 반환 값

{{domxref("DOMRect")}} 인스턴스.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

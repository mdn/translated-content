---
title: DOMRect
slug: Web/API/DOMRect
tags:
  - API
  - DOM
  - DOMRect
  - Geometry
  - Geometry Interfaces
  - Interface
  - Rectangle
  - Reference
browser-compat: api.DOMRect
translation_of: Web/API/DOMRect
---
{{APIRef("Geometry Interfaces")}}

**`DOMRect`** 인터페이스는 직사각형의 크기와 위치를 나타냅니다.

`DOMRect`가 나타내는 사각형의 유형은 `DOMRect`를 반환한 메서드나 속성이 지정합니다. 예를 들어 WebVR API의 {{domxref("VREyeParameters.renderRect")}}는, 헤드 마운트 디스플레이에서 한쪽 눈의 뷰포트가 [캔버스](/ko/docs/Web/API/HTMLCanvasElement)의 어디에 위치하는지 나타냅니다.

부모인 {{domxref("DOMRectReadOnly")}}을 상속합니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("DOMRect.DOMRect","DOMRect()")}}
  - : 새로운 `DOMRect` 객체를 생성합니다.

## 속성

부모인 {{domxref("DOMRectReadOnly")}}의 속성을 상속합니다. 읽기 전용 속성이 아니라는 차이점이 있습니다.

- {{domxref("DOMRectReadOnly.x")}}
  - : `DOMRect` 원점의 X 좌표입니다. 원점은 보통 직사각형의 왼쪽 상단 꼭지점입니다.
- {{domxref("DOMRectReadOnly.y")}}
  - : `DOMRect` 원점의 Y 좌표입니다. 원점은 보통 직사각형의 왼쪽 상단 꼭지점입니다.
- {{domxref("DOMRectReadOnly.width")}}
  - : `DOMRect`의 너비입니다.
- {{domxref("DOMRectReadOnly.height")}}
  - : `DOMRect`의 높이입니다.
- {{domxref("DOMRectReadOnly.top")}}
  - : `DOMRect` 위쪽 모서리의 Y 좌표입니다. `y` 또는, `height`가 음수인 경우, `y + height`와 같은 값입니다.
- {{domxref("DOMRectReadOnly.right")}}
  - : `DOMRect` 오른쪽 모서리의 X 좌표입니다. `x` 또는, `width`가 음수인 경우, `x + height`와 같은 값입니다.
- {{domxref("DOMRectReadOnly.bottom")}}
  - : `DOMRect` 아래쪽 모서리의 Y 좌표입니다. `y + height` 또는, `height`가 음수인 경우, `y`와 같은 값입니다.
- {{domxref("DOMRectReadOnly.left")}}
  - : `DOMRect` 왼쪽 모서리의 X 좌표입니다. `x + width` 또는, `width`가 음수인 경우, `x`와 같은 값입니다.

## 메서드

부모인 {{domxref("DOMRectReadOnly")}}의 메서드를 상속합니다.

## 정적 메서드

- {{domxref("DOMRectReadOnly.fromRect()")}}
  - : 주어진 위치와 면적을 갖는 새로운 `DOMRect` 객체를 생성합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("DOMPoint")}}

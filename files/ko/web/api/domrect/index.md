---
title: DOMRect
slug: Web/API/DOMRect
tags:
  - API
  - DOM
  - DOM Reference
  - DOMRect
  - Geometry
  - Geometry Interfaces
  - Interface
  - Rectangle
  - Reference
browser-compat: api.DOMRect
---
{{draft}}{{APIRef("Geometry Interfaces")}}

**`DOMRect`**는 사각형의 크기와 위치를 나타냅니다.

`DOMRect`가 표현하는 박스의 타입은 이를 반환한 메서드나 속성에 의해 정해집니다. 예를 들어, WebVR API의 {{domxref("VREyeParameters.renderRect")}}는 렌더링되어야 할 헤드 마운트 디스플레이의 한쪽 눈에 대한 비주얼을 [canvas](/ko/docs/Web/API/HTMLCanvasElement)의 뷰포트로 지정합니다.

부모인 {{domxref("DOMRectReadOnly")}}로부터 상속받습니다.

{{InheritanceDiagram}}

## 생성자

- {{domxref("DOMRect.DOMRect","DOMRect()")}}
  - : 새로운 `DOMRect` 객체를 생성합니다.

## 속성

_`DOMRect`는 부모인 {{domxref("DOMRectReadOnly")}}로부터 상속받습니다. 차이점은 DomRect가 더 이상 읽기 전용이 아니라는 것입니다._

- {{domxref("DOMRectReadOnly.x")}}
  - : `DOMRect`의 오리진(보통 사각형의 왼쪽 상단 코너) x 좌표.
- {{domxref("DOMRectReadOnly.y")}}
  - : `DOMRect`의 오리진(보통 사각형의 왼쪽 상단 코너) y 좌표.
- {{domxref("DOMRectReadOnly.width")}}
  - : `DOMRect`의 너비.
- {{domxref("DOMRectReadOnly.height")}}
  - : `DOMRect`의 높이.
- {{domxref("DOMRectReadOnly.top")}}
  - : `DOMRect`의 상단 좌표를 반환합니다(`height`가 음수라면 `y`, 또는 `y + height`와 같은 값을 갖습니다).
- {{domxref("DOMRectReadOnly.right")}}
  - : `DOMRect`의 오른쪽 좌표를 반환합니다(`width`가 음수라면 `x + width`, 또는 `x`와 같은 값을 갖습니다).
- {{domxref("DOMRectReadOnly.bottom")}}
  - : `DOMRect`의 하단 좌표를 반환합니다(`height`가 음수라면 `y + height`, 또는 `y`와 같은 값을 갖습니다).
- {{domxref("DOMRectReadOnly.left")}}
  - : `DOMRect`의 왼쪽 좌표를 반환합니다(`width`가 음수라면 `x`, 또는 `x + width`와 같은 값을 갖습니다).

## 메서드

_`DOMRect`는 부모인 {{domxref("DOMRectReadOnly")}}로부터 메서드를 상속받습니다._

## 정적 메서드

- {{domxref("DOMRectReadOnly.fromRect()")}}
  - : 주어진 위치와 면적을 갖는 새로운 `DOMRect` 객체를 생성합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("DOMPoint")}}

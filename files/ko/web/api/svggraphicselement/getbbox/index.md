---
title: SVGGraphicsElement.getBBox()
slug: Web/API/SVGGraphicsElement/getBBox
tags:
  - API
  - Method
  - Reference
  - SVG
  - SVG DOM
  - SVGGraphicsElement
browser-compat: api.SVGGraphicsElement.getBBox
---
{{APIRef}}

**`SVGGraphicsElement.getBBox()`** 메서드는 객체가 들어가는 가장 작은 직사각형의 좌표를 알아냅니다. 반환되는 좌표는 (목표 요소에 포함된 모든 요소의 모든 기하 특성의 적용 이후의) 현재 SVG 공간에 관련되어 있습니다.

> **참고:** `getBBox()` 는 요소가 아직 렌더링되지 않은 경우일지라도 
> 반드시 메서드가 호출된 시점에서의 실제 바운딩 박스를 반환해야 합니다.
> 이 메서드는 또한 요소나 부모 요소에 적용된 어떠한 변형도 고려하지 않습니다.

> **참고:** `getBBox` 는 {{domxref("Element.getBoundingClientRect()", "getBoundingClientRect()")}}와
> 다른 값을 반환하는데, {{domxref("Element.getBoundingClientRect()", "getBoundingClientRect()")}}는
> 뷰포트에 관련된 값을 반환합니다.

## 구문

```js
let bboxRect = object.getBBox();
```

### 매개변수

- `Options` {{experimental_inline}} {{optional_inline}}

  - : 요소의 어떤 부분들이 바운딩 박스에 포함되는지를 제어하는 데 쓰이는 옵션 dictionary. 가능한 옵션은 아래와 같습니다.

    - `fill`
      - : fill이 바운딩 박스에 포함되어야 함을 나타내는 boolean 값. 기본 값은 `true` 입니다.
    - `stroke`
      - : stroke가 바운딩 박스에 포함되어야 함을 나타내는 boolean 값. 기본 값은 `false` 입니다.
    - `markers`
      - : markers가 바운딩 박스에 포함되어야 함을 나타내는 boolean 값. 기본 값은 `false` 입니다.
    - `clipped`
      - : 바운딩 박스가 클리핑되어야 함을 나타내는 boolean 값. 기본 값은 `false` 입니다.

### 반환 값

반환 값은 {{domxref("SVGRect")}} 객체인데, 이 객체는 바운딩 박스를 정의합니다. 이 값은 요소 혹은 부모 요소에 적용된 어떠한 변형 특성과도 관계없습니다.

## 예제

### HTML

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <g id="group_text_1">
        <text x="5" y="16" transform="scale(2, 2)">Hello World!</text>
        <text x="8" y="32" transform="translate(0 20) scale(1.25 1)">Hello World Again!</text>
    </g>
    <!-- 녹색으로 BBox를 보여줍니다 -->
    <rect id="rect_1" stroke="#00ff00" stroke-width="3" fill="none"> </rect>
    <!-- 적색으로 BoundingClientRect를 보여줍니다 -->
    <rect id="rect_2" stroke="#ff0000" stroke-width="3" fill="none"></rect>
</svg>
```

### JavaScript

```js
var rectBBox = document.querySelector('#rect_1');
var rectBoundingClientRect = document.querySelector('#rect_2');
var groupElement = document.querySelector('#group_text_1');

var bboxGroup = groupElement.getBBox();
rectBBox.setAttribute('x', bboxGroup.x);
rectBBox.setAttribute('y', bboxGroup.y);
rectBBox.setAttribute('width', bboxGroup.width);
rectBBox.setAttribute('height', bboxGroup.height);

var boundingClientRectGroup = groupElement.getBoundingClientRect();
rectBoundingClientRect.setAttribute('x', boundingClientRectGroup.x);
rectBoundingClientRect.setAttribute('y', boundingClientRectGroup.y);
rectBoundingClientRect.setAttribute('width', boundingClientRectGroup.width);
rectBoundingClientRect.setAttribute('height', boundingClientRectGroup.height);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [SVG Primer 내의 getBBox](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox)

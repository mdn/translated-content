---
title: paint-order
slug: Web/CSS/paint-order
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`paint-order`** 속성은 텍스트 및 모양의 채움 색과 테두리(마커 포함)를 그리는 순서를 지정합니다.

## 구문

```css
/* 일반 */
paint-order: normal;

/* 단일 값 */
paint-order: stroke; /* draw the stroke first, then fill and markers */
paint-order: markers; /* draw the markers first, then fill and stroke */

/* 다중 값 */
paint-order: stroke fill; /* draw the stroke first, then the fill, then the markers */
paint-order: markers stroke fill; /* draw markers, then stroke, then fill */
```

아무것도 지정하지 않았을 때의 기본값은 `fill`, `stroke`, `markers`입니다.

하나의 값만 지정하면 그 값을 제일 먼저 그린 후, 기본값의 순서에 따라 나머지를 그립니다. 두 개를 지정하면 나머지 하나를 맨 나중에 그립니다.

> **참고:** 마커의 경우 `marker-*` 속성([`marker-start`](/ko/docs/Web/SVG/Attribute/marker-start) 등)과 [`<marker>`](/ko/docs/Web/SVG/Element/marker) 요소를 사용하는 SVG 모양의 경우에만 올바릅니다. HTML 텍스트는 이에 해당하지 않으므로 `stroke`와 `fill`의 순서만 정할 수 있습니다.

### 값

- `normal`
  - : 일반적인 그리기 순서를 사용합니다.
- `stroke`,
  `fill`,
  `markers`
  - : 일부 항목 또는 모든 항목의 그리기 순서를 지정합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 테두리와 채움 색 순서 바꾸기

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <text x="10" y="75">stroke in front</text>
  <text x="10" y="150" class="stroke-behind">stroke behind</text>
</svg>
```

#### CSS

```css
text {
  font-family: sans-serif;
  font-size: 50px;
  font-weight: bold;
  fill: black;
  stroke: red;
  stroke-width: 4px;
}

.stroke-behind {
  paint-order: stroke fill;
}
```

#### 결과

{{EmbedLiveSample("테두리와_채움_색_순서_바꾸기", "100%", 165)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

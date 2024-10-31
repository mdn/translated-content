---
title: stop-color
slug: Web/CSS/stop-color
l10n:
  sourceCommit: 8ad43cb18baadffa72a32ba8b4524f09d611f078
---

{{CSSRef}}

**`stop-color`** [CSS](/ko/docs/Web/CSS) 속성은 그라디언트 내부에서 SVG {{SVGElement("stop")}} 요소에 어떤 색상이 쓰일지를 정의합니다. 이 속성이 존재한다면 요소의 {{SVGAttr("stop-color")}} 속성을 덮어쓰게 됩니다.

> [!NOTE] > `stop-color` 속성은 {{SVGElement("svg")}} 내 {{SVGElement('stop')}} 요소에만 적용됩니다. 이는 다른 SVG, HTML 혹은 의사 요소에 적용되지 않습니다.

## 구문

```css
/* <color> 값 */
stop-color: red;
stop-color: hsl(120deg 75% 25% / 60%);
stop-color: currentcolor;

/* 전역 값 */
stop-color: inherit;
stop-color: initial;
stop-color: revert;
stop-color: revert-layer;
stop-color: unset;
```

### 값

- {{cssxref("color_value", "&lt;color>")}}

  - : 채우기 색상입니다. 이는 유효한 모든 CSS {{cssxref("color_value", "&lt;color>")}} 값에 사용될 수 있습니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{csssyntax}}

## 예제

### SVG 그라디언트의 정지 색상 정의하기

이 예제는 `stop-color` 의 기본 사용법과 CSS `stop-color` 속성이 `stop-color` 의 특성보다 우선하는 방식에 대해 설명합니다.

#### HTML

여기 세 {{SVGElement("rect")}} 사각형 SVG와 세 {{SVGElement("linearGradient")}} 요소들이 있습니다. 각 그라디언트는 검은색에서부터 하얀색, 하얀색에서부터 회식으로 이루어진 네 개의 {{SVGElement("stop")}} 요소를 가집니다. 차이점은 `id` 값 뿐입니다.

```html
<svg viewBox="0 0 264 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient1">
      <stop offset="25%" stop-color="#000" />
      <stop offset="40%" stop-color="#fff" />
      <stop offset="60%" stop-color="#fff" />
      <stop offset="75%" stop-color="#333" />
    </linearGradient>
    <linearGradient id="myGradient2">
      <stop offset="25%" stop-color="#000" />
      <stop offset="40%" stop-color="#fff" />
      <stop offset="60%" stop-color="#fff" />
      <stop offset="75%" stop-color="#333" />
    </linearGradient>
    <linearGradient id="myGradient3">
      <stop offset="25%" stop-color="#000" />
      <stop offset="40%" stop-color="#fff" />
      <stop offset="60%" stop-color="#fff" />
      <stop offset="75%" stop-color="#333" />
    </linearGradient>
  </defs>
  <rect x="2" y="10" width="80" height="80" fill="url('#myGradient1')" />
  <rect x="92" y="10" width="80" height="80" fill="url('#myGradient2')" />
  <rect x="182" y="10" width="80" height="80" fill="url('#myGradient3')" />
</svg>
```

#### CSS

사각형의 외곽선에 {{cssxref("stroke")}}와 {{cssxref("stroke-width")}} 를 포함시킵니다. 각 그라디언트의 처음과 끝 정지 색상을 설정하고, `stop-color` 속성을 이용하여 각각의 `stop-color` 특성을 덮어씁니다. 다양한 CSS {{cssxref("color_value", "&lt;color>")}} 구문을 확인할 수 있습니다.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
rect {
  stroke: #333;
  stroke-width: 1px;
}

#myGradient1 {
  stop:first-of-type {
    stop-color: #66ccff;
  }
  stop:last-of-type {
    stop-color: #f4aab9;
  }
}
#myGradient2 {
  stop:first-of-type {
    stop-color: yellow;
  }
  stop:last-of-type {
    stop-color: purple;
  }
}
#myGradient3 {
  stop:first-of-type {
    stop-color: hsl(0deg 100% 50%);
  }
  stop:last-of-type {
    stop-color: hsl(20deg 100% 50%);
  }
}
```

#### 결과

{{EmbedLiveSample("Defining the color stops of SVG gradients", "300", "200")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- SVG {{SVGAttr("stop-color")}} 속성
- 프레젠테이션 속성: `stop-color`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, and {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} 데이터 타입

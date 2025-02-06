---
title: stroke-dasharray
slug: Web/SVG/Attribute/stroke-dasharray
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

**`stroke-dasharray`** 은 도형의 외곽선을 구성하는 점선과 간격의 패턴을 정의하는 특성입니다.

> [!NOTE]
> 특성을 나타내기 위해 `stroke-dasharray` 는 CSS 속성으로도 사용될 수 있습니다. 자세한 정보는 {{cssxref('stroke-dasharray')}} 를 확인하세요.

이 특성은 아래 SVG 요소와 함께 사용할 수 있습니다.

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('line')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## 예제

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 12" xmlns="http://www.w3.org/2000/svg">
  <style>
    line {
      stroke: black;
    }
  </style>
  <!-- 점선과 간격 모두 없습니다. -->
  <line x1="0" y1="1" x2="30" y2="1" />

  <!-- 점선과 간격이 같은 크기를 가집니다. -->
  <line x1="0" y1="3" x2="30" y2="3" stroke-dasharray="4" />

  <!-- 점선과 간격이 다른 크기를 가집니다. -->
  <line x1="0" y1="5" x2="30" y2="5" stroke-dasharray="4 1" />

  <!-- 점선과 간격이 다양한 크기의 홀수 개의 숫자값을 가집니다.  -->
  <line x1="0" y1="7" x2="30" y2="7" stroke-dasharray="4 1 2" />

  <!-- 점선과 간격이 다양한 크기의 짝수 개의 숫자값을 가집니다.  -->
  <line x1="0" y1="9" x2="30" y2="9" stroke-dasharray="4 1 2 3" />

  <!-- 점선이 간격을 두고 시작합니다. -->
  <line x1="0" y1="11" x2="30" y2="11" stroke-dasharray="0 4 0" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## 사용 일람

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">값</th>
      <td><code>none</code> | <code>&#x3C;dasharray></code></td>
    </tr>
    <tr>
      <th scope="row">기본 값</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">애니메이션 적용</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- \<dasharray>

  - : 점선과 간격의 길이를 지정하는 쉼표 혹은 공백은 [`<length>`](/ko/docs/Web/SVG/Content_type#length) 와 [`<percentage>`](/ko/docs/Web/SVG/Content_type#percentage)의 목록입니다.

    홀수 개의 값이 제공된다면 값 목록이 짝수 개의 값을 얻기 위해 반복됩니다. 그러므로 `5,3,2` 는 `5,3,2,5,3,2` 과 동일합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS {{cssxref("stroke-dasharray")}} 속성

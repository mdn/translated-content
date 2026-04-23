---
title: clip-path
slug: Web/SVG/Reference/Attribute/clip-path
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`clip-path`** 프레젠테이션 속성은 클리핑 경로를 정의하거나 관련된 요소와 연관짓습니다.

> [!NOTE]
> 프레젠테이션 속성으로서의 `clip-path` 는 CSS 속성에 해당하는 {{cssxref("clip-path")}} 도 가지고 있습니다. 만일 둘 다 지정된 경우, CSS 속성이 더 우선순위를 가집니다.

이 특성을 다음 SVG 요소와 함께 사용할 수 있습니다.

- {{SVGElement('a')}}
- {{SVGElement('circle')}}
- {{SVGElement('clipPath')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('g')}}
- {{SVGElement('image')}}
- {{SVGElement('line')}}
- {{SVGElement('marker')}}
- {{SVGElement('mask')}}
- {{SVGElement('path')}}
- {{SVGElement('pattern')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('symbol')}}
- {{SVGElement('text')}}
- {{SVGElement('use')}}

## 예제

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <clipPath id="myClip" clipPathUnits="objectBoundingBox">
    <circle cx=".5" cy=".5" r=".5" />
  </clipPath>

  <!-- 좌측 상단: 사용자 정의된 클리핑 경로를 적용합니다. -->
  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="url(#myClip)" />

  <!-- 우측 상단: fill-box 기하학에 CSS 기본 도형을 적용합니다. 이것은 clipPathUnits가 objectBoundingBox로 설정된 사용자 정의 클리핑 패스를 갖는 것과 동일합니다. -->
  <rect
    x="11"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() fill-box" />

  <!-- Bottom-left -->
  <rect
    x="1"
    y="11"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() stroke-box" />

  <!-- 우측 하단: view-box 기하학에 CSS 기본 도형을 적용합니다. 이것은 clipPathUnits가 userSpaceOnUse로 설정된 사용자 정의 클리핑 패스를 갖는 것과 동일합니다. -->
  <rect
    x="11"
    y="11"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() view-box" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## 사용 일람

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{CSSXref("url_value", "&lt;url&gt;")}} | [ {{cssxref('basic-shape')}} ||
        <code>&#x3C;geometry-box></code> ] | <code>none</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- \<geometry-box>
  - {{cssxref('basic-shape')}} 이 요소에 어떻게 적용되는지에 대한 추가 정보입니다. `fill-box` 는 객체 바운딩 박스를 사용합니다. `stroke-box` 는 스트로크로 확장된 객체 바운딩 박스를 사용합니다. `view-box` 는 가장 가까운 SVG 뷰포트를 참조 상자로 사용합니다.

> [!NOTE]
> clip-path 구문에 대해 더 자세한 정보를 알고 싶다면 CSS 속성 {{cssxref('clip-path')}} 참고 페이지를 확인하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS {{cssxref("clip-path")}} 속성

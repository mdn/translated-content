---
title: stroke-linejoin
slug: Web/SVG/Reference/Attribute/stroke-linejoin
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`stroke-linejoin`** 특성은 경로에 스트로크를 접할 때 모서리에 사용될 모양을 정의합니다.

> [!NOTE]
> 표현 특성으로써의 `stroke-linejoin` 는 이에 상응하는 CSS 속성이 {{cssxref("stroke-linejoin")}} 존재합니다. 두 특성이 모두 정의되어 있다면 CSS 속성이 우선됩니다.

You can use this attribute with the following SVG elements:

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
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
<svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
  <!--
  상단 좌측 경로 :
  "miter" 값의 효과
  -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!--
  중앙 경로:
  "round" 값의 효과
  -->
  <path
    d="M7,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
    상단 우측 경로:
  Upper right path:
  "bevel" 값의 효과
  -->
  <path
    d="M13,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  Bottom left path:
  하단 죄측 경로:
  "miter" 값이 지원되지 않을 때의 폴백으로써 "miter-clip" 값의 효과 
  -->
  <path
    d="M3,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!--
    하단 우측 경로:
  Bottom right path:
  "miter" 값이 지원되지 않을 때의 폴백으로써 "arcs" 값의 효과
  -->
  <path
    d="M9,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
    다음 분홍색의 선은 각 스트로크 경로의 위치를 강조합니다.
  -->
  <g id="highlight">
    <path
      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5.5" r="0.05" fill="pink" />
  </g>
  <use href="#highlight" x="6" />
  <use href="#highlight" x="12" />
  <use href="#highlight" x="2" y="6" />
  <use href="#highlight" x="8" y="6" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 400)}}

## 사용 맥락

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">값</th>
      <td>
        <code>arcs</code> | <code>bevel</code> | <code>miter</code> |
        <code>miter-clip</code> | <code>round</code>
      </td>
    </tr>
    <tr>
      <th scope="row">기본 값</th>
      <td><code>miter</code></td>
    </tr>
    <tr>
      <th scope="row">애니메이션 가능</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

### arcs

> [!NOTE]
>
> > [!NOTE] > `arcs` 값은 폭넓게 지원되고 있지는 않습니다.

`arcs` 값은 경로 세그먼트를 연결할 때 호 모양의 모서리를 사용한다는 것을 나타냅니다. 호 모양은 연결점에서 스트로크의 외부 가장자리를 연결점의 외부 가장자리와 같은 곡률을 가진 호로 연장하여 형성됩니다.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- "arcs" 값의 효과 -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  다음 분홍색의 선은 각 스트로크 경로의 위치를 강조합니다.
  -->
  <g id="p">
    <path
      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('arcs', '100%', 200)}}

### bevel

`bevel` 값은 경로 세그먼트를 연결할 때 베벨 모양을 사용한다는 것을 나타냅니다.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- "bevel" 값의 효과 -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  다음 분홍색의 선은 각 스트로크 경로의 위치를 강조합니다.
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('bevel', '100%', 200)}}

### miter

`miter` 값은 경로 세그먼트를 연결할 때 뾰족한 모서리를 사용한다는 것을 나타냅니다. 모서리는 경로 세그먼트의 접선에서 스트로크의 외부 가장자리를 교차할 때까지 확장되어 형성됩니다.

> [!NOTE] > {{SVGAttr('stroke-miterlimit')}} 가 확장되면, 선 조인이 다시 `bevel` 로 돌아갑니다.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- "miter" 값의 효과 -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- 기본 마이터 한계가 초과되는 뾰족한 각도에서의 "miter" 값의 효과  -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- 다음 빨간 점선은 어디에서 클리핑이마이터 값이 베벨 값으로 돌아가는지 보여줍니다. -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- 다음 분홍색의 선은 각 스트로크 경로의 위치를 강조합니다. -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path
      d="M7,5 l0.75,-3 l0.75,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="7" cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter', '100%', 200)}}

### miter-clip

> [!NOTE] > `miter-clip` 값은 폭넓게 지원되고 있지는 않습니다.

`miter-clip` 값은 경로 세그먼트 에 사용되는 뾰족한 모서리를 나타냅니다. 모서리는 경로 세그먼트가 맞닿은 경계에서 스트로크의 외부 가장자리를 연장하여 교차할 때까지 확장하며 형성됩니다.

{{SVGAttr('stroke-miterlimit')}} 가 확장되면, 마이터는 경로 세그먼트의 교차점에서 {{SVGAttr('stroke-miterlimit')}} 값의 절반에 스트로크 너비를 곱한 거리만큼 떨어진 지점에서 잘려집니다. 이는 매우 날카로운 조인이나 애니메이션의 경우 `miter` 보다 더 나은 렌더링을 제공합니다.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- "miter-clip" 값의 효과 -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- 기본 마이터 한계가 초과되는 뾰족한 각도에서의 "miter-clip" 값의 효과 -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- 다음 빨간 점선은 어디에서 클리핑이 발생할지를 보여줍니다. -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- 다음 분홍색의 선은 각 스트로크 경로의 위치를 강조합니다. -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path
      d="M7,5 l0.75,-3 l0.75,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="7" cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter-clip', '100%', 200)}}

### round

`round` 값은 경로 세그먼트를 연결할 때 둥근 모서리가 사용되었다는 것을 나타냅니다.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "round" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  다음 분홍색의 선은 각 스트로크 경로의 위치를 강조합니다.
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS {{cssxref("stroke-linejoin")}} property

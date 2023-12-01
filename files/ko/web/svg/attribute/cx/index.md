---
title: cx
slug: Web/SVG/Attribute/cx
---

{{SVGRef}}

**`cx`** 속성은 중심점의 x축 좌표를 정의합니다.

다음 SVG 요소와 함께 이 속성을 사용할 수 있습니다:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("radialGradient")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cx="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="45" />
  <ellipse cx="150" cy="50" rx="45" ry="25" />
  <rect x="205" y="5" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample("Example", 100, 100)}}

## circle

{{SVGElement('circle')}} 의 경우, `cx`는 모양 중심의 x축 좌표를 정의합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** SVG2 `cx`로 시작하는 것은 _기하학적 속성_ 입니다. 즉, 이 속성은 circle의 CSS 속성으로도 사용할 수 있습니다.

## ellipse

{{SVGElement('ellipse')}}의 경우, `cx`는 모양 중심의 x축 좌표를 정의합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** SVG2 `cx`로 시작하는 것은 _기하학적 속성_ 입니다. 이는 이 속성이 ellipse의 CSS 속성으로도 사용될 수 있음을 의미합니다.

## radialGradient

{{SVGElement('radialGradient')}}의 경우 `cx`는 radial Gradient에 대한 끝 원의 x축 좌표를 정의합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

#### 예제

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 34 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient cx="0" id="myGradient000">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="50%" id="myGradient050">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="100%" id="myGradient100">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
  </defs>

  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient000)"
    stroke="black" />
  <rect
    x="13"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient050)"
    stroke="black" />
  <rect
    x="25"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient100)"
    stroke="black" />
</svg>
```

{{EmbedLiveSample('radialGradient', 150, '100%')}}

## 명세서

{{Specifications}}

## 같이 보기

- [cy](/ko/docs/Web/SVG/Attribute/cy)
- [r](/ko/docs/Web/SVG/Attribute/r)

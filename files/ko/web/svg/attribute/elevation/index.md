---
title: elevation
slug: Web/SVG/Attribute/elevation
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SVGRef}}

**`elevation`** 특성은 XY 평면에서 Z축으로 향하는 광원의 방향을 각도 단위인 도 단위로 특정합니다. 양수인 Z축은 콘텐츠를 보는 사람에게 향해 있습니다.

이 특성은 아래 SVG 요소와 함께 사용할 수 있습니다.

- {{SVGElement("feDistantLight")}}

## 예제

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="distantLight1">
    <feDiffuseLighting>
      <feDistantLight elevation="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="distantLight2">
    <feDiffuseLighting>
      <feDistantLight elevation="45" />
    </feDiffuseLighting>
  </filter>

  <circle cx="100" cy="100" r="80" style="filter: url(#distantLight1);" />
  <circle
    cx="100"
    cy="100"
    r="80"
    style="filter: url(#distantLight2); transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## 사용 일람

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">기본 값</th>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">애니메이션 가능 여부</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

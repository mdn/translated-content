---
title: <g>
slug: Web/SVG/Reference/Element/g
original_slug: Web/SVG/Element/g
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

**`<g>`** [SVG](/ko/docs/Web/SVG) 요소는 다른 SVG 요소를 그룹화한 컨테이너입니다.

`<g>` 요소에 적용된 변형 속성은 자식 요소들에서 동작합니다. 그리고 그 특성은 자식 요소에게로 상속됩니다. 이는 또한 다중 요소를 그룹화하여 {{SVGElement("use")}} 요소와 함께 참조될 수 있도록 합니다.

## 예제

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- g 를 사용하여 현재 속성을 상속합니다. -->
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## 사용 일람

{{svginfo}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

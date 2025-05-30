---
title: shape-rendering
slug: Web/SVG/Reference/Attribute/shape-rendering
original_slug: Web/SVG/Attribute/shape-rendering
l10n:
  sourceCommit: cd840e78b6027a391fe1f11b745564cf3ebfb8e7
---

{{SVGRef}}

**`shape-rendering`** 특성은 경로, 원, 혹은 직사각형 모양을 렌더링할 때, 렌더러에게 어떤 절충안을 감수할지 힌트를 제공합니다.

> [!NOTE]
> 프레젠테이션 특성에서는, `shape-rendering` 는 CSS 속성으로도 사용할 수 있습니다.

다음 SVG 요소들을 사용하여 특성을 활용할 수 있습니다.

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}

## 예제

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="100" shape-rendering="geometricPrecision" />
  <circle cx="320" cy="100" r="100" shape-rendering="crispEdges" />
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## 사용 일람

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">값</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>crispEdges</code> | <code>geometricPrecision</code>
      </td>
    </tr>
    <tr>
      <th scope="row">기본 값</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">애니메이션 기능</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : 이 값은 사용자 에이전트가 속도, 선명한 가장자리와 기하학적 정밀성의 균형을 맞출 수 있도록 합니다. 그러나 기하학적 정밀성은 속도나 선명한 가장자리보다 더 중요하게 취급되어야 합니다.
- `optimizeSpeed`
  - : 이 값은 사용자 에이전트가 기하학적 정밀성과 선명한 가장자리보다 속도 렌더링을 더 강조해야 함을 나타냅니다. 이 옵션은 사용자 에이전트로 하여금 종종 모양의 안티엘리어싱 (위신호 제거) 기능이 꺼지는 것을 야기시킬 수 있습니다.
- `crispEdges`
  - : 이 값은 사용자 에이전트가 렌더링 속도와 기하학적 정밀성보다 아트워크와 선명한 가장자리 사이의 대비를 강조하는 데에 사용됩니다. 선명한 가장자리를 얻기 위해서는, 사용자 에이전트는 모든 선과 곡선 혹은 수직이나 수평에 가까운 직선들에 대해 안티엘리어싱 (위신호 제거) 기능을 꺼야 합니다. 또한, 사용자 에이전트는 가장자리를 장치의 픽셀에 맞추기 위해 선의 위치와 선의 너비를 조정할 수 있습니다.
- `geometricPrecision`
  - : 이 값은 속도와 선명한 가장자리보다 기하학적 정밀성을 더 강조해야 함을 나타냅니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

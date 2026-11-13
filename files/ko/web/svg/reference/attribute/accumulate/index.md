---
title: accumulate
slug: Web/SVG/Reference/Attribute/accumulate
original_slug: Web/SVG/Attribute/accumulate
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

**`accumulate`** 특성은 애니메이션이 누적되는지의 여부를 제어합니다.

이전 결과에 따라 반복되는 애니메이션이 각 반복마다 값을 축적하는 것은 자주 유용하게 사용됩니다. 이 특성은 각 반복마다 이전 애니메이션의 값을 추가할지 말지 여부를 애니메이션에 지정합니다.

이 특성은 다음 SVG 요소들과 함께 사용할 수 있습니다.

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## 사용 일람

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>none</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `sum`
  - : 각 반복이 첫번쨰 이후에는 이전에 반복된 값에 누적됨을 지정합니다.
- `none`
  - : 반복이 누적되지 않음을 지정합니다.

이 특성은 만일 타겟 특성이 덧셈을 허용하지 않거나, 애니메이션 요소가 반복되지 않는 경우에는 무시됩니다.

이 특성은 만일 애니메이션 함수가 {{SVGAttr("to")}} 특성에 지정되는 경우에는 무시됩니다.

## 명세서

{{Specifications}}

## 같이 보기

- [SMIL 애니메이션 정의서](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)

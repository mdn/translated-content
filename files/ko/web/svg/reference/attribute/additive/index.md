---
title: additive
slug: Web/SVG/Reference/Attribute/additive
original_slug: Web/SVG/Attribute/additive
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

**`additive`** 특성은 애니메이션을 추가될지의 여부를 제어합니다.

특성 값은 절대값보다 오프셋 혹은 델타 값으로 애니메이션에 정의하는 것이 자주 유용하게 사용됩니다.

이 특성은 다음 SVG 요소들과 함께 사용할 수 있습니다.

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## 사용 일람

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>replace</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>replace</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- sum
  - : 애니메이션이 특성의 원래 값과 다른 낮은 우선 순위를 가진 애니메이션 값에 더해질 것임을 지정합니다.
- replace
  - : 애니메이션이 특성의 원래 값과 다른 낮은 우선 순위를 가진 애니메이션 값을 덮어쓸 것임을 지정합니다. 이는 기본값이지만, [SMIL 애니메이션: 어떻게 from, to 그리고 가 additive 동작에 어떻게 영향을 미치는가](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#FromToByAndAdditive) 에 기술된대로 {{SVGAttr("by")}} 그리고 {{SVGAttr("to")}} 애니메이션 특성 값에 영향을 받아 동작합니다.

## 명세서

{{Specifications}}

## 같이 보기

- [SMIL 애니메이션 정의서](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AdditiveAttribute)

---
title: keyTimes
slug: Web/SVG/Attribute/keyTimes
---

{{SVGRef}}

O atributo **`keyTimes`** representa uma lista de valores de tempo usados para controlar o ritmo da animação. Cada valor corresponde a um valor na lista de atributos {{SVGAttr("values")}} e define quando o valor é usado na animação. Cada valor de tempo na lista `keyTimes` é especificado como um valor de ponto flutuante entre 0 e 1 (inclusive), representando um deslocamento proporcional na duração do elemento de animação.

Four elements are using this attribute: {{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateMotion")}}, and {{SVGElement("animateTransform")}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="https://www.w3.org/2000/svg">
  <circle cx="60" cy="10" r="10">
    <animate
      attributeName="cx"
      dur="4s"
      repeatCount="indefinite"
      values="60 ; 110 ; 60 ; 10 ; 60"
      keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1" />
    <animate
      attributeName="cy"
      dur="4s"
      repeatCount="indefinite"
      values="10 ; 60 ; 110 ; 60 ; 10"
      keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1" />
  </circle>
</svg>
```

{{EmbedLiveSample("topExample", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{cssxref("number")}} [
        <code>;</code> {{cssxref("number")}} ]* <code>;</code>?
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The value of the `keyTimes` attribute is a semicolon-separated list of values.

There must be exactly as many values in the `keyTimes` list as in the `values` list.

Each successive time value must be greater than or equal to the preceding time value.

The `keyTimes` list semantics depends upon the interpolation mode:

- For linear and spline animation, the first time value in the list must be 0, and the last time value in the list must be `1`. The key time associated with each value defines when the value is set; values are interpolated between the key times.
- For discrete animation, the first time value in the list must be `0`. The time associated with each value defines when the value is set; the animation function uses that value until the next time defined in the list.

If the {{SVGAttr("calcMode")}} attribute is set to `paced`, the `keyTimes` attribute is ignored.

If the duration of the animation is indefinite, any `keyTimes` specification will be ignored.

## Specifications

| Specification                                                        | Status                        | Comment            |
| -------------------------------------------------------------------- | ----------------------------- | ------------------ |
| {{SpecName("SVG Animations 2", "#KeyTimesAttribute", "keyTimes")}}   | {{Spec2("SVG Animations 2")}} | No change          |
| {{SpecName("SVG1.1", "animate.html#KeyTimesAttribute", "keyTimes")}} | {{Spec2("SVG1.1")}}           | Initial definition |

## Compatibilidade com navegadores

{{Compat("svg.elements.animate.keyTimes")}}

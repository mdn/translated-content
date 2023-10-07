---
title: attributeName
slug: Web/SVG/Attribute/attributeName
---

{{SVGRef}}

Атрибут **`attributeName`** задаёт имя свойства CSS или атрибута целевого элемента, которое будет изменено во время анимации.

Четыре элемента используют данный атрибут: {{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateTransform")}} и {{SVGElement("set")}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="5s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("topExample", "400", "250")}}

## Контекст использования

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Значение</th>
      <td><code>&#x3C;name></code></td>
    </tr>
    <tr>
      <th scope="row">Значение по умолчанию</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Анимируемый</th>
      <td>Нет</td>
    </tr>
  </tbody>
</table>

- `<name>`
  - : Это значение задаёт имя свойства CSS или атрибута целевого элемента, которое будет анимировано.

## Спецификации

| Specification                                                                  | Status                        | Comment            |
| ------------------------------------------------------------------------------ | ----------------------------- | ------------------ |
| {{SpecName("SVG Animations 2", "#AttributeNameAttribute", "attributeName")}}   | {{Spec2("SVG Animations 2")}} | No change          |
| {{SpecName("SVG1.1", "animate.html#AttributeNameAttribute", "attributeName")}} | {{Spec2("SVG1.1")}}           | Initial definition |

## Смотрите также

- [SMIL Animation specification](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)

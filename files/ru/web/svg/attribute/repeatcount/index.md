---
title: repeatCount
slug: Web/SVG/Attribute/repeatCount
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

Атрибут **`repeatCount`** указывает, сколько раз будет воспроизводиться анимация.

Этот атрибут можно использовать для следующих SVG-элементов:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="1s"
      repeatCount="5" />
  </rect>
  <rect x="120" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="1s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Пример", "220", "150")}}

## Примечания по использованию

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Значение</th>
      <td>{{cssxref("number")}} | <code>indefinite</code></td>
    </tr>
    <tr>
      <th scope="row">Значение по умолчанию</th>
      <td><em>Отсутствует</em></td>
    </tr>
    <tr>
      <th scope="row">Анимируемый</th>
      <td>Нет</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Это значение определяет количество повторений. Оно может включать частичные итерации, выраженные в виде дробных значений. Дробное значение описывает часть простой анимации. Значение должно быть больше `0`.
- `indefinite`
  - : Это значение указывает, что анимация будет повторяться бесконечно (то есть пока документ открыт).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

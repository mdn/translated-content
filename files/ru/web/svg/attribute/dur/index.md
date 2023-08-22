---
title: dur
slug: Web/SVG/Attribute/dur
---

{{SVGRef}}

Атрибут **`dur`** отображает простую длительность анимации.

Пять элементов используют данный атрибут: {{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, и {{SVGElement("set")}}

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
      repeatCount="indefinite" />
  </rect>
  <rect x="120" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="3s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("topExample", "220", "150")}}

## Примечания к использованию

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Значение</th>
      <td>
        <code
          ><a
            href="/ru/SVG/Content_type#Clock-value"
            title="en/SVG/Content_type#Clock-value"
            >&#x3C;clock-value></a
          ></code
        >
        | <code>indefinite</code> | <code>media</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Значение по умолчанию</th>
      <td><code>indefinite</code></td>
    </tr>
    <tr>
      <th scope="row">Анимируемый</th>
      <td>Нет</td>
    </tr>
  </tbody>
</table>

- `<clock-value>`
  - : Задаёт длину простой длительности. Значение должно быть больше 0. Это значение может быть выражено в часах (`h`), минутах (`m`), секундах (`s`) или миллисекундах (`ms`). Это позволяет объединить такое представление времени для предоставления некоторых сложных длительностей, таких как: `hh:mm:ss.iii` или `mm:ss.iii`
- `media`
  - : Задаёт простую длительность, как длительность, свойственной медиа. Это валидно только для элементов, которые определяют media.
- `indefinite`
  - : Задаёт простую длительность, как незаданную

> **Примечание:** Интерполяция не будет работать, если простая длительность остаётся неопределённой (хотя это может быть полезно для элементов {{ SVGElement("set") }}).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

---
title: <g>
slug: Web/SVG/Element/g
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

[SVG](/ru/docs/Web/SVG)-элемент **`<g>`** служит контейнером для группировки других SVG-элементов.

Преобразования, примененные к элементу `<g>`, выполняются над его дочерними элементами, а его атрибуты наследуются ими. Он также может группировать несколько элементов, на которые позже можно будет ссылаться с помощью элемента {{SVGElement("use")}}.

## Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Using g to inherit presentation attributes -->
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
```

{{EmbedLiveSample('Пример', 100, '100%')}}

## Контекст использования

{{svginfo}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

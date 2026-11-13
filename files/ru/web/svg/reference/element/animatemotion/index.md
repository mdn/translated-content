---
title: <animateMotion>
slug: Web/SVG/Reference/Element/animateMotion
---

{{SVGRef}}

Элемент **`<animateMotion>`** вызывает перемещение ссылочного элемента вдоль пути движения.

## Пример

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="lightgrey"
    d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

  <circle r="5" fill="red">
    <animateMotion
      dur="10s"
      repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
  </circle>
</svg>
```

{{EmbedLiveSample('Пример', 150, '100%')}}

## Контекст использования

{{svginfo}}

## Атрибуты

- {{SVGAttr("keyPoints")}}
- {{SVGAttr("path")}}
- {{SVGAttr("rotate")}}

## DOM интерфейс

Этот элемент реализует интерфейс {{domxref("SVGAnimateMotionElement")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{SVGElement("mpath")}}

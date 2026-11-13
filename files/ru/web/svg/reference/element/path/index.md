---
title: <path>
slug: Web/SVG/Reference/Element/path
---

{{SVGRef}}

Элемент **`<path>`** является общим элементом для описания фигуры. Все базовые фигуры могут быть созданы с помощью элемента path.

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
  <path
    d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample("Пример", 100, 100)}}

## Атрибуты

- {{SVGAttr("d")}}
  - : Этот атрибут определяет форму.
    _Тип значения_: **\<string>** ; _Значение по умолчанию_: `''`; _Анимирование_: **Да**
- {{SVGAttr("pathLength")}}
  - : Этот атрибут позволяет указывать общую длину в пользовательских единицах.
    _Тип значения_: [**\<number>**](/docs/Web/SVG/Content_type#Number) ; _Значение по умолчанию_:_нет_; _Анимирование_: **Да**

## Использование

{{svginfo}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- SVG basic shapes: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
- [The MDN SVG "Getting Started" tutorial : Path](/ru/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)

---
title: <foreignObject>
slug: Web/SVG/Element/foreignObject
---

{{SVGRef}}
Элемент **`<foreignObject>`** [SVG](/ru/docs/Web/SVG) позволяет включать другое пространство имён XML.
В контексте браузера это, скорее всего, XHTML / HTML.

## Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    polygon {
      fill: black;
    }

    div {
      color: white;
      font: 18px serif;
      height: 100%;
      overflow: auto;
    }
  </style>

  <polygon points="5,5 195,10 185,185 10,195" />

  <!-- Типичный пример использования: встраивание HTML-текста в SVG -->
  <foreignObject x="20" y="20" width="160" height="160">
    <!--
В контексте SVG, внедрённого в HTML, пространство имён XHTML может и следует избегать,
но это обязательно в контексте документа SVG
   -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      - Смолчал хозяин, да и то, что мог сказать - Мне невдомёк, но во владениях
      чертога Поможет дом срубить да судьбы вам связать. Не веришь ежли -
      испроси у Бога...
    </div>
  </foreignObject>
</svg>
```

{{EmbedLiveSample("Пример", 150, '100%')}}

## Атрибуты

- {{SVGAttr("height")}}
  - : Этот атрибут определяет высоту прямоугольника.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : Этот атрибут определяет ширину прямоугольника.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : Этот атрибут определяет координату x контейнера svg.
    Это не влияет на внешние элементы SVG.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : Этот атрибут определяет координату Y контейнера SVG.
    Это не влияет на внешние элементы SVG.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**

> [!NOTE]
> Starting with SVG2 `x`, `y`, `width`, and `height` are Geometry Properties, meaning those attributes can also be used as CSS properties for that element.

## Примечания по использованию

{{svginfo}}

## Характеристики

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

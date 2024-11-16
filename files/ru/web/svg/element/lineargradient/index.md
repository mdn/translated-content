---
title: <linearGradient>
slug: Web/SVG/Element/linearGradient
---

{{SVGRef}}

**`<linearGradient>`** позволяет определять линейные градиенты для заполнения или изменения графических элементов.

> [!NOTE]
> Не путайте с CSS {{cssxref('linear-gradient()')}}, CSS-градиенты могут быть применены только к HTML-элементам, тогда как SVG-градиент применим только к SVG-элементам.

## Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 10 10"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my linear gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample("Пример", 150, '100%')}}

## Атрибуты

- {{SVGAttr("gradientUnits")}}
  - : Определяет систему координат для атрибутов `x1`, `x2`, `y1`, `y2`
    _Тип значения_: `userSpaceOnUse`|`objectBoundingBox` ; _Значение по умолчанию_: `objectBoundingBox`; _Анимируемый_: **да**
- {{SVGAttr("gradientTransform")}}
  - : Этот атрибут обеспечивает дополнительное [преобразование](/ru/docs/Web/SVG/Attribute/transform) для системы координат градиента.
    _Тип значения_: **[\<transform-list>](/ru/docs/Web/SVG/Content_type#transform-list)** ; _Значение по умолчанию_: _identity transform_; _Анимируемый_: **да**
- {{SVGAttr("href")}}
  - : Этот атрибут определяет ссылку на другой элемент `<linearGradient>`, который будет использоваться в качестве шаблона.
    _Тип значения_: [**\<URL>**](/ru/docs/Web/SVG/Content_type#url) ; _Значение по умолчанию_: none; _Анимируемый_: **да**
- {{SVGAttr("spreadMethod")}}
  - : Этот атрибут указывает, как ведет себя градиент, если он начинается или заканчивается внутри границ фигуры, содержащей градиент.
    _Тип значения_: `pad`|`reflect`|`repeat` ; _Значение по умолчанию_: `pad`; _Анимируемый_: **да**
- {{SVGAttr("x1")}}
  - : Этот атрибут определяет координату x начальной точки векторного градиента, вдоль которой рисуется линейный градиент.
    _Тип значения_: [**\<length>**](/ru/docs/Web/SVG/Content_type#length) ; _Значение по умолчанию_: `0%`; _Анимируемый_: **да**
- {{SVGAttr("x2")}}
  - : Этот атрибут определяет координату x конечной точки векторного градиента, вдоль которой рисуется линейный градиент.
    _Тип значения_: [**\<length>**](/ru/docs/Web/SVG/Content_type#length) ; _Значение по умолчанию_: `100%`; _Анимируемый_: **да**
- {{SVGAttr("xlink:href")}}
  - : {{Deprecated_Header}}[\<IRI>](/ru/docs/Web/SVG/Content_type#iri) ссылка на другой `<linearGradient>` элемент, который будет использоваться в качестве шаблона.
    _Тип значения_: [**\<IRI>**](/ru/docs/Web/SVG/Content_type#iri) ; _Значение по умолчанию_: none; _Анимируемый_: **да**
- {{SVGAttr("y1")}}
  - : Этот атрибут определяет координату y начальной точки векторного градиента, вдоль которой рисуется линейный градиент.
    _Тип значения_: [**\<length>**](/ru/docs/Web/SVG/Content_type#length) ; _Значение по умолчанию_: `0%`; _Анимируемый_: **да**
- {{SVGAttr("y2")}}
  - : Этот атрибут определяет координату y конечной точки векторного градиента, вдоль которой рисуется линейный градиент.
    _Тип значения_: [**\<length>**](/ru/docs/Web/SVG/Content_type#length) ; _Значение по умолчанию_: `0%`; _Анимируемый_: **да**

## Примечания по использованию

{{svginfo}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

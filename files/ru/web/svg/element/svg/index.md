---
title: <svg>
slug: Web/SVG/Element/svg
---

{{SVGRef}}

Элемент `svg` является контейнером, который определяет новую систему координат и [область просмотра](/ru/docs/Web/SVG/Attribute/viewBox). Он используется, как самый внешний элемент документов SVG, но также может использоваться для встраивания фрагмента SVG в документ SVG или HTML.

> **Примечание:** Примечание. Атрибут `xmlns` требуется только для самого внешнего элемента `svg` документов SVG. Это не нужно для внутренних элементов `svg` или внутри документов HTML.

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
  viewBox="0 0 300 100"
  xmlns="http://www.w3.org/2000/svg"
  stroke="red"
  fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>
```

{{EmbedLiveSample('Пример', 300, 100)}}

## Атрибуты

- {{SVGAttr("baseProfile")}} {{deprecated_inline}}
  - : The minimum SVG language profile that the document requires.
    _Value type_: **\<string>** ; _Default value_: none; _Animatable_: **no**
- {{SVGAttr("contentScriptType")}} {{deprecated_inline}}
  - : Язык сценариев по умолчанию, используемый фрагментом SVG.
    _Value type_: **\<string>** ; _Default value_: `application/ecmascript`; _Animatable_: **no**
- {{SVGAttr("contentStyleType")}} {{deprecated_inline}}
  - : Язык таблицы стилей по умолчанию, используемый фрагментом SVG.
    _Value type_: **\<string>** ; _Default value_: `text/css`; _Animatable_: **no**
- {{SVGAttr("height")}}
  - : Отображаемая высота прямоугольной области просмотра. (Не высота его системы координат.)
    _Value type_: [**\<length>**](/ru/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ru/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("preserveAspectRatio")}}
  - : How the `svg` fragment must be deformed if it is displayed with a different aspect ratio.
    _Value type_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Default value_: `xMidYMid meet`; _Animatable_: **yes**
- {{SVGAttr("version")}} {{deprecated_inline}}
  - : Какая версия SVG используется для внутреннего содержимого элемента.
    _Value type_: **[\<number>](/ru/docs/Web/SVG/Content_type#Number)** ; _Default value_: none; _Animatable_: **no**
- {{SVGAttr("viewBox")}}
  - : Координаты области просмотра SVG для текущего фрагмента SVG.
    _Value type_: **[\<list-of-numbers>](/ru/docs/Web/SVG/Content_type#List-of-Ts)** ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : Отображаемая ширина прямоугольной области просмотра. (Не ширина его системы координат.)
    _Value type_: [**\<length>**](/ru/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ru/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : The displayed x coordinate of the svg container. No effect on outermost `svg` elements.
    _Value type_: [**\<length>**](/ru/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ru/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : The displayed y coordinate of the svg container. No effect on outermost `svg` elements.
    _Value type_: [**\<length>**](/ru/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/ru/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**

> **Примечание:** Примечание. Начиная с SVG2, `x`, `y`, `width` и `height` являются Geometry Properties, то есть эти атрибуты также можно использовать в качестве CSS-свойств.

### Глобальные атрибуты

- [Core Attributes](/ru/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/ru/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/ru/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Event Attributes
  - : [Global event attributes](/ru/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Graphical event attributes](/ru/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes), [Document event attributes](/ru/docs/Web/SVG/Attribute/Events#Document_Event_Attributes), [Document element event attributes](/ru/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes)
- [Presentation Attributes](/ru/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Aria атрибуты
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Примечания по использованию

{{svginfo}}

## Спецификации

{{Specifications}}

## Кросс-браузерность

{{Compat}}

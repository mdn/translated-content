---
title: <pattern>
slug: Web/SVG/Element/pattern
---

{{SVGRef}}
Элемент **`<pattern>`** определяет графический объект, который может быть перерисован с повторяющимися координатами **x** и **y** («мозаичным»), чтобы покрыть область.
На ссылку `<pattern>` ссылаются атрибуты {{SVGAttr("fill")}} и / или {{SVGAttr("stroke")}} на других [графических элементах](/ru/docs/Web/SVG/Tutorial/Basic_Shapes) , чтобы заполнить или обвести эти элементы указанным шаблоном.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>

  <circle cx="50" cy="50" r="50" fill="url(#star)" />
  <circle
    cx="180"
    cy="50"
    r="40"
    fill="none"
    stroke-width="20"
    stroke="url(#star)" />
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## Атрибуты

- {{SVGAttr("height")}}
  - : Этот атрибут определяет высоту плитки шаблона.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage); _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("href")}}
  - : Этот атрибут по умолчанию ссылается на пример шаблона для `<pattern>`
    _Value type_: [**\<URL>**](/docs/Web/SVG/Content_type#URL); _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("patternContentUnits")}}

  - : Этот атрибут определяет систему координат содержимого {{ SVGElement("pattern") }}.
    _Value type_: `userSpaceOnUse`|`objectBoundingBox`; _Default value_: `userSpaceOnUse`; _Animatable_: **yes**

    > **Примечание:** Этот атрибут не действует, если в элементе `<pattern>` указан атрибут `viewBox`.

- {{SVGAttr("patternTransform")}}
  - : Этот атрибут содержит определение необязательного дополнительного преобразования из системы координат шаблона в целевую систему координат.
    _Value type_: **[\<transform-list>](/docs/Web/SVG/Content_type#Transform-list)**; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("patternUnits")}}
  - : Этот атрибут определяет систему координат для атрибутов `x`, `y`, `width` и `height`.
    _Value type_: `userSpaceOnUse`|`objectBoundingBox`; _Default value_: `objectBoundingBox`; _Animatable_: **yes**
- {{SVGAttr("preserveAspectRatio")}}
  - : Этот атрибут определяет, как фрагмент svg должен быть деформирован, если он встроен в контейнер с другим соотношением сторон.
    _Value type_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Default value_: `xMidYMid meet`; _Animatable_: **yes**
- {{SVGAttr("viewBox")}}
  - : Этот атрибут определяет границы области просмотра SVG для фрагмента шаблона.
    _Value type_: **[\<list-of-numbers>](/docs/Web/SVG/Content_type#List-of-Ts)** ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : Этот атрибут определяет ширину плитки шаблона.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : Этот атрибут определяет смещение координаты x мозаичного изображения.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

  - : Этот атрибут ссылается на пример шаблона, предоставляющего значения по умолчанию для атрибутов `<pattern>`.
    _Value type_: [**\<URL>**](/docs/Web/SVG/Content_type#URL); _Default value_: _none_; _Animatable_: **yes**

    > **Примечание:** Для браузеров, реализующих `href`, если заданы как `href`, так и `xlink:href`, `xlink:href` будет игнорироваться, используя только `href`.

- {{SVGAttr("y")}}
  - : Этот атрибут определяет смещение координат y мозаичного элемента.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**

### Глобальные атрибуты

- [Core Attributes](/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- [Presentation Attributes](/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- XLink Attributes
  - : Most notably: {{SVGAttr("xlink:title")}}

## Нотации

{{svginfo}}

## Характеристики

| Характеристики                                                      | Статус              | Коммент            |
| ------------------------------------------------------------------- | ------------------- | ------------------ |
| {{SpecName('SVG2', 'pservers.html#Patterns', '&lt;pattern&gt;')}}   | {{Spec2('SVG2')}}   |                    |
| {{SpecName('SVG1.1', 'pservers.html#Patterns', '&lt;pattern&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Совместимость браузера

{{Compat}}

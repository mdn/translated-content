---
title: <use>
slug: Web/SVG/Element/use
---

{{SVGRef}}

Элемент **`<use>`** берёт элементы из SVG-документа и дублирует их где-то ещё.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
  <use href="#myCircle" x="10" fill="blue" />
  <use href="#myCircle" x="20" fill="white" stroke="red" />
  <!--
  В данном случае атрибут stroke="red" будет игнорироваться, так как
  ранее он был задан непосредственно для фигуры круга с id "myCircle".
  Большинство атрибутов (кроме x, y, width, height и (xlink:)href) не
  переопределяют значения, заданные у предка.
  Вот почему круги имеют разные координаты "x", но одинаковое значение "stroke".
  -->
</svg>
```

{{EmbedLiveSample('Exemple', 100, 100)}}

Эффект такой же, как если бы элементы были полностью склонированы в DOM, а затем расположены в месте, где находится элемент `use`, подобно элементам `<template>` в HTML 5.

Большинство атрибутов `use` **не** переопределяют те, что уже заданы у элемента, на который `use` ссылается. (Это отличается от того, как атрибуты CSS-стилей, переопределяют те, что были заданы раньше в каскаде). **Только** атрибуты {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} и {{SVGAttr("href")}} элемента `use` будут переопределять те, что были заданы у элемента, на который `use` ссылается. Однако к элементу `use` будут применены любые другие атрибуты, не заданные у элемента, на который `use` ссылается.

Поскольку клонированные элементы не отображаются, нужно соблюдать осторожность при использовании [CSS](/ru/docs/Web/CSS) для стилизации элемента `use` и его клонированных потомков. Нет гарантии, что CSS-свойства будут унаследованы клонированным DOM, пока вы явно не зададите им использование [CSS-наследования](/ru/docs/Web/CSS/inheritance).

По соображениям безопасности, браузеры могут применять [правило ограничения домена](/ru/docs/Web/Security/Same-origin_policy) для элементов `use` и могут отказаться загружать URL другого источника в атрибуте {{SVGAttr("href")}}.

> **Предупреждение:** Начиная с SVG 2, атрибут {{SVGAttr("xlink:href")}} получил статус "Устарело" в пользу {{SVGAttr("href")}}. Дополнительную информацию ищите на странице {{SVGAttr("xlink:href")}}. Тем не менее, на практике всё ещё может быть потребность в использовании {{SVGAttr("xlink:href")}} для кроссбраузерной совместимости (смотрите [таблицу совместимости](#browser-compatibility) ниже).

## Атрибуты

- {{SVGAttr("href")}}
  - : Ссылка на элемент/фрагмент, который нужно продублировать.
    _Тип значения_: [**\<URL>**](/docs/Web/SVG/Content_type#URL) ; _Значение по умолчанию_: `none`; _Анимируется_: **да**
- {{SVGAttr("xlink:href")}}
  - : {{Deprecated_Header("SVG2")}}[\<IRI>](/en/SVG/Content_type#IRI)-ссылка на элемент/фрагмент, который нужно продублировать.
    _Тип значения_: [**\<IRI>**](/docs/Web/SVG/Content_type#IRI) ; _Значение по умолчанию_: `none`; _Анимируется_: **да**
- {{SVGAttr("x")}}
  - : Координата "x" элемента `use`.
    _Тип значения_: [**\<coordinate>**](/docs/Web/SVG/Content_type#Coordinate) ; _Значение по умолчанию_: `0`; _Анимируется_: **да**
- {{SVGAttr("y")}}
  - : Координата "y" элемента `use`.
    _Тип значения_: [**\<coordinate>**](/docs/Web/SVG/Content_type#Coordinate) ; _Значение по умолчанию_: `0`; _Анимируется_: **да**
- {{SVGAttr("width")}}
  - : Ширина элемента `use`.
    _Тип значения_: [**\<length>**](/docs/Web/SVG/Content_type#Length) ; _Значение по умолчанию_: `0`; _Анимируется_: **да**
- {{SVGAttr("height")}}
  - : Высота элемента `use`.
    _Тип значения_: [**\<length>**](/docs/Web/SVG/Content_type#Length) ; _Значение по умолчанию_: `0`; _Анимируется_: **да**

> **Примечание:** Начиная с SVG2, `x`, `y`, `width`, и `height` являются _Свойствами Геометрии_, то есть эти атрибуты также могут быть использованы в качестве CSS-свойств для этого элемента.

### Глобальные атрибуты

- [Core Attributes](/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Атрибуты Событий
  - : [Global event attributes](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Graphical event attributes](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [Presentation Attributes](/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA-Атрибуты
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`
- XLink Атрибуты
  - : {{SVGAttr("xlink:href")}}, {{SVGAttr("xlink:title")}}

## Примечание по использованию

{{svginfo}}

## Спецификации

| Specification                                                   | Status              | Comment            |
| --------------------------------------------------------------- | ------------------- | ------------------ |
| {{SpecName('SVG2', 'struct.html#UseElement', '&lt;use&gt;')}}   | {{Spec2('SVG2')}}   |                    |
| {{SpecName('SVG1.1', 'struct.html#UseElement', '&lt;use&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Браузерная совместимость

{{Compat}}

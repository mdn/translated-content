---
title: <circle>
slug: Web/SVG/Element/circle
translation_of: Web/SVG/Element/circle
original_slug: Web/SVG/Element/okrąg
---
{{SVGRef}}

Element [SVG](/pl/docs/Web/SVG) jest podstawowym kształtem SVG, używanym do tworzenia okręgów w oparciu o punkt środkowy i promień.**`<circle>`**

```css hidden
html, body, svg {height: 100%}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" />
</svg>
```

{{EmbedLiveSample ("Przykład", 100, 100)}}

## Atrybuty

- {{SVGAttr ("cx")}}
  - : Ten atrybut definiuje współrzędną osi X środka elementu.
    _Typ wartości_ : **[\<długość>](/docs/Web/SVG/Content_type#Length)** | **[\<procent>](/docs/Web/SVG/Content_type#Percentage)** ; _Wartość domyślna_ : `0`; _Animowalny_ : **tak**
- {{SVGAttr ("cy")}}
  - : Ten atrybut definiuje współrzędną osi y środka środka elementu.
    _Typ wartości_ :  **[\<długość>](/docs/Web/SVG/Content_type#Length)** | **[\<procent>](/docs/Web/SVG/Content_type#Percentage)** ; _Wartość domyślna_ : `0`; _Animowalny_ : **tak**
- {{SVGAttr ("r")}}
  - : Ten atrybut definiuje promień elementu.
    Wartość mniejsza lub równa zero powoduje wyłączenie renderowania okręgu.
    _Typ wartości_ : [**\<length>**](/docs/Web/SVG/Content_type#Length) ; _Wartość domyślna_ : `0`; _Animowalny_ : **tak**
- {{SVGAttr ("ścieżkaLength")}}
  - : Ten atrybut pozwala określić całkowitą długość ścieżki w jednostkach użytkownika.
    _Typ wartości_ : [**\<liczba>**](/docs/Web/SVG/Content_type#Number) ; _Wartość domyślna_ : _brak_ ; _Animowalny_ : **tak**

> **Note:** **Uwaga:** Począwszy od SVG2 i _Geometria Propertie_ s, czyli te atrybuty mogą być również używane jako właściwości CSS dla tego elementu.SVG2 `cx`, `cy`and `r` are

### Globalne atrybuty

- [Główne atrybuty](/docs/Web/SVG/Attribute/Core)
  - : Przede wszystkim: {{SVGAttr ('id')}}, {{SVGAttr ('tabindex')}}
- [Atrybuty stylizacji](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr ('class')}}, {{SVGAttr ('style')}}
- [Atrybuty warunkowego przetwarzania](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Przede wszystkim: {{SVGAttr ('requiredExtensions')}}, {{SVGAttr ("systemLanguage")}}
- Atrybuty zdarzeń
  - : [Global event attributes](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Graphical event attributes](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [Presentation Attributes](/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

## Specifications

| Specification                                                                                    | Status                       | Comment              |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName("SVG2", "shapes.html#CircleElement", "&lt;circle&gt;")}}         | {{Spec2 ("SVG2")}}     |                      |
| {{SpecName ("SVG1.1", "shapes.html # CircleElement", "&lt;circle&gt;")}} | {{Spec2 ("SVG1.1")}} | Początkowa definicja |

## Zgodność przeglądarki

{{Compat ("svg.elements.circle")}}

## Zobacz też

- Inne podstawowe kształty SVG: **{{SVGElement ('ellipse')}}** , {{SVGElement ('line')}}, {{SVGElement ('polygon')}}, {{SVGElement ('polyline')}}, { {SVGElement ("rect")}}

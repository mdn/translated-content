---
title: border-width
slug: Web/CSS/border-width
---

{{CSSRef}}

## Summary

CSS-свойство {{cssxref("border-width")}} определяет ширину рамки элемента. Но обычно её задают не отдельно, а в составе свойства {{cssxref("border")}}.

{{cssinfo}}

## Синтаксис

[Общий синтаксис](/ru/docs/CSS/Value_definition_syntax): {{csssyntax("border-width")}}

```css
border-width: ширина                  /* Одно значение */
border-width: вертикальная горизонтальная    /* Два значения */
border-width: верх горизонтальная основание    /* Три значения */
border-width: верх право основание лево  /* Четыре значения */

border-width: inherit /* Родительское значение */
```

### Values

- `<br-width>`
  - | : Is either a non-negative explicit {{cssxref("&lt;length&gt;")}} value or a keyword denoting the thickness of the bottom border. The keyword must be one of the following values: | `thin` |                 | A thin border                                                                                                                                                                                                                                                                        |
    | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `medium`                                                                                                                                                                           |        | A medium border |
    | `thick`                                                                                                                                                                            |        | A thick border  | The specification doesn't precisely define the thickness of each of the keywords, which is therefore implementation specific. Nevertheless, it requests that the thickness does follow the `thin ≤ medium ≤ thick` inequality and that the values are constant on a single document. |
- `inherit`
  - : Is a keyword indicating that all four values are inherited from their parent's element calculated value.

## Examples

### A mix of values and lengths

#### HTML

```html
<p id="sval">one value: 6px wide border on all 4 sides</p>
<p id="bival">
  two different values: 2px wide top and bottom border, 10px wide right and left
  border
</p>
<p id="treval">
  three different values: 0.3em top, 9px bottom, and zero width right and left
</p>
<p id="fourval">
  four different values: "thin" top, "medium" right, "thick" bottom, and 1em
  right
</p>
```

#### CSS

```css
#sval {
  border: ridge #ccc;
  border-width: 6px;
}
#bival {
  border: solid red;
  border-width: 2px 10px;
}
#treval {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#fourval {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### Result

{{ EmbedLiveSample('A_mix_of_values_and_lengths', 300, 180) }}

## Specifications

| Specification                                                              | Status                        | Comment                                                                                                     |
| -------------------------------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-width', 'border-width')}}      | {{Spec2('CSS3 Backgrounds')}} | No direct change, the {{cssxref("&lt;length&gt;")}} CSS data type extension has an effect on this property. |
| {{SpecName('CSS2.1', 'box.html#border-width-properties', 'border-width')}} | {{Spec2('CSS2.1')}}           | Added the constraint that values' meaning must be constant inside a document.                               |
| {{SpecName('CSS1', '#border-width', 'border-width')}}                      | {{Spec2('CSS1')}}             |                                                                                                             |

## Browser compatibility

{{Compat}}

## See also

- The border-related shorthand properties: {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}
- The border-width-related properties: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}

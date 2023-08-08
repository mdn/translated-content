---
title: border-bottom
slug: Web/CSS/border-bottom
---

{{CSSRef}}

[Сокращённое свойство](/ru/docs/Web/CSS/Shorthand_properties) [CSS](/ru/docs/Web/CSS) **`border-bottom`** описывает нижнюю границу элемента [border](/ru/docs/Web/CSS/border). Оно устанавливает значения {{cssxref("border-bottom-width")}}, {{cssxref("border-bottom-style")}} и {{cssxref("border-bottom-color")}}.

{{EmbedInteractiveExample("pages/css/border-bottom.html")}}

Как и все сокращённые свойства, `border-bottom` устанавливает значения всех свойств, которые он может установить, даже если они не указаны. Для тех свойств, которые не указаны оно устанавливает значения по умолчанию. Это означает, что ...

```css
border-bottom-style: dotted;
border-bottom: thick green;
```

... это то же самое, что ...

```css
border-bottom-style: dotted;
border-bottom: none thick green;
```

... и значение {{cssxref("border-bottom-style")}}, указанное перед `border-bottom` игнорируется. Поскольку значением по умолчанию для {{cssxref("border-bottom-style")}} является `none`, то без указания `border-style` граница не будет показана.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-bottom-color`](/ru/docs/Web/CSS/border-bottom-color)
- [`border-bottom-style`](/ru/docs/Web/CSS/border-bottom-style)
- [`border-bottom-width`](/ru/docs/Web/CSS/border-bottom-width)

## Syntax

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed blue;
```

The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.

### Values

- `<br-width>`
  - : See {{cssxref("border-bottom-width")}}.
- `<br-style>`
  - : See {{cssxref("border-bottom-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : See {{cssxref("border-bottom-color")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Applying a bottom border

#### HTML

```html
<div>This box has a border on the bottom side.</div>
```

#### CSS

```css
div {
  border-bottom: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Results

{{EmbedLiveSample('Applying_a_bottom_border')}}

## Specifications

| Specification                                                               | Status                        | Comment                                                                                                         |
| --------------------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#propdef-border-bottom', 'border-bottom')}} | {{Spec2('CSS3 Backgrounds')}} | No direct changes, though the modification of values for the {{cssxref("border-bottom-color")}} do apply to it. |
| {{SpecName('CSS2.1', 'box.html#propdef-border-bottom', 'border-bottom')}}   | {{Spec2('CSS2.1')}}           | No significant changes.                                                                                         |
| {{SpecName('CSS1', '#border-bottom', 'border-bottom')}}                     | {{Spec2('CSS1')}}             | Initial definition                                                                                              |

## Browser compatibility

{{Compat}}

## See also

- [`border`](/ru/docs/Web/CSS/border)
- [`border-block`](/ru/docs/Web/CSS/border-block)
- [`outline`](/ru/docs/Web/CSS/outline)

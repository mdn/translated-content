---
title: CSS 參考文件
slug: Web/CSS/Reference
---

{{CSSRef}}

Use this **CSS reference** to browse an [alphabetical index](#index) of all the standard [CSS](/zh-TW/docs/Web/CSS) properties, [pseudo-classes](/zh-TW/docs/Web/CSS/Pseudo-classes), [pseudo-elements](/zh-TW/docs/Web/CSS/Pseudo-elements), [data types](/zh-TW/docs/Web/CSS/CSS_Types), and [at-rules](/zh-TW/docs/Web/CSS/At-rule). You can also browse a list of all the CSS [selectors organized by type](#Selectors) and a list of [key CSS concepts](#Concepts). Also included is a brief [DOM-CSS / CSSOM reference](#DOM-CSS_CSSOM).

## 基本語法規則

### Style rule syntax

```plain
selectorlist {
  property: value;
  [more property:value; pairs]
}

... where selectorlist is: selector[:pseudo-class] [::pseudo-element] [, more selectorlists]

See selector, pseudo-class, pseudo-element lists below.
```

#### Style rule examples

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

For a beginner-level introduction to the syntax of CSS selectors, please see [this tutorial](/zh-TW/docs/Learn/CSS/Introduction_to_CSS/Selectors). Be aware that any [CSS syntax](/zh-TW/docs/Web/CSS/syntax) error in a rule definition invalidates the entire rule. Invalid rules are ignored by the browser. Note that CSS rule definitions are entirely (ASCII) [text-based](https://www.w3.org/TR/css-syntax-3/#intro), whereas DOM-CSS / CSSOM (the rule management system) is [object-based](https://www.w3.org/TR/cssom/#introduction).

### At-rule syntax

As the structure of at-rules varies widely, please see [At-rule](/zh-TW/docs/Web/CSS/At-rule) to find the syntax of the specific one you want.

## Index

> **備註：** The property names in this index do **not** include the [JavaScript names](/zh-TW/docs/Web/CSS/CSS_Properties_Reference) where they differ from the CSS standard names.

{{CSS_Ref}}

## Selectors

### Basic selectors

- [Type selector](/zh-TW/docs/Web/CSS/Type_selectors) `elementname`
- [Class selector](/zh-TW/docs/Web/CSS/Class_selectors) `.classname`
- [ID selector](/zh-TW/docs/Web/CSS/ID_selectors) `#idname`
- [Universal selector](/zh-TW/docs/Web/CSS/Universal_selectors) `*`, `ns|*`, `*|*`, `|*`
- [Attribute selector](/zh-TW/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Combinators

- [Adjacent sibling combinator](/zh-TW/docs/Web/CSS/Adjacent_sibling_selectors) `A + B`
- [General sibling combinator](/zh-TW/docs/Web/CSS/General_sibling_selectors) `A ~ B`
- [Child combinator](/zh-TW/docs/Web/CSS/Child_selectors) `A > B`
- [Descendant combinator](/zh-TW/docs/Web/CSS/Descendant_selectors) `A B`

### Pseudo-classes

- {{ Cssxref(":active") }}
- {{cssxref(':any')}}
- {{cssxref(':any-link')}}
- {{ Cssxref(":checked") }}
- {{ Cssxref(":default") }}
- {{ Cssxref(":defined") }}
- {{ Cssxref(":dir", ":dir()")}}
- {{ Cssxref(":disabled") }}
- {{ Cssxref(":empty") }}
- {{ Cssxref(":enabled") }}
- {{ Cssxref(":first") }}
- {{ Cssxref(":first-child") }}
- {{ Cssxref(":first-of-type") }}
- {{ Cssxref(":fullscreen") }}
- {{ Cssxref(":focus") }}
- {{ Cssxref(":focus-visible") }}
- {{ Cssxref(":host") }}
- {{ Cssxref(":host()") }}
- {{ Cssxref(":host-context()") }}
- {{ Cssxref(":hover") }}
- {{ Cssxref(":indeterminate") }}
- {{ Cssxref(":in-range") }}
- {{ Cssxref(":invalid") }}
- {{ Cssxref(":lang", ":lang()") }}
- {{ Cssxref(":last-child") }}
- {{ Cssxref(":last-of-type") }}
- {{ Cssxref(":left") }}
- {{ Cssxref(":link") }}
- {{ Cssxref(":not", ":not()") }}
- {{ Cssxref(":nth-child", ":nth-child()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":nth-last-of-type", ":nth-last-of-type()") }}
- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":only-child") }}
- {{ Cssxref(":only-of-type") }}
- {{ Cssxref(":optional") }}
- {{ Cssxref(":out-of-range") }}
- {{ Cssxref(":read-only") }}
- {{ Cssxref(":read-write") }}
- {{ Cssxref(":required") }}
- {{ Cssxref(":right") }}
- {{ Cssxref(":root") }}
- {{ Cssxref(":scope") }}
- {{ Cssxref(":target") }}
- {{ Cssxref(":valid") }}
- {{ Cssxref(":visited") }}

### Pseudo-elements

- {{ Cssxref("::after") }}
- {{ Cssxref("::backdrop") }}
- {{ Cssxref("::before") }}
- {{ Cssxref("::cue") }}
- {{ Cssxref("::first-letter") }}
- {{ Cssxref("::first-line") }}
- {{ Cssxref("::grammar-error") }} {{experimental_inline}}
- {{ Cssxref("::marker") }} {{experimental_inline}}
- {{ Cssxref("::placeholder") }} {{experimental_inline}}
- {{ Cssxref("::selection") }}
- {{ Cssxref("::spelling-error") }} {{experimental_inline}}

> **備註：** A complete [list of selectors](https://www.w3.org/TR/selectors/#selectors) in the Selectors Level 3 specification.

## Concepts

### Syntax and semantics

- [CSS syntax](/zh-TW/docs/Web/CSS/Syntax)
- [At-rules](/zh-TW/docs/Web/CSS/At-rule)
- [Cascade](/zh-TW/docs/Web/CSS/Cascade)
- [Comments](/zh-TW/docs/Web/CSS/Comments)
- [Descriptor](</zh-TW/docs/Glossary/Descriptor_(CSS)>)
- [Inheritance](/zh-TW/docs/Web/CSS/inheritance)
- [Shorthand properties](/zh-TW/docs/Web/CSS/Shorthand_properties)
- [Specificity](/zh-TW/docs/Web/CSS/Specificity)
- [Value definition syntax](/zh-TW/docs/Web/CSS/Value_definition_syntax)

### Values

- [Actual value](/zh-TW/docs/Web/CSS/actual_value)
- [Computed value](/zh-TW/docs/Web/CSS/computed_value)
- [Initial value](/zh-TW/docs/Web/CSS/initial_value)
- [Resolved value](/zh-TW/docs/Web/CSS/resolved_value)
- [Specified value](/zh-TW/docs/Web/CSS/specified_value)
- [Used value](/zh-TW/docs/Web/CSS/used_value)

### Layout

- [Block formatting context](/zh-TW/docs/Web/Guide/CSS/Block_formatting_context)
- [Box model](/zh-TW/docs/Web/CSS/box_model)
- [Containing block](/zh-TW/docs/Web/CSS/All_About_The_Containing_Block)
- [Layout mode](/zh-TW/docs/Web/CSS/Layout_mode)
- [Margin collapsing](/zh-TW/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Replaced elements](/zh-TW/docs/Web/CSS/Replaced_element)
- [Stacking context](/zh-TW/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Visual formatting model](/zh-TW/docs/Web/Guide/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### Major object types

- document.[styleSheets](/zh-TW/docs/Web/API/Document/styleSheets)
- styleSheets\[i].[cssRules](/zh-TW/docs/Web/API/CSSRuleList)
- cssRules\[i].[cssText](/zh-TW/docs/Web/API/CSSRule/cssText) (selector & style)
- cssRules\[i].[selectorText](/zh-TW/docs/Web/API/CSSStyleRule/selectorText)
- elem.[style](/zh-TW/docs/Web/API/HTMLElement/style)
- elem.style.[cssText](/zh-TW/docs/Web/API/CSSStyleDeclaration/cssText) (just style)
- elem.[className](/zh-TW/docs/Web/API/Element/className)
- elem.[classList](/zh-TW/docs/Web/API/Element/classList)

### Important methods

- {{domxref("CSSStyleSheet.insertRule")}}
- {{domxref("CSSStyleSheet.deleteRule")}}

## See also

- [Mozilla CSS extensions](/zh-TW/docs/Web/CSS/Mozilla_Extensions) (prefixed with `-moz`)
- [WebKit CSS extensions](/zh-TW/docs/Web/CSS/Webkit_Extensions) (mostly prefixed with `-webkit`)
- [Microsoft CSS extensions](/zh-TW/docs/Web/CSS/Microsoft_CSS_extensions) (prefixed with `-ms`)

---
title: Referencia CSS
slug: Web/CSS/Reference
---

Esta _Referencia CSS_ muestra la sintáxis básica de una regla CSS; lista todas las propiedades estándares [CSS](/es/docs/Web/CSS), [pseudo-classes](/es/docs/Web/CSS/Pseudo-classes) y [pseudo-elementos](/es/docs/Web/CSS/Pseudo-elements), [reglas-at](/es/docs/Web/CSS/CSS_syntax/At-rule), [unidades](/es/docs/Web/CSS/length), y [selectores](/es/docs/Web/CSS/Introducci%C3%B3n/Selectors), todos juntos en [orden alfabético](#keyword_index), así como los [selectores por tipo](#selectors); y le permitirá acceso rápido a la información detallada de cada uno de ellos. No solo lista las propiedades de CSS 1 y CSS 2.1, sino que también es una referencia de CSS3 que enlaza cualquier propiedad y concepto de [CSS3](/es/docs/Web/CSS/CSS3) estandarizado, o ya establecido. También incluye una breve [referencia DOM-CSS / CSSOM](#dom_css).

Tenga en cuenta que las definiciones de reglas CSS son completamente [basadas en texto](https://www.w3.org/TR/css-syntax-3/#intro) (ASCII), mientras que DOM-CSS / CSSOM, el sistema de gestión de reglas, está [basado en objetos](https://www.w3.org/TR/cssom/#introduction).

Vea también las [Extensiones CSS de Mozilla](/es/docs/Web/CSS/Mozilla_Extensions) para propiedades específicas de Gecko, que usan el prefijo `-moz`; y las [Extensiones CSS de WebKit](/es/docs/Web/CSS/Webkit_Extensions) para propiedades específicas de WebKit. Vea [Vendor-prefixed CSS Property Overview](https://peter.sh/experiments/vendor-prefixed-css-property-overview/) de Peter Beverloo como referencia a todas las propiedades con prefijo.

## Sintaxis de regla básica

Se advierte que cualquier error de sintaxis en una definición de regla invalidará la regla por completo.

### Sintaxis de regla de estilo

```
selectorlist {
   property: value;
   [more property:value; pairs]
}

...where selectorlist is: selector[:pseudo-class] [::pseudo-element] [, more selectorlists]

Ver selector, pseudo-elemento, pseudo-clase más abajo.
```

#### Ejemplos de reglas de estilo

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Para una introducción de nivel principiante a la sintaxis de los selectores de CSS, consulte [este tutorial](/es/docs/Learn_web_development/Core/Styling_basics/Basic_selectors). Tenga en cuenta que cualquier error de [sintaxis CSS](/es/docs/Web/CSS/CSS_syntax/Syntax) en una definición de regla hace que la regla completa se invalide. El navegador ignora las reglas no válidas. Tenga en cuenta que las definiciones de reglas CSS son totalmente (ASCII) [basadas en texto](https://www.w3.org/TR/css-syntax-3/#intro), mientras que DOM-CSS / CSSOM (el sistema de gestión de reglas) está [basado en objetos](https://www.w3.org/TR/cssom/#introduction).

### Sintaxis de las reglas-at (@rules)

Debido a que éstas tienen formatos de estructura variados, revise la sección [reglas-At](/es/docs/Web/CSS/CSS_syntax/At-rule) para ver la sintaxis de la regla deseada.

## Índice de palabras clave

> [!NOTE]
> Los nombres de propiedad en este índice **no** incluyen los [nombres de JavaScript](/es/docs/orphaned/Web/CSS/CSS_Properties_Reference) donde difieren de los nombres estándar de CSS.

{{CSS_Ref}}

## Selectores

### [Selectores básicos](/es/docs/Web/CSS/CSS_selectors#basic_selectors)

- [Selectores de tipo](/es/docs/Web/CSS/Type_selectors) `elementname`
- [Selectores de clase](/es/docs/Web/CSS/Class_selectors) `.classname`
- [Selectores de ID](/es/docs/Web/CSS/ID_selectors) `#idname`
- [Selectores universales](/es/docs/Web/CSS/Universal_selectors) `*`, `ns|*`, `*|*`, `|*`
- [Selectores de atributo](/es/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### [Combinadores](/es/docs/Web/CSS/CSS_selectors#combinators)

- [Selectores de hermanos adyacentes](/es/docs/Web/CSS/Next-sibling_combinator) `A + B`
- [Selectores de hermanos generales](/es/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
- [Selectores de hijo](/es/docs/Web/CSS/Child_combinator) `A > B`
- [Selectores de descendiente](/es/docs/Web/CSS/Descendant_combinator) `A B`

### [Pseudo-clases](/es/docs/Web/CSS/Pseudo-classes)

- {{ Cssxref(":active") }}
- {{ Cssxref(':any')}}
- {{ Cssxref(':any-link')}}
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

### [Pseudo-elementos](/es/docs/Web/CSS/Pseudo-elements)

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

> [!NOTE]
> **Ver también:** Una [lista completa de selectores](https://www.w3.org/TR/selectors/#selectors) en la especificación de Nivel 3 de Selectores.

## Conceptos

### Sintaxis y semántica

- [Sintaxis CSS](/es/docs/Web/CSS/CSS_syntax/Syntax)
- [Reglas-at](/es/docs/Web/CSS/CSS_syntax/At-rule)
- [Cascada](/es/docs/Web/CSS/Cascade)
- [Comentarios](/es/docs/Web/CSS/CSS_syntax/Comments)
- [Descriptor](</es/docs/Glossary/Descriptor_(CSS)>)
- [Herencia](/es/docs/Web/CSS/CSS_cascade/Inheritance)
- [Propiedades abreviadas](/es/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- [Especificidad](/es/docs/Web/CSS/CSS_cascade/Specificity)
- [Sintaxis de definición de valor](/es/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

### Valores

- [Valor actual](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
- [Valor calculado](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
- [Valor inicial](/es/docs/Web/CSS/CSS_cascade/Value_processing)
- [Valor resuelto](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4)
- [Valor específico](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1)
- [Valor utilizado](/es/docs/Web/CSS/used_value)

### Diseño

- [Contexto de formato de bloque](/es/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Modelo de caja](/es/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Containing block](/es/docs/Web/CSS/Containing_block)
- [Modo de diseño](/es/docs/Glossary/Layout_mode)
- [Margen colapsando](/es/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Elementos reemplazados](/es/docs/Web/CSS/CSS_images/Replaced_element_properties)
- [Contexto de apilamiento](/es/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Modelo de formato visual](/es/docs/Web/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### Tipos de objetos principales

- document.[styleSheets](/es/docs/Web/API/Document/styleSheets)
- styleSheets\[i].[cssRules](/es/docs/Web/API/CSSRuleList)
- cssRules\[i].[cssText](/es/docs/Web/API/CSSRule/cssText) (selector y estilo)
- cssRules\[i].[selectorText](/es/docs/Web/API/CSSStyleRule/selectorText)
- elem.[style](/es/docs/Web/API/HTMLElement/style)
- elem.style.[cssText](/es/docs/Web/API/CSSStyleDeclaration/cssText) (solo estilo)
- elem.[className](/es/docs/Web/API/Element/className)
- elem.[classList](/es/docs/Web/API/Element/classList)

### Métodos importantes

- {{domxref("CSSStyleSheet.insertRule")}}
- {{domxref("CSSStyleSheet.deleteRule")}}

## Tutoriales CSS3

Estas páginas describen las nuevas tecnologías que aparecieron en CSS3, o las de CSS2.1 que no tienen mucho soporte:

- [Uso de media queries con CSS](/es/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Uso de contadores con CSS](/es/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- [Uso de gradientes con CSS](/es/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Uso de transformaciones con CSS](/es/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- [Uso de animaciones con CSS](/es/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Uso de transiciones con CSS](/es/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [Uso de múltiples fondos con CSS](/es/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [Uso de las cajas flexibles con CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS)
- [Uso de columnas con CSS](/es/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)

## Ver también

- [Extensiones CSS de Mozilla](/es/docs/Web/CSS/Mozilla_Extensions) (con el prefijo `-moz`)
- [Extensiones CSS de WebKit](/es/docs/Web/CSS/Webkit_Extensions) (principalmente con el prefijo `-webkit`)
- [Extensiones CSS de Microsoft](/es/docs/Web/CSS/Microsoft_CSS_extensions) (con el prefijo `-ms`)

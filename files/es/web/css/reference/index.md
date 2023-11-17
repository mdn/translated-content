---
title: Referencia CSS
slug: Web/CSS/Reference
---

Esta _Referencia CSS_ muestra la sintáxis básica de una regla CSS; lista todas las propiedades estándares [CSS](/es/docs/Web/CSS), [pseudo-classes](/es/docs/Web/CSS/Pseudo-classes) y [pseudo-elementos](/es/docs/Web/CSS/Pseudoelementos), [reglas-at](/es/docs/Web/CSS/At-rule), [unidades](/es/docs/Web/CSS/length), y [selectores](/es/docs/Web/CSS/Introducci%C3%B3n/Selectors), todos juntos en [orden alfabético](#Keyword_index), así como los [selectores por tipo](#Selectors); y le permitirá acceso rápido a la información detallada de cada uno de ellos. No solo lista las propiedades de CSS 1 y CSS 2.1, sino que también es una referencia de CSS3 que enlaza cualquier propiedad y concepto de [CSS3](/es/docs/Web/CSS/CSS3) estandarizado, o ya establecido. También incluye una breve [referencia DOM-CSS / CSSOM](#DOM_CSS).

Tenga en cuenta que las definiciones de reglas CSS son completamente [basadas en texto](https://www.w3.org/TR/css-syntax-3/#intro) (ASCII), mientras que DOM-CSS / CSSOM, el sistema de gestión de reglas, está [basado en objetos](https://www.w3.org/TR/cssom/#introduction).

Vea también las [Extensiones CSS de Mozilla](/es/docs/Web/CSS/Referencia_CSS/Extensiones_CSS_Mozilla) para propiedades específicas de Gecko, que usan el prefijo `-moz`; y las [Extensiones CSS de WebKit](/es/docs/Web/CSS/CSS_Reference/Webkit_Extensions) para propiedades específicas de WebKit. Vea [Vendor-prefixed CSS Property Overview](http://peter.sh/experiments/vendor-prefixed-css-property-overview/) de Peter Beverloo como referencia a todas las propiedades con prefijo.

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

Para una introducción de nivel principiante a la sintaxis de los selectores de CSS, consulte [este tutorial](/es/docs/Learn/CSS/Introduction_to_CSS/Selectors). Tenga en cuenta que cualquier error de [sintaxis CSS](/es/docs/Web/CSS/syntax) en una definición de regla hace que la regla completa se invalide. El navegador ignora las reglas no válidas. Tenga en cuenta que las definiciones de reglas CSS son totalmente (ASCII) [basadas en texto](https://www.w3.org/TR/css-syntax-3/#intro), mientras que DOM-CSS / CSSOM (el sistema de gestión de reglas) está [basado en objetos](https://www.w3.org/TR/cssom/#introduction).

### Sintaxis de las reglas-at (@rules)

Debido a que éstas tienen formatos de estructura variados, revise la sección [reglas-At](/es/docs/Web/CSS/At-rule) para ver la sintaxis de la regla deseada.

## Índice de palabras clave

> **Nota:** Los nombres de propiedad en este índice **no** incluyen los [nombres de JavaScript](/es/docs/Web/CSS/CSS_Properties_Reference) donde difieren de los nombres estándar de CSS.

{{CSS_Ref}}

## Selectores

### [Selectores básicos](/es/docs/Web/CSS/CSS_Selectors#Basic_selectors)

- [Selectores de tipo](/es/docs/Web/CSS/Type_selectors) `elementname`
- [Selectores de clase](/es/docs/Web/CSS/Class_selectors) `.classname`
- [Selectores de ID](/es/docs/Web/CSS/ID_selectors) `#idname`
- [Selectores universales](/es/docs/Web/CSS/Universal_selectors) `*`, `ns|*`, `*|*`, `|*`
- [Selectores de atributo](/es/docs/Web/CSS/Selectores_atributo) `[attr=value]`

### [Combinadores](/es/docs/Web/CSS/CSS_Selectors#Combinators)

- [Selectores de hermanos adyacentes](/es/docs/Web/CSS/Selectores_hermanos_adyacentes) `A + B`
- [Selectores de hermanos generales](/es/docs/Web/CSS/Selectores_hermanos_generales) `A ~ B`
- [Selectores de hijo](/es/docs/Web/CSS/Child_selectors) `A > B`
- [Selectores de descendiente](/es/docs/Web/CSS/Descendant_selectors) `A B`

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

> **Nota:** **Ver también:** Una [lista completa de selectores](https://www.w3.org/TR/selectors/#selectors) en la especificación de Nivel 3 de Selectores.

## Conceptos

### Sintaxis y semántica

- [Sintaxis CSS](/es/docs/Web/CSS/Syntax)
- [Reglas-at](/es/docs/Web/CSS/At-rule)
- [Cascada](/es/docs/Web/CSS/Cascade)
- [Comentarios](/es/docs/Web/CSS/Comments)
- [Descriptor](</es/docs/Glossary/Descriptor_(CSS)>)
- [Herencia](/es/docs/Web/CSS/inheritance)
- [Propiedades abreviadas](/es/docs/Web/CSS/Shorthand_properties)
- [Especificidad](/es/docs/Web/CSS/Specificity)
- [Sintaxis de definición de valor](/es/docs/Web/CSS/Value_definition_syntax)

### Valores

- [Valor actual](/es/docs/Web/CSS/actual_value)
- [Valor calculado](/es/docs/Web/CSS/computed_value)
- [Valor inicial](/es/docs/Web/CSS/initial_value)
- [Valor resuelto](/es/docs/Web/CSS/resolved_value)
- [Valor específico](/es/docs/Web/CSS/specified_value)
- [Valor utilizado](/es/docs/Web/CSS/used_value)

### Diseño

- [Contexto de formato de bloque](/es/docs/Web/Guide/CSS/Block_formatting_context)
- [Modelo de caja](/es/docs/Web/CSS/box_model)
- [Containing block](/es/docs/Web/CSS/All_About_The_Containing_Block)
- [Modo de diseño](/es/docs/Web/CSS/Layout_mode)
- [Margen colapsando](/es/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [Elementos reemplazados](/es/docs/Web/CSS/Replaced_element)
- [Contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [Modelo de formato visual](/es/docs/Web/Guide/CSS/Visual_formatting_model)

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

- [Uso de media queries con CSS](/es/docs/CSS/Media_queries)
- [Uso de contadores con CSS](/es/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
- [Uso de gradientes con CSS](/es/docs/CSS/Using_CSS_gradients)
- [Uso de transformaciones con CSS](/es/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [Uso de animaciones con CSS](/es/docs/Web/CSS/CSS_Animations/Usando_animaciones_CSS)
- [Uso de transiciones con CSS](/es/docs/Web/CSS/Transiciones_de_CSS)
- [Uso de múltiples fondos con CSS](/es/docs/Web/CSS/CSS_Background_and_Borders/Using_CSS_multiple_backgrounds)
- [Uso de las cajas flexibles con CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS)
- [Uso de columnas con CSS](/es/docs/Columnas_con_CSS-3)

## Ver también

- [Extensiones CSS de Mozilla](/es/docs/Web/CSS/Mozilla_Extensions) (con el prefijo `-moz`)
- [Extensiones CSS de WebKit](/es/docs/Web/CSS/Webkit_Extensions) (principalmente con el prefijo `-webkit`)
- [Extensiones CSS de Microsoft](/es/docs/Web/CSS/Microsoft_CSS_extensions) (con el prefijo `-ms`)

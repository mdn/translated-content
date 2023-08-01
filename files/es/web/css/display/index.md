---
title: display
slug: Web/CSS/display
---

{{CSSRef}}

La propiedad CSS **`display`** especifica si un elemento es tratado como [block or inline element](/es/docs/Web/CSS/CSS_Flow_Layout) y el diseño usado por sus hijos, como [flow layout](/es/docs/Web/CSS/CSS_Flow_Layout)(Diseño de Flujo), [grid](/es/docs/Web/CSS/CSS_Grid_Layout)(Cuadricula) o [flex](/es/docs/Web/CSS/CSS_Flexible_Box_Layout)(Flexible).

Formalmente la propiedad `display` establece los tipos de visualización interna y externa de un elemento. La tipo externa establece la participacion de un elemento en [flow layout](/es/docs/Web/CSS/CSS_Flow_Layout); la tipo interna establece el layout(Diseño) de los hijos. Algunos valores de `display` estan totalmente definidos con sus especificaciones propias; por ejemplo el detalle de que pasa cuando `display: flex` es declarado y definido en la especificacion de Modelo Flexible de Caja(Flexible Box Model specification) de CSS. **Vea** la siguientes tablas para mas especificaciones individuales.

Además de los Diferentes Tipos de caja de Visualizacion, el valor de `none` permite Desactivar la Visualizacion DE UN Elemento; cuando no se utiliza `none`, todos los elementos descendentes también quedan desactivados. El documento se procesa como si el elemento no existiera en el árbol de documentos.

```css
/ * Valores <display-outside> * /

display: block;
display: inline;
display: run-in;

/ * Valores <display-inside> * /
display: flow;
display: flow-root;
display: table;
display: flex;
display: grid;
display: ruby;
display: subgrid;

/ * Valores <display-outside> más valores <display-inside> * /
display: block flow;
display: inline table;
display: flex run-in;

/ * Valores <display-listitem> * /
display: list-item;
display: list-item block;
display: list-item inline;
display: list-item flow;
display: list-item flow-root;
display: list-item block flow;
display: list-item block flow-root;
display: flow list-item block;

/ * Valores <display-internal> * /
display: table-row-group;
display: table-header-group;
display: table-footer-group;
display: table-row;
display: table-cell;
display: table-column-group;
display: table-column;
display: table-caption;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;

/ * Valores <display-box> * /
display: contents;
display: none;

/ * Valores <display-legacy> * /
display: inline-block;
display: inline-table;
display: inline-flex;
display: inline-grid;

/ * Valores globales * /
display: heredar;
display: initial;
display: unset;
```

{{cssinfo}}

## Sintaxis

La propiedad `display` se especifica mediante valores de palabras clave. Los valores de palabras clave se agrupan en seis categorías:

- [\<display-outside>](#display-outside)
- [\<display-inside>](#display-inside)
- [\<display-listitem>](#display-listitem)
- [\<display-internal>](#display-internal)
- [\<display-box>](#display-box)
- [\<display-legacy>](#display-legacy)

En la actualidad, es mejor especificar `display` utilizando una sola palabra clave; aunque las últimas especificaciones permiten combinar algunas palabras clave, esto aún no está bien soportado por los navegadores.

### Valores

- \<display-outside>

  - : Estas palabras clave especifican el tipo de pantalla externa del elemento, que es esencialmente su función en el diseño de flujo: A continuación se definen:

    | Valor                            | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `block`                          | El elemento genera un cuadro de elemento de bloque.                                                                                                                                                                                                                                                                                                                                                                                                                        |
    | `inline`                         | El elemento genera uno o más cuadros de elemento en línea.                                                                                                                                                                                                                                                                                                                                                                                                                 |
    | `run-in` {{experimental_inline}} | El elemento genera un cuadro de ejecución. Los elementos de ejecución actúan como líneas o bloques, dependiendo de los elementos circundantes. Es decir: Si el cuadro de ejecución contiene un cuadro de bloque, igual que el bloque. Si un cuadro de bloque sigue el cuadro de ejecución, el cuadro de ejecución se convierte en el primer cuadro en línea del cuadro de bloque. Si sigue un cuadro en línea, el cuadro de ejecución se convierte en un cuadro de bloque. |

- \<display-inside>

  - : Estas palabras clave especifican el tipo de pantalla interna del elemento, que define el tipo de contexto de formato que establece su contenido (suponiendo que es un elemento no reemplazado). Se definen como sigue:

    | Valor                               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `flow` {{experimental_inline}}      | El elemento expone su contenido utilizando el diseño de flujo (diseño en bloque y en línea).Si su tipo de pantalla externa es inline o run-in, y está participando en un contexto de formato de bloque o en línea, entonces genera un cuadro en línea. De lo contrario genera una caja de contenedor de bloques.Dependiendo del valor de otras propiedades (como {{cssxref("position")}}, {{cssxref("float")}} o {{cssxref("overflow")}} en un contexto de formato en bloque o en línea, establece un nuevo [contexto de formato de bloque](/es/docs/Web/Guide/CSS/Block_formatting_context) para su contenido o integra su contenido en su contexto de formato padre. |
    | `flow-root` {{experimental_inline}} | El elemento genera un cuadro de elemento de bloque que establece un nuevo [contexto de formato de bloque](/es/docs/Web/Guide/CSS/Block_formatting_context) .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | `table`                             | Estos elementos se comportan como elementos HTML {{HTMLElement ("table")}}. Define un cuadro de nivel de bloque.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | `flex`                              | El elemento se comporta como un elemento de bloque y establece su contenido de acuerdo con el [modelo de flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout) .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | `grid`                              | El elemento se comporta como un elemento de bloque y establece su contenido de acuerdo con el modelo de cuadrícula.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | `subgrid` {{experimental_inline}}   | Si el elemento padre tiene `display:grid`, el elemento en sí y su contenido se establecen de acuerdo con el modelo de cuadrícula.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | `ruby` {{experimental_inline}}      | El elemento se comporta como un elemento en línea y establece su contenido de acuerdo con el modelo de formato ruby. Se comporta como los elementos HTML {{HTMLElement ("ruby")}} correspondientes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

- \<display-listitem>

  - : El elemento genera un cuadro de bloque para el contenido y un cuadro en línea de elemento de lista independiente.

    Si no se especifica ningún valor `<display-inside>`, el tipo de pantalla interna de la caja principal es el predeterminado `flow`. Si no se especifica ningún valor `<display-outside>`, el tipo de pantalla externa de la caja principal tiene el valor predeterminado `block`.

- \<display-internal>

  - : Algunos modelos de disposición, como table y ruby, tienen una estructura interna completa, con varios papeles diferentes que sus hijos y descendientes pueden llenar. Esta sección define los valores de visualización "internos", que sólo tienen significado dentro de ese modo de disposición particular.

    A menos que se especifique lo contrario, el tipo de visualización interno y el tipo de visualización exterior de los elementos que utilizan estos valores de visualización se establecen en la palabra clave dada.

    | Valor                                         | Descripción                                                                                        |
    | --------------------------------------------- | -------------------------------------------------------------------------------------------------- |
    | `table-row-group`                             | Estos elementos se comportan como {{HTMLElement ("tbody")}} Elementos HTML                         |
    | `table-header-group`                          | Estos elementos se comportan como elementos HTML de {{HTMLElement ("thead")}}.                     |
    | `table-footer-group`                          | Estos elementos se comportan como elementos HTML {{HTMLElement ("tfoot")}}.                        |
    | `table-row`                                   | Estos elementos se comportan como elementos HTML {{HTMLElement ("tr")}}.                           |
    | `table-cell`                                  | Estos elementos se comportan como elementos HTML de {{HTMLElement ("td")}}.                        |
    | `table-column-group`                          | Estos elementos se comportan como elementos HTML {{HTMLElement ("colgroup")}}.                     |
    | `table-column`                                | Estos elementos se comportan como elementos HTML {{HTMLElement ("col")}}.                          |
    | `table-caption`                               | Estos elementos se comportan como elementos HTML de {{HTMLElement ("caption")}}.                   |
    | `ruby-base` {{experimental_inline}}           | Estos elementos se comportan como elementos {{HTMLElement ("rb")}}.                                |
    | `ruby-text` {{experimental_inline}}           | Estos elementos se comportan como elementos {{HTMLElement ("rt")}}.                                |
    | `ruby-base-container` {{experimental_inline}} | Estos elementos se comportan como elementos {{HTMLElement ("rbc")}} generados como cajas anónimas. |
    | `ruby-text-container` {{experimental_inline}} | Estos elementos se comportan como elementos {{HTMLElement ("rtc")}}.                               |

- \<display-box>

  - : Estos valores se definen si un elemento genera cuadros de visualización en absoluto.

    | Valor                              | Descripción                                                                                                                                                                                                                                                                                                                                                       |
    | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `contents` {{experimental_inline}} | Estos elementos no producen una caja específica por sí mismos. Son reemplazados por su pseudo-caja y sus cajas infantiles.                                                                                                                                                                                                                                        |
    | `none`                             | Desaparece la visualización de un elemento para que no tenga ningún efecto en el diseño (el documento se representa como si el elemento no existiera). Todos los elementos descendentes también tienen su pantalla apagada.Para que un elemento ocupe el espacio que normalmente tendría, pero sin producir nada, utilice la propiedad {{cssxref("visibility")}}. |

- \<display-legacy>

  - : CSS 2 usó una sintaxis de palabra clave única para la propiedad `display`, requiriendo palabras clave separadas para variantes de nivel de bloque e inline del mismo modo de disposición. Se definen como sigue:

    | Valor          | Descripción                                                                                                                                                                                                                                                                                               |
    | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `inline-block` | El elemento genera una caja de elemento de bloque que fluye con el contenido circundante como si fuera una sola caja en línea (comportándose como un elemento reemplazado)Es equivalente a `inline flow-root`.                                                                                            |
    | `inline-table` | El valor `inline-table` no tiene una asignación directa en HTML. Se comporta como un elemento HTML {{HTMLElement ("tabla")}}, pero como un cuadro en línea, en el lugar de un cuadro a nivel de bloque. Dentro del cuadro de la tabla hay un contexto de nivel de bloque.Es equivalente a `inline table`. |
    | `inline-flex`  | El elemento se comporta como un elemento en línea y se establece su contenido de acuerdo con el modelo flexbox.Es equivalente a `inline flex`.                                                                                                                                                            |
    | `inline-grid`  | El elemento se comporta como un elemento en línea y se establece su contenido de acuerdo con el modelo de cuadrícula.                                                                                                                                                                                     |

### Sintaxis formal

{{csssyntax}}

## Sobre Accesibilidad

### `display: none;`

Al utilizar un valor de `none` en la propiedad `display` el elemento se elimina del [árbol de accesibilidad](/es/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs). El efecto de esto será que este elemento y sus hijos no serán anunciados a los lectores de pantalla utilizados por no videntes.

Si deseas ocultar el elemento solo de forma visible, pero que los lectores de accesibilidad lo sigan anunciando, puedes utilizar [un método alternativo con una combinación de propiedades de CSS](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link).

### `display: contents;`

Los navegadores eliminarán el atributo predeterminado de `role` de cualquier elemento con una propiedad `display` que tenga un valor de `contents` del árbol de accesibilidad. Esto causará que los elementos y sus descendientes no sean anunciados a los lectores de pantalla.

Esto es un bug ya reportado, para encontrar más información por favor referirse a los siguientes artículos

- [Display: Contents Is Not a CSS Reset | Adrian Roselli](http://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [More accessible markup with display: contents — hiddedevries.nl](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)

### Tablas

Al trabajar con una tabla, si la propiedad `display` cambia al valor de `block`, `grid` o `flex` se altera la representación de ese elemento en el árbol de accessibilidad. Esto causará que el elemento ya no será anunciado como una tabla.

Para más información por favor referirse a los siguientes artículos:

- [Short note on what CSS display properties do to table semantics — The Paciello Group](https://developer.paciellogroup.com/blog/2018/03/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Ejemplos

### Ocultar Elementos

#### Contenido HTML

```html
<p>Texto visible</p>
```

#### Contenido CSS

```css
display: none;
```

### Resultado

{{EmbedLiveSample ("Hide_element", 300, 60)}}

[Ver El Ejemplo Vivo](/samples/cssref/display.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{cssxref("visibility")}}, {{cssxref("float")}}, {{cssxref("posición")}}
- {{cssxref("flex")}}

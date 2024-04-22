---
title: padding
slug: Web/CSS/padding
l10n:
  sourceCommit: 3c09214457e67106a16594c333dbae8b2be67e6f
---

{{CSSRef}}

La [propiedad abreviada](/es/docs/Web/CSS/Shorthand_properties) de [CSS](/es/docs/Web/CSS) **`padding`** establece el área de relleno en los cuatro lados de un elemento a la vez.

{{EmbedInteractiveExample("pages/css/padding.html")}}

El área de relleno de un elemento es el espacio entre su contenido y su borde.

> **Nota:** El relleno crea espacio adicional dentro de un elemento. Por el contrario, {{cssxref("margin")}} crea espacio extra _alrededor_ de un elemento.

## Propiedades constituyentes

Esta propiedad es una abreviatura de las siguientes propiedades CSS:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

## Sintaxis

```css
/* Aplica a los cuatro lados */
padding: 1em;

/* arriba y abajo | izquierda y derecha */
padding: 5% 10%;

/* arriba | izquierda y derecha | abajo */
padding: 1em 2em 2em;

/* arriba | derecha | abajo | izquierda */
padding: 5px 1em 0 2em;

/* Valores globales */
padding: inherit;
padding: initial;
padding: revert;
padding: revert-layer;
padding: unset;
```

La propiedad `padding` se puede especificar utilizando uno, dos, tres o cuatro valores. Cada valor es una {{cssxref("length","&lt;longitud&gt;")}} o un {{cssxref("percentage","&lt;porcentaje&gt;")}}. Los valores negativos no son válidos.

- Cuando se especifica **un** valor, se aplica el mismo relleno a **los cuatro lados**.
- Cuando se especifican **dos** valores, el primer relleno se aplica a la parte de **arriba y abajo**, el segundo a la **izquierda y la derecha**.
- Cuando se especifican **tres** valores, el primer relleno se aplica a la parte de **arriba**, el segundo a la **derecha e izquierda**, el tercero a la parte de **abajo**.
- Cuando se especifican **cuatro** valores, los rellenos se aplican a la parte de **arriba**, **derecha**, **abajo** e **izquierda** en ese orden (en el sentido de las agujas del reloj).

### Valores

- {{cssxref("length","&lt;longitud&gt;")}}
  - : El tamaño del relleno como un valor fijo.
- {{cssxref("percentage","&lt;porcentaje&gt;")}}
  - : El tamaño del relleno como porcentaje, en relación con el tamaño en línea (_ancho_ en un idioma de escritura horizontal, definido por {{cssxref("writing-mode")}}) del [bloque contenedor](/es/docs/Web/CSS/Containing_block).

## Definicion formal

{{cssinfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Estableciendo relleno con píxeles

#### HTML

```html
<h4>Este elemento tiene un relleno moderado.</h4>
<h3>¡El relleno es enorme en este elemento!</h3>
```

#### CSS

```css
h4 {
  background-color: lime;
  padding: 20px 50px;
}

h3 {
  background-color: cyan;
  padding: 110px 50px 50px 110px;
}
```

#### Resultado

{{EmbedLiveSample('Setting_padding_with_pixels', '100%', 300)}}

### Estableciendo relleno con píxeles y porcentajes

```css
padding: 5%; /* Todos los lados: 5% de relleno */

padding: 10px; /* Todos los lados: 10px de relleno */

padding: 10px 20px; /* arriba y abajo:      10px  de relleno */
/* izquierda y derecha: 20px  de relleno */

padding: 10px 3% 20px; /* arriba:              10px  de relleno */
/* izquierda y derecha: 3%  de relleno   */
/* abajo:               20px  de relleno */

padding: 1em 3px 30px 5px; /* arriba:      1em  de relleno  */
/* derecha:     3px  de relleno  */
/* abajo:       30px  de relleno */
/* izquierda:   5px  de relleno  */
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Introducción al modelo de caja básica CSS](/es/docs/Web/CSS/CSS_Box_Model/introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, y {{cssxref("padding-left")}}.
- Las propiedades lógicas asignadas: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, y {{cssxref("padding-inline-end")}} y las abreviaciones {{cssxref("padding-block")}} y {{cssxref("padding-inline")}}

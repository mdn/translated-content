---
title: Herencia
slug: Web/CSS/CSS_cascade/Inheritance
original_slug: Web/CSS/Inheritance
---

{{ CSSRef() }}

### Resumen

El resumen de cada [definición de propiedad CSS](/es/Gu%c3%ada_de_referencia_de_CSS) indica si esa propiedad es heredada por defecto ("Inherit: Yes") o no ("Inherit: no"). Esto controla lo que sucede al no especificar un valor concreto para una propiedad de un elemento.

### Propiedades heredadas

Cuando no se especifica un valor para un elemento de una propiedad **inherited property**, el elemento toma el {{ Cssxref("computed value", "valor calculado") }} de la propiedad de su elemento padre. Sólo los elementos raíz de un documento obtienen el valor {{ Cssxref("initial", "inicial") }} dado en el resumen de la propiedad.

Un ejemplo característico de una propiedad heredada es la propiedad {{ Cssxref("color") }}. Definida con las siguientes reglas de estilo:

```
 p { color: green }
```

y el código HTML siguiente:

```
 <p>Este párrafo tiene <em>texto enfatizado</em> en su interior.</p>
```

las palabras "texto enfatizado" aparecerá en verde, ya que el elemento `em` ha heredado el valor de la propiedad {{ Cssxref("color") }} a partir del elemento `p`._No_ recoge el valor inicial de la propiedad (que es el color que es usado por el elemento raíz cuando la página especifica que no hay color).

### Propiedades no heredadas

Si no se especifica un valor para una propiedad no heredada (_non-inherited property_) (a veces llamada **reset property** en el código Mozilla), el elemento toma el valor {{ Cssxref("initial", "inicial") }} de dicha propiedad (como se especifica en el resumen de ésa propiedad).

Un ejemplo característico de una propiedad no heredada es la del {{ Cssxref("border", "borde") }}. Definida con las siguientes reglas de estilo:

```
 p { border: medium solid }
```

y la etiqueta HTML:

```
 <p>Este párrafo tiene <em>texto enfatizado</em> en su interior.</p>
```

las palabras "texto enfatizado" no tendrán borde (ya que el valor inicial del {{ Cssxref("border-style", "estilo de borde") }} es `none`).

### Notas

Las palabras de código {{ Cssxref("inherit") }} permiten al autor definir, explícitamente, la posibilidad de herencia. Funciona para las propiedades heredadas y las no heredadas.

### Ver también

{{ Cssxref("inherit") }}, {{ Cssxref("Valor inicial") }}

Categorías

Interwiki Languages

---
title: bottom
slug: Web/CSS/bottom
l10n:
  sourceCommit: e9a39cf29e4d40513b19c79abfe10b6338dde8dd
---

{{CSSRef}}

La propiedad **`bottom`** de [CSS](/es/docs/Web/CSS) establece la posición vertical de un [elemento posicionado](/es/docs/Web/CSS/position). No tiene efecto en elementos no posicionados.

{{EmbedInteractiveExample("pages/css/bottom.html")}}

El efecto de la propiedad `bottom` depende de cómo esté posicionado el elemento (es decir, del valor de la propiedad {{cssxref("position")}}):

- Cuando `position` se establece como `absolute` o `fixed`, la propiedad `bottom` especifica la distancia entre el borde exterior del [margen inferior](/es/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) del elemento y el borde exterior del relleno inferior del bloque contenedor.

- Cuando `position` se establece en `relative`, la propiedad `bottom` especifica la distancia a la que se mueve el borde inferior del elemento con respecto a su posición normal.

- Cuando `position` se establece como `sticky`, la propiedad `bottom` se utiliza para calcular el modelo de restricción pegajosa.

- Cuando `position` se establece como `static`, la propiedad `bottom` no tiene _efecto_.

Cuando se especifican tanto {{cssxref("top")}} como `bottom`, `position` se establece como `absolute` o `fixed`, _y_ la {{cssxref("height", "altura")}} no está especificada (ya sea como `auto` o `100%`), se respetan tanto las distancias de `top` como de `bottom`. En todas las demás situaciones, si la {{cssxref("height", "altura")}} está restringida de alguna manera o `position` se establece como `relative`, la propiedad `top` tiene prioridad y la propiedad `bottom` se ignora.

## Sintaxis

```css
/* <longitud> valores */
bottom: 3px;
bottom: 2.4em;

/* <porcentaje>s de la altura del bloque contenedor */
bottom: 10%;

/* valor de palabra clave */
bottom: auto;

/* Valores globales */
bottom: inherit;
bottom: initial;
bottom: revert;
bottom: revert-layer;
bottom: unset;
```

### Valores

- {{cssxref("&lt;length&gt;")}}

  - : Una {{cssxref("&lt;length&gt;", "longitud")}} negativa, nula o positiva que representa:

    - para _elementos posicionados absolutamente_, la distancia hasta el borde inferior del bloque contenedor..
    - para _elementos posicionados relativamente_, la distancia que el elemento se mueve por encima de su posición normal..

- {{cssxref("&lt;percentage&gt;")}}
  - : Un {{cssxref("&lt;percentage&gt;", "porcentaje")}} de la altura del bloque contenedor.
- `auto`

  - : Especifica que:

    - para _elementos posicionados absolutamente_, la posición del elemento esta basado en la propiedad {{Cssxref("top")}}, mientras que `height: auto` se trata como una altura según el contenido; o si `top` es también `auto`, el elemento se coloca donde debería ubicarse verticalmente si fuera un elemento estático.
    - para _elementos posicionados relativamente_, la distancia del elemento de su posición normal se basa en la propiedad {{Cssxref("top")}}; o si `top` tambièn es `auto`, el elemento no se mueve verticalmente.

- `inherit`
  - : Especifica que el valor es el mismo que el valor calculado de su elemento padre (que podría no ser su bloque contenedor). Este valor calculado se maneja entonces como si fuera un {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, o `auto`.

## Definición formal

{{cssinfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Posicionamiento absoluto y fijo

Este ejemplo demuestra la diferencia en el comportamiento de la propiedad `bottom`, cuando la {{cssxref("position")}} es `absolute` versus `fixed`.

#### HTML

```html
<p>
  This<br />is<br />some<br />tall,<br />tall,<br />tall,<br />tall,<br />tall<br />content.
</p>
<div class="fixed"><p>Fixed</p></div>
<div class="absolute"><p>Absolute</p></div>
```

#### CSS

```css
p {
  font-size: 30px;
  line-height: 2em;
}

div {
  width: 48%;
  text-align: center;
  background: rgba(55, 55, 55, 0.2);
  border: 1px solid blue;
}

.absolute {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

#### Resultado

{{EmbedLiveSample('Absolute_and_fixed_positioning','500','250')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("inset")}}, abreviatura de todas las propiedades relacionadas: {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, y {{cssxref("right")}}
- Las propiedades lógicas: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, e {{cssxref("inset-inline-end")}} y las abreviaturas {{cssxref("inset-block")}} e {{cssxref("inset-inline")}}
- {{cssxref("position")}}

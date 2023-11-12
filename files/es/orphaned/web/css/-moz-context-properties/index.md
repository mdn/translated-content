---
title: "-moz-context-properties"
slug: orphaned/Web/CSS/-moz-context-properties
original_slug: Web/CSS/-moz-context-properties
---

{{CSSRef}}{{Non-standard_header}}

> **Nota:** Este recurso esta disponible desde Firefox 55, pero solamente es compatible con imagenes SVG cargadas via `chrome://` o `resource://` URLs. Para experimentar con la caracteristica SVG en la web, es necesario poner `svg.context-properties.content.enabled` en `true`.

Si mencionas una imagen SVG en una pagina web({{htmlelement("img")}} como elemento o como fondo de pagina), la imagen SVG puede coordinarse con el elemento incrustado(su contexto) para que la imagen adopte las propiedades puestas en el elemento incrustado. Para hacer esto, el elemento incrustado necesita listar las propiedades que deben estar disponibles para la imagen listadolas como valores de la propiedad **`-moz-context-properties`**, y la imagen necesita optar a usar esas propiedades utilizando valores tales como el valor de `context-fill`.

{{cssinfo}}

## Sintaxis

```css
/* Keyword values */
-moz-context-properties: fill;
-moz-context-properties: fill, stroke;

/* Global values */
-moz-context-properties: inherit;
-moz-context-properties: initial;
-moz-context-properties: unset;
```

### Valores

- `fill`
  - : Expone el valor de `fill` determinado en la imagen del SVG.
- `stroke`
  - : Expone el valor de `stroke` determinado en la imagen del SVG..
- `fill-opacity`
  - : Expone el valor de `fill-opacity` determinado en la imagen del SVG.
- `stroke-opacity`
  - : Expone el valor de `stoke-opacity` determinado en la imagen del SVG.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

En este ejemplo tenemos un SVG sencillo utilizando un elemento `<img>`.

Primero necesitas especificar en el elemento incrustado las propiedades cuyos valores quieres exponer al SVG, utilizando la propiedad `-moz-context-properties`. Por ejemplo:

```css
.img1 {
  width: 100px;
  height: 100px;
  -moz-context-properties: fill, stroke;
  fill: lime;
  stroke: purple;
}
```

Ahora que has hecho eso la imagen SVG puede utlizar los valores de {{cssxref("fill")}} y {{cssxref("stroke")}} , por ejemplo:

```html
<img class="img1" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'>
                       <rect width='100%' height='100%' stroke-width='30px'
                       fill='context-fill red' stroke='context-stroke' fill-opacity='0.5'/></svg>">
```

Aqui hemos puesto que la imagen `src` sea una URL de datos que contiene una imagen SVG simple; el `<rect>` de dentro ha sido hecho para coger sus valores de `fill` y `stroke` de {{cssxref("fill")}} y {{cssxref("stroke")}} puestos en el elemento `<img>` poniendo `context-fill`/`context-stroke` en sus valores asi como un color para rellenar(rojo) que sera utilizado en caso que el SVG es cargado independientemente en una ventana superior(donde no tendra contexto para dar los valores ). Tener en cuenta que si un colore es directamente puesto en el SVG, pero el color del contexto tambien es especificado, el color del contexto sobreescribe el color directo.

> **Nota:** Puedes en contrar un [ejemplo de ejecucion en Github](https://mdn.github.io/css-examples/moz-context-properties/).

## Especificaciones

Esta propiedad no esta definida en ningun estándar de CSS.

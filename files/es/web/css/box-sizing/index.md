---
title: box-sizing
slug: Web/CSS/box-sizing
---

{{CSSRef}}

La propiedad CSS **`box-sizing`** como el {{glossary("user agent")}} debe calcular el ancho y alto total de un elemento.

{{EmbedInteractiveExample("pages/css/box-sizing.html")}}

Por defecto en el [modelo de caja de CSS](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), el ancho y alto asignado a un elemento es aplicado solo al contenido de la caja del elemento. Si el elemento tiene algun borde (border) o relleno (padding), este es entonces añadido al ancho y alto a alcanzar el tamaño de la caja que es desplegada en pantalla. Esto significa que cuando se definen el ancho y alto, se tiene que ajustar el valor definido para permitir cualquier borde o relleno que se pueda añadir.

La propiedad `box-sizing` puede ser usada para ajustar el siguiente comportamiento:

- `content-box` es el comportamiento CSS por defecto para el tamaño de la caja (box-sizing). Si se define el ancho de un elemento en 100 pixeles, la caja del contenido del elemento tendrá 100 pixeles de ancho, y el ancho de cualquier borde o relleno ser añadirá al ancho final desplegado.
- `border-box` le dice al navegador tomar en cuenta para cualquier valor que se especifique de borde o de relleno para el ancho o alto de un elemento. Es decir, si se define un elemento con un ancho de 100 pixeles. Esos 100 pixeles incluíran cualquier borde o relleno que se añadan, y la caja de contenido se encogerá para absorber ese ancho extra. Esto típicamente hace mucho más fácil dimensionar elementos.

## Sintaxis

La propiedad `box-sizing` es especificada como una sola palabra clave elegida de la lista de valores que aparece abajo.

### Valores

- `content-box`

  - : Este es el valor inicial y por defecto especificado por el estándar CSS. Las propiedades {{Cssxref("width")}} and {{Cssxref("height")}} no incluyen el borde, relleno o margen. Por ejemplo, `.box {width: 350px; border: 10px solid black;}` despliega una caja con un ancho de 370 pixeles.

    Aquí, las dimensiones de un elemento son calculados como: ancho = ancho del contenido, altura = altura del contenido. (Los bordes y rellenos no son incluídos en el cálculo.)

- `border-box`

  - : Las propiedad de {{Cssxref("width")}} y {{Cssxref("height")}} incluyen el contenido, relleno y borde pero no incluyen el margén. Tenga en cuenta que el relleno y borde estarán dentro de la caja. Por ejemplo, `.box {width: 350px; border: 10px solid black;}` despliega una caja con un ancho de 350 pixeles. La caja de contenidos no puede ser negativo y tiene un valor mínimo de 0, haciendo imposible usar el `border-box` para hacer que el elemento desaparezca.

    Las dimensiones del elemeno se calculan como: ancho = borde + relleno + ancho del contenido, y altura = borde + relleno + altura del contenido.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

Este ejemplo muesta cómo diferentes valores de tamaño de la caja (`box-sizing`) alteran el tamaño desplegado de dos elementos idénticos.

### HTML

```html
<div class="content-box">Contenido de la caja</div>
<br />
<div class="border-box">Borde de la caja</div>
```

### CSS

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* Ancho  total: 160px + (2 * 20px) + (2 * 8px) = 216px
     Altura total: 80px + (2 * 20px) + (2 * 8px) = 136px
     Ancho de la caja de contenido: 160px
     Altura de la caja de contenido: 80px */
}

.border-box {
  box-sizing: border-box;
  /* Ancho total: 160px
     Altura total: 80px
     Ancho de la caja de contenido: 160px - (2 * 20px) - (2 * 8px) = 104px
     Altura de la caja de contenido: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

### Resultado

{{EmbedLiveSample('Ejemplo', 'auto', 300)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Modelo de caja de CSS](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

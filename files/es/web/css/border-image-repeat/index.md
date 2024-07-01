---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
---

{{CSSRef}}

## Resumen

La propiedad CSS **`border-image-repeat`** define cómo se manejará la parte media de una imagen de borde para que coincida con el tamaño del borde. Tiene sintaxis de un valor, el cual describe el comportamiento de todos los lados, y otra sintaxis de dos valores, que establece diferentes valores para el comportamiento horizontal y vertical.

{{cssinfo}}

## Sintaxis

```css
/* border-image-repeat: type */
border-image-repeat: stretch;

/* border-image-repeat: horizontal vertical */
border-image-repeat: round stretch;

/* Global values */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: unset;
```

### Valores

- _type_
  - : Puede ser `stretch`, `repeat`, o `round`, que denotan cómo será tratada la imagen vertical y horizontalmente.
- _horizontal_
  - : Puede ser `stretch`, `repeat`, o `round`, denotando cómo será tratada la imagen horizontalmente.
- _vertical_
  - : Puede ser `stretch`, `repeat`, o `round`, denotando cómo será tratada la imagen verticalmente.
- `stretch`
  - : Palabra clave que indica que la imagen deberá ser estirada para cubrir el espacio entre dos bordes.
- `repeat`
  - : Palabra clave que indica que la imagen debe ser repetida hasta que cubra el espacio entre dos bordes.
- `round`
  - : Palabra clave que indica que la imagen debe ser repetida hasta que cubra el espacio entre dos bordes. Si la imagen no se ajusta después de repetirse un número íntegro de veces, la imagen es escalada para ajustarse.
- `space`
  - : La imagen es repetida hasta cubrir el área del elemento. Si no se cubre el área completa con un número de imágenes, el espacio extra es distribuido al rededor de éstas.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### Contenido CSS

```css
#borderImageRepetition {
  width: 260px;
  height: 80px;
  margin-bottom: 10px;
  border: 30px solid;
  border-image: url("border.png") 27;
  border-image-repeat: stretch; /* Puede ser modificado en el ejemplo en vivo */
}
```

```html hidden
<div id="borderImageRepetition"></div>
<select id="repetition">
  <option value="stretch">stretch</option>
  <option value="repeat">repeat</option>
  <option value="round">round</option>
  <option value="space">space</option>
  <option value="stretch repeat">stretch repeat</option>
  <option value="space round">space round</option>
</select>
```

```js hidden
var repetition = document.getElementById("repetition");
repetition.addEventListener("change", function (evt) {
  document.getElementById("borderImageRepetition").style.borderImageRepeat =
    evt.target.value;
});
```

{{EmbedLiveSample("Example", "330px", "180px")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [css-tricks border-image](https://css-tricks.com/almanac/properties/b/border-image/)

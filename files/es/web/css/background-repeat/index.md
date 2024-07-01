---
title: background-repeat
slug: Web/CSS/background-repeat
---

{{CSSRef}}

La propiedad de [CSS](/es/docs/Web/CSS) **`background-repeat`** define como se repiten los fondos del documento. Un fondo de imagen puede ser repetido sobre el eje horizontal, el eje vertical, ambos ejes, o no estar repetido.

{{EmbedInteractiveExample("pages/css/background-repeat.html")}}

La fuente de este ejemplo interactivo es de GitHub. Si estás interesado en contribuir a los ejemplos interactivos, por favor accee a <https://github.com/mdn/interactive-examples> y envíanos una solicitud para colaborar.

```css
/* One-value syntax */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Global values */
background-repeat: inherit;
background-repeat: initial;
background-repeat: unset;
```

Por defecto, las imágenes repetidas son ajustadas al tamaño del elemento, pero pueden ser reescaladas para ajustarse (usando _round)_ o igualmente distribuido desde un extremo a otro (usando _space_).

{{cssinfo}}

## Sintaxis

### Valores

- `<repeat-style>`

  - : Los atributos de valor único son una abreviación de los atributos de doble valor.

    | **Valor único** | **Doble valor equivalente** |
    | --------------- | --------------------------- |
    | `repeat-x`      | `repeat no-repeat`          |
    | `repeat-y`      | `no-repeat repeat`          |
    | `repeat`        | `repeat repeat`             |
    | `space`         | `space space`               |
    | `round`         | `round round`               |
    | `no-repeat`     | `no-repeat no-repeat`       |

    En los atributos de doble valor, el primer valor se comporta usando la repetición horizontal y el segundo valor representa el comportamiento de repetición vertical. Aquí se explica como cada opción funciona con cada dirección:

    | `repeat`    | La imagen se repite hasta cubrir todo el fondo existente. La última imagen debe ser recortada si no encaja.                                                                                                                                                                                                                                                                                                                                                                                                        |
    | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `space`     | La imagen se repite lo máximo posible sin recortarse. La primera y última imagen son fijadas a cada lado del elemento, y el espacio blanco es distribuido igualmente entre las imágenes. La propiedad {{cssxref("background-position")}} es ignorada a menos que una sola imagen pueda ser desplegada sin recortar. El único caso donde se recorta usando `space` es cuando no hay suficiente sitio para desplegar una imagen.                                                                                     |
    | `round`     | Como el espacio permitido aumenta, las imágenes repetidas se estrechan (sin dejar huecos) hasta que haya espacio suficiente (espacio restante >= la mitad del ancho de la imagen) para que otra sea añadida. Cuando la próxima imagen es añadida, todas las demás son comprimidas al espacio disponible. Ejemplo: Una imagen con un ancho inicial de 260px, se repite 3 veces, debería estirarse hasta que el tamaño sea de 300px, luego otra imagen debe ser añadida. Luego deberían comprimirse hasta los 225px. |
    | `no-repeat` | La imagen no se repite (y por lo tanto el area coloreada de la imagen de fondo no debe ser rellenada completamente). La posición del fondo no repetido es definida por la propiedad de CSS {{cssxref("background-position")}}.                                                                                                                                                                                                                                                                                     |

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### HTML

```html
<ol>
  <li>
    no-repeat
    <div class="one"></div>
  </li>
  <li>
    repeat
    <div class="two"></div>
  </li>
  <li>
    repeat-x
    <div class="three"></div>
  </li>
  <li>
    repeat-y
    <div class="four"></div>
  </li>
  <li>
    space
    <div class="five"></div>
  </li>
  <li>
    round
    <div class="six"></div>
  </li>
  <li>
    repeat-x, repeat-y (multiple images)
    <div class="seven"></div>
  </li>
</ol>
```

### CSS

```css
/* Shared for all DIVS in example */
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url(starsolid.gif);
  width: 160px;
  height: 70px;
}

/* Background repeats */
.one {
  background-repeat: no-repeat;
}
.two {
  background-repeat: repeat;
}
.three {
  background-repeat: repeat-x;
}
.four {
  background-repeat: repeat-y;
}
.five {
  background-repeat: space;
}
.six {
  background-repeat: round;
}

/* Multiple images */
.seven {
  background-image: url(starsolid.gif), url(favicon32.png);
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

### Resultado

En este ejemplo,cada elemento de la listcoincide con un valor diferente de `background-repeat`.

{{EmbedLiveSample('Examples', 240, 560)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- [Usando diferentes fondos](/es/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)

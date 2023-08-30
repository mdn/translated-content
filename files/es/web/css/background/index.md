---
title: background
slug: Web/CSS/background
---

{{CSSRef}}

La propiedad `background` es un atajo para definir los valores individuales del fondo en una única regla CSS. Se puede usar `background` para definir los valores de una o de todas las propiedades siguientes: {{ Cssxref("background-attachment") }}, {{ Cssxref("background-color", "color") }}, {{ Cssxref("background-image", "image") }}, {{ Cssxref("background-position", "position") }}, {{ Cssxref("background-repeat", "repeat") }}.

- {{ Cssxref("initial", "Valor inicial") }}: ver propiedades individuales
- Se aplica a: todos los elementos
- {{ Cssxref("inheritance", "Herencia") }}: no
- Porcentajes: permitido en {{ Cssxref("background-position", "posición") }}
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculada") }}: ver propiedades individuales

## Sintaxis

```
/* Usando <background-color> */
background: green;

/* Usando <bg-image> y <repeat-style> */
background: url("test.jpg") repeat-y;

/* Usando <box> and <background-color> */
background: border-box red;

/* Una sola imagen, centrada y escalada */
background: no-repeat center/80% url("../img/image.png");
```

La propiedad `background` se especifica como una o más capas de fondo, separadas por comas.

La sintaxis de cada capa es la siguiente:

- Cada capa puede incluir cero o una ocurrencia de cualquiera de los siguientes valores

  - [`<attachment>`](#attachment)
  - [`<bg-image>`](#bg-image)
  - [`<position>`](#position)
  - [`<bg-size>`](#bg-size)
  - [`<repeat-style>`](#repeat-style)

- El valor [`<bg-size>`](#bg-size) sólo puede ser incluido inmediatamente después de la [\<position>](#position), separado con el carácter '/', así: "`center/80%`".
- El valor [\<box>](#box) puede ser incluido cero, una o dos veces. Si se incluye una vez, establece ambos {{cssxref("background-origin")}} y {{cssxref("background-clip")}}. Si se incluye dos veces, la primera ocurrencia establece {{cssxref("background-origin")}}, y el segundo conjunto {{cssxref("background-clip")}}.
- El valor [`<background-color>`](#background-color) sólo puede ser incluido en la última capa especificada.

## Valores

- background-color
  - : ver [`color`](/es/CSS/background-color).
- background-image
  - : ver [`image`](/es/CSS/background-image).
- background-repeat
  - : ver [`repeat`](/es/CSS/background-repeat).
- background-attachment
  - : ver [`background-attachment`](/es/CSS/background-attachment).
- background-position
  - : ver [`position`](/es/CSS/background-position).

## Ejemplos

### HTML

```html
<p class="topbanner">
  Starry sky<br />
  Twinkle twinkle<br />
  Starry sky
</p>
<p class="warning">Here is a paragraph</p>
```

### CSS

```css
.warning {
  background: red;
}

.topbanner {
  background: url("starsolid.gif") #00d repeat-y fixed;
}
```

### Result

{{EmbedLiveSample("Ejemplos")}}

## Notas

Tomando una declaración válida, la propiedad `background` inicia las propiedades individuales a sus valores iniciales para después asignarles los valores especificadas explícitamente en la declaración. No hay que definir un valor por cada propiedad individual, se cambia solo las que necesitamos en relación al valor por defecto.

## Especificaciones

- [CSS 1](http://www.w3.org/TR/CSS1#background)
- [CSS 2.1](http://www.w3.org/TR/CSS21/colors.html#propdef-background)
- [CSS 3](http://www.w3.org/TR/2005/WD-css3-background-20050216/#the-background)

## Compatibilidad de navegadores

| Navegador         | Mínima versión |
| ----------------- | -------------- |
| Internet Explorer | 4              |
| Firefox           | 1              |
| Netscape          | 6              |
| Opera             | 3.5            |

## Ver también

{{ Cssxref("background") }}, {{ Cssxref("background-attachment") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}

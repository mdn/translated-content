---
title: box-shadow
slug: Web/CSS/box-shadow
---

{{ CSSRef() }}

La propiedad CSS `box-shadow` añade efectos de sombra alrededor del marco de un elemento. Se pueden definir múltiples efectos separados por comas. La caja de la sombra se describe por los desplazamientos en X e Y, los radios de desenfoque y dispersión, y el color relativos al elemento.

La propiedad `box-shadow` permite proyectar una sombra difuminada desde el marco de casi cualquier elemento. Si {{cssxref("border-radius")}} es especificado en un elemento con la propiedad box-shadow, la sombra adopta la misma curva en las esquinas. El z-orden de múltiples cajas de sombra es la misma que de múltiples [sombras de texto](/es/CSS/text-shadow) (la primera sombra definida se ubica hasta arriba).

[Generador de Box-shadow](/es/docs/Web/CSS/CSS_Box_Model/Box-shadow_generator) es una herramienta interactiva que permite generar una `box-shadow`.

## Sintaxis

```css
/* Keyword values */
box-shadow: none;

/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;

/* Global keywords */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```

Especifica una sola box-shadow utilizando:

- Dos, tres, o cuatro valores [`<length>`](/es/docs/Web/CSS/length).

  - Si solo dos valores son definidos, son interpretados como valores [`<offset-x><offset-y>`](#offset-x).
  - Si un tercer valor es dado, es interpretado como un [`<blur-radius>`](#blur-radius).
  - Si un cuarto valor es dado, es interpretado como un [`<spread-radius>`](#spread-radius).

- Opcionalmente, la palabra clave [`inset`](#inset).
- Opcionalmente, el valor [`<color>`](#color).

### Valores

- `inset`
  - : Si no se especifica (por defecto), la sombra asume una sombra difuminada (como si la caja fuera levantada por encima del contenido).
    La presencia de la palabra clave `inset` cambia la sombra a una dentro del marco (como si el contenido estuviera deprimido dentro de la caja). Inset shadows dibuja dentro del borde (incluso de los transparentes), por encima del fondo, pero por debajo del contenido.
- `<offset-x> <offset-y>`
  - : Estos son dos valores {{cssxref("&lt;length&gt;")}} para definir el desplazamiento de la sombra. `<offset-x>` especifica la distancia horizontal. Los valores negativos colocan las combra a la izquierda de el elemento. `<offset-y>` Especifica la distancia vertical. Los valores negativos colocan la sombra por encima del elemento. Ver{{cssxref("&lt;length&gt;")}} para posibles unidades.
    Si ambos valores son `0`, la sombra es ubicada detras del elemento (y puede generar un efecto de difuminación `<blur-radius>` y/o `<spread-radius>` está establecido).
- `<blur-radius>`
  - : Este es el tercer valor {{cssxref("&lt;length&gt;")}}. Cuando mayor sea este valor, mayor sera la difuminación, por consecuencia la sombra se vuelve más grande y ligera. Los valores negativos no son permitidos. Si esto no es especificado, su valor será `0` (el borde de la sombra es fuerte). La especificación no incluye un algoritmo exacto para como el radio de desenfoque debe ser calculado, sin embargo, explica lo siguiente:

> ...para una borde largo y recto de la sombra, se debería crear una transición de color con la longitud de la distancia de desenfoque que sea perpendicular a y centrada al borde de la sombra, y en estos rangos desde el color de la sombra total en el punto final del radio dentro de la sombra hasta totalmente transparente en el punto final fuera de ella.

- `<spread-radius>`
  - : Este es el cuarto valor {{cssxref("&lt;length&gt;")}} . Los valores positivos harán que la sombra se expanda y crezca más, los valores negativos harán que la sombra se reduzca de tamaño. Si no se especifica, este será `0` (la sombra será del mismo tamaño del elemento).
- `<color>`
  - : Ver los valores de {{cssxref("&lt;color&gt;")}} para las posibles palabras claves y anotaciones.
    Si no se especifica, el color depende del navegador - usualmente el valor de la propiedad {{ cssxref("color") }}, pero notar que en Safari, actualmente pinta una sombra transparente en este caso que sea omitido.

## Ejemplos

En nuestro ejemplo, se incluyen tres sombras: una sombra interior, una sombra difuminada normal, y una sombra de 2px que crea un efecto de borde (podría haberse usado un {{cssxref('outline')}} en lugar de una tercera sombra).

```html
<blockquote>
  <q
    >You may shoot me with your words,<br />
    You may cut me with your eyes,<br />
    You may kill me with your hatefulness,<br />
    But still, like air, I'll rise.</q
  >
  <p>&mdash; Maya Angelou</p>
</blockquote>
```

_Podrías dispararme con tus palabras,
podrías cortarme con tus ojos,
podrías matarme con tu odio,
y aún, como el aire, levantarme._
\-Traduccion-

```css
blockquote {
  padding: 20px;
  box-shadow:
    inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
```

{{EmbedLiveSample("", '300', '300')}}

### Contorno uniforme

```html
<div><p>Hello World</p></div>
```

```css
p {
  box-shadow:
    0 0 0 2em #f4aab9,
    0 0 0 4em #66ccff;
  margin: 4em;
  padding: 1em;
}
```

{{EmbedLiveSample("", '300', '300')}}

Cuando el `x-offset`, `y-offset`, y `blur` son todos cero, la sombra sera un contorno unifrome. Las sombras son dibujadas desde el fondo hasta el frente, así que la primera sombra se encuentra encima de sombras posteriores. Cuando el `border-radius` es 0, como por defecto, las esquinas de la sombra serán, bien, esquinas. De haberse definido un `border-radius` de cualquier otro valor, las esquinas habrían sido redondeadas.

Se ha añadido un margen del tamaño de la sombra más ancha para asegurarse de que la sombra no se superponga a los elementos adyacentes o vaya más allá del borde de la caja de contención. Una sombra de caja no afeta a las dimensiones del [modelo de caja](/es/docs/Web/CSS/CSS_Box_Model).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El tipo de dato {{cssxref("&lt;color&gt;")}}
- Otras propiedades relacionadas al color: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("caret-color")}}, y {{cssxref("column-rule-color")}}
- {{cssxref("text-shadow")}}
- [Aplicando color a los elementos HTML utilizando CSS](/es/docs/Web/HTML/Applying_color)

---
title: object-position
slug: Web/CSS/object-position
translation_of: Web/CSS/object-position
---
{{CSSRef}}

## Summary

La propiedad **`object-position`** determina el alineamiento del elemento dentro de la caja.

{{cssinfo}}

## Sintaxis

```css
/* <position> valores */
object-position: 100px 50px;

/* Valores globales */
object-position: inherit;
object-position: initial;
object-position: unset;
```

### Valores

- `<position>`
  - : {{ cssxref("&lt;position&gt;") }}, este es un valor de cuatro que representa una posición en 2D con respecto a los bordes de la caja. Posiciones Relativas o absolutas pueden presentar compensaciones. Tenga en cuenta que la posición puede ser establecida fuera de la caja.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

#### Ejemplo de HTML

```html
<img id="object-position-1" src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo"/>
<img id="object-position-2" src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo"/>
```

#### Ejemplo de CSS

```css
img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
  background-color: yellow;
  margin-right: 1em;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 20% 10%;
}
```

#### Resultado

{{ EmbedLiveSample('Example', 360, 120) }}

## Especificaciones

| Specification                                                                                | Status                           | Comment                                                    |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------- |
| {{SpecName('CSS4 Images', '#the-object-position', 'object-position')}} | {{Spec2('CSS4 Images')}} | Las `palabras clave from-image` y `flip` an sido añadidas. |
| {{SpecName('CSS3 Images', '#the-object-position', 'object-position')}} | {{Spec2('CSS3 Images')}} | Definición incial                                          |

## Compatibilidad con navegadores

{{Compat("css.properties.object-position")}}

## Contenido relacionado

- Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.

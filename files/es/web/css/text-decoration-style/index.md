---
title: text-decoration-style
slug: Web/CSS/text-decoration-style
---

{{CSSRef}}

## Resumen

La propiedad CSS **`text-decoration-style`** define el estilo de las líneas especificadas por {{ cssxref("text-decoration-line") }}. El estilo aplica a todas las líneas, no hay manera de establecer diferentes estilos para cada línea definida por `text-decoration-line`.

Si la decoración especificada tiene un significado semántico propio, como _line-through_, que significa que el texto ha sido removido, se recomienda a los autores denotar este significado usando una etiqueta HTML, como {{ HTMLElement("del") }} o {{ HTMLElement("s") }}. Siendo que los navegadores pueden deshabilitar estilos en algunos casos, el significado semántico no desaparecerá en dicha situación.

{{cssinfo}}

## Sintaxis

```css
/* Valores clave */
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
text-decoration-style: dashed;
text-decoration-style: wavy;

/* Valores globales */
text-decoration-style: inherit;
text-decoration-style: initial;
text-decoration-style: unset;
```

### Valores

- `solid double dotted dashed wavy`

  - : Es una de las siguientes palabras clave:

    | Palabra clave                        | Descripción                  | Comentario                                                                    |
    | ------------------------------------ | ---------------------------- | ----------------------------------------------------------------------------- |
    | `solid`                              | Dibuja una línea simple      |                                                                               |
    | `double`                             | Dibuja una línea doble       |                                                                               |
    | `dotted`                             | Dibuja una línea punteada    |                                                                               |
    | `dashed`                             | Dibuja una línea discontinua |                                                                               |
    | `wavy`                               | Dibuja una línea ondulada    |                                                                               |
    | `-moz-none`{{ non-standard_inline }} | No dibuja una línea          | **No usarse:** usar {{ cssxref("text-decoration-line") }}`: none` en su lugar |

- `inherit`
  - : Es una palabra clave que indica que se reutilice el valor calculado del elemento padre.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
.example {
  -moz-text-decoration-line: underline;
  -moz-text-decoration-style: wavy;
  -moz-text-decoration-color: red;
  -webkit-text-decoration-line: underline;
  -webkit-text-decoration-style: wavy;
  -webkit-text-decoration-color: red;
}
```

```css
.example {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

```html
<p class="example">Así se ve el resultado.</p>
```

{{ EmbedLiveSample('Ejemplos', '', '', '') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

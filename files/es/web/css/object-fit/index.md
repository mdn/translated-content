---
title: object-fit
slug: Web/CSS/object-fit
---

{{CSSRef}}

La propiedad [CSS](/es/docs/Web/CSS) **`object-fit`** indica cómo el contenido de un [elemento reemplazado](/es/docs/Web/CSS/Elemento_reemplazo), por ejemplo un {{HTMLElement("img")}} o {{HTMLElement("video")}}, debería redimensionarse para ajustarse a su contenedor.

Se puede alterar la alineación del contenido del elemento reemplazado utilizando la propiedad {{cssxref("object-position")}}.

{{EmbedInteractiveExample("pages/css/object-fit.html")}}

## Sintaxis

La propiedad `object-fit` se especifica con una de las palabras claves elegidas de la siguiente lista de valores.

### Valores

- `contain`
  - : El contenido reemplazado está dimensionado para mantener su relación de aspecto mientras se ajusta dentro del cuadro de contenido del elemento: su tamaño de objeto concreto se resuelve como una restricción de contenido contra el ancho y la altura utilizados del elemento.
- `cover`
  - : El contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena el cuadro de contenido completo del elemento. Si la relación de aspecto del objeto no coincide con la relación de aspecto de su caja, entonces el objeto se recortará para que se ajuste.
- `fill`
  - : Modifica el tamaño del elemento remplazado para llenar el cuadro de contenido. El objeto completo ocupará todo el espacio de la caja. Si el tamaño del elemento no concuerda con el de su caja, se estirará para llenarlo.
- `none`
  - : El contenido reemplazado no se redimensiona.
- `scale-down`
  - : El contenido se dimensiona como si `none` o `contain` estuvieran especificados, lo que resultaría en un tamaño de objeto concreto más pequeño.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<section>
  <h2>object-fit: fill</h2>
  <img class="fill" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="fill narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: contain</h2>
  <img class="contain" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="contain narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: cover</h2>
  <img class="cover" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="cover narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: none</h2>
  <img class="none" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="none narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: scale-down</h2>
  <img class="scale-down" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="scale-down narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />
</section>
```

### CSS

```css
h2 {
  font-family:
    Courier New,
    monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 940px;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
}

.narrow {
  width: 100px;
  height: 150px;
  margin-top: 10px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

### Resultado

{{ EmbedLiveSample('Example', 500, 450) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Otras propiedades CSS relacionadas con imágenes: {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("background-size")}}

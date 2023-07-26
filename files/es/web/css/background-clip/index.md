---
title: background-clip
slug: Web/CSS/background-clip
---

{{ CSSRef() }}

## Resumen

La propiedad CSS `background-clip` especifica si el fondo de un elemento, ya sea el color o imagen, se extiende por debajo su borde.

Si la imagen o color de fondo no esta definido, esta propiedad solo tendrá un efecto visual cuando el borde tenga regiones transparentes o regiones parcialmente opacas (debido a {{ Cssxref("border-style") }} o {{ Cssxref("border-image") }}); de lo contrario el borde cubre la diferencia.

{{cssinfo}}

## Sintaxis

```
Sintaxis Formal: {{csssyntax("background-clip")}}
```

```
background-clip: border-box
background-clip: padding-box
background-clip: content-box

background-clip: inherit
```

### Valores

- `border-box`
  - : El fondo se extiende hasta el borde exterior de el contenedor (pero por debajo de la frontera, en orden z).
- `padding-box`
  - : El fondo no se muestra a través del borde (el fondo se extiende hasta el borde exterior del padding).
- `content-box`
  - : El fondo se dibuja desde donde inicia el contenido.

## Ejemplo

### Contenido HTML

```html
<p class="border-box">The yellow background extends behind the border.</p>
<p class="padding-box">
  The yellow background extends to the inside edge of the border.
</p>
<p class="content-box">
  The yellow background extends only to the edge of the content box.
</p>
```

### Contenido CSS

```css
p {
  border: 5px navy;
  border-style: dotted double;
  margin: 2em;
  padding: 2em;
  background: #f8d575;
}
.border-box {
  background-clip: border-box;
}
.padding-box {
  background-clip: padding-box;
}
.content-box {
  background-clip: content-box;
}
```

#### Salida

{{ EmbedLiveSample('Ejemplo', 540, 450) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{ cssxref("clip") }}
- [Modelo de caja CSS](/es/docs/Web/CSS/box_model)

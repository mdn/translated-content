---
title: ":hover"
slug: Web/CSS/:hover
---

{{ CSSRef }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:hover`** de [CSS](/es/docs/Web/CSS) coincide cuando el usuario interactúa con un elemento con un dispositivo señalador, pero no necesariamente lo activa. Generalmente se activa cuando el usuario se desplaza sobre un elemento con el cursor (puntero del mouse).

```css
/* Selecciona cualquier elemento <a> cuando está "mantenido (hovered)" */
a:hover {
  color: orange;
}
```

Los estilos definidos por la pseudoclase `:active` serán anulados por cualquier pseudo-clase posterior relacionada con el _enlace_ ({{ cssxref(":link") }}, {{ cssxref(":visited") }}, o {{ cssxref(":active") }}) que tenga al menos la misma especificidad. Para darle un estilo apropiado a los enlaces, coloque la regla `:hover` después de las reglas `:link` y `:visited`, pero antes de `:active`, según lo definido por el _orden LVHA_: `:link` — `:visited` — `:hover` — `:active`.

> **Nota:** La pseudo-clase `:hover` es problemática en las pantallas táctiles. Dependiendo del navegador, la pseudo-clase `:hover` podría no coincidir, coincidir solo por un momento después de tocar un elemento, o continuar coincidiendo incluso después de que el usuario haya dejado de tocar y hasta que el usuario toque otro elemento. Los desarrolladores web deben asegurarse de que el contenido sea accesible en dispositivos con capacidades _hovering_ limitadas o inexistentes.

## Sintaxis

{{csssyntax}}

## Ejemplos

### Ejemplo básico

#### HTML

```html
<a href="#">Intenta pasar el mouse sobre este enlace.</a>
```

#### CSS

```css
a {
  background-color: powderblue;
  transition: background-color 0.5s;
}

a:hover {
  background-color: gold;
}
```

#### Resultado

{{EmbedLiveSample("Ejemplo_básico")}}

### Galería de imágenes

Puede usar la pseudoclase `:hover` para crear una galería de imágenes con imágenes de tamaño completo que solo se muestran cuando el mouse se mueve sobre una miniatura. Vea [esta demostración](css-gallery.zip) para una posible nota.

> **Nota:** Para un efecto análogo, pero basado en la pseudo-clase [`:checked`](/es/docs/Web/CSS/%3Achecked) (aplicado a radioboxes ocultos), vea [esta demostración](css-checked-gallery.zip), tomada de la página de referencia [:checked](/es/docs/Web/CSS/:checked).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Chromium bug #370155: No ponga `:hover` sticky en los sitios que configuran una ventana gráfica móvil](https://code.google.com/p/chromium/issues/detail?id=370155)
- [Chromium bug #306581: Inmediatamente muestra los estados hover y active al tocar cuando la página no se puede desplazar.](https://code.google.com/p/chromium/issues/detail?id=306581)

---
title: "-moz-user-modify"
slug: Web/CSS/user-modify
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

La propiedad `-moz-user-modify` determina si el contenido de un elemento puede ser editado por el usuario. Se relaciona con el atributo [`contenteditable`](/es/docs/Web/HTML/Global_attributes#contenteditable) . `user-focus` , que es una propiedad similar, fue propuesta como parte de los [borradores iniciales de un predecesor de la especificación CSS3 UI](http://www.w3.org/TR/2000/WD-css3-userint-20000216) ,pero fue rechazada por el grupo de trabajo.

{{cssinfo}}

## Síntaxis

```css
/* Palabras clave valor */
-moz-user-modify: read-only;
-moz-user-modify: read-write;
-moz-user-modify: write-only;

/* Valores globales */
-moz-user-modify: inherit;
-moz-user-modify: initial;
-moz-user-modify: unset;
```

### Valores

- read-only
  - : Valor por defecto. El contenido sólo se puede leer.
- read-write
  - : El usuario puede leer y escribir contenidos.
- write-only
  - : El usuario puede editar el contenido pero no leerlo.

### Síntaxis Formal

{{csssyntax}}

## Ejemplo

### CSS

```css
.readwrite {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
}
```

### HTML

```html
<div class="readwrite">El usuario puede cambiar este texto.</div>
```

### Result

{{EmbedLiveSample("Example", 300, 30)}}

## Especificaciones

`user-modify` en [una versión inicial de la especificación CSS 3 UI](http://www.w3.org/TR/2000/WD-css3-userint-20000216#user-modify) (Borrador de trabajo Febrero del 2000, Working Draft February 2000 que ya ha sido reeemplazado por _CSS 3 UI_)

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- {{cssxref("-moz-user-focus")}}
- {{cssxref("-moz-user-input")}}
- {{cssxref("-moz-user-select")}}

---
title: ":enabled"
slug: Web/CSS/:enabled
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) `:enabled` [CSS](/es/docs/Web/CSS) representa cualquier elemento habilitado. Un elemento está habilitado si puede ser activado (es decir seleccionado, se puede hacer click en él, acepta que se le introduzca texto, etc.) o si accepta el foco. El elemento también tiene un estado deshabilitado el en cuál, no puede ser activado ni acepta el foco.

```css
/* Selecciona cualquier <input> habilitado */
input:enabled {
  color: blue;
}
```

## Sintaxis

{{csssyntax}}

## Ejemplo

El siguiente ejemplo hace que el color del texto y el botón {{htmlElement ("input")}} sean verdes cuando están habilitados, y grises cuando están deshabilitados. Esto ayuda al usuario a comprender con qué elementos se puede interactuar.

### HTML

```html
<form action="url_of_form">
  <label for="FirstField">Primer campo (habilitado):</label>
  <input type="text" id="FirstField" value="Lorem" /><br />

  <label for="SecondField">Segundo campo (deshabilitado):</label>
  <input type="text" id="SecondField" value="Ipsum" disabled="disabled" /><br />

  <input type="button" value="Enviar" />
</form>
```

### CSS

```css
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
```

### Resultado

{{EmbedLiveSample("Ejemplo", 550, 95)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{Cssxref(":disabled")}}

---
title: ":nth-last-of-type()"
slug: Web/CSS/:nth-last-of-type
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:nth-last-of-type()`** [CSS](/es/docs/Web/CSS) coincide con uno o más elementos de un tipo dado, en función de su posición entre un grupo de hermanos, contando desde el final.

```css
/* Selecciona cada cuarto elementos <p> entre
   cualquier grupo de hermanos, contando hacia
   atrás desde el último */
p:nth-last-of-type(4n) {
  color: lime;
}
```

> **Nota:** Esta pseudo-clase es esencialmente la misma que {{Cssxref(":nth-of-type")}}, excepto que cuenta los elementos hacia atrás desde el final, no hacia adelante desde el principio.

## Sintaxis

La pseudo-clase `nth-last-of-type` se especifica con un solo argumento, que representa el patrón para los elementos coincidentes, contando desde el final.

Ver {{Cssxref(":nth-last-child")}} para una explicación más detallada de su sintaxis.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<div>
  <span>Este es un span.</span>
  <span>Este es otro span.</span>
  <em>Esto esta enfatizado.</em>
  <span>¡Guauu, este span se pone color lima!</span>
  <strike>Esto está tachado.</strike>
  <span>Aquí hay un último span.</span>
</div>
```

### CSS

```css
span:nth-last-of-type(2) {
  background-color: lime;
}
```

### Resultado

{{EmbedLiveSample('Ejemplo')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{Cssxref(":nth-last-child")}}, {{Cssxref(":nth-of-type")}}

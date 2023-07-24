---
title: ":nth-of-type"
slug: Web/CSS/:nth-of-type
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:nth-of-type()`** de [CSS](/es/docs/Web/CSS) selecciona uno o más elementos de un tipo dado, en función de su posición entre un grupo de hermanos.

```css
/* Selecciona cada cuarto elementos <p> entre
   cualquier grupo de hermanos */
p:nth-of-type(4n) {
  color: lime;
}
```

## Sintaxis

La pseudo-clase `nth-of-type` se especifica con un solo argumento, que representa el patrón para los elementos coincidentes.

Ver {{Cssxref(":nth-child")}} para una explicación más detallada de su sintaxis.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Ejemplo básico

#### HTML

```html
<div>
  <div>Este elemento no se cuenta.</div>
  <p>1er párrafo.</p>
  <p>2do párrafo.</p>
  <div>Este elemento no se cuenta.</div>
  <p>3er párrafo.</p>
  <p>4to párrafo.</p>
</div>
```

#### CSS

```css
/* Párrafos impares */
p:nth-of-type(2n + 1) {
  color: red;
}

/* Párrafos pares */
p:nth-of-type(2n) {
  color: blue;
}

/* Primer párrafo */
p:nth-of-type(1) {
  font-weight: bold;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_básico', 250, 200)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}

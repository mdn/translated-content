---
title: ":only-of-type"
slug: Web/CSS/:only-of-type
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:only-of-type`** [CSS](/es/docs/Web/CSS) representa un elemento que no tiene hermanos del mismo tipo.

```css
/* Selecciona cada <p>, pero solo si es el único */
/* elemento <p> dentro de su padre */
p:only-of-type {
  background-color: lime;
}
```

> **Nota:** Como se definió originalmente, el elemento seleccionado tenía que tener un padre. Comenzando con el Nivel 4 de Selectores, esto ya no es necesario.

## Sintaxis

{{csssyntax}}

## Ejemplo

#### HTML

```html
<main>
  <div>Soy un `div` #1.</div>
  <p>Yo soy el único `p` entre mis hermanos.</p>
  <div>Soy un `div` #2.</div>
  <div>
    Soy un `div` #3.
    <i>Yo soy el único hijo `i`.</i>
    <em>Soy un `em` #1.</em>
    <em>Soy un `em` #2.</em>
  </div>
</main>
```

#### CSS

```css
main :only-of-type {
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo','100%',180)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{Cssxref(":only-child")}}
- {{Cssxref(":first-of-type")}}
- {{Cssxref(":last-of-type")}}
- {{Cssxref(":nth-of-type")}}

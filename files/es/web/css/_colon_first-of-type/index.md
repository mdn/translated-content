---
title: ":first-of-type"
slug: Web/CSS/:first-of-type
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:first-of-type`** de [CSS](/es/docs/Web/CSS) representa el primer elemento de su tipo entre un grupo de elementos hermanos.

```css
/* Selecciona cualquier <p> que sea el primer elemento
   de este tipo entre sus hermanos */
p:first-of-type {
  color: red;
}
```

> **Nota:** Como se definió originalmente, el elemento seleccionado tenía que tener un padre. Comenzando con el Nivel 4 de Selectores, esto ya no es necesario.

## Sintaxis

{{csssyntax}}

## Ejemplos

### Diseñando el primer párrafo

#### HTML

```html
<h2>Encabezado</h2>
<p>Párrafo 1</p>
<p>Párrafo 2</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### Resultado

{{EmbedLiveSample('Diseñando_el_primer_párrafo')}}

### Elementos anidados

Este ejemplo muestra cómo los elementos anidados también pueden utilizarse. Tenga en cuenta que el [selector universal](/es/docs/Web/CSS/Universal_selectors) (`*`) está implícito cuando no se escribe un selector simple.

#### HTML

```html
<article>
  <div>!Este `div` es primero!</div>
  <div>¡Este <span>`span` anidado es el primero</span>!</div>
  <div>
    ¡Este <em>`em` anidado es el primero</em>, pero este
    <em>`em` anidado es el último</em>!
  </div>
  <div>¡Este <span>`span` anidado tiene estilo</span>!</div>
  <b>¡Este `b` califica!</b>
  <div>Este es el `div` final.</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample('Elementos_anidados', 500)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{Cssxref(":first-child")}}, {{Cssxref(":last-of-type")}}, {{Cssxref(":nth-of-type")}}

---
title: ":last-of-type"
slug: Web/CSS/:last-of-type
---

{{CSSRef}}

La [pseudo-class](/es/docs/Web/CSS/Pseudo-classes) **`:last-of-type`** de [CSS](/es/docs/Web/CSS) representa el último elemento de su tipo entre un grupo de elementos hermanos.

```css
/* Selecciona cualquier <p> que sea el último elemento
   de su tipo entre sus hermanos */
p:last-of-type {
  color: lime;
}
```

> **Nota:** Como se definió originalmente, el elemento seleccionado tenía que tener un padre. Comenzando con el Nivel 4 de Selectores, esto ya no es necesario.

## Sintaxis

{{csssyntax}}

## Ejemplo

### Diseñando el último párrafo

#### HTML

```html
<h2>Título</h2>
<p>Párrafo 1</p>
<p>Párrafo 2</p>
```

#### CSS

```css
p:last-of-type {
  color: red;
  font-style: italic;
}
```

#### Resultado

{{EmbedLiveSample('Diseñando_el_último_párrafo')}}

### Elementos anidados

Este ejemplo muestra cómo los elementos anidados también pueden utilizarse. Tenga en cuenta que el [selector universal](/es/docs/Web/CSS/Universal_selectors) (`*`) está implícito cuando no se escribe un selector simple.

#### HTML

```html
<article>
  <div>Este `div` es primero.</div>
  <div>¡Este <span>'span' anidado es el último</span>!</div>
  <div>
    ¡Este <em>`em` anidado es el primero</em>, pero este
    <em>`em` anidado es el último</em>!
  </div>
  <b>¡Este `b` califica!</b>
  <div>¡Este es el 'div' final!</div>
</article>
```

#### CSS

```css
article :last-of-type {
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

- {{cssxref(":last-child")}}, {{Cssxref(":nth-last-of-type")}}

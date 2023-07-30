---
title: ":first-child"
slug: Web/CSS/:first-child
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:first-child`** de [CSS](/es/docs/Web/CSS) representa el primer elemento entre un grupo de elementos hermanos.

```css
/* Selecciona cualquier <p> que sea el primer
   elemento entre sus hermanos */
p:first-child {
  color: lime;
}
```

> **Nota:** Como se definió originalmente, el elemento seleccionado tenía que tener un padre. Comenzando con el Nivel 4 de Selectores, esto ya no es necesario.

## Sintaxis

{{csssyntax}}

## Ejemplos

### Ejemplo básico

#### HTML

```html
<div>
  <p>¡Este texto está seleccionado!</p>
  <p>Este texto no está seleccionado.</p>
</div>

<div>
  <h2>Este texto no está seleccionado: no es un `p`.</h2>
  <p>Este texto no está seleccionado.</p>
</div>
```

#### CSS

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_básico', 500, 200)}}

### Diseñando una lista

#### HTML

```html
<ul>
  <li>Objeto 1</li>
  <li>Objeto 2</li>
  <li>
    Objeto 3
    <ul>
      <li>Objeto 3.1</li>
      <li>Objeto 3.2</li>
      <li>Objeto 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### Resultado

{{EmbedLiveSample('Diseñando_una_lista')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{cssxref(":first-of-type")}}, {{cssxref(":last-child")}}, {{cssxref(":nth-child")}}

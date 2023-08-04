---
title: ":last-child"
slug: Web/CSS/:last-child
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:last-child`** de [CSS](/es/docs/Web/CSS) representa el último elemento entre un grupo de elementos hermanos.

```css
/* Selecciona cualquier <p> que sea el último elemento
   entre sus hermanos */
p:last-child {
  color: lime;
}
```

> **Nota:** Como se definió originalmente, el elemento seleccionado tenía que tener un padre. Comenzando con el Nivel 4 de Selectores, esto ya no es necesario.

## Sintaxis

{{csssyntax}}

## Ejemplo

### Ejemplo básico

#### HTML

```html
<div>
  <p>Este texto no está seleccionado.</p>
  <p>¡Este texto está seleccionado!</p>
</div>

<div>
  <p>Este texto no está seleccionado.</p>
  <h2>Este texto no está seleccionado: no es un `p`.</h2>
</div>
```

#### CSS

```css
p:last-child {
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
  <li>Artículo 1</li>
  <li>Artículo 2</li>
  <li>
    Artículo 3
    <ul>
      <li>Artículo 3.1</li>
      <li>Artículo 3.2</li>
      <li>Artículo 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('Diseñando_una_lista')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{cssxref(":last-of-type")}}, {{cssxref(":first-child")}}, {{cssxref(":nth-child")}}

---
title: ":only-child"
slug: Web/CSS/:only-child
---

{{CSSRef}}

La [pseudo-clase](/es/docs/CSS/Pseudo-classes) **`:only-child`** de [CSS](/es/docs/Web/CSS) representa un elemento sin hermanos. Esto es lo mismo que `:first-child:last-child` o `:nth-child(1):nth-last-child(1)`, pero con una especificidad menor.

```css
/* Selecciona cada <p>, pero solo si es el */
/* único hijo de su padre */
p:only-child {
  background-color: lime;
}
```

> **Nota:** Como se definió originalmente, el elemento seleccionado tenía que tener un padre. Comenzando con el Nivel 4 de Selectores, esto ya no es necesario.

## Sintaxis

{{csssyntax}}

## Ejemplos

### Ejemplo básico

#### HTML

```html
<main>
  <div>
    <i>Soy un hijo único y solitario.</i>
  </div>

  <div>
    <i>Yo tengo hermanos.</i><br />
    <b>¡Yo también!</b><br />
    <span
      >Yo también tengo hermanos, <span>pero este es un hijo único.</span></span
    >
  </div>
</main>
```

#### CSS

```css
main :only-child {
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_básico','100%',180)}}

### Ejemplo de lista

#### HTML

```html
<ol>
  <li>
    Primero
    <ul>
      <li>Esta lista tiene solo un elemento.</li>
    </ul>
  </li>
  <li>
    Segundo
    <ul>
      <li>Esta lista tiene tres elementos.</li>
      <li>Esta lista tiene tres elementos.</li>
      <li>Esta lista tiene tres elementos.</li>
    </ul>
  </li>
  <ol></ol>
</ol>
```

#### CSS

```css
li li {
  list-style-type: disc;
}
li:only-child {
  color: red;
  list-style-type: square;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_de_lista', '100%', 210)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{Cssxref(":only-of-type")}}
- {{Cssxref(":first-child")}}
- {{Cssxref(":last-child")}}
- {{Cssxref(":nth-child")}}

---
title: ":not()"
slug: Web/CSS/:not
---

{{CSSRef}}

La [pseudoclase](/es/docs/Web/CSS/Pseudo-classes) **`:not()`** de [CSS](/es/docs/Web/CSS) representa elementos que no coinciden con una lista de selectores. Como evita que se seleccionen elementos específicos, se lo conoce como la _pseudoclase de negación_.

```css
/* Selecciona cualquier elemento que NO sea un párrafo */
:not(p) {
  color: blue;
}
```

> **Nota:**
>
> - Se pueden escribir selectores inútiles usando esta pseudoclase. Por ejemplo, `:not(*)` coincide con cualquier elemento que no sea un elemento, por lo que la regla nunca se aplicará.
> - Esta pseudoclase puede aumentar la [especificidad](/es/docs/Web/CSS/Specificity) de una regla. Por ejemplo, `#foo:not(#bar)` coincidirá con el mismo elemento que el `#foo` más simple, pero tiene una especificidad más alta.
> - `:not(.foo)` coincidirá con cualquier cosa que no sea `.foo`, _incluidos {{HTMLElement("html")}} y {{HTMLElement("body")}}._
> - Este selector solo se aplica a un elemento; no puedes usarlo para excluir a todos los antepasados. Por ejemplo, `body :not(table) a` se aplicará a los enlaces dentro de una tabla, ya que {{HTMLElement("tr")}} coincidirá con la parte `:not()` del selector.

## Sintaxis

La pseudoclase `:not()` requiere una lista separada por comas de uno o más selectores como argumento. La lista no debe contener otro selector de negación o un [pseudoelemento](/es/docs/Web/CSS/Pseudo-elements).

> **Advertencia:** La capacidad de enumerar más de un selector es experimental y aún no es ampliamente compatible.

{{csssyntax}}

## Ejemplo

### HTML

```html
<p>Soy un párrafo.</p>
<p class="fancy">¡Soy muy elegante!</p>
<div>NO soy un párrafo.</div>
```

### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* elementos <p> que no están en la clase `.fancy` */
p:not(.fancy) {
  color: green;
}

/* Elementos que no son elementos <p> */
body :not(p) {
  text-decoration: underline;
}

/* Elementos que no son elementos <div> o <span> */
body :not(div):not(span) {
  font-weight: bold;
}

/* Elementos que no son `.crazy` o `.fancy` */
/* Tenga en cuenta que esta sintaxis aún no está bien soportada. */
body :not(.crazy, .fancy) {
  font-family: sans-serif;
}
```

### Resultado

{{EmbedLiveSample('Ejemplo')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

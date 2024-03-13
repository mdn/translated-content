---
title: ":nth-child"
slug: Web/CSS/:nth-child
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS) **`:nth-child()`** de [CSS](/es/docs/Web/CSS) coincide con uno o más elementos en función de su posición entre un grupo de hermanos.

```css
/* Selecciona cada cuarto elemento entre
   cualquier grupo de hermanos */
:nth-child(4n) {
  color: lime;
}
```

## Sintaxis

La pseudo-clase `nth-child` se especifica con un único argumento, que representa el patrón para los elementos coincidentes.

### Valores de palabras clave

- `odd`
  - : Representa elementos cuya posición numérica en una serie de hermanos es impar: 1, 3, 5, etc.
- `even`
  - : Representa elementos cuya posición numérica en una serie de hermanos es par: 2, 4, 6, etc.

### Notación funcional

- `<An+B>`
  - : Representa elementos cuya posición numérica en una serie de hermanos coincide con el patrón `An+B`, para cada entero positivo o valor cero de `n`. El índice del primer elemento es `1`. Los valores `A` y `B` deben ser ambos {{cssxref("&lt;integer&gt;")}}.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Selectores de ejemplo

- `tr:nth-child(odd)` o `tr:nth-child(2n+1)`
  - : Representa las filas impares de una tabla HTML: 1, 3, 5, etc.
- `tr:nth-child(even)` o `tr:nth-child(2n)`
  - : Representa las filas pares de una tabla HTML: 2, 4, 6, etc.
- `:nth-child(7)`
  - : Representa el séptimo elemento.
- `:nth-child(5n)`
  - : Representa los elementos 5, 10, 15, etc.
- `:nth-child(3n+4)`
  - : Representa los elementos 4, 7, 10, 13, etc.
- `:nth-child(-n+3)`
  - : Representa los primeros tres elementos entre un grupo de hermanos.
- `p:nth-child(n)`
  - : Representa cada elemento `<p>` entre un grupo de hermanos. Esto es lo mismo que un simple selector `p`.
- `p:nth-child(1)` o `p:nth-child(0n+1)`
  - : Representa cada `<p>` que es el primer elemento entre un grupo de hermanos. Esto es lo mismo que el selector {{cssxref(":first-child")}}.

### Ejemplo detallado

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>, SIN un <code>&lt;em&gt;</code> entre los
  hijos.
</h3>
<p>Los hijos 1, 3, 5 y 7 son seleccionados.</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code>, CON un <code>&lt;em&gt;</code> entre los
  hijos.
</h3>
<p>
  Los hijos 1, 5 y 7 son seleccionados.<br />
  3 se usa en el conteo porque es un hijo, pero no se selecciona porque no es un
  <code>&lt;span&gt;</code>.
</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>Este es un `em`.</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>, CON un <code>&lt;em&gt;</code> entre los
  hijos.
</h3>
<p>
  Los hijos 1, 4, 6 y 8 son seleccionados.<br />
  3 no se usa en el conteo ni se selecciona porque es un
  <code>&lt;em&gt;</code>, no un <code>&lt;span&gt;</code>, y
  <code>nth-of-type</code> solo selecciona hijos de ese tipo. El
  <code>&lt;em&gt;</code> se omite por completo y se ignora.
</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>Este es un `em`.</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid green;
  display: inline-block;
  margin-bottom: 3px;
}

.first span:nth-child(2n + 1),
.second span:nth-child(2n + 1),
.third span:nth-of-type(2n + 1) {
  background-color: lime;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_detallado', 550, 550)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{ Cssxref(":nth-of-type") }}, {{ Cssxref(":nth-last-child") }}

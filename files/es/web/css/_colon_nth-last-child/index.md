---
title: ":nth-last-child"
slug: Web/CSS/:nth-last-child
---

{{CSSRef}}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:nth-last-child()`** de [CSS](/es/docs/Web/CSS) selecciona uno o más elementos en función de su posición entre un grupo de hermanos, contando desde el final.

```css
/* Selecciona cada cuarto elemento entre
   cualquier grupo de hermanos, contando
   hacia atrás desde el último */
:nth-last-child(4n) {
  color: lime;
}
```

> **Nota:** Esta pseudo-clase es esencialmente la misma que {{Cssxref(":nth-child")}}, excepto que cuenta los elementos hacia atrás desde el final, no hacia adelante desde el principio.

## Sintaxis

La pseudo-clase `nth-last-child` se especifica con un solo argumento, que representa el patrón para los elementos coincidentes, contando desde el final.

### Valores de palabras clave

- `odd`
  - : Representa elementos cuya posición numérica en una serie de hermanos es impar: 1, 3, 5, etc., contando desde el final.
- `even`
  - : Representa elementos cuya posición numérica en una serie de hermanos es par: 2, 4, 6, etc., contando desde el final.

### Notación funcional

- `<An+B>`
  - : Representa elementos cuya posición numérica en una serie de hermanos coincide con el patrón `An+B`, para cada entero positivo o valor cero de `n`. El índice del primer elemento, contando desde el final, es `1`. Los valores `A` y `B` deben ser ambos {{cssxref("&lt;integer&gt;")}}.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Selectores de ejemplo

- `tr:nth-last-child(odd)` o `tr:nth-last-child(2n+1)`
  - : Representa las filas impares de una tabla HTML: 1, 3, 5, etc., contando desde el final.
- `tr:nth-last-child(even)` o `tr:nth-last-child(2n)`
  - : Representa las filas pares de una tabla HTML: 2, 4, 6, etc., contando desde el final.
- `:nth-last-child(7)`
  - : Representa el séptimo elemento, contando desde el final.
- `:nth-last-child(5n)`
  - : Representa los elementos 5, 10, 15, etc., contando desde el final.
- `:nth-last-child(3n+4)`
  - : Representa los elementos 4, 7, 10, 13, etc., contando desde el final.
- `:nth-last-child(-n+3)`
  - : Representa los últimos tres elementos entre un grupo de hermanos.
- `p:nth-last-child(n)`
  - : Representa cada elemento `<p>` entre un grupo de hermanos. Esto es lo mismo que un simple selector `p`.
- `p:nth-last-child(1)` or `p:nth-last-child(0n+1)`
  - : Representa cada `<p>` que es el primer elemento entre un grupo de hermanos, contando desde el final. Esto es lo mismo que el selector {{cssxref(":last-child")}}.

### Ejemplo de tabla

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Primera línea</td>
    </tr>
    <tr>
      <td>Segunda línea</td>
    </tr>
    <tr>
      <td>Tercera línea</td>
    </tr>
    <tr>
      <td>Cuarta línea</td>
    </tr>
    <tr>
      <td>Quinta línea</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border: 1px solid blue;
}

/* Selecciona los últimos tres elementos */
tr:nth-last-child(-n + 3) {
  background-color: pink;
}

/* Toma todos los elementos a partir del penúltimo elemento */
tr:nth-last-child(n + 2) {
  color: blue;
}

/* Seleccione solo el penúltimo elemento */
tr:nth-last-child(2) {
  font-weight: 600;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_de_tabla', 300, 150)}}

### Ejemplo de caso Edge

Como `n` comienza en cero, mientras que el último elemento comienza en uno, `n` y `n+1` seleccionarán los mismos elementos.

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Primera línea</td>
    </tr>
    <tr>
      <td>Segunda línea</td>
    </tr>
    <tr>
      <td>Tercera línea</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
tr:nth-last-child(n) {
  background-color: lightgray;
}

tr:nth-last-child(n + 1) {
  font-weight: 600;
}
```

#### Resultado

{{EmbedLiveSample('Ejemplo_de_caso_Edge')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}

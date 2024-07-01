---
title: Pseudoelementos
slug: Web/CSS/Pseudo-elements
---

{{ CSSRef() }}

## Resumen

Al igual que las {{ Cssxref("Pseudo-classes") }}, los pseudo-elementos se añaden a los selectores, pero en cambio, no describen un estado especial sino que, permiten añadir estilos a una parte concreta del documento. Por ejemplo, el pseudoelemento {{ Cssxref("::first-line") }} selecciona solo la primera línea del elemento especificado por el selector.

## Sintaxis

```
selector::pseudo-elemento { propiedad: valor; }
```

## Lista de pseudoelementos

- {{ Cssxref("::after") }}
- {{ Cssxref("::before") }}
- {{ Cssxref("::first-letter") }}
- {{ Cssxref("::first-line") }}
- {{ Cssxref("::selection") }}
- {{ Cssxref("::backdrop") }}
- {{ Cssxref("::placeholder") }} {{experimental_inline}}
- {{ Cssxref("::marker") }} {{experimental_inline}}
- {{ Cssxref("::spelling-error") }} {{experimental_inline}}
- {{ Cssxref("::grammar-error") }} {{experimental_inline}}

## Notas

De vez en cuando se utilizan dos puntos dobles (::) en vez de solo uno (:). Esto forma parte de CSS3 y de un intento para distinguir pseudo-elementos de pseudo-clases.

> **Nota:** `::selection` siempre se escribe con dos puntos dobles (::).

> **Nota:** Solo se puede usar un pseudo-elemento por selector. Debe aparecer después del selector simple.

<table class="standard-table">
  <tbody>
    <tr>
      <th>Navegador</th>
      <th>Versión inferior</th>
      <th>Soporta</th>
    </tr>
    <tr>
      <td rowspan="2">Internet Explorer</td>
      <td>8.0</td>
      <td><code>:pseudoelemento</code></td>
    </tr>
    <tr>
      <td>9.0</td>
      <td><code>:pseudoelemento </code>y<code> ::pseudoelemento</code></td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0 (1.0)</td>
      <td><code>:pseudoelemento</code></td>
    </tr>
    <tr>
      <td>1.0 (1.5)</td>
      <td><code>:pseudoelemento </code>y<code> ::pseudoelemento</code></td>
    </tr>
    <tr>
      <td rowspan="2">Opera</td>
      <td>4.0</td>
      <td><code>:pseudoelemento</code></td>
    </tr>
    <tr>
      <td>7.0</td>
      <td><code>:pseudoelemento </code>y<code> ::pseudoelemento</code></td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>1.0 (85)</td>
      <td><code>:pseudoelemento </code>y<code> ::pseudoelemento</code></td>
    </tr>
  </tbody>
</table>

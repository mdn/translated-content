---
title: visibility
slug: Web/CSS/visibility
---

{{ CSSRef() }}

### Resumen

La propiedad `visibility` se usa para dos efectos:

1. El valor `hidden` esconde un elemento, pero deja (vacío) el espacio donde debería aparecer.
2. El valor `collapse` esconde filas o columnas de una tabla.

- {{ Cssxref("initial", "Valor incial") }}: {{ Cssxref("visible") }}
- Se aplica a: Todos los elementos.
- {{ Cssxref("inheritance", "Valor heredado") }}: Sí
- Porcentajes: N/A
- Medio: {{cssxref("Media/Visual", "visual")}}
- {{ Cssxref("computed value", "Valor calculado") }}: Como se especifica.

### Sintaxis

```
visibility: visible | hidden | collapse | {{ Cssxref("inherit") }}
```

### Valores

- `visible`
  - : El elemento se muestra normalmente.
- `hidden`
  - : El elemento está escondido, pero los demás elementos se colocan como si ése elemento estuviera presente. Esto funciona como si el elemento fuera absolutamente transparente. Los elementos, con la propiedad `visibility: visible`, descendientes de ése elemento serán visibles.
- `collapse`
  - : Para tablas, filas, columnas y grupos de tablas. Las filas o columnas se esconden y el espacio que normalmente ocupan, es ocupado (como si aplicáramos el código `{{ Cssxref("display") }}: none` a las filas/columnas de la tabla). Sin embargo, el tamaño de las columnas o filas restantes, es calculado como si las filas/columnas fusionadas estuvieran presentes. Esta propiedad se diseñó así, al fin de permitir la supresión rápida de filas/columnas de una tabla sin necesidad de calcular de nuevo los altos y los anchos de cada porción de tabla. (Para otros elementos, `collapse` funciona como `hidden`).

### Ejemplos

```
p        { visibility: hidden; }   /* Los párrafos no serán visibles                       */
p.showme { visibility: visible; }  /* excepto los que tengan class = showme (clase= muéstrame)                */
tr.col   { visibility: collapse; } /* las filas de la tabla con la clasecol se fusionarán*/
```

### Notas

El soporte para `visibility: collapse` no se encuentra o está implementado parcialmente en algunos navegadores modernos. En muchos casos será tratado como `visibility: hidden` en elementos que no son filas / columnas de una tabla.

`visibility:collapse` puede cambiar el aspecto de una tabla si hay anidadas tablas dentro de celdas fusionadas, a no ser que se especifique explícitamente `visibility: visible` en la tabla anidada.

### Especificaciones

- [CSS 2.1](https://www.w3.org/TR/CSS21/visufx.html#visibility)

### Ver también

{{ Cssxref("display") }}

Categorías

Interwiki Languages

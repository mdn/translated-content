---
title: symbols
slug: Web/CSS/@counter-style/symbols
---

## Summary

El descriptor `symbols` es usado para definir los símbolos que usará un sistema de conteo específico para construir una representación de conteo. Un símbolo puede ser un texto, una imagen o un identificador. El descriptor symbols debe ser especificado cuando el valor del descriptor {{cssxref('system')}} es _cyclic_, _numeric_, _alphabetic_, _symbolic_, o _fixed_. Cuando se usa el sistema _additive_, el descriptor {{cssxref('additive-symbols')}} es usado para especificar los símbolos.

Los valores posibles para descriptor de símbolos incluyen:

- Textos ({{cssxref("&lt;string&gt;")}}) - secuencia de caracteres definidos entre comillas sencillas o dobles. Se pueden usar diagonales invertidas (\\) para escapar caracteres especiales. Por ejemplo, los caracteres Unicode pueden ser especificados en formato "\24B6".
- Imágenes - Usando la función {{cssxref("&lt;url&gt;", "url()")}}
- Identificadores

{{cssinfo}}

## Sintaxis

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("first.svg") url("second.svg") url("third.svg");
symbols: indic-numbers;
```

### Valores

- `<symbol>`
  - : Representa u símbolo (`<symbol>`) usado dentro del sistema de conteo.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

### CSS

```css
@counter-style symbols-example {
  system: fixed;
  symbols: A "1" "\24B7" D E;
}

.list {
  list-style: symbols-example;
}
```

### Resultado

{{EmbedLiveSample('', '', '')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, la notación funcional para crear estilos de contador anónimos.

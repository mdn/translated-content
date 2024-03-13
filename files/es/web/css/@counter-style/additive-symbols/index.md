---
title: additive-symbols
slug: Web/CSS/@counter-style/additive-symbols
---

## Resumen

El descriptor additive-symbols es similar al descriptor {{cssxref('symbols')}}, y permite al usuario especificar símbolos que se usarán para representación de contadores cuando el valor del descriptor {{cssxref('system')}} es _additive_. El descriptor `additive-symbols` define lo que se conoce como tuplas aditivas, cada una de las cuales es un par que contiene un símbolo y su peso como entero no negativo. El sistema aditivo es usado para construir sistemas de [numeración de valores de signos](http://en.wikipedia.org/wiki/Sign-value_notation) como la numeración romana.

Cuando el valor del descriptor es _cyclic_, _numeric_, _alphabetic_, _symbolic_, o _fixed_, se usa el descriptor `symbols`, en lugar de `additive-symbols` para especificar los símbolos de conteo.

{{cssinfo}}

## Sintaxis

```css
additive-symbols: 3 "0";
additive-symbols:
  3 "0",
  2 "\2E\20";
additive-symbols:
  3 "0",
  2 url(symbol.png);
```

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### Contenido HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

### Contenido CSS

```css
@counter-style additive-symbols-example {
  system: additive;
  additive-symbols: I 1;
}
.list {
  list-style: additive-symbols-example;
}
```

### Resultado

{{ EmbedLiveSample('Example') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, la notación funcional para crear estilos de contador anónimos.

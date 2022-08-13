---
title: Selectores universales
slug: Web/CSS/Universal_selectors
tags:
  - CSS
  - Principiante
  - Referencia CSS
  - Selectores
translation_of: Web/CSS/Universal_selectors
---
{{CSSRef}}

El **selector universal** CSS (`*`) coincide con elementos de cualquier tipo.

```css
/* Selecciona todos los elementos */
* {
  color: green;
}
```

A partir de CSS3, el asterisco se puede usar en combinación con {{cssxref("CSS_Namespaces", "namespaces")}}:

- `ns|*` - coincide con todos los elementos en el espacio de nombres _ns_
- `*|*` - coincide con todos los elementos
- `|*` - matches all elements without any declared namespace

## Sintaxis

    * { style properties }

El asterisco es opcional con selectores simples. Por ejemplo, `*.warning` y `.warning` son equivalentes.

## Ejemplos

### CSS

```css
* [lang^=en] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left
}

/* despejar automáticamente el siguiente hermano después de un elemento flotante */
.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning">
  <span lang="en-us">Un span verde</span> en un párrafo rojo.</span>
</p>
<p id="maincontent" lang="en-gb">
  <span class="warning">Un span rojo</span> en un párrafo verde.</span>
</p>
```

### Resultado

{{EmbedLiveSample('Ejemplos')}}

## Especificaciones

| Especificación                                                                                               | Estado                               | Comentarios                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#the-universal-selector', 'universal selector')}}     | {{Spec2('CSS4 Selectors')}} | Ningún cambio.                                                                                                                                              |
| {{SpecName('CSS3 Selectors', '#universal-selector', 'universal selector')}}         | {{Spec2('CSS3 Selectors')}} | Define el comportamiento con respecto a los espacios de nombres y agrega la sugerencia de que se permite omitir el selector dentro de los pseudo-elementos. |
| {{SpecName('CSS2.1', 'selector.html#universal-selector', 'universal selector')}} | {{Spec2('CSS2.1')}}             | Definición Inicial.                                                                                                                                         |

## Compatibilidad con navegadores

{{Compat("css.selectors.universal")}}

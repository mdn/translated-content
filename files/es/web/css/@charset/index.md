---
title: "@charset"
slug: Web/CSS/@charset
---

{{ CSSRef }}

## Resumen

La [regla-at](/en/CSS/At-rule) **`@charset`** de [CSS](/en/CSS) especifica la codificación de caracteres usada en la hoja de estilos. Éste debe ser el primer elemento en la hoja de estilos, y no debe ser precedidad por ningun otro caracter; al no ser una [declaración anidada](/en/CSS/Syntax#nested_statements), no puede ser usada dentro de [grupos de reglas-at condicionales](/en/CSS/At-rule#Conditional_Group_Rules). Si se definen varias reglas-at `@charset`, solamente se usará la primera. La regla-at `@charset` no puede ser usada dentro de un atributo `style` style en un elemento HTML o dentro del elemento {{ HTMLElement("style") }} , ya que en estos casos se tomará en cuenta la codificación de la página HTML contenedora.

Esta regla-at es útil cuando se usan caracteres fuera de la codificación ASCII en alguna propiedad CSS, como {{ cssxref("content") }}.

Habiendo diferentes maneras de definir la codificación de caracteres en una hoja de estilos, el navegador intentará seguir este orden para identificarlo (deteniéndose en el primer paso que dé resultado):

1. El valor de la [Marca de orden de bytes](https://es.wikipedia.org/wiki/Marca_de_orden_de_bytes) al principio del archivo.
2. El valor dado por el atributo charset del encabezado HTTP `Content-Type:` o su equivalente en el protocolo usado para descargar la hoja de estilos.
3. La regla-at `@charset` de CSS.
4. Usar la codificación de caracteres definida en el documento de referencia: el atributo `charset` attribute del elemento {{ HTMLElement("link") }}. Este método es obsoleto para HTML5 y no debe ser usado.
5. Asumir que el documento es UTF-8.

## Sintaxis

```css
@charset "UTF-8";
@charset 'iso-8859-15';
```

- donde:

  - : _charset_

    Es un valor {{cssxref("&lt;string&gt;")}} que denota la codificación de caracteres que será usada. Debe ser el nombre de una codificación de caracteres compatible con Web, definida en el [registro IANA](http://www.iana.org/assignments/character-sets). Si varios nombres están asociados a una codificación, solamente se usará el que está marcado como _principal_.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
@charset "UTF-8"; /* Establece la codificación de la hoja de estilos a Unicode UTF-8 */
@charset 'iso-8859-15'; /* Establece la codificación de la hoja de estilos a Latin-9 (idiomas de Europa Occidental, con símbolo de euro) */
@charset "UTF-8"; /* Inválido, hay un caracter (espacio) antes de la regla-at */
@charset UTF-8; /* Inválido, sin comillas simples o dobles, el valor no es una cadena {{cssxref("&lt;string&gt;")}} de CSS */
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

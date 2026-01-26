---
title: "@import"
slug: Web/CSS/@import
---

## Resumen

La regla-at [CSS](/es/docs/Web/CSS) `@import` permite importar reglas desde otras hojas de estilo. Estas reglas deben preceder a todos los otros tipos de reglas, excepto a las reglas {{ cssxref("@charset") }}; como esto no es una [declaración anidada](/es/docs/Web/CSS/CSS_syntax/Syntax#nested_statements), no puede ser usado dentro de [grupos condicionales de reglas-at](/es/docs/Web/CSS/CSS_syntax/At-rule#conditional_group_rules).

Para que los agentes de usuario puedan evitar recuperar recursos para tipos de medios no soportados, los autores pueden especificar reglas dependientes del tipo de medio `@import`. Estas condiciones @import se especifican separando por una coma las [consultas de medios (media query)](/es/docs/Web/CSS/CSS_media_queries/Using_media_queries) despues de la _url_. En la ausencia de cualquier consulta de medios (media query), la importación es incondicional. Especificando `all` para el medio tiene el mismo efecto.

## Sintaxis

```
@import url;                      or
@import url list-of-media-queries;
```

Dónde :

- _url_
  - : es una {{cssxref("&lt;string&gt;")}} o un {{cssxref("&lt;uri&gt;")}}

    Representa la ubicación del recurso a importar. La _url_ puede ser absoluta o relativa.

- _list-of-media-queries_
  - : Es una lista separada por comas de [consultas de medios (media query)](/es/docs/Web/CSS/CSS_media_queries/Using_media_queries) que condicionan la aplicación de las reglas CSS definidas en el enlace _url_. Si el navegador no soporta cualquiera de estos [consultas de medios (media query)](/es/docs/Web/CSS/CSS_media_queries/Using_media_queries), ni siquiera cargará el recurso vinculado.

## Ejemplos

```
@import url("fineprint.css") print;
@import url("bluish.css") projection, tv;
@import 'custom.css';
@import "common.css" screen, projection;
@import url('landscape.css') screen and (orientation:landscape);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

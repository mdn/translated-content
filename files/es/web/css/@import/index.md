---
title: '@import'
slug: Web/CSS/@import
translation_of: Web/CSS/@import
---
{{CSSRef}}

## Resumen

La regla-at [CSS](/en/CSS) `@import` permite importar reglas desde otras hojas de estilo. Estas reglas deben preceder a todos los otros tipos de reglas, excepto a las reglas {{ cssxref("@charset") }}; como esto no es una [declaración anidada](/en/CSS/Syntax#nested_statements), no puede ser usado dentro de [grupos condicionales de reglas-at](/en/CSS/At-rule#Conditional_Group_Rules).

Para que los agentes de usuario puedan evitar recuperar recursos para tipos de medios no soportados, los autores pueden especificar reglas dependientes del tipo de medio `@import`. Estas condiciones @import se especifican separando por una coma las [consultas de medios (media query)](/en/CSS/Media_queries) despues de la _url_. En la ausencia de cualquier consulta de medios (media query), la importación es incondicional. Especificando `all` para el medio tiene el mismo efecto.

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
  - : Es una lista separada por comas de [consultas de medios (media query)](/en/CSS/Media_queries) que condicionan la aplicación de las reglas CSS definidas en el enlace _url_. Si el navegador no soporta cualquiera de estos [consultas de medios (media query)](/en/CSS/Media_queries), ni siquiera cargará el recurso vinculado.

## Ejemplos

```
@import url("fineprint.css") print;
@import url("bluish.css") projection, tv;
@import 'custom.css';
@import "common.css" screen, projection;
@import url('landscape.css') screen and (orientation:landscape);
```

## Especificaciones

| Especificación                                                                   | Estado                                       | Comentario                                                                                                                                                                                  |
| -------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS3 Media Queries', '#media0', '@import') }}     | {{ Spec2('CSS3 Media Queries') }} | Extiende la sintaxis para soportar cualquier [consultas de medios (media query)](/en/CSS/Media_queries) y no sólo los [tipos de medios](/en/CSS/@media#Media_types) simples.                |
| {{ SpecName('CSS2.1', 'cascade.html#at-import', '@import') }} | {{ Spec2('CSS2.1') }}                 | Añade soporte para {{cssxref("&lt;string&gt;")}} para denotar la _url_ de una hoja de estilo, y es requerida para insertar la regla `@import` en el principio del documento CSS. |
| {{ SpecName('CSS1', '#the-cascade', '@import') }}                 | {{ Spec2('CSS1') }}                     |                                                                                                                                                                                             |

## Compatibilidad de navegadores

{{Compat("css.at-rules.import")}}

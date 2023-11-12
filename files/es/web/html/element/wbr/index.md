---
title: <wbr>
slug: Web/HTML/Element/wbr
---

{{HTMLSidebar}}

El elemento HTML _word break opportunity_ `<wbr>` representa una posición dentro del texto donde el explorador puede opcionalmente saltar una línea , aunque sus reglas de salto de línea de otra manera no crearían un salto en esa posición .En páginas codificadas en UTF-8 , \<wbr> se comporta como el punto de código `U+200B ZERO-WIDTH SPACE`. En particular se comporta como un punto de código unicode bidi BN , significando esto que no tiene efecto en ordenamiento bidi : `<div dir=rtl>123,<wbr>456</div>` muestra , cuando no se rompa en dos líneas , 123, 456 y no 456 , 123 .

Por la misma razón el elemento `<wbr>` no introduce un guión en el salto de línea . Para hacer aparecer un guión solo al final de la línea , usar la entidad de caracter del guión de separación (`& shy;`) en su lugar.

Este elemento fue implementado por primera vez en Internet Explorer 5.5 y fue oficialmente definido en HTML5 .

## Contexto de uso

| Contenido permitido        | Vacío                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Omisión de etiquetas       | Es un {{Glossary("empty element")}}; debe de tener una etiqueta de inicio pero no debe de tener una de cierre . |
| Elementos padre permitidos | Cualquier elemento que permita contenido estático de texto.                                                     |
| Documento normativo        | [HTML 5, section 4.6.24](http://dev.w3.org/html5/spec/text-level-semantics.html#the-wbr-element)                |

## Atributos

Este elemento solo incluye los [atributos globales](/es/docs/Web/HTML/Atributos_Globales) .

## Interfase DOM

Este elemento implementa la interface [HTMLElement](/es/docs/Web/API/HTMLElement).

## Ejemplo

La [guia de estilo de Yahoo](http://styleguide.yahoo.com/) recomienda [romper una URL antes de la puntuación](https://shopping.yahoo.com/9780312569846-yahoo-style-guide/) , para evitar dejar una marca de puntuación en el final de la línea , lo cual el lector podría confundir con el final de la URL .

```html
<p>
  http://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

{{EmbedLiveSample("Example")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

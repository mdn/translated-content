---
title: Comment
slug: Web/API/Comment
tags:
  - API
  - DOM
  - Referências
  - comentários
translation_of: Web/API/Comment
---
{{ ApiRef("DOM") }}

La interfaz **`Comment`** representa las anotaciones y comentarios dentro del código fuente; aunque generalmente no se muestran visualmente en el navegador, dichos comentarios están disponibles para ser leídos en la** [vista de código](/es/docs/Tools/View_source)**.
Los comentarios se representan en HTML y XML como contenido entre '\<!--' y '-->'. En XML, la secuencia de caracteres '--' no se puede usar dentro de un comentario.

{{InheritanceDiagram}}

## Propiedades

_Esta interfaz no tiene ninguna propiedad específica, pero hereda las de su padre,{{domxref("CharacterData")}}, e indirectamente los de {{domxref("Node")}}._

## Constructor

- {{ domxref("Comment.Comment()", "Comment()") }} {{experimental_inline}}
  - : Devuelve un objeto `Comment` con el contenido del comentario como parámetro.

## Métodos

_Esta interfaz no tiene ninguna propiedad específica, pero hereda las de su padre,{{domxref("CharacterData")}}, e indirectamente los de {{domxref("Node")}}._

## Especificaciones

| Specification                                                                                | Status                           | Comment                                         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| {{SpecName('DOM WHATWG', '#comment', 'Comment')}}                             | {{Spec2('DOM WHATWG')}} | Agregado el constructor.                        |
| {{SpecName('DOM3 Core', 'core.html#ID-1728279322', 'Comment')}}         | {{Spec2('DOM3 Core')}}     | Sin cambios de {{SpecName('DOM2 Core')}} |
| {{SpecName('DOM2 Core', 'core.html#ID-1728279322', 'Comment')}}         | {{Spec2('DOM2 Core')}}     | Sin cambios de {{SpecName('DOM1')}}     |
| {{SpecName('DOM1', 'level-one-core.html#ID-1728279322', 'Comment')}} | {{Spec2('DOM1')}}         | Definición inicial                              |

## Compatibilidad entre navegadores

{{Compat("api.Comment")}}

## Lea también

- [Índice de interfaces DOM](/es/docs/Web/API/Document_Object_Model "/en-US/docs/DOM/DOM_Reference")

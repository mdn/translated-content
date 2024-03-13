---
title: dir
slug: Web/HTML/Global_attributes/dir
---

{{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) dir es un atributo enumerado que indica la direccionalidad del texto de los elementos . Puede tener los siguientes valores :

- `ltr`, significa _izquierda_ a _derecha_ y es usado para los lenguajes que son escritos de izquierda a derecha ( como el Inglés ) .
- `rtl`, significa _derecha_ a _izquierda_ y es usado para los lenguajes que son escritos de la derecha a la izquierda (como el árabe ) .
- `auto`, permite al agente usuario decidir . Usa un algoritmo básico mientras parsea los caracteres dentro de un elemento hasta que encuentra un elemento con una direccionalidad fuerte , después aplica esa direccionalidad a todo el elemento .

> **Nota:** Este atributo es obligatorio para el elemento {{ HTMLElement("bdo") }} donde este tiene un significado semántico diferente.
>
> - Este atributo no es heredado por el elemento {{ HTMLElement("bdi") }} . Si no se establece , su valor es `auto`.
> - Este atributo puede ser anulado por las propiedades de CSS {{ cssxref("direction") }} y {{ cssxref("unicode-bidi") }} , si una página CSS está activa y el elemento soporta estas propiedades.
> - Mientras la direccionalidad del texto esté semánticamente relacionada con su contenido y no con su presentación , se recomienda que los desarrolladores web usen este atributo en lugar de propiedades de CSS relacionadas , cuando sea posible . De esta forma , el texto se mostrará correctamente incluso en un explorador que no soporte CSS o que tenga CSS desactivado .
> - El valor `auto` debe de ser usada para datos con una direccionalidad desconocida , com datos procedentes de la entrada de usuario , eventualmente almacenados en una base de datos .

## Especificaciones

{{Specifications}}

## Compatibilidad de Navegadores

{{Compat}}

## See also

- [atributos globales](/es/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.dir")}} que refleja este atributo .

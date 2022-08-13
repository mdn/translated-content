---
title: Element.id
slug: Web/API/Element/id
tags:
  - API
  - DOM
  - Elemento
  - Propiedad
  - Referencia
translation_of: Web/API/Element/id
---
{{ ApiRef("DOM") }}

La propiedad **`Element.id`** representa el identificador del elemento, reflejando el atributo global de **[id](/es/docs/Web/HTML/Global_attributes/id)**.

debe ser un único documento, y con frecuencia es utilizado para recuperar el elemento usando {{domxref("document.getElementById", "getElementById")}}. Otros usos comunes de `id` incluyen la utilización de elementos [ID como un selector](/es/docs/Web/CSS/ID_selectors "Web/CSS/ID_selectors") cuando se está estilando el documento con [CSS](/es/docs/Web/CSS "CSS").

> **Nota:** los identificadores distinguen mayúsculas y minúsculas, pero se debe evitar la creación de IDs que difieran solamente en la capitalization (ver [diferenciación de mayúsculas y minúsculas en nombres y destacados ](/es/docs/Case_Sensitivity_in_class_and_id_Names "Case_Sensitivity_in_class_and_id_Names")).

## Síntasix

    var idStr = elt.id; // Get the id.
    elt.id = idStr; // Set the id

- _`idStr`_ es el identificador del elemento.

## Especificaciones

| Especificación                                                                   | Estado                           | Comentario                                       |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------ |
| {{SpecName('DOM WHATWG', '#dom-element-id', 'id')}}             | {{Spec2('DOM WHATWG')}} | No change from {{SpecName('DOM2 HTML')}}. |
| {{SpecName('DOM2 HTML', 'html.html#ID-63534901', 'id')}}     | {{Spec2('DOM2 HTML')}}     | No change from {{SpecName('DOM1')}}.     |
| {{SpecName('DOM1', 'level-one-html.html#ID-63534901', 'id')}} | {{Spec2('DOM1')}}         | Initial definition.                              |

## Compatibilidad de los navegadores

{{Compat("api.Element.id")}}

## Ver también

- La [**id** ](/es/docs/Web/HTML/Global_attributes/id)del atributo global DOM.

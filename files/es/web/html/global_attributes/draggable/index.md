---
title: draggable
slug: Web/HTML/Global_attributes/draggable
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **draggable** es un atributo enumerado que indica si el elemento puede ser arrastrado , usando el {{domxref("HTML_Drag_and_Drop_API","HTML Drag and Drop API")}} . Puede tener los siguientes valores :

- `true` , indica que el elemento puede ser arrastrado.
- `false`, indica que el elemento no puede ser arrastrado .

Si este atriuto no se establece , su valor por default es `auto` , significando que el comportamiento debe de ser el definido por default en el explorador .

Este es un atributo _enumerado_ y no uno _booleano_ . Esto signigica que el uso explícito de uno de los valores _true_ o _false_ es obligatorio y que una declaración como `<label draggable>Example Label</label>` no está permitida . El uso correcto es `<label draggable="true">Example Label</label>`.

Por default , unicamente el texto , las imagenes y los vínculos pueden ser arrastrados . Para todos los demás elementos el evento **{{domxref('GlobalEventHandlers.ondragstart','ondragstart')}}** debe de ser establecido para el mecanismo de arrastrar y soltar para que funcione , como se muestra en este [ejempl](/es/docs/DragDrop/Drag_Operations)o .

## Especificaciones

{{Specifications}}

## Compatibilidad de Navegadores

{{Compat}}

**Ver también**

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales)

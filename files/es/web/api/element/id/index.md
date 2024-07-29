---
title: Element.id
slug: Web/API/Element/id
---

{{ APIRef }}

La propiedad `Element.id` representa el identificador del elemento, reflejando el atributo global de **[id](/es/docs/Web/HTML/Global_attributes/id)**.

debe ser un único documento, y con frecuencia es utilizado para recuperar el elemento usando {{domxref("document.getElementById", "getElementById")}}. Otros usos comunes de `id` incluyen la utilización de elementos [ID como un selector](/es/docs/Web/CSS/ID_selectors) cuando se está estilando el documento con [CSS](/es/docs/Web/CSS).

> [!NOTE]
> Los identificadores distinguen mayúsculas y minúsculas, pero se debe evitar la creación de IDs que difieran solamente en la capitalization (ver [diferenciación de mayúsculas y minúsculas en nombres y destacados](/es/docs/Case_Sensitivity_in_class_and_id_Names)).

## Síntaxis

```js
var idStr = elt.id; // Get the id.
elt.id = idStr; // Set the id
```

- `idStr` es el identificador del elemento.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La [**id**](/es/docs/Web/HTML/Global_attributes/id) del atributo global DOM.

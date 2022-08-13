---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
translation_of: Web/API/HTMLElement/contentEditable
---
{{APIRef("HTML DOM")}}

La propiedad **`contentEditable`** de la interfaz {{domxref("HTMLElement")}} especifica si el elemento es editable o no. Este atributo puede tener los siguientes valores:

- `'true'` indica si el elemento es `contenteditable`.
- `'false'` indica que el elemento no puede ser editado.
- `'inherit'` indica que el elemento hereda el estado editable del padre.

Se puede usar la propiedad {{domxref("HTMLElement.isContentEditable")}} para comprobar el valor {{jsxref("Boolean")}} de esta propiedad.

## Sintáxis

    editable = element.contentEditable
    element.contentEditable = 'true'

## Especificaciones

| Especificación                                                                                               | Status                           | Comment            |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', 'interaction.html#contenteditable', 'contenteditable')}} | {{Spec2('HTML WHATWG')}} | Initial definition |

## Browser compatibility

{{Compat("api.HTMLElement.contentEditable")}}

In Internet Explorer, `contenteditable` cannot be applied to the {{htmlelement("table")}}, {{htmlelement("col")}}, {{htmlelement("colgroup")}}, {{htmlelement("tbody")}}, {{htmlelement("td")}}, {{htmlelement("tfoot")}}, {{htmlelement("th")}}, {{htmlelement("thead")}}, and {{htmlelement("tr")}} elements directly. A content editable {{htmlelement("span")}} or {{htmlelement("div")}} element can be placed inside the individual table cells.

## See also

- [Making content editable](/es/docs/Web/Guide/HTML/Editable_content)
- {{domxref("HTMLElement.isContentEditable")}}
- The {{htmlattrxref("contenteditable")}} global attribute.

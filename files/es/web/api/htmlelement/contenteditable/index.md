---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
---

{{APIRef("HTML DOM")}}

La propiedad **`contentEditable`** de la interfaz {{domxref("HTMLElement")}} especifica si el elemento es editable o no. Este atributo puede tener los siguientes valores:

- `'true'` indica si el elemento es `contenteditable`.
- `'false'` indica que el elemento no puede ser editado.
- `'inherit'` indica que el elemento hereda el estado editable del padre.

Se puede usar la propiedad {{domxref("HTMLElement.isContentEditable")}} para comprobar el valor {{jsxref("Boolean")}} de esta propiedad.

## Sintáxis

```
editable = element.contentEditable
element.contentEditable = 'true'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Making content editable](/es/docs/Web/Guide/HTML/Editable_content)
- {{domxref("HTMLElement.isContentEditable")}}
- The {{htmlattrxref("contenteditable")}} global attribute.

---
title: Document.designMode
slug: Web/API/Document/designMode
tags:
  - API
  - Documento
  - HTML DOM
  - Propiedad
  - Referencia
  - editor
translation_of: Web/API/Document/designMode
---
{{ ApiRef() }}

**`document.designMode`** controla la posibilidad de editar un documento entero. Los valores válidos son `"on"` y `"off"`. De acuerdo a las especificaciones, el valor predeterminado de esta propiedad es `"off"`. Firefox sigue este estándar. El valor predeterminado de versiones anteriores de Chrome y IE es `"inherit"`. En IE6-10, el valor se escribe con mayúscula.

## Sintaxis

    var mode = document.designMode;
    document.designMode = "on" || "off";

## Ejemplo

Hacer un documento {{HTMLElement("iframe")}} editable:

```js
iframeNode.contentDocument.designMode = "on";
```

## Especificaciones

| Especificación                                                                                                                                   | Estado                           | Comentario          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('HTML WHATWG', '#making-entire-documents-editable:-the-designmode-idl-attribute', 'designMode')}} | {{Spec2('HTML WHATWG')}} | Definición inicial. |

## Compatibilidad de Navegadores

{{Compat("api.Document.designMode")}}

## Ver también

- [Editando text enriquecido en Mozilla](/es/docs/Rich-Text_Editing_in_Mozilla)
- {{domxref("HTMLElement.contentEditable")}}
- [propiedad designMode](<https://msdn.microsoft.com/en-us/library/ms533720(v=vs.85).aspx>) en MSDN

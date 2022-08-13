---
title: Document.designMode
slug: Web/API/Document/designMode
translation_of: Web/API/Document/designMode
---
{{ApiRef()}}

**`document.designMode`** kontroluje czy dokument może być edytowany. Dopuszczalne wartości to `"on"` (włączona edycja) oraz `"off"` (wyłączona edycja). Zgodnie ze specyfikacją, wartość domyślna to `"off"`. Firefox stosuje ten standard. Dla wcześniejszych wersji Chrome oraz IE domyślną wartością było `"inherit"`. Od wersji Chrome 43, standardem jest wartość `"off"`, a `"inherit"` nie jest wspierane. W IE 6-10, wartość jest używana naprzemiennie.

## Składnia

    var mode = document.designMode;
    document.designMode = "on" || "off";

## Przykład

Spraw aby element {{HTMLElement("iframe")}} był edytowalny:

```js
iframeNode.contentDocument.designMode = "on";
```

## Specyfikacje

| Specification                                                                                                                                    | Status                           | Comment   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', '#making-entire-documents-editable:-the-designmode-idl-attribute', 'designMode')}} | {{Spec2('HTML WHATWG')}} | Definicja |

## Kompatybilność przeglądarek

{{Compat("api.Document.designMode")}}

## Zobacz również

- [Edycja "Rich-Text" w witrynie Mozilla](/pl/docs/Rich-Text_Editing_in_Mozilla)
- {{domxref("HTMLElement.contentEditable")}}
- [Właściwości designMode](<https://msdn.microsoft.com/en-us/library/ms533720(v=vs.85).aspx>) na stronie MSDN

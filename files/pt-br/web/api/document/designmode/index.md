---
title: Document.designMode
slug: Web/API/Document/designMode
translation_of: Web/API/Document/designMode
---
{{ ApiRef() }}

## Sumário

`document.designMode` controla se o documento todo é editável. Valores validos são `"on"` e `"off"`. De acordo com a especificação, esta propriedade é por padrão `"off"`. Firefox segue este padrão. Nas versões anteriores do Chrome e IE o padrão é `"inherit"`. No IE6-10, o valor é capitalizado.

## Sintaxe

```js
var mode = document.designMode;
document.designMode = "on";
document.designMode = "off";
```

## Exemplo

Cria um documento {{HTMLElement("iframe")}} editável:

```
iframe_node.contentDocument.designMode = "on";
```

## Especificação

| Specification                                                                                                                                    | Status                           | Comment             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('HTML WHATWG', '#making-entire-documents-editable:-the-designmode-idl-attribute', 'designMode')}} | {{Spec2('HTML WHATWG')}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("api.Document.designMode")}}

## Veja também:

- [Rich-Text Editing in Mozilla](/pt-BR/docs/Rich-Text_Editing_in_Mozilla)
- {{domxref("HTMLElement.contentEditable")}}
- [designMode property](<https://msdn.microsoft.com/en-us/library/ms533720(v=vs.85).aspx>) on MSDN

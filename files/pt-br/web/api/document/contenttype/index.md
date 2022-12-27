---
title: Document.contentType
slug: Web/API/Document/contentType
translation_of: Web/API/Document/contentType
---
{{APIRef}}

**`Document.contentType`** é uma propriedade somente de leitura, que retorna o tipo MIME do documento que esta sendo rendenrizado.Isso pode vir de cabeçalhos HTPP ou de outras fontes de informações MIME, e pode se afetado por conversões realizadas pelo navegador ou pelas extenções.

> **Nota:** Esta proiedade não é afetada pelos elementos {{HTMLElement("meta")}}.

## Sintaxe

```
contentType = document.contentType;
```

### Value

`contentType` é uma propriedade somente de leitura.

## Especificações

| Especificação                                                                                            | Status                           | Comentário        |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------- |
| {{SpecName('DOM WHATWG', '#dom-document-contenttype', 'Document.contentType')}} | {{Spec2('DOM WHATWG')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("api.Document.contentType")}}

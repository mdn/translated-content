---
title: Document.doctype
slug: Web/API/Document/doctype
---

{{ApiRef("DOM")}}

Retorna a declaração do tipo de documento(Document Type Declaration (DTD)) associado ao documento atual. O objeto retornado implementa a interface {{domxref("DocumentType")}}. Use {{domxref("DOMImplementation.createDocumentType()")}} para criar um `DocumentType`.

## Sintaxe

```
doctype = document.doctype;
```

- `doctype` é uma proriedade somente de leitura.

## Exemplo

```js
var doctypeObj = document.doctype;

console.log(
  "doctypeObj.name: " +
    doctypeObj.name +
    "\n" +
    "doctypeObj.internalSubset: " +
    doctypeObj.internalSubset +
    "\n" +
    "doctypeObj.publicId: " +
    doctypeObj.publicId +
    "\n" +
    "doctypeObj.systemId: " +
    doctypeObj.systemId,
);
```

## Notas

A propriedade retornará `null` se não houvernehum DTD associado ao documento atual.

O nível 2 do DOM não suporta a edição da declaração do tipo de documento.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

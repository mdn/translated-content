---
title: Document.documentURI
slug: Web/API/Document/documentURI
---

{{ApiRef("DOM")}}A propiedade **`documentURI`** da interface {{domxref("Document")}} retorna uma string com a localização de um documento.Na definição original DOM3 **`documentURI`** é um atributo de leitura/escrita.No padrão mais recente DOM4 é somente de leitura.

## Sintaxe

```
var string = document.documentURI;
```

## Notas

Os Documentos HTML tem uma propriedade {{domxref("document.URL")}} que retorna o mesmo valor (localização do documento).

A diferençã é que **`document.URL`** só pode ser usado em documentos HTML, enquanto **`documentURI`** está disponivel para todos os documentos web.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

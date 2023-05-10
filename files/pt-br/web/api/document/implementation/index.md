---
title: Document.implementation
slug: Web/API/Document/implementation
---

{{ ApiRef("DOM") }}

## Sumário

Retorna um objeto {{domxref("DOMImplementation")}} associado ao documento atual.

## Sintaxe

```
DOMImpObj = document.implementation;
```

## Exemplo

```js
var modName = "HTML";
var modVer = "2.0";
var conformTest = document.implementation.hasFeature( modName, modVer );

alert( "DOM " + modName + " " + modVer + " supported?: " + conformTest );

// alerts with: "DOM HTML 2.0 supported?: true" if DOM Level 2 HTML module is supported.
```

Uma lista dos nomes de módulos (ex., Core, HTML, XML, etc) está disponível na DOM Level 2 [Conformance Section](https://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance-h2)

## Notas

A Recomendação do W3C DOM Level 1 apenas especifica o método `hasFeature`, que é o único meio de verificar se o módulo DOM é suportado pelo navegador (veja exemplo acima e [What does your user agent claim to support?](https://www.w3.org/2003/02/06-dom-support.html)). Quando disponível, outros métodos `DOMImplementation` proverão serviços para controlar coisas fora deste único documento. Por exemplo, a interface `DOMImplementation` inclui um método `createDocumentType` com o qual DTD's podem ser criados para um ou mais documentos gerenciados pela implementação.

## Especificação

- [DOM Level 2 Core: implementation](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490)
- [DOM Level 3 Core: implementation](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490)

## Notas específicas para o Gecko

- À partir do Gecko 19.0 o método {{domxref("DOMImplementation.hasFeature","hasFeature")}} irá sempre retornar _true_.

---
title: Document.documentElement
slug: Web/API/Document/documentElement
---

{{ ApiRef("DOM") }}

O **document.documentElement** retorna o [`Elemento`](/pt-BR/docs/Web/API/Element) que é o elemento raiz do [`documento`](/pt-BR/docs/Web/API/Document) (por exemplo, o elemento `<html>` para documentos HTML).

## Sintaxe

```
var element = document.documentElement;
```

## Exemplo

```js
var rootElement = document.documentElement;
var primeiroNivel = rootElement.childNodes;

// primeiroNivel é a NodeList do filho direto do elemento raíz
for (var i = 0; i < primeiroNivel.length; i++) {
  // faça algo com cada filho direto do elemento raiz
  // como primeiroNivel[i]
}
```

## Notas

Esta propriedade é uma conveniência somente leitura para obter o elemento raiz associado com qualquer documento.

Documentos HTML tipicamente contém somente um único nó filho, `<html>`, talvez com uma declaração DOCTYPE antes dele. Documentos XML, frequentemete contêm múltiplos nós filhos: o elemento de raiz, a declaração DOCTYPE, e as [instruções de processamento](/pt-BR/docs/Web/API/ProcessingInstruction).

É por isso que você deve usar `document.documentElement` em vez de {{Domxref ("document.firstChild")}} para obter o elemento raiz.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

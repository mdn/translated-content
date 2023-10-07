---
title: Node.parentNode
slug: Web/API/Node/parentNode
---

{{APIRef("DOM")}}

**`Node.parentNode`** é uma propriedade DOM somente leitura que retorna o nó (node) parente de um Node referenciado na árvore DOM. É extremamente aconselhável que você conheça a estrutura DOM para um melhor estudo e aprendizado.

## Syntax

```
parentNode = node.parentNode
```

`parentNode` é o node parente do node referenciado. O parente de um elemento é um Element node, um Document node, ou um DocumentFragment node. Será muito complicado entender tudo isso sem conhecer a estrutura DOM e seus Elements.

## Exemplo

```js
// Exemplo de como obter um elemento pai
parente = node.parentNode; // Retorna o elemento pai

// Obtém o primeiro <li> de uma lista
var li = document.getElementsById("li-first");
// A partir do <li> obtido, obtém o element <ul>
var ul = li.parentNode;

// Estrutura com parágrafos dentro de uma div
var p = document.getElementsByTagName("p");
var div = p[0].parentNode;

if (node.parentNode) {
  // remove um node da árvore (estrutura) DOM, a menos que
  // ele já não exista não estrutura
  node.parentNode.removeChild(node);
}
```

## Notas

`Document` e `DocumentFragment` [nodes](/pt-BR/docs/DOM/Node.nodeType) nunca podem ter um node parent, sendo assim `parentNode` sempre retornará `null`. Também retornará null se o node já tiver sido criado e não ainda não estiver anexado à estrutura DOM.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{Domxref("Node.firstChild")}}
- {{Domxref("Node.lastChild")}}
- {{Domxref("Node.childNodes")}}
- {{Domxref("Node.nextSibling")}}
- {{Domxref("Node.previousSibling")}}
- {{Domxref("Node.removeChild")}}

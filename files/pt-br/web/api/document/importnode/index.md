---
title: Document.importNode()
slug: Web/API/Document/importNode
---

{{APIRef("DOM")}}

Cria uma cópia de um nó a partir de um documento externo para ser inserido no document atual.

## Sintaxe

```
var node = document.importNode(externalNode, deep);
```

- `node`
  - : `O novo nó que será importado no documento. A propriedade parentNode do novo nó é null, desde que ele não foi inserido na árvores do documento.`
- `externalNode`
  - : `O nó de outro documento para ser importado.`
- `deep`
  - : `Um boolean, indicando se os nós filhos, do nó a ser importado, devem ser importados também.`

> **Nota:** In the DOM4 specification (as implemented in Gecko 13.0), `deep` is an optional argument. If omitted, the method acts as if the value of `deep` was **`true`**, defaulting to using deep cloning as the default behavior. To create a shallow clone, `deep` must be set to `false`.
>
> This behavior has been changed in the latest spec, and if omitted, the method will act as if the value of `deep` was **`false`**. Though It's still optional, you should always provide the `deep` argument both for backward and forward compatibility. With Gecko 28.0, the console warned developers not to omit the argument. Starting with Gecko 29.0), a shallow clone is defaulted instead of a deep clone.

## Exemplo

```js
var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentWindow.document.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Notas

O nó original não é removido do documento de origem. O nó importado é um clone do original.

Nodes from external documents should be cloned using [`document.importNode()`](/pt-BR/docs/Web/API/Document/importNode) (or adopted using [`document.adoptNode()`](/pt-BR/docs/Web/API/Document/adoptNode)) before they can be inserted into the current document. For more on the [`Node.ownerDocument`](/pt-BR/docs/Web/API/Node/ownerDocument) issues, see the [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for improved future compatibility.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("document.adoptNode()")}}

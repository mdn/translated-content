---
title: Node.contains
slug: Web/API/Node/contains
---

{{ApiRef("DOM")}}

## Sumário

Indica se um nó é um descendente de um dado nó.

## Sintaxe

```
node.contains( otherNode )
```

- `node` é o nó que está sendo comparado.
- `otherNode` é o nó contra o qual está sendo comparado.

O valor de retorno é `true` se `otherNode` é um descendente de um nó ou o próprio nó. Caso contrário o valor de retorno é `false`.

## Exemplo

Esta função verifica se um elemento está no corpo da página. As `contains` is inclusive and determining if the body contains itself isn't the intention of `isInPage` this case explicitly returns `false`.

```js
function isInPage(node) {
  return node === document.body ? false : document.body.contains(node);
}
```

- `node` é o nó que desejamos verificar se está no `<body>`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- {{domxref("Node.hasChildNodes")}}

---
title: Node.appendChild
slug: Web/API/Node/appendChild
---

{{ApiRef("DOM")}}

## Resumo

Adiciona um nó ao final da lista de filhos de um nó pai especificado. Se o nó já existir no documento, ele é removido de seu nó pai atual antes de ser adicionado ao novo pai.

## Sintaxe

```
var filho = elemento.appendChild(filho);
```

- `elemento` é o [elemento](/pt-BR/docs/Web/API/Element) pai.
- `filho` é o nó a ser adicionado como filho de `elemento`. Também é devolvido.

## Descrição

O método `appendChild` devolve uma referência ao nó adicionado.

## Exemplo

```js
// Cria um novo elemento de parágrafo e adiciona-o ao final do documento
var p = document.createElement("p");
document.body.appendChild(p);
```

## Notas

Se `filho` é uma referência a um nó existente no documento, `appendChild` vai movê-lo de sua posição atual para a nova posição (i.e, não é necessário remover o nó de seu pai atual antes de adicioná-lo a outro nó).

Isso também significa que um nó não pode estar em dois lugares do documento ao mesmo tempo. Assim, se o nó já tem um pai, ele é primeiro removido para, _só então_, ser adicionado na nova posição.

Você pode usar o método {{domxref("Node.cloneNode")}} para criar uma cópia do nó antes de adicioná-lo ao novo pai. (Note que cópias feitas com o método `cloneNode` **não** serão mantidas sincronizadas automaticamente)

Este método não permite mover nós entre documentos diferentes. Se você quiser adicionar um nó de um documento diferente (por exemplo para mostrar o resultado de uma requisição AJAX), você precisa primeiro usar o método {{domxref("document.importNode")}}.

`appendChild()` é um dos métodos fundamentais da programação para a web usando o DOM. O método `appendChild()` insere um novo nó na estrutura do DOM de um documento, e é a segunda parte do processo criar-e-adicionar tão importante na construção de páginas web programaticamente.

## Especificação

- [DOM Level 3 Core: appendChild](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-184E7107)

## Ver também

- {{domxref("Node.removeChild")}}
- {{domxref("Node.replaceChild")}}
- {{domxref("Node.insertBefore")}}
- {{domxref("Node.hasChildNodes")}}

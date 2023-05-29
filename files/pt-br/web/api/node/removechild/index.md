---
title: Node.removeChild
slug: Web/API/Node/removeChild
---

{{ApiRef("DOM")}}

## Sumário

Remove um nó filho do DOM. Devolve o nó removido.

## Sintaxe

```
var filhoRemovido = elemento.removeChild(filho);
elemento.removeChild(filho);
```

- `filho` é o nó filho a ser removido do DOM.
- `elemento` é o nó pai de `filho`.
- `filhoRemovido` contém uma referência ao nó filho removido. `filhoRemovido` === `filho`.

O nó filho removido ainda existe em memória, mas não é mais parte do DOM. Você pode reutilizar o nó removido mais tarde no seu código por meio da referência `filhoRemovido`.

Se `filho` não for um filho do nó `elemento`, o método lança uma exceção. Isto também acontecerá se `filho` era, de fato, um filho de `elemento` no momento da chamada, mas foi removido por um manipulador de eventos invocado enquanto o elemento estava sendo removido (por exemplo, blur).

## Exemplos

```
<!--Código HTML de exemplo-->

<div id="topo" align="center">
  <div id="interno"></div>
</div>
```

```js
// Removendo um elemento específico quando se conhece seu pai
var d = document.getElementById("topo");
var d_interno = document.getElementById("interno");
var noRemovido = d.removeChild(d_interno);
```

```js
// Removendo um elemento específico sem precisar especificar seu pai
var no = document.getElementById("interno");
if (no.parentNode) {
  no.parentNode.removeChild(no);
}
```

```js
// Removendo todos os nós filhos de um elemento
var elemento = document.getElementById("topo");
while (elemento.firstChild) {
  elemento.removeChild(elemento.firstChild);
}
```

## Especificação

- [DOM Level 1 Core: removeChild](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeChild)
- [DOM Level 2 Core: removeChild](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1734834066)
- [DOM Level 3 Core: removeChild](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1734834066)

## Veja também

- {{domxref("Node.replaceChild")}}
- {{domxref("Node.parentNode")}}

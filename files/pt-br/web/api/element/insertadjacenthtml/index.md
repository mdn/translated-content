---
title: Element.insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
---

{{APIRef("DOM")}}

## Resumo

`insertAdjacentHTML` analisa o texto especificado como HTML ou XML e insere os nós que resultam na árvore DOM em uma posição especificada. Não reanalisa o elemento que está a ser utilizado e, portanto, não corrompe os elementos existentes dentro do elemento. Esta, e evitando a etapa extra de serialização, torna-o muito mais rápido do que a manipulação direta innerHTML.

## Sintaxe

```
element.insertAdjacentHTML(posição, texto);
```

**`Posição`** é a posição em relação ao elemento, e deve ser um dos seguintes tipos:

- `'beforebegin'`
  - : Antes do elemento.
- `'afterbegin'`
  - : Dentro do elemento, antes de seu primeiro filho (childNode).
- `'beforeend'`
  - : Dentro do elemento, após seu último filho (childNode) .
- `'afterend'`
  - : Após o elemento.

`texto` é a string a ser analisada como HTML ou XML e inserido na árvore.

### Visualização da posição de nomes

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> **Nota:** As posições beforeBegin e afterEnd funcionam apenas se o nó está em uma árvore DOM e tem um elemento pai.

## Exemplo

```js
// Estrutura inicial:
// <div id="one">one</div>

var d1 = document.getElementById("one");
d1.insertAdjacentHTML("afterend", '<div id="two">two</div>');

// Neste ponto, a nova estrutura é:
// <div id="one">one</div>
// <div id="two">two</div>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.appendChild()")}} (mesmo efeito de `beforeend`)
- [hacks.mozilla.org guest post](http://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) por Henri Sivonen incluem benchmarks que demonstram que insertAdjacentHTML pode ser bem rápido em alguns casos.

---
title: CustomElementRegistry.upgrade()
slug: Web/API/CustomElementRegistry/upgrade
---

{{APIRef("CustomElementRegistry")}}

O **`upgrade()`** é um método de {{domxref("CustomElementRegistry")}} a interface atualiza todos os shadow-containing custom elements em um {{domxref("Node")}} da
subárvore, mesmo antes de estarem conectados ao principal documento.

## Syntax

```js
customElements.upgrade(root);
```

### Parâmetros

- `root`
  - : Uma instância de {{domxref("Node")}} com shadow-containing os elementos descendentes que serão atualizados. Se não houver elementos descendentes que possam ser atualizados, nenhum erro será
    emitido.

### Valor de retorno

Void.

## Exemplos

Retirado de [HTML spec](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade):

```js
const el = document.createElement("spider-man");

class SpiderMan extends HTMLElement {}
customElements.define("spider-man", SpiderMan);

console.assert(!(el instanceof SpiderMan)); // Ainda não atualizado

customElements.upgrade(el);
console.assert(el instanceof SpiderMan); // Atualizado!
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

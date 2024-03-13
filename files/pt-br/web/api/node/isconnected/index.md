---
title: Node.isConnected
slug: Web/API/Node/isConnected
---

{{APIRef("DOM")}}

A propriedade somente-leitura **`isConnected`** da interface {{domxref("Node")}} retorna um boleano indicando se um nó está conectado (direta ou indiretamente) ao contexto do objeto, por exemplo o objeto {{domxref("Document")}} no caso da DOM normal, ou o {{domxref("ShadowRoot")}} no caso de uma shadow DOM.

## Sintaxe

```
var isItConnected = nodeObjectInstance.isConnected
```

### Retorno

Um {{domxref("Boolean")}} que é `true` se o nó está conectado ao contexto relevante do objeto, e `false` se não está.

## Examples

### Standard DOM

Um exemplo em um DOM padrão:

```js
let test = document.createElement("p");
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true
```

### Shadow DOM

Um exemplo em um Shadow DOM:

```js
// Cria um raíz Shadow
var shadow = this.attachShadow({ mode: "open" });

// Cria um CSS para aplicar a Shadow DOm
var style = document.createElement("style");
console.log(style.isConnected); // retorna false

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  positions: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3
}
`;

// Anexa a estilização criada a Shadow DOM.

shadow.appendChild(style);
console.log(style.isConnected); // retorna true
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

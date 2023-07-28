---
title: CustomElementRegistry.get()
slug: Web/API/CustomElementRegistry/get
---

{{APIRef("CustomElementRegistry")}}

O **`get()`** é um método de {{domxref("CustomElementRegistry")}} a interface retorna um construtor para um elemento personalizado previamente definido.

## Syntax

```js
constructor = customElements.get(name);
```

### Parâmetros

- name
  - : O nome do elemento personalizado cujo construtor você deseja retornar uma referência.

### Valor de retorno

O construtor do elemento personalizado nomeado, ou `undefined`se não há definição de elemento personalizado com esse nome.

## Examples

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      let templateContent = document.getElementById("my-paragraph").content;
      super() // returns element this scope
        .attachShadow({ mode: "open" }) // sets AND returns this.shadowRoot
        .append(templateContent.cloneNode(true));
    }
  },
);

// Retorne uma referência ao construtor my-paragraph
let ctor = customElements.get("my-paragraph");
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

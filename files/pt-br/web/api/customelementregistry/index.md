---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
---

{{DefaultAPISidebar("Web Components")}}

A interface **`CustomElementRegistry`** provê métodos para registro de elementos customizados e busca de elementos registrados. Para instancia-lo, use a propriedade {{domxref("window.customElements")}}.

## Métodos

- {{domxref("CustomElementRegistry.define()")}}
  - : Define um novo [elemento customizado](/pt-BR/docs/Web/Web_Components/Custom_Elements).
- {{domxref("CustomElementRegistry.get()")}}
  - : Retorna o construtor do nome do elemento informado, ou `undefined` caso não tenha sido definido.
- {{domxref("CustomElementRegistry.whenDefined()")}}
  - : Retorna um {{jsxref("Promise", "promise")}} vazio que é resolvido quando o elemento customizado é inserido. Se o elemento já foi definido, o retorno ja é informado.

## Exemplos

O código a seguir foi pego do nosso [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) exemplo ([veja em ação](https://mdn.github.io/web-components-examples/word-count-web-component/)). Perceba que usamos o método {{domxref("CustomElementRegistry.define()")}} para definir um elemento customizado.

```js
// Cria uma classe para o elemento
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Sempre execute primeiro o método super
    super();

    // Conta as palavras no elemento pai
    var wcParent = this.parentNode;

    function countWords(node) {
      var text = node.innerText || node.textContent;
      return text.split(/\s+/g).length;
    }

    var count = "Words: " + countWords(wcParent);

    // Cria um shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // Cria um nó de texto e adiciona o contador de palavra nele
    var text = document.createElement("span");
    text.textContent = count;

    // Acrescenta ao shadow root
    shadow.appendChild(text);

    // Atualiza o contador quando houver mudança
    setInterval(function () {
      var count = "Words: " + countWords(wcParent);
      text.textContent = count;
    }, 200);
  }
}

// Define um novo elemento
customElements.define("word-count", WordCount, { extends: "p" });
```

> **Nota:** Note: The CustomElementsRegistry is available through the {{domxref("Window.customElements")}} property.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

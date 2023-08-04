---
title: CustomElementRegistry.define()
slug: Web/API/CustomElementRegistry/define
---

{{APIRef("CustomElementRegistry")}}

O método **`define()`** da interface {{domxref("CustomElementRegistry")}} define um novo elemento personalizado.

Dois tipos de elementos personalizados podem ser criados:

- **Elementos personalizados autônomos**: Elementos autônomos; estes herdam de HTMLElement (Elemento HTML genérico).
- **Elementos personalizados pré-construídos**: Estes elementos herdam - e estendem - elementos HTML já existentes (p.ej HTMLParagraphElement que é um elemento HTML
  [`<p>`](/pt-BR/docs/Web/HTML/Element/p)).

## Sintaxe

```
customElements.define(name, constructor, options);
```

### Parâmetros

- name
  - : Nome do novo item personalizado. Observe que os nomes dos elementos personalizados devem conter um hífen.
- constructor
  - : Construtor para o novo elemento personalizado
- options {{optional_inline}}

  - : Um objeto que controla como o elemento é definido. Atualmente, apenas uma opção é permitida:

    - `extends`: String que especifica o nome do elemento pré-definido a partir do qual se estende. Usado para criar*elementos personalizados pré-construídos*.

### Valor de retorno

Void.

### Exceções

| Exceção             | Descrição                                                                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NotSupportedError` | El {{domxref("CustomElementRegistry")}} já contém uma entrada com o mesmo nome ou o mesmo construtor (ou já foi definido de alguma outra forma), ou foi especificado `extends` mas o elemento do qual você está tentando estender é desconhecido. |
| `SyntaxError`       | O nome fornecido não é um [nome de elemento personalizado válido](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name).                                                                                         |
| `TypeError`         | O constructor referenciado não é um constructor                                                                                                                                                                                                   |

> **Nota:** Exceções são frequentemente obtidas `NotSupportedError`s quando o método `define()` está falhando, mas é realmente um problema relacionado a
> {{domxref("Element.attachShadow()")}}.

## Exemplos

### Elemento personalizado autônomo

O código a seguir é retirado do nosso exemplo [popup-info-box-web-component](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) ([ver ao vivo](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)).

```js
// Crie uma classe para o elemento
class PopUpInfo extends HTMLElement {
  constructor() {
    // Sempre a primeira coisa a fazer é chamar super no construtor
    super();

    // crie um shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // Crie três elementos span
    var wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    var icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    var info = document.createElement("span");
    info.setAttribute("class", "info");

    // Pegue o conteúdo do atributo de texto e coloque-o no span info
    var text = this.getAttribute("text");
    info.textContent = text;

    // Pegue o conteúdo do atributo img (se existir) e coloque-o no ícone de span
    var imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    // A extensão não pode ter diretamente uma imagem, mas se contiver um elemento img
    var img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // Crie os estilos CSS e inclua-os no shadow DOM
    var style = document.createElement("style");

    style.textContent =
      ".wrapper {" +
      "position: relative;" +
      "}" +
      ".info {" +
      "font-size: 0.8rem;" +
      "width: 200px;" +
      "display: inline-block;" +
      "border: 1px solid black;" +
      "padding: 10px;" +
      "background: white;" +
      "border-radius: 10px;" +
      "opacity: 0;" +
      "transition: 0.6s all;" +
      "position: absolute;" +
      "bottom: 20px;" +
      "left: 10px;" +
      "z-index: 3;" +
      "}" +
      "img {" +
      "width: 1.2rem" +
      "}" +
      ".icon:hover + .info, .icon:focus + .info {" +
      "opacity: 1;" +
      "}";

    // anexar os elementos criados (extensões e estilo) ao shadow DOM
    // observe que o span wrapper contém o ícone e os spans de informações

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Defina um novo elemento
customElements.define("popup-info", PopUpInfo);
```

```html
<popup-info
  img="img/alt.png"
  text="O código de validação do seu cartão (CVC) é um recurso segurança extra - consiste em 3 ou 4 números no verso do seu cartão."></popup-info>
```

> **Nota:** Construtores de elementos personalizados autocontidos devem estender {{domxref("HTMLElement")}}.

### Elemento personalizado pré-construído

O código a seguir é retirado do nosso exemplo [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) ([ver ao vivo](https://mdn.github.io/web-components-examples/word-count-web-component/)).

```js
// Crie uma classe para o elemento
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Sempre a primeira coisa a fazer é chamar super no construtor
    super();

    // contar palavras do pai deste elemento
    var wcParent = this.parentNode;

    // A função countWords conta palavras (mesmo que sejam separadas por amis de um espaço)
    // que existe no nó passado como parâmetro.
    // innerText está definido para objetos HTMLElement, enquanto textContent para todos os objetos Node
    // o operador || nos faz pegar pelo menos um dos dois

    function countWords(node) {
      var text = node.innerText || node.textContent;
      return text.split(/\s+/g).length;
    }

    var count = "Words: " + countWords(wcParent);

    // crie um shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // Crie um nó span com o número de palavras
    var text = document.createElement("span");
    text.textContent = count;

    // Adicione ao shadow root
    shadow.appendChild(text);

    // Atualize o contador quando o conteúdo do elemento mudar
    setInterval(function () {
      var count = "Words: " + countWords(wcParent);
      text.textContent = count;
    }, 200);
  }
}

// Defina o novo elemento
customElements.define("word-count", WordCount, { extends: "p" });
```

```html
<p is="word-count"></p>
```

### Criando elemento que desativa a capacidade de utilizar attach no shadow root

Se a classe usada para o elemento contém a propriedade estática `disabledFeatures` retornando a string "shadow" isso fará com que {{domxref("Element.attachShadow()")}} retorne um
{{domxref("DOMException")}} `NotSupportedError`.

```js
class PopUpInfo extends HTMLElement {
  static get disabledFeatures() {
    return ["shadow"];
  }

  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    // isso fará com que um erro seja lançado quando o elemento for definido.
  }
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

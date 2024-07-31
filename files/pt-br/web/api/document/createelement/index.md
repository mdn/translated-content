---
title: "Document: createElement() method"
short-title: createElement()
slug: Web/API/Document/createElement
---

{{APIRef("DOM")}}

Em um documento [HTML](/pt-BR/docs/Web/HTML), o método **`document.createElement()`** cria o elemento HTML especificado por _tagName_, ou um {{domxref("HTMLUnknownElement")}} se _tagName_ não for conhecido.

## Sintaxe

```js-nolint
createElement(tagName)
createElement(tagName, options)
```

### Parâmetros

- `tagName`
  - : Uma string que especifica o tipo do elemento que será criado. O {{domxref("Node.nodeName", "nodeName")}} do elemento é criado com o valor de _tagName_. Não use nomes qualificados (como "html:a") com este método. Quando chamado em um documento HTML, `createElement()` converte _tagName_ para letras minúsculas antes de criar o elemento. No Firefox, Opera, e Chrome, `createElement(null)` funciona como `createElement("null")`.
- `options` {{optional_inline}}
  - : Um objeto com as seguintes propriedades:
    - `is`
      - : O nome da tag de um elemento customizado previamente definido via `customElements.define()`.
        Veja [Web component example](#web_component_example) para mais detalhes.

### Valor retornado

O novo {{domxref("Element")}}.

> [!NOTE]
> Um novo {{domxref("HTMLElement", "HTMLElement", "", "1")}} se o documento é um {{domxref("HTMLDocument", "HTMLDocument", "", "1")}}, que é na maioria dos casos. Caso contrário, um novo {{domxref("Element","Element","","1")}} é retornado.

## Exemplos

### Exemplo básico

Isto cria uma nova `<div>` e insere isso antes do elemento com a ID "`div1`".

#### HTML

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Trabalhando com elementos</title>
  </head>
  <body>
    <div id="div1">O texto acima foi criado dinamicamente.</div>
  </body>
</html>
```

#### JavaScript

```js
document.body.onload = addElement;

function addElement() {
  // cria um novo elemento div
  const newDiv = document.createElement("div");

  // e adiciona algum conteúdo ao elemento
  const newContent = document.createTextNode("Hi there and greetings!");

  // adiciona o "text node" para o div recém criado
  newDiv.appendChild(newContent);

  // adiciona o elemento recém criado e seu conteúdo dentro do DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

#### Resultado

{{EmbedLiveSample("Basic_example", 500, 80)}}

### Exemplo com Web Component

O código a seguir foi retirado do nosso exemplo [expanding-list-web-component](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component) ([ver também ao vivo](https://mdn.github.io/web-components-examples/expanding-list-web-component/)). Neste caso, nosso elemento customizado estende o {{domxref("HTMLUListElement")}}, que representa o elemento {{htmlelement("ul")}}.

```js
// Cria uma classe para o elemento
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Chama sempre o primeiro no construtor
    super();

    // a definição do construtor foi deixada de fora para resumir.
    // …
  }
}

// Definir o novo elemento
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Se nós queremos criar uma instância deste elemento programaticamente, nós iremos utilizar a chamada do seguinte modo:

```js
let expandingList = document.createElement("ul", { is: "expanding-list" });
```

O novo elemento receberá um atributo [`is`](/pt-BR/docs/Web/HTML/Global_attributes/is) cujo valor é o nome da tag do elemento customizado.

> [!NOTE]
> Para efeitos de compatibilidade com versões anteriores dos [Custom Elements](https://www.w3.org/TR/custom-elements/), alguns navegadores irão permitir você passar uma string aqui em vez de um objeto, onde o valor da string é o nome da tag do elemento customizado.

## Especificações

{{Specifications}}

## Compatibilidade dos navegadores

{{Compat}}

## Veja também

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("document.createElementNS()")}} — para especificar explicitamente o namespace URI para o elemento.

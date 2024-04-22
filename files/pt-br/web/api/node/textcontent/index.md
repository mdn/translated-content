---
title: Node.textContent
slug: Web/API/Node/textContent
---

{{APIRef("DOM")}}

A propriedade **`textContent`** da interface {{domxref("Node")}} representa o conteúdo de texto de um nó e dos seus descendentes.

> **Nota:** `textContent` e {{domxref("HTMLElement.innerText")}} são facilmente confundidos, mas [os dois possuem importantes diferenças entre sí.](#Differences_from_innerText)

## Sintaxe

```js
var text = Node.textContent;
Node.textContent = string;
```

### Valor de retorno

Uma `String` ou `null`

## Descrição

Ao obter valores desta propriedade:

- Se o nó for um [document](/pt-BR/docs/DOM/document), um [DOCTYPE](/pt-BR/docs/Glossary/Doctype), ou uma [notation](/pt-BR/docs/Web/API/Notation), o `textContent` retornará `null`. (Para se obter todo o texto e os [dados CDATA](/pt-BR/docs/Web/API/CDATASection) do documento inteiro, você poderá usar `document.documentElement.textContent`.)
- Se o nó for uma [seção CDATA](/pt-BR/docs/Web/API/CDATASection), comentário, [instrução de processamento](/pt-BR/docs/Web/API/ProcessingInstruction), ou um [text node](/pt-BR/docs/Web/API/Document/createTextNode), o `textContent` retornará o texto dentro do nó, i.e., o {{domxref("Node.nodeValue")}}.
- Para outros tipos de nó, o `textContent` retornará a concatenação `textContent` de cada nó filho, exceto comentários e instruções de processamento. Essa é uma string vazia se o nó não tiver filhos.

Definir valores `textContent` em um nó, remove todos os nós filhos e os substituem por um único nó de texto cujo o valor é a string inserida.

### Diferenças para o innerText

Não fique confuso pelas diferenças entre o `Node.textContent` e o {{domxref("HTMLElement.innerText")}}. Apesar dos nomes parecerem similares, eles possuem importantes diferenças:

- `textContent` obtém o conteúdo de todos os elementos, incluindo os elementos {{HTMLElement("script")}} e {{HTMLElement("style")}}. por outro lado, o `innerText` mostra apenas os elementos para "leitura humana".
- `textContent` retorna todos os elementos de um nó. Por outro lado, o `innerText` é ciente da estilização e não retorna elementos de texto "escondidos". Além disso, como o `innerText` leva em consideração os estilos CSS, a leitura do valor de `innerText` dispara um {{glossary("reflow")}} para assegurar a atualização dos estilos computados. (Reflows podem ser computacionalmente caros, e devem ser evitados quando for possível.)
- ao contrário do `textContent`, alterar o `innerText` no Internet Explorer (versão 11 e anteriores) remove os nós filhos do elemento e, _destroi permanentemente_ todos os nós de texto descendentes. Isso torna impossível inserir novamente os nós em qualquer outro elemento ou no mesmo elemento.

### Diferenças para o innerHTML

O {{domxref("Element.innerHTML")}} retorna HTML, Como seu próprio nome indica. As vezes as pessoas usam o `innerHTML` para obter ou escrever textos dentro de um elemento, mas o `textContent` possui melhor performance pois seus valores não são analisados como HTML. Além do mais, utilizar `textContent` pode prevenir [ataques XSS](/pt-BR/docs/Glossary/Cross-site_scripting).

## Exemplos

Dado o seguinte fragmento HTML:

```html
<div id="divA">Isto é<span>algum</span> texto!</div>
```

... Você pode usar `textContent` para obter o conteúdo de texto do elemento:

```js
let text = document.getElementById("divA").textContent;
// Agora a variável de texto é: 'Isto é algum texto!'
```

... Ou definir o conteúdo de texto do elemento:

```js
document.getElementById("divA").textContent = "Este texto é diferente!";
// O HTML de divA agora é:
// <div id="divA">Este texto é diferente!</div>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.innerHTML")}}
- [More on differences between `innerText` and `textContent`](http://perfectionkills.com/the-poor-misunderstood-innerText/) (blog post)

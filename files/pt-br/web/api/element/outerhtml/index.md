---
title: Element.outerHTML
slug: Web/API/Element/outerHTML
---

{{APIRef("DOM")}}

## Sumário

O atributo `outerHTML` da estrutura DOM(Document object model) obtem um fragmento serializado de código HTML descrevendo o elemento incluindo seus descendentes. É possível substituir o elemento em questão com nós obtidos através da análise de uma string.

## Sintaxe

_var conteudo_ = _elemento_.outerHTML;

Na atribuição, _conteudo_ armazena o fragmento de código HTML que descreve o elemento e seus descentes.

```
elemento.outerHTML = conteudo;
```

`Atribui a elemento` os nós obtidos pela análise da string `conteudo`, tendo nó pai de elemento como nó de contexto o para o algoritmo de análise do fragmento de código HTML.

## Exemplos

Obtendo o valor da propriedade outerHtml de um elemento :

```js
// HTML:
// <div id="d"><p>Conteúdo</p><p>Parágrafo</p></div>

d = document.getElementById("d");
dump(d.outerHTML);

// A string '<div id="d"><p>Conteúdo</p><p>Parágrafo</p></div>'
// é mostrada na janela do console.
```

Substituindo um nó atribuindo- lhe a propriedade outerHTML

```js
// HTML:
// <div id="container"><div id="d">Isto é uma div.</div></div>

container = document.getElementById("container");
d = document.getElementById("d");
console.log(container.firstChild.nodeName); // mostra "DIV"

d.outerHTML = "<p>Este parágrafo substitui a div original</p>";
console.log(container.firstChild.nodeName); // mostra "P"

// A div #d não faz mais parte da estrutura do documento,
// O novo parágrafo a substituiu.
```

## Notas

Se o elemento não tiver um nó pai, ou seja se o nó é a raiz do documento, tentar alterar sua propriedade outerHTML irá lançar um [`DOMException`](/pt-BR/DOM/DOMException) com o código de erro `NO_MODIFICATION_ALLOWED_ERR`. Por exemplo:

```js
document.documentElement.outerHTML = "test"; // Irá lançar uma DOMException
```

inclusive, quando o elemento for substituído na estrutura do documento, a variável a qual a propriedade `outerHTML` foi atribuída ainda irá conter uma referência para o elemento original.

```js
var p = document.getElementsByTagName("p")[0];
console.log(p.nodeName); // mostra: "P"
p.outerHTML = "<div>Esta div substituiu o parágrafo.</div>";
console.log(p.nodeName); // ainda contém "P";
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("HTMLElement.outerText")}}
- MSDN: [outerHTML Property](http://msdn.microsoft.com/en-us/library/ms534310%28v=vs.85%29.aspx)

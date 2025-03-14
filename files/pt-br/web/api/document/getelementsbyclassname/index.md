---
title: Document.getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
---

{{APIRef("DOM")}}

Retorna um vetor de objetos com todos os elementos filhos que possuem o nome da classe dada. Quando invocado no objeto _document_, o documento é examinado por completo, incluindo o nó raiz. Você também pode invocar {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}} em qualquer elemento; isso retornaria somente elementos que são descendentes do nó raiz especificado com o nome da classe.

## Sintaxe

```
var elementos = document.getElementsByClassName(nomes); // ou:
var elementos = rootElement.getElementsByClassName(nomes);
```

- _elementos_ é uma lista viva do {{ domxref("HTMLCollection") }} de elementos encontrados.
- _nomes_ é um texto que representa uma lista dos nomes das classes que são separados por espaço em branco.
- getElementsByClassName pode ser invocado por qualquer elemento, não somente pelo nó raiz _document._ O elemento no qual ele é chamado será usado como a raiz para a busca*.*

## Exemplos

Retorna todos os elementos que possuem a classe 'teste'

```js
document.getElementsByClassName("teste");
```

Retorna todos os elementos que possuem as classes 'vermelho' e 'teste'

```js
document.getElementsByClassName("vermelho teste");
```

Retorna todos os elementos que possuem a classe 'teste' dentro do elemento que possui o ID 'principal'

```js
document.getElementById("principal").getElementsByClassName("teste");
```

Nós podemos também usar os métodos do Array.prototype em qualquer dos elementos {{ domxref("HTMLCollection") }} passando o _HTMLCollection_ como valor deste método. Aqui podemos encontrar todos os elementos do tipo _div_ que possuem a classe 'teste':

```js
var elementosTeste = document.getElementsByClassName("teste");
var divsTeste = Array.prototype.filter.call(
  elementosTeste,
  function (elementoTeste) {
    return elementoTeste.nodeName === "DIV";
  },
);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Especificação

- [W3C: getElementsByClassName](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-getelementsbyclassname)

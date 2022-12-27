---
title: Node.childNodes
slug: Web/API/Node/childNodes
translation_of: Web/API/Node/childNodes
---
{{ApiRef("DOM")}}

A propriedade somente leitura **`Node.childNodes`** retorna uma _coleção viva_ de nós filhos de um dado elemento.

## Sintaxe

```
var listaNos = noReferencia.childNodes;
```

_listaNos é uma coleção ordenada de objetos node que são filhos do elemento corrente. Se o elemento não tem filhos, então listaNos não contém nenhum nó._

A listaNos é uma variável que armazena a lista de nós de childNodes. O tipo dessa lista é {{domxref("NodeList")}}.

## Exemplo

```js
// parg é uma referência de objeto a um elemento <p>

if (parg.hasChildNodes()) {
  // Primeiramente verificamos se o objeto não está vazio, se o objeto tem nós filhos
  var filhos= parg.childNodes;

  for (var i = 0; i < filhos.length; i++) {
    // fazer algo com cada filho em filhos[i]
    // NOTE: A lista é viva - adicionar ou remover filhos altera a lista
  }
}
```

---

```js
// Esta é uma forma para remover todos os filhos de um nó
// box é uma referência de objeto para um elemento com filhos

while (box.firstChild) {
    // A lista é VIVA, então ela re-indexará a cada chamada
    box.removeChild(box.firstChild);
}
```

## Notas

Os itens na coleção de nós são objetos, não strings. Para recuperar dados dos objetos dos nós, você deve usar suas propriedades (e.g., `noReferencia.childNodes[1].nodeName` para recuperar o nome, etc.).

O objeto `document` tem 2 filhos: a declaração Doctype declaration e o elemento raiz, tipicamente referido como `documentElement`. (Em documentos (X)HTML este é o elemento `HTML`)

## Especificação

- [W3C DOM 2 Core: childNodes](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1451460987)
- [W3C DOM 3 Core: childNodes](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-1451460987)
- [W3C DOM 3 NodeList interface](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-536297177)

## Veja também

- {{ domxref("Node.firstChild") }}
- {{ domxref("Node.lastChild") }}
- {{ domxref("Node.nextSibling") }}
- {{ domxref("Node.previousSibling") }}
- {{ domxref("ParentNode.children") }}

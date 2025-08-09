---
title: Node.previousSibling
slug: Web/API/Node/previousSibling
---

{{ApiRef("DOM")}}

## Resumo

Retorna o nó que precede o nó especificado na lista de [childNodes](/pt-BR/docs/Web/API/Node/childNodes) do nó pai, retorna null se o nó especificado é o primeiro desta lista.

## Sintaxe

```
previousNode = node.previousSibling;
```

## Exemplo

```js
// <a><b1 id="b1"/><b2 id="b2"/></a>

alert(document.getElementById("b1").previousSibling); // null
alert(document.getElementById("b2").previousSibling.id); // "b1"
```

## Notas

Navegador baseados na engine Gecko inserem nós de texto no documento para representar espaços em branco na marcação do fonte.
Portanto um nó obtido, por exemplo, usando [`Node.firstChild`](/pt-BR/docs/Web/API/Node/firstChild) ou [`Node.previousSibling`](/pt-BR/docs/Web/API/Node/previousSibling) pode fazer referência a um
espaço em banco ao invés do elemento que o autor pretendia obter.

Veja [Whitespace in the DOM](/pt-BR/docs/Web/API/Document_Object_Model/Whitespace) e
[W3C DOM 3 FAQ: Why are some Text nodes empty?](https://www.w3.org/DOM/faq.html#emptytext)
Para mais informações.

Para navegar no sentido contrário da lista de nós filhos use [Node.nextSibling](/pt-BR/docs/Web/API/Node/nextSibling).

## Especificação

- [DOM Level 1 Core: previousSibling](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling)
- [DOM Level 2 Core: previousSibling](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8)
- [DOM Level 3 Core: previousSibling](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-640FB3C8)

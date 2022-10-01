---
title: ParentNode.childElementCount
slug: Web/API/Element/childElementCount
tags:
  - Child
  - DOM
  - JavaScript
  - ParentNode
translation_of: Web/API/ParentNode/childElementCount
original_slug: Web/API/ParentNode/childElementCount
---
{{ APIRef("DOM") }}

A propriedade **`ParentNode.childElementCount`**, do tipo "somente leitura" (read-only), tem como retorno um `unsigned long` que representa q quantidade de elementos filhos de um outro determinado elemento.

> **Nota:** Essa propriedade foi inicialmente definida na interface pura {{domxref("ElementTraversal")}}. Como essa interface continha dois conjuntos distintos de propriedades, sendo uma destinada para {{domxref("Node")}} que tem filhos, e outra destinada para aqueles que são filhos de fato, essas propriedades foram movidas para duas interfaces puras distintas: {{domxref("ParentNode")}} e {{domxref("ChildNode")}}. Nesse caso, `childElementCount` foi movido para {{domxref("ParentNode")}}. Essa é uma alteração bastante técnica que não deve afetar a compatibilidade.

## Sintaxe

```
var count = node.childElementCount;
```

- `count`
  - : variável que recebe o valor retornado pelo método, sendo esse valor do tipo `unsigned long` (simplesmente um número inteiro).
- `node`
  - : Objeto que representa {{domxref("Document")}}, {{domxref("DocumentFragment")}}, ou {{domxref("Element")}}.

## Exemplo

```js
var foo = document.getElementById('foo');
if (foo.childElementCount > 0) {
  // Faz algo
}
```

## Utilizando Polyfill no IE8, IE9 e Safari

Essa propriedade não é suportada em versões anteriores ao IE9. Já no IE9 ou Safari, não será suportada somente por Objetos de `Document` e `DocumentFragment`.

```js
;(function(constructor) {
  if (constructor &&
      constructor.prototype &&
      constructor.prototype.childElementCount == null) {
    Object.defineProperty(constructor.prototype, 'childElementCount', {
      get: function() {
        var i = 0, count = 0, node, nodes = this.childNodes;
        while (node = nodes[i++]) {
          if (node.nodeType === 1) count++;
        }
        return count;
      }
    });
  }
})(window.Node || window.Element);
```

## Especificações

| Especificações                                                                                                                           | Status                                   | Comentários                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-parentnode-childelementcount', 'ParentNode.childElementCount')}}         | {{Spec2('DOM WHATWG')}}         | Divide a interface `ElementTraversal` entre {{domxref("ChildNode")}} e `ParentNode`. Esse método é definido ao final. {{domxref("Document")}} e {{domxref("DocumentFragment")}} implementam essas novas interfaces. |
| {{SpecName('Element Traversal', '#attribute-childElementCount', 'ElementTraversal.childElementCount')}} | {{Spec2('Element Traversal')}} | Adicionada sua definição inicial à interface pura do `ElementTraversal` e use-a em {{domxref("Element")}}.                                                                                                                              |

## Compatibilidade com navegadores

{{Compat("api.ParentNode.childElementCount")}}

## Veja também

- {{domxref("ParentNode")}} e {{domxref("ChildNode")}}.
- Diferentes tipos de Objetos implementando as interfaces puras: {{domxref("Document")}}, {{domxref("Element")}}, e {{domxref("DocumentFragment")}}.

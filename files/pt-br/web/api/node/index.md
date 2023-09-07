---
title: Node
slug: Web/API/Node
---

{{Apiref("DOM")}}

**`Node`** é uma interface da qual diversos tipos do DOM herdam, e que permite que esses tipos sejam tratados de forma similar, por exemplo, herdando os mesmos métodos ou sendo testados da mesma forma.

Todos os tipos a seguir herdam essa interface e seus métodos e propriedades (apesar de que alguns podem devolver `null` em casos particulares em que o método ou a propriedade não são relevantes; ou lançar uma exceção quando adicionando um filho a um tipo de nó que não pode ter filhos): {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("Attr")}}, {{domxref("CharacterData")}} (do qual {{domxref("Text")}}, {{domxref("Comment")}}, e {{domxref("CDATASection")}} herdam), {{domxref("ProcessingInstruction")}}, {{domxref("DocumentFragment")}}, {{domxref("DocumentType")}}, {{domxref("Notation")}}, {{domxref("Entity")}}, {{domxref("EntityReference")}}

{{InheritanceDiagram}}

## Propriedades

_Herda propriedades de seus pais, {{domxref("EventTarget")}}_.\[1]

- {{domxref("Node.baseURI")}} {{readonlyInline}}
  - : Retorna uma {{domxref("DOMString")}} representando o URL base do nó. O conceito de URL base muda de uma linguagem para outra; no HTML, ela corresponde ao protocolo, ao nome de domínio e a estrutura de diretório; tudo isso até a última `'/'`.
- {{domxref("Node.baseURIObject")}} {{Non-standard_inline()}}
  - : Retorna um objeto `nsIURI`, representando o URL base do nó. _(Indisponível para conteúdo Web)_
- {{domxref("Node.childNodes")}} {{readonlyInline}}
  - : Retorna um objeto {{domxref("NodeList")}} "vivo" contendo todos os filhos deste nó. Dizer que um objeto {{domxref("NodeList")}} é vivo significa que se houver alguma mudança em um dos filhos deste nó, o objeto {{domxref("NodeList")}} é automaticamente atualizado com tais mudanças.
- {{domxref("Node.firstChild")}} {{readonlyInline}}
  - : Retorna um {{domxref("Node")}} representando o primeiro filho direto do nó ou `null`, caso o nó não tenha nenhum filho.
- {{domxref("Node.lastChild")}} {{readonlyInline}}
  - : Retorna um {{domxref("Node")}} representando o último filho direto do elemento ou `null`, caso o elemento não tenha nenhum filho.
- {{domxref("Node.nextSibling")}} {{readonlyInline}}
  - : Retorna um {{domxref("Node")}} representando o próximo elemento na árvore ou `null`, caso tal nó não exista.
- {{domxref("Node.nodeName")}} {{readonlyInline}}
  - : Retorna uma {{domxref("DOMString")}} contendo o nome do elemento, do `Node`. A estrutura do nome irá mudar conforme o tipo do elemento. Veja as diferenças na documentação do método {{domxref("Node.nodeName")}}.
- {{domxref("Node.nodePrincipal")}} {{Non-standard_inline()}}
  - : Uma interface `nsIPrincipal` representando o nó principal.
- {{domxref("Node.nodeType")}}{{readonlyInline}}
  - : Retorna um `unsigned short` representando o tipo do nodo. Valores possíveis são:

| Nome                          | Valor |
| ----------------------------- | ----- |
| `ELEMENT_NODE`                | 1     |
| `ATTRIBUTE_NODE`              | 2     |
| `TEXT_NODE`                   | 3     |
| `CDATA_SECTION_NODE`          | 4     |
| `ENTITY_REFERENCE_NODE`       | 5     |
| `ENTITY_NODE`                 | 6     |
| `PROCESSING_INSTRUCTION_NODE` | 7     |
| `COMMENT_NODE`                | 8     |
| `DOCUMENT_NODE`               | 9     |
| `DOCUMENT_TYPE_NODE`          | 10    |
| `DOCUMENT_FRAGMENT_NODE`      | 11    |
| `NOTATION_NODE`               | 12    |

- {{domxref("Node.nodeValue")}}
  - : Retorna / Define o valor do nó atual
- {{domxref("Node.ownerDocument")}} {{readonlyInline}}
  - : Retorna o {{domxref("Document")}} qual esse nó pertence. Se o nó em si é um documento, retorna `null`.
- {{domxref("Node.parentNode")}} {{readonlyInline}}
  - : Retorna um {{domxref("Node")}} que é pai desse nó. Se não existe tal nó, como, por exemplo, se esse nó é o topo da árvore ou se ele não participa de uma árvore, essa propriedade retorna `null`.
- {{domxref("Node.previousSibling")}} {{readonlyInline}}
  - : Retorna um {{domxref("Node")}} representando o último nó em uma árvore ou `null` se não existe tal nodo.
- {{domxref("Node.textContent")}}
  - : Retorna / Define o conteúdo textual de um elemento e de todos os seus descendentes.

### Propriedades descontinuadas

- {{domxref("Node.rootNode")}} {{readOnlyInline}} {{deprecated_inline}}
  - : Retorna um objeto {{domxref("Node")}} representando o nó mais alto em uma árvore, ou o nó atual, se ele for o mais alto da árvore. Isso foi substituído por {{domxref("Node.getRootNode()")}}.

### Propriedades obsoletas

- {{domxref("Node.localName")}}{{readonlyInline}}

  - : Retorna um {{domxref("DOMString")}} representando a parte local do nome qualificado de um elemento.

    > **Nota:** No Firefox 3.5 e nas versões anteriores, a propriedade coloca em caixa alta o nome local de elementos HTML (mas não elementos XHTML). Em versões posteriores, isso não acontece, então a propriedade está em caixa baixa para ambos HTML e XHTML.

- {{domxref("Node.namespaceURI")}}{{readonlyInline}}

  - : O espaço de nomes URI desse nó, ou `null` se não estiver no espaço de nomes.

    > **Nota:** No Firefox 3.5 e nas versões anteriores, elementos HTML estão no espaço de nomes. Em versões posteriores, elementos HTML estão em [`https://www.w3.org/1999/xhtml/`](https://www.w3.org/1999/xhtml/), nas árvores HTML e XML.

- {{domxref("Node.prefix")}}{{readonlyInline}}
  - : É um {{domxref("DOMString")}} representando o espaço de nomes do nó, ou `null` se nenhum prefixo é especificado.

## Métodos

- {{domxref("Node.appendChild")}}
- {{domxref("Node.cloneNode")}}
- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.contains")}}
- {{domxref("Node.getFeature")}}
- {{domxref("Node.getUserData")}}
- {{domxref("Node.hasAttributes")}}
- {{domxref("Node.hasChildNodes")}}
- {{domxref("Node.insertBefore")}}
- {{domxref("Node.isDefaultNamespace")}}
- {{domxref("Node.isEqualNode")}}
- {{domxref("Node.isSameNode")}} {{deprecated_inline}}
- {{domxref("Node.isSupported")}}
- {{domxref("Node.lookupPrefix")}}
- {{domxref("Node.lookupNamespaceURI")}}
- {{domxref("Node.normalize")}}
- {{domxref("Node.removeChild")}}
- {{domxref("Node.replaceChild")}}
- {{domxref("Node.setUserData")}}

## Constantes

Veja também {{domxref("Node.nodeType")}}

| Nome                                        | Valor |
| ------------------------------------------- | ----- |
| `ELEMENT_NODE`                              | 1     |
| `ATTRIBUTE_NODE`                            | 2     |
| `TEXT_NODE`                                 | 3     |
| `DATA_SECTION_NODE`                         | 4     |
| `ENTITY_REFERENCE_NODE`                     | 5     |
| `ENTITY_NODE`                               | 6     |
| `PROCESSING_INSTRUCTION_NODE`               | 7     |
| `COMMENT_NODE`                              | 8     |
| `DOCUMENT_NODE`                             | 9     |
| `DOCUMENT_TYPE_NODE`                        | 10    |
| `DOCUMENT_FRAGMENT_NODE`                    | 11    |
| `NOTATION_NODE`                             | 12    |
| `DOCUMENT_POSITION_DISCONNECTED`            | 0x01  |
| `DOCUMENT_POSITION_PRECEDING`               | 0x02  |
| `DOCUMENT_POSITION_FOLLOWING`               | 0x04  |
| `DOCUMENT_POSITION_CONTAINS`                | 0x08  |
| `DOCUMENT_POSITION_CONTAINED_BY`            | 0x10  |
| `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` | 0x20  |

## Exemplos de código

### Recuperar todos os nós filhos

A função a seguir percorre todos os nós filhos de um nó recursivamente e executa uma função de callback em cada um deles (e no nó pai também).

```js
function DOMComb(oParent, oCallback) {
  if (oParent.hasChildNodes()) {
    for (var oNode = oParent.firstChild; oNode; oNode = oNode.nextSibling) {
      DOMComb(oNode, oCallback);
    }
  }
  oCallback.call(oParent);
}
```

#### Sintaxe

```
DOMComb(parentNode, callbackFunction);
```

#### Descrição

Percorre todos os nós filhos de `parentNode` recursivamente e o próprio `parentNode` e executa a `callbackFunction` em cada um deles como [`this`](/pt-BR/docs/JavaScript/Reference/Operators/this).

#### Parâmetros

- `parentNode`
  - : O nó pai ([`Object`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object)`do tipo Node`).
- `callbackFunction`
  - : A função de callback ([`Function`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Function)).

#### Exemplo de uso

O exemplo a seguir envia para a função `console.log` o conteúdo textual do body:

```js
function imprimeConteudo() {
  if (this.nodeValue) {
    console.log(this.nodeValue);
  }
}

onload = function () {
  DOMComb(document.body, imprimeConteudo);
};
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

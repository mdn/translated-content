---
title: Element
slug: Web/API/Element
---

{{ APIRef("DOM") }}

A interface **`Element`** é a classe base mais geral da qual todos os objetos em um {{domxref("Document")}} herda. Ela somente tem métodos e propriedades comuns para todos os tipos de elementos. Mais classes específicas herdam de `Element`. Por exemplo, a interface {{domxref("HTMLElement")}} é a interface base para elementos HTML, enquanto a interface {{domxref("SVGElement")}} é a base para todos os elementos SVG. A maioria das funcionalidades é especificada mais abaixo da hierarquia de classes.

Linguagens fora do domínio da plataforma da Web, como XUL através da interface `XULElement`, também implementa `Element`.

## Propriedades

_Herda propriedades de seus parentes {{domxref("Node")}}, e seu próprio parente, {{domxref("EventTarget")}}, e implementa aqueles de {{domxref("ParentNode")}}, {{domxref("ChildNode")}}, {{domxref("NonDocumentTypeChildNode")}}, e_ {{domxref("Animatable")}}.

- {{ domxref("Element.attributes") }} {{readOnlyInline}}
  - : Retorna um {{ domxref("NamedNodeMap") }} que lista todos os atributos associados ao elemento.
- {{ domxref("ParentNode.childElementCount") }}
  - : É um {{jsxref("Number")}} representando o número de nós filhos que são elementos.
- {{ domxref("ParentNode.children") }}
  - : É um {{ domxref("HTMLCollection") }} ao vivo contendo todos os elementos filhos do elemento, como uma coleção.
- {{ domxref("Element.classList") }} {{readOnlyInline}}
  - : Retorna um {{ domxref("DOMTokenList") }} contendo a lista de atributos de classe.
- {{ domxref("Element.className") }}
  - : É um {{domxref("DOMString")}} representando a classe do elemento.
- {{ domxref("Element.clientHeight") }} {{experimental_inline}} {{readOnlyInline}}
  - : Retorna um {{jsxref("Number")}} representando a altura interna do elemento.
- {{ domxref("Element.clientLeft") }} {{experimental_inline}} {{readOnlyInline}}
  - : Retorna um {{jsxref("Number")}} representando a largura da borda do elemento..
- {{ domxref("Element.clientTop") }} {{experimental_inline}} {{readOnlyInline}}
  - : Retorna um {{jsxref("Number")}} representando a largura da borda do topo do elemento.
- {{ domxref("Element.clientWidth") }} {{experimental_inline}} {{readOnlyInline}}
  - : Retorna um {{jsxref("Number")}} representando a largura interna do elemento.
- {{ domxref("ParentNode.firstElementChild") }}
  - : É um {{ domxref("Element") }}, o primeiro elemento filho direto de um elemento, ou `null` se o elemento não tem elementos filho.
- {{ domxref("Element.id") }}
  - : É um {{domxref("DOMString")}} representando o id do elemento.
- {{ domxref("Element.innerHTML") }} {{experimental_inline}}
  - : É um {{domxref("DOMString")}} representando a marcação do conteúdo do elemento.
- {{ domxref("ParentNode.lastElementChild") }}
  - : É um {{ domxref("Element") }}, o último elemento filho direto de um elemento, ou `null` se o elemento não tem elementos filho.
- {{ domxref("NonDocumentTypeChildNode.nextElementSibling") }}
  - : É um {{ domxref("Element") }}, o elemento seguido imediatamente do dito na árvore, ou `null` se não há nó irmão.
- {{ domxref("Element.outerHTML") }} {{experimental_inline}}
  - : É um {{domxref("DOMString")}} representando a marcação do elemento incluindo seu conteúdo. Quando usado como um [setter](/pt-BR/docs/Web/JavaScript/Reference/Functions/set), substitui o elemento com nós analisados a partir de uma determinada [string](/pt-BR/docs/Glossario/String).
- {{ domxref("NonDocumentTypeChildNode.previousElementSibling") }}
  - : É um {{ domxref("Element") }}, o elemento precedido imediatamente do dito na árvore, ou `nulo` se não há elemento irmão.
- {{ domxref("Element.scrollHeight") }} {{experimental_inline}} {{readOnlyInline}}
  - : Retorna um {{jsxref("Number")}} representando a altura da vista de rolagem de um elemento.
- {{ domxref("Element.scrollLeft") }} {{experimental_inline}}
  - : É um {{jsxref("Number")}} representando o deslocamento de rolagem esquerdo do elemento.
- {{ domxref("Element.scrollLeftMax") }} {{non-standard_inline}} {{readOnlyInline}}
  - : Retorna um {{jsxref("Number")}} representando o deslocamento de rolagem esquerdo máximo possível para o elemento.
- {{ domxref("Element.scrollTop") }} {{experimental_inline}}
  - : É um {{jsxref("Number")}} representando o deslocamento de rolagem superior de um elemento.
- {{ domxref("Element.scrollTopMax") }} {{non-standard_inline}} {{readOnlyInline}}
  - : Retorna um {{jsxref("Number")}} representando o deslocamento de rolagem máximo superior possível para o elemento.
- {{ domxref("Element.scrollWidth") }} {{experimental_inline}} {{readOnlyInline}}
  - : Retorna um {{jsxref("Number")}} representando a largura de exibição de rolagem do elemento.
- {{domxref("Element.shadowRoot") }} {{experimental_inline}} {{readOnlyInline}}
  - : ...
- {{ domxref("Element.tagName") }} {{readOnlyInline}}
  - : Retorna um {{domxref("String")}} com o nome da tag para o elemento em questão.
- {{ domxref("Element.undoManager")}} {{experimental_inline}} {{readOnlyInline}}
  - : Retorna o {{domxref("UndoManager")}} associado com o elemento.
- {{ domxref("Element.undoScope")}} {{experimental_inline}}
  - : É a {{jsxref("Boolean")}} indicando se o elemento é um anular hospedagem de escopo, ou não.

### Manipuladores de Eventos

- {{ domxref("Element.ongotpointercapture") }}
  - : …
- {{ domxref("Element.onlostpointercapture") }}
  - : …
- {{ domxref("Element.onwheel") }} {{ non-standard_inline() }}
  - : Retorna o código de manipulação de evento para o evento `wheel`.

## Métodos

_Herda métodos de seus parentes {{domxref("Node")}}, e seu proprío parente, {{domxref("EventTarget")}}, e implementa aqueles de {{domxref("ParentNode")}}, {{domxref("ChildNode")}}, {{domxref("NonDocumentTypeChildNode")}}, e {{domxref("Animatable")}}._

- {{ domxref("EventTarget.addEventListener()") }}
  - : Registra um manipulador de evento para um tipo específico de evento no elemento.
- {{ domxref("Element.closest()")}} {{experimental_inline}}
  - : Retorna o {{domxref("Element")}}, descendente deste elemento(ou este elemento em si), que é o ancestral mais próximo dos elementos selecionados pelos seletores dados no parâmetro.
- {{ domxref("Element.createShadowRoot()")}} {{experimental_inline}}
  - : …
- {{ domxref("EventTarget.dispatchEvent()") }}
  - : Despacha um evento para este nó no DOM e retorna um {{jsxref("Boolean")}} que indica que pelo menos um manipulador não o cancelou.
- {{domxref("Element.find()")}}{{experimental_inline}}
  - : ...
- {{domxref("Element.findAll()")}}{{experimental_inline}}
  - : ...
- {{domxref("Animatable.getAnimationPlayers()")}} {{experimental_inline}}
  - : …
- {{ domxref("Element.getAttribute()") }}
  - : Recupera o valor do atributo nomeado do nó atual e o retorna como um {{jsxref("Object")}}.
- {{ domxref("Element.getAttributeNS()") }}
  - : Recupera o valor do atributo com o nome especificado e [namespace](/pt-BR/docs/Mozilla/Tech/XUL/Namespaces), do nó atual e o retorna como um {{jsxref("Object")}}.
- {{ domxref("Element.getAttributeNode()") }}
  - : Recupera a representação do nó de um atributo nomeado do nó atual e o retorna como um {{ domxref("Attr") }}.
- {{ domxref("Element.getAttributeNodeNS()") }}
  - : Recupera a representação de nó do atributo com o nome especificado e [namespace](/pt-BR/docs/Mozilla/Tech/XUL/Namespaces), do nó atual e o retorna como um {{ domxref("Attr") }}.
- {{ domxref("Element.getBoundingClientRect()") }} {{experimental_inline}}
  - : ...
- {{ domxref("Element.getClientRects()") }} {{experimental_inline}} TYPE of returnvalue????
  - : Retorna uma coleção de retângulos que indicam os retângulos delimitadores para cada linha de texto em um cliente.
- {{domxref("Element.getDestinationInsertionPoints()")}} {{experimental_inline}}
  - : …
- {{ domxref("Element.getElementsByClassName()") }}
  - : Retorna um {{ domxref("HTMLCollection") }} vivo que contêm todos os descendentes do elemento atual que possui a lista de classes dadas no parâmetro.
- {{ domxref("Element.getElementsByTagName()") }}
  - : Retorna um {{ domxref("HTMLCollection") }} vivo contendo todos os elementos descendentes, de uma etiqueta de nome particular, do elemento atual.
- {{ domxref("Element.getElementsByTagNameNS()") }}
  - : Retorna um {{ domxref("HTMLCollection") }} vivo contendo todos os elementos descendentes, de uma etiqueta de nome particular e [namespace](/pt-BR/docs/Mozilla/Tech/XUL/Namespaces), do elemento atual.
- {{ domxref("Element.hasAttribute()") }}
  - : Retorna um {{jsxref("Boolean")}} indicando se o elemento tem o atributo especificado ou não.
- {{ domxref("Element.hasAttributeNS()") }}
  - : Retorna um {{jsxref("Boolean")}} indicando se o elemento tem um atributo especificado, no [namespace](/pt-BR/docs/Mozilla/Tech/XUL/Namespaces) especificado, ou não.
- {{ domxref("Element.insertAdjacentHTML") }} {{experimental_inline}}
  - : Analisa o texto como HTML ou XML e insere os nós resultantes na árvore em dada posição.
- {{ domxref("Element.matches()") }} {{experimental_inline}}
  - : Retorna um {{jsxref("Boolean")}} indicando se o elemento seria ou não selecionado pelo seletor de string specificada.
- {{ domxref("Element.querySelector()") }}
  - : Retorna {{ domxref("Node") }}...
- {{ domxref("Element.querySelectorAll") }}
  - : Retorna um {{ domxref("NodeList") }}...
- {{ domxref("Element.releasePointerCapture")}} {{experimental_inline}}
  - : …
- {{domxref("ChildNode.remove()")}}
  - : Remove o elemento da lista de filhos de seu parente.
- {{ domxref("Element.removeAttribute()") }}
  - : Remove um atributo nomeado do nó atual.
- {{ domxref("Element.removeAttributeNS()") }}
  - : Remove o atributo com o nome especificado ou [namespace](/pt-BR/docs/Mozilla/Tech/XUL/Namespaces), do nó atual.
- {{ domxref("Element.removeAttributeNode()") }}
  - : Remove a representação do nó do atributo nomeado do nó atual.
- {{ domxref("EventTarget.removeEventListener()") }}
  - : Remove um ouvinte de eventos do elemento.
- {{ domxref("Element.requestFullscreen()") }} {{experimental_inline}}
  - : Assíncronamente pede o navegador para fazer o elemento tela cheia.
- {{ domxref("Element.requestPointerLock()")}} {{experimental_inline}}
  - : Permite assíncronamente pedir pelo apontador para ser bloqueado em um dado elemento.
- {{ domxref("Element.scrollIntoView()") }} {{experimental_inline}}
  - : Rola a página até que o elemento apareça na visão.
- {{ domxref("Element.setAttribute()") }}
  - : Define o valor de um atributo nomeado do nó atual.
- {{ domxref("Element.setAttributeNS()") }}
  - : Define o valor do atributo com o nome especificado e [namespace](/pt-BR/docs/Mozilla/Tech/XUL/Namespaces), do nó atual.
- {{ domxref("Element.setAttributeNode()") }}
  - : Define a representação do nó de um atributo nomeado do nó atual.
- {{ domxref("Element.setAttributeNodeNS()") }}
  - : Define a representação do nó do atributo com o nome especificado e [namespace](/pt-BR/docs/Mozilla/Tech/XUL/Namespaces), do nó atual.
- {{ domxref("Element.setCapture()") }} {{non-standard_inline}}
  - : Define a captura de evento do mouse, redirecionando todos os eventos de mouse para este elemento.
- {{domxref("Element.setPointerCapture()")}}
  - : …

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

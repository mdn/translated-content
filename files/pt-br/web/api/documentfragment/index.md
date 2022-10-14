---
title: DocumentFragment
slug: Web/API/DocumentFragment
translation_of: Web/API/DocumentFragment
---
{{ ApiRef("DOM") }}

A interface do **DocumentFragment** representa um objeto de documento mínimo que não possui pai. Ela é utilizada como uma versão leve de {{domxref("Document")}} para armazenar fragmentos bem formados ou fragments potencialmente mal formados de XML.

Vários outros métodos podem usar um document fragment como argumento (ex. qualquer interface de {{domxref("Node")}} como {{domxref("Node.appendChild")}} e {{domxref("Node.insertBefore")}}) em casos em que os filhos do fragment são acrescentados ou inseridos, e não o próprio fragment.

Essa interface também é excelente para ser usada com Web components: elementos {{HTMLElement("template")}} contém um `DocumentFragment` na propriedade {{domxref("HTMLTemplateElement.content")}} deles.

Um DocumentFragment pode ser criado usando o método {{domxref("document.createDocumentFragment")}} ou o construtor.

## Propriedades

_Essa interface não tem uma propriedade específica, mas herda de seu pai,_ _{{domxref("Node")}}, e implementa aquelas da interface {{domxref("ParentNode")}}._

- {{ domxref("ParentNode.children") }} {{readonlyInline}}{{experimental_inline}}
  - : Returns a live {{domxref("HTMLCollection")}} containing all objects of type {{domxref("Node")}} that are children of the `DocumentFragment` object.
- {{ domxref("ParentNode.firstElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Returns the {{domxref("Element")}} that is the first child of the `DocumentFragment` object, or `null` if there is none.
- {{ domxref("ParentNode.lastElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Returns the {{domxref("Element")}} that is the last child of the `DocumentFragment` object, or `null` if there is none.
- {{ domxref("ParentNode.childElementCount") }} {{readonlyInline}}{{experimental_inline}}
  - : Returns an `unsigned long` giving the amount of children that the `DocumentFragment` has.

## Construtor

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }} {{experimental_inline}}
  - : Retorna um objeto DocumentFragment vazio.

## Métodos

_This interface inherits the methods of its parent, {{domxref("Node")}}_, and implements those of the {{domxref("ParentNode")}} interface.

- {{domxref("DocumentFragment.find()")}} {{experimental_inline}}
  - : Returns the first matching {{domxref("Element")}} in the tree of the `DocumentFragment`.
- {{domxref("DocumentFragment.findAll()")}} {{experimental_inline}}
  - : Returns a {{domxref("NodeList")}} of matching {{domxref("Element")}} in the tree of the `DocumentFragment`.
- {{domxref("DocumentFragment.querySelector()")}}
  - : Returns the first {{domxref("Element")}} node within the `DocumentFragment`, in document order, that matches the specified selectors.
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : Returns a {{domxref("NodeList")}} of all the {{domxref("Element")}} nodes within the `DocumentFragment` that match the specified selectors.
- {{domxref("DocumentFragment.getElementById()")}}
  - : Returns the first {{domxref("Element")}} node within the `DocumentFragment`, in document order, that matches the specified ID.

## Especificações

| Specification                                                                                        | Status                                       | Comment                                                                           |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#documentfragment', 'DocumentFragment')}}             | {{Spec2('DOM WHATWG')}}             | Added the constructor and the implementation of {{domxref("ParentNode")}}. |
| {{SpecName('Selectors API Level 2', '#the-apis', 'DocumentFragment')}}         | {{Spec2('Selectors API Level 2')}} | Added the `find()` and `findAll()` methods.                                       |
| {{SpecName('Selectors API Level 1', '#the-apis', 'DocumentFragment')}}         | {{Spec2('Selectors API Level 1')}} | Added the `querySelector()` and `querySelectorAll()` methods.                     |
| {{SpecName('DOM3 Core', 'core.html#ID-B63ED1A3', 'DocumentFragment')}}         | {{Spec2('DOM3 Core')}}                 | No change from {{SpecName('DOM2 Core')}}                                   |
| {{SpecName('DOM2 Core', 'core.html#ID-B63ED1A3', 'DocumentFragment')}}         | {{Spec2('DOM2 Core')}}                 | No change from {{SpecName('DOM1')}}                                       |
| {{SpecName('DOM1', 'level-one-core.html#ID-B63ED1A3', 'DocumentFragment')}} | {{Spec2('DOM1')}}                     | Initial definition                                                                |

## Compatibilidade com navegadores

{{Compat("api.DocumentFragment")}}

## Veja também

- [The DOM interfaces index.](/pt-BR/docs/DOM/DOM_Reference)

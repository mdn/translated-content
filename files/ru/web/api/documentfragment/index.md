---
title: DocumentFragment
slug: Web/API/DocumentFragment
---

{{ APIRef("DOM") }}

Интерфейс DocumentFragment представляет собой минимальный объект документа, который не имеет родителя. Он используется как лёгкая версия {{domxref ("Document")}}, чтобы хранить хорошо сформированные или потенциально не хорошо формированные фрагменты XML.

Различные другие методы могут взять document fragment в качестве аргумента (например, любые методы интерфейса Node, такие как Node.appendChild и Node.insertBefore), в этом случае прикрепляются или вставляются дети фрагмента, а не сам фрагмент.

Этот интерфейс также хорошо используется с веб-компонентами: {{HTMLElement ( "template")}} элементы содержат `DocumentFragment` в их {{domxref ("HTML Template Element.content")}} свойствах.

Пустой `DocumentFragment` может быть создан с помощью метода {{domxref("document.createDocumentFragment")}} или конструктора.

## Свойства

_Этот интерфейс не имеет определённых свойств помимо наследуемых от его родителя, {{domxref("Node")}}, и реализует их из интерфейса {{domxref("ParentNode")}}._

- {{ domxref("ParentNode.children") }} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает динамическую {{domxref("HTMLCollection")}} содержащую все объекты типа {{domxref("Element")}}, которые являются потомками объекта `DocumentFragment`.
- {{ domxref("ParentNode.firstElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает {{domxref("Element")}}, который является первым потомком объекта `DocumentFragment`, или `null`, если такого нет.
- {{ domxref("ParentNode.lastElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает {{domxref("Element")}}, который является последним потомком объекта `DocumentFragment`, или `null`, если такого нет.
- {{ domxref("ParentNode.childElementCount") }} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает `unsigned long` - число потомков объекта `DocumentFragment`.

## Конструктор

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }} {{experimental_inline}}
  - : Возвращает пустой объект `DocumentFragment`.

## Методы

_Этот интерфейс наследует методы его родителя, {{domxref("Node")}}_, и реализует их из интерфейса {{domxref("ParentNode")}}.

- {{domxref("DocumentFragment.find()")}} {{experimental_inline}}
  - : Возвращает первое совпадение {{domxref("Element")}} в дереве `DocumentFragment`.
- {{domxref("DocumentFragment.findAll()")}} {{experimental_inline}}
  - : Возвращает список {{domxref("NodeList")}} найденных {{domxref("Element")}} в дереве `DocumentFragment`.
- {{domxref("DocumentFragment.querySelector()")}}
  - : Возвращает первый узел {{domxref("Element")}} в `DocumentFragment`, в порядке документа, который совпадает с заданным селектором.
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : Возвращает список {{domxref("NodeList")}} всех узлов {{domxref("Element")}} в `DocumentFragment` которые совпадают с заданным селектором.

<!---->

- {{domxref("DocumentFragment.getElementById()")}}
  - : Возвращает первый узел {{domxref("Element")}} в `DocumentFragment`, в порядке документа, который совпадает с заданным ID.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Интерфейсы DOM.](/ru/docs/DOM/DOM_Reference)

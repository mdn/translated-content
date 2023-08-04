---
title: Document.importNode()
slug: Web/API/Document/importNode
---

{{APIRef("DOM")}}

Метод **`importNode()`** объекта {{domxref("Document")}} создаёт копию {{domxref("Node")}} или {{domxref("DocumentFragment")}} из другого документа, для последующей вставки в текущий документ.

Импортированный узел пока ещё не включён в дерево документов. Чтобы добавить его, вам необходимо вызвать один из методов вставки, например, {{domxref("Node.appendChild", "appendChild()")}} или {{domxref("Node.insertBefore", "insertBefore()")}} с узлом, который _находится_ в дереве документов.

В отличие от {{domxref("document.adoptNode()")}}, исходный узел не удаляется из исходного документа. Импортированный узел является клоном оригинала.

## Синтаксис

```
var node = document.importNode(externalNode, deep);
```

- _node_
  - : Копируемый узел из области видимости импортируемого документа . Свойство {{domxref("Node.parentNode")}} узла = `null`, до тех пор, пока он не будет вставлен в дерево документа.
- _externalNode_
  - : Внешний `Node` или `DocumentFragment`, который импортируется в настоящий документ.
- _deep_

  - : Булеан, контролирующий, необходимо ли импортировать всё DOM поддерево узла _externalNode_.

    - Если _deep_ установлен в `true`, _узел externalNode_ и все его потомки будут скопированы.
    - Если _deep_ установлен в `false`, импортируется только _externalNode_ — новый узел не будет содержать потомков.

> **Примечание:** In the DOM4 specification, _deep_ was an optional argument with a default value of `true`.
>
> This default has changed in the latest spec — the new default value is **`false`**. Though it's still an optional argument, you should always provide the `deep` argument for backward _and_ forward compatibility. With Gecko 28.0, the console warns developers not to omit the argument. Starting with Gecko 29.0), a shallow clone is defaulted instead of a deep clone.

## Example

```js
var iframe = document.querySelector("iframe");
var oldNode = iframe.contentWindow.document.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Notes

Nodes from external documents should be cloned using [`document.importNode()`](/ru/docs/Web/API/Document/importNode) (or adopted using [`document.adoptNode()`](/ru/docs/Web/API/Document/adoptNode)) before they can be inserted into the current document. For more on the [`Node.ownerDocument`](/ru/docs/Web/API/Node/ownerDocument) issues, see the [W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for improved future compatibility.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.adoptNode()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}

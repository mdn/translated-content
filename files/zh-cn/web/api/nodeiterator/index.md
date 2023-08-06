---
title: NodeIterator
slug: Web/API/NodeIterator
---

{{APIRef("DOM")}}

**`NodeIterator`** 接口表示一个遍历 DOM 子树中节点列表的成员的迭代器。节点将按照文档顺序返回。

NodeIterator 可以使用 {{domxref("Document.createNodeIterator()")}} 方法创建，如下所示：

```js
var nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## 属性

_这个接口不继承任何属性。_

- {{domxref("NodeIterator.root")}} {{readonlyInline}}
  - : 返回一个 {{domxref("Node")}}，它代表创建 NodeIterator 时指定的根节点。
- {{domxref("NodeIterator.whatToShow")}} {{readonlyInline}}

  - : 返回一个无符号长整型，它是一个由描述必须呈现的 {{domxref("Node")}} 类型的常量构成的位掩码。不匹配的节点被跳过，但是如果相关，他们的子节点可能被包括在内。可能的值是：

    | Constant                                                 | Numerical value                                 | Description                                                                                                                                                                                                                                                                                                           |
    | -------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `-1` (that is the max value of `unsigned long`) | 显示所有节点。                                                                                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_ATTRIBUTE` {{Deprecated_Inline}}        | `2`                                             | 显示属性 {{ domxref("Attr") }} 节点。只有当用一个 {{ domxref("Attr") }} 节点作为根节点来创建 {{ domxref("NodeIterator") }} 时才有意义; 在这种情况下，这意味着属性节点会出现在迭代或遍历的首位。因为属性永远不会是其他节点的子节点，当遍历整个文档树时它们不会出现。                                                   |
    | `NodeFilter.SHOW_CDATA_SECTION` {{Deprecated_Inline}}    | `8`                                             | 显示{{ domxref("CDATASection") }} 节点。                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                           | 显示{{ domxref("Comment") }} 节点。                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                           | 显示{{ domxref("Document") }} 节点。                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                          | 显示{{ domxref("DocumentFragment") }}节点。                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                           | 显示{{ domxref("DocumentType") }} 节点。                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                             | 显示{{ domxref("Element") }} 节点。                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_ENTITY` {{Deprecated_Inline}}           | `32`                                            | 显示 {{ domxref("Entity") }} 节点。只有当用一个 {{ domxref("Entity") }} 节点作为它的根节点来创建一个 {{ domxref("NodeIterator") }} 时才有意义; 在这种情况下， {{ domxref("Entity") }} 节点会出现在迭代或遍历的首位。因为 {{ domxref("Entity") }} 永远不会是其他节点的子节点，当遍历整个文档树时它们不会出现。         |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{Deprecated_Inline}} | `16`                                            | 显示{{ domxref("EntityReference") }} 节点。                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_NOTATION` {{Deprecated_Inline}}         | `2048`                                          | 显示 {{ domxref("Notation") }} 节点。只有当用一个 {{ domxref("Notation") }} 节点作为它的根节点时来创建一个 {{ domxref("NodeIterator") }} 才有意义; 在这种情况下， {{ domxref("Notation") }} 节点会出现在迭代或遍历的首位。因为 {{ domxref("Notation") }} 永远不会是其他节点的子节点，当遍历整个文档树时它们不会出现。 |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                            | 显示{{ domxref("ProcessingInstruction") }} 节点。                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                             | 显示{{ domxref("Text") }} 节点。                                                                                                                                                                                                                                                                                      |

- {{domxref("NodeIterator.filter")}} {{readonlyInline}}
  - : 返回一个用来选择相关节点的 {{domxref("NodeFilter")}} .
- {{domxref("NodeIterator.expandEntityReferences")}} {{readonlyInline}} {{deprecated_inline}}
  - : Is a {{domxref("Boolean")}} indicating if, when discarding an {{domxref("EntityReference")}} its whole sub-tree must be discarded at the same time.
- {{domxref("NodeIterator.referenceNode")}} {{readonlyInline}} {{experimental_inline() }}
  - : 返回当前遍历到的 {{domxref("Node")}} .
- {{domxref("NodeIterator.pointerBeforeReferenceNode")}} {{readonlyInline}} {{ experimental_inline() }}
  - : Returns a {{domxref("Boolean")}} flag that indicates whether the {{domxref("NodeIterator")}} is anchored before, the flag being `true`, or after, the flag being `false`, the anchor node.

## 方法

_这个接口不会继承任何属性。_

- {{domxref("NodeIterator.detach()")}} {{Deprecated_Inline}}
  - : 这个方法不是必需的。它现在什么也不做。之前用来告诉引擎，`NodeIterator` 已经不会再使用，现在已经不做任何事情。
- {{domxref("NodeIterator.previousNode()")}}
  - : 返回前一个 {{domxref("Node")}}，如果不存在则返回 `null`.
- {{domxref("NodeIterator.nextNode()")}}
  - : 返回下一个 {{domxref("Node")}}, 如果不存在则返回`null` .

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The creator method: {{domxref("Document.createNodeIterator()")}}.
- Related interfaces: {{domxref("NodeFilter")}}, {{domxref("TreeWalker")}}.

---
title: TreeWalker
slug: Web/API/TreeWalker
---

{{ APIRef("DOM") }}

**`TreeWalker`** 对象用于表示文档子树中的节点和它们的位置。

`TreeWalker` 可以使用 {{domxref("Document.createTreeWalker()")}} 方法创建。

## 属性

_这个接口不继承任何属性。_

- {{domxref("TreeWalker.root")}} {{readonlyInline}}
  - : 返回一个 {{domxref("Node")}} ，表示新建 `TreeWalker` 时所声明的根节点。
- {{domxref("TreeWalker.whatToShow")}} {{readonlyInline}}

  - : 返回一个 `unsigned long` 类型的常量位掩码，表示需要筛选的{{domxref("Node")}} 类型。不匹配的节点会跳过，但其子节点，如果符合条件，则也会被包含。可能的值如下：

    | 常量                                                     | 数字值                                       | 描述                                                                                                                                                                                               |
    | -------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295`（`unsigned long` 类型的最大值） | 显示所有节点。                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                          | 显示{{ domxref("Attr") }}节点，这意味着使用{{ domxref("TreeWalker") }}访问 {{ domxref("Attr") }}节点时，需要让这些节点处于遍历的开始位置。这是因为这些节点不是任何节点的后代，并不处于文档树之上。 |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                          | 显示 {{ domxref("CDATASection") }}节点。                                                                                                                                                           |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                        | 显示 {{ domxref("Comment") }} 节点。                                                                                                                                                               |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                        | 显示 {{ domxref("Document") }} 节点。                                                                                                                                                              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                       | 显示 {{ domxref("DocumentFragment") }} 节点。                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                        | 显示 {{ domxref("DocumentType") }} 节点。                                                                                                                                                          |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                          | 显示 {{ domxref("Element") }} 节点。                                                                                                                                                               |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                         | 遗留属性，不再可用。                                                                                                                                                                               |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                         | 遗留属性，不再可用。                                                                                                                                                                               |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                       | 遗留属性，不再可用。                                                                                                                                                                               |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                         | 显示 {{ domxref("ProcessingInstruction") }} 节点。                                                                                                                                                 |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                          | 显示 {{ domxref("Text") }} 节点。                                                                                                                                                                  |

- {{domxref("TreeWalker.filter")}} {{readonlyInline}}
  - : 返回一个实现 {{domxref("NodeFilter")}} 接口的对象，这个对象用来挑选相关的节点。
- {{domxref("TreeWalker.currentNode")}}
  - : 返回 `TreeWalker` 当前指向的{{domxref("Node")}}。

## 方法

_这个接口不继承任何方法。_

> **备注：** 对于 `TreeWalker`，一个节点是否*可见*只取决于 `whatToShow` 和 `filter` 两个参数。（和元素是否在屏幕上可见无关。）

- {{domxref("TreeWalker.parentNode()")}}
  - : 移动当前 {{domxref("Node")}} 到文档顺序中的第一个“可见”的祖先节点，并返回该节点。如果没有这样的节点，则会返回 null，同时也不会发生移动。
- {{domxref("TreeWalker.firstChild()")}}

  - : 移动当前 {{domxref("Node")}} 到当前节点的第一个“可见”子节点，并返回该节点。如果没有这样的节点，则会返回 null，同时也不会发生移动。

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head><title>Demo</title>
      <body>
        <div id="container"></div>
      </body>
    </html>
    ```

    ```js
    let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL);
    let node = walker.firstChild(); // nodeName: "#text"
    ```

    但如果我们这样做：

    ```js
    let walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
    );
    let node = walker.firstChild(); // nodeName: "DIV"
    ```

    这同样应用于 `nextSibling()`、`previousSibling()`、`firstChild()` 和 `lastChild()`。

- {{domxref("TreeWalker.lastChild()")}}
  - : 移动当前 {{domxref("Node")}} 到当前节点的最末一个“可见”子节点，并返回该节点。如果没有这样的节点，则会返回 null，同时也不会发生移动。
- {{domxref("TreeWalker.previousSibling()")}}
  - : 移动当前 {{domxref("Node")}} 到当前节点的前一个兄弟节点，并返回该节点。如果没有这样的节点，则会返回 null，同时也不会发生移动。
- {{domxref("TreeWalker.nextSibling()")}}
  - : 移动当前 {{domxref("Node")}} 到当前节点的后一个兄弟节点，并返回该节点。如果没有这样的节点，则会返回 null，同时也不会发生移动。
- {{domxref("TreeWalker.previousNode()")}}
  - : 移动当前 {{domxref("Node")}} 到文档顺序中前一个节点，并返回该节点。如果没有这样的节点，则会返回 null，同时也不会发生移动。
- {{domxref("TreeWalker.nextNode()")}}
  - : 移动当前 {{domxref("Node")}} 到文档顺序中下一个节点，并返回该节点。如果没有这样的节点，则会返回 null，同时也不会发生移动。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 构造函数：{{domxref("Document.createTreeWalker()")}}。
- 相关接口：{{domxref("NodeFilter")}}、{{domxref("NodeIterator")}}。

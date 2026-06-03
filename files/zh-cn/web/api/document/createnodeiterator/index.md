---
title: Document：createNodeIterator() 方法
slug: Web/API/Document/createNodeIterator
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`Document.createNodeIterator()`** 方法返回一个新的 [`NodeIterator`](/zh-CN/docs/Web/API/NodeIterator) 对象。

## 语法

```js-nolint
createNodeIterator(root)
createNodeIterator(root, whatToShow)
createNodeIterator(root, whatToShow, filter)
```

### 参数

- `root`
  - : {{domxref("NodeIterator")}} 遍历起始处的根节点。
- `whatToShow` {{optional_inline}}
  - : 是一个可选的无符号长整型（`unsigned long`），是由节点过滤器（[`NodeFilter`](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter)）中的常量属性定义的位掩码。这是筛选特定类型节点的便捷方式。其默认值是 `0xFFFFFFFF`，代表 `SHOW_ALL` 常量。

    | 常量                                                     | 数字值                                    | 描述                                                                                                                                                                                                                                                        |
    | -------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (即`unsigned long` 的最大值) | 显示所有节点。                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                       | 显示 {{ domxref("Attr") }} 特性节点。这仅在创建以 {{domxref("Attr")}} 特性节点为根节点的 {{domxref("TreeWalker")}} 时有意义；在这种情况下，这意味着该特性节点会出现在迭代或遍历的第一位。因为特性节点不会是其他节点的子代，遍历文档树时，特性节点不会出现。 |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                       | 显示 {{ domxref("CDATASection") }} 节点。                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                     | 显示 {{ domxref("Comment") }} 节点。                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                     | 显示 {{ domxref("Document") }} 节点。                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                    | 显示 {{ domxref("DocumentFragment") }} 节点。                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                     | 显示 {{ domxref("DocumentType") }} 节点。                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                       | 显示 {{ domxref("Element") }} 节点。                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                      | 旧的，已无法再使用。                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                      | 旧的，已无法再使用。                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                    | 旧的，已无法再使用。                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                      | 显示 {{domxref("ProcessingInstruction")}} 节点。                                                                                                                                                                                                            |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                       | 显示 {{domxref("Text")}} 节点。                                                                                                                                                                                                                             |

- `filter` {{optional_inline}}
  - : 一个回调函数或一个具有 `acceptNode()` 方法的对象。从根节点开始到子树中的每个节点都会调用一次该函数或方法，哪些节点需要进入迭代节点列表等待调用则取决于 whatToShow 标志。该方法需要返回下列常量之一：`NodeFilter.FILTER_ACCEPT`、`NodeFilter.FILTER_REJECT` 或 `NodeFilter.FILTER_SKIP`。参见[示例](#示例)。

### 返回值

一个新的 [`NodeIterator`](/zh-CN/docs/Web/API/NodeIterator) 对象。

## 示例

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.nodeName.toLowerCase() === "p"
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_REJECT,
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}
```

相同，但使用具有 `acceptNode()` 方法的对象：

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return node.nodeName.toLowerCase() === "p"
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  },
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

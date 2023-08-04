---
title: document.createTreeWalker()
slug: Web/API/Document/createTreeWalker
---

{{ApiRef("Document")}}

**`document.createTreeWalker()`** 方法，能创建并返回一个新 {{domxref("TreeWalker")}} 对象。

## 语法

```js-nolint
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)
```

### 参数

- `root`
  - : 遍历这个 {{domxref("TreeWalker")}} 的根节点（{{domxref("Node")}}）。通常这是文档的一个元素。
- `whatToShow` {{optional_inline}}

  - : 一个无符号长整型，表示一个整合自 [`NodeFilter`](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter) 常量属性的位掩码。这是筛选特定类型节点的便捷方式。默认为 `0xFFFFFFFF`，表示 `SHOW_ALL` 常量。

    | 常量                                                     | 数值                                         | 描述                                                                                                                                                                                                                                                                               |
    | -------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295`（`unsigned long` 类型的最大值） | 显示所有节点。                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                          | 显示属性 {{ domxref("Attr") }} 节点。这只在当以一个根 {{ domxref("Attr") }} 节点为起点节点的{{ domxref("TreeWalker") }} 中才有意义，在这种情况下，这意味着属性节点会出现在迭代或遍历第一次出现的位置。因为属性节点永远不是其他节点的子节点，所以在文档树中的遍历不会出现属性节点。 |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                          | 显示 CDATA {{domxref("CDATASection")}} 节点。                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                        | 显示注释 {{domxref("Comment")}} 节点。                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                        | 显示文档 {{domxref("Document")}} 节点。                                                                                                                                                                                                                                            |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                       | 显示文档片段 {{domxref("DocumentFragment")}} 节点。                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                        | 显示文档类型 {{domxref("DocumentType")}} 节点。                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                          | 显示元素 {{domxref("Element")}} 节点。                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                         | 遗留属性，不再可用。                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                         | 遗留属性，不再可用。                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                       | 遗留属性，不再可用。                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                         | 显示处理指令 {{ domxref("ProcessingInstruction") }} 节点。                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                          | 显示文字 {{ domxref("Text") }} 节点。                                                                                                                                                                                                                                              |

- `filter` {{optional_inline}}
  - : 一个具有 `acceptNode` 方法的 {{domxref("NodeFilter")}} 对象，此方法被 {{domxref("TreeWalker")}} 调用以决定是否接受已通过 `whatToShow` 检查的节点。

### 返回值

一个新的 {{domxref("TreeWalker")}} 对象。

## 示例

以下示例遍历 body 下的所有节点，过滤掉非元素（值为 `NodeFilter.SHOW_ELEMENT`）节点，将剩余节点标记为可接受（也可在 `acceptNode()` 方法中缩小集合），然后利用创建的 TreeWalker 迭代器在节点上推进（现在是所有的元素）并把它们推入一个数组。

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
);

const nodeList = [];
let currentNode = treeWalker.currentNode;

while (currentNode) {
  nodeList.push(currentNode);
  currentNode = treeWalker.nextNode();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 该函数创建的接口对象：{{domxref("TreeWalker")}}。

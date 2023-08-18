---
title: Document.createNodeIterator()
slug: Web/API/Document/createNodeIterator
---

{{APIRef("DOM")}}

返回一个新的 [`NodeIterator`](/zh-CN/DOM/NodeIterator) 对象。

## 语法

```
const nodeIterator = document.createNodeIterator(root[, whatToShow[, filter]]);
```

### 参数

- `root`
  - : {{ domxref("NodeIterator") }}遍历起始处的根节点。
- `whatToShow` {{ optional_inline() }}

  - : 是一个可选的无符号长整型（`unsigned long`），是由节点过滤器（[`NodeFilter`](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter)）中的常量属性定义的位掩码。这是筛选特定类型节点的便捷方式。其默认值是 `0xFFFFFFFF` ，代表 `SHOW_ALL` 常量。

    | 常量                                                     | 数字值                            | 描述                                                                                                                                                                                                                                                          |
    | -------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `-1` (即`unsigned long` 的最大值) | 显示所有节点。                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                               | 显示 {{ domxref("Attr") }} 特性节点。这仅在创建以{{ domxref("Attr") }} 特性节点为根节点的{{ domxref("TreeWalker") }}时有意义；在这种情况下，这意味着该特性节点会出现在迭代或遍历的第一位。因为特性节点不会是其他节点的子代，遍历文档树时，特性节点不会出现。  |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                               | 显示 {{ domxref("CDATASection") }} 节点。                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                             | 显示 {{ domxref("Comment") }} 节点。                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                             | 显示 {{ domxref("Document") }} 节点。                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                            | 显示 {{ domxref("DocumentFragment") }} 节点。                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                             | 显示 {{ domxref("DocumentType") }} 节点。                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                               | 显示 {{ domxref("Element") }} 节点。                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                              | 显示 {{ domxref("Entity") }} 节点。这仅在创建以{{ domxref("Entity") }}实体节点为根节点的{{ domxref("TreeWalker") }}时有意义；在这种情况下，这意味着该实体节点会出现在迭代或遍历的第一位。因为实体节点不会是其他节点的子代，遍历文档树时，实体节点不会出现。   |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                              | 显示 {{ domxref("EntityReference") }} 节点。                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                            | 显示 {{ domxref("Entity") }} 节点。这仅在创建以{{ domxref("Notation") }}符号节点为根节点的{{ domxref("TreeWalker") }}时有意义；在这种情况下，这意味着该符号节点会出现在迭代或遍历的第一位。因为符号节点不会是其他节点的子代，遍历文档树时，符号节点不会出现。 |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                              | 显示 {{ domxref("ProcessingInstruction") }} 节点。                                                                                                                                                                                                            |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                               | 显示 {{ domxref("Text") }} 节点。                                                                                                                                                                                                                             |

- `filter` {{ optional_inline() }}
  - : 是实现 {{ domxref("NodeFilter") }} 接口的对象; 其 `acceptNode()` 方法会对从根节点开始到子树中的每个节点都调用一次，哪些节点需要进入迭代节点列表等待调用则取决于 whatToShow 参数（也可以使用一个简单的回调函数代替`acceptNode()`）。该方法需要返回下列常量之一： `NodeFilter.FILTER_ACCEPT` ，`NodeFilter.FILTER_REJECT` 或 `NodeFilter.FILTER_SKIP`（见[NodeFilter](/zh-CN/docs/Web/API/NodeFilter)），参见[示例](#示例)。

> **备注：** 在 Gecko 12.0 以前，这个方法接收第四个可选的参数（`entityReferenceExpansion`），这不是 DOM4 规范中的一部分，因此被移除了。这个参数表示实体引用节点的子代对于迭代器是否可见。因为浏览器不会创建这样的节点，这个参数没有任何作用。

## 示例

```
const nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode(node) {
        return node.nodeName.toLowerCase() === 'p' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    }
);
const pars = [];
let currentNode;

while (currentNode = nodeIterator.nextNode()) {
  pars.push(currentNode);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

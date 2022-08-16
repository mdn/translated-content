---
title: document.createTreeWalker()
slug: Web/API/Document/createTreeWalker
---
{{ApiRef("Document")}}

**`document.createTreeWalker()`** 方法，能创建并返回一个 {{domxref("TreeWalker")}} 对象。

## 语法

```
treeWalker = document.createTreeWalker(root, whatToShow, filter, entityReferenceExpansion);
```

### 参数

- `root`
  - : 是遍历这个 {{domxref("TreeWalker")}} 的根节点 (root {{domxref("Node")}})。通常这是文档的一个元素。
- _whatToShow {{optional_inline}}_

  - : 一个无符号长整型，表示一个整合自 [`NodeFilter`](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter) 常量属性的位掩码。这是筛选特定类型节点的便捷方式。默认为 0xFFFFFFFF，表示 `SHOW_ALL` 常量。

    | 常量                                                            | 数值                                            | 描述                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | --------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                           | `-1` (that is the max value of `unsigned long`) | 显示所有节点。                                                                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                             | 显示特性{{ domxref("Attr") }}节点。这只在当以一个特性节点{{ domxref("Attr") }}为起点节点的{{ domxref("TreeWalker") }} 中有意义；在这种情况下，这意味着特性节点会出现在迭代或遍历第一次出现的位置。因为特性节点没有其他节点一样的子节点，所以在文档树中的遍历不会出现特性节点。                                                                                                                         |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                             | 显示 CDTA {{domxref("CDATASection")}} 节点。                                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_COMMENT`                                       | `128`                                           | 显示注释{{domxref("Comment")}}节点                                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT`                                      | `256`                                           | 显示文档{{domxref("Document")}}节点                                                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                             | `1024`                                          | 显示文档片段{{domxref("DocumentFragment")}}节点                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                                 | `512`                                           | 显示文档类型{{domxref("DocumentType")}}节点                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ELEMENT`                                       | `1`                                             | 显示元素{{domxref("Element")}}节点                                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                            | 显示实体{{domxref("Entity")}}节点。This is meaningful only when creating a {{ domxref("TreeWalker") }} with an {{ domxref("Entity") }} node as its root; in this case, it means that the {{ domxref("Entity") }} node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree.      |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                            | 显示实体引用 {{ domxref("EntityReference") }} 节点。                                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                          | 显示符号{{ domxref("Notation") }} 节点。 This is meaningful only when creating a {{ domxref("TreeWalker") }} with a {{ domxref("Notation") }} node as its root; in this case, it means that the {{ domxref("Notation") }} node will appear in the first position of the traversal. Since entities are not part of the document tree, they do not appear when traversing over the document tree. |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                        | `64`                                            | 显示处理指令 {{ domxref("ProcessingInstruction") }}节点。                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_TEXT`                                          | `4`                                             | 顯示文字節點 ({{ domxref("Text") }} nodes).                                                                                                                                                                                                                                                                                                                                                                            |

- _filter _{{optional_inline}}
  - : 一个可选的 {{domxref("NodeFilter")}}，即一个具有 `acceptNode` 方法的对象，此方法被 {{domxref("TreeWalker")}} 调用以决定是否接受已通过 `whatToShow` 检查的节点。
- _entityReferenceExpansion_ {{optional_inline}} {{Deprecated_Inline}}
  - : 一个 {{domxref("Boolean")}} 标识，指示当丢弃一个 {{domxref("EntityReference")}} 时是否同时丢弃其子树。

### 返回值

一个新的 {{domxref("TreeWalker")}} 对象。

## 示例

以下示例遍历 body 下的所有节点，将节点集合缩小至元素，简单地传递每个可接受的节点（也可在 `acceptNode()` 方法中缩小集合），然后利用创建的 TreeWalker 迭代器在节点上推进（现在是所有的元素）并把它们推入一个数组。

```
var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
  false
);

var nodeList = [];
var currentNode = treeWalker.currentNode;

while(currentNode) {
  nodeList.push(currentNode);
  currentNode = treeWalker.nextNode();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.Document.createTreeWalker")}}

## 参见

- 该函数创建的接口对象：{{domxref("TreeWalker")}}。

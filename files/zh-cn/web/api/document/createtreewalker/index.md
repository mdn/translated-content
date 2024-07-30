---
title: Document：createTreeWalker() 方法
short-title: createTreeWalker()
slug: Web/API/Document/createTreeWalker
---

{{APIRef("Document")}}

创建器方法 **`Document.createTreeWalker()`** 返回新创建的 {{DOMXref("TreeWalker")}} 对象。

## 语法

```js-nolint
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)
```

### 参数

- `root`
  - : 表示 `TreeWalker` 对象的根节点的 {{DOMXref("Node")}}，为 {{DOMXref("TreeWalker.currentNode")}} 的初始值。
- `whatToShow` {{optional_inline}}

  - : 表示位掩码的 `unsigned long`，由 [`NodeFilter`](https://dom.spec.whatwg.org/#interface-nodefilter) 的常属性组合而成。此参数便于筛选出特定类型的节点。其默认值为 `0xFFFFFFFF`，表示 `NodeFilter.SHOW_ALL` 常数。

    | 常数                                                     | 数值         | 描述                                             |
    | -------------------------------------------------------- | ------------ | ------------------------------------------------ |
    | `NodeFilter.SHOW_ALL`                                    | `0xFFFFFFFF` | 显示所有节点。                                   |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `0x2`        | 显示 {{DOMXref("Attr")}} 节点。                  |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `0x8`        | 显示 {{DOMXref("CDATASection")}} 节点。          |
    | `NodeFilter.SHOW_COMMENT`                                | `0x80`       | 显示 {{DOMXref("Comment")}} 节点。               |
    | `NodeFilter.SHOW_DOCUMENT`                               | `0x100`      | 显示 {{DOMXref("Document")}} 节点。              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `0x400`      | 显示 {{DOMXref("DocumentFragment")}} 节点。      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `0x200`      | 显示 {{DOMXref("DocumentType")}} 节点。          |
    | `NodeFilter.SHOW_ELEMENT`                                | `0x1`        | 显示 {{DOMXref("Element")}} 节点。               |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `0x20`       | 旧式参数，不再有效。                             |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `0x10`       | 旧式参数，不再有效。                             |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `0x800`      | 旧式参数，不再有效。                             |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `0x40`       | 显示 {{DOMXref("ProcessingInstruction")}} 节点。 |
    | `NodeFilter.SHOW_TEXT`                                   | `0x4`        | 显示 {{DOMXref("Text")}} 节点。                  |

    > [!NOTE]
    > 由于任意 `Attr` 节点的父节点恒为 `null`，{{DOMXref("TreeWalker.nextNode()")}} 和 {{DOMXref("TreeWalker.previousNode()")}} 永远不会返回 `Attr` 节点。遍历 `Attr` 节点请使用 {{DOMXref("Element.attributes")}}。

- `filter` {{optional_inline}}

  - : 回调函数或含 `acceptNode()` 方法的对象，其返回值为 `NodeFilter.FILTER_ACCEPT`、`NodeFilter.FILTER_REJECT` 或 `NodeFilter.FILTER_SKIP`。对于以 `root` 为根节点的子树中被 `whatToShow` 标志所接受的任意节点，将调用此函数或方法决定是否在迭代节点列表中包含此节点：

    - 若返回值为 `NodeFilter.FILTER_ACCEPT`，则包含此节点。
    - 若返回值为 `NodeFilter.FILTER_REJECT`，则不包含以此节点为根的子树中的任意节点。
    - 若返回值为 `NodeFilter.FILTER_SKIP`，则不包含此节点。

### 返回值

新的 {{DOMXref("TreeWalker")}} 对象。

## 示例

### 使用 whatToShow

此示例使用 `whatToShow` 将文本内容转换为大写。注意到 `#root` 后代的文本节点虽然并非 `#root` 元素的子节点，但也将被遍历。

#### HTML

```html
<div id="root">
  此节点为 Text 节点。<span>而此节点为 <code>span</code> 元素。</span>
</div>
```

#### CSS

```css
span {
  background-color: aqua;
}
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.querySelector("#root"),
  NodeFilter.SHOW_TEXT,
);

while (treeWalker.nextNode()) {
  const node = treeWalker.currentNode;
  node.data = node.data.toUpperCase();
}
```

#### 结果

{{EmbedLiveSample("使用_whattoshow", "100%", 100)}}

### 使用 filter

此示例使用 `filter` 将文本内容转义。对于任意文本节点，若其为某个 `.escape` 元素的后代且非任何 `.no-escape` 元素的后代，则用 {{JSXref("encodeURI()")}} 将其转义。

#### HTML

```html
<div>
  <div>此文本未被转义。<span class="escape">但此文本被转义。</span></div>
  <div class="escape">此文本被转义。</div>
  <div class="no-escape">此文本未被转义。</div>
</div>
<hr />
<div class="escape">
  <div>此文本被转义。<span class="no-escape">但此文本未被转义。</span></div>
  <div class="no-escape">此文本未被转义。</div>
</div>
<hr />
<div class="no-escape">
  <div>此文本未被转义。</div>
  <div class="escape">此文本未被转义。</div>
</div>
```

#### CSS

```css hidden
div {
  margin: 0.25em 0;
  padding: 0.25em;
}
span {
  display: inline-block;
}
```

```css
.escape {
  border: dashed;
}
.no-escape {
  border: solid;
}
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.classList.contains("no-escape")
      ? NodeFilter.FILTER_REJECT
      : node.closest(".escape")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP,
);

while (treeWalker.nextNode()) {
  for (const node of treeWalker.currentNode.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.data)) {
      // 排除仅含空白符的文本节点
      node.data = encodeURI(node.data.replace(/\s+/g, " "));
    }
  }
}
```

#### 结果

{{EmbedLiveSample("使用_filter", "100%", 450)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMXref("TreeWalker")}}——相关接口

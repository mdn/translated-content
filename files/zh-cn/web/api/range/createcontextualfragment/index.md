---
title: Range.createContextualFragment()
slug: Web/API/Range/createContextualFragment
---

{{ApiRef("DOM")}}

**`Range.createContextualFragment()`** 方法通过以 range 的开头（选定节点的父级）作为上下文节点来调用 HTML 片段解析算法 或者 XML 片段解析算法来返回 {{domxref("DocumentFragment")}}。如果 range 属于一个其 HTMLness bit 被设置了的 {{domxref("Document")}} 则会应用 HTML 片段解析算法。在 HTML 的情况下，如果上下文节点为 html，由于历史原因，将使用 body 作为上下文来调用片段解析算法。

## 语法

```plain
documentFragment = range.createContextualFragment(tagString)
```

### 参数

- `tagString`
  - : 包含要转换为文档片段的文本和标签的文本。

## 示例

```js
var tagString = "<div>I am a div node</div>";
var range = document.createRange();

// 使文档中第一个 div 的父级成为上下文节点
range.selectNode(document.getElementsByTagName("div").item(0));
var documentFragment = range.createContextualFragment(tagString);
document.body.appendChild(documentFragment);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [The DOM interfaces index](/zh-CN/docs/Web/API/Document_Object_Model)

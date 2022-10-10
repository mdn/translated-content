---
title: Range.extractContents()
slug: Web/API/Range/extractContents
---

{{ApiRef("DOM")}}

**`Range.extractContents()`** 方法移动了{{ domxref("Range") }} 中的内容从文档树到{{ domxref("DocumentFragment") }}（文档片段对象）。

使用 DOM 事件添加的事件侦听器在提取期间不会保留。HTML 属性事件将按{{domxref("Node.cloneNode()")}}方法的原样保留或复制。HTML id 属性也会被克隆，如果提取了部分选定的节点并将其附加到文档中，则可能导致无效的文档。

克隆了部分选定的节点，以包括使文档片段有效所需的父标记。

## Syntax

```plain
documentFragment = range.extractContents();
```

## Example

```js
var range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
var documentFragment = range.extractContents();
document.body.appendChild(documentFragment);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)

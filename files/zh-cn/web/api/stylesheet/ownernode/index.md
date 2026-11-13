---
title: StyleSheet：ownerNode 属性
slug: Web/API/StyleSheet/ownerNode
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

{{domxref("StyleSheet")}} 接口的 **`ownerNode`** 属性返回和文档有关联的样式表的节点。

这通常是 HTML [`<link>`](/zh-CN/docs/Web/HTML/Reference/Elements/link) 或者 [`<style>`](/zh-CN/docs/Web/HTML/Reference/Elements/style) 元素，但是在 `<?xml-stylesheet ?>` 情况下，还可以返回一个[处理指令节点](/zh-CN/docs/Web/API/ProcessingInstruction)。

## 值

一个 {{domxref("Node")}} 对象。

## 示例

```html
<html lang="zh">
  <head>
    <link rel="stylesheet" href="example.css" />
  </head>
  <body>
    <button onclick="alert(document.styleSheets[0].ownerNode)">
      显示 example.css 的 ownerNode
    </button>
  </body>
</html>
// 显示“object HTMLLinkElement”。
```

## 备注

对于被其他样式表所包含的样式表（例如使用 [`@import`](/zh-CN/docs/Web/CSS/Reference/At-rules/@import) 所包含的），此属性的值是 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

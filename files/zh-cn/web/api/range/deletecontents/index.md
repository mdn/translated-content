---
title: Range.deleteContents()
slug: Web/API/Range/deleteContents
---

{{ApiRef("DOM")}}

**`Range.deleteContents()`** 移除来自 {{ domxref("Document") }}的{{ domxref("Range") }} 内容。

不像{{ domxref("Range.extractContents") }}一样，本方法不会返回一个包含删除内容的文本片段{{domxref("DocumentFragment")}} 。

## 语法

```plain
range.deleteContents()
```

## 例子

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
range.deleteContents();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [The DOM interfaces index](/zh-CN/docs/Web/API/Document_Object_Model)

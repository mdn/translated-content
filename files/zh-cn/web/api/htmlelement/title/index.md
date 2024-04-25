---
title: HTMLElement：title 属性
slug: Web/API/HTMLElement/title
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.title`** 属性表示元素的标题：当鼠标悬停于节点上时，通常会以“工具提示”（tooltip）的弹出形式显示该文本。

## 值

一个字符串。

## 示例

```js
const link = document.createElement("a");
link.innerText = "葡萄";
link.href = "https://zh.wikipedia.org/wiki/葡萄";
link.title = "维基百科页面上的葡萄";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML [**title**](/zh-CN/docs/Web/HTML/Global_attributes/title) 全局属性。

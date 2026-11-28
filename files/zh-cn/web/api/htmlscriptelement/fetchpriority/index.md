---
title: HTMLScriptElement：fetchPriority 属性
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLScriptElement")}} 接口的 **`fetchPriority`** 属性向浏览器提供一个提示，指示相对于其他外部脚本，应如何确定获取某个外部脚本的优先级。
它反映 `<script>` 元素的 [`fetchpriority`](/zh-CN/docs/Web/HTML/Reference/Attributes/fetchpriority) 内容属性。

## 值

一个字符串。允许的取值请参阅 HTML 的 [`fetchpriority`](/zh-CN/docs/Web/HTML/Reference/Attributes/fetchpriority) 属性。

## 示例

```html
<script id="el" type="module" src="main.js" fetchpriority="high"></script>
```

```js
const el = document.getElementById("el");
console.log(el.fetchPriority); // 输出："high"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLImageElement.fetchPriority")}}
- {{domxref("HTMLLinkElement.fetchPriority")}}
- HTTP {{httpheader("Link")}} 标头
- [使用 Fetch Priority API 优化资源加载](https://web.developers.google.cn/articles/fetch-priority#browser_priority_and_fetchpriority)，了解此 API 如何影响 Chrome 中的优先级。

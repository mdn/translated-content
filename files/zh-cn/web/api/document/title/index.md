---
title: Document：title 属性
short-title: title
slug: Web/API/Document/title
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

**`document.title`** 属性用于获取或设置文档的当前标题。存在时，默认值为 [`<title>`](/zh-CN/docs/Web/HTML/Reference/Elements/title) 的值。

## 值

包含*文档*标题的字符串。若已通过设置 `document.title` 覆盖标题，则包含该值。否则包含 [`<title>`](/zh-CN/docs/Web/HTML/Reference/Elements/title) 元素中指定的标题。

```js
document.title = newTitle;
```

`newTitle` 是文档的新标题。此次赋值会影响 `document.title` 的返回值、文档显示的标题（例如窗口或标签页的标题栏），也会影响文档的 DOM（例如 HTML 文档中 `<title>` 元素的内容）。

## 示例

假设文档的 `<head>` 如下所示：

```html
<head>
  <meta charset="UTF-8" />
  <title>你好，世界！</title>
</head>
```

```js
console.log(document.title); // "你好，世界！"
document.title = "再见，世界！"; // 页面标题已更改
console.log(document.title); // "再见，世界！"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

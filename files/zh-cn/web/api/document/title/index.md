---
title: Document.title
slug: Web/API/Document/title
---

{{APIRef("DOM")}}

`document.title` 属性用于获取或设置文档的标题。如果存在，它的默认为 [`<title>`](/zh-CN/docs/Web/HTML/Element/title) 的值。

## 值

一个包含*文档*标题的字符串。如果通过设置 `document.title` 将标题覆盖，则返回覆盖后的值。否则返回 [`<title>`](/zh-CN/docs/Web/HTML/Element/title) 元素里指定的标题。

```js
document.title = newTitle;
```

`newTitle` 是文档的新标题。赋值操作影响 `document.title` 的返回值、文档的显示标题（即窗口或标签页顶部的标题栏），另外还会影响文档的 DOM，即改变 HTML 文档中 `<title>` 元素的内容。

## 示例

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body>
    <script>
      alert(document.title); // 显示 "Hello World!"
      document.title = "Goodbye World!";
      alert(document.title); // 显示 "Goodbye World!"
    </script>
  </body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

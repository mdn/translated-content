---
title: Document.forms
slug: Web/API/Document/forms
---

{{APIRef("DOM")}}

**`forms`** 返回当前文档中的 {{HTMLElement("form")}}元素的一个集合 (一个 {{domxref("HTMLCollection")}})。

## 语法

```plain
let collection = document.forms;
```

## 例子：获取表单信息

```html
<html>
  <head>
    <title>document.forms example</title>
  </head>

  <body>
    <form id="robby">
      <input
        type="button"
        onclick="alert(document.forms[0].id);"
        value="robby's form" />
    </form>

    <form id="dave">
      <input
        type="button"
        onclick="alert(document.forms[1].id);"
        value="dave's form" />
    </form>

    <form id="paul">
      <input
        type="button"
        onclick="alert(document.forms[2].id);"
        value="paul's form" />
    </form>
  </body>
</html>
```

## 例子：获取表单内的元素

```js
var selectForm = document.forms[index];
var selectFormElement = document.forms[index].elements[index];
```

## 规范

[forms DOM Level 2 HTML: forms](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-1689064)

## 相关链接

- [DOM:form](/zh-CN/DOM/HTMLFormElement)

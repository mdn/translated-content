---
title: HTMLFormElement.enctype
slug: Web/API/HTMLFormElement/enctype
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement.enctype`** 属性常用来指明提交表单的内容类型，可选的值如下：

- `application/x-www-form-urlencoded`: 初始的默认值
- `multipart/form-data`: 适用于使用{{HTMLElement("input")}} 标签上传文件
- `text/plain`: HTML5 引入的类型

这些值可以通过元素 {{HTMLElement("button")}} or {{HTMLElement("input")}} 的属性 form.enctype 来改写

## 语法

```plain
string = form.enctype
form.enctype = string
```

## 例子

```plain
form.enctype = "application/x-www-form-urlencoded";
```

## 参考

[HTML 5, Section 4.10.19.6, Form submission](https://www.w3.org/TR/html5/forms.html#attr-fs-enctype)

[DOM Level 2 HTML: enctype](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-84227810)

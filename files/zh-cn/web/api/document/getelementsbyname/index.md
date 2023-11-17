---
title: Document.getElementsByName()
slug: Web/API/Document/getElementsByName
---

{{APIRef("DOM")}}

根据给定的{{domxref("element.name","name")}} 返回一个在 (X)HTML document 的节点列表集合。

## 语法

```
elements = document.getElementsByName(name)
```

- `elements` 是一个实时更新的 {{domxref("NodeList")}} 集合。当文档中有同一个 name 属性的元素被添加或移除时，这个集合会自动更新。
- `name` 是元素的 `name` 属性的值。

## 例子

```html
<!doctype html>
<html lang="en">
  <head>
    ...
  </head>

  <body>
    <form name="up"><input type="text" /></form>
    <div name="down"><input type="text" /></div>

    <script>
      var up_forms = document.getElementsByName("up");
      console.log(up_forms[0].tagName); // returns "FORM"
    </script>
  </body>
</html>
```

## 注释

{{domxref("element.name","name")}} 属性只有在 (X)HTML 文档中可用。

该方法返回一个 live 的 {{domxref("NodeList")}} 集合，这个集合包含 {{domxref("element.name","name")}} 属性为指定值的所有元素，例如{{htmlelement("meta")}} 、{{htmlelement("object")}}，甚至那些不支持 {{domxref("element.name","name")}} 属性但是添加了 {{domxref("element.name","name")}} 自定义属性的元素也包含其中。

> **警告：** getElementsByName 在不同的浏览器其中工作方式不同。在 IE 和 Opera 中，getElementsByName() 方法还会返回那些 {{domxref("element.id","id")}} 为指定值的元素。所以你要小心使用该方法，最好不要为元素的 {{domxref("element.name","name")}} 和 {{domxref("element.id","id")}} 赋予相同的值。

> **警告：** IE 和 Edge 都返回一个 {{domxref("HTMLCollection")}}, 而不是{{domxref("NodeList")}} 。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{domxref("document.getElementById()")}} 通过 `id` 返回对元素的引用
- {{domxref("document.querySelector()")}} 通过 CSS 选择器返回对元素的引用，例如 `'div.myclass'`

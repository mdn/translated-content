---
title: Document：getElementsByName() 方法
slug: Web/API/Document/getElementsByName
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

{{domxref("Document")}} 对象的 **`getElementsByName()`** 方法返回文档中具有给定 `name` 属性的所有元素的 {{domxref("NodeList")}} 集合。

## 语法

```js-nolint
getElementsByName(name)
```

### 参数

- `name`
  - : 我们要查找元素的 `name` 属性的值。

### 返回值

一个实时的 {{domxref("NodeList")}} 集合，这意味着当带有相同 `name` 的新元素被添加到文档中，或从文档中移除时，该集合会自动更新。

## 示例

```html
<!doctype html>
<html lang="en">
  <head>
    <title>示例：使用 document.getElementsByName</title>
  </head>
  <body>
    <input type="hidden" name="up" />
    <input type="hidden" name="down" />
  </body>
</html>
```

```js
const up_names = document.getElementsByName("up");
console.log(up_names[0].tagName); // 显示“INPUT”
```

## 备注

`name` 属性只在（X）HTML 文档中可用。

返回的 {{domxref("NodeList")}} 集合包含了*所有*具有给定 `name` 的元素，例如 {{htmlelement("meta")}}、{{htmlelement("object")}} 甚至包括根本不支持 `name` 属性的元素。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.getElementById()")}} 根据唯一 `id` 返回对元素的引用。
- {{domxref("document.getElementsByTagName()")}} 返回对具有相同[标签名](/zh-CN/docs/Web/API/Element/tagName)的元素的引用
- {{domxref("document.querySelector()")}} 通过 CSS 选择器（例如 `'div.myclass'`）返回对元素的引用。

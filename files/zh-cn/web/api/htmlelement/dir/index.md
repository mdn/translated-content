---
title: HTMLElement.dir
slug: Web/API/HTMLElement/dir
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.dir`** 属性用于获取或设置当前元素的元素内容的文本书写方向。

元素的文本书写方向性是指该文本呈现的方向（用于支持不同的语言系统）。阿拉伯语言和希伯来语是典型的使用 RTL 方向性的语言。

图片可以将其 `dir` 属性设置为“`rtl`”，在这种情况下，HTML 属性 `title` 和 `alt` 将被格式化并定义为“`rtl`”。

当表格的 `dir` 设置为“`rtl`”时，列是从右到左排列的。

当一个元素的 dir 设置为“`auto`”时，该元素的方向是根据其第一个强方向性字符决定的，或者默认为其父元素的方向性。

> [!NOTE]
> 浏览器可能允许用户改变 {{ HTMLElement("input") }} 和 {{ HTMLElement("textarea") }} 的方向性，以协助编写内容。Chrome 和 Safari 在输入字段的上下文菜单中提供方向性选项，而 Internet Explorer 和 Edge 使用组合键 <kbd>Ctrl</kbd> + 左 <kbd>Shift</kbd> 和 <kbd>Ctrl</kbd> + 右 <kbd>Shift</kbd>。Firefox 使用组合键 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>，但不更新 **`dir`** 属性值。

## 值

下列值的其中一个：

- `ltr`，表示从左到右；
- `rtl`，表示从右到左；
- `auto`，表示元素的方向必须根据元素的内容来确定。

## 示例

```js
const parg = document.getElementById("para1");
parg.dir = "rtl";
// 改变 ID 为“para1”的元素内容的文本书写方向。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.dir")}}
- HTML [`dir`](/zh-CN/docs/Web/HTML/Global_attributes/dir) 全局属性
- CSS 属性 {{cssxref("direction")}}
- CSS 伪类 {{cssxref(":dir")}}

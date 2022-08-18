---
title: <input type="checkbox">
slug: Web/HTML/Element/Input/checkbox
---
HTML input 元素 **`<input type="checkbox">`** 允许你为表单中（或不在表单中）的提交项选择一个单一值。

> **备注：** 若表单提交时，checkbox 未勾选，则提交的值并非为 value=unchecked；此时的值不会被提交到服务器。

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- {{htmlattrdef("checked")}}
  - : 当**type**属性的值为`checkbox 时`, 这个属性的存在表示 input 是否默认被选中。你可以将该属性设置为`checked="checked"，`或更简单地只设置为`checked。`
- {{htmlattrdef("value")}}
  - : 指定 input 的值。如果省略，获取该元素的值的结果为字符串"on"。
    请注意，如果 value 值发生改变后页面重新加载，Gecko 和 IE[会忽略 HTML 源代码中设置的 value 值](https://bugzilla.mozilla.org/show_bug.cgi?id=46845#c186)。
- {{htmlattrdef("indeterminate")}}
  - : 指定 checkbox 处于不定状态（在大多数平台，这样会产生一个划过 checkbox 的横线）。

## 示例

```html
<p>
  <input type="checkbox" id="cbox1" value="first_checkbox">
  <label for="cbox1">This is the first checkbox</label>
</p>
<p>
  <input type="checkbox" id="cbox2" value="second_checkbox" checked="checked">
  <label for="cbox2">This is the second checkbox, which is checked</label>
</p>
```

以上代码将产生 2 个 checkbox，如下所示：

{{EmbedLiveSample("Example")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

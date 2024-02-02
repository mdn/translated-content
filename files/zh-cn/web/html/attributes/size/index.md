---
title: HTML 属性：size
slug: Web/HTML/Attributes/size
l10n:
  sourceCommit: a78cecea4f3b1a7f35564a547052e163911ac491
---

{{HTMLSidebar}}

**`size`** 属性定义了 {{htmlelement('input')}} 元素的宽度和 {{htmlelement('select')}} 元素的高度。对于 `input`，如果 `type` 属性是 {{HTMLElement("input/text", "text")}} 或 {{HTMLElement("input/password", "password")}} ，那么它就是字符数。字符数必须是 0 或更大的整数。如果没有指定 `size`，或指定的值无效，则不会声明输入的大小，表单控件将采用基于用户代理的默认宽度。如果 CSS 目标元素的属性会影响宽度，则 CSS 优先。

`size` 属性对约束验证没有影响。

{{EmbedInteractiveExample("pages/tabbed/attribute-size.html", "tabbed-standard")}}

## 示例

通过在某些输入类型上添加 `size` 可以控制输入的宽度。在选择项上添加 size 会改变高度，从而定义在关闭状态下有多少选项是可见的。

```html
<label for="fruit">选择一种水果</label>
<input type="text" size="15" id="fruit" />
<label for="vegetable">选择一种蔬菜</label>
<input type="text" id="vegetable" />

<select name="fruits" size="5">
  <option>香蕉</option>
  <option>樱桃</option>
  <option>草莓</option>
  <option>榴莲</option>
  <option>蓝莓</option>
</select>

<select name="vegetables" size="5">
  <option>胡萝卜</option>
  <option>黄瓜</option>
  <option>菜花</option>
  <option>芹菜</option>
  <option>油麦菜</option>
</select>
```

{{EmbedLiveSample('示例', '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`maxlength`](/zh-CN/docs/Web/HTML/Attributes/maxlength)
- [`minlength`](/zh-CN/docs/Web/HTML/Attributes/minlength)
- [`pattern`](/zh-CN/docs/Web/HTML/Attributes/pattern)

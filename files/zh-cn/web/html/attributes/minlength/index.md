---
title: HTML 属性：minlength
slug: Web/HTML/Attributes/minlength
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

**`minlength`** 属性定义了用户可以在 {{htmlelement('input')}} 或 {{htmlelement('textarea')}} 中输入的[字符串长度](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)的最小值。该属性的值必须是非负整数。

字符串长度是以 UTF-16 码元为单位进行计算的，通常（[对大多数文本而言](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length#长度不等于字符数的字符串)）等同于字符个数。如果未指定 `minlength`，或指定了无效值，则输入将没有最小长度限制。该值必须小于或等于 [maxlength](/zh-CN/docs/Web/HTML/Attributes/maxlength) 的值，否则该值将永远无效，因为不可能同时满足这两个条件。

如果字段文本值的长度小于 `minlength` 的 UTF-16 码元长度，输入将无法通过约束验证，{{domxref('validityState.tooShort')}} 将返回 `true`。只有当用户更改值时，才会应用限制验证。一旦提交失败，某些浏览器会显示错误信息，说明所需的最小长度和当前长度。

`minlength` 不意味着输入为 [`required`](/zh-CN/docs/Web/HTML/Attributes/required)；只有当用户输入了一个值时，输入才会违反 `minlength` 约束。如果输入不是 `required` 的，即使设置了 `minlength`，也可以提交空字符串。

{{EmbedInteractiveExample("pages/tabbed/attribute-minlength.html", "tabbed-shorter")}}

## 示例

通过指定 `minlength="5"`，值要么为空，要么至少为 5 个字符时才为有效。

```html
<label for="fruit">输入长度至少为 5 个字母的水果名称</label>
<input type="text" minlength="5" id="fruit" />
```

我们可以使用伪类，根据值是否有效来设计元素样式。只要值为空或其长度大于等于 5，该值就是有效的。如 _Lime_ 是无效的，而 _lemon_ 是有效的。

```css
input {
  border: 2px solid currentcolor;
}
input:invalid {
  border: 2px dashed red;
}
input:invalid:focus {
  background-image: linear-gradient(pink, lightgreen);
}
```

{{EmbedLiveSample('示例', '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`maxlength`](/zh-CN/docs/Web/HTML/Attributes/maxlength)
- [`size`](/zh-CN/docs/Web/HTML/Attributes/size)
- [`pattern`](/zh-CN/docs/Web/HTML/Attributes/pattern)
- [约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)
- [表单验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}

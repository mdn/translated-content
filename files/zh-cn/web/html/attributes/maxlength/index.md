---
title: HTML 属性：maxlength
slug: Web/HTML/Attributes/maxlength
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

**`maxlength`** 属性定义了用户可以在 {{htmlelement('input')}} 或 {{htmlelement('textarea')}} 中输入的[字符串长度](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length)的最大值。该属性的值必须是非负整数。

字符串长度是以 UTF-16 码元为单位进行计算的，通常（[对于大多数语言脚本](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length#长度不等于字符数的字符串)）等同于字符个数。如果未指定 `maxlength`，或指定了无效值，则输入将没有最大长度限制。

任何 `maxlength` 的值必须大于或等于 [`minlength`](/zh-CN/docs/Web/HTML/Attributes/minlength) 的值（如果存在且有效）。如果字段文本值的长度超过了 `maxlength` 的 UTF-16 码元长度，输入将无法通过约束验证。约束验证仅在用户更改值时应用。

### 约束验证

虽然浏览器通常会阻止用户输入超过 maxlength 属性允许的文本长度，但如果输入的长度确实超出了 maxlength 的限制，{{domxref("ValidityState")}} 对象的 {{domxref("ValidityState.tooLong", "tooLong")}} 属性会返回 true。

{{EmbedInteractiveExample("pages/tabbed/attribute-maxlength.html", "tabbed-shorter")}}

## 示例

```html
<input type="password" maxlength="4" />
```

{{EmbedLiveSample('示例', '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`minlength`](/zh-CN/docs/Web/HTML/Attributes/minlength)
- [`size`](/zh-CN/docs/Web/HTML/Attributes/size)
- [`pattern`](/zh-CN/docs/Web/HTML/Attributes/pattern)
- [约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)
- [表单验证](/zh-CN/docs/Learn/Forms/Form_validation)
- {{htmlelement('input')}}

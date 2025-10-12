---
title: HTML 属性：required
slug: Web/HTML/Reference/Attributes/required
l10n:
  sourceCommit: c66d3e5e446bf5ebfcef528c4a766bea6a08c879
---

**`required`** [布尔](/zh-CN/docs/Glossary/Boolean/HTML)属性（如果存在）表示用户在提交输入所属的表单前必须为其指定一个值。

`{{HTMLElement("input/text", "text")}}`、`{{HTMLElement("input/search", "search")}}`、`{{HTMLElement("input/url", "url")}}`、`{{HTMLElement("input/tel", "tel")}}`、`{{HTMLElement("input/email", "email")}}`、`{{HTMLElement("input/password", "password")}}`、`{{HTMLElement("input/date", "date")}}`、`{{HTMLElement("input/month", "month")}}`、`{{HTMLElement("input/week", "week")}}`、`{{HTMLElement("input/time", "time")}}`、`{{HTMLElement("input/datetime-local", "datetime-local")}}`、`{{HTMLElement("input/number", "number")}}`、`{{HTMLElement("input/checkbox", "checkbox")}}`、`{{HTMLElement("input/radio", "radio")}}`、`{{HTMLElement("input/file", "file")}}` {{HTMLElement("input")}} 类型以及 {{HTMLElement("select")}} 和 {{HTMLElement("textarea")}} 表单控件元素均支持 `required` 属性。如果这些输入类型和元素中出现了该属性，则会匹配 {{cssxref(':required')}} 伪类。如果不包含该属性，则会匹配 {{cssxref(':optional')}} 伪类。

{{HTMLElement("input/range", "range")}} 和 {{HTMLElement("input/color", "color")}} 不支持该属性，也与之无关，因为两者都有默认值。`color` 的默认值为 `#000000`。`range` 的默认值为 `min` 和 `max` 之间的中点，如果没有声明，在大多数浏览器中，`min` 和 `max` 的默认值分别是 0 和 100。{{HTMLElement("input/hidden", "hidden")}} 也不支持该属性，因为用户不可能填写隐藏的表单。`required` 属性也不支持任何按钮 input 类型，包括 {{HTMLElement("input/image","image")}}。

对于由 {{HTMLElement("input/radio", "radio")}} 按钮组成的同名组，如果该组中的某个单选按钮具有 `required` 属性，则必须选中该组中的某个单选按钮，但该单选按钮不一定是应用了该属性的单选按钮。为改善代码维护，建议在组中的每个同名单选按钮中都包含 `required` 属性，否则一个都不包含。

如果是同名的一组 {{HTMLElement("input/checkbox", "checkbox")}} 输入类型，则只有带有 `required` 属性的复选框是必选的。

> [!NOTE]
> 设置 [`aria-required="true"`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) 会告诉屏幕阅读器某个元素（任何元素）是必需的，但与元素的可选性无关。

### 属性交互

由于只读字段不能更改，因此 `required` 对同时指定了 [`readonly`](/zh-CN/docs/Web/HTML/Reference/Attributes/readonly) 属性的输入没有任何影响。

### 可用性

在包含 `required` 属性时，应在控件附近提供可见提示，告知用户 {{HTMLElement("input")}}、{{HTMLElement("select")}} 或 {{HTMLElement("textarea")}} 为必填项。此外，使用 {{cssxref(':required')}} 伪类来定位必填表单控件，并对其进行样式设计，以表明它们是必填的。这可以提高视力正常用户的可用性。辅助技术应根据 required 属性告知用户表单控件是必填的，但添加 `aria-required="true"` 也无妨，以避免浏览器/屏幕阅读器组合还不支持 `required`。

### 约束验证

如果元素为必填元素，且元素值为空字符串，则该元素会受到 {{domxref('ValidityState.valueMissing','valueMissing')}} 的影响，元素将匹配 {{cssxref(':invalid')}} 伪类。

## 无障碍考虑

向用户提供提示，告知他们特定表单控件是必填的。确保信息传递是多方面的，例如通过文字、颜色、标记和属性，这样，无论用户是色盲、存在认知差异还是使用了屏幕阅读器，都能理解相关要求。

## 示例

### HTML

```html
<form>
  <div class="group">
    <input type="text" />
    <label>普通</label>
  </div>
  <div class="group">
    <input type="text" required />
    <label>必需</label>
  </div>
  <input type="submit" />
</form>
```

### 结果

{{EmbedLiveSample('示例')}}

## 参见

- {{domxref('validityState.valueMissing')}}
- {{cssxref(':required')}} 和 {{cssxref(':optional')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}

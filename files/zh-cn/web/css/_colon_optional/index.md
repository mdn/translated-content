---
title: ":optional"
slug: Web/CSS/:optional
---

{{CSSRef}}

**`:optional`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示任何未设置 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性的 {{HTMLElement("input")}}、{{HTMLElement("select")}} 或 {{HTMLElement("textarea")}} 元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-optional.html", "tabbed-standard")}}

这个伪类很有用，可以为不是必须提交的表单字段设置样式。

> **备注：** {{cssxref(":required")}} 伪类选择*必填*表单字段

## 语法

```css
:optional {
  /* ... */
}
```

## 示例

### 可选字段具有紫色边框

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">Enter a URL:</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">Enter an email address:</label>
    <input type="email" id="email_input" required />
  </div>
</form>
```

#### CSS

```css
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:optional {
  border-color: rebeccapurple;
  border-width: 3px;
}
```

#### 结果

{{EmbedLiveSample('可选字段具有紫色边框', 600, 120)}}

## 无障碍考虑

如果[表单](/zh-CN/docs/Web/HTML/Element/form)包含可选的 {{htmlelement("input")}}，则应该使用 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性来指示必填输入。这将确保使用辅助技术（例如屏幕阅读器）导航的人能够了解哪些输入需要有效内容以确保成功提交表单。

此外，还应在视觉上指示必填输入，通常使用描述性文本和/或图标，以避免仅依赖于颜色来传达含义。

- [MDN 理解 WCAG，指南 3.3 解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [了解成功标准 3.3.2 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他验证相关的伪类：{{ cssxref(":required") }}、{{ cssxref(":invalid") }} 和 {{ cssxref(":valid") }}
- [表单数据校验](/zh-CN/docs/Learn/Forms/Form_validation)

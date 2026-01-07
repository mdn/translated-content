---
title: :required
slug: Web/CSS/Reference/Selectors/:required
---

**`:required`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)表示任何设置了 [`required`](/zh-CN/docs/Web/HTML/Reference/Elements/input#required) 属性的 {{HTMLElement("input")}}、{{HTMLElement("select")}} 或 {{HTMLElement("textarea")}} 元素。

{{InteractiveExample("CSS Demo: :required", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

.req {
  color: red;
}

*:required {
  background-color: gold;
}
```

```html interactive-example
<form>
  <label for="name">Name: <span class="req">*</span></label>
  <input id="name" name="name" type="text" required />

  <label for="birth">Date of Birth:</label>
  <input id="birth" name="birth" type="date" />

  <label for="origin"
    >How did you find out about us? <span class="req">*</span></label
  >
  <select id="origin" name="origin" required>
    <option>Google</option>
    <option>Facebook</option>
    <option>Advertisement</option>
  </select>
  <p><span class="req">*</span> - Required field</p>
</form>
```

这个伪类很有用，可以突出显示在提交表单之前必须具有有效数据的字段。

> [!NOTE]
> {{cssxref(":optional")}} 伪类选择*可选*表单字段。

## 语法

```css
:required {
  /* ... */
}
```

## 示例

### 必填字段具有红色边框

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

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

#### 结果

{{EmbedLiveSample('示例', 600, 120)}}

## 无障碍考虑

必填的 {{htmlelement("input")}} 应该应用 required 属性。这将确保使用辅助技术（例如屏幕阅读器）导航的人能够了解哪些输入需要有效内容以确保成功提交。

如果表单还包含[可选](/zh-CN/docs/Web/CSS/Reference/Selectors/:optional)输入，则不应仅仅依赖于颜色这一种传达意义的方式在视觉上指示必填输入。通常还应使用描述性文本和/或图标。

- [MDN 理解 WCAG，指南 3.3 解释](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [了解成功标准 3.3.2 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与验证相关的伪类：{{cssxref(":optional")}}、{{cssxref(":invalid")}} 和 {{cssxref(":valid")}}
- [表单数据校验](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)

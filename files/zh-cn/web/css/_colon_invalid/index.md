---
title: ":invalid"
slug: Web/CSS/:invalid
---

{{CSSRef}}

**`:invalid`** 是 [CSS](/zh-CN/docs/Web/CSS) [伪类选择器](/zh-CN/docs/Web/CSS/Pseudo-classes)，用来选择任何未通过[验证](/zh-CN/docs/Web/HTML/Constraint_validation)的 {{HTMLElement("form")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("input")}} 或其他{{HTMLElement("form", "表单")}}元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-invalid.html", "tabbed-shorter")}}

该伪类选择器可用于突出显示用户的字段错误。

## 语法

```css
:invalid {
  /* ... */
}
```

## 示例

### 使用颜色标识元素以显示验证结果

#### HTML

```html
<form>
  <div class="field">
    <label for="url_input">输入一个 URL：</label>
    <input type="url" id="url_input" />
  </div>

  <div class="field">
    <label for="email_input">输入一个电子邮件地址：</label>
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

input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
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

{{EmbedLiveSample('使用颜色标识元素以显示验证结果', 600, 200)}}

### 展示分阶段的表单部分

在这个例子中，我们使用 `:invalid` 以及[通用兄弟选择器](/zh-CN/docs/Web/CSS/General_sibling_combinator)（`~`）来分阶段地展示一个表单，使得表单最初只显示第一个完成的项目，当用户完成每一个项目时，表单会显示下一个项目。当整个表单完成后，用户可以提交它。

#### HTML

```html
<form>
  <fieldset>
    <label for="form-name">姓名</label><br />
    <input type="text" name="name" id="form-name" required />
  </fieldset>

  <fieldset>
    <label for="form-email">电子邮件</label><br />
    <input type="email" name="email" id="form-email" required />
  </fieldset>

  <fieldset>
    <label for="form-message">信息</label><br />
    <textarea name="message" id="form-message" required></textarea>
  </fieldset>

  <button type="submit" name="send">提交</button>
</form>
```

#### CSS

```css
/* 在无效的字段集后隐藏该字段集： */
fieldset:invalid ~ fieldset {
  display: none;
}

/* 在表单无效时，将按钮变暗并禁用它： */
form:invalid button {
  opacity: 0.3;
  pointer-events: none;
}

input,
textarea {
  box-sizing: border-box;
  width: 100%;
  font-family: monospace;
  padding: 0.25em 0.5em;
}

button {
  width: 100%;
  border: thin solid darkgrey;
  font-size: 1.25em;
  background-color: darkgrey;
  color: white;
}
```

#### 结果

{{EmbedLiveSample('展示分阶段的表单部分', 600, 300)}}

## 无障碍考虑

红色通常用于表示输入无效。某些色盲患者将无法确定输入的状态，除非有不依赖颜色传达意义的附加指示器。通常使用描述性文字和（或）图标。

- [MDN 理解 WCAG，指南 1.4 的解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [理解成功标准 1.4.1 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## 注意

### 单选按钮

如果一组单选按钮中的任何一个是 `reuqire`，并且未选择该组中的任何按钮，则应用 `:invalid` 伪类到所有按钮上（分组的单选按钮共享 `name` 属性的相同值）。

### Gecko 默认设置

默认情况下，Gecko 不对 `:invalid` 伪类应用样式。但是，对于 `:invalid` 的某些子集情况，它会应用样式（使用 {{Cssxref("box-shadow")}} 属性显示红色“发光”）。此时，应用的是 {{cssxref(":user-invalid")}} 伪类。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他验证相关的伪类：{{ cssxref(":required") }}、{{ cssxref(":optional") }}、{{ cssxref(":valid") }}
- 相关的 Mozilla 伪类：{{cssxref(":user-invalid")}}、{{cssxref(":-moz-submit-invalid")}}
- [表单数据验证](/zh-CN/docs/Learn/HTML/Forms/Form_validation)
- 从 JavaScript 中访问[有效性状态](/zh-CN/docs/Web/API/ValidityState)

---
title: ":valid"
slug: Web/CSS/:valid
---

{{CSSRef}}

`:valid` CSS [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示内容[验证](/zh-CN/docs/Web/HTML/HTML5/Constraint_validation)正确的{{ HTMLElement("input") }} 或其他 {{ HTMLElement("form") }} 元素。这能简单地将校验字段展示为一种能让用户辨别出其输入数据的正确性的样式。

```css
/* Selects any valid <input> */
input:valid {
  background-color: powderblue;
}
```

该伪类对于高亮正确字段是很有用的。

## 语法

{{csssyntax}}

## 例子

参见 {{cssxref(":invalid")}}。

## Accessibility concerns

绿色常用于表示有效输入。但某些色盲的人将无法确定输入的状态（颜色），除非使用不依赖于颜色来传达意义的附加指示器。通常，指示器使用描述性文本和（或）图标。

- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ cssxref(":invalid") }}, {{ cssxref(":required") }}, {{ cssxref(":optional") }}
- [Form data validation](/zh-CN/docs/Learn/HTML/Forms/Form_validation)

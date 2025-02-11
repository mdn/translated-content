---
title: :autofill
slug: Web/CSS/:autofill
---

{{CSSRef}}

**`:autofill`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)将在浏览器自动填充表单中的 {{HTMLElement("input")}} 元素的值时匹配该 input 元素。如果用户编辑了该字段，则该类将不再匹配。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-autofill.html", "tabbed-shorter")}}

> [!NOTE]
> 许多浏览器的用户代理样式表在其 `:-webkit-autofill` 样式声明中使用 `!important`，使它们无法被网页覆盖，除非通过 JavaScript 的方式。例如，Chrome 在其内部样式表中有以下内容：
>
> ```css
> background-color: rgb(232, 240, 254) !important;
> background-image: none !important;
> color: -internal-light-dark(black, white) !important;
> ```
>
> 这意味着你无法在自己的样式规则中设置 {{cssxref('background-color')}}、{{cssxref('background-image')}} 或 {{cssxref('color')}} 等属性。

## 语法

```css
:autofill {
  /* ... */
}
```

## 示例

以下示例演示了如何使用 `:autofill` 伪类来更改浏览器自动填充后的文本框的边框。为了最佳的浏览器兼容性，建议同时使用 `:-webkit-autofill` 和 `:autofill` 伪类。

```css
input {
  border: 3px solid grey;
  border-radius: 3px;
}

input:-webkit-autofill {
  border: 3px solid blue;
}
input:autofill {
  border: 3px solid blue;
}
```

```html
<form method="post" action="">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" autocomplete="email" />
</form>
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Chromium issue 46543：自动填充输入文本框黄色背景高亮无法关闭](https://crbug.com/46543)
- [WebKit bug 66032：允许网站开发者覆盖自动填充字段的颜色。](https://webkit.org/b/66032)
- [Mozilla bug 740979：在具有自动填充值的输入元素上实现 `:-moz-autofill` 伪类](https://bugzil.la/740979)
- [用户界面模块 Level 4：更多选择器](https://wiki.csswg.org/spec/css4-ui#more-selectors)

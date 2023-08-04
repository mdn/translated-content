---
title: min()
slug: Web/CSS/min
---

{{CSSRef}}

**`min()`** [CSS](/zh-CN/docs/Web/CSS) 方法允许你从逗号分隔符表达式中选择一个最小值作为 CSS 的属性值。`min()` 方法可以用于以下任何属性中 {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}},{{CSSxRef("&lt;number&gt;")}}, 或者 {{CSSxRef("&lt;integer&gt;")}}。

```css
/* property: min(expression [, expression]) */
width: min(1vw, 4em, 80px);
```

在上面的例子中，宽度最多是 80px。如果视口的宽度小于 800px，或者一个 em 的宽度小于 20px，则会更窄。换句话说，最大宽度是 80px，

## 语法

`min()` 方法拥有一个或多个逗号分隔符表达式作为参数，表达式的值中最小的值作为参数值。表达式可以是数学函数 (查看 {{CSSxRef("calc", "calc()")}} 了解更多), 字面量，或者其他表达式，比如 {{CSSxRef("attr", "attr()")}}, 可以求得有效值的的类型 (比如 {{CSSxRef("&lt;length&gt;")}})。如果你愿意，你甚至可以在表达式中给每个值一个不同的单位。并且在需要的地方只用圆括号改变计算优先级。

### 注意

- Math expressions involving percentages for widths and heights on table columns, table column groups, table rows, table row groups, and table cells in both auto and fixed layout tables _may_ be treated as if `auto` had been specified.`max`
- It is permitted to nest `max()` and other `min()` functions as expression values. The expressions are full math expressions, so you can use direct addition, subtraction, multiplication and division without using the calc() function itself.
- The expression can be values combining the addition ( + ), subtraction ( - ), multiplication ( \* ) and division ( / ) operators, using standard operator precedence rules. Make sure to put a space on each side of the + and - operands. The operands in the expression may be any `<length>` syntax value. You can use different units for each value in your expression. You may also use parentheses to establish computation order when needed.
- Oftentimes you will want to comine `min()` and `max()` values, or use `min()` within a `clamp()` or `calc()` function.
- You can provide more than two arguments, if you have multiple constraints to apply.

### 形式语法

{{CSSSyntax}}

## 示例

### Growing images to a maximum size

`min()` 让我们在设置图像的最大宽度时更简单。在下面这个例子中，在小型设备上宽度拉伸为 window 的一半，但在大型设备上，不超过 300px，不使用媒体查询：

```css
.logo {
  width: min(50vw, 300px);
}
```

```html
<img
  src="https://developer.mozilla.org/static/img/web-docs-sprite.svg"
  alt="MDN Web Docs"
  class="logo" />
```

{{EmbedLiveSample("Growing_images_to_a_maximum_size", "100%", "60")}}

在这个例子中，除非视口比 600px 更窄，否则 logo 的宽会被设置为 300px，到时候，它会随着视口的缩小而缩小，而且总是视口宽度的 50%。

### 给 label 和 input 设置最大值

CSS 方法的另一个用途时设置响应式组件（form）的最大尺寸：让 label 和 input 的宽度随着组件的缩小而缩小。

看下面的样式：

```css
input,
label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

form {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
```

这里，form 的 margin，border，padding 总是它父元素的宽度的 100%。我们声明 input 和 label 的宽度比 form 的 40% 还小或者 400px 宽，只要取决于哪一个最小。换句话说，input 和 label 的最大宽度就是 400px，最窄就是 form 的 40%。因此看起来会显得很小。

```html
<form>
  <label>Type something:</label>
  <input type="text" />
</form>
```

{{EmbedLiveSample("给 label 和 input 设置最大值", "100%", "80")}}

Think of the `min()` function as finding the maximum value allowed for a property.

## 无障碍问题

当`min()` 用于控制文本大小时，要保证文本足够大以便于阅读。建议把 min() 方法嵌入到 {{CSSxRef("max", "max()")}} 中， [relative length unit](/zh-CN/docs/Web/CSS/length#Relative_length_units) 这样就可以便于阅读，比如：

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

这用于保证最小值是 1rem，这样在页面缩放时文本也会缩放。

- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("max", "max()")}}
- [CSS Values](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)

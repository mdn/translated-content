---
title: calc()
slug: Web/CSS/calc
---

{{CSSRef}}

calc() 此 [CSS](/zh-CN/docs/Web/CSS) 函数允许在声明 CSS 属性值时执行一些计算。它可以用在如下场合：{{cssxref("&lt;length&gt;")}}、{{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}、{{cssxref("&lt;time&gt;")}}、{{cssxref("&lt;percentage&gt;")}}、{{cssxref("&lt;number&gt;")}}、或 {{cssxref("&lt;integer&gt;")}}。

## 语法

```css
/* property: calc(expression) */
width: calc(100% - 80px);
```

此 calc() 函数用一个表达式作为它的参数，用这个表达式的结果作为值。这个表达式可以是任何如下操作符的组合，采用标准操作符处理法则的简单表达式。

- `+`
  - : 加法。
- `-`
  - : 减法。
- `*`
  - : 乘法，乘数中至少有一个是 {{cssxref("&lt;number&gt;")}}。
- `/`
  - : 除法，除数（`/` 右面的数）必须是 {{cssxref("&lt;number&gt;")}}。

表达式中的运算对象可以使用任意 {{cssxref("&lt;length&gt;")}} 值。如果你愿意，你可以在一个表达式中混用这类值的不同单位。在需要时，你还可以使用小括号来建立计算顺序。

### 备注

- **`+` 和 `-` 运算符的两边必须要有空白字符。**比如，`calc(50% -8px)` 会被解析成为一个无效的表达式，解析结果是：一个百分比 后跟一个负数长度值。而加有空白字符的、有效的表达式 `calc(8px + -50%)` 会被解析成为：一个长度 后跟一个加号 再跟一个负百分比。
- `*` 和 `/` 这两个运算符前后不需要空白字符，但如果考虑到统一性，仍然推荐加上空白符。
- 用 0 作除数会使 HTML 解析器抛出异常。
- 涉及自动布局和固定布局的表格中的表列、表列组、表行、表行组和表单元格的宽度和高度百分比的数学表达式，`auto` 可视为已指定。
- `calc()` 函数支持嵌套，但支持的方式是：把被嵌套的 `calc()` 函数全当成普通的括号。（译者注：所以，函数内直接用括号就好了。）

### 形式化语法

{{csssyntax}}

## 例子

### 使用指定的外边距定位一个对象

使用 `calc()` 可以很容易的为一个对象设置一个左右两边相等的外边距。在这个例子中，使用 CSS 创建了一个横跨整个窗口的 banner，该 banner 左右两边各有一个距离窗口边缘 40 像素的间距：

```css
.banner {
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
}
```

```html
<div class="banner">This is a banner!</div>
```

{{EmbedLiveSample('使用指定的外边距定位一个对象', '100%', '60')}}

### 自动调整表单域的大小以适应其容器的大小

`calc()` 的另外一个用例是用来确保一个表单域的大小适合当前的可用空间，而不会在保持合适的外边距的同时，因挤压超出其容器的边缘。

看一下下面的 CSS：

```css
input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}

#formbox {
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

这个例子中，form 元素自身使用了窗口可用宽度的 1/6，然后，为了让 form 元素内部的 input 元素保持合适的大小，我们再一次使用了 `calc()`，让它的宽度为其容器的宽度减 1em。下面的 HTML 使用了上面的 CSS：

```html
<form>
  <div id="formbox">
    <label>Type something:</label>
    <input type="text" />
  </div>
</form>
```

{{EmbedLiveSample('自动调整表单域的大小以适应其容器的大小', '100%', '80')}}

### 使用 CSS 变量嵌套使用 `calc()`

我们来看一下下面的代码：

```plain
.foo {
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

在所有的变量都被展开后，`widthC` 的值就会变成 `calc( calc( 100px / 2) / 2)`，然后，当它被赋值给 `.foo` 的 width 属性时，所有内部的这些 `calc()`（无论嵌套的有多深）都将会直接被扁平化为一个括号（原文：be flattened to just parentheses），所以这个 `width` 属性的值就直接相当于 `calc( ( 100px / 2) / 2)` 了，或者说就变成 `25px` 了。简而言之：一个 `calc()` 里面的 `calc()` 就仅仅相当于是一个括号。

## 无障碍相关考量

当 `calc()` 被用于控制文本的长度时，确保值中包含一个[相对长度单位](/zh-CN/docs/Web/CSS/length#%E7%9B%B8%E5%AF%B9%E9%95%BF%E5%BA%A6%E5%8D%95%E4%BD%8D)，例如：

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

这可以保证文本的大小会跟随页面一同缩放。

- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Firefox 4: CSS3 calc() ✩ Mozilla Hacks – the Web developer blog](https://hacks.mozilla.org/2010/06/css3-calc/)

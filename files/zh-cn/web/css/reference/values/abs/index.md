---
title: abs()
slug: Web/CSS/Reference/Values/abs
l10n:
  sourceCommit: b09d6e2402f997214bb80c93aba8ea1148e120d5
---

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions) **`abs()`** 返回其参数的绝对值，并且返回值的类型与输入类型相同。

## 语法

```css
/* abs( <calc-sum> ) */
abs(20% - 100px)
abs(var(--gradientAngle))
```

### 参数

`abs()` 函数只接受一个参数。

- `<calc-sum>`
  - : 一个会解析为 {{cssxref("number")}}、{{cssxref("dimension")}}、{{cssxref("percentage")}} 或 {{cssxref("calc-keyword")}} 的表达式或计算式。

### 返回值

`<calc-sum>` 的绝对值。

- 如果 `<calc-sum>` 的数值为正数或 `0⁺`，则函数返回 `<calc-sum>`。
- 否则，返回 `-1 * <calc-sum>`。

## 形式语法

{{CSSSyntax}}

## 示例

### 正值变量

`abs()` 函数可用于确保某个值始终为正数。在下面的示例中，使用 CSS 自定义属性 `--font-size` 作为 {{CSSxRef("font-size")}} 的值。将该自定义属性包裹在 `abs()` 中，可以把负值转换为正值。

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### 控制渐变角度方向

你也可以使用 `abs()` 函数来控制渐变的方向。在下面的示例中，如果角度是 -45deg，渐变将从红色开始过渡到蓝色。通过使用 `abs()` 将该值转换为正数后，渐变将从蓝色开始过渡到红色。

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### 向后兼容的回退方案

在不支持 CSS `abs()` 函数的浏览器中，可以使用 CSS {{CSSxRef("max")}} 函数来实现相同的效果：

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

我们使用 {{CSSxRef("max")}} 函数从两个值中返回较大（即更接近正数）的那个：`var(--lh)` 或 `-1 * var(--lh)`。无论 `--lh` 是正数还是负数，计算得到的返回值都会是正数，也就是其绝对值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("sign")}}

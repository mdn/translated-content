---
title: "@supports"
slug: Web/CSS/@supports
---

{{CSSRef}}

**`@supports`** [CSS](/zh-CN/docs/Web/CSS) [at-rule](/zh-CN/docs/Web/CSS/At-rule) 您可以指定依赖于浏览器中的一个或多个特定的 CSS 功能的支持声明。这被称为*特性查询*。该规则可以放在代码的顶层，也可以嵌套在任何其他[条件组规则中](/zh-CN/docs/Web/CSS/At-rule#Conditional_group_rules)。

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}
```

```css
@supports not (display: grid) {
  div {
    float: right;
  }
}
```

在 JavaScript 中，可以通过 CSS 对象模型接口 {{DOMxRef("CSSSupportsRule")}} 来访问 `@supports`。

## 语法

`@supports` at-rule 由一组样式声明和一条*支持条件*构成。支持条件由一条或多条使用 逻辑与（`and`）、逻辑或（`or`）、逻辑非（`not`）结合的名称 - 值对（name-value pair）组成。可以使用圆括号调整操作符的优先级。

### 声明语法

最基本的支持条件就是 CSS 声明，也就是一个 CSS 属性后跟一个值，中间用冒号分开。如果 {{cssxref("transform-origin")}} 的实现语法认为 `5% 5%` 是有效的值，则下面的表达式会返回 true。

```css
@supports (transform-origin: 5% 5%) {
}
```

### 函数语法

第二种基本支持条件是支持函数，几乎所有浏览器都支持这种语法，但函数本身仍在标准化进程中。

#### `selector()` {{Experimental_Inline}}

测试浏览器是否支持经过测试的选择器语法。如果浏览器支持[子组合器](/zh-CN/docs/Web/CSS/Child_combinator)，则以下示例返回 true：

```css
@supports selector(A > B) {
}
```

### `not` 操作符

将 `not` 操作符放在任何表达式之前就能否定一条表达式。如果 {{CSSxRef("transform-origin")}} 的实现语法认为 `10em 10em 10em` 是**无效**的，则下面的表达式会返回 true。

```css
@supports not (transform-origin: 10em 10em 10em) {
}
```

和其他操作符一样，`not` 操作符可以应用在任意复杂度的表达式上。下面的几个例子中都是合法的表达式：

```css
@supports not (not (transform-origin: 2px)) {
}
@supports (display: grid) and (not (display: inline-grid)) {
}
```

> **备注：** 如果 `not` 操作符位于表达式的最外层，则没有必要使用圆括号将它括起来。但如果要将该表达式与其他表达式连接起来使用，比如 `and` 和 `or`，则需要外面的圆括号。

### `and` 操作符

`and` 操作符用来将两个原始的表达式做逻辑与后生成一个新的表达式，如果两个原始表达式的值**都为真**，则生成的表达式也为真。在下例中，当且仅当两个原始表达式同时为真时，整个表达式才为真：

```css
@supports (display: table-cell) and (display: list-item) {
}
```

可以将多个合取词并置而不需要更多的括号。以下两者都是等效的：

```css
@supports (display: table-cell) and (display: list-item) and (display: run-in) {
}
@supports (display: table-cell) and ((display: list-item) and (display: run-in)) {
}
```

### `or` 操作符

`or` 操作符用来将两个原始的表达式做逻辑或后生成一个新的表达式，如果两个原始表达式的值**有一个或者都**为真，则生成的表达式也为真。在下例中，当两个原始表达式中至少有一个为真时，整个表达式才为真：

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

可以将多个析取词并置而不需要更多的括号。以下两者都是等效的：

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or
  (-o-transform-style: preserve) or (-webkit-transform-style: preserve) {
}

@supports (transform-style: preserve-3d) or
  (
    (-moz-transform-style: preserve-3d) or
      (
        (-o-transform-style: preserve-3d) or
          (-webkit-transform-style: preserve-3d)
      )
  ) {
}
```

> **备注：** 在使用 `and` 和 `or` 操作符时，如果是为了定义多个表达式的执行顺序，则必须使用圆括号。如果不这样做的话，该条件就是无效的，会导致整个 at-rule 失效。

### 形式化语法

{{CSSSyntax}}

## 示例

### 检测是否支持指定的 CSS 属性

```css
@supports (animation-name: test) {
  /* 如果支持不带前缀的 animation-name，则下面指定的 CSS 会生效 */
  @keyframes {
    /* @supports 是一个 CSS 条件组 at-rule，它可以包含其他相关的 at-rules */
  }
}
```

### 检测是否支持指定的 CSS 属性或者其带前缀版本

```css
@supports (
  (perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px)
    or (-ms-perspective: 10px) or (-o-perspective: 10px)
) {
  /* 如果支持不带前缀以及带前缀的 perspective 属性，则下面指定的 CSS 会生效 */
}
```

### 检测是否不支持指定的 CSS 属性

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  /* 这里的 CSS 代码用来模拟 text-align-last:justify */
}
```

### 测试是否支持自定义属性

```css
@supports (--foo: green) {
  body {
    color: var(--varName);
  }
}
```

### 测试是否支持选择器 (eg. {{CSSxRef(":is", ":is()")}})

{{SeeCompatTable}}

```css
/* 这条 CSS 规则在不支持 is:() 的浏览器中无效 */
:is(ul, ol) > li {
  /* 支持 :is(...) 选择器时，这里的 CSS 生效 */
}

@supports not selector(:is(a, b)) {
  /* 不支持 :is() 时的备选方案 */
  ul > li,
  ol > li {
    /* 以上给不支持 :is(...) 的浏览器展开了 CSS 选择器规则 */
  }
}

@supports selector(:nth-child(1n of a, b)) {
  /* 这条规则需要内嵌在 @supports 块内。
     否则该规则在支持 :nth-child(…) 但不支持其内的 `of` 参数的浏览器中，
     只有部分生效 */
  :is(:nth-child(1n of ul, ol) a, details > summary) {
    /* 当:is(...) 选择器以及 :nth-child(…) 的 `of` 参数都支持时，
        这里的 CSS 会生效 */
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用特性查询](/zh-CN/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- The CSSOM class {{DOMxRef("CSSSupportsRule")}}, and the {{DOMxRef("CSS.supports()")}} method that allows the same check to be performed via JavaScript.

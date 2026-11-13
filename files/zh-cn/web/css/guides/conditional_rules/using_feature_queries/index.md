---
title: 使用特性查询
slug: Web/CSS/Guides/Conditional_rules/Using_feature_queries
---

**特性查询** 使用 CSS 的 at 规则 [@supports](/zh-CN/docs/Web/CSS/Reference/At-rules/@supports) 创建。它给予 web 开发者一种测试浏览器是否有对某个确定特性的支持，而后提供基于测试结果生效的 CSS 的方法。在此指南中你将学习如何使用特性查询实现渐进式增强。

## 语法

CSS 特性查询是 [CSS Conditional Rules module](https://drafts.csswg.org/css-conditional-3/) 标准的一部分，这一标准也包含了媒体查询 [@media](/zh-CN/docs/Web/CSS/Reference/At-rules/@media) 规则；在你使用特性查询的时候，你会发现它们的行为方式与媒体查询类似。不同点在于媒体查询是测试网页运行的环境相关内容，但特性查询测试的是浏览器对 CSS 特性的支持。

特性查询由 `@supports` 规则组成，紧跟着是属性名以及你想测试的属性值。你不能测试一个单单的属性名比如 `display`；规则需要你提供一个属性名以及一个值：

```css
@supports (property: value) {
  将要应用的 CSS 规则
}
```

比如，若你想检测一个浏览器是否支持 `row-gap` 属性，你应当写下如下的特性查询。大部分情况下这个查询结果与你所使用的值无关——也就是如果你想仅仅检测浏览器是否支持这个 CSS 属性，那么任何有效的属性值都可以。

```html live-sample___simple
<div class="box">
  If your browser supports the row-gap property, the border will be dashed and
  text will be red.
</div>
```

```css live-sample___simple
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (row-gap: 10px) {
  .box {
    border: 4px dashed darkgreen;
    color: red;
  }
}
```

{{EmbedLiveSample("simple")}}

若你测试的是某个属性的新值，那么属性 - 值对中值的那一部分就更加关键。`display` 属性就是一个很好的例子。所有的浏览器都支持 `display` 属性，这可以追溯到 CSS1 中的 `display: block` 。然而 `display: flex` 和 `display: grid` 这些值是新出现的。CSS 属性经常会有额外的新值加入，所以你必须检测属性与值的事实意味着你可以检测那些值的浏览器支持性。（原文：There are often additional values added to properties in CSS, and so the fact that you have to test for property and value means that you can detect support for these values.）

## 测试是否缺少支持

除了测试浏览器是否支持某个特性外，你也可以通过添加 `not` 关键字测试浏览器是否不支持某个特性。

```css
@supports not (property: value) {将要应用的 CSS 规则
}
```

下述特性查询中的 CSS 规则仅会在浏览器不支持 `row-gap` 属性的情况下生效。

```html live-sample___not
<div class="box">
  If your browser does not support row-gap, the content will be darkgreen with a
  dashed border.
</div>
```

```css live-sample___not
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports not (row-gap: 10px) {
  .box {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("not")}}

## 测试多个特性

你可能需要在功能查询中测试对多个属性的支持。为此，你应当包含要测试的功能的列表，使用 `and` 关键字分隔：

```css
@supports (property1: value) and (property2: value) {
  将要应用的 CSS 规则
}
```

比如，若你想要应用的 CSS 需要浏览器支持 CSS Shape 与 CSS Grid，你可以创建可以同时检测这两个特性的规则。下述规则只有在浏览器同时支持 `shape-outside: circle()` 和`display: grid` 的时候才会返回 true。

```html live-sample___and
<div class="box">
  If your browser supports <code>display: grid</code> and
  <code>shape-outside: circle()</code>, the content will be darkgreen with a
  dashed border.
</div>
```

```css live-sample___and
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (display: grid) and (shape-outside: circle()) {
  .box {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("and")}}

你也可以使用 `or`，如果所有规则中有一个规则可以匹配那么你想应用的 CSS 样式就会被启用。

```css
@supports (property1: value) or (property2: value) {
  将要应用的 CSS 规则
}
```

你可以在测试时为任何标准属性加上浏览器引擎前缀，然后测试特定引擎的 CSS 支持性，这非常有用。

```html live-sample___or
<div class="box">
  The text and border will be green if your browser supports font smoothing.
</div>
```

```css live-sample___or
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (font-smooth: always) or (-webkit-font-smoothing: antialiased) {
  .box {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("or")}}

## 特性查询的局限性

`@supports` 规则测试浏览器是否能解析一个或多个属性以及其值，以及是否浏览器是否觉得支持这些属性以及其值。如果浏览器理解这些属性和值，那么它就会给一个肯定的回答。因此，特性查询不能检测浏览器是否**正确地表现**这些属性和值，以及是否没有 bug 存在。

另外，特性查询无法检测*局部实现* （_partial implementations）。一个很好的例子就是_ `gap` 属性。所有支持 CSS Grid 的浏览器都支持 `gap` 在 CSS Grid 中，然而只有 Firefox 浏览器支持 Flexbox 中的 `gap`。若你为了在 Flexbox 中使用 `gap` 属性而测试其浏览器支持，就算它还没有（在 Flexbox 中）实现你也会得到浏览器肯定的回答。

## 如何使用特性查询进行渐进式增强

在逐步增强一个站点时，特性查询是一个非常有用的工具。它们使你能够为所有浏览器提供良好的解决方案，并为那些支持新特性的浏览器提供增强的解决方案。

然而，某些浏览器既不支持特性查询，也不支持我们希望使用的特性。例如，我们也许希望使用 CSS Grid，但 IE11 不支持它。我们也不能为其创建一个针对没有 Grid 支持的浏览器的后备样式，因为 IE11 也不支持特性查询。然而在实践中，当使用特性查询进行渐进增强时，然而这并不重要。你确实需要有一个组织 CSS 的方式，那么应当先为不支持新特性的浏览器编写 CSS 样式，然后在特性查询中进行覆盖。

让我们看一个非常简单的例子，在这个例子中，特性查询就派上用场了，它使用上述的方式来组织 CSS。

假设我们想要创建一行三个盒子的布局，理想情况下，我们想要使用 [CSS Grid Layout](/zh-CN/docs/Web/CSS/Guides/Grid_layout) 布局。但是，我们希望有一个使用浮动（floats）的旧浏览器的布局。我们可以先用下面的代码创建浮动布局，它提供了三个列。

{{EmbedGHLiveSample("css-examples/feature-queries/step1.html", '100%', 900)}}

浏览器会忽略其无法识别的 CSS 属性或者值。所以我们可以开始使用 CSS Grid 来增强我们的布局。不支持 Grid 的浏览器将会忽略 `display` 属性的 `grid` 值。一旦一个浮动项成为网格项，浮动就会被移除——你可以阅读 [Supporting Older Browsers](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers) 来了解更多。因此浮动的版本就会被网格的版本替代。

然而问题来了，起因于我们为了使浮动项目显示为三列而在上面设置的 `width` 属性，它现在被网格解释为列在网格中的宽度，而不是容器的宽度（相对于浮动布局）。

{{EmbedGHLiveSample("css-examples/feature-queries/step2.html", '100%', 900)}}

如果 `display: grid` 是被浏览器支持的，我们就需要一个方法去移除 width 属性。这正是特性查询所解决的问题，当 Grid 被支持的时候，我们就能将 `width` 设置回 `auto` 。

{{EmbedGHLiveSample("css-examples/feature-queries/step3.html", '100%', 900)}}

在上述场景中，IE11 是否支持特性查询或者 CSS Grid 已经无关紧要——不论何时它都能获得 float 的版本，然后在支持 Grid 的浏览器中这一行为就会被覆盖。

编写上述代码的另一种方法是将所有网格代码包装在一个特性查询中，如下所示。

{{EmbedGHLiveSample("css-examples/feature-queries/step4.html", '100%', 900)}}

这意味着你可能需要一些额外代码，但也有好处，你可以通过故意写错属性或者值的名字来测试你的后备代码。你可以通过修改上面在线例子中的 `display: grid` 为 `display: grip` 或者其他无效值来尝试。

## 总结

功能查询可以帮助你开始使用更新的功能，它可以增强旧浏览器使用的简单的站点的显示。由于可以针对其支持的浏览器而打包 CSS，因此不会有后退显示使用的样式漏出的风险，就像上面的 Grid 示例那样。

## 参见

- [CSS 条件规则](/zh-CN/docs/Web/CSS/Guides/Conditional_rules)模块
- [使用 CSS 媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)
- [支持旧浏览器：特性查询](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#特性查询)
- [浏览器特性检测：CSS `@supports`](/zh-CN/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)

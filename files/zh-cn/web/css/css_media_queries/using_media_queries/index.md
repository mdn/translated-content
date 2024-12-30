---
title: 使用媒体查询
slug: Web/CSS/CSS_media_queries/Using_media_queries
---

{{CSSRef}}

**媒体查询**（**Media queries**）非常实用，尤其是当你想要根据设备的大致类型（如打印设备与带屏幕的设备）或者特定的特征和设备参数（例如屏幕分辨率和浏览器{{glossary("viewport", "视窗")}}宽度）来修改网站或应用程序时。

媒体查询常被用于以下目的：

- 有条件的通过 {{cssxref("@media")}} 和 {{cssxref("@import")}} [at-rules](/zh-CN/docs/Web/CSS/At-rule) 用[CSS](/zh-CN/docs/Web/CSS) 装饰样式。
- 用 `media=` 属性为{{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}}和其他[HTML](/zh-CN/docs/Web/HTML)元素指定特定的媒体类型。如：

```html
<link rel="stylesheet" src="styles.css" media="screen" />
<link rel="stylesheet" src="styles.css" media="print" />
```

- 使用{{domxref("Window.matchMedia()")}} 和{{domxref("MediaQueryList.addListener()")}} 方法来[测试和监控媒体状态](/zh-CN/docs/Web/CSS/CSS_media_queries/Testing_media_queries)。

> [!NOTE]
> 本页的例子使用 CSS `@media` 的方式来说明目的，但是对于所有类型的媒体查询，基本语法均相同。

## 语法

每条媒体查询语句都由一个可选的*媒体类型*和任意数量的*媒体特性*表达式构成。可以使用多种*逻辑操作符*合并多条媒体查询语句。媒体查询语句不区分大小写。

当媒体类型（如果指定）与在其上显示文档的设备匹配并且所有媒体功能表达式都计算为 true 时，媒体查询将计算为 true。涉及未知媒体类型的查询始终为 false。

> [!NOTE]
> 即使媒体查询返回 false，带有媒体查询附加到其{{HTMLElement("link")}}标记的样式表[仍将下载](http://scottjehl.github.com/CSS-Download-Tests/)。但是，除非查询结果变为 true，否则其内容将不适用。

## 定位媒体类型

媒体类型描述了给定设备的一般类别。尽管通常在设计网站时会考虑屏幕，但你可能希望创建针对特殊设备（例如打印机或基于音频的屏幕阅读器）的样式。例如，此 CSS 针对打印机：

```css
@media print { ... }
```

你还可以定位多个设备。例如，此`@media`规则使用两个媒体查询来同时定位屏幕和打印设备

```css
@media screen, print { ... }
```

有关所有媒体类型的列表，请参见[Media types](#media_types)。由于它们仅以非常广泛的术语描述设备，因此只有少数几种可用。要定位更具体的属性，请改用*媒体功能*。

## 定位媒体特性

媒体功能描述了给定的{{glossary("user agent")}}的输出设备或环境的特定特征。例如，你可以将特定样式应用于宽屏显示器，使用鼠标的计算机，或应用于在弱光条件下使用的设备。当用户的主要输入机制（例如鼠标）可以悬停在元素上时，如下为一个示例：

```css
@media (hover: hover) { ... }
```

许多媒体功能都是*范围功能*，这意味着可以在它们前面加上“最小”或“最大”来表示“最小条件”或“最大条件”约束。例如，仅当你的浏览器的{{glossary("viewport")}}宽度等于或小于 12450px 时，此 CSS 才会应用样式：

```css
@media (max-width: 12450px) { ... }
```

如果你在未指定值的情况下创建媒体功能查询，则该样式将全部被应用，只要该查询的值不为零（或在 Level 4 中为`none`）即可。例如，此 CSS 将适用于任何带有彩色屏幕的设备：

```css
@media (color) { ... }
```

如果某个功能不适用于运行浏览器的设备，则涉及该媒体功能的表达式始终为 false。例如，将不会使用嵌套在以下查询中的样式，因为没有语音专用设备具有屏幕长宽比：

```css
@media speech and (aspect-ratio: 11/5) { ... }
```

有关更多媒体功能[media feature](#media_features)示例，请参阅每个特定功能的参考页。

## 创建复杂查询

有时你可能想创建一个取决于多个条件的媒体查询。这就是*逻辑运算符*使用的场景：`not`，`and`，和 `only`。此外，你可以将多个媒体查询合并到一个*逗号分隔的列表*中。这使你可以在不同情况下应用相同的样式。

在前面的示例中，我们已经看到 `and` 运算符用于将媒体类型与媒体功能分组。`and` 运算符还可以将多个媒体功能组合到单个媒体查询中。同时，`not` 运算符会否定媒体查询，从而基本上颠倒了它的正常含义。`only` 运算符可防止较早的浏览器应用样式。

> [!NOTE]
> 在大多数情况下，默认情况下，如果未指定其他类型，则使用`all`媒体类型。但是，如果使用`not`或`only`运算符，则必须显式指定媒体类型。

### 结合多种类型和特性

`and`关键字将媒体功能与媒体类型或其他媒体功能组合在一起。此示例结合了两种媒体功能，以将样式限制为宽度至少为 30 em 的横向的设备：

```css
@media (min-width: 30em) and (orientation: landscape) { ... }
```

要将样式限制为带有屏幕的设备，可以将媒体功能链接到`screen`媒体类型：

```css
@media screen and (min-width: 30em) and (orientation: landscape) { ... }
```

### 测试多重查询

当用户的设备与各种媒体类型，功能或状态中的任何一种匹配时，可以使用逗号分隔的列表来应用样式。例如，如果用户设备的最小高度为 680px 或为纵向模式的屏幕设备，则以下规则将应用其样式：

```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

以上面的示例为例，如果用户使用的打印机的页面高度为 800 像素，则 media 语句将返回 true，因为将应用第一个查询。同样，如果用户使用的是纵向模式的智能手机，并且视口高度为 480px，则将应用第二个查询，并且 media 语句仍将返回 true。

### 反转查询的含义

`not`关键字会反转整个媒体查询的含义。它只会否定要应用的特定媒体查询。 （因此，它不会应用于以逗号分隔的媒体查询列表中的每个媒体查询。）`not`关键字不能用于否定单个功能查询，只能用于否定整个媒体查询。看看以下`not`关键字的例子：

```css
@media not all and (monochrome) { ... }
```

所以上述查询等价于：

```css
@media not (all and (monochrome)) { ... }
```

而不是：

```css example-bad
@media (not all) and (monochrome) { ... }
```

再看另一个例子，如下媒体查询：

```css
@media not screen and (color), print and (color) { ... }
```

等价于：

```css
@media (not (screen and (color))), print and (color) { ... }
```

### 提升老版本浏览器兼容性

`only`关键字可防止不支持带有媒体功能的媒体查询的旧版浏览器应用给定的样式。_它对现代浏览器没有影响。_

```css
@media only screen and (color) { ... }
```

## 版本 4 中的语法改进

媒体查询 4 级规范对语法进行了一些改进，以使用具有“范围”类型（例如宽度或高度，减少冗余）的功能进行媒体查询。级别 4 添加了用于编写此类的查询范围上下文。例如，使用最大宽度`max-` 功能，我们可以编写以下代码：

> [!NOTE]
> 媒体查询 4 级规范在现代浏览器中具有合理的支持，但某些媒体功能并未得到很好的支持。有关更多详细信息，请参见 [`@media` browser compatibility table](/zh-CN/docs/Web/CSS/@media#browser_compatibility)。

```css
@media (max-width: 30em) { ... }
```

在媒体查询 4 级规范可以这样写：

```css
@media (width <= 30em) { ... }
```

使用`min-`和`max-`可以测试一个在两个值之间的宽度

```css
@media (min-width: 30em) and (max-width: 50em) { ... }
```

用 4 级语法书写如下

```css
@media (30em <= width <= 50em ) { ... }
```

媒体查询 4 级规范还添加了用**and**, **not**, 和 **or**实现的完整的布尔运算来合并媒体查询的方法。

### 使用 `not`否定一个特性

在媒体功能周围使用`not()`会否定查询中的该特性。例如，如果设备没有悬停功能，则`not(hover)`将被匹配：

```css
@media (not(hover)) { ... }
```

### 用 `or`测试多个特性

你可以使用`or`测试多个功能之间的匹配，如果任何功能为 true，则解析为 true。例如，以下查询测试具有单色显示或悬停功能的设备：

```css
@media (not (color)) or (hover) { ... }
```

## 参见

- [使用编程方法测试媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [CSS Animations Between Media Queries](https://davidwalsh.name/animate-media-queries)
- [Extended Mozilla media features](/zh-CN/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Extended WebKit media features](/zh-CN/docs/Web/CSS/WebKit_Extensions#media_features)

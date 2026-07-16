---
title: env()
slug: Web/CSS/Reference/Values/env
---

**`env()`** [CSS](/zh-CN/docs/Web/CSS) 函数以类似于 {{cssxref("var")}} 函数和 [custom properties](/zh-CN/docs/Web/CSS/Reference/Properties/--*) 的方式将用户代理定义的环境变量值插入你的 CSS 中。区别在于，环境变量除了由用户代理定义而不是由用户定义外，还被全局作用在文档中，而自定义属性则限定在声明它们的元素中。为了告诉浏览器使用屏幕上所有的可用空间，并以此使用`env()`变量，我们需要添加一个新的视口元值：

```html
<meta name="viewport" content="... viewport-fit=cover" />
```

```css
body {
  padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px);
}
```

另外，与自定义属性不同，自定义属性不能在声明之外使用，而`env()`函数可以代替属性值或描述符的任何部分（例如，在 [媒体查询的规则](/zh-CN/docs/Web/CSS/Reference/At-rules/@media) 中）。随着规范的发展，它也可能在像是 选择器 等其他地方使用。

最初由 iOS 浏览器提供，用于允许开发人员将其内容放置在视口的安全区域中，该规范中定义的 `safe-area-inset-*` 值可用于确保内容即使在非矩形的视区中也可以完全显示。

## 语法

```css
/* Using the four safe area inset values with no fallback values */
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);

/* Using them with fallback values */
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 1em);
env(safe-area-inset-bottom, 0.5vh);
env(safe-area-inset-left, 1.4rem);
```

### Values

- `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
  - : `safe-area-inset-*`由四个定义了视口边缘内矩形的 top, right, bottom 和 left 的环境变量组成，这样可以安全地放入内容，而不会有被非矩形的显示切断的风险。对于矩形视口，例如普通的笔记本电脑显示器，其值等于零。对于非矩形显示器（如圆形表盘，iPhoneX 屏幕），在用户代理设置的四个值形成的矩形内，所有内容均可见。

**注意**: 不同于其他的 CSS 属性，用户代理定义的属性名字对大小写敏感。

### 形式语法

{{CSSSyntax}}

## 示例

下面的示例使用`env()`的第二个可选参数，如果环境变量不可用，该参数可让你设置备用值

```html
<p>
  If the <code>env()</code> function is supported in your browser, this
  paragraph's text will have 50px of padding between it and the left border —
  but not the top, right and bottom. This is because the accompanying CSS is the
  equivalent of <code>padding: 0 0 0 50px</code>, because, unlike other CSS
  properties, user agent property names are case-sensitive.
</p>
```

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

{{EmbedLiveSample("示例")}}

### Example values

```css
padding: env(
  safe-area-inset-bottom,
  50px
); /* zero for all rectangular user agents */
padding: env(
  Safe-area-inset-bottom,
  50px
); /* 50px because UA properties are case sensitive */
padding: env(
  x,
  50px 20px
); /* as if padding: '50px 20px' were set because x is not a valid environment variable */
padding: env(
  x,
  50px,
  20px
); /* ignored because '50px, 20px' is not a valid padding value and x is not a valid environment variable */
```

向下兼容的语法和自定义属性一样，允许使用逗号。但是如果属性值不支持逗号，则该值无效。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("var", "var(…)")}}
- [用作层叠式变量的 CSS 自定义属性](/zh-CN/docs/Web/CSS/Guides/Cascading_variables)模块
- [自定义属性（`--*`）：CSS 变量](/zh-CN/docs/Web/CSS/Reference/Properties/--*)
- [使用 CSS 自定义属性（变量）](/zh-CN/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [自定义 PWA 标题栏的窗口控件叠加层](https://web.developers.google.cn/articles/window-controls-overlay)
- [在标题栏中显示内容](https://learn.microsoft.com/zh-cn/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [打破盒子](https://alistapart.com/article/breaking-out-of-the-box/)

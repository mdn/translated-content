---
title: font-smooth
slug: Web/CSS/Reference/Properties/font-smooth
---

{{ Non-standard_header }}

**`font-smooth`** [CSS](/zh-CN/docs/Web/CSS) 属性控制字体渲染时应用的抗锯齿效果。

## 语法

```css
/* 关键字值 */
font-smooth: auto;
font-smooth: never;
font-smooth: always;

/* <length> 值 */
font-smooth: 2em;

/* 全局值 */
font-smooth: inherit;
font-smooth: initial;
font-smooth: revert;
font-smooth: revert-layer;
font-smooth: unset;
```

> [!NOTE]
> Webkit 实现了名为 **`-webkit-font-smoothing`** 的相似属性。该属性仅适用于 macOS。
>
> - `auto`——由浏览器决定（如果可用，则使用亚像素抗锯齿；这是默认值）。
> - `none`——关闭字体平滑；显示带有锯齿边缘的文本。
> - `antialiased`——在像素（而不是亚像素）级别平滑字体。对于深色背景上的浅色文本，从亚像素渲染切换为抗锯齿渲染可以使其看起来更清晰。
> - `subpixel-antialiased`——在大多数非视网膜显示器上，这将会提供最清晰的文本。

> [!NOTE]
> Firefox 实现了名为 **`-moz-osx-font-smoothing`** 的相似属性。该属性仅适用于 macOS。
>
> - `auto`——允许浏览器选择字体平滑的优化方式，通常为 `grayscale`。
> - `grayscale`——用灰度抗锯齿（而不是亚像素）渲染文本。对于深色背景上的浅色文本，从亚像素渲染切换为抗锯齿渲染可以使其看起来更清晰。

## 形式定义

{{cssinfo}}

## 形式语法

```plain
font-smooth =
  auto | never | always | <absolute-size> | <length>
```

## 示例

### 基础使用示例

以下示例展示了在 macOS 上打开字体平滑的 Safari/Chromium 和 Firefox 的等效结果。对于这两类情况，平滑的字体应该看起来更细一些。

对于那些没有使用 macOS 系统的用户，这里有一张截图（后面会有实时版本）：

![两类文本示例，一个具有 font-smooth 属性，而另一个则不具有](smoothing.png)

#### HTML

```html
<p>Without font smoothing</p>

<p class="smoothed">With font smoothing</p>
```

#### CSS

```css
html {
  background-color: black;
  color: white;
  font-size: 3rem;
}

p {
  text-align: center;
}

.smoothed {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### 结果

{{EmbedLiveSample('基础使用示例', '100%', 260)}}

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [请停止“修复”字体平滑——UsabilityPost](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
- [不干涉字体平滑和抗锯齿](https://www.zachleat.com/web/font-smooth/)

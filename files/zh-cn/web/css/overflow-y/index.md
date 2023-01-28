---
title: overflow-y
slug: Web/CSS/overflow-y
---

{{CSSRef}}

## 概述

当一个块级元素（div 元素、p 元素之类的）的内容在垂直方向发生溢出时，

[CSS](/zh-CN/docs/Web/CSS)属性 `overflow-y` 决定如何处理溢出的内容。

隐藏溢出内容（hidden），或者显示滚动条（scroll），或者直接显示溢出内容（visible），或者让浏览器来处理（auto）。

{{cssinfo}}

## 语法

```
/* 在当前 css 选择器元素下，元素内容在垂直方向上溢出时 */

/* overflow-y 属性 可选值 */

overflow-y: visible; /*内容可见*/
overflow-y: hidden; /*内容隐藏*/
overflow-y: scroll; /*总是显示滚动条*/
overflow-y: auto; /*浏览器决定*/


/* overflow-y 属性 全局可选值 */

overflow-y: inherit; /*继承*/
overflow-y: initial; /*默认值*/
overflow-y: unset; /*未设置*/
```

当 {{cssxref("overflow-x")}} 值为 `hidden`、`scroll` 或者 `auto`，而本属性的值为 `visible`（默认值）时，本属性会被隐式的计算为 `auto`。

### 可选值

- `visible`
  - : 内容不会被截断，且可以显示在内容盒之外。
- `hidden`
  - : 内容会被截断，且不会显示滚动条。
- `clip` {{experimental_inline}}
  - : 像 `hidden` 一样，内容被剪切到元素的填充框中。 `clip` 和 `hidden` 的区别是 `clip` 还禁止所有滚动，包括程序性滚动（programmatic scrolling）。包含框不再是滚动容器，并且不会启动新的格式设置上下文。如果要启动新的格式设置上下文，可以使用 {{cssxref("display", "display: flow-root", "#flow-root")}} 。
- `scroll`
  - : 桌面浏览器总是显示滚动条，无论内容是否发生溢出。这可以避免滚动条的显示与消失所导致的元素尺寸不确定的问题。而打印机可能会打印溢出的内容。
- `auto`
  - : 取决于浏览器本身。当内容发生溢出时，桌面浏览器如 Firefox 会显示滚动条。

### 形式语法

{{csssyntax("overflow-y")}}

## 示例

### HTML

```html
<ul>
  <li><code>overflow-y:scroll</code> — 总是显示滚动条
  <div id="div1">
   歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
  </div>
  </li>

  <li><code>overflow-y:hidden</code> — 在盒子外隐藏溢出的内容
  <div id="div2">
  歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
  </div>
  </li>

  <li><code>overflow-y:visible</code> — 在盒子外显示溢出的内容
  <div id="div3">
    歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
    </div>
  </li>

  <li><code>overflow-y:auto</code> — 在大多数浏览器中，<code>auto</code> 效果等于 <code>scroll</code>
  <div id="div4">
    歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
    </div>
  </li>

</ul>
```

### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black; /*元素边框 1px 宽 黑边*/
  width:  280px;
  height: 120px;
}


#div1 { overflow-y: scroll; margin-bottom: 12px; }

#div2 { overflow-y: hidden; margin-bottom: 12px;  }

#div3 { overflow-y: visible; margin-bottom: 150px;  }

#div4 { overflow-y: auto; margin-bottom: 12px;  }
```

### 结果

{{EmbedLiveSample("示例", "100%", "760")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}

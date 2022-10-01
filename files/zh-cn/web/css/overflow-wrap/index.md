---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
original_slug: Web/CSS/word-wrap
---

{{CSSRef}}

{{EmbedInteractiveExample("pages/css/overflow-wrap.html")}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`overflow-wrap`** 是用来说明当一个不能被分开的字符串太长而不能填充其包裹盒时，为防止其溢出，浏览器是否允许这样的单词中断换行。

> **备注：** 与{{cssxref("word-break")}}相比，`overflow-wrap`仅在无法将整个单词放在自己的行而不会溢出的情况下才会产生中断。

> **备注：** word-wrap 属性原本属于微软的一个私有属性，在 CSS3 现在的文本规范草案中已经被重名为 {{cssxref("overflow-wrap")}} 。word-wrap 现在被当作 overflow-wrap 的“别名”。稳定的谷歌 Chrome 和 Opera 浏览器版本支持这种新语法。

## 语法

```
/* Keyword values */
overflow-wrap: normal;
overflow-wrap: break-word;

/* Global values */
overflow-wrap: inherit;
overflow-wrap: initial;
overflow-wrap: unset;
```

将 `overflow-wrap` 属性指定为从下面的值列表中选择的单个关键字。

### 值

- `normal`
  - : 行只能在正常的单词断点处中断。（例如两个单词之间的空格）。
- `break-word`
  - : 表示如果行内没有多余的地方容纳该单词到结尾，则那些正常的不能被分割的单词会被强制分割换行。

## 形式语法

{{csssyntax}}

## 示例

### 比较 overflow-wrap、word-break 和 hyphens

本示例比较分解长单词时，`overflow-wrap`, `word-break`, `hyphens` 的结果。

#### HTML

```html
<p>They say the fishing is excellent at
  Lake <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>normal</code>)</p>
<p>They say the fishing is excellent at
  Lake <em class="ow-anywhere">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>overflow-wrap: anywhere</code>)</p>
<p>They say the fishing is excellent at
  Lake <em class="ow-break-word">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>overflow-wrap: break-word</code>)</p>
<p>They say the fishing is excellent at
  Lake <em class="word-break">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>word-break</code>)</p>
<p>They say the fishing is excellent at
  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>hyphens</code>, without <code>lang</code> attribute)</p>
<p lang="en">They say the fishing is excellent at
  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>hyphens</code>, English rules)</p>
<p class="hyphens" lang="de">They say the fishing is excellent at
  Lake <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>hyphens</code>, German rules)</p>
```

#### CSS

```css
p {
   width: 13em;
   margin: 2px;
   background: gold;
}

.ow-anywhere {
   overflow-wrap: anywhere;
}

.ow-break-word {
   overflow-wrap: break-word;
}

.word-break {
   word-break: break-all;
}

.hyphens {
   hyphens: auto;
}
```

#### 结果

{{ EmbedLiveSample('比较 overflow-wrap、word-break 和 hyphens', '100%', 260) }}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
- {{cssxref("text-overflow")}}

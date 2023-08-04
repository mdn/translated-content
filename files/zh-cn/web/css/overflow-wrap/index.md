---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
---

{{CSSRef}}

{{EmbedInteractiveExample("pages/css/overflow-wrap.html")}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`overflow-wrap`** 应用于行级元素，用来设置浏览器是否应该在一个本来不能断开的字符串中插入换行符，以防止文本溢出其行向盒。

> **备注：** 与 {{cssxref("word-break")}} 相比，`overflow-wrap` 仅在无法将整个单词放在自己的行而不会溢出的情况下才会产生换行。

这个属性原本属于微软扩展的一个非标准、无前缀的属性，叫做 `word-wrap`，后来在大多数浏览器中以相同的名称实现。目前它已被更名为 {{cssxref("overflow-wrap")}}，`word-wrap` 相当于其别称。

## 语法

```css
/* 关键词值 */
overflow-wrap: normal;
overflow-wrap: break-word;
overflow-wrap: anywhere;

/* 全局值 */
overflow-wrap: inherit;
overflow-wrap: initial;
overflow-wrap: revert;
overflow-wrap: revert-layer;
overflow-wrap: unset;
```

将 `overflow-wrap` 属性指定为从下面的值列表中选择的单个关键字。

### 值

- `normal`
  - : 行只能在正常的单词断点（例如两个单词之间的空格）处换行。
- `anywhere`
  - : 为防止溢出，如果行中没有其他可接受的断点，则不可断的字符串（如长词或 URL）可能会在任何时候换行。在断点处不会插入连字符。在计算最小内容内在大小时，会考虑由单词换行引入的软换行机会。
- `break-word`
  - : 与 anywhere 值相同，如果行中没有其他可接受的断点，则允许在任意点将通常不可断的单词换行，但在计算最小内容内在大小时不考虑断字引入的软换行机会。

## 形式语法

{{csssyntax}}

## 示例

### 比较 overflow-wrap、word-break 和 hyphens

本示例比较分解长单词时，`overflow-wrap`、`word-break`、`hyphens` 的结果。

#### HTML

```html
<p>
  They say the fishing is excellent at Lake
  <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>normal</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="ow-anywhere">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>overflow-wrap: anywhere</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="ow-break-word">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>overflow-wrap: break-word</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="word-break">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>word-break</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>hyphens</code>, without
  <code>lang</code> attribute)
</p>
<p lang="en">
  They say the fishing is excellent at Lake
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>hyphens</code>, English rules)
</p>
<p class="hyphens" lang="de">
  They say the fishing is excellent at Lake
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>hyphens</code>, German rules)
</p>
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

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
- {{cssxref("text-overflow")}}
- [换行和折行文本的指引](/zh-CN/docs/Web/CSS/CSS_text/Wrapping_breaking_text)

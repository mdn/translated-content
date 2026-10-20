---
title: "`font-variant-ligatures` CSS 属性"
short-title: font-variant-ligatures
slug: Web/CSS/Reference/Properties/font-variant-ligatures
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

**`font-variant-ligatures`** [CSS](/zh-CN/docs/Web/CSS) 属性控制它所作用元素的文本内容使用哪些{{Glossary("ligature", "连字")}}和上下文形式。这样可以使最终文本的形式更加协调。

{{InteractiveExample("CSS 演示：font-variant-ligatures")}}

```css interactive-example-choice
font-variant-ligatures: normal;
```

```css interactive-example-choice
font-variant-ligatures: no-common-ligatures;
```

```css interactive-example-choice
font-variant-ligatures: common-ligatures;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>Difficult waffles</p>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}
```

## 语法

```css
/* 关键字值 */
font-variant-ligatures: normal;
font-variant-ligatures: none;
font-variant-ligatures: common-ligatures; /* <common-lig-values> */
font-variant-ligatures: no-common-ligatures; /* <common-lig-values> */
font-variant-ligatures: discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: no-discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: no-historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: contextual; /* <contextual-alt-values> */
font-variant-ligatures: no-contextual; /* <contextual-alt-values> */

/* 两个关键字值 */
font-variant-ligatures: no-contextual common-ligatures;

/* 四个关键字值 */
font-variant-ligatures: common-ligatures no-discretionary-ligatures
  historical-ligatures contextual;

/* 全局值 */
font-variant-ligatures: inherit;
font-variant-ligatures: initial;
font-variant-ligatures: revert;
font-variant-ligatures: revert-layer;
font-variant-ligatures: unset;
```

### 值

此属性指定为单个关键字，或由下列值组成、以空格分隔的列表：

- `normal`
  - : 此关键字启用正确渲染所需的常规连字和上下文形式。具体启用哪些连字和形式，取决于字体、语言和文字体系。这是默认值。
- `none`
  - : 此关键字指定禁用所有连字和上下文形式，常用连字也不例外。
- _`<common-lig-values>`_
  - : 这些值控制最常见的连字，例如 `fi`、`ffi`、`th` 或类似组合。它们对应于 OpenType 值 `liga` 和 `clig`。可以取以下两个值：
    - `common-ligatures` 启用这些连字。注意，关键字 `normal` 会启用这些连字。
    - `no-common-ligatures` 禁用这些连字。

- _`<discretionary-lig-values>`_
  - : 这些值控制专属于字体、由字体设计师定义的特定连字。它们对应于 OpenType 值 `dlig`。可以取以下两个值：
    - `discretionary-ligatures` 启用这些连字。
    - `no-discretionary-ligatures` 禁用这些连字。注意，关键字 `normal` 通常会禁用这些连字。

- _`<historical-lig-values>`_
  - : 这些值控制历史上使用的连字，例如旧书中把德语二合字母 tz 显示为 ꜩ。它们对应于 OpenType 值 `hlig`。可以取以下两个值：
    - `historical-ligatures` 启用这些连字。
    - `no-historical-ligatures` 禁用这些连字。注意，关键字 `normal` 通常会禁用这些连字。

- _`<contextual-alt-values>`_
  - : 这些值控制字母是否适应当前所处的上下文，也就是是否根据周围的字母进行调整。这些值对应于 OpenType 值 `calt`。可以取以下两个值：
    - `contextual` 指定使用上下文替代形式。注意，关键字 `normal` 通常也会启用这些连字。
    - `no-contextual` 阻止使用这些形式。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置字体连字和上下文形式

#### HTML

```html
<link href="//fonts.googleapis.com/css?family=Lora" rel="stylesheet" />
<p class="normal">
  默认<br />
  if fi ff tf ft jf fj
</p>
<p class="none">
  无<br />
  if fi ff tf ft jf fj
</p>
<p class="common-ligatures">
  常用连字<br />
  if fi ff tf ft jf fj
</p>
<p class="no-common-ligatures">
  禁用常用连字<br />
  if fi ff tf ft jf fj
</p>
<p class="discretionary-ligatures">
  可选连字<br />
  if fi ff tf ft jf fj
</p>
<p class="no-discretionary-ligatures">
  禁用可选连字<br />
  if fi ff tf ft jf fj
</p>
<p class="historical-ligatures">
  历史连字<br />
  if fi ff tf ft jf fj
</p>
<p class="no-historical-ligatures">
  禁用历史连字<br />
  if fi ff tf ft jf fj
</p>
<p class="contextual">
  上下文替代<br />
  if fi ff tf ft jf fj
</p>
<p class="no-contextual">
  禁用上下文替代<br />
  if fi ff tf ft jf fj
</p>
```

#### CSS

```css
p {
  font-family: "Lora", serif;
}
.normal {
  font-variant-ligatures: normal;
}

.none {
  font-variant-ligatures: none;
}

.common-ligatures {
  font-variant-ligatures: common-ligatures;
}

.no-common-ligatures {
  font-variant-ligatures: no-common-ligatures;
}

.discretionary-ligatures {
  font-variant-ligatures: discretionary-ligatures;
}

.no-discretionary-ligatures {
  font-variant-ligatures: no-discretionary-ligatures;
}

.historical-ligatures {
  font-variant-ligatures: historical-ligatures;
}

.no-historical-ligatures {
  font-variant-ligatures: no-historical-ligatures;
}

.contextual {
  font-variant-ligatures: contextual;
}

.no-contextual {
  font-variant-ligatures: no-contextual;
}
```

#### 结果

{{ EmbedLiveSample('设置字体连字和上下文形式', '', '700') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("font-variant")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- [CSS 字体](/zh-CN/docs/Web/CSS/Guides/Fonts)模块

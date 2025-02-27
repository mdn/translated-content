---
title: :first-of-type
slug: Web/CSS/:first-of-type
---

{{CSSRef}}

在 CSS 虛擬類別（pseudo-class）中，**`:first-of-type`** 代表本節點為兄弟節點中第一個此類型節點。

```css
/* 選取第一個出現在父節點下的<p>，不考慮其在所有子節點中的位置。 */
p:first-of-type {
  color: red;
}
```

> [!NOTE]
> 在初始定義中，被選取的節點必須擁有父節點。從選取器層級 4（Selectors Level 4）開始已經不再有這個限制了。

## 語法

{{csssyntax}}

## 範例

### 例一：選取第一段文章

來考慮以下 HTML:

```html
<h2>Heading</h2>

<p>Paragraph</p>

<p>Paragraph</p>
```

及 CSS:

```css
p:first-of-type {
  color: red;
}
```

會有這樣的效果 － 只有第一段文章變為紅色，因為它是 body 中第一個文章節點：

{{EmbedLiveSample('例一：選取第一段文章')}}

### 例二：預定通用選擇器（Assumed universal selector）

這個範例展示了當沒有指定一般選擇器（simple selector）時，通用選擇器是如何被預判。

首先來看 HTML：

```html
<div>
  <span>This `span` is first!</span>
  <span>But this `span` isn't.</span>
  <span>This <em>nested `em` is</em>!</span>
  <span>And so is this <span>nested `span`</span>!</span>
  <b>This `b` qualifies!</b>
  <span>This final `span` does not.</span>
</div>
```

接著是 CSS：

```css
div :first-of-type {
  background-color: lime;
}
```

會有這樣的效果:

{{EmbedLiveSample('例二：預定通用選擇器（Assumed universal selector）','100%', '120')}}

## 特定規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{Cssxref(":first-child")}}
- {{Cssxref(":last-of-type")}}
- {{Cssxref(":nth-of-type")}}

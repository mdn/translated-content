---
title: ::first-letter
slug: Web/CSS/Reference/Selectors/::first-letter
l10n:
  sourceCommit: 6d55eec58e38583da60aa635d41393ad051d1c6d
---

**`::first-letter`** [CSS](/zh-TW/docs/Web/CSS) [偽元素](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-elements)用來對[區塊容器](/zh-TW/docs/Web/CSS/Guides/Display/Visual_formatting_model#區塊容器)中第一行的第一個字母進行樣式設定，但僅限於前面沒有其他內容（如圖片或內嵌表格）時。

{{InteractiveExample("CSS Demo: ::first-letter", "tabbed-shorter")}}

```css interactive-example
p::first-letter {
  font-size: 1.5rem;
  font-weight: bold;
  color: brown;
}
```

```html interactive-example
<p>
  探索蒙特雷灣深處的科學家們意外發現了一種罕見且獨特的龍魚物種。這個物種是其同類中最稀有的。
</p>

<p>Robison 和一組研究人員發現這條魚時，正值為期一週的考察之旅。</p>
```

識別一個元素的第一個字母並不總是那麼簡單：

- 在第一個字母前後的標點符號會被包含在匹配中。標點符號包括任何 Unicode 字符，這些字符定義在*起始符號*（Ps）、_閉合符號_（Pe）、_起始引號_（Pi）、_結束引號_（Pf）和*其他標點符號*（Po）類別中。
- 有些語言有雙字母組合（如荷蘭語中的 `IJ`），這些組合總是一起大寫。在這些情況下，`::first-letter` 偽元素應該匹配這個雙字母組合的兩個字母。
- 結合 {{ cssxref("::before") }} 偽元素和 {{ cssxref("content") }} 屬性，可能會在元素的開頭插入一些文字。在這種情況下，`::first-letter` 將匹配這些生成內容的第一個字母。

> [!NOTE]
> CSS 引入了 `::first-letter` 表示法（使用兩個冒號）來區分[偽類](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-classes)和[偽元素](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-elements)。為了向後相容，瀏覽器也接受較早引入的 `:first-letter`。
>
> 瀏覽器對荷蘭語中像 `IJ` 這樣的雙字母組合的支持較差。請查閱下面的相容性表格以查看當前的支持狀況。

## 允許的屬性

只有少數 CSS 屬性可以與 `::first-letter` 偽元素一起使用：

- 所有字體屬性：{{ Cssxref("font") }}、{{ Cssxref("font-style") }}、{{cssxref("font-feature-settings")}}、{{cssxref("font-kerning")}}、{{cssxref("font-language-override")}}、{{cssxref("font-stretch")}}、{{cssxref("font-synthesis")}}、{{ Cssxref("font-variant") }}、{{cssxref("font-variant-alternates")}}、{{cssxref("font-variant-caps")}}、{{cssxref("font-variant-east-asian")}}、{{cssxref("font-variant-ligatures")}}、{{cssxref("font-variant-numeric")}}、{{cssxref("font-variant-position")}}、{{ Cssxref("font-weight") }}、{{ Cssxref("font-size") }}、{{cssxref("font-size-adjust")}}、{{ Cssxref("line-height") }} 和 {{ Cssxref("font-family") }}
- 所有背景屬性：{{ Cssxref("background") }}、{{ Cssxref("background-color") }}、{{ Cssxref("background-image") }}、{{cssxref("background-clip")}}、{{cssxref("background-origin")}}、{{ Cssxref("background-position") }}、{{ Cssxref("background-repeat") }}、{{ cssxref("background-size") }}、{{ Cssxref("background-attachment") }}、和 {{cssxref("background-blend-mode")}}
- 所有邊距屬性：{{ Cssxref("margin") }}、{{ Cssxref("margin-top") }}、{{ Cssxref("margin-right") }}、{{ Cssxref("margin-bottom") }}、{{ Cssxref("margin-left") }}
- 所有內邊距屬性：{{ Cssxref("padding") }}、{{ Cssxref("padding-top") }}、{{ Cssxref("padding-right") }}、{{ Cssxref("padding-bottom") }}、{{ Cssxref("padding-left") }}
- 所有邊框屬性：簡寫形式 {{ Cssxref("border") }}、{{ Cssxref("border-style") }}、{{ Cssxref("border-color") }}、{{ cssxref("border-width") }}、{{ cssxref("border-radius") }}、{{cssxref("border-image")}}，以及長寫形式的屬性
- {{ cssxref("color") }} 屬性
- {{ cssxref("text-decoration") }}、{{cssxref("text-shadow")}}、{{ cssxref("text-transform") }}、{{ cssxref("letter-spacing") }}、{{ cssxref("word-spacing") }}（當適用時）、{{ cssxref("line-height") }}、{{cssxref("text-decoration-color")}}、{{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-style")}}、{{cssxref("box-shadow")}}、{{ cssxref("float") }}、{{ cssxref("vertical-align") }}（僅當 `float` 為 `none` 時）CSS 屬性

## 語法

```css
::first-letter {
  /* ... */
}
```

## 範例

### 基本的首字母放大效果

在這個例子中，我們將使用 `::first-letter` 偽元素來創建段落第一個字母的首字母放大效果，這段段落位於 `<h2>` 之後。

#### HTML

```html
<h2>My heading</h2>
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est.
</p>
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
```

#### CSS

```css
p {
  width: 500px;
  line-height: 1.5;
}

h2 + p::first-letter {
  color: white;
  background-color: black;
  border-radius: 2px;
  box-shadow: 3px 3px 0 red;
  font-size: 250%;
  padding: 6px 3px;
  margin-right: 6px;
  float: left;
}
```

#### 結果

{{ EmbedLiveSample('基本的首字母放大效果', '100%', 350) }}

### 標點符號和非拉丁字符的效果

此範例演示 `::first-letter` 對特殊標點符號和非拉丁字符的效果。

#### HTML

```html
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
<p>-The beginning of a special punctuation mark.</p>
<p>_The beginning of a special punctuation mark.</p>
<p>"The beginning of a special punctuation mark.</p>
<p>'The beginning of a special punctuation mark.</p>
<p>*The beginning of a special punctuation mark.</p>
<p>#The beginning of a special punctuation mark.</p>
<p>「特殊的漢字標點符號開頭。</p>
<p>《特殊的漢字標點符號開頭。</p>
<p>"特殊的漢字標點符號開頭。</p>
```

#### CSS

```css
p::first-letter {
  color: red;
  font-size: 150%;
}
```

#### 結果

{{ EmbedLiveSample('標點符號和非拉丁字符的效果', '100%', 350) }}

### 在 SVG 文本元素中設定首字母樣式

在這個例子中，我們使用 `::first-letter` 偽元素來設定 SVG {{SVGElement("text")}} 元素中的首字母樣式。

> [!NOTE]
> 截至撰寫本文時，這項功能的[支持有限](#瀏覽器相容性)。

#### HTML

```html
<svg viewBox="0 0 300 40">
  <text y="30">First letter in &lt;text&gt; SVG</text>
</svg>
```

#### CSS

```css
text {
  font-family: sans-serif;
}

text::first-letter {
  font-family: serif;
  font-size: 2rem;
  font-weight: 600;
  fill: tomato;
  stroke: indigo;
}
```

#### 結果

{{ EmbedLiveSample('在 SVG 文本元素中設定首字母樣式', '100%', '100') }}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref("::first-line")}}

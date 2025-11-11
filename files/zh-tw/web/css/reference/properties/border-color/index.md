---
title: border-color
slug: Web/CSS/Reference/Properties/border-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`border-color`** [CSS](/zh-TW/docs/Web/CSS) [簡寫](/zh-TW/docs/Web/CSS/Guides/Cascade/Shorthand_properties)屬性可以設定元素邊框的顏色。

{{InteractiveExample("CSS Demo: border-color")}}

```css interactive-example-choice
border-color: red;
```

```css interactive-example-choice
border-color: red #32a1ce;
```

```css interactive-example-choice
border-color: red rgb(170 50 220 / 0.6) green;
```

```css interactive-example-choice
border-color: red yellow green hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-color: red yellow green transparent;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    這是一個周圍有邊框的方塊。
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

每個邊都可以使用 {{CSSxRef("border-top-color")}}、{{CSSxRef("border-right-color")}}、{{CSSxRef("border-bottom-color")}} 和 {{CSSxRef("border-left-color")}} 單獨設定；或使用感知書寫模式的 {{CSSxRef("border-block-start-color")}}、{{CSSxRef("border-block-end-color")}}、{{CSSxRef("border-inline-start-color")}} 和 {{CSSxRef("border-inline-end-color")}}。

你可以在[使用 CSS 為 HTML 元素上色](/zh-TW/docs/Web/CSS/Guides/Colors/Applying_color#邊框)中找到更多關於邊框顏色的資訊。

## 組成屬性

此屬性是以下 CSS 屬性的簡寫：

- [`border-bottom-color`](/zh-TW/docs/Web/CSS/Reference/Properties/border-bottom-color)
- [`border-left-color`](/zh-TW/docs/Web/CSS/Reference/Properties/border-left-color)
- [`border-right-color`](/zh-TW/docs/Web/CSS/Reference/Properties/border-right-color)
- [`border-top-color`](/zh-TW/docs/Web/CSS/Reference/Properties/border-top-color)

## 語法

```css
/* <color> 值 */
border-color: red;

/* 上下 | 左右 */
border-color: red #f015ca;

/* 上 | 左右 | 下 */
border-color: red rgb(240 30 50 / 70%) green;

/* 上 | 右 | 下 | 左 */
border-color: red yellow green blue;

/* 全域值 */
border-color: inherit;
border-color: initial;
border-color: revert;
border-color: revert-layer;
border-color: unset;
```

`border-color` 屬性可使用一、二、三或四個值來指定。

- 當指定**一個**值時，它會將相同的顏色應用於**全部四個邊**。
- 當指定**兩個**值時，第一個顏色應用於**上下**，第二個應用於**左右**。
- 當指定**三個**值時，第一個顏色應用於**上**，第二個應用於**左右**，第三個應用於**下**。
- 當指定**四個**值時，顏色會依序（順時針）應用於**上**、**右**、**下**和**左**。

### 值

- {{CSSxRef("&lt;color&gt;")}}
  - : 定義邊框的顏色。

## 形式定義

{{CSSInfo}}

## 形式語法

{{csssyntax}}

## 範例

### border-color 的完整用法

#### HTML

```html
<div id="justone">
  <p><code>border-color: red;</code> 等同於</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code> 等同於</p>
  <ul>
    <li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="topvertbott">
  <p><code>border-color: red cyan gold;</code> 等同於</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="trbl">
  <p><code>border-color: red cyan black gold;</code> 等同於</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: black;</code></li>
    <li><code>border-left-color: gold;</code></li>
  </ul>
</div>
```

#### CSS

```css
#justone {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#topvertbott {
  border-color: red cyan gold;
}

#trbl {
  border-color: red cyan black gold;
}

/* 為所有 div 設定寬度和樣式 */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
```

#### 結果

{{EmbedLiveSample("border-color_的完整用法", 600, 700)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 邊框顏色相關的 CSS 屬性：{{CSSxRef("border")}}、{{CSSxRef("border-top-color")}}、{{CSSxRef("border-right-color")}}、{{CSSxRef("border-bottom-color")}}、{{CSSxRef("border-left-color")}}
- 其他邊框相關的 CSS 屬性：{{CSSxRef("border-width")}}、{{CSSxRef("border-style")}}
- {{CSSxRef("&lt;color&gt;")}} 資料型別
- 其他顏色相關的屬性：{{CSSxRef("color")}}、{{CSSxRef("background-color")}}、{{CSSxRef("outline-color")}}、{{CSSxRef("text-decoration-color")}}、{{CSSxRef("text-emphasis-color")}}、{{CSSxRef("text-shadow")}}、{{CSSxRef("caret-color")}} 和 {{CSSxRef("column-rule-color")}}
- [使用 CSS 為 HTML 元素上色](/zh-TW/docs/Web/CSS/Guides/Colors/Applying_color)

---
title: flex
slug: Web/CSS/flex
---

{{CSSRef}}

**`flex`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、フレックス*アイテム*をフレックスコンテナーの領域に収めるために、どのように伸長・収縮させるかを指定します。

{{EmbedInteractiveExample("pages/css/flex.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

## 構文

```css
/* キーワード値 */
flex: auto;
flex: initial;
flex: none;

/* 単位がない数値を 1 つ指定: flex-grow */
flex: 2;

/* 幅または高さを 1 つ指定: flex-basis */
flex: 10em;
flex: 30%;
flex: min-content;

/* 値を 2 つ指定: flex-grow | flex-basis */
flex: 1 30px;

/* 値を 2 つ指定: flex-grow | flex-shrink */
flex: 2 2;

/* 値を 3 つ指定: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* グローバル値 */
flex: inherit;
flex: initial;
flex: revert;
flex: unset;
```

`flex` プロパティは 1 つ、2 つ、3 つの値を取ることができます。

- **値 1 つの構文:** 値は以下のうちの 1 つです。

  - `<number>`: この場合は `flex: <number> 1 0` と解釈されます。[`<flex-shrink>`](#flex-shrink) の値は 1 と想定され、[`<flex-basis>`](#flex-basis) の値は `0` と想定されます。
  - キーワード: `none`, `auto`, `initial` のいずれか。

- **値 2 つの構文:**

  - 1 つ目は次の値でなければなりません。

    - {{cssxref("&lt;number&gt;")}} であり、`<flex-grow>` として解釈される。

  - 2 つ目は次の値でなければなりません。

    - {{cssxref("&lt;number&gt;")}}: `<flex-shrink>` として解釈される。
    - {{cssxref("width")}} として有効な値: `<flex-basis>` として解釈される。

- **値 3 つの構文:** 値は以下の順序でなければなりません。

  1. {{cssxref("&lt;number&gt;")}} で `<flex-grow>` として解釈される。
  2. {{cssxref("&lt;number&gt;")}} で `<flex-shrink>` として解釈される。
  3. {{cssxref("width")}} として有効な値で、`<flex-basis>` として解釈される。

### 値

- `initial`
  - : アイテムは `width` および `height` プロパティによって寸法が決められます。コンテナーに合うように最小サイズまで収縮しますが、フレックスコンテナーの空き領域を埋めるために伸長することはありません。これは "`flex: 0 1 auto`" と同等です。
- `auto`
  - : アイテムは `width` および `height` プロパティによって寸法が決められますが、フレックスコンテナーの空き領域を埋めるために伸長したり、コンテナーに合うように最小サイズまで収縮したりします。これは "`flex: 1 1 auto`" と同等です。
- `none`
  - : アイテムは `width` および `height` プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありません。これは"`flex: 0 0 auto`" と同等です。
- `<'flex-grow'>`
  - : フレックスアイテムの {{cssxref("flex-grow")}} を定義します。負の値は無効とみなされます。省略時の既定値は `1` です。 (初期値は `0`)
- `<'flex-shrink'>`
  - : フレックスアイテムの {{cssxref("flex-shrink")}} を定義します。負の値は無効とみなされます。省略時の既定値は `1` です。 (初期値は `1`)
- `<'flex-basis'>`
  - : フレックスアイテムの {{cssxref("flex-basis")}} を定義します。希望サイズが `0` ならば、自由度として解釈されないように単位をつけなければなりません。省略時の既定値は `0` です。 (初期値は `auto`)

<h2 id="Description">解説</h2>

多くの場合、 `flex` には `auto`, `initial`, `none`, または単位のない正の数を設定してください。これらの値の効果を確認するには、以下のフレックスコンテナーの大きさを変更してみてください。

```html hidden
<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item initial">initial</div>
  <div class="item initial">initial</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item initial">initial</div>
  <div class="item none">none</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item four">4</div>
  <div class="item two">2</div>
  <div class="item one">1</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.flex-container {
  background-color: #f4f7f8;
  resize: horizontal;
  overflow: hidden;
  display: flex;
  margin: 1em;
}

.item {
  margin: 1em;
  padding: 0.5em;
  width: 110px;
  min-width: 0;
  background-color: #1b5385;
  color: white;
  font-family: monospace;
  font-size: 13px;
}

.initial {
  flex: initial;
}

.auto {
  flex: auto;
}

.none {
  flex: none;
}

.four {
  flex: 4;
}

.two {
  flex: 2;
}

.one {
  flex: 1;
}
```

{{EmbedLiveSample("Description", 1200, 400, "", "", "example-outcome-frame")}}

既定ではフレックスアイテムは内容物の最小の寸法よりも収縮することはありません。これを変更するには、 {{cssxref("min-width")}} または {{cssxref("min-height")}} を設定してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_flex_auto">flex: auto の設定</h3>

#### HTML

```html
<div id="flex-container">
  <div class="flex-item" id="flex">Flex box (click to toggle raw box)</div>
  <div class="raw-item" id="raw">Raw box</div>
</div>
```

#### CSS

```css
#flex-container {
  display: flex;
  flex-direction: row;
}

#flex-container > .flex-item {
  flex: auto;
}

#flex-container > .raw-item {
  width: 5rem;
}
```

```js hidden
var flex = document.getElementById("flex");
var raw = document.getElementById("raw");
flex.addEventListener("click", function () {
  raw.style.display = raw.style.display == "none" ? "block" : "none";
});
```

```css hidden
#flex-container {
  width: 100%;
  font-family: Consolas, Arial, sans-serif;
}

#flex-container > div {
  border: 1px solid #f00;
  padding: 1rem;
}

#flex-container > .raw-item {
  border: 1px solid #000;
}
```

#### 結果

{{EmbedLiveSample('Setting_flex_auto','100%','100')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[主軸に沿ったフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_

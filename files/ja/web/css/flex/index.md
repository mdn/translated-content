---
title: flex
slug: Web/CSS/flex
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
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

/* 単位がない数値を 1 つ指定: flex-grow
この場合 flex-basis は 0 と等しくなる*/
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
flex: revert-layer;
flex: unset;
```

`flex` プロパティは 1 つ、2 つ、3 つの値を取ることができます。

- **値 1 つの構文:** 値は以下のうちの 1 つです。

  - {{cssxref("&lt;flex-grow&gt;")}} として有効な値の場合、一括指定は `flex: <flex-grow> 1 0` と展開されます。
  - {{cssxref("&lt;flex-basis&gt;")}} として有効な値の場合、一括指定は `flex: 1 1 <flex-basis>` と展開されます。
  - キーワード `none` またはグローバルキーワードのいずれか。

- **値 2 つの構文:**

  - 1 つ目は {{cssxref("flex-grow")}} として有効な値でなければなりません。

  - 2 つ目は以下のいずれかの値でなければなりません。

    - {{cssxref("flex-shrink")}} として有効な値の場合、一括指定は `flex: <flex-grow> <flex-shrink> 0` と展開されます。
    - {{cssxref("flex-basis")}} として有効な値の場合、一括指定は `flex: <flex-grow> 1 <flex-basis>` と展開されます。

- **値 3 つの構文:** 値は以下の順序でなければなりません。

  1. {{cssxref("flex-grow")}} として有効な値。
  2. {{cssxref("flex-shrink")}} として有効な値。
  3. {{cssxref("flex-basis")}} として有効な値。

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

## 解説

多くの場合、 `flex` には `auto`, `initial`, `none`, または単位のない正の数を設定します。これらの値の効果を確認するには、以下のフレックスコンテナーの大きさを変更してみてください。

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

{{EmbedLiveSample("Description", 1200, 400)}}

既定ではフレックスアイテムは内容物の最小の寸法よりも収縮することはありません。これを変更するには、 {{cssxref("min-width")}} または {{cssxref("min-height")}} を設定してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### flex: auto の設定

この例では、 `flex: auto` を持つフレックスアイテムがコンテナー内の余白を吸収するように成長する様子を示しています。

#### HTML

```html
<div id="flex-container">
  <div id="flex-auto">flex: auto (click to toggle raw box)</div>
  <div id="flex-initial">flex: initial</div>
</div>
```

#### CSS

```css
#flex-container {
  display: flex;
  font-family: Consolas, Arial, sans-serif;
}

#flex-container > div {
  padding: 1rem;
}

#flex-auto {
  flex: auto;
  border: 1px solid #f00;
}

#flex-initial {
  border: 1px solid #000;
}
```

#### JavaScript

```js
const flexAuto = document.getElementById("flex-auto");
const flexInitial = document.getElementById("flex-initial");
flexAuto.addEventListener("click", () => {
  flexInitial.style.display =
    flexInitial.style.display === "none" ? "block" : "none";
});
```

#### 結果

このフレックスコンテナーには 2 つのフレックスアイテムがあります。

- "flex: auto" は `flex` の値が [`auto`](auto) です。
- "flex: initial" は `flex` の値が [`initial`](#initial) です。

"flex: initial" のアイテムは、要求されるだけの幅を取りますが、それ以上空間を取るために伸長されることはありません。残りの空間はすべて "flex: auto" が占めます。

"flex: auto" をクリックすると、 "flex: initial" の {{cssxref("display")}} プロパティが `none` に設定され、レイアウトから除去されます。 "flex: auto" のアイテムが伸長され、コンテナー内で利用可能な空間をすべて占めます。

{{EmbedLiveSample('Setting_flex_auto','100%','100')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS フレックスボックスガイド: _[主軸に沿ったフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_

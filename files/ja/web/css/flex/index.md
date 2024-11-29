---
title: flex
slug: Web/CSS/flex
l10n:
  sourceCommit: e050b876063f44bde9bf011a2dfc94c0d90ca863
---

{{CSSRef}}

**`flex`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、{{glossary("flex item","フレックスアイテム")}}をフレックスコンテナーの領域に収めるために、どのように伸長・収縮させるかを指定します。

{{EmbedInteractiveExample("pages/css/flex.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

## 構文

```css
/* キーワード値 */
flex: none; /* 0 0 auto */

/* 単位がない数値を 1 つ指定: flex-grow
この場合 flex-basis は 0 と等しくなる*/
flex: 2; /* 2 1 0% */

/* 幅または高さを 1 つ指定: flex-basis */
flex: auto; /* 1 1 auto */
flex: 10em; /* 1 1 10em */
flex: 30%;
flex: min-content;

/* 値を 2 つ指定: flex-grow | flex-basis */
flex: 1 30px; /* 1 1 30px */

/* 値を 2 つ指定: flex-grow | flex-shrink */
flex: 2 2; /* 2 2 0% */

/* 値を 3 つ指定: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* グローバル値 */
flex: inherit;
flex: initial; /* 0 1 auto */
flex: revert;
flex: revert-layer;
flex: unset;
```

`flex` プロパティは 1 つ、2 つ、3 つの値を取ることができます。

- **値 1 つの構文:** 値は以下のうちの 1 つです。

  - {{cssxref("&lt;flex-grow&gt;")}} として有効な値の場合、すべてのブラウザーで、この一括指定は `flex: <flex-grow> 1 0%` と展開されます。ただし、仕様書では `flex: <flex-grow> 1 0` と展開すべきであるとしています。
  - {{cssxref("&lt;flex-basis&gt;")}} として有効な値の場合、一括指定は `flex: 1 1 <flex-basis>` と展開されます。
  - キーワード `none` またはグローバルキーワードのいずれか。

- **値 2 つの構文:**

  - 1 つ目は {{cssxref("flex-grow")}} として有効な値でなければなりません。

  - 2 つ目は以下のいずれかの値でなければなりません。

    - {{cssxref("flex-shrink")}} として有効な値の場合、すべてのブラウザーにおいて、この一括指定は `flex: <flex-grow> <flex-shrink> 0%` と展開されます。
    - {{cssxref("flex-basis")}} として有効な値の場合、この一括指定は `flex: <flex-grow> 1 <flex-basis>` と展開されます。

- **値 3 つの構文:** 値は以下の順序でなければなりません。

  1. {{cssxref("flex-grow")}} として有効な値。
  2. {{cssxref("flex-shrink")}} として有効な値。
  3. {{cssxref("flex-basis")}} として有効な値。

### 値

- `<'flex-grow'>`
  - : フレックスアイテムの {{cssxref("flex-grow")}} を定義します。負の値は無効とみなされます。省略時の既定値は `1` です。 (初期値は `0`)
- `<'flex-shrink'>`
  - : フレックスアイテムの {{cssxref("flex-shrink")}} を定義します。負の値は無効とみなされます。省略時の既定値は `1` です。 (初期値は `1`)
- `<'flex-basis'>`
  - : フレックスアイテムの {{cssxref("flex-basis")}} を定義します。省略時の既定値は `0%` です。初期値は `auto` です。
- `none`
  - : アイテムは `width` および `height` プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありません。これは"`flex: 0 0 auto`" と同等です。

一般的に望まれるフレックスボックスの効果は、次の `flex` 値を使用して実現できます。

- `initial`: フレックスアイテムは伸長しませんが、縮小することができます。これが既定値では `flex: 0 1 auto` に展開されます。アイテムのサイズは、 `flex-direction` に応じて、 `width` または `height` プロパティに従います。負の空白がある場合、アイテムはコンテナー内に収まるように最小サイズまで縮小しますが、フレックスコンテナー内で正の値があってもそれを吸収するために伸長することはありません。
- `auto`: フレックスアイテムは伸長したり縮小したりします。この値は `flex: 1 1 auto` に展開されます。アイテムは、 `flex-direction` に応じて、その `width` または `height` プロパティに従ってサイズ指定されますが、フレックスコンテナー内で利用できる正の値を吸収するために伸長したり、負の値の場合はコンテナーに合わせて最小サイズまで縮小します。フレックスアイテムは完全に伸縮自在です。
- `none`: フレックスアイテムは伸長も縮小もしません。この値は `flex: 0 0 auto` に展開されます。アイテムは、フレックスコンテナーの方向に応じて、 `width` または `height` プロパティに従ってサイズ調整されます。フレックスアイテムは完全に柔軟性がありません。
- `flex: <number [1,∞]>`: フレックスアイテムの主要サイズは設定した数値に比例します。この値は `flex: <number> 1 0` に展開されます。これは `flex-basis` をゼロに設定し、フレックスアイテムを伸縮自在にします。このアイテムは最小の寸法と同じ幅または高さになり、コンテナー内で利用できる正の値は、このアイテムと兄弟フレックスアイテムの成長係数に基づいて比例配分されます。すべてのフレックスアイテムがこのパターンを使用する場合、すべてのアイテムはその数値に比例したサイズになります。

  > [!WARNING]
  > ブラウザーは `flex` 値で `flex-basis` が指定されていない場合、 `flex-basis` 値に `0%` を使用します。これは仕様で言われている `flex-basis` 値の `0` とは異なります。これはフレックスレイアウトに影響を与える場合があります。この効果を[flex-basis の 0 と 0% の違い](/ja/docs/Web/CSS/flex-basis##flex-basis_の_0_と_0_の違い)の例で見てみましょう。

## 解説

多くの場合、 `flex` には `auto`, `initial`, `none`, または単位のない正の数を設定します。これらの値の効果を確認するには、以下のフレックスコンテナーの大きさを変更してみてください。

```html hidden live-sample___description
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

```css hidden live-sample___description
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

```html-nolint live-sample___setting_flex_auto
<div id="flex-container">
  <div id="flex-auto">
    flex: auto （クリックで `flex: initial` ボックスを削除/追加）
  </div>
  <div id="default">flex: initial</div>
</div>
```

#### CSS

```css hidden live-sample___setting_flex_auto
body * {
  padding: 1rem;
  text-select: none;
  box-sizing: border-box;
  font-family: Consolas, Arial, sans-serif;
}
```

```css live-sample___setting_flex_auto
#flex-container {
  border: 2px dashed gray;
  display: flex;
}

#flex-auto {
  cursor: pointer;
  background-color: wheat;

  flex: auto;
}

#default {
  background-color: lightblue;
}
```

#### JavaScript

```js live-sample___setting_flex_auto
const flexAutoItem = document.getElementById("flex-auto");
const defaultItem = document.getElementById("default");
flexAutoItem.addEventListener("click", () => {
  defaultItem.style.display =
    defaultItem.style.display === "none" ? "block" : "none";
});
```

#### 結果

このフレックスコンテナーには 2 つのフレックスアイテムがあります。

- `#flex-auto` のアイテムは `flex` 値が [`auto`](#auto) です。 `auto` 値は `1 1 auto` に展開され、つまりアイテムは拡大が許可されます。
- `#default` アイテムには `flex` 値が設定されていないので、既定値として [`initial`](#initial) 値が設定されます。 `initial` 値は `0 1 auto` に展開され、アイテムは拡大されません。

`#default` アイテムはその幅が要求されるだけの空間を取りますが、それ以上空間を取るために拡大されることはありません。残りの空間はすべて `#flex-auto` アイテムが占めます。

`#flex-auto` アイテムをクリックすると、 `#default` アイテムの {{cssxref("display")}} プロパティが `none` に設定され、レイアウトから除去されます。すると、 `#flex-auto` アイテムがコンテナー内で利用できる空間をすべて占めるように展開されます。もう一度 `#flex-auto` アイテムをクリックすると、 `#default` アイテムがコンテナー内に再び追加されます。

{{EmbedLiveSample('Setting_flex_auto','100%','150')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)モジュール

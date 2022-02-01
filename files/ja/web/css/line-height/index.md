---
title: line-height
slug: Web/CSS/line-height
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - レイアウト
  - リファレンス
  - テキスト
  - Vertical
  - height
  - recipe:css-property
  - size
browser-compat: css.properties.line-height
translation_of: Web/CSS/line-height
---
{{CSSRef}}

**`line-height`** は [CSS](/ja/docs/Web/CSS) のプロパティで、行ボックスの高さを設定します。これは主にテキストの行間を設定するために使用します。ブロックレベル要素では、要素に含まれる行ボックスの最小の高さを指定します。非[置換](/ja/docs/Web/CSS/Replaced_element)インライン要素では、行ボックスの高さの計算に使われる高さを指定します。

{{EmbedInteractiveExample("pages/css/line-height.html")}}

## 構文

```css
/* キーワード値 */
line-height: normal;

/* 単位のない値: この値を要素のフォントサイズに
掛けたものを使用する */
line-height: 3.5;

/* &lt;length&gt; 値 */
line-height: 3em;

/* &lt;percentage&gt; 値 */
line-height: 34%;

/* グローバル値 */
line-height: inherit;
line-height: initial;
line-height: revert;
line-height: unset;
```

`line-height` プロパティは以下のうちの一つで指定します。

- 一つの `<number>`
- 一つの `<length>`
- 一つの `<percentage>`
- キーワード `normal`

### 値

- `normal`
  - : ユーザーエージェントに依存します。デスクトップブラウザー (Firefox を含む) は 要素の `font-family` によって決まる、おおよそ **`1.2`** という既定値を使います。
- `<number>` (単位なし)
  - : 使用値は、この単位のない {{cssxref("&lt;number&gt;")}} に要素のフォントサイズを掛けたものになります。計算値は、指定された `<number>` と同じです。ほとんどの場合、継承時の予期しない結果を避けるために、これが `line-height` を設定する**好ましい方法です**。
- `<length>`
  - : 行ボックスの高さの計算に、指定した {{cssxref("&lt;length&gt;")}} が使われます。**em** の単位で値が与えられると予期しない結果をになることがあります (下記の例を参照してください)。
- `<percentage>`
  - : 要素自身のフォントサイズに対する相対値です。計算値はこの {{cssxref("&lt;percentage&gt;")}} に要素のフォントサイズの計算値を掛けたものです。**パーセント値**は予期しない結果を生む可能性があります (下記の第 2 の例を参照してください)。
- `-moz-block-height` {{non-standard_inline}}
  - : 行の高さを現在のブロックのコンテンツの高さにします。

## アクセシビリティの考慮

主要な段落コンテンツでは、 `line-height` の値が `1.5` 以上になるようにしてください。これは弱視の人や、認知障碍を負った人に有用です。ページがテキストの寸法が大きくなるように拡大した場合、単位なしの値を使用すれば行の高さも同じ割合で拡大します。

[W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

```css
/* 以下のルールの結果はすべて、同じ line height です */

div { line-height: 1.2;   font-size: 10pt; }   /* 数値/単位なし */
div { line-height: 1.2em; font-size: 10pt; }   /* 長さ */
div { line-height: 120%;  font-size: 10pt; }   /* パーセント値 */
div { font: 10pt/1.2  Georgia,"Bitstream Charter",serif; } /* 一括指定 */
```

`line-height` を設定するには、上記の {{cssxref("font")}} 一括指定プロパティがより便利なことが多いのですが、この場合は同時に `font-family` プロパティも指定しなければなりません。

<h3 id="Prefer_unitless_numbers_for_line-height_values">line-height の値は単位なしの数値が好ましい</h3>

以下の例は、{{cssxref("&lt;number&gt;")}} を使用したほうが {{cssxref("&lt;length&gt;")}} よりも好ましい理由を示しています。 2 つの {{HTMLElement("div")}} 要素を使用しています。最初のものには緑色の境界があり、単位なしの `line-height` の値を使用しています。2 番目には赤色の境界があり、 `line-height` の値を `em` で定義して使用しています。

#### HTML

```html
<div class="box green">
 <h1>予期しない結果を避けるために、単位なしの line-height を使いましょう。</h1>
  length と percentage で line-height を指定すると、継承動作がうまくいきません。 ...
</div>

<div class="box red">
 <h1>予期しない結果を避けるために、単位なしの line-height を使いましょう。</h1>
  length と percentage で line-height を指定すると、継承動作がうまくいきません。 ...
</div>

<!-- 1 つ目の <h1> の line-height はそれ自身のフォントサイズから計算されます   (30px × 1.1) = 33px  -->
<!-- 2 つ目の <h1> の line-height は red div のフォントサイズから計算されます  (15px × 1.1) = 16.5px  おそらく、望む結果ではないでしょう -->
```

#### CSS

```css
.green {
  line-height: 1.1;
  border: solid limegreen;
}

.red {
  line-height: 1.1em;
  border: solid red;
}

h1 {
  font-size: 30px;
}

.box {
  width: 18em;
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
}
```

#### 結果

{{EmbedLiveSample('Prefer_unitless_numbers_for_line-height_values', 600, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("font")}}, {{Cssxref("font-size")}}

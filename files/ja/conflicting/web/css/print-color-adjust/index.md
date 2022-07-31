---
title: color-adjust
slug: conflicting/Web/CSS/print-color-adjust
tags:
  - Adjusting Colors
  - CSS
  - CSS 色
  - CSS プロパティ
  - HTML 色
  - HTML スタイル
  - レイアウト
  - 標準外
  - リファレンス
  - Styling HTML
  - Styling text
  - ウェブ
  - color-adjust
  - recipe:css-property
translation_of: Web/CSS/color-adjust
original_slug: Web/CSS/color-adjust
browser-compat: css.properties.color-adjust
---
{{CSSRef}}

**`color-adjust`** は CSS のプロパティで、{{Glossary("user agent", "ユーザーエージェント")}}が出力端末への要素の表示方法を最適化するために何をするかをウェブ作者が制御することができるものです。既定では、ブラウザーは出力端末の種類と機能を考慮して、要素の外観を必要に応じて慎重に調整することが許可されています。

## 構文

```css
color-adjust: economy;
color-adjust: exact;

/* グローバル値 */
color-adjust: inherit;
color-adjust: initial;
color-adjust: revert;
color-adjust: unset;
```

`color-adjust` プロパティの値は、以下のキーワードのうちの一つでなければなりません。

### 値

- `economy`
  - : ユーザーエージェントは、描画する機器に合わせて出力を最適化するために、適切かつ賢明と思われるように要素に調整を行うことができます。例えば印刷時に、ブラウザーは背景画像をすべて削除し、白い紙で読むのに最適なコントラストになるようにテキストの色を調整することができます。これが既定値です。
- **`exact`**
  - : その要素の内容物は、色、画像、スタイルを思慮深く、または重要な方法で使用するために、特別に注意深く作られたものであり、ブラウザーによって変更されると、事態が改善されるどころか、むしろ悪化する可能性があります。内容物の外観は、ユーザーの要求以外で変更してはいけません。例えば、ページに背景色が白と薄い灰色の間で交互に変化する行を持つ情報のリストがあるとします。背景色を削除すると、内容物の読みやすさが損なわれます。

## 使用上の注意

ブラウザーが指定された外観から外したいと思う理由はいくつかあります。

- 内容物が、その出力機器上ではテキストと背景の色が似たような色になってしまう場合に、読みやすくするため。
- 出力機器がプリンターの場合、インクを節約するために、暗い背景画像や非常に濃い背景画像が削除されることがあります。
- ページを印刷するとき、ブラウザーは、暗い背景と明るい色のテキストを、白い背景と濃い色のテキストに置き換えようとするかもしれません。

色や画像の使用を制御するために、ユーザーエージェントがユーザーに提供しているオプションは、`color-adjust` の値よりも優先されます。言い換えれば、`color-adjust` が何かをするという保証はありません。ユーザーが動作を上書きできるだけでなく、各ユーザーエージェントは、与えられた状況で `color-adjust` をどのように扱うかを自分で決定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Preserving_low_contrast">低コントラストの維持</h3>

この例では、黒の背景色の上に {{cssxref("background-image")}} と半透明の {{cssxref("gradient/linear-gradient()", "linear-gradient()")}} 関数を使用して、中程度の赤のテキストの後ろに濃い青のグラデーションを持つボックスが表示されています。理由はどうあれ、これは紙の上を含めたあらゆるレンダリング環境で望ましい外観ですので、`color-adjust: exact` を使用して、レンダリング時にボックスの色やスタイルを調整しないように指示します。

#### CSS

```css
.my-box {
  background-color: black;
  background-image: linear-gradient(rgba(0, 0, 180, 0.5), rgba(70, 140, 220, 0.5));
  color: #900;
  width: 15rem;
  height: 6rem;
  text-align: center;
  font: 24px "Helvetica", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color-adjust: exact;
}
```

#### HTML

```html
<div class="my-box">
  <p>Need more contrast!</p>
</div>
```

#### 結果

{{EmbedLiveSample("Preserving_low_contrast", 640, 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("-webkit-print-color-adjust")}}

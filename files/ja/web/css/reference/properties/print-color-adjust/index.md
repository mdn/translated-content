---
title: print-color-adjust
slug: Web/CSS/Reference/Properties/print-color-adjust
original_slug: Web/CSS/print-color-adjust
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

**`print-color-adjust`** は CSS のプロパティで、{{Glossary("user agent", "ユーザーエージェント")}}が出力端末上で要素の外観を最適化するために、何らかの調整を行うことができるかを設定します。
既定では、ブラウザーは、出力端末の種類や能力を得た上で、必要かつ賢明であると判断した要素の外観に対する調整を行うことができます。

## 構文

```css
print-color-adjust: economy;
print-color-adjust: exact;

/* グローバル値 */
print-color-adjust: inherit;
print-color-adjust: initial;
print-color-adjust: revert;
print-color-adjust: revert-layer;
print-color-adjust: unset;
```

`print-color-adjust` プロパティは以下のキーワード値のうちの一つで指定します。

### 値

- `economy`
  - : ユーザーエージェントは、レンダリングされる端末に合わせて出力を最適化するために、適切かつ賢明と思われるように要素を調整することができます。
    例えば、印刷する場合、ブラウザーは背景画像をすべて取り除き、白い紙で読むためにコントラストが最適化されるようにテキストの色を調整することを選ぶかもしれません。
    これが既定値です。
- `exact`
  - : 要素のコンテンツは、色、画像、スタイルを慎重かつ重要な方法で使用するように固有かつ慎重に作成されており、ブラウザーによって変更されることは、事態を良くするどころかむしろ悪くするかもしれません。
    コンテンツの外観は、ユーザーからのリクエスト以外では変えてはいけません。
    例えば、あるページに、背景色が白と薄い灰色の間で交互に変化する行を持つ情報のリストを記載することがあります。
    背景色が除去されると、コンテンツの可読性が低下します。

## 使用上の注意

ブラウザーが指定した外観を変更したい理由はいくつかあります。

- コンテンツが出力端末上で近すぎるテキストと背景色を使用しているため、読みやすさが損なわれています。
- 出力端末がプリンターの場合、インクを節約するために、暗い画像や極端に濃い背景画像が除去されることがあります。
- ページを印刷するとき、ブラウザーは暗い背景の明るい色のテキストを白い背景の暗い色のテキストに置き換えたくなるかもしれません。

ユーザーエージェントが色や画像の使用を制御するためにユーザーに提供するオプションは `print-color-adjust` の値よりも優先されます。
言い換えれば、 `print-color-adjust` が何らかの動作をするという保証はありません。
ユーザーがその動作を上書きすることができるだけでなく、それぞれのユーザーエージェントが、どのような状況で `print-color-adjust` をどのように処理するかを自分で決めることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 低コントラストの維持

この例では、 {{cssxref("background-image")}} と半透明の {{cssxref("gradient/linear-gradient", "linear-gradient()")}} 関数を黒の背景色の上に用いて、中程度の赤のテキストの後ろに濃い青のグラデーションがあるボックスを表示しています。
理由はともあれ、これは紙の上も含め、どのようなレンダリング環境でも望ましい外観なので、 `print-color-adjust: exact` も使用して、ボックスをレンダリングするときに色やスタイル設定を行わないようにブラウザーに指示しています。

#### CSS

```css
.my-box {
  background-color: black;
  background-image: linear-gradient(
    rgba(0, 0, 180, 0.5),
    rgba(70, 140, 220, 0.5)
  );
  color: #900;
  width: 15rem;
  height: 6rem;
  text-align: center;
  font:
    24px "Helvetica",
    sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  print-color-adjust: exact;
}
```

#### HTML

```html
<div class="my-box">
  <p>もっとコントラストが必要です！</p>
</div>
```

#### 結果

{{EmbedLiveSample("Preserving_low_contrast", 640, 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/CSS/Guides/Colors/Applying_color)
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}

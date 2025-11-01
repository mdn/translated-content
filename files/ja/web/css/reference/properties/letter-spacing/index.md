---
title: letter-spacing
slug: Web/CSS/Reference/Properties/letter-spacing
original_slug: Web/CSS/letter-spacing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`letter-spacing`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストの水平方向の字間のスペースに関する挙動を設定します。この値はテキストを描画する際に文字間の自然な空間に追加されます。 `letter-spacing` が正の値であった場合は、文字と文字の間が開き、 `letter-spacing` が負の値であった場合は、文字と文字が互いに近づきます。

{{InteractiveExample("CSS デモ: letter-spacing")}}

```css interactive-example-choice
letter-spacing: normal;
```

```css interactive-example-choice
letter-spacing: 0.2rem;
```

```css interactive-example-choice
letter-spacing: 1px;
```

```css interactive-example-choice
letter-spacing: -1px;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    As much mud in the streets as if the waters had but newly retired from the
    face of the earth, and it would not be wonderful to meet a Megalosaurus,
    forty feet long or so, waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: Amstelvar;
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: Amstelvar, serif;
}
```

## 構文

```css
/* キーワード値 */
letter-spacing: normal;

/* <length> 値 */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: 0.3px;

/* グローバル値 */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: revert;
letter-spacing: revert-layer;
letter-spacing: unset;
```

### 値

- `normal`
  - : 現在のフォントでの通常の字間になります。 `0` の値とは異なり、この値は{{glossary("user agent", "ユーザーエージェント")}}が文字列を両端揃えするために字間を変えることを許可します。
- {{cssxref("&lt;length&gt;")}}
  - : 既定の字間に加える字間のスペースを指定します。負の値も指定可能ですが、実装に依存した制限があるかもしれません。ユーザーエージェントは文字列を両端揃えするために、字間スペースをさらに増減させることはありません。

## アクセシビリティ

正と負のどちらでも、大きすぎる値を `letter-spacing` に指定すると、スタイル設定が適用された語句が読みにくくなります。 とても大きな正の値でスタイル設定されたテキストの場合、文字と文字の間隔が広すぎて、語句がバラバラの文字の集まりとして現れることがあります。 とても大きな負の値でスタイル設定されたテキストの場合、文字と文字が重なり合って、語句が認識できなくなることがあります。

フォントの文字幅は種類ごとに異なるため、読みやすい letter-spacing もそれぞれ異なります。すべてのフォントで読みやすさを提供してくれる単一の設定値というものはありません。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 国際化の考慮

書き言葉の中には、字間を適用してはいけないものがあります。例えば、アラビア文字を使用する言語では、次の例のように、つながった文字が視覚的につながったままであることが求められます。字間スペースを適用すると、テキストが壊れたように見えてしまいます。

> <p lang="ar" dir="rtl">شسيبتنمك</p>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 字間の設定

#### HTML

```html live-sample___setting_letter_spacing
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>
```

#### CSS

```css live-sample___setting_letter_spacing
.normal {
  letter-spacing: normal;
}
.em-wide {
  letter-spacing: 0.4em;
}
.em-wider {
  letter-spacing: 1em;
}
.em-tight {
  letter-spacing: -0.05em;
}
.px-wide {
  letter-spacing: 6px;
}
```

#### 結果

{{ EmbedLiveSample('Setting_letter_spacing', 440, 185) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-kerning")}}
- {{cssxref("word-spacing")}}
- SVG の {{SVGAttr("letter-spacing")}} 属性

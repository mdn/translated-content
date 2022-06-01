---
title: font-stretch
slug: Web/CSS/@font-face/font-stretch
tags:
  - '@font-face'
  - アットルール記述子
  - CSS
  - リファレンス
  - 記述子
  - font-stretch
browser-compat: css.at-rules.font-face.font-stretch
translation_of: Web/CSS/@font-face/font-stretch
---
{{CSSRef}}

**`font-stretch`** は CSS の記述子で、ウェブページ作成者が {{cssxref("@font-face")}} ルールで定義されているフォントが通常か、幅狭か、幅広かを指定できるようにします。

ある特定のフォントについて、作成者は同じフォントの異なるスタイルに対応するさまざまなフォントフェイスをダウンロードでき、`font-stretch` 記述子を用いることでフォントフェイスのストレッチを明示的に指定します。CSS 記述子の値は、対応するフォントプロパティの値と同じです。

## 構文

```css
/* 単一の値 */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* 複数値 */
font-stretch: 75% 125%;
font-stretch: condensed ultra-condensed;;
```

`font-weight` プロパティは以下にリストとして示されている値のいずれかを使用して記述されます。

### 値

- `normal`
  - : 普通の文字幅。
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : 通常より幅狭な字を示します。semi-condenced が regular に比べてわずかに幅が細い程度で、そこから右 (ultra-condenced) に向かうにつれてさらに細くなっていきます。
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : 通常より幅広な字を示します。semi-rxpanded がわずかに広い程度で、そこから右 (ultra-expanded) に向かうにつれてさらに広くなっていきます。
- `<percentage>`
  - : 50% から 200% の {{cssxref("&lt;percentage&gt;")}} 値で示します。このプロパティに負の値は許可されていません。

`font-stretch` の旧バージョンでは、プロパティは 9 つのキーワード値のみを許可していましたが、 CSS Fonts Level 4 における構文の拡張により `<percentage>` も使用できるようになりました。これにより、バリアブルフォントで連続した文字幅のようなものを提供できます。TrueType または OpenType バリアブルフォント（後述）の場合、"wdth" バリエーションを使用してさまざまな幅を実装できます。

フォントが指定された値と完全に一致するフェイスが提供されない場合、100% 未満の値は幅狭に現像され、100% 以上の値は幅広に現像されます。

### キーワードとパーセント値の対照表

以下の表は、キーワード指定時と `<percentage>` 指定時の字幅の違いを示しています。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">キーワード</th>
      <th scope="col">パーセント値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ultra-condensed</code></td>
      <td>50%</td>
    </tr>
    <tr>
      <td><code>extra-condensed</code></td>
      <td>62.5%</td>
    </tr>
    <tr>
      <td><code>condensed</code></td>
      <td>75%</td>
    </tr>
    <tr>
      <td><code>semi-condensed</code></td>
      <td>87.5%</td>
    </tr>
    <tr>
      <td><code>normal</code></td>
      <td>100%</td>
    </tr>
    <tr>
      <td><code>semi-expanded</code></td>
      <td>112.5%</td>
    </tr>
    <tr>
      <td><code>expanded</code></td>
      <td>125%</td>
    </tr>
    <tr>
      <td><code>extra-expanded</code></td>
      <td>150%</td>
    </tr>
    <tr>
      <td><code>ultra-expanded</code></td>
      <td>200%</td>
    </tr>
  </tbody>
</table>

### バリアブル（可変）フォント

ほとんどのフォントはキーワードの 1 つに対応する特定の幅を持ちます。しかしながら、バリアブル（可変）フォントと呼ばれる一部のフォントはきめ細かい精度で一連の伸縮が可能になっています。これにより、デザイナーは選択したウェイトをより厳密に制御できます。 これにはパーセント値の範囲が役立ちます。

TrueType または OpenType 可変フォントの場合、 "wdth" バリエーションを使用して、さまざまな字幅を実装します。

## アクセシビリティの考慮

特にフォントの[コントラストカラー比が低い](/ja/docs/Web/CSS/color#accessibility_concerns)場合、識字障害をはじめとする認知症状のある人は凝縮しすぎたフォントを読むのが困難になる場合があります。詳細は以下をご覧ください。

- [MDN 「知覚可能」、ガイドライン 1.4 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html) (英語)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### font-stretch のパーセント値の範囲を指定

以下はローカルの Open Sans 書体をインポートし、normal、semi-condensed、ならびに semi-expanded を使用できるようにするものです。

```css
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-stretch: 87.5% 112.5%;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}

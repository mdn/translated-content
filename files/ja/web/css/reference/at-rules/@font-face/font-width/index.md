---
title: "`font-width` アットルール記述子"
short-title: font-width
slug: Web/CSS/Reference/At-rules/@font-face/font-width
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

{{SeeCompatTable}}

> [!NOTE]
> `font-width` 記述子は、古い別名である {{cssxref("@font-face/font-stretch")}} 記述子の現行の置き換えです。仕様上は `font-width` が推奨される名称ですが、現時点では `font-stretch` の方が幅広いブラウザーで対応しています。詳細については、[代替の例](#font-stretch_による代替の提供)および[ブラウザーの互換性](#ブラウザーの互換性)表を調べてください。

**`font-width`** は [CSS](/ja/docs/Web/CSS) の記述子で、ウェブページ作成者が {{cssxref("@font-face")}} アットルールで指定されたフォントのフェイスを、通常、幅狭、幅広のいずれかに指定できるようにします。

特定のフォントファミリーについて、作成者はそのフォントファミリー内の異なるスタイルに対応するさまざまなフォントフェイスをダウンロードし、`font-width` 記述子を用いてフォントフェイスの幅を明示的に指定できます。`font-width` 記述子で利用できる値は、対応する {{cssxref("font-width")}} プロパティの値と同じです。

## 構文

```css
/* 単一の値 */
font-width: ultra-condensed;
font-width: extra-condensed;
font-width: condensed;
font-width: semi-condensed;
font-width: normal;
font-width: semi-expanded;
font-width: expanded;
font-width: extra-expanded;
font-width: ultra-expanded;
font-width: 50%;
font-width: 100%;
font-width: 200%;

/* 複数の値 */
font-width: 75% 125%;
font-width: condensed ultra-condensed;
```

`font-width` 記述子には、以下に示す値のいずれかを単独で指定できます。

### 値

- `normal`
  - : 通常の幅のフォントフェイスを指定します。
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : 通常より狭幅のフォントフェイスを指定します。ultra-condensed が最も狭くなります。
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : 通常より広幅のフォントフェイスを指定します。ultra-expanded が最も広くなります。
- `<percentage>`
  - : {{cssxref("&lt;percentage&gt;")}} 値で、50% 以上 200% 以下です。この記述子に負の値は許可されていません。

`font-width` の仕様の古いバージョンでは、記述子は 9 つのキーワード値のみを受け付けていましたが、CSS Fonts Level 4 における構文の拡張により `<percentage>` も使用できるようになりました。これにより、可変フォントで連続的に変化する文字幅を提供できます。TrueType または OpenType 可変フォントの場合、`wdth` バリエーションを使用してさまざまな幅を実装します。

フォントに指定された値と完全に一致する書体が存在しない場合、`100%` 未満の値は縮小された書体に、`100%` 以上の値は伸長された書体に割り当てられます。

### キーワードとパーセント値の対応表

以下の表は、キーワード値とパーセント値の対応を示しています。

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

### 可変フォント

ほとんどのフォントはキーワードの 1 つに対応する特定の幅を持ちます。しかし、可変フォントはきめ細かく変化する幅の範囲に対応できるため、デザイナーは選択した太さをより厳密に制御できます。これにはパーセント値の範囲が役立ちます。

TrueType または OpenType 可変フォントの場合、`wdth` バリエーションを使用して、さまざまな字幅を実装します。

## アクセシビリティ

特にフォントの[色のコントラスト比が低い](/ja/docs/Web/CSS/Reference/Properties/color#アクセシビリティ)場合、識字障害をはじめとする認知症状のある人は、幅が狭すぎるフォントを読むのが困難になる場合があります。

- [MDN WCAG を理解する、ガイドライン 1.4 の説明](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)<sup>(英語)</sup>

## 公式定義

{{cssinfo}}

## 形式文法

{{CSSSyntax("font-width")}}

## 例

### font-width のパーセント値の範囲を指定

次の例では、[League Mono](https://www.theleagueofmoveabletype.com/league-mono)<sup>(英語)</sup> フォントを使用しています。この例では、`font-width` 記述子にさまざまなキーワードやパーセント値を指定することで、同じフォントファイルから異なるフォントファミリーを生成しています。

```html
<p>League Mono</p>
<p>League Mono</p>
<p>League Mono</p>
```

```css
@font-face {
  font-family: "League Mono Ultra Condensed";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: ultra-condensed; /* 50% と同じ */
}

@font-face {
  font-family: "League Mono Normal";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: 100%; /* normal と同じ */
}

@font-face {
  font-family: "League Mono Ultra Expanded";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-width: ultra-expanded; /* 200% と同じ */
}

p:nth-child(1) {
  font-family: "League Mono Ultra Condensed", sans-serif;
}

p:nth-child(2) {
  font-family: "League Mono Normal", sans-serif;
}

p:nth-child(3) {
  font-family: "League Mono Ultra Expanded", sans-serif;
}
```

{{EmbedLiveSample("font-width のパーセント値の範囲を指定", "100%", 200)}}

### font-stretch による代替の提供

`font-width` はまだブラウザーの対応が十分ではないため、代替として古い {{cssxref("@font-face/font-stretch")}} 記述子を記載することもできます。対応しているブラウザーが現行の記述子を使用するように、`font-stretch` を `font-width` の前に配置してください。

```css
@font-face {
  font-family: "MyFont";
  src: url("my-font.woff2") format("woff2");
  font-stretch: condensed; /* font-width に対応していないブラウザー向け */
  font-width: condensed;
}
```

> [!NOTE]
> この代替パターンについては、PostCSS 用の [postcss-preset-env](https://preset-env.cssdb.org/)<sup>(英語)</sup> プラグインを使用することで自動化できます。このプラグインには、[postcss-font-width-property](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property)<sup>(英語)</sup> 変換が含まれています。これは、`font-width` の宣言を自動的に `font-stretch` に変換するものです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- より幅広いブラウザーで対応している古い別名の {{cssxref("@font-face/font-stretch")}} 記述子
- {{cssxref("@font-face/font-display", "font-display")}} 記述子
- {{cssxref("@font-face/font-family", "font-family")}} 記述子
- {{cssxref("@font-face/font-weight", "font-weight")}} 記述子
- {{cssxref("@font-face/font-style", "font-style")}} 記述子
- {{cssxref("font-feature-settings", "font-feature-settings")}} プロパティ
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} 記述子
- {{cssxref("@font-face/src", "src")}} 記述子
- {{cssxref("@font-face/unicode-range", "unicode-range")}} 記述子

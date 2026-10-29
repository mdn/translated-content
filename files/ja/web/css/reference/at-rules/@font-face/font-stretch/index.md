---
title: "`font-stretch` アットルール記述子 (CSS)"
short-title: font-stretch
slug: Web/CSS/Reference/At-rules/@font-face/font-stretch
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

> [!NOTE]
> `font-stretch` 記述子は [CSS Fonts specification](https://drafts.csswg.org/css-fonts/#font-stretch-desc) において {{cssxref("@font-face/font-width")}} に改名されました。互換性を維持するため、この仕様書では `font-stretch` を `font-width` 記述子の古い別名として残しています。

**`font-stretch`** は [CSS](/ja/docs/Web/CSS) の記述子で、ウェブページ作成者が {{cssxref("@font-face")}} アットルールで定義されているフォントが通常か、狭幅か、広幅かを指定できるようにします。

ある特定のフォントファミリーについて、作成者はそのフォントファミリー内の異なるスタイルに対応するさまざまなフォントフェイスをダウンロードし、`font-stretch` 記述子を用いてフォントフェイスの伸縮を明示的に指定することができます。

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

/* 複数の値 */
font-stretch: 75% 125%;
font-stretch: condensed ultra-condensed;
```

`font-stretch` プロパティは以下にリストとして示されている値のいずれかを使用して記述されます。

### 値

- `normal`
  - : 通常は狭幅のフォントフェイスを指定します。
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : 通常より狭幅のフォントフェイスを指定します。ultra-condensed が最も狭くなります。
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : 通常より広幅のフォントフェイスを指定します。ultra-expanded が最も広くなります。
- `<percentage>`
  - : {{cssxref("&lt;percentage&gt;")}} 値で、50% 以上 200% 以下です。この記述子に負の値は許可されていません。

`font-stretch` の古いバージョンでは、プロパティは 9 つのキーワード値のみを許可していましたが、CSS Fonts Level 4 における構文の拡張により `<percentage>` も使用できるようになりました。これにより、可変フォントで連続した文字幅のようなものを提供できます。TrueType または OpenType 可変フォント（後述）の場合、`wdth` バリエーションを使用してさまざまな幅を実装できます。

フォントに指定された値と完全に一致する書体が存在しない場合、`100%` 未満の値は縮小された書体に、`100%` 以上の値は伸長された書体に割り当てられます。

### キーワードとパーセント値の対応表

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

### 可変フォント

ほとんどのフォントはキーワードの 1 つに対応する特定の幅を持ちます。しかしながら、可変フォント（バリアブルフォント）と呼ばれる一部のフォントはきめ細かい精度で一連の伸縮が可能になっています。これにより、デザイナーは選択した太さをより厳密に制御できます。 これにはパーセント値の範囲が役立ちます。

TrueType または OpenType 可変フォントの場合、`wdth` バリエーションを使用して、さまざまな字幅を実装します。

## アクセシビリティ

特にフォントの[コントラストカラー比が低い](/ja/docs/Web/CSS/Reference/Properties/color#アクセシビリティ)場合、識字障害をはじめとする認知症状のある人は凝縮しすぎたフォントを読むのが困難になる場合があります。詳細は以下をご覧ください。

- [MDN WCAG を理解する、ガイドライン 1.4 の説明](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)<sup>(英語)</sup>

## 公式定義

{{cssinfo}}

## 形式文法

{{CSSSyntax("font-width")}}

## 例

### font-stretch のパーセント値の範囲を指定

次の例では、[League Mono](https://www.theleagueofmoveabletype.com/league-mono) フォントを使用しています。この例では、`font-stretch` 記述子に様々なキーワードやパーセント値を指定することで、同じフォントファイルから異なるフォントファミリーを生成しています。

```html
<p>League Mono</p>
<p>League Mono</p>
<p>League Mono</p>
```

```css
@font-face {
  font-family: "League Mono Ultra Condensed";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: ultra-condensed; /* 50% と同じ */
}

@font-face {
  font-family: "League Mono Normal";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: 100%; /* normal と同じ */
}

@font-face {
  font-family: "League Mono Ultra Expanded";
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-stretch: ultra-expanded; /* 200% と同じ */
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

{{EmbedLiveSample("Setting font stretch percentages", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 現行の {{cssxref("@font-face/font-width")}} 記述子、`font-stretch` を置き換えるもの
- {{cssxref("@font-face/font-display")}} 記述子
- {{cssxref("@font-face/font-family")}} 記述子
- {{cssxref("@font-face/font-weight")}} 記述子
- {{cssxref("@font-face/font-style")}} 記述子
- {{cssxref("font-feature-settings")}} プロパティ
- {{cssxref("@font-face/font-variation-settings")}} 記述子
- {{cssxref("@font-face/src")}} 記述子
- {{cssxref("@font-face/unicode-range", "unicode-range")}} 記述子

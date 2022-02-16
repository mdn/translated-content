---
title: font-stretch
slug: Web/CSS/@font-face/font-stretch
tags:
  - '@font-face'
  - CSS
  - リファレンス
  - descripter
  - font-stretch
  - 記述子
translation_of: Web/CSS/@font-face/font-stretch
---
{{CSSRef}}{{draft}}

<strong>`font-stretch`</strong> は CSS の記述子で、ウェブページ作成者が {{cssxref("@font-face")}} 規則で定義されているフォントが通常か、幅狭か、幅広かを指定できるようにします。

ある特定のフォントについて、作成者は同じフォントの異なるスタイルに対応するさまざまなフォントフェイスをダウンロードでき、`font-stretch` 記述子を用いることでフォントフェイスのストレッチを明示的に指定します。CSS 記述子の値は、対応するフォントプロパティの値と同じです。

{{cssinfo}}

## 構文

<pre class="brush: css">/* 単一の値 */
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
</pre>

`font-weight` プロパティは以下にリストとして示されている値のいずれかを使用して記述されます。

<h3 id="Values" name="Values">値</h3>

- `normal`
  - : 普通の文字幅。
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : 通常より幅狭な字を示します。semi-condenced が regular に比べてわずかに幅が細い程度で、そこから右 (ultra-condenced) に向かうにつれてさらに細くなっていきます。
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : 通常より幅広な字を示します。semi-rxpanded がわずかに広い程度で、そこから右 (ultra-expanded) に向かうにつれてさらに広くなっていきます。
- `&lt;percentage&gt;`
  - : 50% から 200% の {{cssxref("&lt;percentage&gt;")}} 値で示します。このプロパティに負の値は許可されていません。

`font-stretch` の旧バージョンではプロパティは上記の `&lt;percentage&gt;` 以外の 9 つのキーワードのみを許可していましたが、CSS Fonts Level 4 における構文の拡張により`&lt;percentage&gt;` も使用できるようになりました。これにより、バリアブルフォントは連続した文字幅のようなものを提供できます。TrueType または OpenType バリアブルフォント (後述) の場合、"wdth" バリエーションを使用してさまざまな幅を実装できます。

フォントが指定された値と完全に一致するフェイスが提供されない場合、100% 未満の値は幅狭に現像され、100% 以上の値は幅広に現像されます。

<h3 id="Keyword_to_numeric_mapping" name="Keyword_to_numeric_mapping">キーワードとパーセント値の対照表</h3>

以下の表はキーワード指定の際の字幅と `&lt;percentage&gt;` 指定時の幅の違いを示します:

<table class="fullwidth-table standard-table">
 <thead>
  <tr>
   <th scope="col">キーワード</th>
   <th scope="col">パーセント値</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>`ultra-condensed`</td>
   <td>50%</td>
  </tr>
  <tr>
   <td>`extra-condensed`</td>
   <td>62.5%</td>
  </tr>
  <tr>
   <td>`condensed`</td>
   <td>75%</td>
  </tr>
  <tr>
   <td>`semi-condensed`</td>
   <td>87.5%</td>
  </tr>
  <tr>
   <td>`normal`</td>
   <td>100%</td>
  </tr>
  <tr>
   <td>`semi-expanded`</td>
   <td>112.5%</td>
  </tr>
  <tr>
   <td>`expanded`</td>
   <td>125%</td>
  </tr>
  <tr>
   <td>`extra-expanded`</td>
   <td>150%</td>
  </tr>
  <tr>
   <td>`ultra-expanded`</td>
   <td>200%</td>
  </tr>
 </tbody>
</table>

<h3 id="Variable_fonts" name="Variable_fonts">バリアブル (可変) フォント</h3>

ほとんどのフォントはキーワードの 1 つに対応する特定の幅を持ちます。しかしながら、バリアブル (可変) フォントと呼ばれる一部のフォントはきめ細かい精度で一連の伸縮が可能になっています。これにより、デザイナーは選択したウェイトをより厳密に制御できます。 これにはパーセント範囲が役立ちます。

TrueType または OpenType 可変フォントの場合、"wdth" バリエーションを使用して、さまざまなグリフ幅を実装します。

以下の例が動作するには、CSS Fonts Level 4 構文をサポートするブラウザーが必要です。この構文では font-weight は 1 から 1000 の任意の数値にできます。

## 形式文法

{{csssyntax}}

## 例

以下はローカルの Open Sans 書体をインポートし、normal、semi-condensed、ならびに semi-expanded を使用できるようにするものです。

<pre class="brush: css">@font-face {
  font-family: "Open Sans";
  src: local("Open Sans") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-stretch: 87.5% 112.5%;
}</pre>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮事項</h2>

特にフォントの[コントラストカラー比が低い](/ja/docs/Web/CSS/color#Accessibility_concerns)場合、識字障害をはじめとする認知症状のある人は凝縮しすぎたフォントを読むのが困難になる場合があります。詳細は以下をご覧ください。

<ul>
- [MDN 「知覚可能」、ガイドライン 1.4 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html" rel="noopener) (英語)
</ul>

## 仕様書

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Fonts', '#font-prop-desc', 'font-stretch')}}</td>
   <td>{{Spec2('CSS4 Fonts')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Fonts', '#font-prop-desc', 'font-stretch')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.at-rules.font-face.font-stretch")}}

## 関連情報

<ul>
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
</ul>

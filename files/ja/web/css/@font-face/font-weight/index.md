---
title: font-weight
slug: Web/CSS/@font-face/font-weight
tags:
  - '@font-face'
  - アットルール記述子
  - CSS
  - リファレンス
  - 記述子
  - font-weight
translation_of: Web/CSS/@font-face/font-weight
---
{{CSSRef}}

<strong>`font-weight`</strong> は CSS の記述子で、 {{cssxref("@font-face")}} 規則で指定されたフォントの太さを指定することができます。別に {{cssxref("font-weight")}} プロパティを使用して、テキストを表示する文字の太さや細さを設定することができます。

特定のフォントファミリについて、同じフォントファミリの異なるスタイルに対応する様々なフォントフェイスをダウンロードできるようにすることができ、 `font-weight` 記述子を使用してフォントフェイスの太さを正確に指定することができます。 CSS 記述子の値は対応する font プロパティと同じです。

一般に、特定のフォントファミリには限られた太さのみが利用できます。指定された太さが存在しない場合、近い太さが使用されます。太字がないフォントでは、ふつうはユーザーエージェントが合成します。これを抑止するには、 {{cssxref('font-synthesis')}} プロパティを使用してください。

## 構文

<pre class="notranslate">/* 単一の値 */
font-weight: normal;
font-weight: bold;
font-weight: 400;

/* 複数の値 */
font-weight: normal bold;
font-weight: 300 500;
</pre>

`font-weight` プロパティは、以下に挙げる値のうちの一つを使用して記述します。

<h3 id="Values" name="Values">値</h3>

- `normal`
  - : 通常のフォントの太さです。 `400` と同じです。
- `bold`
  - : 太字のフォントの太さです。 `700` と同じです。
- `&lt;number&gt;`
  - : 1 以上 1000 以下の {{cssxref("&lt;number&gt;")}} 値です。数値が大きいと、数値が小さい物より太さが太い (又は同じ) ことを表します。よく使用される値は、以下の[一般的な太さ名との対応](#Common_weight_name_mapping)にあるように、共通の太さ名に対応しています。

`font-weight` 仕様書の古いバージョンでは、このプロパティはキーワード値と数値 100, 200, 300, 400, 500, 600, 700, 800, 900 のみを受け付けていました。可変フォント以外では実際にはこれらのセット値しか利用できません。ただし、可変フォント以外では細かい値 (例えば 451) は、これらの値のいずれかに変換されます。

CSS Fonts レベル 4 では、構文を拡張して 1 から 1000 までの任意の数値を受け付けるようになり、{{anch("Variable fonts", "可変フォント")}}が導入され、フォントの太さにもっと細かい範囲を使用することができるようになりました。

<h3 id="Common_weight_name_mapping" name="Common_weight_name_mapping">良くある太さ名の対応</h3>

`100` から `900` の数値は、おおよそ以下の太さ名に対応します。

<table>
 <thead>
  <tr>
   <th scope="col">値</th>
   <th scope="col">太さ名</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>100</td>
   <td>Thin (Hairline)</td>
  </tr>
  <tr>
   <td>200</td>
   <td>Extra Light (Ultra Light)</td>
  </tr>
  <tr>
   <td>300</td>
   <td>Light</td>
  </tr>
  <tr>
   <td>400</td>
   <td>Normal</td>
  </tr>
  <tr>
   <td>500</td>
   <td>Medium</td>
  </tr>
  <tr>
   <td>600</td>
   <td>Semi Bold (Demi Bold)</td>
  </tr>
  <tr>
   <td>700</td>
   <td>Bold</td>
  </tr>
  <tr>
   <td>800</td>
   <td>Extra Bold (Ultra Bold)</td>
  </tr>
  <tr>
   <td>900</td>
   <td>Black (Heavy)</td>
  </tr>
 </tbody>
</table>

<h3 id="Variable_fonts" name="Variable_fonts">可変フォント</h3>

多くのフォントは、[一般的な太さ名との対応](#Common_weight_name_mapping)の中の数値の一つに対応する特定の太さを持っています。しかし、可変フォントと呼ばれる一部のフォントは、もっと高い又は低い粒度の太さの範囲に対応しており、これにより、デザイナーは選択した太さをより詳細に制御することができます。

TrueType や OpenType の可変フォントでは、 "wght" バリエーションが様々な幅を実装するために使用されます。

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮</h2>

弱視の人は、 `font-weight` の値が `100` (Thin/Hairline) または `200` (Extra Light) の場合、特にフォントの[コントラスト比が低い場合](/ja/docs/Web/CSS/color#Accessibility_concerns)は、テキストを読むのが難しくなることがあります。

<ul>
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html" rel="noopener)
</ul>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

{{cssinfo}}

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

## 例

<h3 id="Setting_normal_font_weight_in_a_font-face_rule" name="Setting_normal_font_weight_in_a_font-face_rule">@font-face 規則における通常のフォントの太さの設定</h3>

以下の例は、ローカルの Open Sans フォントを見つけるか、またはそれをインポートして、通常の太さのフォントを使用することができます。

<pre class="notranslate">@font-face {
  font-family: "Open Sans";
  src: local("Open Sans") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-weight: 400;
}</pre>

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
   <td>{{SpecName('CSS4 Fonts', '#font-prop-desc', 'font-weight')}}</td>
   <td>{{Spec2('CSS4 Fonts')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Fonts', '#font-prop-desc', 'font-weight')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.at-rules.font-face.font-weight")}}

## 関連情報

<ul>
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
</ul>

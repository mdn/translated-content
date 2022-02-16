---
title: font-family
slug: Web/CSS/@font-face/font-family
tags:
  - '@font-face'
  - アットルール記述子
  - CSS
  - CSS Descriptor
  - CSS Fonts
  - リファレンス
translation_of: Web/CSS/@font-face/font-family
---
{{CSSRef}}

<strong>`font-family`</strong> は CSS の記述子で、 {{cssxref("@font-face")}} 規則で指定されたフォントのフォントファミリーを指定することができます。

## 構文

<pre class="brush: css notranslate">/* &lt;string&gt; 値 */
font-family: "font family";
font-family: 'another font family';

/* &lt;custom-ident&gt; 値 */
font-family: examplefont;
</pre>

<h3 id="Values" name="Values">値</h3>

- `&lt;family-name&gt;`
  - : フォントファミリーの名前を指定します。

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

{{cssinfo}}

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

## 例

<h3 id="Setting_the_font_family_name" name="Setting_the_font_family_name">フォントファミリー名の設定</h3>

<pre class="brush: css notranslate">@font-face {
  font-family: examplefont;
  src: url('examplefont.ttf');
}
</pre>

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
   <td>{{SpecName('CSS3 Fonts', '#font-family-desc', 'font-family')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.at-rules.font-face.font-family")}}

## 関連情報

<ul>
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
</ul>

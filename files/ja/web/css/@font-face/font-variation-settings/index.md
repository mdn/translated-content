---
title: font-variation-settings
slug: Web/CSS/@font-face/font-variation-settings
tags:
  - '@font-face'
  - CSS
  - CSS Descriptor
  - CSS Fonts
  - CSS 記述子
  - リファレンス
translation_of: Web/CSS/@font-face/font-variation-settings
---
{{CSSRef}}

<strong>`font-variation-settings`</strong> は CSS の記述子で、 {{cssxref("@font-face")}} 規則の中で OpenType または TrueType の低レベルのフォントバリエーションを指定することができます。

{{cssinfo}}

## 構文

<div class="syntaxbox">
<pre class="brush: css">/* 既定の設定を使用 */
font-variation-settings: normal;

/* OpenType 軸名の値を設定 */
font-variation-settings: "xhgt" 0.7;</pre>
</div>

<h3 id="Values" name="Values">値</h3>

- `normal`
  - : テキストは既定の設定を使用してレイアウトされます。
- `&lt;string&gt; &lt;number&gt;`
  - : テキストを描画するとき、 OpenType 軸名のリストがテキストレイアウトエンジンに渡され、フォント機能を有効化または無効化します。それぞれの設定は常に {{cssxref("&lt;string&gt;")}} が4つの ASCII 文字で、その後に字句の値を示す {{cssxref("number")}} が続きます。 `&lt;string&gt;` の長さが異なっていたり U+20 - U+7E 以外のコードポイントの範囲の文字が含まれていたりした場合は、プロパティ全体が無効になります。 `&lt;number&gt;` は小数や負の数を取ることができます。

## 形式文法

{{csssyntax}}

## 例

<pre class="brush: css">@font-face {
  font-family: 'OpenTypeFont';
  src: url('open_type_font.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-variation-settings: 'wght' 400, 'wdth' 300;
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
   <td>{{SpecName('CSS4 Fonts', '#font-rend-desc', 'font-variation-settings')}}</td>
   <td>{{Spec2('CSS4 Fonts')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("css.at-rules.font-face.font-variation-settings")}}

## 関連情報

<ul>
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
</ul>

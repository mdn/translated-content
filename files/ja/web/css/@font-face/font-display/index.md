---
title: font-display
slug: Web/CSS/@font-face/font-display
tags:
  - '@font-face'
  - CSS
  - CSS フォント
  - CSS 記述子
  - font-display
  - ウェブフォント
  - フォント
  - リファレンス
translation_of: Web/CSS/@font-face/font-display
---
{{CSSRef}}

<strong>`font-display`</strong> 記述子は、フォントがダウンロード済みで利用できるかに基づいて、どのようにフォントの種類を表示するかを定めます。

## 構文

<pre class="brush:css notranslate">/* キーワード値 */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;</pre>

<h3 id="Values" name="Values">値</h3>

- `auto`
  - : フォントの表示戦略はユーザーエージェントが定義します。
- `block`
  - : フォントに対して短いブロック期の後、永続的にスワップ期を置きます。
- `swap`
  - : フォントに対して非常に短いブロック期の後、永続的にスワップ期を置きます。
- `fallback`
  - : フォントに対して非常に短いブロック期の後、短いスワップ期を置きます。
- `optional`
  - : フォントに対して非常に短いブロック期の後、スワップ期を置きません。

<h2 id="Description" name="Description">説明</h2>

<h3 id="The_font_display_timeline" name="The_font_display_timeline">フォント表示の過程</h3>

フォント表示の過程は、ユーザーエージェントが指定されたダウンロードフォントを利用しようとした瞬間に始まります。過程はフォントを利用して任意の要素を表示する振る舞いを説明する、以下の 3 つの時期に分かれます。

- フォントブロック期
  - : フォントが読み込まれていない場合、そのフォントを利用しようとしている要素は <em>不可視の</em> 代替フォントで描画する必要があります。この時期に読み込みに成功したフォントは、通常通りに利用できます。
- フォントスワップ期
  - : フォントが読み込まれていない場合、そのフォントを利用しようとしている要素は代替フォントで描画する必要があります。この時期に読み込みに成功したフォントは、通常通りに利用できます。
- フォント失敗期
  - : フォントが読み込まれていない場合、ユーザーエージェントは読み込みに失敗したとして扱い、通常のフォントで代替を行います。

<h2 id="Formal_definition" name="Formal_definition">定義</h2>

{{cssinfo}}

<h2 id="Formal_syntax" name="Formal_syntax">構文</h2>

{{csssyntax}}

## 例

<h3 id="Specifying_fallback_font-display" name="Specifying_fallback_font-display">font-display のフォールバックを指定する</h3>

<pre class="brush: css; highlight[7] notranslate">@font-face {
  font-family: ExampleFont;
  src: url(/path/to/fonts/examplefont.woff) format('woff'),
       url(/path/to/fonts/examplefont.eot) format('eot');
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Fonts', '#font-display-desc', 'font-display')}}</td>
   <td>{{Spec2('CSS4 Fonts')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("css.at-rules.font-face.font-display")}}

## 関連情報

<ul>
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
</ul>

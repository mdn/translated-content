---
title: min()
slug: Web/CSS/min()
tags:
  - CSS
  - CSS Function
  - CSS 関数
  - Calculate
  - Compute
  - Function
  - Layout
  - Reference
  - min
translation_of: Web/CSS/min()
---
<div>{{CSSRef}}</div>

<p><strong><code>min()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> 関数で、 CSS プロパティの値としてカンマで区切られた式のリストから最小の (最も負である) 値を設定できます。 <code>min()</code> 関数は {{CSSxRef("&lt;length&gt;")}}、{{CSSxRef("&lt;frequency&gt;")}},、{{CSSxRef("&lt;angle&gt;")}}、{{CSSxRef("&lt;time&gt;")}}、{{CSSxRef("&lt;percentage&gt;")}}、{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;integer&gt;")}} が利用できるところならばどこでも使用することができます。</p>

<pre class="brush: css; no-line-numbers">/* プロパティ: min(式 [, 式]) */
width: min(10vw, 4em, 80px);
</pre>

<p>上の例では、幅は最大 80px ですが、ビューポートの幅が 800px 未満または em の幅が 20px 未満の場合は狭くなります。言い換えれば、最大幅は 80px です。 <code>min()</code> の値はプロパティが取りうる<em>最大の</em>値を提供するものとして考えてください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>min()</code> 関数は、引数としてカンマで区切った1つ以上の式を取り、もっとも小さい (最も負である) 式の値の結果を値として使用します。</p>

<p>式は ({{CSSxRef("&lt;length&gt;")}} などの) 有効な引数の型として評価される、 (算術演算子を使用した) 数式、リテラル値、 {{CSSxRef("attr", "attr()")}} などのその他の式にすることができます。</p>

<p>必要に応じて、式の各値に異なる単位を使用することができます。必要に応じて、計算順序を決めるために括弧を使用することもできます。</p>

<h3 id="Notes" name="Notes">メモ</h3>

<ul>
 <li>表の列、列グループ、行、行グループ、セルの幅と高さのパーセント値を含む数式は、自動レイアウト表と固定レイアウト表のどちらでも、あたかも <code>auto</code> が指定されていたかのように扱われる<em>可能性があります</em>。</li>
 <li><code>max()</code> や他の <code>min()</code> 関数を式の値として入れ子にすることが認められています。式は完全な数式なので、 <code>calc()</code> 関数自体を使わずに直接加算、減算、乗算、除算を使うことができます。</li>
 <li>式は、標準的な演算子の優先順位規則を使用して、加算 ( + )、減算 ( - )、乗算 ( * )、除算 ( / ) の各演算子を組み合わせた値にすることができます。オペランドの + と - の両側には必ず空白を入れてください。式の中のオペランドは、任意の <code>&lt;length&gt;</code> 構文値を使用できます。</li>
 <li><code>min()</code> と <code>max()</code> の値を組み合わせたり、 <code>min()</code> を <code>clamp()</code> や <code>calc()</code> 関数の中で使用したりすることができます (そしてよく必要になります)。</li>
 <li>複数の制約を適用する場合は、3つ以上の引数を与えることができます。</li>
</ul>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Growing_images_to_a_maximum_size" name="Growing_images_to_a_maximum_size">最大サイズまで広がる画像</h3>

<p><code>min()</code> を使用すると、画像の<strong>最大</strong>幅を簡単に設定することができます。この例では、メディアクエリを使用せずに、 CSS は小さい端末ではウィンドウの半分まで伸びるロゴを生成しますが、広い端末では 300px を超えないようにしています。</p>

<pre class="brush: css;">.logo {
  width: min(50vw, 300px);
}
</pre>

<pre class="brush: html;">&lt;img src="https://developer.mozilla.org/static/img/web-docs-sprite.svg" alt="MDN Web Docs" class="logo"&gt;</pre>

<p>{{EmbedLiveSample("Growing_images_to_a_maximum_size", "100%", "110")}}</p>

<p>この例では、ロゴの幅はビューポートが 600px 未満まで狭くならない限り 300px になり、ここからビューポートの幅の 50% を保ちながら、ビューポートが縮小するに従って縮小します。</p>

<h3 id="Setting_a_maximum_size_for_a_label_and_input" name="Setting_a_maximum_size_for_a_label_and_input">ラベルと入力欄のために最大値を設定する</h3>

<p>CSS 関数のもう一つの使用例は、レスポンシブなフォームコントロールに最大サイズを設定します。ラベルと入力欄の幅をフォームの幅の縮小に合わせて縮小できるようにします。</p>

<p>いくらか CSS を見てください。</p>

<pre class="brush: css;">input, label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

form {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
</pre>

<p>ここでは、フォーム自体は、マージン、境界、パディングを含めて、親の幅の 100% になります。入力欄とラベルは、フォームのパディングまでの幅の 40% または幅 400px のどちらか小さい方になるように宣言します。言い換えれば、ラベルと入力欄の幅の最大値は 400px です。最も狭くなるのはフォームの幅の 40% であり、スマートウォッチの画面では非常に小さくなります。</p>

<pre class="brush: html">&lt;form&gt;
  &lt;label&gt;Type something:&lt;/label&gt;
  &lt;input type="text"&gt;
&lt;/form&gt;
</pre>

<p>{{EmbedLiveSample("Setting_a_maximum_size_for_a_label_and_input", "100%", "110")}}</p>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮事項</h2>

<p><code>min()</code> を使用して最大フォントサイズを設定する場合、読めるようにするためにフォントが少なくとも 200% まで拡大できるようにしてください (ズーム機能などの支援技術なしで)。</p>

<pre class="brush: css;"></pre>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html">Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{SpecName("CSS4 Values", "#calc-notation", "min()")}}</td>
   <td>{{Spec2("CSS4 Values")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.types.min")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("calc", "calc()")}}</li>
 <li>{{CSSxRef("clamp", "clamp()")}}</li>
 <li>{{CSSxRef("max", "max()")}}</li>
 <li><a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Values_and_units">CSS 値</a></li>
</ul>

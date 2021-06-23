---
title: max()
slug: Web/CSS/max()
tags:
  - CSS
  - CSS Function
  - Calculate
  - Compute
  - Function
  - Layout
  - Reference
  - Web
  - max
browser-compat: css.types.max
translation_of: Web/CSS/max()
---
<div>{{CSSRef}}</div>

<p><strong><code>max()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/CSS_Functions">関数</a>で、 CSS プロパティの値としてカンマで区切られた式のリストから最大の (最も正である) 値を設定できます。 <code>max()</code> 関数は {{CSSxRef("&lt;length&gt;")}}、{{CSSxRef("&lt;frequency&gt;")}}、{{CSSxRef("&lt;angle&gt;")}}、{{CSSxRef("&lt;time&gt;")}}、{{CSSxRef("&lt;percentage&gt;")}}、{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;integer&gt;")}} が使用できるところならばどこでも使用することができます。</p>

<div>{{EmbedInteractiveExample("pages/css/function-max.html")}}</div>

<p>上の例では、幅が 400px 以上になりますが、ビューポートが 2000px よりも広い場合 (1vw が 20px になるため、 20vw が 400px になる場合) はより広くなります。 <code>max()</code> の値はプロパティが取りうる<em>最小の</em>値を提供するものとして考えてください。</p>

<h2 id="Syntax">構文</h2>

<p><code>max()</code> 関数は、引数としてカンマで区切った 1 つ以上の式を取り、もっとも大きい (最も正である) 式の値をプロパティに割り当てられた値として使用します。</p>

<p>式は、 (算術演算子を用いた) 数式、リテラル値、あるいは、有効な引数の型 ({{CSSxRef("&lt;length&gt;")}} など) に評価される {{CSSxRef("attr()", "attr()")}} などの式や、ネストされた {{CSSxRef("min()", "min()")}} や <code>max()</code> 関数を用いることができます。</p>

<p>式の各値に異なる単位を使用することができます。必要に応じて、計算順序を決めるために括弧を使用することもできます。</p>

<h3 id="Notes">メモ</h3>

<ul>
 <li>表の列、列グループ、行、行グループ、セルの幅と高さのパーセント値を含む数式は、自動レイアウト表と固定レイアウト表のどちらでも、あたかも <code>auto</code> が指定されていたかのように扱われる<em>可能性があります</em>。</li>
 <li><code>min()</code> や他の <code>max()</code> 関数を式の値として入れ子にすることが認められています。式は完全な数式なので、 <code>calc()</code> 関数自体を使わずに直接加算、減算、乗算、除算を使うことができます。</li>
 <li>式は、標準的な演算子の優先順位規則を使用して、加算 ( + )、減算 ( - )、乗算 ( * )、除算 ( / ) の各演算子を組み合わせた値にすることができます。オペランドの + と - の両側には必ず空白を入れてください。式の中のオペランドは、任意の <code>&lt;length&gt;</code> 構文値を使用できます。</li>
 <li><code>min()</code> と <code>max()</code> の値を組み合わせたり、 <code>max()</code> を <code>clamp()</code> や <code>calc()</code> 関数の中で使用したりすることができます (そしてよく必要になります)。</li>
</ul>

<h3 id="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Examples">例</h2>

<h3 id="Setting_a_minimum_size_for_a_font">フォントに最小値を設定する</h3>

<p>CSS 関数のもう一つの使用例は、少なくとも最小サイズを確保しながらフォントサイズを拡大していくことで、読みやすさを確保しながらレスポンシブなフォントサイズを可能にします。</p>

<p>多少の CSS を見てみましょう。</p>

<pre class="brush: css;">h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
</pre>

<p>フォントサイズは最小で 2rem、ページの既定のフォントサイズの 2 倍になります。これは、それが読みやすく、アクセシビリティを確保することを保証します。</p>

<pre class="brush: html;">&lt;h1&gt;This text is always legible, but doesn't change size&lt;/h1&gt;
&lt;h1 class="responsive"&gt;This text is always legible, and is responsive, to a point&lt;/h1&gt;
</pre>

<p>{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}</p>

<p><code>max()</code> 関数はプロパティに許される最小値を探るものと考えてください。</p>

<h2 id="Accessibility_concerns">アクセシビリティの考慮</h2>

<p><code>max()</code> を使用してテキストのサイズを制御する場合は、テキストが常に十分に読める大きさであることを確認してください。提案としては、 {{CSSxRef("min()", "min()")}} 関数を <code>max()</code> の中で入れ子にして使用し、その二番目の値として常に十分な大きさの<a href="/ja/docs/Web/CSS/Length#relative_length_units">相対的な長さの単位</a>を持つようにします。</p>

<pre class="brush: css;">small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}</pre>

<p>これにより、ページが拡大縮小されたときにテキストの大きさが拡大縮小され、最小サイズは <em>1rem</em> になります。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html">Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName("CSS4 Values", "#funcdef-max", "max()")}}</td>
   <td>{{Spec2("CSS4 Values")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("calc()", "calc()")}}</li>
 <li>{{CSSxRef("clamp()", "clamp()")}}</li>
 <li>{{CSSxRef("min()", "min()")}}</li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Values_and_units">CSS 値</a></li>
</ul>

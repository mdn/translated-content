---
title: CSS のガイドライン
slug: MDN/Guidelines/Code_guidelines/CSS
tags:
  - CSS
  - Code
  - Guide
  - Guidelines
  - MDN Meta
translation_of: MDN/Guidelines/Code_guidelines/CSS
---
<div>{{MDNSidebar}}{{IncludeSubnav("/ja/docs/MDN")}}</div>

<p class="summary">次のガイドラインでは、MDN コードの例として CSS を記述する方法について説明します。</p>

<h2 id="In_this_article" name="In_this_article">目次</h2>

<ul>
 <li><a href="#High-level_guidelines">高水準のガイドライン</a>

  <ul>
   <li><a href="#Dont_use_preprocessors">プリプロセッサーを使用しない</a></li>
   <li><a href="#Dont_use_specific_CSS_methodologies">特定の CSS の方法論を使わない</a></li>
   <li><a href="#Use_flexiblerelative_units">柔軟性のある/相対的な単位を使用する</a></li>
   <li><a href="#Dont_use_resets">リセットを使わない</a></li>
   <li><a href="#Plan_your_CSS_%E2%80%94_avoid_overriding">CSS を計画する - オーバーライドを避ける</a></li>
  </ul>
 </li>
 <li><a href="#General_CSS_coding_style">一般的な CSS コーディングスタイル</a>
  <ul>
   <li><a href="#Use_expanded_syntax">展開した構文を使用する</a></li>
   <li><a href="#Favor_longhand_rules_over_terse_shorthand">一括指定よりも個別指定を推奨</a></li>
   <li><a href="#Use_double_quotes_around_values">値の周りには二重引用符を使用する</a></li>
   <li><a href="#Spacing_around_function_parameters">関数の引数の空白</a></li>
   <li><a href="#CSS_comments">CSS のコメント</a></li>
   <li><a href="#Dont_use_!important">!important は使わない</a></li>
  </ul>
 </li>
 <li><a href="#Specific_CSS_syntax_points">具体的な CSS 構文のポイント</a>
  <ul>
   <li><a href="#Turning_off_borders_and_other_properties">ボーダーなどのプロパティをオフにする</a></li>
   <li><a href="#Use_mobile_first_media_queries">「モバイルファースト」のメディアクエリを使用する</a></li>
  </ul>
 </li>
 <li><a href="#Selectors">セレクター</a>
  <ul>
   <li><a href="#Dont_use_ID_selectors">ID セレクターを使わない</a></li>
   <li><a href="#Put_multiple_selectors_on_separate_lines">複数のセレクターは個別の行に配置する</a></li>
  </ul>
 </li>
</ul>

<h2 id="High-level_guidelines" name="High-level_guidelines">高水準のガイドライン</h2>

<h3 id="Dont_use_preprocessors" name="Dont_use_preprocessors">プリプロセッサーを使用しない</h3>

<p>MDN のサンプル コードでは、<a href="https://sass-lang.com/">Sass</a>,<a href="http://lesscss.org/">Less</a>,<a href="http://stylus-lang.com/">Stylus,</a>などのプリプロセッサー構文を使用しないでください。MDN はバニラ CSS 言語を文書化しており、プリプロセッサーを使用することは、例を理解するためのハードルを上げるだけであり、読者を混乱させる可能性があります。</p>

<h3 id="Dont_use_specific_CSS_methodologies" name="Dont_use_specific_CSS_methodologies">特定の CSS の方法論を使わない</h3>

<p>前のガイドラインと同じ精神で、 <a href="http://getbem.com/naming/">BEM</a> や <a href="https://smacss.com/">SMACSS</a> のような特定の CSS の方法論を使って MDN のサンプルコードを書かないようにしてください。これらが有効な CSS 構文であっても、それらの方法論に精通していない人にとっては、命名規則が混乱を招く可能性があります。</p>

<h3 id="Use_flexiblerelative_units" name="Use_flexiblerelative_units">柔軟性のある/相対的な単位を使用する</h3>

<p>可能な限り幅広い端末で最大限の柔軟性を実現するために、コンテナーやパディングなどの寸法は、em や rem のような相対的な単位を使用し、ビューポートの幅に応じて変化させたい場合はパーセント値やビューポートの単位を使用することをお勧めします。これについては、<a href="/ja/docs/Web/Apps/app_layout/responsive_design_building_blocks#Fluid_grids">レスポンシブデザインのビルディングブロック</a>の記事をご覧ください。</p>

<h3 id="Dont_use_resets" name="Dont_use_resets">リセットを使わない</h3>

<p>For maximum control over CSS across platforms, a lot of people used to use CSS resets to remove every style, before then building things back up themselves. This certainly has its merits, but especially in the modern world CSS resets can be overkill, resulting in lots of extra time spent reimplementing things that weren't completely broken in the first place, like default margins, list styles, etc.</p>

<p>If you really feel like you need to use a reset, consider using <a href="http://necolas.github.io/normalize.css/">normalize.css by Nicolas Gallagher</a>, which aims to just make things more consistent across browsers, get rid of some default annoyances that we always remove (the margins on <code>&lt;body&gt;</code>, for example) and fix a few bugs.</p>

<h3 id="Plan_your_CSS_—_avoid_overriding" name="Plan_your_CSS_—_avoid_overriding">CSS を計画する — オーバーライドを避ける</h3>

<p>Before diving in and writing huge chunks of CSS, plan your styles carefully. What general styles are going to be needed, what different layouts do you need to create, what specific overrides need to be created, and are they reusable? Above all, you need to try to avoid too much overriding. If you keep finding yourself writing styles and then cancelling them again a few rulesets down, you probably need to rethink your strategy.</p>

<h2 id="General_CSS_coding_style" name="General_CSS_coding_style">一般的な CSS のコーディングスタイル</h2>

<h3 id="Use_expanded_syntax" name="Use_expanded_syntax">展開した構文を使用する</h3>

<p>There are a variety of CSS writing styles you can use, but we prefer the expanded style, with the selector/opening brace, close brace, and each declaration on a separate line. This maximizes readability, and again, promotes consistency on MDN.</p>

<p>Use this:</p>

<pre class="brush: css example-good notranslate">p {
  color: white;
  background-color: black;
  padding: 1rem;
}</pre>

<p>Not this:</p>

<pre class="brush: css example-bad notranslate">p { color: white; background-color: black; padding: 1rem; }</pre>

<p>In addition, keep these specifics in mind:</p>

<ul>
 <li>Include a space between the selector(s) and the opening curly brace.</li>
 <li>Always include a semi-colon at the end of the last declaration, even though it isn't strictly necessary.</li>
 <li>Put the closing curly brace on a new line.</li>
 <li>In each declaration, put a space after the separating colon, but not before.</li>
 <li>Use 2 spaces for code indentation.</li>
</ul>

<h3 id="Favor_longhand_rules_over_terse_shorthand" name="Favor_longhand_rules_over_terse_shorthand">一括指定よりも個別指定を推奨</h3>

<p>Usually when teaching the specifics of CSS syntax, it is clearer and more obvious to use longhand properties, rather than terse shorthand (unless of course teaching the shorthand is the point of the example). Remember that the point of MDN examples is to teach people, not to be clever or efficient.</p>

<p>To start with, it is often harder to understand what the shorthand is doing. It takes a while to pick apart exactly what {{cssxref("font")}} syntax is doing, for example:</p>

<pre class="brush: css notranslate">font: small-caps bold 2rem/1.5 sans-serif;</pre>

<p>Whereas this is more immediate in terms of understanding:</p>

<pre class="brush: css notranslate">font-variant: small-caps;
font-weight: bold;
font-size: 2rem;
line-height: 1.5;
font-family: sans-serif;</pre>

<p>Second, CSS shorthand comes with potential added pitfalls — default values are set for parts of the syntax that you don't explicitly set, which can produce unexpected resets of values you've set earlier in the cascade, or other expected effects. The {{cssxref("grid")}} property for example sets all of the following default values for items that are not specified:</p>

<ul>
 <li>{{cssxref("grid-template-rows")}}: <code>none</code></li>
 <li>{{cssxref("grid-template-columns")}}: <code>none</code></li>
 <li>{{cssxref("grid-template-areas")}}: <code>none</code></li>
 <li>{{cssxref("grid-auto-rows")}}: <code>auto</code></li>
 <li>{{cssxref("grid-auto-columns")}}: <code>auto</code></li>
 <li>{{cssxref("grid-auto-flow")}}: <code>row</code></li>
 <li>{{cssxref("grid-column-gap")}}: <code>0</code></li>
 <li>{{cssxref("grid-row-gap")}}: <code>0</code></li>
 <li>{{cssxref("column-gap")}}: <code>normal</code></li>
 <li>{{cssxref("row-gap")}}: <code>normal</code></li>
</ul>

<p>In addition, some shorthands only work as expected if you include the different value components in a certain order. In CSS animations for example:</p>

<pre class="brush: css notranslate">/* duration | timing-function | delay | iteration-count
   direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;</pre>

<p>As an example, the first value that can be parsed as a {{cssxref("time", "&lt;time&gt;")}} is assigned to the {{cssxref("animation-duration")}}, and the second one is assigned to {{cssxref("animation-delay")}}. For more details, read the full <a href="/ja/docs/Web/CSS/animation#Syntax">animation syntax</a> details.</p>

<h3 id="Use_double_quotes_around_values" name="Use_double_quotes_around_values">値の周りには二重引用符を使用する</h3>

<p>Where quotes can or should be included, use them, and use double quotes. For example:</p>

<pre class="brush: css example-good notranslate">[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}</pre>

<h3 id="Spacing_around_function_parameters" name="Spacing_around_function_parameters">関数の引数の空白</h3>

<p>Function parameters should have spaces after their separating commas, but not before:</p>

<pre class="brush: css example-good notranslate">color: rgb(255, 0, 0);
background-image: linear-gradient(to bottom, red, black);</pre>

<h3 id="CSS_のコメント">CSS のコメント</h3>

<p>Use CSS-style comments to comment code that isn't self-documenting:</p>

<pre class="brush: css example-good notranslate">/* This is a CSS-style comment */</pre>

<p>Put your comments on separate lines preceeding the code they are referring to:</p>

<pre class="brush: css example-good notranslate">h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}</pre>

<p>Also note that you should leave a space between the asterisks and the comment, in each case.</p>

<h3 id="Dont_use_!important" name="Dont_use_!important">!important は使わない</h3>

<p>!important is a last resort generally only used when you need to override something and there is no other way. It is a bad practice and you should avoid it wherever possible.</p>

<p>Bad:</p>

<pre class="brush: css example-bad notranslate">.bad-code {
  font-size: 4rem !important;
}</pre>

<h2 id="Specific_CSS_syntax_points" name="Specific_CSS_syntax_points">具体的な CSS 構文のポイント</h2>

<h3 id="border_などのプロパティをオフにする">border などのプロパティをオフにする</h3>

<p>When turning off borders (and any other properties that can take <code>0</code> or <code>none</code> as values), use <code>0</code> rather than <code>none</code>:</p>

<pre class="brush: css example-good notranslate">border: 0;</pre>

<h3 id="Use_mobile_first_media_queries" name="Use_mobile_first_media_queries">「モバイルファースト」のメディアクエリを使用する</h3>

<p>When including different sets of styles for different target viewport sizes using media queries inside the same stylesheet, it is a good idea to make the default styling before any media queries have been applied to the document the narrow screen/mobile styling, and then override this for wider viewports inside successive media queries.</p>

<pre class="brush: css example-good notranslate">/*Default CSS layout for narrow screens*/

@media (min-width: 480px) {
  /*CSS for medium width screens*/
}

@media (min-width: 800px) {
  /*CSS for wide screens*/
}

@media (min-width: 1100px) {
  /*CSS for really wide screens*/
}</pre>

<p>This has many advantages, outlined in our <a href="/ja/docs/Web/Apps/Progressive/Responsive/Mobile_first">Mobile First</a> article.</p>

<h2 id="Selectors" name="Selectors">セレクター</h2>

<h3 id="Dont_use_ID_selectors" name="Dont_use_ID_selectors">ID セレクターを使わない</h3>

<p>There is really no need to use ID selectors — they are less flexible (you can't add more if you discover you need more than one), and are harder to override if needed, being of a higher specificity than classes.</p>

<p>Good:</p>

<pre class="brush: css example-good notranslate">.editorial-summary {
  ...
}</pre>

<p>Bad:</p>

<pre class="brush: css example-bad notranslate">#editorial-summary {
  ...
}</pre>

<h3 id="Put_multiple_selectors_on_separate_lines" name="Put_multiple_selectors_on_separate_lines">複数のセレクターは個別の行に配置する</h3>

<p>When a rule has multiple selectors, put each selector on a new line. This makes the selector list easier to read, and can help to make code lines shorter.</p>

<p>Do this:</p>

<pre class="brush: css example-good notranslate">h1,
h2,
h3 {
  font-family: sans-serif;
  text-align: center;
}</pre>

<p>Not this:</p>

<pre class="brush: css example-bad notranslate">h1, h2, h3 {
  font-family: sans-serif;
  text-align: center;
}</pre>

<h2 id="Good_CSS_examples_on_MDN" name="Good_CSS_examples_on_MDN">MDN の良い CSS の例</h2>

<p>CSS プロパティのリファレンスページの冒頭には、簡潔で意味のある良い CSS スニペットが掲載されています。 <a href="/ja/docs/Web/CSS/Reference#Keyword_index">CSS のキーワード索引</a>から探して参照してみてください。そこにあるインタラクティブな例は、一般的に上記のガイドラインに沿って書かれていますが、ガイドラインが新しく書かれる前に書かれたものがほとんどなので、場所によってはそうではない場合があることに注意してください。</p>

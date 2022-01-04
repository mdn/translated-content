---
title: ':empty'
slug: 'Web/CSS/:empty'
tags:
  - CSS
  - Layout
  - NeedsUpdate
  - Pseudo-class
  - Reference
  - Selector
  - Web
translation_of: 'Web/CSS/:empty'
---
<div>{{CSSRef}}</div>

<p><strong><code>:empty</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の <a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>で、子を持たない要素を表します。子とは要素のノードまたは文字列 (ホワイトスペースを含む) です。コメント、処理指示、 CSS の {{cssxref("content")}} は要素が空であるかどうかの判断には影響しません。</p>

<div class="blockIndicator note">
<p><strong>注:</strong> {{SpecName("CSS4 Selectors", "#the-empty-pseudo")}} では、 <code>:empty</code> 擬似クラスは <span style="white-space: nowrap;">{{CSSxRef(":-moz-only-whitespace")}}</span> のような動作に変更されましたが、現在これに対応しているブラウザーはありません。</p>
</div>

<pre class="brush: css no-line-numbers notranslate">/* 内容を含まない &lt;div&gt; 要素を選択 */
div:empty {
  background: lime;
}</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div class="box"&gt;&lt;!-- I will be lime. --&gt;&lt;/div&gt;
&lt;div class="box"&gt;I will be pink.&lt;/div&gt;
&lt;div class="box"&gt;
	&lt;!-- I will be pink in older browsers because of the whitespace around this comment. --&gt;
&lt;/div&gt;
&lt;div class="box"&gt;
	&lt;p&gt;&lt;!-- I will be pink in all browsers because of the non-collapsible whitespace and elements around this comment. --&gt;&lt;/p&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<div class="hidden">
<pre class="brush: css notranslate">body {
  display: flex;
  justify-content: space-around;
}</pre>
</div>

<pre class="brush: css notranslate">.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", 300, 80)}}</p>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮</h2>

<p>読み上げソフトのような支援技術は、空の対話型コンテンツを解釈することができません。すべての対話型コンテンツは、対話型コントロールの親要素 (<a href="/ja/docs/Web/HTML/Element/a">アンカー</a>や<a href="/ja/docs/Web/HTML/Element/button">ボタン</a>など) に文字列の値を設定することで作成されるアクセシブル名を持つ必要があります。アクセシブル名は、支援技術に有益な情報を通信する API である <a href="/ja/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs">accessibility tree</a> で使用されます。</p>

<p>対話型コントロールのアクセシブル名を提供する文字列は、<a href="https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link" rel="noopener">プロパティの組み合わせ</a>を使用して非表示にすることができ、画面からは視覚的に削除されますが、支援技術からは解釈できるようにすることができます。これは、アイコンだけで目的を示すボタンでよく使用されます。</p>

<ul>
 <li><a href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/" rel="noopener">What is an accessible name? | The Paciello Group</a></li>
 <li><a href="https://gomakethings.com/hidden-content-for-better-a11y/">Hidden content for better a11y | Go Make Things</a></li>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_—_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are">MDN "WCAG を理解する ― ガイドライン 2.4 の解説"</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html">Understanding Success Criterion 2.4.4 | W3C Understanding WCAG 2.0</a></li>
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
   <td>{{SpecName("CSS4 Selectors", "#the-empty-pseudo", "<code>:empty</code> 擬似クラス")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>{{CSSxRef(":-moz-only-whitespace")}} のような動作に変更</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Selectors", "#empty-pseudo", "<code>:empty</code> 擬似クラス")}}</td>
   <td>{{Spec2("CSS3 Selectors")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.selectors.empty")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef(":-moz-only-whitespace")}} {{Non-standard_Inline}} – The {{glossary("prefix", "prefixed")}} implementation of the changes in {{SpecName("CSS4 Selectors", "#the-empty-pseudo")}}</li>
 <li>{{CSSxRef(":blank")}} {{Experimental_Inline}}</li>
</ul>

---
title: '::selection'
slug: 'Web/CSS/::selection'
tags:
  - CSS
  - Experimental
  - リファレンス
  - レイアウト
  - 疑似要素
translation_of: 'Web/CSS/::selection'
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>::selection</code></strong> <a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>は、ユーザーが (テキストをマウスでクリックやドラッグすることで) 選択した文書の一部にスタイルを適用します。</span></p>

<pre class="brush: css no-line-numbers notranslate">::selection {
  background-color: cyan;
}</pre>

<h2 id="Allowable_properties" name="Allowable_properties">利用できるプロパティ</h2>

<p><code>::selection</code> 擬似要素では、特定の CSS プロパティのみが利用できます。</p>

<ul>
 <li>{{CSSxRef("color")}}</li>
 <li>{{CSSxRef("background-color")}}</li>
 <li>{{CSSxRef("cursor")}}</li>
 <li>{{CSSxRef("caret-color")}}</li>
 <li>{{CSSxRef("outline")}} およびその個別指定プロパティ</li>
 <li>{{CSSxRef("text-decoration")}} および関連プロパティ</li>
 <li>{{CSSxRef("text-emphasis-color")}}</li>
 <li>{{CSSxRef("text-shadow")}}</li>
</ul>

<div class="warning">
<p>特に、 {{CSSxRef("background-image")}} は無視されます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">/* 従来の Firefox の構文 (バージョン 61 以前) */
::-moz-selection

{{CSSSyntax}}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">この文字列は選択すると特殊なスタイルになります。
&lt;p&gt;こちらの段落も文字列を選択してみてください。&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<div class="hidden">
<pre class="brush: css notranslate">::-moz-selection {
  color: gold;
  background-color: red;
}

p::-moz-selection {
  color: white;
  background-color: blue;
}</pre>
</div>

<pre class="brush: css notranslate">/* 選択されたテキストを赤の背景に金色とする */
::selection {
  color: gold;
  background-color: red;
}

/* 選択されたテキストを青の背景に白とする */
p::selection {
  color: white;
  background-color: blue;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Examples')}}</p>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティの考慮</h2>

<p><strong>純粋に美的な理由により、選択されたテキストのスタイルを上書きしないでください。</strong> — ユーザーは必要に応じてカスタマイズすることができます。認知の問題を抱えている人や、技術的な知識に弱い人にとって、予期せず選択のスタイルが変更されると、機能の理解が妨げられる可能性があります。</p>

<p>上書きする場合は、選択部分のテキストと背景の色の<strong>コントラスト比</strong>が、弱視の人でも読める程度に高いことを確認することが重要です。</p>

<p>色のコントラスト比は、プレイスホルダーの文字列と入力欄の背景色の値とを比較することで決定されます。現在の<a href="https://www.w3.org/WAI/intro/wcag">ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)</a> によれば、文字列コンテンツで <strong>4.5:1</strong> 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。 (WCAG は、大きめの文字列とは、<a href="/ja/docs/Web/CSS/font-weight">太字</a>ならば <code>18.66px</code> 以上、または <code>24px</code> 以上と定義しています。)</p>

<ul>
 <li><a href="https://webaim.org/resources/contrastchecker/">WebAIM: Color Contrast Checker</a></li>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN "WCAG を理解する ― ガイドライン 1.4 の解説"</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0</a></li>
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
   <td>{{SpecName('CSS4 Pseudo-Elements', '#selectordef-selection', '::selection')}}</td>
   <td>{{Spec2('CSS4 Pseudo-Elements')}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>注:</strong> <code>::selection</code> は CSS Selectors Level 3 の草稿にはありましたが、 (特に要素がネストされた場合の) 振る舞いの仕様化が途中であることや相互運用性が確保されなかったこと <a class="external" href="http://lists.w3.org/Archives/Public/www-style/2008Oct/0268.html">(W3C Style mailing list での議論に基づく)</a> から、勧告の過程で削除されました。これは <a href="http://dev.w3.org/csswg/css-pseudo-4/">Pseudo-Elements Level 4</a> で再導入されています。</p>
</div>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.selectors.selection")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>
  <p>{{cssxref("pointer-events")}} - 要素でどのイベントが有効かを制御する</p>
 </li>
</ul>

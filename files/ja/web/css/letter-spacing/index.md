---
title: letter-spacing
slug: Web/CSS/letter-spacing
tags:
  - CSS
  - CSS Property
  - CSS Text
  - Reference
  - SVG
  - 'recipe:css-property'
translation_of: Web/CSS/letter-spacing
---
<div>{{CSSRef}}</div>

<p><strong><code>letter-spacing</code></strong> は<a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、テキストの水平方向の字間のスペースに関する挙動を設定します。この値はテキストを描画する際に文字間の自然な空間に追加されます。 <code>letter-spacing</code> が正の値であった場合は、文字と文字の間が開き、 <code>letter-spacing</code> が負の値であった場合は、文字と文字が互いに近づきます。</p>

<div>{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
letter-spacing: normal;

/* &lt;length&gt; 値 */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;

/* グローバル値 */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>現在のフォントでの通常の字間になります。 <code>0</code> の値とは異なり、この値は{{glossary("user agent", "ユーザーエージェント")}}が文字列を両端揃えするために字間を変えることを許可します。</dd>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>既定の字間に<em>加える</em>字間のスペースを指定します。負の値も指定可能ですが、実装に依存した制限があるかもしれません。ユーザーエージェントは文字列を両端揃えするために、字間スペースをさらに増減させることはありません。</dd>
</dl>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティへの配慮</h2>

<p>正と負のどちらでも、大きすぎる値を <code>letter-spacing</code> に指定すると読みづらくなってしまいます。正の値として大きすぎる場合、文字と文字が離れすぎるせいでひとつの単語ではなくバラバラの文字に見えてしまいます。負の値として大きすぎる場合、文字と文字が重なり合うために何が書いてあるのか分からなくなってしまいます。</p>

<p>フォントの文字幅は種類ごとに異なるため、読みやすい letter-spacing もそれぞれ異なります。すべてのフォントで読みやすさを提供してくれる単一の設定値というものはありません。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html" rel="noopener">Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_letter_spacing" name="Setting_letter_spacing">字間の設定</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p class="normal"&gt;letter spacing&lt;/p&gt;
&lt;p class="em-wide"&gt;letter spacing&lt;/p&gt;
&lt;p class="em-wider"&gt;letter spacing&lt;/p&gt;
&lt;p class="em-tight"&gt;letter spacing&lt;/p&gt;
&lt;p class="px-wide"&gt;letter spacing&lt;/p&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">.normal   { letter-spacing: normal; }
.em-wide  { letter-spacing: 0.4em; }
.em-wider { letter-spacing: 1em; }
.em-tight { letter-spacing: -0.05em; }
.px-wide  { letter-spacing: 6px; }
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Setting_letter_spacing', 440, 185) }}</p>

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
   <td>{{SpecName('CSS3 Text', '#letter-spacing-property', 'letter-spacing')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'text.html#propdef-letter-spacing', 'letter-spacing')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('SVG1.1', 'text.html#LetterSpacingProperty', 'letter-spacing')}}</td>
   <td>{{Spec2('SVG1.1')}}</td>
   <td>SVG での初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#letter-spacing', 'letter-spacing')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.letter-spacing")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("font-kerning")}}</li>
</ul>

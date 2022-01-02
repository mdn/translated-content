---
title: '::before (:before)'
slug: 'Web/CSS/::before'
tags:
  - CSS
  - Layout
  - Pseudo-element
  - Reference
  - Selector
  - Web
translation_of: 'Web/CSS/::before'
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary">CSS における <strong><code>::before</code></strong> は、選択した要素の最初の子要素として<a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>を作成します。よく {{cssxref("content")}} プロパティを使用して、要素に装飾的な内容を追加するために用いられます。</span>この要素は既定でインラインです。</p>

<pre class="brush: css notranslate">/* リンクの前にハートを追加 */
a::before {
  content: "♥";
}</pre>

<div class="note">
<p><strong>注:</strong> <code>::before</code> および <code>::after</code> によって生成される擬似要素は<a href="https://www.w3.org/TR/CSS2/generate.html#before-after-content">要素の整形ボックスに含まれるため</a>、 {{htmlelement("img")}} 要素や {{htmlelement("br")}} 要素のような<em><a href="/ja/docs/Web/CSS/Replaced_element">置換要素</a></em>には適用されません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<div class="note">
<p><strong>注:</strong> CSS3 では<a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>と<a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>を見分けやすくするために、 <code>::before</code> の表記法 (二重コロン付き) が導入されました。ブラウザーでは CSS2 で導入された <code>:before</code> も使用できます。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Adding_quotation_marks" name="Adding_quotation_marks">引用符の追加</h3>

<p><code>::before</code> 擬似要素を使用するシンプルな例の1つ目は、引用符を追加するものです。引用符を挿入するために <code>::before</code> および <code>{{Cssxref("::after")}}</code> の両方を使用しています。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush:html notranslate">&lt;q&gt;引用があることは、&lt;/q&gt;彼は言った、&lt;q&gt;ないよりも良い。&lt;/q&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush:css notranslate">q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Adding_quotation_marks', '500', '50', '')}}</p>

<h3 id="Decorative_example" name="Decorative_example">装飾の例</h3>

<p>{{cssxref("content")}} プロパティ内の文字列や画像は、大体思う通りに整形することができます。</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;span class="ribbon"&gt;オレンジのボックスがどこにあるか注意してください。&lt;/span&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css notranslate">.ribbon {
  background-color: #5BC8F7;
}

.ribbon::before {
  content: "このオレンジのボックスを見てください。";
  background-color: #FFBA10;
  border-color: black;
  border-style: dotted;
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample('Decorative_example', 450, 60)}}</p>

<h3 id="To-do_list" name="To-do_list">やることリスト</h3>

<p>この例では、擬似要素を使用して簡単なやることリストを作成します。この方法は UI に小さな変更を加え、使い勝手を改善するためによく使われます。</p>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li&gt;牛乳を買う&lt;/li&gt;
  &lt;li&gt;犬の散歩をする&lt;/li&gt;
  &lt;li&gt;エクササイズ&lt;/li&gt;
  &lt;li&gt;コードを書く&lt;/li&gt;
  &lt;li&gt;音楽を演奏する&lt;/li&gt;
  &lt;li&gt;リラックスする&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css notranslate">li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #CCFF99;
}

li.done::before {
  content: '';
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('done');
  }
}, false);
</pre>

<p>ここで上記のコードをライブで実行できます。なお、アイコンは使用しておらず、チェックマークは実際に CSS の <code>::before</code> で整形したものです。先に進んでやってみてください。</p>

<h4 id="Result_3" name="Result_3">結果</h4>

<p>{{EmbedLiveSample('To-do_list', 400, 300)}}</p>

<h3 id="Special_characters" name="Special_characters">特殊文字</h3>

<p>これは CSS であり HTML ではないので、 content の値の中でエンティティのマークアップを使用することは<strong>できません</strong>。特殊文字を使用する必要がある場合で、 CSS の content の文字列に入力する場合は、 If you need to use a special character, and can not enter it literally into your CSS content string, use a unicode escape sequence, consisting of a backslash followed by the hexadecimal unicode value.</p>

<h4 id="HTML_4">HTML</h4>

<pre class="brush: html notranslate">&lt;ol&gt;
  &lt;li&gt;Crack Eggs into bowl&lt;/li&gt;
  &lt;li&gt;Add Milk&lt;/li&gt;
  &lt;li&gt;Add Flour&lt;/li&gt;
  &lt;li aria-current='step'&gt;Mix thoroughly into a smooth batter&lt;/li&gt;
  &lt;li&gt;Pour a ladleful of batter onto a hot, greased, flat frying pan&lt;/li&gt;
  &lt;li&gt;Fry until the top of the pancake loses its gloss&lt;/li&gt;
  &lt;li&gt;Flip it over and fry for a couple more minutes&lt;/li&gt;
  &lt;li&gt;serve with your favorite topping&lt;/li&gt;
&lt;/ol&gt;
</pre>

<h4 id="CSS_4">CSS</h4>

<pre class="brush: css notranslate">li {
  padding:0.5em;
}

li[aria-current='step'] {
  font-weight:bold;
}

li[aria-current='step']::after {
  content: " \21E6"; /* Hexadecimal for Unicode Leftwards white arrow*/
  display: inline;
}
</pre>

<h4 id="Result_4">Result</h4>

<p>{{EmbedLiveSample('Special_characters', 400, 200)}}</p>

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
   <td>{{SpecName('CSS4 Pseudo-Elements', '#selectordef-before', '::before')}}</td>
   <td>{{Spec2('CSS4 Pseudo-Elements')}}</td>
   <td>前回の版から重要な変更はなし。</td>
  </tr>
  <tr>
   <td>{{Specname("CSS3 Animations", "", "")}}</td>
   <td>{{Spec2("CSS3 Animations")}}</td>
   <td>擬似要素で定義されたプロパティのアニメーションを許可。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#gen-content', '::before')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>2重コロンの構文を導入。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'generate.html#before-after-content', '::before')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義。コロン1つの構文のみ。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.selectors.before")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref("::after")}}</li>
 <li>{{Cssxref("content")}}</li>
</ul>

---
title: CSS カスタムプロパティ (変数) の使用
slug: Web/CSS/Using_CSS_custom_properties
tags:
  - CSS
  - CSS Variables
  - CSS 変数
  - Guide
  - Web
  - ウェブ
  - カスケード変数
  - カスタムプロパティ
translation_of: Web/CSS/Using_CSS_custom_properties
---
<div>{{cssref}}</div>

<p><strong>カスタムプロパティ</strong> (<strong>CSS 変数</strong>や<strong>カスケード変数</strong>と呼ばれることもあります) は、 CSS の作者によって作成され、文書全体で再利用可能な特定の値を含むエンティティです。それらは、カスタムプロパティ記法 (たとえば、<strong><code>--main-color: black;</code></strong>) によって設定し、 <code><a href="/ja/docs/Web/CSS/var">var()</a></code> 関数 (たとえば、 <code>color: <strong>var(--main-color)</strong>;</code>) を使ってアクセスします。</p>

<p>複雑なウェブサイトには、膨大な量の CSS があり、しばしば同じ値が使われています。たとえば、同じ色が異なる場所で数百使われており、色を変更する場合、グローバルに検索し、置き換えをしなくてはなりません。カスタムプロパティを使えば、一ヶ所に値を保存しておき、複数の場所から参照することができます。更なるメリットとして、意味的な識別をしやすくなります。たとえば、 <code>--main-text-color</code> は <code>#00ff00</code> より、とりわけ同じ色がさまざまな文脈で使われる場合は理解しやすいでしょう。</p>

<p>カスタムプロパティはカスケードの対象であり、親から値を継承します。</p>

<h2 id="Basic_usage" name="Basic_usage">基本的な使用方法</h2>

<p>カスタムプロパティの宣言は、ハイフン2つ (<code>--</code>) で始まるカスタムプロパティ名と、何らかの有効な CSS 値になるプロパティ値を使用することで行われます。他のプロパティと同様、これは規則セットの中で次のように書きます。</p>

<pre class="brush:css; highlight:[2]  language-css"><em>element</em> {
  --main-bg-color: brown;
}
</pre>

<p>なお、規則セットに指定されたセレクターは、カスタムプロパティを使用することができるスコープを定義します。よく使われる方法は、カスタムプロパティを {{cssxref(":root")}} 擬似クラスで定義することで、これにより HTML 文書の全体にわたって適用することができます。</p>

<pre class="brush: css">:root {
  --main-bg-color: brown;
}</pre>

<p>但し、これは常にこうしなければならないわけではありません。カスタムプロパティのスコープを制限する良い理由があるかもしれません。</p>

<div class="blockIndicator note">
<p><strong>メモ</strong>: カスタムプロパティの名前は大文字小文字を区別します。 — <code>--my-color</code> は <code>--My-color</code> とは別なカスタムプロパティとして扱われます。</p>
</div>

<p>前述の通り、普通のプロパティ値の代わりに {{cssxref("var()")}} 関数の中でカスタムプロパティ名を使用することで、カスタムプロパティの値を使用することができます。</p>

<pre class="brush:css; highlight:[2]  language-css"><em>element</em> {
  background-color: var(--main-bg-color);
}
</pre>

<h2 id="First_steps_with_custom_properties" name="First_steps_with_custom_properties">カスタムプロパティの最初のステップ</h2>

<p>それぞれ異なるクラスの要素に同じ色を適用するシンプルな CSS から始めましょう。</p>

<div id="sample1">
<pre class="brush:css; highlight:[3,20,26,32]">.one {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 100px;
}

.five {
  background-color: brown;
}
</pre>

<p>これを下の HTML に適用します。</p>

<pre class="brush:html">&lt;div&gt;
  &lt;div class="one"&gt;1:&lt;/div&gt;
  &lt;div class="two"&gt;2: Text &lt;span class="five"&gt;5 - more text&lt;/span&gt;&lt;/div&gt;
  &lt;input class="three"&gt;
  &lt;textarea class="four"&gt;4: Lorem Ipsum&lt;/textarea&gt;
&lt;/div&gt;
</pre>

<p>このようになるはずです。</p>

<p>{{EmbedLiveSample("sample1",600,180)}}</p>

<p>CSS 中に同じ宣言が繰り返し出てくることに注意してください。いろいろな場所で背景色が <code>brown</code> に設定されています。 CSS の宣言によっては、カスケードの上流でこれを宣言し、 CSS の継承によってこの問題を自然に解決することもできます。些末なプロジェクトを除いて、常にこの手法が使えるわけではありません。 {{cssxref(":root")}} 擬似クラスでカスタムプロパティを宣言し、文書内の必要な場所で使用することで、繰り返して書く必要性を減らすことができるのです。</p>
</div>

<div id="sample2">
<pre class="brush:css; highlight:[2, 7, 24,30,36]">:root {
  --main-bg-color: brown;
}

.one {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 100px;
}

.five {
  background-color: var(--main-bg-color);
}
</pre>

<div class="hidden">
<pre class="brush:html">&lt;div&gt;
    &lt;div class="one"&gt;&lt;/div&gt;
    &lt;div class="two"&gt;Text &lt;span class="five"&gt;- more text&lt;/span&gt;&lt;/div&gt;
    &lt;input class="three"&gt;
    &lt;textarea class="four"&gt;Lorem Ipsum&lt;/textarea&gt;
&lt;/div&gt;
</pre>
</div>

<p>この結果は前の例と同じになるはずであり、望んだプロパティを一つの標準的な宣言で実現することができます。</p>

<h2 id="Inheritance_of_custom_properties" name="Inheritance_of_custom_properties">カスタムプロパティの継承</h2>

<p>カスタムプロパティは継承されます。これはつまり、もし与えられた要素にカスタムプロパティの値がない場合、その値は親の値を使用するということです。 HTML を見てみましょう。</p>

<pre class="brush: html">&lt;div class="one"&gt;
  &lt;div class="two"&gt;
    &lt;div class="three"&gt;&lt;/div&gt;
    &lt;div class="four"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
</div>

<p>下記の CSS を適用するとします。</p>

<pre class="brush: css">.two {
  --test: 10px;
}

.three {
  --test: 2em;
}
</pre>

<p>この場合、 <code>var(--test)</code> の結果は以下の通りです。</p>

<ul>
 <li><code>class="two"</code> の要素: <code>10px</code></li>
 <li><code>class="three"</code> の要素: <code>2em</code></li>
 <li><code>class="four"</code> の要素: <code>10px</code> (親から継承)</li>
 <li><code>class="one"</code> の要素: <em>無効な値</em>、これはすべてのカスタムプロパティの既定値です。</li>
</ul>

<p>これらはカスタムプロパティであり、実際には他のプログラミング言語で見られるような変数ではないことに留意してください。値は必要に応じて計算され、他の規則で使用するために格納されるわけではありません。例えば、要素にプロパティを設定して、兄弟の子孫の規則で受け取ることを期待することはできません。通常の CSS と同様、プロパティは一致するセレクターおよびその子孫に対してのみ設定されます。</p>

<h2 id="Custom_property_fallback_values" name="Custom_property_fallback_values">カスタムプロパティ代替値</h2>

<p><code><a href="/ja/docs/Web/CSS/var">var()</a></code> 関数を使用して、指定された変数が定義されていない場合の<strong>代替値</strong>を複数定義することができます。<a href="/ja/docs/Web/Web_Components/Using_custom_elements">カスタム要素</a>および<a href="/ja/docs/Web/Web_Components/Using_shadow_DOM">シャドウ DOM</a> で作業するときに便利なことがあります。</p>

<div class="blockIndicator note">
<p><strong><u>代替値</u>はブラウザーの互換性を修正するためには使用されません。</strong>ブラウザーが CSS カスタムプロパティに対応していない場合、代替値は助けになりません。<u><strong>これは CSS カスタムプロパティに対応しているブラウザーのための単なるバックアップであり</strong></u>、与えられた変数が定義されていなかったり、無効な値であったりした場合に別な値を選択させるためのものです。</p>
</div>

<p>関数の最初の引数は、代替される<a href="https://www.w3.org/TR/css-variables/#custom-property">カスタムプロパティ</a>の名前です。関数の二番目の引数は、もしあれば、参照された<a href="https://www.w3.org/TR/css-variables/#custom-property">カスタムプロパティ</a>が無効であった場合に代わりに使用される代替値です。この関数は引数を2つだけ受け付けるので、最初のカンマの後のものは、すべて二番目の引数として割り当てます。二番目の引数が無効な場合、例えばカンマで区切られたリストが提供された場合、次のように代替処理は失敗します。</p>

<pre class="brush: css">.two {
  color: var(--my-var, red); /* --my-var が定義されていなければ red */
}

.three {
  background-color: var(--my-var, var(--my-background, pink)); /* my-var 及び --my-background が定義されていなければ pink */
}

.three {
  background-color: var(--my-var, --my-background, pink); /* 無効: "--my-background, pink" */
}</pre>

<p>代替としてのカスタムプロパティを含めるには、上記の二番目の例のようにすることが、複数の代替値を提供するための正しい方法です。この技法は変数全体を解釈するのにより時間が掛かるので、性能上の問題が見られます。</p>

<div class="note">
<p><strong>メモ</strong>: 代替値の構文は、<a href="https://www.w3.org/TR/css-variables/#custom-property">カスタムプロパティ</a>の場合のように、カンマを使用することができます。例えば、 <code>var(--foo, red, blue)</code> は <code>red, blue</code> という代替値を定義します。 — 最初のカンマから関数の終わりまでが代替値とみなされます。</p>
</div>

<h2 id="Validity_and_values" name="Validity_and_values">値と妥当性</h2>

<p>それぞれのプロパティに結び付けられるという CSS の妥当性の伝統的な概念は、カスタムプロパティに関してはあまり使いやすものではありません。カスタムプロパティの値が解析されるとき、ブラウザーはそれがどこで使用されるのか知りません。そのため、ほぼすべての値を<em>妥当</em>なものとみなす必要があります。</p>

<p>残念なことに、これらの値は妥当であっても、意味のない可能性がある場所で <code>var()</code> 関数表記で使用することができてしまいます。プロパティとカスタム変数が無効な CSS 文を生成する可能性があることから、<em>計算時に妥当</em>という新しい概念が導かれます。</p>

<h2 id="What_happens_with_invalid_variables" name="What_happens_with_invalid_variables">無効な変数では何が起こるか</h2>

<p>ブラウザーが無効な <code>var()</code> による置き換えに遭遇した場合、プロパティの初期値または継承値が使用されます。</p>

<p>以下のコードスニペットを考えてみてください。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;この段落は初期値で黒です。&lt;/p&gt; </pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">:root { --text-color: 16px; }
p { color: blue; }
p { color: var(--text-color); }
</pre>

<p>期待通りに、ブラウザーは <code>var(--text-color)</code> の場所を <code>--text-color</code> の値で置き換えようとしますが、 <code>16px</code> は {{cssxref("color")}} に妥当なプロパティ値ではありません。置き換え後、プロパティは意味をなさなくなります。ブラウザーはこの状況を二段階で扱います。</p>

<ol>
 <li>color プロパティが継承可能であるかを確認します。可能ですが、 <code>&lt;p&gt;</code> には color プロパティを持つ親がありません。よって次の段階に進みます。</li>
 <li>値を<strong>既定の初期値</strong>、つまり、黒に設定します。</li>
</ol>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('What_happens_with_invalid_variables')}}</p>

<p>置き換えが無効な場合は代替値ではなく、初期値に置き換えられるため、段落の色は青にはなりません。変数による置き換えなしで <code>color: 16px</code> と書いた場合は、構文エラーとなります。その場合はそれ以前の宣言が使用されます。</p>

<div class="note">
<p><strong>メモ</strong>: CSS プロパティと値の組に構文エラーがあるとその行が無視されるので、無効な代替値を使用した継承値 -- 無効なカスタムプロパティの値を使用すること -- は無視されず、継承される値になります。</p>
</div>

<h2 id="Values_in_JavaScript" name="Values_in_JavaScript">JavaScript での値</h2>

<p>カスタムプロパティを JavaScript で使用するには、標準のプロパティのようにします。</p>

<pre class="brush: js">// インラインスタイルから値を取得
element.style.getPropertyValue("--my-var");

// あらゆる場所の変数を取得
getComputedStyle(element).getPropertyValue("--my-var");

// インラインスタイルに値を設定
element.style.setProperty("--my-var", jsVar + 4);
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.custom-property")}}</p>

<div class="note">
<p><strong>メモ:</strong> 初期仕様のカスタムプロパティの接頭辞は <code>var-</code> でしたが、最新の仕様では <code>--</code> に変更されました。 Firefox 31 以上は最新仕様に従っています。 ({{bug(985838)}})</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("--*", "Custom properties")}}</li>
</ul>

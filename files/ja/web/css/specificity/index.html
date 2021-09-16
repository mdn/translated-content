---
title: 詳細度
slug: Web/CSS/Specificity
tags:
  - CSS
  - Example
  - Reference
  - Web
  - ウェブ
  - ガイド
translation_of: Web/CSS/Specificity
---
<div>{{CSSRef}}</div>

<p class="summary"><ruby><strong>詳細度</strong><rp> (</rp><rt>Specificity</rt><rp>) </rp></ruby>は、どの CSS プロパティが要素に最も関係があるか、すなわち適用されるかをブラウザーが決定する手段です。詳細度は様々な組み合わせの <a href="/ja/docs/Web/CSS/CSS_Reference#Selectors">CSS セレクター</a>で構成される一致規則に基づいています。</p>

<h2 id="How_is_specificity_calculated" name="How_is_specificity_calculated">詳細度の計算方法</h2>

<p>詳細度は CSS 宣言が適用される際の重みであり、一致するセレクターそれぞれの<a href="#Selector_Types">種類</a>の数によって特定されます。複数の宣言が同じ詳細度であれば、 CSS の中で最後に宣言されたものが要素に適用されます。詳細度は同じ要素に対して複数の宣言が行われている場合のみ適用されます。 CSS の規則として、<a href="#Directly_targeted_elements_vs._inherited_styles">直接対象となった要素</a>は要素が祖先から継承した規則よりも常に優先されます。</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> 文書ツリー内における<a href="#Tree_proximity_ignorance">要素の近接性</a>は、詳細度には影響を与えません。</p>
</div>

<h3 id="Crescent_order_of_specificity" name="Crescent_order_of_specificity">詳細度の序列（昇順）</h3>

<p>以下のリストは、セレクターを詳細度の小さな順に並べたものです。</p>

<ol>
 <li><a href="/ja/docs/Web/CSS/Type_selectors">要素型セレクター</a> (例えば <code>h1</code>) と 擬似要素 (例えば <code>::before</code>)</li>
 <li><a href="/ja/docs/Web/CSS/Class_selectors">クラスセレクター</a> (例えば <code>.example</code>)、属性セレクター (例えば <code>[type="radio"]</code>)、擬似クラス (例えば <code>:hover</code>)</li>
 <li><a href="/ja/docs/Web/CSS/ID_selectors">ID セレクター</a> (例えば <code>#example</code>)</li>
</ol>

<p>全称セレクター ({{CSSxRef("Universal_selectors", "*")}}), 結合子 ({{CSSxRef("Adjacent_sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("General_sibling_combinator", "~")}}, <a href="/ja/docs/Web/CSS/Descendant_combinator" style="white-space: nowrap;">'<code> </code>'</a>, {{CSSxRef("Column_combinator", "||")}}), 否定擬似クラス ({{CSSxRef(":not", ":not()")}}) は詳細度に影響を与えません。 (但し、 <code>:not()</code> の<em>中で</em>宣言されたセレクターは影響を与えます。)</p>

<p>詳しくは<a href="/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#Specificity_2">「カスケードと継承」の「詳細度」</a>または <a href="https://specifishity.com">https://specifishity.com</a> をご覧ください。</p>

<p>要素に追加されたインラインスタイル (例えば <code>style="font-weight: bold;"</code>) は、常に外部スタイルシートの中のスタイルを上書きしますので、最も高い詳細度を持っていると考えることもできます。</p>

<h3 id="The_!important_exception" name="The_!important_exception">!important の例外</h3>

<p><code>!important</code> 規則がスタイル宣言で使われたとき、それが宣言リストのどこであっても、この宣言は CSS 内で作られたその他の宣言を上書きします。技術的には <code>!important</code> は詳細度とは無関係ですが、直接作用します。しかし、スタイルの自然の<a href="/ja/docs/Web/CSS/Cascade">カスケード</a>を破壊するためデバッグが難しくなるので、 <code>!important</code> を使用することは<strong>悪い習慣</strong>であり、使用を避けるべきです。同じ要素に二つの競合する宣言が <code>!important</code> 規則付きで適用された場合、より高い詳細度の宣言が適用されます。</p>

<p><strong>いくつかの経験則</strong></p>

<ul>
 <li><code>!important</code> を考える前に、<strong>常に</strong>詳細度を使用する方法を探しましょう。</li>
 <li>ページ固有の CSS が外部の CSS (ブートストラップや正規化 CSS などの外部ライブラリなど) を上書きする場合<strong>のみ</strong>、 <code>!important</code> を使用しましょう。</li>
 <li><strong>決して</strong>プラグインやマッシュアップを書いている時に、 <code>!important</code> を使わないようにしましょう。</li>
 <li><strong>決して</strong>サイト全体の CSS で <code>!important</code> を使わないようにしましょう。</li>
</ul>

<p><strong><code>!important</code> を使用する代わりに、以下のことを検討してください。</strong></p>

<ol>
 <li>CSS のカスケードをもっと利用する</li>
 <li>
  <p>もっと詳細な規則を使う。規則の選択時に要素の前に１つまたは複数の要素を示すと、詳細度が上がり、より優先度が高くなります。</p>

  <pre class="brush: html">&lt;div id="test"&gt;
  &lt;span&gt;Text&lt;/span&gt;
&lt;/div&gt;
</pre>

  <pre class="brush: css">div#test span { color: green; }
div span { color: blue; }
span { color: red; }</pre>

  <p>順番に関わらず、テキストは最も詳細度が高い規則である緑色になります。 (また、青の規則は規則の順番にかかわらず、赤の規則を上書きします)</p>
 </li>
 <li>(2)のナンセンスの特殊なケースとして、何も指定する必要がない場合には、単純にセレクターを複製することで詳細度を高めることができます。
  <pre class="brush: css">#myId#myId span { color: yellow; }
.myClass.myClass span { color: orange; }</pre>
 </li>
</ol>

<h4 id="How_!important_can_be_used" name="How_!important_can_be_used">!important の用途</h4>

<h5 id="A_Overriding_inline_styles" name="A_Overriding_inline_styles">A) インラインスタイルの上書き</h5>

<p>サイトの視覚的な側面をグローバルに設定するグローバル CSS ファイルは、それぞれの要素に直接定義されたインラインスタイルによって上書きされることがあります。インラインスタイルと !important はどちらもとても悪い習慣とみなされていますが、時には前者を上書きするために後者が必要とされることがあります。</p>

<p>この場合、特定のスタイルをグローバル CSS ファイルの中で !important として設定することで、要素に直接設定されたインラインスタイルを上書きすることができます。</p>

<pre class="brush: html">&lt;div class="foo" style="color: red;"&gt;What color am I?&lt;/div&gt;
</pre>

<pre class="brush: css">.foo[style*="color: red"] {
  color: firebrick !important;
}
</pre>

<p>多くの JavaScript フレームワークやライブラリがインラインスタイルを追加します。 <code>!important</code> をとても限定的なセレクターで使用することは、これらのインラインスタイルを上書きする方法の一つです。</p>

<h5 id="B_Overriding_high_specificity" name="B_Overriding_high_specificity">B) 高い詳細度の上書き</h5>

<pre class="brush: css">#someElement p {
  color: blue;
}

p.awesome {
  color: red;
}</pre>

<p><code>#someElement</code> の中にある場合であっても、 <code>awesome</code> の段落を常に赤くするにはどうすればよいでしょうか。 <code>!important</code> がないと、第一の規則がより詳細度が高いので、第二の規則に勝ちます。</p>

<h4 id="!important_を上書きする方法"><code>!important</code> を上書きする方法</h4>

<p>A) <code>!important</code> の付いた CSS 規則と、それにより高い詳細度のセレクターを与えるか (タグ、 id、 class のセレクターへの追加)、同じセレクターで既存の位置より後に CSS 規則を追加するかします。これが動作するのは、詳細度が同じであるとき、最後に定義された規則が勝つからです。</p>

<p>詳細度を高める例です。</p>

<pre class="brush: css">table td    { height: 50px !important; }
.myTable td { height: 50px !important; }
#myTable td { height: 50px !important; }
</pre>

<p>B) または、既存の物の後に同じセレクターを追加します。</p>

<pre class="brush: css">td { height: 50px !important; }</pre>

<p>C) また、できれば、元の規則を書き換えて、どちらも <code>!important</code> を使用しないようにします。</p>

<pre class="brush: css">[id="someElement"] p {
  color: blue;
}

p.awesome {
  color: red;
}</pre>

<p>ID セレクターの代わりとして属性セレクターの一部に id を入れると、クラスと同じ詳細度になります。上記の両方のセレクターとも同じ重みをもつようになりました。詳細度が同等の場合、後に定義された規則が優先されます。</p>

<h4 id="For_more_information_visit" name="For_more_information_visit">詳細情報</h4>

<ul>
 <li><a href="https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css">https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css</a></li>
 <li><a href="https://stackoverflow.com/questions/9245353/what-does-important-in-css-mean">https://stackoverflow.com/questions/9245353/what-does-important-in-css-mean</a></li>
 <li><a href="https://stackoverflow.com/questions/5701149/when-to-use-important-property-in-css">https://stackoverflow.com/questions/5701149/when-to-use-important-property-in-css</a></li>
 <li><a href="https://stackoverflow.com/questions/11178673/how-to-override-important">https://stackoverflow.com/questions/11178673/how-to-override-important</a></li>
 <li><a href="https://stackoverflow.com/questions/2042497/when-to-use-important-to-save-the-day-when-working-with-css">https://stackoverflow.com/questions/2042497/when-to-use-important-to-save-the-day-when-working-with-css</a></li>
</ul>

<h3 id="The_is_and_not_exceptions" name="The_is_and_not_exceptions">:is() および :not() の例外</h3>

<p>全一致の擬似クラス {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}} および否定擬似クラスの {{CSSxRef(":not", ":not()")}} は、詳細度の計算では擬似クラスとは見なされません。しかし、<a href="#Selector_Types">セレクターの種類</a>の数を数える時には、これらの擬似クラスの中に置かれたセレクターは、通常のセレクターのように計算されます。</p>

<div id="The_not_exception-example">
<p>以下の CSS を...</p>

<pre class="brush: css">div.outer p {
  color: orange;
}

div:not(.outer) p {
  color: blueviolet;
}
</pre>

<p>以下の HTML に適用した場合...</p>

<pre class="brush: html">&lt;div class="outer"&gt;
  &lt;p&gt;This is in the outer div.&lt;/p&gt;
  &lt;div class="inner"&gt;
    &lt;p&gt;This text is in the inner div.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<p>画面では、以下のように表示されるでしょう。</p>

<p>{{EmbedLiveSample("The_not_exception-example")}}</p>
</div>

<h3 id="The_where_exception" name="The_where_exception">:where() の例外 {{Experimental_Inline}}</h3>

<p>{{SeeCompatTable}}</p>

<p>詳細度を調整する擬似クラス {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} は、自分自身の詳細度が常にゼロで置き換えられます。</p>

<p>この一連の CSS で...</p>

<pre class="brush: css">div:where(.outer) p {
  color: orange;
}

div p {
  color: blueviolet;
}
</pre>

<div class="hidden">
<pre class="brush: css;">#no-where-support {
  margin: 0.5em;
  border: 1px solid red;
}

#no-where-support:where(*) {
  display: none !important;
}
</pre>
</div>

<p>... 以下の HTML と一緒に使用されたとき ...</p>

<div class="hidden">
<pre class="brush: html;">&lt;div id="no-where-support"&gt;
⚠️ Your browser doesn't support the &lt;code&gt;&lt;a href="https://developer.mozilla.org/docs/Web/CSS/:where" target="_top"&gt;:where()&lt;/a&gt;&lt;/code&gt; pseudo-class.
&lt;/div&gt;
</pre>
</div>

<pre class="brush: html">&lt;div class="outer"&gt;
  &lt;p&gt;This is in the outer div.&lt;/p&gt;
  &lt;div class="inner"&gt;
    &lt;p&gt;This text is in the inner div.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<p>... このように画面に表示されます。</p>

<p>{{EmbedLiveSample("The_where_exception")}}</p>

<h3 id="Form-based_specificity" name="Form-based_specificity">形ベースの詳細度</h3>

<p>詳細度は、セレクターの形に基づきます。次の場合、セレクター <code>*[id="foo"]</code> は ID を選択しているにもかかわらず、セレクターの詳細度を決定する目的においては属性セレクターとして計算されます。</p>

<p>以下のスタイル宣言を...</p>

<pre class="brush: css">*#foo {
  color: green;
}

*[id="foo"] {
  color: purple;
}
</pre>

<p>この HTML に対して適用すると...</p>

<pre class="brush: html">&lt;p id="foo"&gt;I am a sample text.&lt;/p&gt;
</pre>

<p>このようになってしまうでしょう。</p>

<p>{{EmbedLiveSample("Form-based_specificity")}}</p>

<p>なぜなら、それは同じ要素に一致しますが、 ID セレクターがより高い詳細度をもっているからです。</p>

<h3 id="Tree_proximity_ignorance" name="Tree_proximity_ignorance">文書ツリー内の近接性の無視</h3>

<p>指定されたセレクターで参照される要素と他の要素との近接性は、詳細度には影響を与えません。以下のスタイル宣言と...</p>

<pre class="brush: css">body h1 {
  color: green;
}

html h1 {
  color: purple;
}
</pre>

<p>... 以下の HTML で...</p>

<pre class="brush: html">&lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;Here is a title!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>... このように描画されるでしょう。</p>

<p>{{EmbedLiveSample("Tree_proximity_ignorance")}}</p>

<p>これは、二つの宣言が同じ<a href="#Selector_Types">セレクター型</a>数ですが、 <code>html h1</code> セレクターが最後に宣言されているからです。</p>

<h3 id="Directly_targeted_elements_vs._inherited_styles" name="Directly_targeted_elements_vs._inherited_styles">直接対象の要素と継承されたスタイル</h3>

<p>直接対象となる要素のスタイル付けは、継承された規則の詳細度に関わらず、常に継承されたスタイルより優先されます。この CSS は ...</p>

<pre class="brush: css">#parent {
  color: green;
}

h1 {
  color: purple;
}</pre>

<p>... 以下の HTML と共に使用します ...</p>

<pre class="brush: html">&lt;html&gt;
  &lt;body id="parent"&gt;
    &lt;h1&gt;Here is a title!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>... 以下のように表示されます。</p>

<p>{{EmbedLiveSample("Directly_targeted_elements_vs._inherited_styles")}}</p>

<p>これは、 <code>h1</code> セレクターが要素を具体的に対象としていますが、緑のセレクターは親から継承されているだけだからです。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<div style="overflow: auto;">
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
   <td>{{SpecName("CSS4 Selectors", "#specificity-rules", "Calculating a selector's specificity")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>詳細度調整セレクター {{CSSxRef(":where", ":where()")}} を追加</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Selectors", "#specificity", "Calculating a selector's specificity")}}</td>
   <td>{{Spec2("CSS3 Selectors")}}</td>
   <td><a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>を追加</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "cascade.html#specificity", "Calculating a selector's specificity")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td><a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>を追加</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1", "#cascading-order", "Cascading order")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>詳細度の計算: An interactive website to test and understand your own CSS rules - <a href="https://specificity.keegan.st/">https://specificity.keegan.st/</a></li>
 <li>CSS3 セレクターの詳細度 - <a class="external" href="http://www.w3.org/TR/selectors/#specificity" rel="freelink">http://www.w3.org/TR/selectors/#specificity</a></li>
 <li>{{CSS_Key_Concepts}}</li>
</ul>

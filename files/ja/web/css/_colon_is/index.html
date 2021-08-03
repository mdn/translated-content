---
title: ':is() (:matches(), :any())'
slug: 'Web/CSS/:is'
tags:
  - ':is'
  - CSS
  - Experimental
  - Pseudo-class
  - Reference
  - Selector
  - Selectors
  - Web
translation_of: 'Web/CSS/:is'
---
<p>{{CSSRef}}</p>

<div class="blockIndicator note">
<p><strong>注:</strong> <code>:matches()</code> は <code>:is()</code> に改名されました。 (<a href="https://github.com/w3c/csswg-drafts/issues/3258" style="white-space: nowrap;">CSSWG issue #3258</a>)</p>
</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>:is()</code></strong> <a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>関数は、セレクターのリストを引数に取り、リスト中のセレクターの何れか一つに当てはまる要素をすべて選択します。数多くのセレクターを小さくまとめて書くのに便利です。</p>

<pre class="brush: css no-line-numbers notranslate">/* header, main, footer 要素の中の段落で
   マウスポインタが通過中のものをすべて選択 */
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* 上記のものは以下のものと同じ */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
</pre>

<p>なお、現在のところ、ブラウザーはこの機能を <code>:matches()</code> や、古いバージョンの Chrome, Firefox, Safari では、さらに古い接頭辞付きの擬似クラス — <code>:any()</code> で対応しています。 <code>:any()</code> は <code>:matches()</code>/<code>:is()</code> とまったく同じものとして動作しますが、ベンダー接頭辞が必要であり、<a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Selectors">複合セレクター</a>に対応していません。</p>

<p>後方互換性のために古い擬似クラスを使用することができます。</p>

<pre class="brush: css no-line-numbers notranslate">/* -*-any() および :matches() と後方互換性のあるバージョン
   (無効なセレクターがあるとルール全体が無効になるため、
   セレクターを単一のルールにグループ化することはできません。) */
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
</pre>

<h3 id="Forgiving_Selector_Parsing" name="Forgiving_Selector_Parsing">セレクターの解釈の許容</h3>

<p>仕様では <code>:is()</code> と <code>:where()</code> が<a href="https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list">省略可能なセレクターリスト</a>を受け入れることを定義しています。</p>

<p>CSS でセレクターリストを使用している場合、セレクターのどれかが無効な場合、リスト全体が無効とみなされます。 <code>:is()</code> や <code>:where()</code> を使用している場合、1 つでも解釈に失敗するとセレクターのリスト全体が無効とみなされるのではなく、不正なセレクターや対応していないセレクターは無視され、他のセレクターが使用されます。

</p><pre class="brush: css notranslate">:is(:valid, :unsupported) {
  ...
}</pre>

<p><code>:unsupported</code> をに対応していないブラウザーでも、正しく解釈して <code>:valid</code> にマッチします。</p>

<pre class="brush: css notranslate">:valid, :unsupported {
  ...
}</pre>

<p><code>:unupported</code> に対応していないブラウザーでは、 <code>:valid</code> に対応していても無視されます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Cross-browser_example" name="Cross-browser_example">クロスブラウザーの例</h3>

<pre class="brush: html notranslate">&lt;header&gt;
  &lt;p&gt;This is my header paragraph&lt;/p&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;p&gt;This is my first&lt;/p&gt;&lt;p&gt;list item&lt;/p&gt;&lt;/li&gt;
    &lt;li&gt;&lt;p&gt;This is my second&lt;/p&gt;&lt;p&gt;list item&lt;/p&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;This is my footer paragraph&lt;/p&gt;
&lt;/footer&gt;</pre>

<pre class="brush: css notranslate">:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
</pre>

<pre class="brush: js notranslate">let matchedItems;

try {
  matchedItems = document.querySelectorAll(':is(header, main, footer) p');
} catch(e) {
  try {
    matchedItems = document.querySelectorAll(':matches(header, main, footer) p');
  } catch(e) {
    try {
      matchedItems = document.querySelectorAll(':-webkit-any(header, main, footer) p');
    } catch(e) {
      try {
        matchedItems = document.querySelectorAll(':-moz-any(header, main, footer) p');
      } catch(e) {
        console.log('Your browser doesn\'t support :is(), :matches(), or :any()');
      }
    }
  }
}

matchedItems.forEach(applyHandler);

function applyHandler(elem) {
  elem.addEventListener('click', function(e) {
    alert('This paragraph is inside a ' + e.target.parentNode.nodeName);
  });
}</pre>

<p>{{EmbedLiveSample("Cross-browser_example", "100%", 300)}}</p>

<h3 id="Simplifying_list_selectors" name="Simplifying_list_selectors">リストセレクターの簡略化</h3>

<p><code>:is()</code> 擬似クラスは CSS セレクターをとても簡潔にすることができます。例えば以下の CSS の場合、</p>

<pre class="brush: css notranslate">/* 3層（以上）の順序なしリストに四角形を使用 */
ol ol ul,     ol ul ul,     ol menu ul,     ol dir ul,
ol ol menu,   ol ul menu,   ol menu menu,   ol dir menu,
ol ol dir,    ol ul dir,    ol menu dir,    ol dir dir,
ul ol ul,     ul ul ul,     ul menu ul,     ul dir ul,
ul ol menu,   ul ul menu,   ul menu menu,   ul dir menu,
ul ol dir,    ul ul dir,    ul menu dir,    ul dir dir,
menu ol ul,   menu ul ul,   menu menu ul,   menu dir ul,
menu ol menu, menu ul menu, menu menu menu, menu dir menu,
menu ol dir,  menu ul dir,  menu menu dir,  menu dir dir,
dir ol ul,    dir ul ul,    dir menu ul,    dir dir ul,
dir ol menu,  dir ul menu,  dir menu menu,  dir dir menu,
dir ol dir,   dir ul dir,   dir menu dir,   dir dir dir {
  list-style-type: square;
}
</pre>

<p>... これを次のように置き換えることができます。</p>

<pre class="brush: css notranslate">/* 3層（以上）の順序なしリストに四角形を使用 */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {
  list-style-type: square;
}</pre>

<h3 id="Simplifying_section_selectors" name="Simplifying_section_selectors">section セレクターの簡略化</h3>

<p><code>:is()</code> 擬似クラスは、 HTML5 の<a href="/ja/docs/Sections_and_Outlines_of_an_HTML5_document" title="Sections and Outlines of an HTML5 document">セクションと見出し</a>を扱うときに特に便利です。 {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} は互いによく入れ子になりますので、 <code>:is()</code> がないと、1つ1つを選択してスタイルを適用するのが難しくなります。</p>

<p>例えば、 <code>:is()</code> を使わずに、異なる深さの {{HTMLElement("h1")}} 要素にスタイルを適用すると、とても複雑になります。</p>

<pre class="brush: css notranslate">/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
section h1, article h1, aside h1, nav h1 {
  font-size: 25px;
}
/* Level 2 */
section section h1, section article h1, section aside h1, section nav h1,
article section h1, article article h1, article aside h1, article nav h1,
aside section h1, aside article h1, aside aside h1, aside nav h1,
nav section h1, nav article h1, nav aside h1, nav nav h1 {
  font-size: 20px;
}
/* Level 3 */
/* ... 考えたくありません! */
</pre>

<p><code>:is()</code> を使用すると、ずっと簡単になります。</p>

<pre class="brush: css notranslate">/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Level 2 */
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Level 3 */
:is(section, article, aside, nav)
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 15px;
}
</pre>

<h3 id="Difference_between_is_and_where" name="Difference_between_is_and_where">:is() と :where() の違い</h3>

<p>この2つの違いは、 <code>:is()</code> がセレクター全体の詳細度にカウントされるのに対し、 {{CSSxRef(":where", ":where()")}} は詳細度の値が 0 であることです。これは、 <code>:where()</code> のリファレンスページにある<a href="/ja/docs/Web/CSS/:where#Examples">例</a>で示されています。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

{{CSSSyntax}}

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
   <td>{{SpecName("CSS4 Selectors", "#matches-pseudo", ":is()")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.selectors.is")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef(":where", ":where()")}} - <code>:is()</code> と同様ですが、<a href="/ja/docs/Web/CSS/Specificity">詳細度</a>が0です。</li>
 <li><a href="/ja/docs/Web/CSS/Selector_list">セレクターリスト</a></li>
 <li><a href="/ja/docs/Web/Web_Components">ウェブコンポーネント</a></li>
</ul>

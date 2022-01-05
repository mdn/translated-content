---
title: CSS セレクター
slug: Web/CSS/CSS_Selectors
tags:
  - CSS
  - Guide
  - Overview
  - Reference
  - Selectors
translation_of: Web/CSS/CSS_Selectors
---
<div>{{CSSRef("Selectors")}}</div>

<p class="summary"><span class="seoSummary"><strong>CSS セレクター</strong>は、一連の CSS の規則が適用される要素を定義します。</span></p>

<div class="blockIndicator note">
<p><strong>メモ</strong>: 親のアイテム、親の兄弟、親の兄弟の子を選択するセレクターや結合子はありません。</p>
</div>

<h2 id="Basic_selectors" name="Basic_selectors">基本セレクター</h2>

<dl>
 <dt><a href="/ja/docs/Web/CSS/Universal_selectors">全称セレクター</a></dt>
 <dd>すべての要素を選択します。任意で、特定の名前空間に限定したり、すべての名前空間を対象にしたりすることができます。<br>
 <strong>構文:</strong> <code>*</code> <code><var>ns</var>|*</code> <code>*|*</code><br>
 <strong>例:</strong> <code>*</code> は文書のすべての要素を選択します。</dd>
 <dt><a href="/ja/docs/Web/CSS/Type_selectors">要素型セレクター</a></dt>
 <dd>指定されたノード名を持つすべての要素を選択します。<br>
 <strong>構文:</strong> <code><var>elementname</var></code><br>
 <strong>例:</strong> <code>input</code> はあらゆる {{HTMLElement("input")}} 要素を選択します。</dd>
 <dt><a href="/ja/docs/Web/CSS/Class_selectors">クラスセレクター</a></dt>
 <dd>指定された <code>class</code> 属性を持つすべての要素を選択します。<br>
 <strong>構文:</strong> <code>.<var>classname</var></code><br>
 <strong>例:</strong> <code>.index</code> は "index" クラスを持つあらゆる要素を選択します。</dd>
 <dt><a href="/ja/docs/Web/CSS/ID_selectors">ID セレクター</a></dt>
 <dd><code>id</code> 属性の値に基づいて要素を選択します。文書中に指定された ID を持つ要素は1つしかないはずです。<br>
 <strong>構文:</strong> <code>#<var>idname</var></code><br>
 <strong>例:</strong> <code>#toc</code> は "toc" という ID を持つ要素を選択します。</dd>
 <dt><a href="/ja/docs/Web/CSS/Attribute_selectors">属性セレクター</a></dt>
 <dd>指定された属性を持つ要素をすべて選択します。<br>
 <strong>構文:</strong> <code>[<var>attr</var>]</code> <code>[<var>attr</var>=<var>value</var>]</code> <code>[<var>attr</var>~=<var>value</var>]</code> <code>[<var>attr</var>|=<var>value</var>]</code> <code>[<var>attr</var>^=<var>value</var>]</code> <code>[<var>attr</var>$=<var>value</var>]</code> <code>[<var>attr</var>*=<var>value</var>]</code><br>
 <strong>例:</strong> <code>[autoplay]</code> は <code>autoplay</code> 属性が（どんな値でも）設定されているすべての要素を選択します。</dd>
</dl>

<h2 id="グループ化セレクター">グループ化セレクター</h2>

<dl>
 <dt><a href="/ja/docs/Web/CSS/Selector_list">セレクターリスト</a></dt>
 <dd><code>,</code> はグループ化の手段であり、一致するすべてのノードを選択します。<br>
 <strong>構文:</strong> <code style="white-space: nowrap;"><var>A</var>, <var>B</var></code><br>
 <strong>例:</strong> <code>div, span</code> は {{HTMLElement("span")}} と {{HTMLElement("div")}} の両要素に一致します。</dd>
</dl>

<h2 id="Combinators" name="Combinators">結合子</h2>

<dl>
 <dt><a href="/ja/docs/Web/CSS/Descendant_combinator">子孫結合子</a></dt>
 <dd><code> </code> (空白) 結合子は、第1の要素の子孫にあたるノードを選択します。<br>
 <strong>構文:</strong> <code style="white-space: nowrap;"><var>A</var> <var>B</var></code><br>
 <strong>例:</strong> <code>div span</code> は {{HTMLElement("div")}} 要素の中にある {{HTMLElement("span")}} 要素をすべて選択します。</dd>
 <dt><a href="/ja/docs/Web/CSS/Child_combinator">子結合子</a></dt>
 <dd><code>&gt;</code> 結合子は、第1の要素の直接の子に当たるノードを選択します。<br>
 <strong>構文:</strong> <code style="white-space: nowrap;"><var>A</var> &gt; <var>B</var></code><br>
 <strong>例:</strong> <code>ul &gt; li</code> は {{HTMLElement("ul")}} 要素の内側に直接ネストされた {{HTMLElement("li")}} 要素をすべて選択します。</dd>
 <dt><a href="/ja/docs/Web/CSS/General_sibling_combinator">一般兄弟結合子</a></dt>
 <dd><code>~</code> 結合子は兄弟を選択します。つまり、第2の要素が第1の要素の後にあり（ただし直後でなくても構わない）、両者が同じ親を持つ場合です。<br>
 <strong>構文:</strong> <code style="white-space: nowrap;"><var>A</var> ~ <var>B</var></code><br>
 <strong>例:</strong> <code>p ~ span</code> は {{HTMLElement("p")}} 要素の後にある {{HTMLElement("span")}} 要素をすべて選択します。</dd>
 <dt><a href="/ja/docs/Web/CSS/Adjacent_sibling_combinator">隣接兄弟結合子</a></dt>
 <dd><code>+</code> 結合子は隣接する兄弟を選択します。つまり、第2の要素が第1の要素の直後にあり、両者が同じ親を持つ場合です。<br>
 <strong>構文:</strong> <code style="white-space: nowrap;"><var>A</var> + <var>B</var></code><br>
 <strong>例:</strong> <code>h2 + p</code> は {{HTMLElement("h2")}} 要素の後にすぐに続く {{HTMLElement("p")}} 要素をすべて選択します。</dd>
 <dt><a href="/ja/docs/Web/CSS/Column_combinator">列結合子</a> {{Experimental_Inline}}</dt>
 <dd><code>||</code> 結合子は列に所属するノードを選択します。<br>
 <strong>構文:</strong> <code style="white-space: nowrap;"><var>A</var> || <var>B</var></code><br>
 <strong>例:</strong> <code>col || td</code> は {{HTMLElement("col")}} 要素のスコープに所属するすべての {{HTMLElement("td")}} 要素を選択します。</dd>
</dl>

<h2 id="Pseudo" name="Pseudo">擬似表記</h2>

<dl>
 <dt><a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a></dt>
 <dd><code>:</code> 表記により、文書ツリーの中に含まれない状態情報によって要素を選択することができます。<br>
 <strong>例:</strong> <code>a:visited</code> はユーザーが訪問済みの {{HTMLElement("a")}} 要素をすべて選択します。</dd>
 <dt><a href="/ja/docs/Web/CSS/Pseudo-elements">疑似要素</a></dt>
 <dt><code>::</code> 表記は、 HTML に含まれていないエンティティを表現します。</dt>
 <dd><strong>例:</strong> <code>p::first-line</code> はすべての {{HTMLElement("p")}} 要素の先頭行を選択します。</dd>
</dl>

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
   <td>{{SpecName("CSS4 Selectors")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td><code>||</code> 列結合子、グリッド構造セレクター、論理結合子、位置、時系列、リソース状態、言語、 UI の疑似クラス、属性値の選択における ASCII 文字の大文字小文字の区別の有無を示す修飾子を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Selectors")}}</td>
   <td>{{Spec2("CSS3 Selectors")}}</td>
   <td><code>~</code> 一般兄弟結合子、およびツリー構造の疑似クラスを追加。<br>
    疑似要素に二重コロン <code>::</code> の接頭辞を用いるようにした。追加の属性セレクター。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "selector.html")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>子結合子 <code>&gt;</code> および隣接兄弟結合子 <code>+</code> を追加。<br>
    <strong>全称セレクター</strong>と<strong>属性セレクター</strong>を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p><a href="/ja/docs/Web/CSS/Pseudo-classes#Specifications">疑似クラス</a>および<a href="/ja/docs/Web/CSS/Pseudo-elements#Specifications">疑似要素</a>の詳細は、それぞれの仕様書一覧表をご覧ください。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/Specificity">CSS 詳細度</a></li>
</ul>

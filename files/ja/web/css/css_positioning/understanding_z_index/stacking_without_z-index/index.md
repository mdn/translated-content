---
title: z-index なしの重ね合わせ
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index
tags:
  - Advanced
  - CSS
  - Guide
  - Reference
  - Understanding_CSS_z-index
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index
---
<div>{{cssref}}</div>

<p>どの要素にも {{cssxref("z-index")}} プロパティが指定されていない場合、要素は以下の順序に (下から上に) 重ね合わせられます。</p>

<ol>
 <li>ルート要素の背景と境界</li>
 <li><a href="/ja/docs/Web/CSS/position#static">位置指定なしの</a>ブロックの子孫、 HTML 内での出現順</li>
 <li><a href="/ja/docs/Web/CSS/position#Types_of_positioning">位置指定</a>要素、 HTML 内での出現順</li>
</ol>

<p>{{cssxref("order")}} プロパティによって {{cssxref("flex")}} コンテナーの中の描画を「HTML の中での出現順」から変更したとき、重ね合わせコンテキストの順も同様に影響することを意識しておいて下さい。</p>

<p>以下の例では、 #1 から #4 までの要素が位置指定要素です。 #5 の要素は static であり、 HTML マークアップの中で後に来ていたとしても、他の4つの要素の下に描かれます。</p>

<p>{{EmbedLiveSample("Source_code_for_the_example", 600, 400)}}</p>

<h2 id="Source_code_for_the_example" name="Source_code_for_the_example">例のソースコード</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div id="abs1" class="absolute"&gt;
  &lt;b&gt;DIV #1&lt;/b&gt;&lt;br /&gt;position: absolute;&lt;/div&gt;
&lt;div id="rel1" class="relative"&gt;
  &lt;b&gt;DIV #2&lt;/b&gt;&lt;br /&gt;position: relative;&lt;/div&gt;
&lt;div id="rel2" class="relative"&gt;
  &lt;b&gt;DIV #3&lt;/b&gt;&lt;br /&gt;position: relative;&lt;/div&gt;
&lt;div id="abs2" class="absolute"&gt;
  &lt;b&gt;DIV #4&lt;/b&gt;&lt;br /&gt;position: absolute;&lt;/div&gt;
&lt;div id="sta1" class="static"&gt;
  &lt;b&gt;DIV #5&lt;/b&gt;&lt;br /&gt;position: static;&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">b {
  font-family: sans-serif;
}

div {
  padding: 10px;
  border: 1px dashed;
  text-align: center;
}

.static {
  position: static;
  height: 80px;
  background-color: #ffc;
  border-color: #996;
}

.absolute {
  position: absolute;
  width: 150px;
  height: 350px;
  background-color: #fdd;
  border-color: #900;
  opacity: 0.7;
}

.relative {
  position: relative;
  height: 80px;
  background-color: #cfc;
  border-color: #696;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  left: 10px;
}

#rel1 {
  top: 30px;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  top: 15px;
  left: 20px;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  top: 10px;
  right: 10px;
}

#sta1 {
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float">浮動ブロックの重ね合わせ</a>: 浮動要素が重ね合わせでどのように扱われるか</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index">z-index の追加</a>: <code>z-index</code> を使って既定の重ね合わせ変更する方法</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context">重ね合わせコンテキスト</a>: 重ね合わせコンテキストについてのメモ</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1">重ね合わせコンテキストの例 1</a>: 2階層の HTML 構造で、最終階層の z-index</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2">重ね合わせコンテキストの例 2</a>: 2階層の HTML 構造、全レベルの z-index</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3">重ね合わせコンテキストの例 3</a>: 3階層の HTML 構造、第2階層の z-index</li>
</ul>

<div class="originaldocinfo">
<h2 id="Original_Document_Information" name="Original_Document_Information">原典情報</h2>

<ul>
 <li>原著者: Paolo Lombardi</li>
 <li>この記事は原著者が <a class="external" href="http://www.yappy.it">YappY</a> のためにイタリア語で書いた記事の英訳の邦訳です。<a class="external" href="http://creativecommons.org/licenses/by-sa/2.0/">Creative Commons: Attribution-Sharealike license</a> の条件に従う限り、全内容の共有を認めます。</li>
 <li>最終更新日: 2014 年 11 月 3 日</li>
</ul>
</div>

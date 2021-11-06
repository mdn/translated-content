---
title: 重ね合わせコンテキストの例 3
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3
tags:
  - Advanced
  - CSS
  - Guide
  - Understanding_CSS_z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3
---
<div>{{cssref}}</div>

<p>« <a href="/ja/docs/Web/CSS">CSS</a> « <a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index">CSS の z-index を理解する</a></p>

<h2 id="Stacking_context_example_3" name="Stacking_context_example_3">重ね合わせコンテキストの例 3</h2>

<p>この最後の例では、複数の階層を持つ HTML 構造内で、位置指定された要素を組み合わせたときと、 <code>z-index</code> がクラスセレクターを使って設定されたとき、発生する問題を示します。</p>

<p>位置指定された DIV 要素で作られた、三階層の階層メニューを一例として見てみましょう。第二階層と第三階層の DIV 要素は、マウスが親要素をホバーしたり、クリックしたりすると現れます。通常この種類のメニューはクライアントサイドかサーバーサイドのどちらかでスクリプトにより生成されます。このためスタイルルールは id セレクターではなく、クラスセレクターで割り当てられます。</p>

<p>もし 3 つのメニュー階層が部分的に重なると、重なりの管理が問題になるかもしれません。</p>

<p>{{ EmbedLiveSample('Example_source_code', '320', '330') }}</p>

<p>第一階層のメニューは relative で位置指定されているだけなので、重ね合わせコンテキストは作られません。</p>

<p>第二階層のメニューは、親要素内で absolute で位置指定されています。これを第一階層のすべてのメニューより上に置くために、<code>z-index</code> が使われています。問題は第二階層のメニューそれぞれに重ね合わせコンテキストが作られることと、第三階層のメニューが自分の親要素に属していることです。</p>

<p>したがって第三階層のメニューは後ろにある第二階層のメニューより下に重なりますが、これは第二階層のメニューがすべて同一の <code>z-index</code> 値を持っていて、デフォルトの重ね合わせ規則が適用されるからです。</p>

<p>状況をもっとよく理解できるよう、重ね合わせコンテキストの階層図を用意しました。</p>

<ul>
 <li>ルートの重ね合わせコンテキスト
  <ul>
   <li>LEVEL #1
    <ul>
     <li>LEVEL #2 (z-index: 1)
      <ul>
       <li>LEVEL #3</li>
       <li>...</li>
       <li>LEVEL #3</li>
      </ul>
     </li>
     <li>LEVEL #2 (z-index: 1)</li>
     <li>...</li>
     <li>LEVEL #2 (z-index: 1)</li>
    </ul>
   </li>
   <li>LEVEL #1</li>
   <li>...</li>
   <li>LEVEL #1</li>
  </ul>
 </li>
</ul>

<p>この問題を回避するには、異なるレベル間のメニューの重なりを取り除くか、独自 (で異なった) <code>z-index</code> 値を クラスセレクターではなく ID セレクターを通じて設定するか、 HTML の階層構造をなくすかしてください。</p>

<div class="note"><strong>注:</strong> ソースコードを見ると、absolute で位置指定されたコンテナーとなる要素内に、第二階層と第三階層のメニューを作る DIV があることがわかります。この方法は、一度にすべてをグループ化し、位置づけするのに便利です。</div>

<h2 id="Example_source_code" name="Example_source_code">例のソースコード</h2>

<pre class="brush: html notranslate">&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html&gt;
&lt;head&gt;&lt;style type="text/css"&gt;

div { font: 12px Arial; }

span.bold { font-weight: bold; }

div.lev1 {
   width: 250px;
   height: 70px;
   position: relative;
   border: 2px outset #669966;
   background-color: #ccffcc;
   padding-left: 5px;
}

#container1 {
   z-index: 1;
   position: absolute;
   top: 30px;
   left: 75px;
}

div.lev2 {
   opacity: 0.9;
   width: 200px;
   height: 60px;
   position: relative;
   border: 2px outset #990000;
   background-color: #ffdddd;
   padding-left: 5px;
}

#container2 {
   z-index: 1;
   position: absolute;
   top: 20px;
   left: 110px;
}

div.lev3 {
   z-index: 10;
   width: 100px;
   position: relative;
   border: 2px outset #000099;
   background-color: #ddddff;
   padding-left: 5px;
}

&lt;/style&gt;&lt;/head&gt;

&lt;body&gt;

&lt;br /&gt;

&lt;div class="lev1"&gt;
&lt;span class="bold"&gt;LEVEL #1&lt;/span&gt;

   &lt;div id="container1"&gt;

      &lt;div class="lev2"&gt;
      &lt;br /&gt;&lt;span class="bold"&gt;LEVEL #2&lt;/span&gt;
      &lt;br /&gt;z-index: 1;

         &lt;div id="container2"&gt;

            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;
            &lt;div class="lev3"&gt;&lt;span class="bold"&gt;LEVEL #3&lt;/span&gt;&lt;/div&gt;

         &lt;/div&gt;

      &lt;/div&gt;

      &lt;div class="lev2"&gt;
      &lt;br /&gt;&lt;span class="bold"&gt;LEVEL #2&lt;/span&gt;
      &lt;br /&gt;z-index: 1;
      &lt;/div&gt;

   &lt;/div&gt;
&lt;/div&gt;

&lt;div class="lev1"&gt;
&lt;span class="bold"&gt;LEVEL #1&lt;/span&gt;
&lt;/div&gt;

&lt;div class="lev1"&gt;
&lt;span class="bold"&gt;LEVEL #1&lt;/span&gt;
&lt;/div&gt;

&lt;div class="lev1"&gt;
&lt;span class="bold"&gt;LEVEL #1&lt;/span&gt;
&lt;/div&gt;

&lt;/body&gt;&lt;/html&gt;
</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index"><code>z-index</code> なしの重ね合わせ</a>: 既定の重ね合わせ規則</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float">浮動ブロックの重ね合わせ</a>: 浮動要素が重ね合わせでどのように扱われるか</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index">z-index の使用</a>: <code>z-index</code> を使って既定の重ね合わせ変更する方法</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context">重ね合わせコンテキスト</a>: 重ね合わせコンテキストについてのメモ</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1">重ね合わせコンテキストの例 1</a>: 2階層の HTML 構造で、最終階層の <code>z-index</code></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2">重ね合わせコンテキストの例 2</a>: 2階層の HTML 構造、全レベルの <code>z-index</code></li>
</ul>

<div class="originaldocinfo">
<h2 id="Original_Document_Information" name="Original_Document_Information">原典情報</h2>

<ul>
 <li>原著者: Paolo Lombardi</li>
 <li>この記事は原著者が <a class="external" href="http://www.yappy.it">YappY</a> のためにイタリア語で書いた記事の英訳の邦訳です。<a class="external" href="http://creativecommons.org/licenses/by-sa/2.0/">Creative Commons: Attribution-Sharealike license</a> の条件に従う限り、全内容の共有を認めます。</li>
 <li>最終更新日: 2005年7月9日</li>
</ul>
</div>

<p><strong>注</strong>: 実は、サンプル画像は間違っているようです。第二階層が第三階層に重複しているのは、第二階層が半透明であるため、新しい重ね合わせコンテキストが作成されるからです。基本的に、このサンプルページ全体が誤っており、誤解を招きます。</p>

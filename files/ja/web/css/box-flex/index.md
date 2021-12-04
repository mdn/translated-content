---
title: box-flex
slug: Web/CSS/box-flex
tags:
  - CSS
  - CSS プロパティ
  - Non-standard
  - Reference
  - box-flex
translation_of: Web/CSS/box-flex
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<div class="blockIndicator warning">
<p>このプロパティは XUL ボックスモデルの部品を制御するためのものです。古い CSS Flexible Box Layout Module の草稿の '<code>box-flex</code>' (このプロパティの元になったもの) または '<code>-webkit-box-flex</code>' (草稿の元になったもの) の動作のどちらとも一致しません。現在の標準についての情報は<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes">フレックスボックス</a>を参照してください。</p>
</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>-moz-box-flex</code></strong> および <strong><code>-webkit-box-flex</code></strong> プロパティは、 <code>-moz-box</code> または <code>-webkit-box</code> が、これを内包するボックスを、包含ボックスのレイアウトの方向で埋めるまで拡張する方法を指定します。</p>

<pre class="brush:css no-line-numbers">/* &lt;number&gt; 値 */
-moz-box-flex: 0;
-moz-box-flex: 2;
-moz-box-flex: 3.5;
-webkit-box-flex: 0;
-webkit-box-flex: 2;
-webkit-box-flex: 3.5;

/* Global values */
-moz-box-flex: inherit;
-moz-box-flex: initial;
-moz-box-flex: unset;
-webkit-box-flex: inherit;
-webkit-box-flex: initial;
-webkit-box-flex: unset;
</pre>

<div>{{CSSInfo}}</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>box-flex</code> プロパティは {{CSSxRef("&lt;number&gt;")}} として指定されます。値が 0 の場合、ボックスは拡張されません。値が 0 より大きい場合は、ボックスは利用可能な余白の比率で拡張されます。</p>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;-moz-box-flex example&lt;/title&gt;
    &lt;style&gt;
      div.example {
        display: -moz-box;
        display: -webkit-box;
        border: 1px solid black;
        width: 100%;
      }
      div.example &gt; p:nth-child(1) {
        -moz-box-flex: 1;       /* Mozilla */
        -webkit-box-flex: 1;    /* WebKit */
        border: 1px solid black;
      }
      div.example &gt; p:nth-child(2) {
        -moz-box-flex: 0;       /* Mozilla */
        -webkit-box-flex: 0;    /* WebKit */
        border: 1px solid black;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="example"&gt;
      &lt;p&gt;I will expand to fill extra space&lt;/p&gt;
      &lt;p&gt;I will not expand&lt;/p&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Notes" name="Notes">メモ</h2>

<p>包含ボックスは利用可能な余白を、中のそれぞれの要素におけるフレックス値の比率で拡張します。</p>

<p>フレックス値がゼロになっている中の要素は拡張されません。</p>

<p>フレックス値がゼロではない中の要素が一つしかない場合は、有効な余白を埋めるまで拡張されます。</p>

<p>同じフレックス値を持つ中の要素は、同じ絶対量だけ拡張されます。</p>

<p>フレックス値が要素の <code>flex</code> 属性を使用して設定された場合は、スタイルは無視されます。</p>

<p>包含ボックス内で同じ寸法の XUL 要素を作成するには、包含ボックスの <code>equalsize</code> 属性を <code>always</code> の値に設定してください。この属性には対応する CSS プロパティはありません。</p>

<p>包含ボックス内のすべての中の要素を同じ寸法にするトリックとしては、すべてに対して固定の寸法 (例えば <code>height: 0</code>) と、同じゼロより大きい <code>box-flex</code> の値 (例えば <code>-moz-box-flex: 1</code>) を設定することです。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>このプロパティは標準外の拡張です。<a class="external" href="http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/">古い CSS3 Flexbox 仕様書の草稿</a>には <code>box-flex</code> プロパティが定義されていましたが、この草稿はその後で置き換えられました。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>{{Compat("css.properties.box-flex")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("box-orient")}}</li>
 <li>{{CSSxRef("box-pack")}}</li>
 <li>{{CSSxRef("box-direction")}}</li>
 <li>{{CSSxRef("flex")}}</li>
</ul>

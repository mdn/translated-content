---
title: box-orient
slug: Web/CSS/box-orient
tags:
  - CSS
  - Non-standard
  - Reference
translation_of: Web/CSS/box-orient
---
<div>{{CSSRef}}{{Non-standard_header}}
<p class="blockIndicator warning">これはもともと CSS Flexible Box Layout Module の草稿でしたが、より新しい標準に置き換えられました。現在の標準についての情報は<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes">フレックスボックス</a>を参照してください。</p>
</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>box-orient</code></strong> プロパティは、要素がその中身をレイアウトする方向が、水平か垂直かを指定します。</p>

<pre class="brush:css">/* キーワード値 */
box-orient: horizontal;
box-orient: vertical;
box-orient: inline-axis;
box-orient: block-axis;

/* グローバル値 */
box-orient: inherit;
box-orient: initial;
box-orient: unset;
</pre>

<p>例えば、 XUL の {{XULElem("box")}} や {{XULElem("hbox")}} 要素は既定で中身を水平にレイアウトするのに対し、XUL の {{XULElem("vbox")}} 要素は既定で中身を垂直にレイアウトします。</p>

<p>HTML DOM 要素は既定で中身をインライン軸に沿ってレイアウトします。この CSS プロパティは HTML 要素のうち CSS の {{CSSxRef("display")}} が {{CSSxRef("box")}} または {{CSSxRef("inline-box")}} の値であるものに対してのみ適用されます。</p>

<p>{{CSSInfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>box-orient</code> プロパティは以下の列挙されたキーワード値のうちの一つで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>horizontal</code></dt>
 <dd>ボックスは、その内容を水平にレイアウトします。</dd>
 <dt><code>vertical</code></dt>
 <dd>ボックスは、その内容を垂直にレイアウトします。</dd>
 <dt><code>inline-axis</code> (HTML)</dt>
 <dd>ボックスは、子をインライン軸に沿って表示します。</dd>
 <dt><code>block-axis</code> (HTML)</dt>
 <dd>ボックスは、子をブロック軸に沿って表示します。</dd>
</dl>

<p><code>inline-axis</code> と <code>block-axis</code> は書字方向に依存するキーワードであり、英語では、それぞれ <code>horizontal</code> と <code>vertical</code> に対応付けられます。</p>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div.example {
  display: -moz-box;                /* Mozilla */
  display: -webkit-box;             /* WebKit */
  display: box;                     /* 仕様書通り */

  /* 子は垂直に向けられる */
  -moz-box-orient: horizontal;      /* Mozilla */
  -webkit-box-orient: horizontal;   /* WebKit */
  box-orient: horizontal;           /* 仕様書通り */
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="example"&gt;
  &lt;p&gt;I will be to the left of my sibling.&lt;/p&gt;
  &lt;p&gt;I will be to the right of my sibling.&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="Result" name="Result">結果</h3>

<p><code>box-orient</code> プロパティは、例にある上記の二つの {{HTMLElement("p")}} セクションに作用して同じ行に表示するようにし、次のように表示します。</p>

<p>{{ EmbedLiveSample('Examples', 600, 50, '', 'Web/CSS/box-orient') }}</p>

<h2 id="Notes" name="Notes">メモ</h2>

<p>XUL 要素では、方向は要素の {{XULAttr("orient")}} 属性を使用して設定されるので、このスタイルは無視されます。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/css3-flexbox/">Flexible Box Layout Module (W3C Working Draft)</a> {{note("この仕様書の現在の状態は、 Mozilla や WebKit の古い実装を反映しているものではありません。")}}</li>
 <li><a class="external" href="http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/">Old Flexible Box Layout Module</a> {{note("Mozilla および WebKit の実装は、こちらの版の仕様を反映していました。")}}</li>
</ul>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.box-orient")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSSxRef("box-direction")}}</li>
 <li>{{CSSxRef("box-pack")}}</li>
 <li>{{CSSxRef("box-align")}}</li>
 <li>{{CSSxRef("flex-direction")}}</li>
</ul>

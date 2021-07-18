---
title: HTMLElement.style
slug: Web/API/HTMLElement/style
tags:
  - API
  - CSSOM
  - HTMLElement
  - Property
  - Reference
  - Style
browser-compat: api.HTMLElement.style
translation_of: Web/API/HTMLElement/style
---
<div>{{APIRef("CSSOM")}}</div>

<p><code><strong>style</strong></code>プロパティは、要素の<em>インライン</em>スタイルと同様に設定したり取得したりするために使用します。取得時は {{domxref("CSSStyleDeclaration")}} オブジェクトで、その要素のインラインの <a href="/ja/docs/Web/HTML/Global_attributes/style"><code>style</code> 属性</a>で定義された属性に割り当てられた値を持つ、その要素のすべてのスタイルプロパティのリストを返します。</p>

<div class="notecard note">
<p><code>style</code> 経由でアクセス可能な CSS プロパティのリストについては、<a href="/ja/docs/Web/CSS/CSS_Properties_Reference">CSS プロパティリファレンス</a>を参照してください。<code>style</code> プロパティは CSS カスケードで <code>style</code> 属性によるインラインスタイル宣言と同じ (かつ最高の) 優先順位を持ちます。</p>
</div>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><var>style</var> = <var>element</var>.style</pre>

<h2 id="value">値</h2>

<p>{{domxref("CSSStyleDeclaration")}} で、次のプロパティを持っています。</p>

<dl>
  <dt>computed フラグ</dt>
  <dd>設定されていません。</dd>
  <dt>parent CSS rule</dt>
  <dd>Null</dd>
  <dt>owner node</dt>
  <dd><code>this</code></dd>
</dl>

<h2 id="Setting_styles">スタイルの設定</h2>

<p>このプロパティは読み取り専用と考えられていますが、 <code>style</code> に直接文字列を代入することで、インラインスタイルを設定することができます。この場合、その文字列は {{domxref("CSSStyleDeclaration.cssText")}} に転送されます。この方法で <code>style</code> を使用すると、その要素のインラインスタイルをすべて完全に上書きします。</p>

<p>したがって、他のスタイルの値を変更せずに要素の特定のスタイルを追加したい場合は、一般に {{domxref("CSSStyleDeclaration")}} オブジェクトの個別のプロパティを設定したほうがうまく行きます。例えば、 <code>element.style.backgroundColor = "red"</code> のようにします。</p>

<p>スタイル宣言は <code>null</code> または空文字列を設定することでリセットすることができます。例えば <code>elt.style.color = null</code> のようにします。</p>

<h3 id="Getting_style_information">スタイル情報の取得</h3>

<p><code>style</code> プロパティは、要素に適用されているスタイルを完全に知るためには有用ではありません。これは、要素のインラインの <code>style</code> 属性に設定されている CSS 宣言のみを表し、 {{HTMLElement("head")}} セクションのスタイル規則や外部のスタイルシートなど、他の場所のスタイル規則に由来するものを表してはいないからです。要素のすべての CSS プロパティの値を取得するには、代わりに {{domxref("Window.getComputedStyle()")}} を使用する必要があります。</p>

<p>次のコードスニペットは、要素の <code>style</code> プロパティで取得した値と、<code>getComputedStyle()</code> で取得した値の違いを実演します。</p>

<pre class="brush: html">&lt;!DOCTYPE HTML&gt;
&lt;html&gt;
  &lt;body style="font-weight:bold;"&gt;
    &lt;div style="color:red" id="myElement"&gt;..&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<pre class="brush:js">var element = document.getElementById("myElement");
var out = "";
var elementStyle = element.style;
var computedStyle = window.getComputedStyle(element, null);

for (prop in elementStyle) {
  if (elementStyle.hasOwnProperty(prop)) {
    out += "  " + prop + " = '" + elementStyle[prop] + "' &gt; '" + computedStyle[prop] + "'\n";
  }
}
console.log(out)
</pre>

<p>出力されるコードは次のようなものです。</p>

<pre>...
fontWeight = '' &gt; 'bold'
color = 'red' &gt; 'rgb(255, 0, 0)'
...</pre>

<p><code>font-weight</code> のスタイルの計算値に <code>bold</code> の値がありますが、要素の <code>style</code> プロパティにはないことに注意してください。</p>

<h2 id="Specification">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information">動的なスタイル情報の利用</a></li>
</ul>

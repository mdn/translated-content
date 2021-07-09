---
title: Element.getClientRects()
slug: Web/API/Element/getClientRects
tags:
  - API
  - CSSOM View
  - Element
  - Method
  - Reference
  - clientHeight
  - getBoundingClientRect
  - getClientRects
  - offsetHeight
  - scrollHeight
translation_of: Web/API/Element/getClientRects
---
<p>{{APIRef("DOM")}}</p>

<p><strong><code>getClientRects()</code></strong> は {{domxref("Element")}} インターフェイスのメソッドで、クライアントにあるそれぞれの <a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">CSS 境界ボックス</a>の境界線を示す {{DOMxRef("DOMRect")}} オブジェクトのコレクションを返します。</p>

<p>多くの要素はそれぞれ1つの境界ボックスしか持ちませんが、複数行の<a href="/ja/docs/Web/HTML/Inline_elements">インライン要素</a> (例えば複数行にまたがる {{HTMLElement("span")}} 要素、既定の場合) には行ごとに囲む境界ボックスがあります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <var>rectCollection</var> = <var>object</var>.getClientRects();</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>返される値は {{DOMxRef("DOMRect")}} オブジェクトのコレクションで、要素に関連付けられた CSS の境界ボックスごとに 1 つずつ用意されます。それぞれの {{DOMxRef("DOMRect")}} オブジェクトには読み取り専用の <code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code> の各プロパティがあり、ビューポートの左上からの境界ボックスの座標をピクセル数で表します。キャプションを持つ表の場合、キャプションがテーブルの境界ボックスの外側にあっても含まれます。外部の <code>&lt;svg&gt;</code> 以外の SVG 要素に対して呼び出された場合、結果として得られる矩形の相対的な「ビューポート」は、その要素の外部の <code>&lt;svg&gt;</code> が確立したビューポートになります (明確にするために、矩形は外部の <code>&lt;svg&gt;</code> の <code>viewBox</code> 変形によっても変換されます)。</p>

<p>本来、Microsoft はこのメソッドがテキストの各行に対して <code>TextRectangle</code> オブジェクトを返すようにしていました。しかし、 CSSOM の作業草案では、各境界ボックスに対して {{DOMxRef("DOMRect")}} を返すように指定しています。インライン要素では、この二つの定義は同じです。しかし、ブロック要素の場合、Mozilla は単一の矩形のみを返します。</p>

<p>{{Fx_MinVersion_Note(3.5, "Firefox 3.5 で <code>width</code> と <code>height</code> の各プロパティが <code>TextRectangle</code> オブジェクトに追加されました。")}}</p>

<p>矩形を計算する際には、ビューポート領域 (またはその他のスクロール可能な要素) のスクロール量が考慮されます。</p>

<p>返される矩形には、オーバーフローする可能性のある子要素の境界は含まれていません。</p>

<p>HTML の {{HtmlElement("area")}} 要素、それ自体が何もレンダリングしない SVG 要素、 <code>display:none</code> の要素、そして一般的に直接レンダリングされない要素については、空のリストが返されます。</p>

<p>CSS ボックスで境界ボックスが空であっても矩形が返されます。 <code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code> の各座標はなお意味を持っています。</p>



<p>小数のピクセルオフセットが可能です。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>これらの例では、様々な色でクライアント矩形を描画しています。クライアント矩形を描画する JavaScript 関数は、 <code>withClientRectsOverlay</code> クラスを介してマークアップに接続されていることに注意してください。</p>

<h3 id="HTML">HTML</h3>

<p>例 1: このHTMLは、 <code>&lt;span&gt;</code> 要素を含む3つの段落を生成し、それぞれを <code>&lt;div&gt;</code> ブロックに埋め込んでいます。2 番目のブロックの段落と 3 番目のブロックの <code>&lt;span&gt;</code> 要素には、クライアントの矩形が描画されます。</p>

<pre class="brush: html notranslate">&lt;h3&gt;A paragraph with a span inside&lt;/h3&gt;
&lt;p&gt;Both the span and the paragraph have a border set. The
  client rects are in red. Note that the p has onlyone border
  box, while the span has multiple border boxes.&lt;/p&gt;

&lt;div&gt;
  &lt;strong&gt;Original&lt;/strong&gt;
  &lt;p&gt;
    &lt;span&gt;Paragraph that spans multiple lines&lt;/span&gt;
  &lt;/p&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;strong&gt;p's rect&lt;/strong&gt;
  &lt;p class="withClientRectsOverlay"&gt;
    &lt;span&gt;Paragraph that spans multiple lines&lt;/span&gt;
  &lt;/p&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;strong&gt;span's rect&lt;/strong&gt;
  &lt;p&gt;
    &lt;span class="withClientRectsOverlay"&gt;Paragraph that spans multiple lines&lt;/span&gt;
  &lt;/p&gt;
&lt;/div&gt;</pre>

<p>例 2: このHTMLは3つの順序付きリストを生成します。2 番目のブロックの <code>&lt;ol&gt;</code> と 3 番目のブロックの各 <code>&lt;li&gt;</code> 要素に対してクライアントの矩形が描かれています。</p>

<pre class="brush: html notranslate">&lt;h3&gt;A list&lt;/h3&gt;
&lt;p&gt;Note that the border box doesn't include the number, so
  neither do the client rects.&lt;/p&gt;

&lt;div&gt;
  &lt;strong&gt;Original&lt;/strong&gt;
  &lt;ol&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
  &lt;/ol&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;strong&gt;ol's rect&lt;/strong&gt;
  &lt;ol class="withClientRectsOverlay"&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
  &lt;/ol&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;strong&gt;each li's rect&lt;/strong&gt;
  &lt;ol&gt;
    &lt;li class="withClientRectsOverlay"&gt;Item 1&lt;/li&gt;
    &lt;li class="withClientRectsOverlay"&gt;Item 2&lt;/li&gt;
  &lt;/ol&gt;
&lt;/div&gt;</pre>

<p>例 3: この HTML はキャプション付きの 2 つの表を生成します。クライアント矩形は 2 番目のブロックの <code>&lt;table&gt;</code> で描画されます。</p>

<pre class="brush: html notranslate">&lt;h3&gt;A table with a caption&lt;/h3&gt;
&lt;p&gt;Although the table's border box doesn't include the
  caption, the client rects do include the caption.&lt;/p&gt;

&lt;div&gt;
  &lt;strong&gt;Original&lt;/strong&gt;
  &lt;table&gt;
    &lt;caption&gt;caption&lt;/caption&gt;
    &lt;thead&gt;
      &lt;tr&gt;&lt;th&gt;thead&lt;/th&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;&lt;td&gt;tbody&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;strong&gt;table's rect&lt;/strong&gt;
  &lt;table class="withClientRectsOverlay"&gt;
    &lt;caption&gt;caption&lt;/caption&gt;
    &lt;thead&gt;
      &lt;tr&gt;&lt;th&gt;thead&lt;/th&gt;&lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;&lt;td&gt;tbody&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<p>CSS は、最初の例では各 <code>&lt;div&gt;</code> ブロック内の段落と <code>&lt;span&gt;</code> の周りに、2番目の例では <code>&lt;ol&gt;</code> と <code>&lt;li&gt;</code> の周りに、3番目の例では <code>&lt;table&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code> の各要素の周りに境界線を描画します。</p>

<pre class="brush: css notranslate">strong {
  text-align: center;
}
div {
  display: inline-block;
  width: 150px;
}
div p, ol, table {
  border: 1px solid blue;
}
span, li, th, td {
  border: 1px solid green;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<p>JavaScriptコードは、 CSS のクラス <code>withClientRectsOverlay</code> が割り当てられているすべてのHTML要素について、クライアント矩形を描画します。</p>

<pre class="brush: js notranslate">function addClientRectsOverlay(elt) {
  /* Absolutely position a div over each client rect so that its border width
     is the same as the rectangle's width.
     Note: the overlays will be out of place if the user resizes or zooms. */
  var rects = elt.getClientRects();
  for (var i = 0; i != rects.length; i++) {
    var rect = rects[i];
    var tableRectDiv = document.createElement('div');
    tableRectDiv.style.position = 'absolute';
    tableRectDiv.style.border = '1px solid red';
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    tableRectDiv.style.margin = tableRectDiv.style.padding = '0';
    tableRectDiv.style.top = (rect.top + scrollTop) + 'px';
    tableRectDiv.style.left = (rect.left + scrollLeft) + 'px';
    // We want rect.width to be the border width, so content width is 2px less.
    tableRectDiv.style.width = (rect.width - 2) + 'px';
    tableRectDiv.style.height = (rect.height - 2) + 'px';
    document.body.appendChild(tableRectDiv);
  }
}

(function() {
  /* Call function addClientRectsOverlay(elt) for all elements with
     assigned class "withClientRectsOverlay" */
  var elt = document.getElementsByClassName('withClientRectsOverlay');
  for (var i = 0; i &lt; elt.length; i++) {
    addClientRectsOverlay(elt[i]);
  }
})();</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Examples', 680, 650)}}</p>

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
   <td>{{SpecName("CSSOM View", "#dom-element-getclientrects", "Element.getClientRects()")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h3 id="Notes" name="Notes">補足</h3>

<p><code>getClientRects()</code> は MS IE の DHTML オブジェクトモデルで導入されたのが最初です。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.getClientRects")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{DOMxRef("Element.getBoundingClientRect()")}}</li>
</ul>

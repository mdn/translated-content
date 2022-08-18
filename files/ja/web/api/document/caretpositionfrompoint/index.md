---
title: DocumentOrShadowRoot.caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
tags:
  - API
  - Document
  - DocumentOrShadowRoot
  - Method
  - Reference
  - ShadowRoot
  - caretPositionFromPoint()
translation_of: Web/API/DocumentOrShadowRoot/caretPositionFromPoint
original_slug: Web/API/DocumentOrShadowRoot/caretPositionFromPoint
---
<p>{{APIRef("CSSOM View")}}{{SeeCompatTable}}</p>

<p><span class="seoSummary">{{domxref("DocumentOrShadowRoot")}} インターフェイスの <strong><code>caretPositionFromPoint()</code></strong> プロパティは、 DOM ノードを含む {{domxref('CaretPosition')}} オブジェクトを、そのノード内のキャレットとキャレットの文字オフセットと共に返します。</span></p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate">var caretPosition = document.caretPositionFromPoint(float x, float y);</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>ポイントの水平座標。</dd>
 <dt><code>y</code></dt>
 <dd>ポイントの垂直座標。</dd>
</dl>

<h3 id="返り値">返り値</h3>

<p>{{domxref('CaretPosition')}} オブジェクト。</p>

<h2 id="例">例</h2>

<p>この例では、クリックした場所に改行を挿入します。そのコードはデモの下にあります。</p>

<h3 id="Demo">Demo</h3>

<p>{{EmbedLiveSample('Example', '100%', '300px')}}</p>

<h3 id="HTML_Content">HTML Content</h3>

<pre class="brush: html notranslate">&lt;p&gt;Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.&lt;/p&gt;</pre>

<h3 id="JavaScript_Content">JavaScript Content</h3>

<pre class="brush: js notranslate">function insertBreakAtPoint(e) {
  var range;
  var textNode;
  var offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  }

  // only split TEXT_NODEs
  if (textNode.nodeType == 3) {
    var replacement = textNode.splitText(offset);
    var br = document.createElement('br');
    textNode.parentNode.insertBefore(br, replacement);
  }
}

window.onload = function (){
  var paragraphs = document.getElementsByTagName("p");
  for (i=0 ; i &lt; paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", insertBreakAtPoint, false);
  }
};</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('CSSOM View','#dom-document-caretpositionfrompoint','caretPositionFromPoint()')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>



<p>{{Compat("api.DocumentOrShadowRoot.caretPositionFromPoint")}}</p>

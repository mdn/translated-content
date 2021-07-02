---
title: Document.caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
tags:
  - API
  - CSSOM View
  - DOM
  - Document
  - Non-standard
  - Reference
  - caretRangeFromPoint
  - メソッド
translation_of: Web/API/Document/caretRangeFromPoint
---
<div>{{APIRef("DOM")}}{{Non-standard_header}}</div>

<p>{{domxref("Document")}} インターフェイスの <strong><code>caretRangeFromPoint()</code></strong> メソッドは、指定された座標にある文書フラグメントの {{domxref("Range")}} オブジェクトを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <var>range</var> = <var>document</var>.caretRangeFromPoint(float <var>x</var>, float <var>y</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><var>x</var></dt>
 <dd>現在のビューポート内での水平位置。</dd>
 <dt><var>y</var></dt>
 <dd>現在のビューポート内での垂直位置。</dd>
</dl>

<h3 id="Returns" name="Returns">返値</h3>

<p>以下のうちの一つです。</p>

<ul>
 <li>{{domxref("Range")}}</li>
 <li><code>Null</code> (<var>x</var> または <var>y</var> が負の数、ビューポート外、テキスト入力ノードがない場合)</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<p>基本的なデモ: 段落内をクリックすると、キャレットの位置に改行を挿入します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  }
  // Only split TEXT_NODEs
  if (textNode &amp;&amp; textNode.nodeType == 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement('br');
    textNode.parentNode.insertBefore(br, replacement);
  }
}

let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i &lt; paragraphs.length; i++) {
  paragraphs[i].addEventListener('click', insertBreakAtPoint, false);
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Example', '', '', '', 'Web/API/Document/caretRangeFromPoint') }}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Document.caretRangeFromPoint")}}</p>

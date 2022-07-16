---
title: Range.startOffset
slug: Web/API/Range/startOffset
translation_of: Web/API/Range/startOffset
---
<p>{{ApiRef("DOM")}}</p>

<p><code><strong>Range.startOffset</strong></code>読み取り専用プロパティは、<code>startContainer</code>の<code>Range</code>の開始位置を表す数値を返します。</p>

<p><code>startContainer</code>がタイプ{{domxref("Text")}}、{{domxref("Comment")}}、または{{domxref("CDATASection")}}の{{domxref("Node")}}である場合、オフセットは<code>startContainer</code>の開始から{{domxref("Range")}}.の境界点までの文字数です。他の{{domxref("Node")}}タイプの場合、<code>startOffset</code>は、<code>startContainer</code>の開始点と{{domxref("Range")}}の境界点の間の子ノードの数です。</p>





<p>{{domxref("Range")}}の<code>startOffset</code>を変更するには、{{domxref("Range.setStart")}} メソッドを使用します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><em>startRangeOffset</em> = <em>range</em>.startOffset;
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">var range = document.createRange();
range.setStart(startNode,startOffset);
range.setEnd(endNode,endOffset);
var startRangeOffset = range.startOffset;
</pre>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-range-startoffset', 'Range.startOffset')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'ranges.html#Level-2-Range-attr-startOffset', 'Range.startOffset')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>初期仕様</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>



<p>{{Compat("api.Range.startOffset")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/DOM/DOM_Reference" title="/en-US/docs/DOM/DOM_Reference">The DOM interfaces index</a></li>
</ul>

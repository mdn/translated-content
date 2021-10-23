---
title: 'Element: mouseleave イベント'
slug: Web/API/Element/mouseleave_event
tags:
  - API
  - DOM
  - Element
  - Event
  - MouseEvent
  - Reference
  - events
  - mouse
  - mouseleave
  - move
translation_of: Web/API/Element/mouseleave_event
---
<p>{{APIRef}}</p>

<p><span class="seoSummary"><strong><code>mouseleave</code></strong> イベントは、ポインティングデバイス (ふつうはマウス) のカーソルが {{domxref("Element")}} 外に移動したときに発行されます。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("MouseEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers.onmouseleave", "onmouseleave")}}</td>
  </tr>
 </tbody>
</table>

<p><code>mouseleave</code> と {{event('mouseout')}} はよく似ていますが、 <code>mouseleave</code> はバブリングしないのに対して <code>mouseout</code> はバブリングするという点が異なります。すなわち <code>mouseleave</code> はポインターがその要素<em>および</em>すべての子孫を出たときに発行されるのに対し、 <code>mouseout</code> はポインターがその要素<em>または</em>その要素の子孫のうちの一つを出たときに (ポインターがまだその要素内にあったとしても) 発行されます。</p>

<div style="column-width: 455px; border: 1px solid; padding: 5px; margin-bottom: 10px;">
<div style="text-align: center;"><img alt="mouseenter.png" class="default internal" src="/@api/deki/files/5910/=mouseleave.png"></div>

<p>階層内のそれぞれの要素からポインターが出たとき、 <code>mouseleave</code> イベントが一つずつそれぞれの要素に送られます。ここで、ポインターが4つの要素の階層にあるテキストから div が表す領域の外に出ると、4つのイベントが4つの要素に送られます。</p>

<div style="text-align: center;"><img alt="mouseover.png" class="default internal" src="/@api/deki/files/5911/=mouseout.png"></div>

<p>単一の <code>mouseout</code> イベントが DOM ツリーの最も深い要素に送信され、ハンドラーによって取り消されるかルートに達するまで、上にバブリングしていきます。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<p><a href="/ja/docs/Web/API/Element/mouseout_event#Examples"><code>mouseout</code></a> のドキュメントには、 <code>mouseout</code> と <code>mouseleave</code> との違いを説明する例があります。</p>

<h3 id="mouseleave">mouseleave</h3>

<p>次の例では <code>mouseenter</code> イベントを使用して、マウスが <code>&lt;div&gt;</code> に割り当てられた空間に入ったときにその境界線を変更しています。次に、 <code>mouseenter</code> イベントまたは <code>mouseleave</code> イベントの番号を指定してリストに項目を追加します。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div id='mouseTarget'&gt;
 &lt;ul id="unorderedList"&gt;
  &lt;li&gt;No events yet!&lt;/li&gt;
 &lt;/ul&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<p><code>&lt;div&gt;</code> がもっと目立つようにスタイル付けします。</p>

<pre class="brush: css notranslate">#mouseTarget {
  box-sizing: border-box;
  width:15rem;
  border:1px solid #333;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e =&gt; {
  mouseTarget.style.border = '5px dotted orange';
  enterEventCount++;
  addListItem('This is mouseenter event ' + enterEventCount + '.');
});

mouseTarget.addEventListener('mouseleave', e =&gt; {
  mouseTarget.style.border = '1px solid #333';
  leaveEventCount++;
  addListItem('This is mouseleave event ' + leaveEventCount + '.');
});

function addListItem(text) {
  // 与えられたテキストで新しいテキストノードを生成する
  var newTextNode = document.createTextNode(text);

  // 新しい li 要素を生成
  var newListItem = document.createElement("li");

  // テキストノードを li 要素に追加
  newListItem.appendChild(newTextNode);

  // 新しく生成されたリスト項目をリストへ追加
  unorderedList.appendChild(newListItem);
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('mouseleave')}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <thead>
  <tr>
   <td>{{SpecName('UI Events', '#event-type-mouseleave', 'mouseleave')}}</td>
   <td>{{Spec2('UI Events')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#event-type-mouseleave', 'mouseleave')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
  </tr>
 </thead>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.mouseleave_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベントの紹介</a></li>
 <li>{{domxref("Element/mousedown_event", "mousedown")}}</li>
 <li>{{domxref("Element/mouseup_event", "mouseup")}}</li>
 <li>{{domxref("Element/mousemove_event", "mousemove")}}</li>
 <li>{{domxref("Element/click_event", "click")}}</li>
 <li>{{domxref("Element/dblclick_event", "dblclick")}}</li>
 <li>{{domxref("Element/mouseover_event", "mouseover")}}</li>
 <li>{{domxref("Element/mouseout_event", "mouseout")}}</li>
 <li>{{domxref("Element/mouseenter_event", "mouseenter")}}</li>
 <li>{{domxref("Element/mouseleave_event", "mouseleave")}}</li>
 <li>{{domxref("Element/contextmenu_event", "contextmenu")}}</li>
</ul>

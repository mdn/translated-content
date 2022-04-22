---
title: 'HTMLElement: beforeinput イベント'
slug: Web/API/HTMLElement/beforeinput_event
tags:
  - API
  - Event
  - HTML DOM
  - HTMLElement
  - InputEvent
  - Reference
  - beforeinput
translation_of: Web/API/HTMLElement/beforeinput_event
---
<div>{{APIRef}}</div>

<p>DOM の <strong><code>beforeinput</code></strong> イベントは、{{HTMLElement("input")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}} 要素の値が変更されようとしているときに発生します。 このイベントは、{{domxref("HTMLElement.contentEditable", "contenteditable")}} が有効になっている要素、および {{domxref("Document.designMode", "designMode")}} がオンになっている要素にも適用されます。</p>

<p><code>contenteditable</code> や <code>designMode</code> の場合、イベントのターゲットは<strong>編集ホスト</strong>です。 これらのプロパティが複数の要素に適用された場合、編集ホストは、親が編集可能ではない直近の先祖要素になります。</p>

<table class="properties">
 <tbody>
  <tr>
   <th>バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th>キャンセル</th>
   <td>可</td>
  </tr>
  <tr>
   <th>インターフェイス</th>
   <td>{{DOMxRef("InputEvent")}}</td>
  </tr>
  <tr>
   <th>イベントハンドラプロパティ</th>
   <td>なし</td>
  </tr>
  <tr>
   <th>同期 / 非同期</th>
   <td>同期</td>
  </tr>
  <tr>
   <th>Composed</th>
   <td>はい</td>
  </tr>
  <tr>
   <th>既定のアクション</th>
   <td>DOM 要素の更新</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="機能の検出">機能の検出</h3>

<p>以下の関数は、 <code>beforeinput</code> に対応していれば true を返します。</p>

<pre class="brush: js notranslate">function isBeforeInputEventAvailable() {
  return typeof InputEvent.prototype.getTargetRanges === "function";
}
</pre>

<h3 id="Simple_logger" name="Simple_logger">単純なロガー</h3>

<p>この例では、 {{HtmlElement("input")}} 要素に適用された新しい値に置き換える直前に、要素の現在の値をログに記録しています。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;input placeholder="テキストを入力" name="name"/&gt;
&lt;p id="values"&gt;&lt;/p&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js notranslate">const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('beforeinput', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Simple_logger")}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('UI Events', "#event-type-beforeinput", "beforeinput event")}}</td>
   <td>{{Spec2('UI Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLElement.beforeinput_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: <code><a href="/ja/docs/Web/API/HTMLElement/input_event">input</a></code></li>
</ul>

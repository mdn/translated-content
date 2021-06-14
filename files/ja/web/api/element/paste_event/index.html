---
title: 'Element: paste イベント'
slug: Web/API/Element/paste_event
tags:
  - Clipboard API
  - ClipboardEvent
  - Element
  - Event
  - NeedsUpdate
  - paste
  - イベント
  - リファレンス
translation_of: Web/API/Element/paste_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><strong><code>paste</code></strong> イベントは、ユーザーがブラウザーのユーザーインターフェイスで「貼り付け」操作を行ったときに発生します。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("ClipboardEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("HTMLElement/onpaste", "onpaste")}}</td>
  </tr>
 </tbody>
</table>

<p>カーソルが編集可能なコンテキストにある場合 ({{HTMLElement("textarea")}} や <code><a href="/ja/docs/Web/HTML/Global_attributes/contenteditable">contenteditable</a></code> 属性が <code>true</code> である要素など)、既定のアクションはクリップボードの内容を文書のカーソル位置に挿入します。</p>

<p>このイベントのハンドラーは、イベントの <code>clipboardData</code> プロパティにある {{domxref("DataTransfer/getData", "getData()")}} を呼び出すことでクリップボードの中身にアクセスすることができます。</p>

<p>既定の動作を上書きする場合 (例えば、別なデータを挿入したりクリップボードの内容を変換したりする場合など)、イベントハンドラーで {{domxref("Event/preventDefault", "event.preventDefault()")}} を使用して既定のアクションをキャンセルした上で、必要なデータを手動で挿入してください。</p>

<p><a href="/ja/docs/Web/Guide/Events/Creating_and_triggering_events">統合的な</a> <code>paste</code> イベントを構築して配信することができますが、文書の内容には影響しません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Live_example" name="Live_example">ライブデモ</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="source" contenteditable="true"&gt;Try copying text from this box...&lt;/div&gt;
&lt;div class="target" contenteditable="true"&gt;...and pasting it into this one&lt;/div&gt;</pre>

<div class="hidden">
<h4 id="CSS">CSS</h4>

<pre class="brush: css">div.source, div.target {
    border: 1px solid gray;
    margin: .5rem;
    padding: .5rem;
    height: 1rem;
    background-color: #e9eef1;
}
</pre>
</div>

<h4 id="JS">JS</h4>

<pre class="brush: js">const target = document.querySelector('div.target');

target.addEventListener('paste', (event) =&gt; {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toUpperCase();

    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));

    event.preventDefault();
});
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Live_example', '100%', '100px') }}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Clipboard API', '#clipboard-event-paste')}}</td>
   <td>{{Spec2('Clipboard API')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Element.paste_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}</li>
 <li>{{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/paste_event", "paste")}}</li>
 <li>{{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/paste_event", "paste")}}</li>
</ul>

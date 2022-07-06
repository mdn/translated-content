---
title: 'Element: cut イベント'
slug: Web/API/Element/cut_event
tags:
  - API
  - Clipboard API
  - Cut
  - Element
  - Event
  - Reference
  - Web
  - イベント
translation_of: Web/API/Element/cut_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><strong><code>cut</code></strong> イベントは、ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を実行したときに発生します。</span></p>

<p>ユーザーが編集不可能なコンテンツに対して切り取りをしようとすると、 <code>cut</code> イベントは発生しますが、イベントオブジェクトにはデータが入りません。</p>

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
   <td>{{domxref("HTMLElement/oncut", "oncut")}}</td>
  </tr>
 </tbody>
</table>

<p>イベントの既定のアクションは、 (もしあれば) 選択範囲をクリップボードへコピーして文書からその部分を取り除くことです。</p>

<p>このイベントのハンドラーは、 {{domxref("DataTransfer.setData", "setData(format, data)")}} をイベントの {{domxref("ClipboardEvent.clipboardData")}} プロパティに対して呼び出すことで、クリップボードの内容を<em>変更</em>したり、 {{domxref("Event/preventDefault", "event.preventDefault()")}} を使用して既定の動作を取り消したりすることができます。</p>

<p>なお、既定の動作を取り消すと、文書の更新が阻止されます。そのため、「切り取り」の既定の動作をエミュレートしたい場合は、イベントハンドラーでクリップボードを操作するとともに、文書から選択範囲を手動で取り除かなければなりません。</p>

<p>このハンドラーがクリップボードのデータを<em>読み取る</em>ことはできません。</p>

<p><a href="/ja/docs/Web/Guide/Events/Creating_and_triggering_events">仮想の</a> <code>cut</code> イベントを構築して配信することもできますが、システムのクリップボードには影響を与えません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Live_example" name="Live_example">ライブデモ</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="source" contenteditable="true"&gt;Try cutting text from this box...&lt;/div&gt;
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

<pre class="brush: js">const source = document.querySelector('div.source');

source.addEventListener('cut', (event) =&gt; {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();
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
   <td>{{SpecName('Clipboard API', '#clipboard-event-cut')}}</td>
   <td>{{Spec2('Clipboard API')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.cut_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}}</li>
 <li>{{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/cut_event", "cut")}}</li>
 <li>{{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/cut_event", "cut")}}</li>
</ul>

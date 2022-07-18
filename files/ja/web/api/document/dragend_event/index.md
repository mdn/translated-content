---
title: 'Document: dragend イベント'
slug: Web/API/Document/dragend_event
tags:
  - API
  - DOM
  - Document
  - DragEvent
  - Event
  - Reference
  - Web
  - drag and drop
  - dragend
  - イベント
  - ウェブ
  - ドラッグ＆ドロップ
translation_of: Web/API/Document/dragend_event
---
<div>{{APIRef}}</div>

<p><code>dragend</code> イベントは、ドラッグ操作が終わろうとしているとき (マウスボタンを離したり、エスケープキーを押したりしたとき) に発生します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル可能</th>
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">既定のアクション</th>
   <td>様々</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("DragEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers/ondragend", "ondragend")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>サンプルコードは {{domxref("Document/drag_event", "drag")}} イベント、またはこの <a class="external external-icon" href="http://jsfiddle.net/zfnj5rv4/" rel="noopener">JSFiddle デモ</a>をご覧ください。</p>

<p>{{EmbedLiveSample('Examples', '300', '200', '', 'Web/API/Document/drag_event')}}</p>

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
   <td>{{SpecName("HTML WHATWG", "interaction.html#dndevents", "dragend")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Document.dragend_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>その他のドラッグ＆ドロップイベント:
  <ul>
   <li>{{domxref("Document/drag_event", "drag")}}</li>
   <li>{{domxref("Document/dragstart_event", "dragstart")}}</li>
   <li>{{domxref("Document/dragover_event", "dragover")}}</li>
   <li>{{domxref("Document/dragenter_event", "dragenter")}}</li>
   <li>{{domxref("Document/dragleave_event", "dragleave")}}</li>
   <li>{{domxref("Document/dragexit_event", "dragexit")}}</li>
   <li>{{domxref("Document/drop_event", "drop")}}</li>
  </ul>
 </li>
 <li>他のターゲットにおけるこのイベント:
  <ul>
   <li>{{domxref("Window")}}: {{domxref("Window/dragend_event", "dragend")}} event</li>
   <li>{{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragend_event", "dragend")}} event</li>
   <li>{{domxref("SVGElement")}}: {{domxref("SVGElement/dragend_event", "dragend")}} event</li>
  </ul>
 </li>
</ul>

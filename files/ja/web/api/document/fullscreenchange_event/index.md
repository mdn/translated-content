---
title: 'Document: fullscreenchange イベント'
slug: Web/API/Document/fullscreenchange_event
tags:
  - API
  - Fullscreen API
  - Reference
  - events
  - fullscreen
  - fullscreenchange
  - イベント
  - 全画面モード
translation_of: Web/API/Document/fullscreenchange_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><code>fullscreenchange</code> イベントは、ブラウザーが全画面モードに移行したり終了したりした直後に発生します。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("Document.onfullscreenchange", "onfullscreenchange")}}</td>
  </tr>
 </tbody>
</table>

<p>このイベントは、全画面モードに移行または終了しようとしている <code>Element</code> に送られ、それから <code>Document</code> までバブリングします。</p>

&lt;p&lt;code&gt;Element が全画面モードに移行しようとしているのか、終了しようとしているのかを判別するには、 {{domxref("DocumentOrShadowRoot/fullscreenElement", "DocumentOrShadowRoot.fullscreenElement")}} の値をチェックしてください。この値が <code>null</code> ならば、要素が全画面モードを終了しようとしており、そうでなければ全画面モードに移行しようとしています。

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、 <code>fullscreenchange</code> イベントのハンドラーが {{domxref("Document")}} に追加されます。</p>

<pre class="brush: js notranslate">document.addEventListener('fullscreenchange', (event) =&gt; {
  // document.fullscreenElement は、全画面モードにある要素があれば
  // それを指します。要素がなければ、このプロパティの値は null に
  // あります。
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
  } else {
    console.log('Leaving full-screen mode.');
  }
});
</pre>

<p>その他の例については <a href="/ja/docs/Web/API/Element/fullscreenchange_event">Element: fullscreenchange イベント</a>を参照してください。</p>

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
   <td>{{SpecName("Fullscreen")}}</td>
   <td>{{Spec2("Fullscreen")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.fullscreenchange_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Document/fullscreenerror_event", "fullscreenerror")}}</li>
 <li>{{domxref("Element")}}: {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} イベント</li>
 <li><a href="/ja/docs/Web/API/Fullscreen_API">Fullscreen API</a></li>
 <li><a href="/ja/docs/Web/API/Fullscreen_API/Guide">Fullscreen API のガイド</a></li>
</ul>

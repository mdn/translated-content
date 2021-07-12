---
title: 'HTMLFormElement: formdata イベント'
slug: Web/API/HTMLFormElement/formdata_event
tags:
  - Event
  - Forms
  - Reference
  - formevent
browser-compat: api.HTMLFormElement.formdata_event
translation_of: Web/API/HTMLFormElement/formdata_event
---
<div>{{APIRef}}</div>

<p><strong><code>formdata</code></strong> イベントは、フォームのデータを表すエントリーリストが構築された後に発行されます。このイベントは、フォームが送信されたときに発行されますが、 {{domxref("FormData.FormData", "FormData()")}} コンストラクターが呼び出されたときにも発行されます。</p>

<h2 id="General_info">一般情報</h2>

<table class="properties">
 <tbody>
  <tr>
   <th>バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th>キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th>インターフェイス</th>
   <td>{{DOMxRef("FormDataEvent")}}</td>
  </tr>
  <tr>
   <th>イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers.onformdata")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">例</h2>

<pre class="brush: js">// フォームの参照を得る

const formElem = document.querySelector('form');

// submit ハンドラー

formElem.addEventListener('submit', (e) =&gt; {
  // フォームの送信時、既定の動作を抑止
  e.preventDefault();

  // FormData オブジェクトを構築し、 formdata イベントが発行される
  new FormData(formElem);
});

// データを受け取るための formdata ハンドラー

formElem.addEventListener('formdata', (e) =&gt; {
  console.log('formdata fired');

  // イベントオブジェクトからフォームデータを取得する
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);
  }

  // XHR でデータを送信
  var request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});</pre>

<p><code>onformdata</code> 版はこのようになります。</p>

<pre class="brush: js">formElem.onformdata = (e) =&gt; {
  console.log('formdata fired');

  // イベントオブジェクトからフォームデータを取得する
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);
  }

  // XHR でデータを送信
  var request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
};</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>HTML の {{htmlElement("form")}} 要素</li>
 <li>{{domxref("FormDataEvent")}}</li>
</ul>

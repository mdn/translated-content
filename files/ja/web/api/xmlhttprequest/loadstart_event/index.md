---
title: 'XMLHttpRequest: loadstart イベント'
slug: Web/API/XMLHttpRequest/loadstart_event
tags:
  - API
  - Event
  - ProgressEvent
  - Web
  - XMLHttpRequest
  - events
  - loadstart
  - イベント
  - ウェブ
translation_of: Web/API/XMLHttpRequest/loadstart_event
---
<div>{{APIRef}}</div>

<p><strong><code>loadstart</code></strong> イベントは、リクエストがデータを読み込み始めたときに発生します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル可能</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("ProgressEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("XMLHttpRequestEventTarget/onloadstart", "onloadstart")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Live_example" name="Live_example">ライブデモ</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="controls"&gt;
    &lt;input class="xhr success" type="button" name="xhr" value="Click to start XHR (success)" /&gt;
    &lt;input class="xhr error" type="button" name="xhr" value="Click to start XHR (error)" /&gt;
    &lt;input class="xhr abort" type="button" name="xhr" value="Click to start XHR (abort)" /&gt;
&lt;/div&gt;

&lt;textarea readonly class="event-log"&gt;&lt;/textarea&gt;</pre>

<div class="hidden">
<h4 id="CSS">CSS</h4>

<pre class="brush: css">.event-log {
    width: 25rem;
    height: 4rem;
    border: 1px solid black;
    margin: .5rem;
    padding: .2rem;
}

input {
    width: 11rem;
    margin: .5rem;
}
</pre>
</div>

<h4 id="JS">JS</h4>

<pre class="brush: js">const xhrButtonSuccess = document.querySelector('.xhr.success');
const xhrButtonError = document.querySelector('.xhr.error');
const xhrButtonAbort = document.querySelector('.xhr.abort');
const log = document.querySelector('.event-log');

function handleEvent(e) {
    log.textContent = log.textContent + `${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
    xhr.addEventListener('loadstart', handleEvent);
    xhr.addEventListener('load', handleEvent);
    xhr.addEventListener('loadend', handleEvent);
    xhr.addEventListener('progress', handleEvent);
    xhr.addEventListener('error', handleEvent);
    xhr.addEventListener('abort', handleEvent);
}

function runXHR(url) {
    log.textContent = '';

    const xhr = new XMLHttpRequest();
    addListeners(xhr);
    xhr.open("GET", url);
    xhr.send();
    return xhr;
}

xhrButtonSuccess.addEventListener('click', () =&gt; {
    runXHR('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg');
});

xhrButtonError.addEventListener('click', () =&gt; {
    runXHR('https://somewhere.org/i-dont-exist');
});

xhrButtonAbort.addEventListener('click', () =&gt; {
    runXHR('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg').abort();
});</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Live_example', '100%', '150px') }}</p>

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
   <td>{{SpecName('XMLHttpRequest', '#event-xhr-loadstart')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.XMLHttpRequest.loadstart_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("XMLHttpRequest/loadend_event", "loadend")}}, {{domxref("XMLHttpRequest/load_event", "load")}}, {{domxref("XMLHttpRequest/progress_event", "progress")}}, {{domxref("XMLHttpRequest/error_event", "error")}}, {{domxref("XMLHttpRequest/abort_event", "abort")}}</li>
 <li><a href="/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress">進捗の監視</a></li>
</ul>

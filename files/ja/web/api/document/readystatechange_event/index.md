---
title: 'Document: readystatechange イベント'
slug: Web/API/Document/readystatechange_event
tags:
  - Event
  - Reference
  - XMLHttpRequest
  - interactive
translation_of: Web/API/Document/readystatechange_event
---
<div>{{APIRef}}</div>

<p><strong><code>readystatechange</code></strong> eventは、文書の {{domxref("Document.readyState", "readyState")}} 属性が変化したときに発生します。</p>

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
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td><code>onreadystatechange</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Live_example" name="Live_example">ライブデモ</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="controls"&gt;
  &lt;button id="reload" type="button"&gt;Reload&lt;/button&gt;
&lt;/div&gt;

&lt;div class="event-log"&gt;
  &lt;label&gt;Event log:&lt;/label&gt;
  &lt;textarea readonly class="event-log-contents" rows="8" cols="30"&gt;&lt;/textarea&gt;
&lt;/div&gt;</pre>

<div class="hidden">
<h4 id="CSS">CSS</h4>

<pre class="brush: css">body {
  display: grid;
  grid-template-areas: "control  log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label, button {
  display: block;
}

#reload {
  height: 2rem;
}

</pre>
</div>

<h4 id="JS">JS</h4>

<pre class="brush: js">const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () =&gt; {
  log.textContent ='';
  window.setTimeout(() =&gt; {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) =&gt; {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) =&gt; {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) =&gt; {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});

</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Live_example', '100%', '160px') }}</p>

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
   <td>{{SpecName("HTML WHATWG", "indices.html#event-readystatechange", "readystatechange")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.readystatechange_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Window/load_event", "load")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}</li>
</ul>

---
title: 'Window: error イベント'
slug: Web/API/Window/error_event
tags:
  - API
  - Event
  - UI Events
  - Window
translation_of: Web/API/Window/error_event
---
<div>{{APIRef}}</div>

<p><code>error</code> イベントは、リソースの読み取りに失敗したり、使用できなかったりした場合 — 例えば、スクリプトに実行エラーがあった場合に {{domxref("Window")}} オブジェクトに発生します。</p>

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
   <td>{{domxref("Event")}} または {{domxref("UIEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers/onerror", "onerror")}}</td>
  </tr>
 </tbody>
</table>

<p>イベントオブジェクトは、ユーザーインターフェイス要素から生成された場合は {{domxref("UIEvent")}} のインスタンスとなり、それ以外の場合は {{domxref("Event")}} となります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Live_example" name="Live_example">ライブデモ</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="controls"&gt;
  &lt;button id="script-error" type="button"&gt;Generate script error&lt;/button&gt;
  &lt;img class="bad-img" /&gt;
&lt;/div&gt;

&lt;div class="event-log"&gt;
  &lt;label&gt;Event log:&lt;/label&gt;
  &lt;textarea readonly class="event-log-contents" rows="8" cols="30"&gt;&lt;/textarea&gt;
&lt;/div&gt;</pre>

<div class="hidden">
<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">body {
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

button {
  height: 2rem;
  margin: .5rem;
}

img {
  width: 0;
  height: 0;
}
</pre>
</div>

<h4 id="JS">JS</h4>

<pre class="brush: js notranslate">const log = document.querySelector('.event-log-contents');

window.addEventListener('error', (event) =&gt; {
    log.textContent = log.textContent + `${event.type}: ${event.message}\n`;
    console.log(event)
});

const scriptError = document.querySelector('#script-error');
scriptError.addEventListener('click', () =&gt; {
    const badCode = 'const s;';
    eval(badCode);
});
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Live_example', '100%', '150px') }}</p>

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
   <td>{{SpecName('UI Events', '#event-type-error')}}</td>
   <td>{{Spec2('UI Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.error_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><code>Window</code> を対象としたこのイベント: {{domxref("Window/error_event", "error")}} イベント</li>
</ul>

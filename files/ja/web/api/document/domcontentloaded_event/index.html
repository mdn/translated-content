---
title: 'Document: DOMContentLoaded イベント'
slug: Web/API/Document/DOMContentLoaded_event
tags:
  - API
  - DOMContentLoaded
  - Document
  - Event
  - Web
translation_of: Web/API/Document/DOMContentLoaded_event
---
<div>{{APIRef}}</div>

<p><strong><code>DOMContentLoaded</code></strong> イベントは、 HTML の初期文書が完全に読み込まれ解釈された時点で発生し、スタイルシート、画像、サブフレームの読み込みが完了するのを待ちません。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>可 (ただし、キャンセル可能ではない単純イベントとして定義されている)</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>なし</td>
  </tr>
 </tbody>
</table>

<p>別なイベントである {{domxref("Window/load_event", "load")}} は、ページ全体が読み込まれたときにのみ使用します。 <code>load</code> を <code>DOMContentLoaded</code> がより適切である場面で使ってしまうことがよくある誤りです。</p>

<p>同期 JavaScript は DOM の解析をいったん中断します。ユーザーがページをリクエストした後でできるだけ早く DOM が解析されるようにしたい場合は、 <a href="/ja/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests">JavaScript を非同期に</a>して、<a href="https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery">スタイルシートの読み込みを最適化</a>してください。ふつう通りに読み込むと、スタイルシートは HTML と並行で読み込まれ、中心となる HTML 文書の帯域を「盗む」ため、ふつう通りに読み込むと DOM 解析の速度を低下させます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Basic_usage" name="Basic_usage">基本的な使用</h3>

<pre class="brush: js notranslate">document.addEventListener('DOMContentLoaded', (event) =&gt; {
    console.log('DOM fully loaded and parsed');
});
</pre>

<h3 id="Delaying_DOMContentLoaded" name="Delaying_DOMContentLoaded">DOMContentLoaded の遅延</h3>

<pre class="brush: html notranslate">&lt;script&gt;
  document.addEventListener('DOMContentLoaded', (event) =&gt; {
    console.log('DOM fully loaded and parsed');
  });

for( let i = 0; i &lt; 1000000000; i++)
{} // This synchronous script is going to delay parsing of the DOM,
   // so the DOMContentLoaded event is going to launch later.
&lt;/script&gt;
</pre>

<h3 id="Checking_whether_loading_is_already_complete" name="Checking_whether_loading_is_already_complete">読み込みが完了しているかどうかのチェック</h3>

<p><code>DOMContentLoaded</code> はスクリプト実行の機会がある前に発生することがあるため、リスナーを追加する前にチェックするのが賢明です。</p>

<pre class="brush: js notranslate">function doSomething() {
  console.info('DOM loaded');
}

if (document.readyState === 'loading') {  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', doSomething);
} else {  // `DOMContentLoaded` has already fired
  doSomething();
}
</pre>

<h3 id="Live_example" name="Live_example">ライブデモ</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="controls"&gt;
  &lt;button id="reload" type="button"&gt;Reload&lt;/button&gt;
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

#reload {
  height: 2rem;
}

</pre>
</div>

<h4 id="JS">JS</h4>

<pre class="brush: js notranslate">const log = document.querySelector('.event-log-contents');
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
  <tr>
   <td>{{SpecName('HTML WHATWG', '#stop-parsing', 'DOMContentLoaded')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'syntax.html#the-end', 'DOMContentLoaded')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.DOMContentLoaded_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}</li>
 <li>{{domxref("Window")}} を対象とした同じイベント: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}</li>
</ul>

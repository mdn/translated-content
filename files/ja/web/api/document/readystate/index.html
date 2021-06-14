---
title: Document.readyState
slug: Web/API/Document/readyState
tags:
  - API
  - DOM
  - Document
  - HTML DOM
  - Reference
  - readyState
  - プロパティ
translation_of: Web/API/Document/readyState
---
<div>{{APIRef("DOM")}}{{gecko_minversion_header("1.9.2")}}</div>

<p><strong><code>Document.readyState</code></strong> プロパティは、その{{domxref("document", "文書")}}の読み込み状態を示します。</p>

<p>このプロパティの値が変化するとき、{{event("readystatechange")}} イベントが {{domxref("document")}} オブジェクト上で発生します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>string</var> = <var>document</var>.readyState;
</pre>

<h3 id="Values" name="Values">値</h3>

<p>文書の <code>readyState</code> は次のうちの一つになります。</p>

<dl>
 <dt><code>loading</code></dt>
 <dd>この文書はまだ読み込み中です。</dd>
 <dt><code>interactive</code></dt>
 <dd>この文書は読み込みが終わり、解析が済みましたが、画像、スタイルシート、フレームなどの副リソースはまだ読み込み中です。</dd>
 <dt><code>complete</code></dt>
 <dd>この文書とすべての副リソースの読み込みが終わっています。この状態は {{event("load")}} イベントがもうすぐ発火することを示します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Different_states_of_readiness" name="Different_states_of_readiness">Different states of readiness</h3>

<pre class="brush: js notranslate">switch (document.readyState) {
  case "loading":
    // この文書はまだ読み込み中。
    break;
  case "interactive":
    // この文書は読み込みが終了した。DOM 要素にアクセスできるようになった。
    // しかし、画像、スタイルシート、フレームなどの副リソースはまだ読み込み中。
    var span = document.createElement("span");
    span.textContent = "A &lt;span&gt; element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // ページが完全に読み込み完了。
    console.log("最初の CSS 規則: " + document.styleSheets[0].cssRules[0].cssText);
    break;
}
</pre>

<h3 id="readystatechange_as_an_alternative_to_DOMContentLoaded_event" name="readystatechange_as_an_alternative_to_DOMContentLoaded_event">readystatechange を DOMContentLoaded イベントの代替とする</h3>

<pre class="brush: js notranslate">// DOMContentLoaded イベントの代替
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    initApplication();
  }
}
</pre>

<h3 id="readystatechange_as_an_alternative_to_load_event" name="readystatechange_as_an_alternative_to_load_event">readystatechange を load イベントの代替とする</h3>

<pre class="brush: js notranslate">// load イベントの代替
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    initApplication();
  }
}</pre>

<h3 id="readystatechange_as_event_listener_to_insert_or_modify_the_DOM_before_DOMContentLoaded" name="readystatechange_as_event_listener_to_insert_or_modify_the_DOM_before_DOMContentLoaded">readystatechange を DOM の挿入や変更のイベントリスナーとして DOMContentLoaded の前に使用</h3>

<pre class="brush: js notranslate">document.addEventListener('readystatechange', event =&gt; {
  if (event.target.readyState === 'interactive') {
    initLoader();
  }
  else if (event.target.readyState === 'complete') {
    initApp();
  }
});

</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="spectable standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML WHATWG", "#current-document-readiness", "Document readiness")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "#current-document-readiness", "Document readiness")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "#current-document-readiness", "Document readiness")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>{{Compat("api.Document.readyState")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{event("readystatechange")}} イベント</li>
 <li>{{event("DOMContentLoaded")}} イベント</li>
 <li>{{event("load")}} イベント</li>
</ul>

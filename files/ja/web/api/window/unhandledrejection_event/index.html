---
title: 'Window: unhandledrejection イベント'
slug: Web/API/Window/unhandledrejection_event
tags:
  - API
  - Event
  - HTML DOM
  - JavaScript
  - Promise
  - Promises
  - Reference
  - Rejection
  - Window
  - Worker
  - events
  - global scope
  - unhandledrejection
  - イベント
translation_of: Web/API/Window/unhandledrejection_event
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong><code>unhandledrejection</code></strong> イベントは、 JavaScript の拒否ハンドラーを持たない {{jsxref("Promise")}} が拒否されたときにスクリプトのグローバルスコープに送られます。 通常、これは {{domxref("window")}} ですが、 {{domxref("Worker")}} であることもあります。 </span>これはデバッグや、予期しない場面でのエラーハンドリングのエラーの代替手段を提供するために利用することができます。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("PromiseRejectionEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("WindowEventHandlers.onunhandledrejection", "onunhandledrejection")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Usage_notes" name="Usage_notes">使用上のメモ</h2>

<p><code>unhandledrejection</code> イベントにバブリングを許すと、結局はコンソールにエラーメッセージを出力することになります。 これは {{domxref("PromiseRejectionEvent")}} の {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出すことで防ぐことができます。 例は以下の <a href="#preventing_default_handling">Preventing default handling</a> を参照してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>ここで <code>unhandledrejection</code> イベントの使い方が分かる例をいくつか見てみましょう。 イベントには2つの有用な情報があります。</p>

<dl>
 <dt><code>promise</code></dt>
 <dd>拒否を扱うために利用できるハンドラーがなく拒否された実際の {{jsxref("Promise")}} です。</dd>
 <dt><code>reason</code></dt>
 <dd>拒否ハンドラーに渡されるはずだった理由です。 詳しくは {{jsxref("Promise.catch", "catch()")}} を参照してください。</dd>
</dl>

<h3 id="Basic_error_logging" name="Basic_error_logging">基本的なエラーのログ</h3>

<p>この例では、処理されなかった Promise の拒否についての情報を単純にコンソールにログ出力します。</p>

<pre class="brush:js;">window.addEventListener("unhandledrejection", event =&gt; {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
</pre>

<p>イベントハンドラープロパティを使用して、イベントリスナーを設定することもできます。</p>

<pre class="brush: js">window.onunhandledrejection = event =&gt; {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
</pre>

<h3 id="Preventing_default_handling" name="Preventing_default_handling">既定のハンドリングの防止</h3>

<p>({{Glossary("Node.js")}} など) 多くの環境では、既定では処理されなかった Promise の拒否はコンソールに報告されます。 <code>unhandledrejection</code> イベントのハンドラー — と、さらに実行したいその他のタスク — を追加して、 {{domxref("Event.preventDefault()", "preventDefault()")}} を呼び出すことでイベントをキャンセルし、実行時のログ出力コードが扱われるまでバブリングすることを防ぐことができます。 これは <code>unhandledrejection</code> がキャンセル可能であるためです。</p>

<pre class="brush:js;">window.addEventListener('unhandledrejection', function (event) {
  // ...your code here to handle the unhandled rejection...

  // Prevent the default handling (such as outputting the
  // error to the console

  event.preventDefault();
});
</pre>

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
   <td>{{SpecName('HTML WHATWG', 'webappapis.html#unhandled-promise-rejections', 'unhandledrejection')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.unhandledrejection_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{SectionOnPage("/ja/docs/Web/JavaScript/Guide/Using_promises", "Promise rejection events")}}</li>
 <li>{{domxref("WindowEventHandlers.onunhandledrejection", "onunhandledrejection")}} イベントハンドラープロパティ<sup><a href="#seealso-footnote-1">1</a></sup></li>
 <li>{{domxref("Window/rejectionhandled_event", "rejectionhandled")}} イベント</li>
 <li>{{jsxref("Promise")}}</li>
</ul>

<p><a id="seealso-footnote-1" name="seealso-footnote-1">[1]</a> 対応するイベントハンドラープロパティは、{{domxref("WindowEventHandlers")}} ミックスインで定義されています。 これは、{{domxref("Window")}} インターフェイスとすべての種類の {{domxref("Worker")}} インターフェイスの両方で使用できます。</p>

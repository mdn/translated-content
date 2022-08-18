---
title: 'Window: beforeunload イベント'
slug: Web/API/Window/beforeunload_event
tags:
  - Event
  - Reference
  - Window
  - イベント
translation_of: Web/API/Window/beforeunload_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><strong><code>beforeunload</code></strong> イベントは、ウィンドウ、文書、およびそのリソースがアンロードされる直前に発生します。</span>文書はまだ表示されており、この時点ではイベントはキャンセル可能です。</p>

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
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラー</th>
   <td>{{domxref("WindowEventHandlers/onbeforeunload", "onbeforeunload")}}</td>
  </tr>
 </tbody>
</table>

<p>このイベントによって、ウェブページがダイアログボックスを表示し、ユーザーにページを終了するかどうかの確認が求めることができます。ユーザーが確認すれば、ブラウザーは新しいページへ遷移し、そうでなければ遷移をキャンセルします。</p>

<p>仕様書によれば、確認ダイアログを表示するためにはイベントハンドラーでイベントの {{domxref("Event.preventDefault()", "preventDefault()")}} を呼び出すことになっています。</p>

<p>しかし、すべてのブラウザーがこのメソッドに対応しているわけではなく、一部はイベントハンドラーに古い方法二つのうちの一つを実装するよう求めていることに注意してください。</p>

<ul>
 <li>イベントの <code>returnValue</code> プロパティに文字列を代入する</li>
 <li>イベントハンドラーから文字列を返す</li>
</ul>

<p>一部のブラウザーでは返された文字列を確認ダイアログで表示するために使用し、イベントハンドラーがユーザーに独自のメッセージを表示できるようにしていました。しかし、これは非推奨であり、すでに多くのブラウザーが対応していません。</p>

<p>望ましくないポップアップに対処するために、ブラウザーはページが操作されていない限り、 <code>beforeunload</code> のイベントハンドラーで生成したプロンプトを表示しなかったり、全くプロンプトを表示しなかったりする可能性があります。</p>

<p>イベントハンドラー/リスナーを <code>window</code> または<code>document</code> の <code>beforeunload</code> イベントに割り当てると、ブラウザーはメモリ内のページナビゲーションキャッシュ、例えば <a href="/ja/docs/Using_Firefox_1.5_caching">Firefox の Back-Forward キャッシュ</a>や <a href="https://webkit.org/blog/516/webkit-page-cache-ii-the-unload-event/">WebKit のページキャッシュ</a>などを使用することを防ぎます。</p>

<p>HTML 仕様書は {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, {{domxref("window.prompt()")}} などのメソッドが、このイベントの実行中には無視されることがあることを示しています。詳しくは、 <a href="https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#user-prompts">HTML 仕様書</a>をご覧ください。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>HTML の仕様では、 {{domxref("Event.returnValue")}} を使用する代わりに {{domxref("Event.preventDefault()")}} メソッドを使用する必要があります。ただし、これはすべてのブラウザーで対応しているわけではありません。</p>

<pre class="brush: js">window.addEventListener('beforeunload', (event) =&gt; {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = '';
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
   <td>{{SpecName("HTML WHATWG", "indices.html#event-beforeunload", "beforeunload")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "browsers.html#unloading-documents", "beforeunload")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.beforeunload_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}, {{domxref("Window/unload_event", "unload")}}</li>
 <li><a href="https://html.spec.whatwg.org/#prompt-to-unload-a-document">Unloading Documents — Prompt to unload a document</a></li>
 <li><a href="https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove_custom_messages_in_onbeforeunload_dialogs">Remove Custom Messages in onbeforeload Dialogs after Chrome 51</a></li>
</ul>

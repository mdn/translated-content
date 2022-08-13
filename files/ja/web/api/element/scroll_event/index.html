---
title: 'Element: scroll イベント'
slug: Web/API/Element/scroll_event
tags:
  - API
  - Element
  - Event
  - Reference
  - Scroll
translation_of: Web/API/Element/scroll_event
---
<p>{{APIRef}}</p>

<p><strong><code>scroll</code></strong> イベントは、要素がスクロールしたときに発行されます。</p>

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
   <td>{{DOMxRef("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}}</td>
  </tr>
 </tbody>
</table>

<div class="blockIndicator note">
<p><strong>注:</strong> iOS の UIWebViews では、 <code>scroll</code> イベントはスクロールしている最中には発行されません。スクロールが完了した後に発行されます。 <a href="https://github.com/twbs/bootstrap/issues/16202">Bootstrap issue #16202</a> を参照してください。 Safari と WKWebViews はこのバグの影響を受けません。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Scroll_event_throttling" name="Scroll_event_throttling">スクロールイベントの間引き</h3>

<p><code>scroll</code> イベントは高い頻度で発行されるため、イベントハンドラーで DOM の変更のような計算が重い操作を実行するべきではありません。代わりに、次のように {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, {{DOMxRef("WindowOrWorkerGlobalScope.setTimeout()", "setTimeout()")}}, {{DOMxRef("CustomEvent")}} などを使用してイベントを間引くことをお勧めします。</p>

<p>なお、ただし、 input イベントやアニメーションフレームがおよそ同じ頻度で発行されるため、以下の最適化は必要ないことがあります。この例は <code>requestAnimationFrame</code> の <code>scroll</code> イベントを最適化します。</p>

<pre class="brush: js notranslate">// 参照: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // スクロール位置で何かをする
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: それ以外例が {{domxref("Document/resize_event", "resize")}} イベントページにあります。</p>
</div>

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
   <td>{{SpecName('CSSOM View', '#scrolling-events')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.scroll_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>Document: {{domxref("Document/scroll_event", "scroll")}} イベント</li>
</ul>

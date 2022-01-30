---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
translation_of: Web/API/EventTarget/EventTarget
---
<div>{{APIRef("DOM Events")}}</div>

<p><code><strong>EventTarget()</strong></code> コンストラクタは新しい {{domxref("EventTarget")}} オブジェクトインスタンスをつくります。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">var <var>myEventTarget</var> = new EventTarget();</pre>

<h3 id="引数">引数</h3>

<p>なし。</p>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("EventTarget")}} オブジェクトのインスタンス。</p>

<h2 id="例">例</h2>

<pre class="brush: js" id="ct-20">class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret;  // == 5
myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-eventtarget-eventtarget', 'EventTarget() constructor')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの実装状況">ブラウザの実装状況</h2>

<div>


<p>{{Compat("api.EventTarget.EventTarget")}}</p>
</div>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{domxref("EventTarget")}}</li>
</ul>

<p> </p>

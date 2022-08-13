---
title: FormDataEvent()
slug: Web/API/FormDataEvent/FormDataEvent
tags:
- API
- Constructor
- Experimental
- FormDataEvent
- Forms
- Reference
browser-compat: api.FormDataEvent.FormDataEvent
translation_of: Web/API/FormDataEvent/FormDataEvent
---
<p>{{APIRef("DOM")}}</p>

<p><code><strong>FormDataEvent()</strong></code> コンストラクターは、新しい {{domxref("FormDataEvent")}} オブジェクトインスタンスを生成します。</p>

<h2 id="Syntax">構文</h2>

<pre
  class="brush: js">new FormDataEvent(<var>type</var>[, form<var>EventInit</var>]);</pre>

<h3 id="Values">値</h3>

<dl>
  <dt><code>type</code></dt>
  <dd>{{domxref("DOMString")}} で、このイベントの名前を表します。</dd>
  <dt><code>formEventInit</code> {{optional_inline}}</dt>
  <dd><code>FormEventInit</code> 辞書で、以下の任意のフィールドを取ります。
    <ul>
      <li><code>bubbles</code>: <code>true</code> または <code>false</code> の値で、イベントがバブリングするかどうかを示します。既定値は <code>false</code> です。</li>
      <li><code>cancelable</code>: <code>true</code> または <code>false</code> の値で、イベントがキャンセル可能であるかどうかを示します。既定値は <code>false</code> です。</li>
      <li><code>composed</code>: <code>true</code> または <code>false</code> の値で、イベントがシャドウルートの外側でリスナーを起動するかどうかを示します。既定値は <code>false</code> です。</li>
      <li><code>formData</code>: FormDataEvent に事前に入力する {{domxref("FormData")}} オブジェクトです。これには、 {{domxref("FormDataEvent.formData")}} プロパティを介してアクセスします。</li>
    </ul>
  </dd>
</dl>

<h2 id="Examples">例</h2>

<pre class="brush: js">let fd = new FormData();
fd.append('test', 'test');

let fdEv = new FormDataEvent('formdata', { formData: fd });

for (let value of fdEv.formData.values()) {
  console.log(value);
}</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("FormDataEvent")}}</li>
</ul>

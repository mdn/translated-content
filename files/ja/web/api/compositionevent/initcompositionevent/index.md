---
title: CompositionEvent.initCompositionEvent()
slug: Web/API/CompositionEvent/initCompositionEvent
tags:
  - API
  - CompositionEvent
  - Deprecated
  - Method
  - Reference
  - initCompositionEvent
translation_of: Web/API/CompositionEvent/initCompositionEvent
---
<p>{{deprecated_header}}{{APIRef("DOM Events")}}</p>

<p>{{domxref("CompositionEvent")}} インターフェイスの <code><strong>initCompositionEvent</strong></code><strong><code>()</code></strong>メソッドは、<code>CompositionEvent</code> オブジェクトインスタンスの属性を初期化します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"> compositionEventInstance.initCompositionEvent(<em>typeArg, canBubbleArg, cancelableArg, viewArg, dataArg, localeArg</em>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>typeArg</code></dt>
 <dd>composition イベントの種類を表す {{domxref("DOMString")}}。これは、<code>compositionstart</code>, <code>compositionupdate</code>, <code>compositionend</code> のいずれかになります。</dd>
 <dt><code>canBubbleArg</code></dt>
 <dd>イベントがバブリング可能するかどうかを指定する {{domxref("Boolean")}}。</dd>
 <dt><code>cancelableArg</code></dt>
 <dd>イベントがキャンセル可能かどうかを表す {{domxref("Boolean")}}。</dd>
 <dt><code>viewArg</code></dt>
 <dd>イベント生成元の {{domxref("Window")}} オブジェクト。</dd>
 <dt><code>dataArg</code></dt>
 <dd><code>data</code> 属性の値を表す {{domxref("DOMString")}}。</dd>
 <dt><code>localeArg</code></dt>
 <dd><code>locale</code> 属性の値を表す {{domxref("DOMString")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>Void.</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM3 Events','#idl-interface-CompositionEvent-initializers','initCompositionEvent()')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.CompositionEvent.initCompositionEvent")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("CompositionEvent")}}</li>
</ul>

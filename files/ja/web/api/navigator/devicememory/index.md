---
title: Navigator.deviceMemory
slug: Web/API/Navigator/deviceMemory
tags:
  - API
  - Device Memory API
  - Navigator
  - Property
  - Reference
  - deviceMemory
  - memory
translation_of: Web/API/Navigator/deviceMemory
---
<div>{{APIRef("Device Memory")}}{{securecontext_header}}{{SeeCompatTable}}</div>

<p><span class="seoSummary"><strong><code>deviceMemory</code></strong> は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、端末のおよそのメモリ量をギガバイト単位で返します。</span>この値は概数で、最も近い２の指数に切り下げ、1024で割った数字になります。また、とても低性能または高性能の端末を使用している人のプライバシーを守るため、上限値と下限値が使用されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>memoryAmount</em> = navigator.deviceMemory</pre>

<h3 id="Value" name="Value">値</h3>

<p>浮動小数点値で <code>0.25</code>, <code>0.5</code>, <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code> のうちのいずれかです。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">const memory = navigator.deviceMemory
console.log (`This device has at least ${memory}GiB of RAM.`)
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
   <td>{{SpecName("Device Memory","#sec-device-memory-js-api","deviceMemory")}}</td>
   <td>{{Spec2("Device Memory")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Navigator.deviceMemory")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Device_Memory_API">Device Memory API</a></li>
 <li>{{HTTPHeader("Device-Memory")}} HTTP header</li>
</ul>

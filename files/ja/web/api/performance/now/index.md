---
title: performance.now()
slug: Web/API/Performance/now
tags:
  - API
  - Method
  - Performance
  - Reference
  - Web Performance API
translation_of: Web/API/Performance/now
---
<div>{{APIRef("High Resolution Timing")}}</div>

<p><code><strong>performance.now()</strong></code> メソッドは、ミリ秒単位で計測された {{domxref("DOMHighResTimeStamp")}} を返します。</p>

<div class="warning">
<p>タイムスタンプは実際には高解像度ではありません。<a href="https://spectreattack.com/">Spectre</a> のようなセキュリティ上の脅威を軽減するために、ブラウザは現在、さまざまな程度まで結果を丸めています (Firefox は Firefox 59 から 2 ミリ秒に丸めています)。ブラウザによっては、タイムスタンプを少しランダム化するものもあります。 精度は将来のリリースで改善されることでしょう。ブラウザの開発者は、これらのタイミング攻撃と、それを軽減する最善策について調査しています。</p>
</div>

<p>{{AvailableInWorkers}}</p>

<p>戻り値は、<a href="/ja/docs/Web/API/DOMHighResTimeStamp#The_time_origin">time origin</a> からの経過時間を表します。</p>

<p>次の点に留意してください:</p>

<ul>
 <li>{{domxref("Window")}} コンテキストから生成された Dedicated Worker (専用ワーカー) では、この値は生成元の window における<code>performance.now()</code> の値よりも小さい値となるでしょう。従来はメインコンテキストの <code>t0</code> と同じでしたが、これは変わりました。</li>
 <li>Shared Worker または Service Worker では、この値はメインコンテキストでの値よりも大きくなるかもしれません。そのウィンドウは、それらワーカー以後に生成され得るためです。</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>t</em> = performance.now();</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
</pre>

<p>JavaScript で利用できる他のタイミングデータ (例えば <a href="/ja/docs/JavaScript/Reference/Global_Objects/Date/now"><code>Date.now</code></a>) とは違い、 <code>performance.now()</code> が返すタイムスタンプは、1ミリ秒の分解能に制限されません。その代わりに、マイクロ秒までの精度を持った浮動小数点の値で表します。</p>

<p>また、<code>Date.now()</code> とは違い、<code>performance.now()</code> が返す値は、常に一定の割合で増加します。システムクロック (これはマニュアルで調整、またはNTPのようなソフトウェアで変えられているかもしれません) から独立しているのです。他方で <code>performance.timing.navigationStart + performance.now()</code> は、おおよそ <code>Date.now()</code> と同じになるでしょう。</p>

<h2 id="Reduced_time_precision" name="Reduced_time_precision">時間精度の引き下げ</h2>

<p>タイミング攻撃やフィンガープリンティングから保護するため、ブラウザの設定によっては、<code>performance.now()</code> の精度が丸められることがあります。<br>
Firefoxでは、<code>privacy.reduceTimerPrecision</code> の設定がデフォルトで有効になっており、Firefox 59 ではデフォルトで 20 us (マイクロ秒) に設定されています。 Firefox 60 では 2 ms (ミリ秒) になります。</p>

<pre class="brush: js">// Firefox 60 での時間精度の引き下げ (2ms)
performance.now();
// 8781416
// 8781814
// 8782206
// ...


// `privacy.resistFingerprinting` 有効化による時間精度の引き下げ`
performance.now();
// 8865400
// 8866200
// 8866700
// ...
</pre>

<p>Firefoxでは <code>privacy.resistFingerprinting</code> も有効にできます。これは、精度を 100 ms か <code>privacy.resistFingerprinting.reduceTimerPrecision.microseconds</code> のどちらか大きい方へ変更します。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Highres Time Level 2', '#dom-performance-now', 'performance.now()')}}</td>
   <td>{{Spec2('Highres Time Level 2')}}</td>
   <td>インターフェイスと型について、より厳密な定義</td>
  </tr>
  <tr>
   <td>{{SpecName('Highres Time', '#dom-performance-now', 'performance.now()')}}</td>
   <td>{{Spec2('Highres Time')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.Performance.now")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>Web Fundamentals の記事: <a href="https://developers.google.com/web/updates/2012/08/When-milliseconds-are-not-enough-performance-now">
When milliseconds are not enough: performance.now</a></li>
</ul>

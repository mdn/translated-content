---
title: Window.requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
tags:
  - API
  - Animations
  - DOM
  - DOM Reference
  - Drawing
  - Games
  - Graphics
  - Intermediate
  - JavaScript timers
  - Method
  - Performance
  - Reference
  - Scheduling
  - Window
  - requestAnimationFrame
translation_of: Web/API/window/requestAnimationFrame
---
<div>{{APIRef}}</div>

<p><strong><code>window.requestAnimationFrame()</code></strong> メソッドは、ブラウザにアニメーションを行いたいことを知らせ、指定した関数を呼び出して次の再描画の前にアニメーションを更新することを要求します。このメソッドは、再描画の前に呼び出されるコールバック 1 個を引数として取ります。</p>

<div class="note"><strong>メモ:</strong> 次の再描画時に別のフレームをアニメーションさせたいときは、コールバックルーチン自身で <code>requestAnimationFrame()</code> を呼ばなければなりません。</div>

<p>このメソッドは、いつでも画面上でアニメーションの更新準備が整った時に呼び出してください。これにより、ブラウザの次の再描画が実行される前にアニメーション関数が呼び出されることを要求します。このコールバックの回数は、たいてい毎秒 60 回ですが、一般的に多くのブラウザーでは W3C の勧告に従って、ディスプレイのリフレッシュレートに合わせて行われます。ただし、コールバックの確率は、バックグラウンドのタブや隠れた {{ HTMLElement("iframe") }} では、パフォーマンス向上やバッテリー消費を減らすために低くなるでしょう。</p>

<p>コールバックメソッドには、1 個の引数 {{domxref("DOMHighResTimeStamp")}} が渡されます。これは、<code>requestAnimationFrame</code> の発火開始によりコールバックがキューに追加された時点の現在時刻を示します。単一フレーム内で複数のコールバックがあり、前のコールバックで計算負荷が生じていいても、各コールバックは同じタイムスタンプを受け取ります。このタイムスタンプは、ミリ秒単位の十進数ですが、その最小精度は 1ms (1000 µs) です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">window.requestAnimationFrame(callback);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>次の再描画でアニメーションを更新する時に呼び出す関数を指定します。コールバック関数は 1 個の引数 {{domxref("DOMHighResTimeStamp")}} を受け取ります。この引数は、<code>requestAnimationFrame</code> がコールバックの呼び出しを開始した現在時刻 ( {{domxref('performance.now()')}} から返された時刻 ) を示します。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>コールバックリスト内のエントリーを一意に識別するための、倍精度整数値の <code>requestID</code> を返します。この値は非ゼロ値ですが、値そのものを推定することはできないでしょう。この値を {{domxref("window.cancelAnimationFrame()")}} に渡すことで、コールバック関数の更新を中止できます。</p>

<h2 id="Notes" name="Notes">例</h2>

<pre class="brush: js">var start = null;
var element = document.getElementById('SomeElementYouWantToAnimate');

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
  if (progress &lt; 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
</pre>

<h2 id="Notes_2" name="Notes_2">メモ</h2>

<p>Edge のバージョン17以前と Internet Explorer は、描画サイクルの前に <code>requestAnimationFrame</code> を確実に発行するとは限りません。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td>{{SpecName('HTML WHATWG', '#animation-frames', 'requestAnimationFrame')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>変更なし、以前のものを置き換える</td>
  </tr>
  <tr>
   <td>{{SpecName('RequestAnimationFrame', '#dom-windowanimationtiming-requestanimationframe', 'requestAnimationFrame')}}</td>
   <td>{{Spec2('RequestAnimationFrame')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>
<p>{{Compat("api.Window.requestAnimationFrame")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Window.mozAnimationStartTime")}}</li>
 <li>{{domxref("Window.cancelAnimationFrame()")}}</li>
 <li><a href="http://weblogs.mozillazine.org/roc/archives/2010/08/mozrequestanima.html">mozRequestAnimationFrame</a> - ブログ投稿</li>
 <li><a href="http://paulirish.com/2011/requestanimationframe-for-smart-animating/">requestAnimationFrame for smart animating</a> - ブログ投稿</li>
 <li><a href="http://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/">Animating with javascript: from setInterval to requestAnimationFrame</a> - ブログ投稿</li>
 <li><a href="http://blogs.msdn.com/b/ie/archive/2011/07/05/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-1.aspx">Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 1</a> - ブログ投稿</li>
 <li><a href="http://www.testufo.com/#test=animation-time-graph">TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations</a></li>
 <li>Paul Irish: <a class="external external-icon" href="http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision">requestAnimationFrame API: now with sub-millisecond precision</a></li>
</ul>

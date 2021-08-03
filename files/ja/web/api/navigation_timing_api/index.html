---
title: Navigation Timing API
slug: Web/API/Navigation_timing_API
tags:
  - API
  - Performance
  - Web
translation_of: Web/API/Navigation_timing_API
---
<p>{{DefaultAPISidebar("Navigation Timing")}}</p>

<p><strong>Navigation Timing API</strong> は、ウェブサイトのパフォーマンス計測に使用できるデータを提供します。同じ目的に使用される他の JavaScript ベースの機構と異なり、この API はエンドツーエンドのさらに役立つ正確な遅延データを提供できます。</p>

<p>以下の例は、知覚できる読み込み時間の計測方法です:</p>

<pre>function onLoad() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  console.log("User-perceived page loading time: " + page_load_time);
}
</pre>

<p>数ミリ秒の間に多くの計測イベントが発生し、これらは {{domxref("PerformanceTiming")}} インターフェイスを通してアクセスできます。以下は発生順のイベントリストです:</p>

<ul>
 <li>navigationStart</li>
 <li>unloadEventStart</li>
 <li>unloadEventEnd</li>
 <li>redirectStart</li>
 <li>redirectEnd</li>
 <li>fetchStart</li>
 <li>domainLookupStart</li>
 <li>domainLookupEnd</li>
 <li>connectStart</li>
 <li>connectEnd</li>
 <li>secureConnectionStart</li>
 <li>requestStart</li>
 <li>responseStart</li>
 <li>responseEnd</li>
 <li>domLoading</li>
 <li>domInteractive</li>
 <li>domContentLoadedEventStart</li>
 <li>domContentLoadedEventEnd</li>
 <li>domComplete</li>
 <li>loadEventStart</li>
 <li>loadEventEnd</li>
</ul>

<p><code>window.performance.navigation</code> オブジェクトは 2 個の属性を格納しており、ページの読み込みが何によって起こされたか (リダイレクト、戻る・進むボタン、通常の URL 読み込み) を知るために使用します。</p>

<p>window.performance.navigation.type:</p>

<table class="standard-table" style="font-size: 14px;">
 <thead>
  <tr>
   <th scope="col">定数</th>
   <th scope="col">値</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a name="const_next"><code>TYPE_NAVIGATE</code></a></td>
   <td>0</td>
   <td>リンクのクリックにより開始されたナビゲーション、ユーザーエージェントのアドレスバーへの URL 入力、フォーム送信、または下記の TYPE_RELOAD および TYPE_BACK_FORWARD の使用によるもの以外のスクリプト操作を通した初期化。</td>
  </tr>
  <tr>
   <td><a name="const_next_no_duplicate"><code>TYPE_RELOAD</code></a></td>
   <td>1</td>
   <td>再読み込み操作を通したナビゲーションまたは location.reload() メソッド。</td>
  </tr>
  <tr>
   <td><a name="const_prev"><code>TYPE_BACK_FORWARD</code></a></td>
   <td>2</td>
   <td>履歴をたどる操作を通したナビゲーション。 Navigation through a history traversal operation.</td>
  </tr>
  <tr>
   <td><a name="const_prev_no_duplicate"><code>TYPE_UNDEFINED</code></a></td>
   <td>255</td>
   <td>上記に定義されていない形式の任意のナビゲーション。</td>
  </tr>
 </tbody>
</table>

<p><code>window.performance.navigation.redirectCount</code> は、リダイレクトが発生した場合の、最終的なページへ到達するまでの間のリダイレクト数を示します。</p>

<p>Navigation Timing API は、クライアント側でパフォーマンスデータを収集して XHR 経由でサーバーへ送信することに使用できます。また、前のページのアンロード時間やドメインの検索時間、window.onload の合計時間など、計測が困難なデータの計測に使用できます。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>ページの読み込みに必要な合計時間を計算します:</p>

<pre>var perfData = window.performance.timing;
var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
</pre>

<p>リクエストの応答時間を計算します:</p>

<pre>var connectTime = perfData.responseEnd - perfData.requestStart;</pre>

<h3 id="Specification" name="Specification">仕様</h3>

<ul>
 <li><a class="external" href="https://w3c.github.io/navigation-timing/">https://w3c.github.io/navigation-timing/</a></li>
</ul>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<p>{{Compat("api.PerformanceTiming")}}</p>

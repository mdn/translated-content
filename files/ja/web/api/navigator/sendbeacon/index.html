---
title: Navigator.sendBeacon()
slug: Web/API/Navigator/sendBeacon
tags:
  - API
  - Beacon
  - Method
  - Navigator
  - Networking
  - Reference
  - Web Performance
  - sendBeacon
  - ネットワーク
  - ビーコン
  - メソッド
translation_of: Web/API/Navigator/sendBeacon
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><code><strong>navigator.sendBeacon()</strong></code> メソッドは、ウェブサーバーに{{glossary("Asynchronous", "非同期")}}に少量のデータを {{Glossary("HTTP")}} で送るために使用することができます。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">navigator.sendBeacon(<var>url</var>, <var>data</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>url</var></code></dt>
 <dd><var>data</var> を受け取る URL です。相対でも絶対でも可能です。</dd>
 <dt><code><var>data</var></code></dt>
 <dd>送るデータを含む {{domxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}}, {{domxref("FormData")}}, {{domxref("ReadableStream")}}, {{domxref("URLSearchParams")}} のいずれかのオブジェクトです。</dd>
</dl>

<h3 id="Return_values" name="Return_values">返値</h3>

<p><code><strong>sendBeacon()</strong></code> メソッドが <code>true</code> を返した場合は、{{glossary("user agent", "ユーザーエージェント")}}が転送のために <code>data</code> をキューに入れることに成功したことを表します。それ以外の場合は <code>false</code> を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p>このメソッドは、アナリティクスや診断のために、データの送信が早すぎるとデータ収集の機会を失う可能性があるような場合、文書がアンロードされる前にサーバーにデータを送信するものです。例えば、他のページに移動してページがアンロードされる前にユーザーがどのリンクをクリックしたかなどです。</p>

<p>文書のアンロード時に確実にデータが送信されるようにするのは開発者にとってずっと難しいことでした。ユーザーエージェントは通常 {{domxref("Window/unload_event", "unload")}} ハンドラーの中で生成された非同期 {{domxref("XMLHttpRequest")}} を無視するからです。</p>

<p>伝統的には、これは以下のような回避方法を使用して、ある URL にデータを送信するまでページのアンロードを遅らせるよう位置づけられていました。</p>

<ul>
 <li>ブロックする同期 <code>XMLHttpRequest</code> の呼び出しを <code>unload</code> または {{domxref("Window/beforeunload_event", "beforeunload")}} イベントハンドラーの中で行い、データを送信する。</li>
 <li>{{HTMLElement("img")}} 要素を作成し、その <code>src</code> を <code>unload</code> ハンドラーの中で設定する。ほとんどのユーザーエージェントは画像を読み込むためにアンロードを遅延させる。</li>
 <li><code>unload</code> ハンドラー内で何もしないループを作成する。</li>
</ul>

<p>これらの方法はすべて、文書のアンロードをブロックするので、次への遷移が遅くなります。次のページがこれをやめさせる方法は存在しないので、前のページの問題であるにもかかわらず、次のページが遅いように見えます。</p>

<p>次の例は <code>unload</code> ハンドラーで同期 <code>XMLHttpRequest</code> を送ってサーバにデータを送信しようとする理論的なアナリティクスのコードです。これは、次のページの読み込みが遅らせられる結果になります。</p>

<pre class="brush: js">window.addEventListener("unload", function logData() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/log", false); // third parameter of `false` means synchronous
  xhr.send(analyticsData);
});
</pre>

<p>これが <code><strong>sendBeacon()</strong></code> で置き換わるところです。 <code>sendBeacon()</code> メソッドにより、ユーザーエージェントが行う機会があればデータが非同期に送信され、アンロードや次への遷移が遅れることはありません。<strong>これはアナリティクスのデータを送信する際の問題をすべて解決します。</strong></p>

<ul>
 <li>データの送信の信頼性が高い</li>
 <li>非同期に送信される</li>
 <li>次のページの読み込みへの影響がない</li>
 <li>加えて、どの古いテクニックよりも簡単にコードを書くことができる。</li>
</ul>

<p>次の例は、 <code>sendBeacon()</code> メソッドを使用してサーバーにデータを送信する、理論的なアナリティクスのコードパターンです。</p>

<pre class="brush: js">window.addEventListener("unload", function logData() {
  navigator.sendBeacon("/log", analyticsData);
});
</pre>

<p>ビーコンは HTTP リクエストを POST メソッドで送信し、関連する Cookie も呼び出し時にすべて利用できます。</p>

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
   <td>{{SpecName('Beacon', '#sendbeacon-method', 'sendBeacon()')}}</td>
   <td>{{Spec2('Beacon')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Navigator.sendBeacon")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("navigator", "navigator")}}</li>
</ul>

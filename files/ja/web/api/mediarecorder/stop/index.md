---
title: MediaRecorder.stop()
slug: Web/API/MediaRecorder/stop
tags:
  - API
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Method
  - Reference
  - stop
translation_of: Web/API/MediaRecorder/stop
---
<div>{{APIRef("MediaStream Recording")}}</div>

<p><span class="seoSummary"><strong><code>MediaRecorder.stop()</code></strong> メソッド（<a href="/ja/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a> の一部）は、メディアキャプチャを停止するために使用します。</span></p>

<p><code>stop()</code> メソッドを呼び出すと、UA は次の手順を実行するタスクをキューに入れます。</p>

<ol>
 <li>{{domxref("MediaRecorder.state")}} が <code>"inactive"</code> の場合は、DOM の <code>InvalidState</code> エラーを発生させてこれらの手順を終了します。 {{domxref("MediaRecorder.state")}} が <code>"inactive"</code> でない場合は、次の手順に進みます。</li>
 <li>{{domxref("MediaRecorder.state")}} を <code>"inactive"</code> に設定してメディアのキャプチャを停止します。</li>
 <li>収集されたデータの <code>Blob</code> を含む <code>dataavailable</code> イベントを発生させます。</li>
 <li><code>stop</code> イベントを発生させます。</li>
</ol>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><span class="idlInterface" id="idl-def-IDBIndex"><span class="idlMethod"><span class="idlInterface" id="idl-def-MediaRecorder"><span class="idlMethod"><span class="idlMethType"><span class="idlInterface" id="idl-def-MediaRecorder"><span class="idlMethod"><span class="idlMethType"><span class="idlInterface" id="idl-def-MediaRecorder"><span class="idlMethod"><span class="idlInterface" id="idl-def-MediaRecorder"><span class="idlMethod"> </span></span></span></span></span></span></span></span></span></span></span></span><span class="idlInterface"><span class="idlMethod"><span class="idlInterface"><span class="idlMethod"><span class="idlMethType"><span class="idlInterface"><span class="idlMethod"><span class="idlMethType"><span class="idlInterface"><span class="idlMethod"><span class="idlInterface"><span class="idlMethod"><span class="idlMethType">MediaRecorder.stop()</span></span></span></span></span></span></span></span></span></span></span></span></span></pre>

<h3 id="Errors" name="Errors">エラー</h3>

<p><code>MediaRecorder</code> オブジェクトの {{domxref("MediaRecorder.state")}} が <code>"inactive"</code> のときに <code>stop()</code> メソッドが呼び出されると、<code>InvalidState</code> エラーが発生します — メディアキャプチャが既に停止している場合は停止しても意味がありません。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">...

  stop.onclick = function() {
    mediaRecorder.stop();
    console.log("レコーダー停止、データ使用可能");
  }

...</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("MediaStream Recording", "#widl-MediaRecorder-stop-void", "MediaRecorder.stop()")}}</td>
   <td>{{Spec2("MediaStream Recording")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.MediaRecorder.stop")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">Media​Stream Recording API の使用</a></li>
 <li><a href="http://mdn.github.io/web-dictaphone/">ウェブディクタフォン</a>: MediaRecorder + getUserMedia + Web Audio API 可視化デモ、<a href="https://twitter.com/chrisdavidmills">Chris Mills</a> 著（<a href="https://github.com/mdn/web-dictaphone/">Github のソース</a>）。（英語）</li>
 <li><a href="http://simpl.info/mediarecorder/">simpl.info の MediaStream Recording のデモ</a>、<a href="https://twitter.com/sw12">Sam Dutton</a> 著。（英語）</li>
 <li>{{domxref("Navigator.getUserMedia")}}</li>
</ul>

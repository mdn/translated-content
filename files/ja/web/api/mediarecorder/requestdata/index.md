---
title: MediaRecorder.requestData()
slug: Web/API/MediaRecorder/requestData
tags:
  - API
  - Audio
  - Media
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - MediaStream Recording
  - Method
  - Reference
  - Video
  - requestData
translation_of: Web/API/MediaRecorder/requestData
---
<p>{{APIRef("MediaStream Recording")}}</p>

<p><span class="seoSummary"><strong><code>MediaRecorder.requestData()</code></strong> メソッド（<a href="/ja/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a> の一部）は、このメソッドを呼び出したときにあった、キャプチャされたメディアの {{domxref("Blob")}} オブジェクトを含む {{domxref("dataavailable")}} イベントを発生させるために使用します。</span> その後、これを入手して操作することができます。</p>

<p><code>requestData()</code> メソッドを呼び出すと、ブラウザーは次の手順を実行するタスクをキューに入れます。</p>

<ol>
 <li>{{domxref("MediaRecorder.state")}} が <code>"recording"</code> でない場合は、DOM の <code>InvalidState</code> エラーを発生させてこれらの手順を終了します。 {{domxref("MediaRecorder.state")}} が <code>"recording"</code> の場合は、次の手順に進みます。</li>
 <li>現在キャプチャされているデータの {{domxref("Blob")}} を含む {{event("dataavailable")}} イベントを発生させます（<code>Blob</code> はイベントの <code>data</code> 属性で利用可能です）。</li>
 <li>新しい <code>Blob</code> を作成し、その後にキャプチャしたデータをそこに配置します。</li>
</ol>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">MediaRecorder.requestData()</pre>

<h3 id="Errors" name="Errors">エラー</h3>

<p><code>MediaRecorder</code> オブジェクトの {{domxref("MediaRecorder.state")}} が <code>"recording"</code> でないときに <code>requestData()</code> メソッドが呼び出されると、<code>InvalidState</code> エラーが発生します — 記録が行われていないと、メディアをキャプチャできません。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">...

  captureMedia.onclick = function() {
    mediaRecorder.requestData();
    // これまでのデータのスナップショットを
    // 使用可能にする ondataavailable が発生し、
    // それから、キャプチャは新しい Blob で続行されます
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
   <td>{{SpecName("MediaStream Recording", "#widl-MediaRecorder-requestData-void", "MediaRecorder.requestData()")}}</td>
   <td>{{Spec2("MediaStream Recording")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.MediaRecorder.requestData")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">Media​Stream Recording API の使用</a></li>
 <li><a href="http://mdn.github.io/web-dictaphone/">ウェブディクタフォン</a>: MediaRecorder + getUserMedia + Web Audio API 可視化デモ、<a href="https://twitter.com/chrisdavidmills">Chris Mills</a> 著（<a href="https://github.com/mdn/web-dictaphone/">Github のソース</a>）。（英語）</li>
 <li><a href="http://simpl.info/mediarecorder/">simpl.info の MediaStream Recording のデモ</a>、<a href="https://twitter.com/sw12">Sam Dutton</a> 著。（英語）</li>
 <li>{{domxref("MediaDevices.getUserMedia")}}</li>
</ul>

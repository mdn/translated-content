---
title: MediaRecorder.resume()
slug: Web/API/MediaRecorder/resume
tags:
  - API
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Method
  - Reference
  - resume
translation_of: Web/API/MediaRecorder/resume
---
<div>{{APIRef("MediaStream Recording")}}</div>

<p><span class="seoSummary"><strong><code>MediaRecorder.resume()</code></strong> メソッド（<a href="/ja/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a> の一部）は、以前に一時停止していたメディアの記録を再開するために使用します。</span></p>

<p><code>resume()</code> メソッドを呼び出すと、ブラウザーは次の手順を実行するタスクをキューに入れます。</p>

<ol>
 <li>{{domxref("MediaRecorder.state")}} が <code>"inactive"</code> の場合は、DOM の <code>InvalidState</code> エラーを発生させてこれらの手順を終了します。 {{domxref("MediaRecorder.state")}} が <code>"inactive"</code> でない場合は、次の手順に進みます。</li>
 <li>{{domxref("MediaRecorder.state")}} を <code>"recording"</code> に設定します。</li>
 <li>現在の {{domxref("Blob")}} へのデータ収集を続けます。</li>
 <li><code>resume</code> イベントを発生させます。</li>
</ol>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><span class="idlInterface"><span class="idlMethod"><span class="idlInterface"><span class="idlMethod"><span class="idlMethType"><span class="idlInterface"><span class="idlMethod"><span class="idlMethType"><span class="idlInterface"><span class="idlMethod"><span class="idlMethType">MediaRecorder.resume()</span></span></span></span></span></span></span></span></span></span></span></pre>

<h3 id="Errors" name="Errors">エラー</h3>

<p><code>MediaRecorder</code> オブジェクトの {{domxref("MediaRecorder.state")}} が <code>"inactive"</code> のときに <code>resume()</code> メソッドが呼び出されると、<code>InvalidState</code> エラーが発生します — まだ一時停止していない場合、記録を再開できませんし、{{domxref("MediaRecorder.state")}} がすでに <code>"recording"</code> の場合、<code>resume()</code> は効果がありません。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">...

  pause.onclick = function() {
    if(MediaRecorder.state === "recording") {
      mediaRecorder.pause();
      // 記録を一時停止
    } else if(MediaRecorder.state === "paused") {
      mediaRecorder.resume();
      // 記録を再開
    }
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
   <td>{{SpecName("MediaStream Recording", "#widl-MediaRecorder-resume-void", "MediaRecorder.resume()")}}</td>
   <td>{{Spec2("MediaStream Recording")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.MediaRecorder.resume")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">Media​Stream Recording API の使用</a></li>
 <li><a href="http://mdn.github.io/web-dictaphone/">ウェブディクタフォン</a>: MediaRecorder + getUserMedia + Web Audio API 可視化デモ、<a href="https://twitter.com/chrisdavidmills">Chris Mills</a> 著（<a href="https://github.com/mdn/web-dictaphone/">Github のソース</a>）。（英語）</li>
 <li><a href="http://simpl.info/mediarecorder/">simpl.info の MediaStream Recording のデモ</a>、<a href="https://twitter.com/sw12">Sam Dutton</a> 著。（英語）</li>
 <li>{{domxref("MediaDevices.getUserMedia")}}</li>
</ul>

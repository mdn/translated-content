---
title: MediaRecorder.start()
slug: Web/API/MediaRecorder/start
tags:
  - API
  - Audio
  - Media
  - Media Capture
  - MediaRecorder
  - MediaStream Recording
  - MediaStream Recording API
  - Method
  - Recording Media
  - Reference
  - Video
  - start
translation_of: Web/API/MediaRecorder/start
---
<div>{{APIRef("MediaStream Recording")}}</div>

<p><span class="seoSummary">MediaStream Recording API の一部である {{domxref("MediaRecorder")}} のメソッド <strong><code>start()</code></strong> は、1つ以上の {{domxref("Blob")}} オブジェクトへのメディアの記録を開始します。</span> メディアの全期間を単一の <code>Blob</code> に（または {{domxref("MediaRecorder.requestData", "requestData()")}} を呼び出すまで）記録することも、一度に記録するミリ秒数を指定することもできます。 その後、その量のメディアが記録されるたびに、記録されたメディアに対応できるようにイベントが配信され、その間に、メディアの次のスライスを記録するための新しい <code>Blob</code> が作成されます。</p>

<p><code>MediaRecorder</code> の {{domxref("MediaRecorder.state", "state")}} が <code>"inactive"</code> であると仮定すると、<code>start()</code> は <code>state</code> を <code>"recording"</code> に設定してから、入力ストリームからメディアのキャプチャを開始します。 タイムスライス期間が経過するか、ソースメディアが終了するまで、<code>Blob</code> が作成され、そこにデータが収集されます。 <code>Blob</code> がその時点まで満たされるたびに（タイムスライス期間または、スライス期間が指定されていない場合はメディアの終わり）、{{event("dataavailable")}} イベントが記録されたデータとともに <code>MediaRecorder</code> に送られます。 ソースがまだ再生中の場合は、新しい <code>Blob</code> が作成され、そこに記録が続きます。</p>

<p>ソースストリームが終了すると、<code>state</code> は <code>"inactive"</code> に設定され、データ収集は停止します。 最後の {{event("dataavailable")}} イベントが <code>MediaRecorder</code> に送られ、その後に {{event("stop")}} イベントが続きます。</p>

<div class="note">
<p><strong>注</strong>: ブラウザーが記録を開始または記録を続行できない場合は、{{domxref("DOMError")}} イベントを発生<em>させよう</em>とし、続いて収集した Blob を含む {{domxref("MediaRecorder.dataavailable")}} イベントと {{domxref("MediaRecorder.stop")}} イベントを発生<em>させよう</em>とします。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>MediaRecorder</em>.start(<em>timeslice</em>)</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>timeslice</code> {{optional_inline}}</dt>
 <dd>各 {{domxref("Blob")}} に記録するミリ秒数。 このパラメータが含まれていない場合は、{{domxref("MediaRecorder.requestData", "requestData()")}} メソッドが呼び出されて <code>Blob</code> が取得され、メディアの記録を継続する新しい <code>Blob</code> の作成のきっかけがない限り、メディア期間全体が単一の <code>Blob</code> に記録されます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code>.</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>すぐに検出できるエラーは DOM 例外としてスローされます。 他のすべてのエラーは、<code>MediaRecorder</code> オブジェクトに送られた {{event("error")}} イベントを通じて報告されます。 これらのエラーに対応するために {{domxref("MediaRecorder.onerror", "onerror")}} イベントハンドラを実装できます。</p>

<dl>
 <dt><code>InvalidStateError</code></dt>
 <dd><code>MediaRecorder</code> は <code>inactive</code> 状態ではありません。 すでに記録中の場合は、メディアの記録を開始できません。 {{domxref("MediaRecorder.state", "state")}} プロパティを参照してください。</dd>
 <dt><code>SecurityError</code></dt>
 <dd>{{domxref("MediaStream")}} は記録を禁止するように設定されています。 これは、例えば、ユーザーが入力デバイスを使用するパーミッションを拒否したときに {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得されたソースの場合などです。 これは、ソースストリームの {{domxref("MediaStreamConstraints.peerIdentity", "peerIdentity")}} 制約により、ストリーム内の {{domxref("MediaStreamTrack")}} が {{domxref("MediaStreamTrack.isolated", "isolated")}} としてマークされている場合にも発生します。 この例外は、記録開始後にソースメディアのセキュリティオプションが変更された場合にも {{event("error")}} イベントとして配信される可能性があります。</dd>
 <dt><code>UnknownError</code></dt>
 <dd>記録処理中に何か他の問題が発生しました。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">...

  record.onclick = function() {
    mediaRecorder.start();
    console.log("レコーダー起動");
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
   <td>{{SpecName("MediaStream Recording", "#widl-MediaRecorder-start-void-long-timeslice", "MediaRecorder.start()")}}</td>
   <td>{{Spec2("MediaStream Recording")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.MediaRecorder.start")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">Media​Stream Recording API の使用</a></li>
 <li><a href="http://mdn.github.io/web-dictaphone/">ウェブディクタフォン</a>: MediaRecorder + getUserMedia + Web Audio API 可視化デモ、<a href="https://twitter.com/chrisdavidmills">Chris Mills</a> 著（<a href="https://github.com/mdn/web-dictaphone/">Github のソース</a>）。（英語）</li>
 <li><a href="http://simpl.info/mediarecorder/">simpl.info の MediaStream Recording のデモ</a>、<a href="https://twitter.com/sw12">Sam Dutton</a> 著。（英語）</li>
 <li>{{domxref("MediaDevices.getUserMedia")}}</li>
</ul>

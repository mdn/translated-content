---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
tags:
  - API
  - Audio
  - Media
  - Media Capture and Streams
  - MediaStream Recording
  - MediaStream Recording API
  - Overview
  - Reference
  - Video
translation_of: Web/API/MediaStream_Recording_API
---
<div>{{DefaultAPISidebar("MediaStream Recording")}}</div>

<p><span class="seoSummary"><strong>MediaStream Recording API</strong> は、単に <em>Media Recording API</em> または <em>MediaRecorder API</em> と呼ばれることもありますが、<a href="/ja/docs/Web/API/Media_Streams_API">Media Capture and Streams API</a> および <a href="/ja/docs/Web/API/WebRTC_API">WebRTC API</a> と密接に関係しています。 MediaStream Recording API を使用すると、{{domxref("MediaStream")}} オブジェクトまたは {{domxref("HTMLMediaElement")}} オブジェクトによって生成されたデータを分析、処理、またはディスクへの保存のためにキャプチャすることができます。 また、驚くほど簡単に作業できます。</span></p>

<h2 id="Basic_concepts" name="Basic_concepts">基本概念</h2>

<p>MediaStream Recording API は、{{domxref("MediaRecorder")}} という1つの主要なインターフェイスで構成されています。 <code>MediaRecorder</code> は、{{domxref("MediaStream")}} からデータを取得して処理のためにユーザーに配信するというすべての作業を行います。 データは、<code>MediaRecorder</code> の作成時にすでに指定した形式で、一連の {{event("dataavailable")}} イベントによって配信されます。 その後、データをさらに処理するか、必要に応じてファイルに書き込むことができます。</p>

<h3 id="Overview_of_the_recording_process" name="Overview_of_the_recording_process">記録プロセスの概要</h3>

<p>ストリームを記録（recording、録音、録画）するプロセスは簡単です。</p>

<ol>
 <li>メディアデータのソースとして機能する {{domxref("MediaStream")}} または {{domxref("HTMLMediaElement")}}（{{HTMLElement("audio")}} 要素または {{HTMLElement("video")}} 要素の形式）を設定します。</li>
 <li>ソースストリームと必要なオプション（コンテナの MIME タイプやトラックの必要なビットレートなど）を指定して、{{domxref("MediaRecorder")}} オブジェクトを作成します。</li>
 <li>{{domxref("MediaRecorder.ondataavailable")}} に {{event("dataavailable")}} イベントのイベントハンドラを設定します。 データが利用可能になるたびにこれが呼び出されます。</li>
 <li>ソースメディアが再生され、動画を録画する準備が整ったら、{{domxref("MediaRecorder.start()")}} を呼び出して録画を開始します。</li>
 <li>{{event("dataavailable")}} イベントハンドラは準備ができたデータがあるたびに呼ばれます。 イベントは、<code>data</code> 属性を持ち、その値はメディアデータを含む {{domxref("Blob")}} です。 あなたは <code>dataavailable</code> イベントを発生させることができ、それによって最新のサウンドをあなたに届けるので、それをフィルターにかけたり、それを保存したりすることができます。</li>
 <li>ソースメディアの再生が停止すると、録画は自動的に停止します。</li>
 <li>{{domxref("MediaRecorder.stop()")}} を呼び出すことで、いつでも録画を停止できます。</li>
</ol>

<div class="note">
<p><strong>注</strong>: 記録されたメディアのスライスを含む個々の {{domxref("Blob")}} は、必ずしも個別に再生できるわけではありません。 再生する前にメディアを組み立て直す必要があります。</p>
</div>

<p>記録中に問題が発生した場合は、{{event("error")}} イベントが <code>MediaRecorder</code> に送られます。 {{domxref("MediaRecorder.onerror", "onerror")}} イベントハンドラを設定することで <code>error</code> イベントを監視できます。</p>

<p>ここでの例では、{{domxref("MediaStream")}}のソースとしてHTML Canvasを利用し、9秒後に録画を停止します。</p>

<pre class="notranslate">var canvas = document.querySelector("canvas");

// Optional frames per second argument.
var stream = canvas.captureStream(25);
var recordedChunks = [];

console.log(stream);
var options = { mimeType: "video/webm; codecs=vp9" };
mediaRecorder = new MediaRecorder(stream, options);

mediaRecorder.ondataavailable = handleDataAvailable;
mediaRecorder.start();

function handleDataAvailable(event) {
  console.log("data-available");
  if (event.data.size &gt; 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
    download();
  } else {
    // ...
  }
}
function download() {
  var blob = new Blob(recordedChunks, {
    type: "video/webm"
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "test.webm";
  a.click();
  window.URL.revokeObjectURL(url);
}

// demo: to download after 9sec
setTimeout(event =&gt; {
  console.log("stopping");
  mediaRecorder.stop();
}, 9000);</pre>

<h3 id="Examining_and_controlling_the_recorder_status" name="Examining_and_controlling_the_recorder_status">レコーダーの状態を調べて制御する</h3>

<p><code>MediaRecorder</code> オブジェクトのプロパティを使用して記録プロセスの状態を決定したり、{{domxref("MediaRecorder.pause", "pause()")}} および {{domxref("MediaRecorder.resume", "resume()")}} メソッドを使用してソースメディアの記録を一時停止したり再開したりすることもできます。</p>

<p>特定の MIME タイプがサポートされているかどうかを確認する必要がある場合は、それも可能です。 {{domxref("MediaRecorder.isTypeSupported()")}} を呼び出すだけです。</p>

<h3 id="Examining_potential_input_sources" name="Examining_potential_input_sources">見込みがある入力ソースの調査</h3>

<p>カメラやマイクの入力を記録することが目的の場合は、<code>MediaRecorder</code> の構築プロセスを開始する前に、使用可能な入力デバイスを調べてください。 そのためには、{{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} を呼び出して利用可能なメディアデバイスのリストを取得する必要があります。 その後、そのリストを調べて見込みがある入力ソースを特定し、さらに必要な基準に基づいてリストをフィルタリングすることもできます。</p>

<p>このコードスニペットでは、<code>enumerateDevices()</code> を使用して使用可能な入力デバイスを調べ、音声入力デバイスであるものを見つけて、{{HTMLElement("option")}} 要素を作成し、それを入力ソースピッカーを表す {{HTMLElement("select")}} 要素に追加します。</p>

<pre class="brush: js notranslate">navigator.mediaDevices.enumerateDevices()
.then(function(devices) {
  devices.forEach(function(device) {
    let menu = document.getElementById("inputdevices");
    if (device.kind == "audioinput") {
      let item = document.createElement("option");
      item.innerHTML = device.label;
      item.value = device.deviceId;
      menu.appendChild(item);
    }
  });
});</pre>

<p>これと同じようなコードを使用して、ユーザーが使用したいデバイスのセットを制限することができます。</p>

<h3 id="For_more_information" name="For_more_information">詳細については</h3>

<p>MediaStream Recording API の使用方法の詳細については、<a href="/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">MediaStream Recording API の使用</a>を参照してください。 これは、API を使用してオーディオクリップを記録する方法を示します。 2番目の記事の<a href="/ja/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element">メディア要素の記録</a>では、{{HTMLElement("audio")}} 要素または {{HTMLElement("video")}} 要素からストリームを受信してキャプチャしたストリームを使用する方法（この場合は記録してローカルディスクに保存する方法）について説明します。</p>

<h2 id="Reference" name="Reference">参照</h2>

<dl>
 <dt>{{domxref("BlobEvent")}}</dt>
 <dd>メディアデータのチャンク（chunk、大きな塊）が記録され終えるたびに、<code>dataavailable</code> 型の {{domxref("BlobEvent")}} を使用して {{domxref("Blob")}} 形式で消費者に配信されます。</dd>
 <dt>{{domxref("MediaRecorder")}}</dt>
 <dd>MediaStream Recording API を実装する主要インタフェース。</dd>
 <dt>{{domxref("MediaRecorderErrorEvent")}}</dt>
 <dd>MediaStream Recording API によって投げられたエラーを表すインターフェース。 その {{domxref("MediaRecorderErrorEvent.error", "error")}} プロパティは、エラーが発生したことを示す {{domxref("DOMException")}} です。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("MediaStream Recording", "#MediaRecorderAPI")}}</td>
   <td>{{Spec2("MediaStream Recording")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<h3 id="MediaRecorder" name="MediaRecorder"><code>MediaRecorder</code></h3>



<p>{{Compat("api.MediaRecorder")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API">MediaStream Recording API の使用</a></li>
 <li><a href="/ja/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element">メディア要素の記録</a></li>
 <li><a href="https://simpl.info/mediarecorder/">simpl.info の MediaStream Recording のデモ</a>、<a href="https://twitter.com/sw12">Sam Dutton</a> 著（英語）</li>
 <li>{{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}}</li>
 <li><a href="https://addpipe.com/blog/mediarecorder-api/">Chrome および Firefox で動作中の HTML5 の Media Recorder API</a>（英語）</li>
 <li>Safari および Edge 用の <a href="https://github.com/ai/audio-recorder-polyfill">MediaRecorder ポリフィル</a>（英語）</li>
 <li><a href="https://github.com/chrisjohndigital/TutorRoom">TutorRoom</a>: getUserMedia および MediaRecorder APIを使用した HTML5 動画のキャプチャ/再生/ダウンロード（<a href="https://github.com/chrisjohndigital/TutorRoom">GitHub のソース</a>）（英語）</li>
 <li><a href="http://codepen.io/anon/pen/gpmPzm">簡単な動画録画デモ</a></li>
 <li><a href="https://quickblox.github.io/javascript-media-recorder/sample/">高度なメディアストリームレコーダーのサンプル</a>（英語）</li>
 <li><a href="https://github.com/chrisjohndigital/OpenLang">OpenLang</a>: MediaDevices と MediaStream Recording API を動画の録画に使用する HTML5 動画言語ラボウェブアプリ（<a href="https://github.com/chrisjohndigital/OpenLang">GitHub のソース</a>）（英語）</li>
 <li><a href="https://addpipe.com/blog/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/">Safari 技術プレビュー 73 で MediaStream Recorder API が利用可能に</a>（英語）</li>
</ul>

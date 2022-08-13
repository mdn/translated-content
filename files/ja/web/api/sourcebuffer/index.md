---
title: SourceBuffer
slug: Web/API/SourceBuffer
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - MSE
  - Media Source Extensions
  - Reference
  - SourceBuffer
  - Video
translation_of: Web/API/SourceBuffer
---
<p>{{APIRef("Media Source Extensions")}}</p>

<p><span class="seoSummary"><strong><code>SourceBuffer</code></strong> インターフェイスは、{{domxref("MediaSource")}} オブジェクトを介して {{domxref("HTMLMediaElement")}} に渡されて再生されるメディアのチャンク（大きな塊）を表します。 これは、1つまたは複数のメディアセグメントで構成できます。</span></p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("SourceBuffer.appendWindowEnd")}}</dt>
 <dd>追加ウィンドウの終わりのタイムスタンプを制御します。</dd>
 <dt>{{domxref("SourceBuffer.appendWindowStart")}}</dt>
 <dd>追加ウィンドウ（<a href="https://w3c.github.io/media-source/#append-window">append window</a>）の始まりのタイムスタンプを制御します。 これは、<code>SourceBuffer</code> に追加されるメディアデータをフィルタリングするために使用できるタイムスタンプの範囲です。 この範囲内のタイムスタンプを持つコード化されたメディアフレームは追加されますが、範囲外のものは除外されます。</dd>
 <dt>{{domxref("SourceBuffer.audioTracks")}} {{readonlyInline}}</dt>
 <dd><code>SourceBuffer</code> 内に現在含まれている音声トラックのリスト。</dd>
 <dt>{{domxref("SourceBuffer.buffered")}} {{readonlyInline}}</dt>
 <dd><code>SourceBuffer</code> に現在バッファされている時間範囲を返します。</dd>
 <dt>{{domxref("SourceBuffer.mode")}}</dt>
 <dd><code>SourceBuffer</code> 内のメディアセグメントの順序を、任意の順序で追加できるか、または厳密な順序で保持する必要があるかを制御します。</dd>
 <dt>{{domxref("SourceBuffer.textTracks")}} {{readonlyInline}}</dt>
 <dd><code>SourceBuffer</code> 内に現在含まれているテキストトラックのリスト。</dd>
 <dt>{{domxref("SourceBuffer.timestampOffset")}}</dt>
 <dd>その後 <code>SourceBuffer</code> に追加されるメディアセグメント内のタイムスタンプに適用されるオフセットを制御します。</dd>
 <dt>{{domxref("SourceBuffer.trackDefaults")}}</dt>
 <dd><code>SourceBuffer</code> に追加されるメディアの初期化セグメント（<a href="https://w3c.github.io/media-source/#init-segment">initialization segment</a>）で、種類、ラベル、言語情報が利用できない場合に使用するデフォルト値を指定します。</dd>
 <dt>{{domxref("SourceBuffer.updating")}} {{readonlyInline}}</dt>
 <dd><code>SourceBuffer</code> が現在更新されているかどうか、つまり {{domxref("SourceBuffer.appendBuffer()")}}、{{domxref("SourceBuffer.appendStream()")}}、または {{domxref("SourceBuffer.remove()")}} の操作が現在進行中かどうかを示すブール値。</dd>
 <dt>{{domxref("SourceBuffer.videoTracks")}} {{readonlyInline}}</dt>
 <dd><code>SourceBuffer</code> 内に現在含まれている動画トラックのリスト。</dd>
</dl>

<h3 id="Event_handlers" name="Event_handlers">イベントハンドラ</h3>

<dl>
 <dt>{{domxref("SourceBuffer.onabort")}}</dt>
 <dd>{{domxref("SourceBuffer.appendBuffer()")}} または {{domxref("SourceBuffer.appendStream()")}} が {{domxref("SourceBuffer.abort()")}} の呼び出しによって終了するたびに発生します。 {{domxref("SourceBuffer.updating")}} は <code>true</code> から <code>false</code> に変更されます。</dd>
 <dt>{{domxref("SourceBuffer.onerror")}}</dt>
 <dd>{{domxref("SourceBuffer.appendBuffer()")}} 中または {{domxref("SourceBuffer.appendStream()")}} 中にエラーが発生するたびに発生します。 {{domxref("SourceBuffer.updating")}} は <code>true</code> から <code>false</code> に変更されます。</dd>
 <dt>{{domxref("SourceBuffer.onupdate")}}</dt>
 <dd>{{domxref("SourceBuffer.appendBuffer()")}} メソッドまたは {{domxref("SourceBuffer.remove()")}} が完了するたびに発生します。 {{domxref("SourceBuffer.updating")}} は <code>true</code> から <code>false</code> に変更されます。 このイベントは、<code>onupdateend</code> の前に発生します。</dd>
 <dt>{{domxref("SourceBuffer.onupdateend")}}</dt>
 <dd>{{domxref("SourceBuffer.appendBuffer()")}} メソッドまたは {{domxref("SourceBuffer.remove()")}} が終了するたびに発生します。 このイベントは、<code>onupdate</code> の後に発生します。</dd>
 <dt>{{domxref("SourceBuffer.onupdatestart")}}</dt>
 <dd>{{domxref("SourceBuffer.updating")}} の値が <code>false</code> から <code>true</code> に遷移するたびに発生します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親インターフェイスである {{domxref("EventTarget")}} からメソッドを継承します。</em></p>

<dl>
 <dt>{{domxref("SourceBuffer.abort()")}}</dt>
 <dd>現在のセグメントを中止し、セグメントパーサーをリセットします。</dd>
 <dt>{{domxref("SourceBuffer.appendBuffer()")}}</dt>
 <dd>{{domxref("ArrayBuffer")}} または {{domxref("ArrayBufferView")}} オブジェクトからのメディアセグメントデータを <code>SourceBuffer</code> に追加します。</dd>
 <dt>{{domxref("SourceBuffer.appendBufferAsync()")}} {{experimental_inline}}</dt>
 <dd>指定されたバッファを <code>SourceBuffer</code> に非同期的に追加するプロセスを開始します。 バッファが追加されると満たされる {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("SourceBuffer.appendStream()")}}</dt>
 <dd><code>ReadableStream</code> オブジェクトからのメディアセグメントデータを <code>SourceBuffer</code> に追加します。</dd>
 <dt>{{domxref("SourceBuffer.changeType()")}}</dt>
 <dd>今後の {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} の呼び出しで、新しいデータが準拠することを期待する {{Glossary("MIME type","MIME タイプ")}}を変更します。</dd>
 <dt>{{domxref("SourceBuffer.remove()")}}</dt>
 <dd><code>SourceBuffer</code> から特定の時間範囲内のメディアセグメントを削除します。</dd>
 <dt>{{domxref("SourceBuffer.removeAsync()")}} {{experimental_inline}}</dt>
 <dd>指定された範囲のメディアセグメントを <code>SourceBuffer</code> から非同期的に削除するプロセスを開始します。 一致するすべてのセグメントが削除されると満たされる {{jsxref("Promise")}} を返します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>次の簡単な例では、動画をチャンクごとに可能な限り高速でロードし、できるだけ早く再生します。 この例は Nick Desaulniers によって作成され、<a href="http://nickdesaulniers.github.io/netfix/demo/bufferAll.html">ここでライブで見る</a>ことができます（さらに調査するために<a href="https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html">ソースをダウンロードする</a>こともできます）。</p>

<pre class="brush: js">var video = document.querySelector('video');

var assetURL = 'frag_bunny.mp4';
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window &amp;&amp; MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('サポートされていない MIME タイプまたはコーデック: ', mimeCodec);
}

function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

function fetchAB (url, cb) {
  console.log(url);
  var xhr = new XMLHttpRequest;
  xhr.open('get', url);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function () {
    cb(xhr.response);
  };
  xhr.send();
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Source Extensions', '#sourcebuffer', 'SourceBuffer')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.SourceBuffer")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>

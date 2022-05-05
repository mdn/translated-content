---
title: AudioContext.decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
tags:
  - API
  - Audio
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - decodeAudioData
translation_of: Web/API/BaseAudioContext/decodeAudioData
original_slug: Web/API/AudioContext/decodeAudioData
---
<p>{{ APIRef("Web Audio API") }}</p>

<p><code>decodeAudioData()</code> は {{ domxref("BaseAudioContext") }} のメソッドで、 {{domxref("ArrayBuffer")}} に書き込まれた音声ファイルデータを非同期にデコードするために使用されます。この場合、 <code>ArrayBuffer</code> は {{domxref("XMLHttpRequest")}} と {{domxref("FileReader")}} から読み込まれます。デコードされた {{domxref("AudioBuffer")}} は {{domxref("AudioContext")}} のサンプリングレートにリサンプリングされ、コールバックやプロミスに渡されます。</p>

<p>この方法は、オーディオトラックから Web Audio API 用のオーディオソースを作成する際に推奨される方法です。この方法は、音声ファイルの断片的なデータではなく、完全なファイルデータに対してのみ動作します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>古いコールバック構文:</p>

<pre class="syntaxbox notranslate">baseAudioContext.decodeAudioData(<var>ArrayBuffer</var>, <var>successCallback</var>, <var>errorCallback</var>);</pre>

<p>新しいプロミスベースの構文:</p>

<pre class="syntaxbox notranslate">Promise&lt;decodedData&gt; baseAudioContext.decodeAudioData(<var>ArrayBuffer</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><var>ArrayBuffer</var></dt>
 <dd>デコードする音声データが入った ArrayBuffer です。通常は{{domxref("XMLHttpRequest")}}, {{domxref("WindowOrWorkerGlobalScope.fetch()")}}, {{domxref("FileReader")}} から取得します。</dd>
 <dt><var>successCallback</var></dt>
 <dd>デコードが完了すると呼び出されるコールバック関数です。このコールバックの引数は1つで、 <var>decodedData</var> (デコードされた PCM 音声データ) を表す {{domxref("AudioBuffer")}} です。通常は、デコードされたデータを {{domxref("AudioBufferSourceNode")}} に入れて、そこから再生したり、好きなように操作したりすることができます。</dd>
 <dt><var>errorCallback</var></dt>
 <dd>任意のエラーコールバックで、音声データのデコードでエラーが発生すると呼び出されます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>なし、または <var>decodedData</var> で満足する {{domxref("Promise") }} オブジェクトで.</p>

<h2 id="Example" name="Example">例</h2>

<p>ここでは最初に古いコールバックベースのシステムを、次に新しいプロミスベースの構文を取り上げます。</p>

<h3 id="Older_callback_syntax" name="Older_callback_syntax">古いコールバックベースの構文</h3>

<p>この例では、 <code>getData()</code> 関数は XHR を使用して音声トラックを読み込み、リクエストの <code>responseType</code> を <code>arraybuffer</code> に設定して、レスポンスとして配列バッファーを返すようにして、それを <code>audioData</code> 変数に格納しています。それからこのバッファーを <code>decodeAudioData()</code> 関数に渡します。成功したコールバックは、デコードに成功した PCM データを受け取り、 {{ domxref("AudioContext.createBufferSource()") }} で作成した {{ domxref("AudioBufferSourceNode") }} に入れ、ソースを {{domxref("AudioContext.destination") }} に接続してループするように設定します。</p>

<p>ボタンは単に <code>getData()</code> を実行して、それぞれトラックの読み込みと再生、停止を行うだけです。ソースの <code>stop()</code> メソッドが呼ばれると、ソースは消滅します。</p>

<div class="note">
<p><strong>注:</strong> <a href="https://mdn.github.io/webaudio-examples/decode-audio-data/">ライブ例の実行</a> (または<a href="https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data">ソースの閲覧</a>) もできます。</p>
</div>

<pre class="brush: js notranslate">// 変数の定義

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var source;

var pre = document.querySelector('pre');
var myScript = document.querySelector('script');
var play = document.querySelector('.play');
var stop = document.querySelector('.stop');

// 音声トラックの読み込みには XHR を使い、
// decodeAudioData でデコードし、バッファーに格納する
// そして、そのバッファーを source に設定する

function getData() {
  source = audioCtx.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', 'viper.ogg', true);

  request.responseType = 'arraybuffer';


  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        source.buffer = buffer;

        source.connect(audioCtx.destination);
        source.loop = true;
      },

      function(e){ console.log("Error with decoding audio data" + e.err); });

  }

  request.send();
}

// 音声の停止と再生を行うボタン

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
}

stop.onclick = function() {
  source.stop(0);
  play.removeAttribute('disabled');
}


// pre要素にスクリプトを設定する

pre.innerHTML = myScript.innerHTML;</pre>

<h3 id="New_promise-based_syntax" name="New_promise-based_syntax">新しいプロミスベースの構文</h3>

<pre class="brush: js notranslate">ctx.decodeAudioData(audioData).then(function(decodedData) {
 // デコードしたデータをここで使う
});</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Web Audio API', '#dom-baseaudiocontext-decodeaudiodata', 'decodeAudioData()')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.BaseAudioContext.decodeAudioData")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Web Audio API の使用</a></li>
</ul>

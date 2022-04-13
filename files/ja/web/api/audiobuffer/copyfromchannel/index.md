---
title: AudioBuffer.copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
tags:
  - API
  - Audio
  - AudioBuffer
  - Copying
  - Frames
  - Method
  - Reference
  - Samples
  - Web Audio
  - Web Audio API
  - copy
  - copyFromChannel
  - sound
translation_of: Web/API/AudioBuffer/copyFromChannel
---
<div>{{APIRef("Web Audio API")}}</div>

<p><span class="seoSummary">{{domxref("AudioBuffer")}} インターフェイスの <strong><code>copyFromChannel()</code></strong> メソッドは、 <code>AudioBuffer</code> の指定されたチャンネルから音声サンプルデータを指定された {{domxref("Float32Array")}} へコピーします。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>myArrayBuffer</var>.copyFromChannel(<var>destination</var>, <var>channelNumber</var>, <var>startInChannel</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>destination</var></code></dt>
 <dd>チャンネルのサンプルのコピー先となる {{domxref("Float32Array")}} です。</dd>
 <dt><code><var>channelNumber</var></code></dt>
 <dd>チャンネルデータをコピーする現在の <code>AudioBuffer</code> のチャンネル数です。</dd>
 <dt><code><var>startInChannel</var></code> {{optional_inline}}</dt>
 <dd>(任意) ソースチャンネルバッファー内でサンプルのコピーを始める位置のオフセットです。指定されていない場合は、既定で0の値 (バッファーの先頭) とみなされます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>undefined</code> です。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt><code>indexSizeError</code></dt>
 <dd>入力引数のうちの一つが、受付可能な範囲の外にある場合。
 <ul>
  <li><code><var>channelNumber</var></code> の値が存在しないチャンネル番号を指定している場合 (つまり、チャンネルの {{domxref("AudioBuffer.numberOfChannels", "numberOfChannels")}} 以上である場合)。</li>
  <li><code><var>startInChannel</var></code> の値がソースバッファーの中に既に存在するサンプルの現在の範囲の外にある場合。つまり、現在の {{domxref("AudioBuffer.length", "length")}} より大きい場合。</li>
 </ul>
 </dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>この例では新しい音声バッファーを生成し、他のチャンネルからサンプルをコピーします。</p>

<pre class="brush: js">var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
var anotherArray = new Float32Array(length);
myArrayBuffer.copyFromChannel(anotherArray, 1, 0);
</pre>

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
   <td>{{SpecName('Web Audio API', '#widl-AudioBuffer-copyFromChannel-void-Float32Array-destination-long-channelNumber-unsigned-long-startInChannel', 'copyFromChannel')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>
<p>{{Compat("api.AudioBuffer.copyFromChannel")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Web Audio API の使用</a></li>
</ul>

---
title: HTMLCanvasElement.captureStream()
slug: Web/API/HTMLCanvasElement/captureStream
tags:
  - Canvas
  - Experimental
  - HTMLCanvasElement
  - Interface
  - Media
  - Media Capture DOM Elements
  - Method
  - Reference
  - Web
translation_of: Web/API/HTMLCanvasElement/captureStream
---
<div>{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}</div>

<p><code><strong>HTMLCanvasElement</strong></code><strong><code>.captureStream()</code></strong> メソッドは、canvas の前面をリアルタイムにキャプチャした動画を {{domxref("CanvasCaptureMediaStream")}} として返すメソッドです。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><var>MediaStream</var> = <var>canvas</var>.captureStream(<var>frameRate</var>);
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>frameRate</code> {{optional_inline}}</dt>
 <dd>キャプチャする際のフレームレートを倍精度浮動小数点数で指定します。指定しなかった場合、canvas が変化するたびにフレームが新しくキャプチャされます。0 を指定した場合、フレームが 1 枚だけキャプチャされます。</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("MediaStream")}} オブジェクトへの参照を返します。</p>

<h2 id="使用例">使用例</h2>

<pre class="brush: js">// キャプチャしたい canvas 要素を取得
var canvasElt = document.querySelector('canvas');

// ストリームの取得
var stream = canvasElt.captureStream(25); // 25 FPS

// 取得したストリームに対して何らかの処理を行う
// 例：RTCPeerConnection を使って別のコンピュータに送信
// ここで pc は既に生成された RTCPeerConnection オブジェクト
pc.addStream(stream);
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Media Capture DOM Elements', '#widl-HTMLCanvasElement-captureStream-CanvasCaptureMediaStream-double-frameRate', 'HTMLCanvasElement.captureStream()')}}</td>
   <td>{{Spec2('Media Capture DOM Elements')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.HTMLCanvasElement.captureStream")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{domxref("CanvasCaptureMediaStream")}} - 戻り値のインターフェイス</li>
 <li>{{domxref("HTMLMediaElement.captureStream()")}} - media 要素からストリームをキャプチャするメソッド</li>
 <li>{{domxref("MediaStream")}}</li>
 <li>{{domxref("Media Capture and Streams API")}}</li>
</ul>

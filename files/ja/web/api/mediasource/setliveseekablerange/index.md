---
title: MediaSource.setLiveSeekableRange()
slug: Web/API/MediaSource/setLiveSeekableRange
tags:
  - API
  - Audio
  - Extensions
  - Media
  - Media Source Extensions
  - MediaSource
  - Method
  - Reference
  - Video
  - setLiveSeekableRange()
translation_of: Web/API/MediaSource/setLiveSeekableRange
---
<p>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</p>

<p>{{domxref("MediaSource")}} インターフェイスの <strong><code>setLiveSeekableRange()</code></strong> メソッドは、ユーザーがメディア要素でシークできる範囲を設定します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>mediaSource</var>.setLiveSeekableRange(<var>start</var>, <var>end</var>)</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>start</dt>
 <dd>ソースの最初から測定された秒単位で設定するシーク可能な範囲の始まり。 メディアソースの期間が正の無限大である場合、{{domxref("HTMLMediaElement.seekable")}} プロパティによって返される {{domxref("TimeRanges")}} オブジェクトは、この値以下の開始タイムスタンプを持ちます。</dd>
 <dt>end</dt>
 <dd>ソースの最初から測定された秒単位で設定するシーク可能な範囲の終わり。 メディアソースの期間が正の無限大である場合、{{domxref("HTMLMediaElement.seekable")}} プロパティによって返される {{domxref("TimeRanges")}} オブジェクトは、この値以上の終了タイムスタンプを持ちます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{jsxref('undefined')}}</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">// 未定</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Source Extensions','#dom-mediasource-setliveseekablerange','setLiveSeekableRange()')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.MediaSource.setLiveSeekableRange")}}</p>

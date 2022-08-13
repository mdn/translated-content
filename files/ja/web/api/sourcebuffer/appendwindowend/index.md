---
title: SourceBuffer.appendWindowEnd
slug: Web/API/SourceBuffer/appendWindowEnd
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - SourceBuffer
  - Video
  - appendWindowEnd
translation_of: Web/API/SourceBuffer/appendWindowEnd
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">{{domxref("SourceBuffer")}} インターフェイスの <strong><code>appendWindowEnd</code></strong> プロパティは、追加ウィンドウ（<a href="https://w3c.github.io/media-source/#append-window">append window</a>）の終わりのタイムスタンプを制御します。 タイムスタンプの範囲は、<code>SourceBuffer</code> に追加されるメディアデータをフィルターするために使用できます。 この範囲内のタイムスタンプを持つコード化されたメディアフレームは追加されますが、範囲外のものは除外されます。</span></p>

<p><code>appendWindowEnd</code> のデフォルト値は正の無限大です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>myAppendWindowEnd</em> = <em>sourceBuffer</em>.appendWindowEnd;

<em>sourceBuffer</em>.appendWindowEnd = 120.0;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>追加ウィンドウの終了時間を秒単位で示す double 型。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p>このプロパティに新しい値を設定すると、次の例外がスローされる場合があります。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidAccessError</code></td>
   <td>値を {{domxref("SourceBuffer.appendWindowStart")}} 以下、または NaN に設定しようとしました。</td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>この {{domxref("SourceBuffer")}} オブジェクトが更新中（つまり、その {{domxref("SourceBuffer.updating")}} プロパティが現在 <code>true</code>）であるか、この <code>SourceBuffer</code> が {{domxref("MediaSource")}} から取り除かれています。</td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<p>未定</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-appendwindowend', 'appendWindowEnd')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.SourceBuffer.appendWindowEnd")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>

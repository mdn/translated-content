---
title: SourceBuffer.timestampOffset
slug: Web/API/SourceBuffer/timestampOffset
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
  - timestampOffset
translation_of: Web/API/SourceBuffer/timestampOffset
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">{{domxref("SourceBuffer")}} インターフェイスの <strong><code>timestampOffset</code></strong> プロパティは、<code>SourceBuffer</code> に追加されるメディアセグメント内のタイムスタンプに適用されるオフセットを制御します。</span></p>

<p><code>timestampOffset</code> の初期値は 0 です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>myOffset</em> = <em>sourceBuffer</em>.timestampOffset;

<em>sourceBuffer</em>.timestampOffset = 2.5;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>オフセット量が秒単位で表される double 型。</p>

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
   <td><code>InvalidStateError</code></td>
   <td>{{domxref("MediaSource.sourceBuffers")}} の {{domxref("SourceBuffer")}} オブジェクトの1つ以上が更新中（つまり、{{domxref("SourceBuffer.updating")}} プロパティが現在 <code>true</code>）、<code>SourceBuffer</code> 内のメディアセグメントが現在解析中、またはこの <code>SourceBuffer</code> が {{domxref("MediaSource")}} から取り除かれています。</td>
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
   <td>{{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-timestampoffset', 'timestampOffset')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.SourceBuffer.timestampOffset")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>

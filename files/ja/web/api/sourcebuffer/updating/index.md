---
title: SourceBuffer.updating
slug: Web/API/SourceBuffer/updating
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - SourceBuffer
  - Updating
  - Video
translation_of: Web/API/SourceBuffer/updating
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p>{{domxref("SourceBuffer")}} インターフェイスの <code>updating</code> 読み取り専用プロパティは、<code>SourceBuffer</code> が現在更新されているかどうか、つまり {{domxref("SourceBuffer.appendBuffer()")}}、{{domxref("SourceBuffer.appendStream()")}}、または {{domxref("SourceBuffer.remove()")}} の操作が現在進行中かどうかを示します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>isUpdating</em> = <em>sourceBuffer</em>.updating;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{jsxref("Boolean")}}。</p>

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
   <td>{{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-updating', 'updating')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.SourceBuffer.updating")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>

---
title: SourceBuffer.mode
slug: Web/API/SourceBuffer/mode
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
  - mode
translation_of: Web/API/SourceBuffer/mode
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">{{domxref("SourceBuffer")}} インターフェイスの <strong><code>mode</code></strong> プロパティは、メディアセグメントを <code>SourceBuffer</code> に任意の順序で追加できるか、厳密な順序で追加できるかを制御します。</span></p>

<p>使用可能な2つの値は次のとおりです。</p>

<ul>
 <li><code>segments</code>: メディアセグメントのタイムスタンプが、セグメントの再生順序を決定します。 セグメントは、任意の順序で <code>SourceBuffer</code> に追加できます。</li>
 <li><code>sequence</code>: セグメントが <code>SourceBuffer</code> に追加される順序により、セグメントの再生順序を決定します。 セグメントのタイムスタンプは、この順序に従ってセグメントに対して自動的に生成されます。</li>
</ul>

<p><code>mode</code> 値は、<code>MediaSource.addSourceBuffer()</code> を使用して <code>SourceBuffer</code> が作成されるときに最初に設定されます。 メディアセグメントにタイムスタンプが既に存在する場合、値は <code>segments</code> に設定されます。 そうでない場合、値は <code>sequence</code> に設定されます。</p>

<p>初期値が <code>sequence</code> のときに <code>mode</code> プロパティ値を <code>segments</code> に設定しようとすると、例外がスローされます。 <code>sequence</code> モードでは、既存のセグメントの順序を維持する必要があります。 ただし、値を <code>segments</code> から <code>sequence</code> に変更することはできます。 これは、再生順序が固定され、これを反映するために新しいタイムスタンプが生成されることを意味します。</p>

<p>このプロパティは、<code>SourceBuffer</code> が {{domxref("SourceBuffer.appendBuffer","appendBuffer()")}} または {{domxref("SourceBuffer.remove","remove()")}} の呼び出しを処理している間は変更できません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>myMode</em> = <em>sourceBuffer</em>.mode;

<em>sourceBuffer</em>.mode = 'sequence';
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("DOMString")}}。</p>

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
   <td>初期値が <code>sequence</code> の場合に、値を <code>segments</code> に設定しようとしました。</td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>{{domxref("SourceBuffer")}} オブジェクトが更新中（つまり、その {{domxref("SourceBuffer.updating")}} プロパティが現在 <code>true</code>）、この <code>SourceBuffer</code> に追加された最後のメディアセグメントが不完全、またはこの <code>SourceBuffer</code> が {{domxref("MediaSource")}} から取り除かれています。</td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<p>このスニペットは、<code>sourceBuffer</code> のモードが、 現在 <code>'segments'</code> に設定されている場合、<code>'sequence'</code> に設定します。 したがって、再生順序は、メディアセグメントを追加した順に設定されます。</p>

<pre class="brush: js">var curMode = sourceBuffer.mode;
if (curMode == 'segments') {
  sourceBuffer.mode = 'sequence';
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
   <td>{{SpecName('Media Source Extensions', '#idl-def-sourcebuffer-mode', 'mode')}}</td>
   <td>{{Spec2('Media Source Extensions')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.SourceBuffer.mode")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("MediaSource")}}</li>
 <li>{{domxref("SourceBufferList")}}</li>
</ul>

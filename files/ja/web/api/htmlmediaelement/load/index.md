---
title: HTMLMediaElement.load()
slug: Web/API/HTMLMediaElement/load
tags:
  - API
  - Audio
  - Element
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Method
  - Reference
  - Video
  - load
  - reset
translation_of: Web/API/HTMLMediaElement/load
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary">{{domxref("HTMLMediaElement")}} の <strong><code>load()</code></strong> メソッドは、メディア要素をその初期状態にリセットし、再生を開始する準備としてメディアソースを選択してメディアを読み込むプロセスを開始します。</span> プリフェッチされるメディアデータの量は、要素の {{htmlattrxref("preload", "video")}} 属性の値によって決まります。</p>

<p>このメソッドは通常、要素の {{htmlattrxref("src", "video")}} 属性を変更するか、メディア要素自体の中にネストされている {{HTMLElement("source")}} 要素を追加または削除することによって、メディア要素に使用可能な一連のソースを動的に変更した場合にのみ役立ちます。 <code>load()</code> は要素をリセットして利用可能なソースを再スキャンし、それによって変更を有効にします。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>mediaElement</em>.load();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>無し。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code>。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p><code>load()</code> を呼び出すと、このメディア要素を含む進行中のすべての操作が中止され、{{HTMLElement("audio")}} 要素または {{HTMLElement("video")}} 要素で指定されたオプションとその {{htmlattrxref("src", "video")}} 属性または子の {{HTMLElement("source")}} 要素を指定して適切なメディアリソースの選択と読み込みのプロセスが開始されます。 これについては、<a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">動画と音声のコンテンツ</a>の<a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#Supporting_multiple_formats">複数フォーマットのサポート</a>で詳しく説明しています。</p>

<p>進行中のアクティビティを中止するプロセスにより、{{domxref("HTMLMediaElement.play", "play()")}} によって返された未処理の {{jsxref("Promise")}} が、新しいメディアの読み込みが開始される前に、そのステータスに基づいて適切に解決または拒否されます。 保留中の play の promises は <code>"AbortError"</code> {{domxref("DOMException")}} で中止されます。</p>

<p>読み込みプロセスが進むにつれて、次のように適切なイベントがメディア要素自体に送信されます。</p>

<ul>
 <li>要素がすでにメディアの読み込み処理中の場合、その読み込み処理は中止され、<strong>{{event("abort")}}</strong> イベントが送信されます。</li>
 <li>要素がすでにメディアで初期化されている場合は、<strong>{{event("emptied")}}</strong> イベントが送信されます。</li>
 <li>再生位置をメディアの先頭にリセットすると、実際に再生位置が変更された場合（つまり、まだ先頭になっていない場合）、<strong>{{event("timeupdate")}}</strong> イベントが送信されます。</li>
 <li>メディアが選択され、読み込みの開始準備が整うと、<strong>{{event("loadstart")}}</strong> イベントが配信されます。</li>
 <li>これ以降は、メディアの読み込みと同じようにイベントが送信されます。</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<p>この例では、ドキュメント内の {{HTMLElement("video")}} 要素を見つけて、<code>load()</code> を呼び出してそれをリセットします。</p>

<pre class="brush: js">var mediaElem = document.querySelector("video");
mediaElem.load();
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "media.html#dom-media-load", "HTMLMediaElement.load()")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "semantics-embedded-content.html#dom-htmlmediaelement-load", "HTMLMediaElement.load()")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLMediaElement.load")}}</p>

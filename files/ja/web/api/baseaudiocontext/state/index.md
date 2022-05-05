---
title: AudioContext.state
slug: Web/API/BaseAudioContext/state
translation_of: Web/API/BaseAudioContext/state
original_slug: Web/API/AudioContext/state
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }}インターフェースの<code>state</code>読取専用プロパティは、現在の<code>AudioContext</code>の状態を返します。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">baseAudioContext.state;</pre>

<h3 id="値">値</h3>

<p>{{domxref("DOMString")}}。取りうる値は:</p>

<ul>
 <li><code>suspended</code>: オーディオコンテキストは({{domxref("AudioContext.suspend()")}}によって)一時停止中</li>
 <li><code>running</code>: オーディオコンテキストは通常動作中</li>
 <li><code>closed</code>: オーディオコンテキストは({{domxref("AudioContext.close()")}}によって)閉じられた</li>
</ul>

<h2 id="例">例</h2>

<p>次のスニペットは<a href="https://github.com/mdn/audiocontext-states/settings">AudioContext states デモ</a>の一部です(<a href="http://mdn.github.io/audiocontext-states/">すぐに実行</a>)。{{domxref("AudioContext.onstatechange")}}ハンドラは、状態が変わるたびにコンソールにログを出力するために使われています。</p>

<pre class="brush: js">audioCtx.onstatechange = function() {
  console.log(audioCtx.state);
}
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#dom-baseaudiocontext-state', 'state')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<div>
<div>


<p>{{Compat("api.BaseAudioContext.state")}}</p>
</div>
</div>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>

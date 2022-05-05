---
title: AudioContext.onstatechange
slug: Web/API/BaseAudioContext/statechange_event
translation_of: Web/API/BaseAudioContext/onstatechange
original_slug: Web/API/BaseAudioContext/onstatechange
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p>{{ domxref("AudioContext") }}インターフェースの<code>onstatechangeプロパティは、</code>{{Event("statechange")}}イベントが発火した(これはオーディオコンテキストの状態が変わったとき発生します)とき呼ばれるイベントハンドラ関数を定義します。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
audioCtx.onstatechange = function() { ... };</pre>

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
   <td>{{SpecName('Web Audio API', '#widl-AudioContext-onstatechange', 'onstatechange')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="互換性">互換性</h2>

<p>{{Compat("api.BaseAudioContext.onstatechange")}}</p>

<h2 id="参考">参考</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>

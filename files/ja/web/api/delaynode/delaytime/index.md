---
title: DelayNode.delayTime
slug: Web/API/DelayNode/delayTime
translation_of: Web/API/DelayNode/delayTime
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p><code>delayTime</code> は {{ domxref("DelayNode") }} の持つ属性で、遅延させる時間を表します。<a href="/ja/docs/Web/API/AudioParam#a-rate">a-rate</a> の{{domxref("AudioParam")}} です。</p>

<p><code>delayTime</code> の単位は秒で、その最小値は 0 です。最大値は {{ domxref("DelayNode") }}  作成時に、{{domxref("AudioContext.createDelay()")}} の引数で指定できます。</p>
</div>

<h2 id="文法">文法</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var myDelay = audioCtx.createDelay(5.0);
myDelay.delayTime.value = 3.0;
</pre>

<div class="note">
<p><strong>注意</strong>: {{domxref("AudioParam")}} は読み取り専用ですが、そのr value 属性へは代入が可能です。</p>
</div>

<h3 id="値">値</h3>

<p>{{domxref("AudioParam")}}。</p>

<h2 id="使用例">使用例</h2>

<p>{{page("/ja/docs/Web/API/AudioContext.createDelay","Example")}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', 'http://webaudio.github.io/web-audio-api/#widl-DelayNode-delayTime', 'delayTime')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.DelayNode.delayTime")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>

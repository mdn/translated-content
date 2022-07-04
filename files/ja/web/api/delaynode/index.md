---
title: DelayNode
slug: Web/API/DelayNode
translation_of: Web/API/DelayNode
---
<p>{{ APIRef("Web Audio API") }}</p>

<div>
<p><code>DelayNode</code> は <a href="http://en.wikipedia.org/wiki/Digital_delay_line">delay-line</a> を表す {{domxref("AudioNode")}} の一種で、入力されたデータを指定された時間遅延して、出力します。<code>DelayNode</code> の入力と出力は常に 1つで、入力のチャンネル数と出力のチャンネル数は同じです。</p>
</div>

<p><img alt="The DelayNode acts as a delay-line, here with a value of 1s." src="https://mdn.mozillademos.org/files/9711/WebAudioDelayNode.png" style="height: 116px; width: 774px;"></p>

<p>オーディオグラフに閉路がある場合、その中には最低 1 つの <code>DelayNode</code> がなければなりません。もし閉路中に <code>DelayNode</code> が存在しない場合、その閉路中のノードはミュートされます。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">入力数</th>
   <td><code>1</code></td>
  </tr>
  <tr>
   <th scope="row">出力数</th>
   <td><code>1</code></td>
  </tr>
  <tr>
   <th scope="row">チャンネルカウントモード</th>
   <td><code>"max"</code></td>
  </tr>
  <tr>
   <th scope="row">チャンネル数</th>
   <td><code>2</code> (not used in the default count mode)</td>
  </tr>
  <tr>
   <th scope="row">チャンネルの意味</th>
   <td><code>"speakers"</code></td>
  </tr>
 </tbody>
</table>

<h2 id="属性">属性</h2>

<p><em>{{domxref("AudioNode")}}</em> の属性を継承しています。</p>

<dl>
 <dt>{{domxref("DelayNode.delayTime")}} {{readonlyInline}}</dt>
 <dd><a href="/ja/docs/Web/API/AudioParam#a-rate">a-rate</a> の {{domxref("AudioParam")}} で、遅延させる時間を表します。</dd>
</dl>

<h2 id="メソッド">メソッド</h2>

<p><em>固有のメソッドはありません。継承しているものは {{domxref("AudioNode")}} をご覧ください。</em></p>

<h2 id="使用例">使用例</h2>

<p>{{page("/en-US/docs/Web/API/AudioContext.createDelay","Example")}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#the-delaynode-interface', 'DelayNode')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.DelayNode")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>

---
title: BroadcastChannel.close()
slug: Web/API/BroadcastChannel/close
tags:
  - API
  - Broadcast Channel API
  - BroadcastChannel
  - Experimental
  - HTML API
  - Method
  - Reference
translation_of: Web/API/BroadcastChannel/close
---
<p>{{APIRef("BroadCastChannel API")}}</p>

<p><span class="seoSummary"><strong><code>BroadcastChannel.close()</code></strong> は、基礎となるチャネルへの接続を終了し、オブジェクトをガベージコレクションできるようにします。</span> このチャンネルがもう必要ないことをブラウザーが知る他の方法はないので、これは実行するのに必要なステップです。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>str</em> = <em>channe<code>l</code></em><code>.close();</code>
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">// チャンネルに接続
var bc = new BroadcastChannel('test_channel');

// その他の操作（postMessage など）

// 終了したら、チャンネルから切断します
bc.close();
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
   <td>{{SpecName('HTML WHATWG', "comms.html#dom-broadcastchannel-close", "BroadcastChannel.close()")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.BroadcastChannel.close")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("BroadcastChannel")}}: これが属するインターフェース。</li>
</ul>

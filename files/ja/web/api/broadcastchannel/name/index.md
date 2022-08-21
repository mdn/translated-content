---
title: BroadcastChannel.name
slug: Web/API/BroadcastChannel/name
tags:
  - Broadcast Channel API
  - BroadcastChannel
  - Experimental
  - HTML API
  - Property
  - Read-only
  - Reference
translation_of: Web/API/BroadcastChannel/name
---
<p>{{APIRef("BroadCastChannel API")}}</p>

<p><span class="seoSummary">読み取り専用の <strong><code>BroadcastChannel.name</code></strong> プロパティは、指定されたチャンネルをその名前で一意に識別する {{domxref("DOMString")}} を返します。</span> この名前は作成時に {{domxref("BroadcastChannel.BroadCastChannel", "BroadcastChannel()")}} コンストラクタに渡されるため、読み取り専用です。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>str</em> = <em>channe<code>l</code></em><code>.name;</code>
</pre>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">// チャンネルに接続
var bc = new BroadcastChannel('test_channel');

// その他の操作（postMessage など）

// チャンネル名をコンソールに記録します
console.log(bc.name); // "test_channel"

// 終了したら、チャンネルから切断します
bc.close();</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "comms.html#dom-broadcastchannel-name", "BroadcastChannel.name")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.BroadcastChannel.name")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("BroadcastChannel")}}: これが属するインターフェース。</li>
</ul>

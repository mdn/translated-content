---
title: Client.type
slug: Web/API/Client/type
tags:
  - API
  - Client
  - Property
  - Reference
  - Service Workers
  - Type
translation_of: Web/API/Client/type
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("Client")}} インターフェイスの <strong><code>type</code></strong> 読み取り専用プロパティは、サービスワーカーが制御しているクライアントの種類を示します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>myClientType</em> = <em>client</em>.type;</pre>

<h3 id="Value" name="Value">値</h3>

<p>クライアントの種類を表す文字列。 値は次のいずれかです。</p>

<ul>
 <li><code>"window"</code></li>
 <li><code>"worker"</code></li>
 <li><code>"sharedworker"</code></li>
</ul>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="comment token">// サービスワーカークライアント（ドキュメントなど）</span>
<span class="keyword token">function</span> <span class="function token">sendMessage</span><span class="punctuation token">(</span>message<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">return</span> <span class="keyword token">new</span> <span class="class-name token">Promise</span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span>resolve<span class="punctuation token">,</span> reject<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="comment token">// これは ServiceWorker.postMessage バージョンであることに注意してください</span>
    navigator<span class="punctuation token">.</span>serviceWorker<span class="punctuation token">.</span>controller<span class="punctuation token">.</span><span class="function token">postMessage</span><span class="punctuation token">(</span>message<span class="punctuation token">)</span><span class="punctuation token">;</span>
    window<span class="punctuation token">.</span>serviceWorker<span class="punctuation token">.</span>onMessage <span class="operator token">=</span> <span class="keyword token">function</span><span class="punctuation token">(</span>e<span class="punctuation token">)</span> <span class="punctuation token">{</span>
      <span class="function token">resolve</span><span class="punctuation token">(</span>e<span class="punctuation token">.</span>data<span class="punctuation token">)</span><span class="punctuation token">;</span>
    <span class="punctuation token">}</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="comment token">// 制御するサービスワーカー</span>
self<span class="punctuation token">.</span><span class="function token">addEventListener</span><span class="punctuation token">(</span><span class="string token">"message"</span><span class="punctuation token">,</span> <span class="keyword token">function</span><span class="punctuation token">(</span>e<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="comment token">// e.source はクライアントオブジェクトです</span>
  e<span class="punctuation token">.</span>source<span class="punctuation token">.</span><span class="function token">postMessage</span><span class="punctuation token">(</span><span class="string token">"こんにちは！ あなたのメッセージは: "</span> <span class="operator token">+</span> e<span class="punctuation token">.</span>data<span class="punctuation token">);
  // type 値も投稿してクライアントに戻しましょう
</span>  e<span class="punctuation token">.</span>source<span class="punctuation token">.</span><span class="function token">postMessage</span><span class="punctuation token">(e.source.type);</span>
<span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#client-type', 'type')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.Client.type")}}</p>
</div>

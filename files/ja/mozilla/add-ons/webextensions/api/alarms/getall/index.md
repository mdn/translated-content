---
title: alarms.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/getAll
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - alarms
  - getAll
translation_of: Mozilla/Add-ons/WebExtensions/API/alarms/getAll
---
<div>{{AddonSidebar()}}</div>

<p>予約されたアラームすべてを取得します。取得されたアラームは {{WebExtAPIRef('alarms.Alarm')}} オブジェクトの配列としてコールバック関数に渡されます。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.alarms.getAll(
  function(array) {...}   // 関数
)
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd><code>function</code>. この関数には以下の引数が渡ります。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>alarms</code></dt>
  <dd>予約されたアラームすべてを含む <code>{{WebExtAPIRef('alarms.Alarm')}}</code> の配列です。予約されたアラームがない場合は空の配列となります。</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.alarms.getAll")}}</p>

<h2 id="例">例</h2>

<p>コールバックを用いた例：</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">gotAll</span><span class="punctuation token">(</span>alarms<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">for</span> <span class="punctuation token">(</span><span class="keyword token">var</span> alarm <span class="keyword token">of</span> alarms<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>alarm<span class="punctuation token">.</span>name<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>alarms<span class="punctuation token">.</span><span class="function token">getAll</span><span class="punctuation token">(</span>gotAll<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>Promise を用いた例：</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">gotAll</span><span class="punctuation token">(</span>alarms<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">for</span> <span class="punctuation token">(</span><span class="keyword token">var</span> alarm <span class="keyword token">of</span> alarms<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>alarm<span class="punctuation token">.</span>name<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>

<span class="keyword token">var</span> getAlarms <span class="operator token">=</span> browser<span class="punctuation token">.</span>alarms<span class="punctuation token">.</span><span class="function token">getAll</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
getAlarms<span class="punctuation token">.</span><span class="function token">then</span><span class="punctuation token">(</span>gotAll<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>{{WebExtExamples}}</p>

<div class="note">
<p><strong>謝辞</strong></p>

<p>この API はChromium の <a href="https://developer.chrome.com/extensions/alarms"><code>chrome.alarms</code></a> API に基づいています。</p>
</div>

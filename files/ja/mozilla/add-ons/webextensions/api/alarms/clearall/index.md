---
title: alarms.clearAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - alarms
  - clearAll
translation_of: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
---
<div>{{AddonSidebar()}}</div>

<p>予約されたアラームすべてを解除します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js">browser.alarms.clearAll(
  function(wasCleared) {...}   // 関数
)
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd><code>function</code>. この関数には以下の引数が渡ります。</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>wasCleared</code></dt>
  <dd><code>boolean</code>. アラームが解除された場合は <code>true</code> が、それ以外の場合は <code>false</code> が入ります。Chrome の場合は常に <code>true</code> が入ることに注意してください。</dd>
 </dl>
 </dd>
</dl>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.alarms.clearAll")}}</p>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromium の <a href="https://developer.chrome.com/extensions/alarms"><code>chrome.alarms</code></a> API に基づいています。</p>
</div>

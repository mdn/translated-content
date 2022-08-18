---
title: SyncEvent.SyncEvent()
slug: Web/API/SyncEvent/SyncEvent
tags:
  - API
  - Background Sync
  - Constructor
  - Experimental
  - Reference
  - ServiceWorker
  - SyncEvent
translation_of: Web/API/SyncEvent/SyncEvent
---
<p style="line-height: 19.0909080505371px;">{{APIRef("Service Workers API")}}{{Non-standard_header}}</p>

<p style="line-height: 19.0909080505371px;"><strong><code>SyncEvent()</code></strong> コンストラクタは、新規の {{domxref("SyncEvent")}} オブジェクトを作成します。</p>

<h2 id="構文" style="line-height: 19.0909080505371px;">構文</h2>

<pre class="syntaxbox notranslate">var mySyncEvent = new SyncEvent(type, init)</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><em>type</em></dt>
 <dd>イベントの型。.</dd>
 <dt><em>init</em> {{optional_inline}}</dt>
 <dd>イベントオブジェクトに適用するカスタム設定を含むオプションオブジェクト。オプションは次の通りです:
 <ul>
  <li><code>tag</code>: この <code>SyncEvent</code> の開発者が定義した一意の識別子。</li>
  <li><code>lastChance</code>: {{jsxref("Boolean")}} は、現在の試行後にユーザーエージェントが同期の試行をこれ以上行わないことを示しています。</li>
 </ul>
 </dd>
</dl>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.SyncEvent.SyncEvent")}}</p>
</div>

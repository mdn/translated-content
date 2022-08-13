---
title: SyncEvent.lastChance
slug: Web/API/SyncEvent/lastChance
tags:
  - API
  - Background Sync
  - Experimental
  - Property
  - Reference
  - ServiceWorker
  - SyncEvent
  - lastChance
translation_of: Web/API/SyncEvent/lastChance
---
<p>{{SeeCompatTable}}{{APIRef("")}}</p>

<p>{{domxref("SyncEvent")}} インターフェイスの <strong><code>SyncEvent.lastChance</code></strong> 読み取り専用プロパティは、現在の試行後にユーザーエージェントが同期を試行しない場合に <code>true</code> を返します。 これは、 {{domxref("SyncEvent.SyncEvent","SyncEvent()")}} コンストラクタの <code>lastChance</code> パラメータに渡される値です。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate">var <em>lastChance</em> = SyncEvent.lastChance</pre>

<h3 id="値">値</h3>

<p>{{jsxref("Boolean")}} は、現在の試行の後にユーザーエージェントがこれ以上同期を試行しないかどうかを示します。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>仕様</th>
  </tr>
  <tr>
   <td><a href="https://wicg.github.io/background-sync/spec/#sync-event">Web Background Synchronization</a></td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>



<p>{{Compat("api.SyncEvent.lastChance")}}</p>

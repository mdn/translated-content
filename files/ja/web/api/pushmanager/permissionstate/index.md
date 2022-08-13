---
title: PushManager.permissionState()
slug: Web/API/PushManager/permissionState
tags:
  - API
  - Experimental
  - Method
  - PushManager
  - Reference
  - Service Workers
  - permissionState
translation_of: Web/API/PushManager/permissionState
---
<p>{{SeeCompatTable}}{{ApiRef("Push API")}}</p>

<p>{{domxref("PushManager")}} インターフェースの  <strong><code>permissionState()</code></strong> メソッドは、プッシュマネージャーの許可状態を示す {{domxref("DOMString")}} で解決される  {{jsxref("Promise")}} を返します。許可状態は、<code>'prompt' か</code> <code>'denied'、</code><code>'granted' です。</code></p>

<div class="note">
<p><strong>ノート</strong>： Firefox 44 では、<a href="/ja/docs/Web/API/Notifications_API">Notifications</a> と <a href="/ja/docs/Web/API/Push_API">Push</a> の許可は統合されています。notifications が許可された場合、 push も使用できます。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">PushManager.permissionState(options).then(function(PushMessagingState) { ... });
</pre>

<h3 id="パラメーター">パラメーター</h3>

<dl>
 <dt><code>options {{optional_inline}}</code></dt>
 <dd>オプションの設定パラメーターを含むオブジェクト。次のプロパティが設定可能：
 <ul>
  <li><code>userVisibleOnly</code>: 返されたプッシュサブスクリプションの効果がユーザーに表示するメッセージにだけ使われるかを示す boolean 値。</li>
 </ul>
 </dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p><code>'prompt' か </code><code>'denied'、'granted' を持つ </code>{{domxref("DOMString")}} で解決される {{jsxref("Promise")}} 。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Push API','#widl-PushManager-permissionState-Promise-PushPermissionState--PushSubscriptionOptions-options','permissionState()')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.PushManager.permissionState")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Using the Push API</a></li>
</ul>

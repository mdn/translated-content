---
title: Permissions.query()
slug: Web/API/Permissions/query
tags:
  - API
  - Experimental
  - Method
  - Permissions
  - Reference
translation_of: Web/API/Permissions/query
---
<p>{{APIRef("Permissions API")}}{{SeeCompatTable}}</p>

<p><span class="seoSummary">{{domxref("Permissions")}} インターフェイスの <strong><code>Permissions.query()</code></strong> メソッドは、グローバルスコープに対するユーザーのパーミッションの状態を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js">navigator.permissions.query(PermissionDescriptor).then(function(permissionStatus) { ... })</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>PermissionDescriptor</code></dt>
 <dd>名前と値のペアのカンマ区切りリストで構成される、<code>query</code> 操作のオプションを設定するオブジェクト。 利用可能なオプションは次のとおりです。
 <ul>
  <li><code>name</code>: パーミッションを照会したい API の名前。 有効な値は <code>'accelerometer'</code>、<code>'accessibility-events'</code>、<code>'ambient-light-sensor'</code>、<code>'background-sync'</code>、<code>'camera'​</code>、<code>'clipboard-read'</code>、<code>'clipboard-write'</code>、<code>'geolocation'</code>、<code>'gyroscope'</code>、<code>'magnetometer'</code>、<code>'microphone'</code>、<code>'midi'</code>、<code>'notifications'</code>、<code>'payment-handler'</code>、<code>'persistent-storage'</code>、<code>'push</code>' です。</li>
  <li><code>userVisibleOnly</code>: （Push のみ。 Firefox はサポートしていません。 下記のブラウザーの互換性のセクションを参照してください）すべてのメッセージについて通知を表示するか、サイレントプッシュ通知を送信できるかを示します。 デフォルトは <code>false</code> です。</li>
  <li><code>sysex</code>: （Midi のみ）システムエクスクルーシブメッセージが必要か受信するかどうかを示します。 デフォルトは <code>false</code> です。</li>
 </ul>
 </dd>
</dl>

<div class="note">
<p><strong>注</strong>: Firefox 44 以降、<a href="/ja/docs/Web/API/Notifications_API">Notifications</a> と <a href="/ja/docs/Web/API/Push_API">Push</a> のパーミッションは統合されました。 （例えば、ユーザーによって、関連するパーミッションのダイアログにより）パーミッションが与えられた場合、<code>navigator.permissions.query()</code> は <code>notifications</code> と <code>push</code> の両方に対して <code>true</code> を返します。</p>
</div>

<div class="note">
<p><strong>注</strong>: <code>persistent-storage</code> パーミッションは、<a href="https://storage.spec.whatwg.org/">Storage API</a> のとおりに、オリジンがそのストレージとして永続的ボックス（すなわち永続的ストレージ（<a href="https://storage.spec.whatwg.org/#persistence">persistent storage</a>））を使用することを許可します。</p>
</div>

<h3 id="Returns" name="Returns">戻り値</h3>

<p>{{domxref("PermissionStatus")}} オブジェクトに解決される {{jsxref("Promise")}}。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>TypeError</code></td>
   <td><code>PermissionDescriptor</code> 情報の取得が何らかの理由で失敗したか、パーミッションが存在しないか現在サポートされていません（例えば、<code>midi</code>、または <code>userVisibleOnly</code> と一緒の <code>push</code> で）。</td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">navigator.permissions.query({name:'geolocation'}).then(function(result) {
 if (result.state == 'granted') {
   showLocalNewsWithGeolocation();
 } else if (result.state == 'prompt') {
   showButtonToEnableLocalNews();
 }
 // パーミッションが拒否された場合は何もしないでください。
});</pre>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Permissions API','#dom-permissions-query','query()')}}</td>
   <td>{{Spec2('Permissions API')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.Permissions.query")}}</p>
</div>

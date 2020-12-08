---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
tags:
  - API
  - Interface
  - Offline
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorkerRegistration
  - Workers
translation_of: Web/API/ServiceWorkerRegistration
---
<div>
<div>{{APIRef("Service Workers API")}}</div>
</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a> の <strong><code>ServiceWorkerRegistration</code></strong> インターフェイスは、サービスワーカー登録を表します。 あなたは同じオリジンを共有する1つ以上のページを制御するサービスワーカーを登録します。</span></p>

<p>サービスワーカー登録の存続期間は、対応するサービスワーカークライアントの存続期間内でそれらを表す <code>ServiceWorkerRegistration</code> オブジェクトの存続期間を超えています。 ブラウザーは、アクティブな <code>ServiceWorkerRegistration</code> オブジェクトの永続的なリストを維持します。</p>

<div class="note">
<p><strong>注</strong>: この機能は <a href="/ja/docs/Web/API/Web_Workers_API">Web Worker</a> で使用できます。</p>
</div>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>また、その親インターフェイスである {{domxref("EventTarget")}} からプロパティを実装します。</em></p>

<dl>
 <dt>{{domxref("ServiceWorkerRegistration.scope")}} {{readonlyinline}}</dt>
 <dd>サービスワーカー登録の一意の識別子を返します。 これは、{{domxref("ServiceWorker")}} を登録する文書と同じオリジンにある必要があります。</dd>
 <dt>{{domxref("ServiceWorkerRegistration.installing")}} <strong style="font-weight: bold;">{{readonlyinline}}</strong></dt>
 <dd>状態がインストール中（<code>installing</code>）のサービスワーカーを返します。 これは最初は <code>null</code> に設定されています。</dd>
 <dt>{{domxref("ServiceWorkerRegistration.waiting")}} <strong style="font-weight: bold;">{{readonlyinline}}</strong></dt>
 <dd>状態がインストール済み（<code>installed</code>）のサービスワーカーを返します。 これは最初は <code>null</code> に設定されています。</dd>
 <dt>{{domxref("ServiceWorkerRegistration.active")}} <strong style="font-weight: bold;">{{readonlyinline}}</strong></dt>
 <dd>状態がアクティブ化中（<code>activating</code>）またはアクティブ化済み（<code>activated</code>）のサービスワーカーを返します。 これは最初は <code>null</code> に設定されています。 クライアントの URL が登録のスコープ内にある場合、アクティブワーカーは {{domxref("ServiceWorkerClient")}} を制御します（{{domxref("ServiceWorkerContainer.register")}} を最初に呼び出したときに設定した <code>scope</code> オプション）。</dd>
 <dt>{{domxref("ServiceWorkerRegistration.navigationPreload")}} {{readonlyinline}}</dt>
 <dd>現在のサービスワーカー登録に関連する {{domxref("NavigationPreloadManager")}} のインスタンスを返します。</dd>
 <dt>{{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}</dt>
 <dd>購読申し込み、アクティブな購読の取得、プッシュの許可状況へのアクセスなど、プッシュの購読を管理するための {{domxref("PushManager")}} インターフェイスへの参照を返します。</dd>
 <dt>{{domxref("ServiceWorkerRegistration.sync")}} <strong style="font-weight: bold; line-height: 19.0909080505371px;">{{non-standard_inline}} </strong>{{readonlyinline}}</dt>
 <dd>バックグラウンド同期プロセスを管理する {{domxref("SyncManager")}} インターフェイスへの参照を返します。</dd>
</dl>

<h3 id="Unimplemented_properties" name="Unimplemented_properties">未実装プロパティ</h3>

<dl>
 <dt>{{domxref("serviceWorkerRegistration.periodicSync")}} {{non-standard_inline}} {{readonlyinline}}</dt>
 <dd>定期的なバックグラウンド同期プロセスを管理する {{domxref("PeriodicSyncManager")}} インターフェイスへの参照を返します。 これは、ある時点でサービスワーカーの説明でアイデアとして言及されましたが、まだどこにも実装されていません。</dd>
</dl>

<h3 id="Event_handlers" name="Event_handlers">イベントハンドラー</h3>

<dl>
 <dt>{{domxref("ServiceWorkerRegistration.onupdatefound")}} {{readonlyinline}}</dt>
 <dd>タイプが <code>updatefound</code> のイベントが発生するたびに呼び出される <a href="/ja/docs/Web/API/EventListener"><code>EventListener</code></a> のプロパティ。 {{domxref("ServiceWorkerRegistration.installing")}} プロパティが新しいサービスワーカーを取得するたびに発生します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>また、その親インターフェースである {{domxref("EventTarget")}} からメソッドを実装します。</em></p>

<dl>
 <dt>{{domxref("ServiceWorkerRegistration.getNotifications()")}}</dt>
 <dd>{{domxref("Notification")}} オブジェクトの配列に解決される {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("ServiceWorkerRegistration.showNotification()")}}</dt>
 <dd>要求したタイトルの通知を表示します。</dd>
 <dt>{{domxref("ServiceWorkerRegistration.update()")}}</dt>
 <dd>サービスワーカーの更新されたバージョンを、キャッシュを調べずに、サーバーでチェックします。</dd>
 <dt>{{domxref("ServiceWorkerRegistration.unregister()")}}</dt>
 <dd>サービスワーカー登録を解除し、{{jsxref("Promise")}} を返します。 サービスワーカーは、登録が解除される前に進行中の操作を完了します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、コードはまずブラウザーがサービスワーカーをサポートしているかどうかをチェックし、サポートしている場合はそれを登録します。 次に、<code>updatefound</code> リスナーを追加します。 このリスナーでは、サービスワーカー登録を使用して、サービスワーカーの状態のさらなる変更をリッスンします。 サービスワーカーが最後に登録されてから変更されていない場合、<code>updatefound</code> イベントは発生しません。</p>

<pre class="brush: js">if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(registration) {
    registration.addEventListener('updatefound', function() {
      // updatefound が発生した場合は、新しいサービスワーカーを
      // インストールしていることを意味します。
      var installingWorker = registration.installing;
      console.log('新しいサービスワーカーをインストールしています:',
        installingWorker);

      // インストール中のサービスワーカーの状態の変更を、
      // installingWorker.onstatechange を介してリッスンできます
    });
  })
  .catch(function(error) {
    console.log('サービスワーカーの登録に失敗しました:', error);
  });
} else {
  console.log('サービスワーカーをサポートしていません。');
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#serviceworkerregistration', 'ServiceWorkerRegistration')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
  <tr>
   <td>{{SpecName('Push API', '#dom-serviceworkerregistration-pushmanager', 'PushManager')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>{{domxref("PushManager","pushManager")}} プロパティを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>{{domxref("ServiceWorkerRegistration.showNotification()","showNotification()")}} メソッドと {{domxref("ServiceWorkerRegistration.getNotifications()","getNotifications()")}} メソッドを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('Background Sync')}}</td>
   <td>{{Spec2('Background Sync')}}</td>
   <td>{{domxref("ServiceWorkerRegistration.sync","sync")}} プロパティを追加。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ServiceWorkerRegistration")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>

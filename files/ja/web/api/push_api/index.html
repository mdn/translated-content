---
title: Push API
slug: Web/API/Push_API
tags:
  - API
  - Experimental
  - Landing
  - Notifications
  - Push
  - Reference
  - サービスワーカー
  - プッシュ通知
translation_of: Web/API/Push_API
---
<div>{{ApiRef("Push API")}}</div>

<p class="summary"><strong>Push API</strong> は、ウェブアプリケーションがサーバーからメッセージ (プッシュ通知) を受信できるようにします。ウェブアプリケーションがフォアグランド状態かどうか、読み込まれているかどうかに関わらず利用できます。開発者は、オプトインしたユーザーへ非同期の通知と更新を届けることができ、タイムリーな新着コンテンツによってユーザーの関心を得られるでしょう。</p>

<h2 id="Push_concepts_and_usage">プッシュ通知の概念と使い方</h2>

<div class="warning">
<p>PushManager へのサブスクリプションを実装する場合、アプリで CSRF/XSRF 問題を起こさないように保護することが非常に重要です。詳しくは以下の記事を参照してください。</p>

<ul>
 <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html">Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet</a></li>
 <li><a href="https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/">Preventing CSRF and XSRF Attacks</a></li>
</ul>
</div>

<p>アプリがプッシュ通知メッセージを受信するために、アプリで<a href="/ja/docs/Web/API/Service_Worker_API">サービスワーカー</a>が動作している必要があります。サービスワーカーが動作している時に、 {{domxref("PushManager.subscribe()")}} を利用してプッシュ通知に加入することができます。</p>

<p>返値の {{domxref("PushSubscription")}} には、プッシュ通知メッセージの配信に必要な情報であるエンドポイントとデータ送信用の暗号キーがすべて含まれています。</p>

<p>プッシュ通知メッセージを受信すると、そのメッセージを扱うためのサービスワーカーが起動します。これは、 {{domxref("ServiceWorkerGlobalScope.onpush")}} イベントハンドラーへ配信されます。これにより、例えば ({{domxref("ServiceWorkerRegistration.showNotification()")}} を使用して) 受信した通知を表示するなど、アプリケーションがプッシュ通知の受信に応じた動作ができます。</p>

<p>各サブスクリプションは、サービスワーカーに対して固有です。サブスクリプションのエンドポイントは、固有の <a href="https://www.w3.org/TR/capability-urls/">capability URL</a> です。サブスクリプションのエンドポイント URL はアプリケーションにメッセージを送るために不可欠な情報です。エンドポイント URL は秘密にしておく必要があります。さもないと、他のアプリケーションがあなたのアプリケーションにプッシュ通知メッセージを送ることができてしまいます。</p>

<p>プッシュ通知メッセージの配信のためにサービスワーカーを動作させると、特にバッテリーなどのリソースを消費します。これを扱う方式はブラウザーごとに異なっており、現在標準となる仕組みはありません。 Firefox も Chrome も通知を生成するプッシュ通知メッセージの数に制限を設けていません。 Firefox は通知を表示しないアプリケーションに送信されるプッシュ通知メッセージの数に制限 (クォータ) を設けていますが、 Chrome には制限がありません。この制限数は、ウェブサイトを訪れるたびに更新されます。</p>

<h2 id="Interfaces">インターフェイス</h2>

<dl>
 <dt>{{domxref("PushEvent")}}</dt>
 <dd>{{domxref("ServiceWorker")}} の<a href="/ja/docs/Web/API/ServiceWorkerGlobalScope">グローバルスコープ</a> に送られるプッシュアクションを表します。これは、アプリケーションから {{domxref("PushSubscription")}} へ送られる情報を含んでいます。</dd>
 <dt>{{domxref("PushManager")}}</dt>
 <dd>プッシュ通知のリクエスト URL といった、サードパーティのサーバーからプッシュ通知を受け取るための手段を提供します。</dd>
 <dt>{{domxref("PushMessageData")}}</dt>
 <dd>サーバーから送られたプッシュ情報にアクセスする手段を提供し、受信したデータを操作するメソッドを含みます。</dd>
 <dt>{{domxref("PushSubscription")}}</dt>
 <dd>サブスクリプションのエンドポイント URL を提供し、プッシュサービスから購読を解除できるようにします。</dd>
 <dt>{{domxref("PushSubscriptionOptions")}}</dt>
 <dd>プッシュサブスクリプションに関連付けられたオプションを表します。</dd>
</dl>

<h2 id="Service_worker_additions">サービスワーカーへの追加機能</h2>

<p>以下の <a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a> への追加機能は、 Push API 仕様に含まれています。これらは、プッシュ通知メッセージを使用するためのエントリーポイントを提供するため、および、プッシュとサブスクリプション変更イベントの監視と応答のための追加です。</p>

<dl>
 <dt>{{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}</dt>
 <dd>購読を含むサブスクリプションの管理、アクティブなサブスクリプションの取得、プッシュ権限状態の取得を行う {{domxref("PushManager")}} インターフェイスへの参照を返します。これは、プッシュ通知メッセージを使用するためのエントリーポイントです。</dd>
 <dt>{{domxref("ServiceWorkerGlobalScope.onpush")}}</dt>
 <dd>{{Event("push")}} イベントが発生する度に発動します。これは、サーバーがプッシュしたメッセージを受信する度に起こります。</dd>
 <dt>{{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange")}}</dt>
 <dd>{{Event("pushsubscriptionchange")}} イベントが発生する度に発動するイベントハンドラです。例えば、プッシュサブスクリプションが無効になったり、無効になりつつある時 (即ち、プッシュサーバーが有効期限を設定している場合) です。</dd>
</dl>

<h2 id="Examples">例</h2>

<p>Mozilla の <a href="https://serviceworke.rs/">ServiceWorker Cookbook</a> は便利なプッシュ通知の例をたくさん揃えています。</p>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Push API")}}</td>
   <td>{{Spec2("Push API")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="PushEvent"><code>PushEvent</code></h3>

<p>{{Compat("api.PushEvent")}}</p>

<h3 id="PushMessageData"><code>PushMessageData</code></h3>

<p>{{Compat("api.PushMessageData")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/">Sending VAPID identified WebPush Notifications via Mozilla’s Push Service</a></li>
 <li><a href="https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/">Web Push Notifications: Timely, Relevant, and Precise</a>, Joseph Medley</li>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a></li>
</ul>

<div>{{DefaultAPISidebar("Push API")}}</div>

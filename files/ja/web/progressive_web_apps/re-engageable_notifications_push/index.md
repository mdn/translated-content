---
title: 通知とプッシュを利用して PWA を再エンゲージ可能にするには
slug: Web/Progressive_web_apps/Re-engageable_Notifications_Push
tags:
  - Notifications
  - PWAs
  - Progressive web apps
  - Push
  - js13kGames
  - progressive
translation_of: Web/Progressive_web_apps/Re-engageable_Notifications_Push
---
<div>{{PreviousMenuNext("Web/Progressive_web_apps/Installable_PWAs", "Web/Progressive_web_apps/Loading", "Web/Progressive_web_apps")}}</div>

<p class="summary"><span class="seoSummary">アプリのコンテンツをキャッシュできるようにしてオフラインで動作させるのは、すばらしい機能です。 ユーザーがホーム画面にウェブアプリをインストールできるようにすることは、もっと良いことです。 しかし、ユーザーの操作のみに頼らず、プッシュメッセージと通知を使用すれば、さらに自動的に再エンゲージを行い新しいコンテンツが利用できるようになるたびに配信することができるようになります。</span></p>

<h2 id="Two_APIs_one_goal" name="Two_APIs_one_goal">二つの API と一つの目標</h2>

<p><a href="/ja/docs/Web/API/Push_API">Push API</a> と <a href="/ja/docs/Web/API/Notifications_API">Notifications API</a> は2つの別々の API ですが、アプリで魅力的な機能を提供したい場合には、それらは一緒にうまく機能します。 プッシュは、クライアント側の介入なしにサーバーからアプリに新しいコンテンツを配信するために使用され、その操作はアプリのサービスワーカーによって処理されます。 サービスワーカーは、通知を使用して新しい情報をユーザーに表示するか、少なくとも何かが更新されたときにアラートすることができます。</p>

<p>それらはサービスワーカーと同じようにブラウザーウィンドウの外側で機能するため、アプリのページにフォーカスが合っていないときや閉じているときにも更新をプッシュして通知を表示できます。</p>

<h2 id="Notifications" name="Notifications">通知</h2>

<p>通知（notifications）から始めましょう — プッシュがなくても機能しますが、それらを組み合わせると非常に便利です。 はじめはそれらを個別に見てみましょう。</p>

<h3 id="Request_permission" name="Request_permission">パーミッションの要求</h3>

<p>通知を表示するには、まずパーミッション（permission）を要求する必要があります。 ただちに通知を表示する代わりに、次のようにユーザーがボタンをクリックして要求したときにポップアップを表示することをお勧めします。</p>

<pre class="brush: js notranslate">var button = document.getElementById("notifications");
button.addEventListener('click', function(e) {
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            randomNotification();
        }
    });
});</pre>

<p>これは、次のようにオペレーティングシステム独自の通知サービスを使ったポップアップを表示します。</p>

<p><img alt="Notification of js13kPWA." src="https://mdn.mozillademos.org/files/15930/js13kpwa-notification.png" style="display: block; height: 640px; margin: 0px auto; width: 360px;"></p>

<p>ユーザーが通知を受け取ることを確認すると、アプリはそれらを表示できます。 ユーザー操作の結果は、デフォルト（<code>default</code>）、許可（<code>granted</code>）、または拒否（<code>denied</code>）になります。 ユーザーが後で選択する場合はデフォルトの選択肢が選択され、ユーザーがそれぞれ「はい」または「いいえ」をクリックすると他の2つが設定されます。</p>

<p>承認されると、パーミッションは通知とプッシュの両方に機能します。</p>

<h3 id="Create_a_notification" name="Create_a_notification">通知の作成</h3>

<p>サンプルアプリでは、利用可能なデータから通知を作成します — ゲームはランダムに選択され、選択されたものがコンテンツと共に通知を送ります — それは次のようにゲームの名前をタイトルとして設定し、本文で作者に言及し、そしてアイコンとして画像を表示します。</p>

<pre class="brush: js notranslate">function randomNotification() {
    var randomItem = Math.floor(Math.random()*games.length);
    var notifTitle = games[randomItem].name;
    var notifBody = 'Created by '+games[randomItem].author+'.';
    var notifImg = 'data/img/'+games[randomItem].slug+'.jpg';
    var options = {
        body: notifBody,
        icon: notifImg
    }
    var notif = new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
}</pre>

<p>迷惑すぎてユーザーによって無効にされるまで、新しいランダム通知が30秒ごとに作成されます — 実際のアプリの場合、通知はそれほど頻繁ではなく、より便利であるべきです。 Notifications API の利点は、オペレーティングシステムの通知機能を使用することです。 つまり、ウェブアプリを見ていなくてもユーザーに通知を表示でき、その通知はネイティブアプリで表示されるものと似ています。</p>

<h2 id="Push" name="Push">プッシュ</h2>

<p>プッシュは通知よりも複雑です — データをアプリに送り返すサーバーを購読（subscribe）する必要があります。 アプリのサービスワーカーはプッシュサーバーからデータを受け取ります。 このデータは通知システム、または必要に応じて別のメカニズムを使用して表示できます。</p>

<p>技術はまだ非常に初期段階にあります — いくつかの実用的な例は Google Cloud Messaging プラットフォームを使用しますが、<a href="https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/">VAPID</a>（Voluntary Application Server Identification、自発的アプリケーションサーバー識別）をサポートするように書き直されています。 <a href="https://serviceworke.rs/push-payload.html">サービスワーカークックブックの例</a>（英語）を調べたり、<a href="https://firebase.google.com/">Firebase</a> を使用してプッシュメッセージングサーバーをセットアップしたり、（例えば Node.js を使用して）独自のサーバーを構築したりすることができます。</p>

<p>前述のように、プッシュメッセージを受信できるようにするには、サービスワーカーが必要です。 その基本については、<a href="/ja/docs/Web/Progressive_web_apps/Offline_Service_workers">サービスワーカーで PWA をオフラインで動作させる</a>の記事で既に説明しています。 サービスワーカーの内部には、プッシュサービス購読機構（push service subscription mechanism）が作成されています。</p>

<pre class="brush: js notranslate">registration.pushManager.getSubscription() .then( /* ... */ );</pre>

<p>ユーザーが購読すると、サーバーからプッシュ通知を受け取ることができます。</p>

<p>サーバー側からは、セキュリティ上の理由からプロセス全体を公開鍵と秘密鍵で暗号化する必要があります — アプリを使用してセキュリティ保護されていないプッシュメッセージをだれでも送信できるようにするのは恐ろしい考えです。 サーバーのセキュリティ保護の詳細については、<a href="https://jrconlin.github.io/WebPushDataTestPage/">ウェブプッシュデータ暗号化テストページ</a>（英語）を参照してください。 サーバーは、ユーザーが購読したときに受信したすべての情報を保存するので、メッセージは後で必要なときに送信できます。</p>

<p>プッシュメッセージを受信するために、次のようにサービスワーカーファイルの {{domxref("ServiceWorkerGlobalScope/push_event", "push")}} イベントを監視できます。</p>

<pre class="brush: js notranslate">self.addEventListener('push', function(e) { /* ... */ });</pre>

<p>データを取得してすぐにユーザーへの通知として表示できます。 これは、例えば、何かをユーザーに思い出させるために使用したり、アプリで利用可能な新しいコンテンツについてユーザーに知らせたりするために使用できます。</p>

<h3 id="Push_example" name="Push_example">プッシュの例</h3>

<p>プッシュにはサーバー部分が機能する必要があるため、静的ファイルのみのホスティングを提供する GitHub Pages でホスティングされる js13kPWA の例に含めることはできません。 それはすべて<a href="https://serviceworke.rs/">サービスワーカークックブック</a>（英語）で説明されています —  <a href="https://serviceworke.rs/push-payload.html">Push Payload Demo</a> を参照してください。</p>

<p>このデモは3つのファイルで構成されています。</p>

<ul>
 <li><a href="https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/index.js">index.js</a> — アプリのソースコードが含まれています。</li>
 <li><a href="https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/server.js">server.js</a> — サーバー部分が含まれています（Node.js で書かれています）。</li>
 <li><a href="https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/service-worker.js">service-worker.js</a> — サービスワーカー固有のコードが含まれています。</li>
</ul>

<p>これらすべてを探りましょう。</p>

<h4 id="index.js" name="index.js">index.js</h4>

<p><code>index.js</code> ファイルは、次のようにサービスワーカーを登録することから始まります。</p>

<pre class="brush: js notranslate">navigator.serviceWorker.register('service-worker.js')
.then(function(registration) {
  return registration.pushManager.getSubscription()
  .then(async function(subscription) {
      // registration part
  });
})
.then(function(subscription) {
    // subscription part
});</pre>

<p><a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA デモ</a>で見たサービスワーカーよりも少し複雑です。 この特定のケースでは、登録後、登録オブジェクト（registration object）を使用して購読し、次に結果として得られた購読オブジェクト（subscription object）を使用してプロセス全体を完了します。</p>

<p>登録部分（registration part）では、コードは次のようになります。</p>

<pre class="brush: js notranslate">if(subscription) {
    return subscription;
}</pre>

<p>ユーザーが既に購読している場合は、購読オブジェクトを返して購読部分（subscription part）に移ります。 そうでない場合は、次のように新しい購読を初期化します。</p>

<pre class="brush: js notranslate">const response = await fetch('./vapidPublicKey');
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);</pre>

<p>アプリはサーバーの公開鍵を取得してレスポンスをテキストに変換します。 それから Uint8Array に変換する必要があります（Chrome をサポートするため）。 VAPID キーの詳細については、<a href="https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/">VAPID で識別した WebPush 通知を Mozilla のプッシュサービス経由で送信する</a>（英語）のブログ投稿を読むことができます。</p>

<p>アプリは {{domxref("PushManager")}} を使用して新しいユーザーの購読をすることができます。 {{domxref("PushManager.subscribe()")}} メソッドに渡される2つのオプションがあります — 1つ目は <code>userVisibleOnly：true</code> で、これはユーザーに送信されたすべての通知が表示されることを意味します。 2つ目は <code>applicationServerKey</code> で、これには、取得と変換に成功した VAPID キーが含まれます。</p>

<pre class="brush: js notranslate">return registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: convertedVapidKey
});</pre>

<p>それでは購読部分（subscription part）に移りましょう — アプリは最初に Fetch を使って購読の詳細を JSON としてサーバーに送ります。</p>

<pre class="brush: js notranslate">fetch('./register', {
    method: 'post',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        subscription: subscription
    }),
});</pre>

<p>次に、[Request sending a notification!（通知の送信依頼）] ボタンの {{domxref("GlobalEventHandlers.onclick","onclick")}} 関数を定義します。</p>

<pre class="brush: js notranslate">document.getElementById('doIt').onclick = function() {
    const payload = document.getElementById('notification-payload').value;
    const delay = document.getElementById('notification-delay').value;
    const ttl = document.getElementById('notification-ttl').value;

    fetch('./sendNotification', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            subscription: subscription,
            payload: payload,
            delay: delay,
            ttl: ttl,
        }),
    });
};</pre>

<p>このボタンがクリックされると、<code>fetch</code> はサーバーに与えられたパラメータで通知を送るように要求します — <code>payload</code> は通知に表示されるテキストで、<code>delay</code> は通知が表示されるまでの遅延を秒単位で定義し、<code>ttl</code> は指定された期間サーバー上で通知を利用できるようにする存続時間（time-to-live）の設定で、これも秒単位で定義します。</p>

<p>それでは、次の JavaScript ファイルに進みましょう。</p>

<h4 id="server.js" name="server.js">server.js</h4>

<p>サーバー部分は Node.js で書かれており、適切な場所にホストする必要があります。 これは、まったく別の記事の主題です。 ここでは大まかな概要のみを説明します。</p>

<p><a href="https://www.npmjs.com/package/web-push">web-push モジュール</a>（英語）は VAPID キーを設定するために使用され、それらがまだ利用できない場合は必要に応じて生成します。</p>

<pre class="brush: js notranslate">const webPush = require('web-push');

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log("You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY "+
    "environment variables. You can use the following ones:");
  console.log(webPush.generateVAPIDKeys());
  return;
}

webPush.setVapidDetails(
  'https://serviceworke.rs/',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);
</pre>

<p>次に、モジュールはアプリが処理する必要があるすべてのルートを定義してエクスポートします — VAPID 公開鍵の取得、登録、そして通知の送信です。 使用されている <code>index.js</code> ファイルの変数（<code>payload</code>、<code>delay</code>、および <code>ttl</code>）を見ることができます。</p>

<pre class="brush: js notranslate">module.exports = function(app, route) {
  app.get(route + 'vapidPublicKey', function(req, res) {
    res.send(process.env.VAPID_PUBLIC_KEY);
  });

  app.post(route + 'register', function(req, res) {

    res.sendStatus(201);
  });

  app.post(route + 'sendNotification', function(req, res) {
    const subscription = req.body.subscription;
    const payload = req.body.payload;
    const options = {
      TTL: req.body.ttl
    };

    setTimeout(function() {
      webPush.sendNotification(subscription, payload, options)
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(error) {
        console.log(error);
        res.sendStatus(500);
      });
    }, req.body.delay * 1000);
  });
};</pre>

<h4 id="service-worker.js" name="service-worker.js">service-worker.js</h4>

<p>最後に取り上げるファイルは、サービスワーカーです。</p>

<pre class="brush: js notranslate">self.addEventListener('push', function(event) {
    const payload = event.data ? event.data.text() : 'no payload';
    event.waitUntil(
        self.registration.showNotification('ServiceWorker Cookbook', {
            body: payload,
        })
    );
});</pre>

<p>{{domxref("ServiceWorkerGlobalScope/push_event", "push")}} イベントのリスナーを追加し、データから取得したテキストからなる <code>payload</code> 変数を作成し（またはデータが空の場合に使用する文字列を作成し）、通知がユーザーに表示されるまで待ちます。</p>

<p>それらがどのように処理されるかを知りたい場合は、<a href="https://serviceworke.rs/">サービスワーカークックブック</a>（英語）の残りの例を調べてください — <a href="https://github.com/mozilla/serviceworker-cookbook/">完全なソースコードは GitHub で入手できます</a>。 一般的な使い方だけでなく、ウェブプッシュ、キャッシュ戦略、パフォーマンス、オフラインでの作業など、多数の実用的な例があります。</p>

<p>{{PreviousMenuNext("Web/Progressive_web_apps/Installable_PWAs", "Web/Progressive_web_apps/Loading", "Web/Progressive_web_apps")}}</p>

<div>{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}</div>

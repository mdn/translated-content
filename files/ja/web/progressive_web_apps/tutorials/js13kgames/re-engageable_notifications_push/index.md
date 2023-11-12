---
title: 通知とプッシュを利用して PWA を再エンゲージ可能にするには
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
---

{{PreviousMenuNext("Web/Progressive_web_apps/Installable_PWAs", "Web/Progressive_web_apps/Loading", "Web/Progressive_web_apps")}}

アプリのコンテンツをキャッシュできるようにしてオフラインで動作させるのは、すばらしい機能です。 ユーザーがホーム画面にウェブアプリをインストールできるようにすることは、もっと良いことです。 しかし、ユーザーの操作のみに頼らず、プッシュメッセージと通知を使用すれば、さらに自動的に再エンゲージを行い新しいコンテンツが利用できるようになるたびに配信することができるようになります。

## 二つの API と一つの目標

[Push API](/ja/docs/Web/API/Push_API) と [Notifications API](/ja/docs/Web/API/Notifications_API) は 2 つの別々の API ですが、アプリで魅力的な機能を提供したい場合には、それらは一緒にうまく機能します。 プッシュは、クライアント側の介入なしにサーバーからアプリに新しいコンテンツを配信するために使用され、その操作はアプリのサービスワーカーによって処理されます。 サービスワーカーは、通知を使用して新しい情報をユーザーに表示するか、少なくとも何かが更新されたときにアラートすることができます。

それらはサービスワーカーと同じようにブラウザーウィンドウの外側で機能するため、アプリのページにフォーカスが合っていないときや閉じているときにも更新をプッシュして通知を表示できます。

## 通知

通知（notifications）から始めましょう — プッシュがなくても機能しますが、それらを組み合わせると非常に便利です。 はじめはそれらを個別に見てみましょう。

### パーミッションの要求

通知を表示するには、まずパーミッション（permission）を要求する必要があります。 ただちに通知を表示する代わりに、次のようにユーザーがボタンをクリックして要求したときにポップアップを表示することをお勧めします。

```js
var button = document.getElementById("notifications");
button.addEventListener("click", function (e) {
  Notification.requestPermission().then(function (result) {
    if (result === "granted") {
      randomNotification();
    }
  });
});
```

これは、次のようにオペレーティングシステム独自の通知サービスを使ったポップアップを表示します。

![Notification of js13kPWA.](js13kpwa-notification.png)

ユーザーが通知を受け取ることを確認すると、アプリはそれらを表示できます。 ユーザー操作の結果は、デフォルト（`default`）、許可（`granted`）、または拒否（`denied`）になります。 ユーザーが後で選択する場合はデフォルトの選択肢が選択され、ユーザーがそれぞれ「はい」または「いいえ」をクリックすると他の 2 つが設定されます。

承認されると、パーミッションは通知とプッシュの両方に機能します。

### 通知の作成

サンプルアプリでは、利用可能なデータから通知を作成します — ゲームはランダムに選択され、選択されたものがコンテンツと共に通知を送ります — それは次のようにゲームの名前をタイトルとして設定し、本文で作者に言及し、そしてアイコンとして画像を表示します。

```js
function randomNotification() {
  var randomItem = Math.floor(Math.random() * games.length);
  var notifTitle = games[randomItem].name;
  var notifBody = "Created by " + games[randomItem].author + ".";
  var notifImg = "data/img/" + games[randomItem].slug + ".jpg";
  var options = {
    body: notifBody,
    icon: notifImg,
  };
  var notif = new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

迷惑すぎてユーザーによって無効にされるまで、新しいランダム通知が 30 秒ごとに作成されます — 実際のアプリの場合、通知はそれほど頻繁ではなく、より便利であるべきです。 Notifications API の利点は、オペレーティングシステムの通知機能を使用することです。 つまり、ウェブアプリを見ていなくてもユーザーに通知を表示でき、その通知はネイティブアプリで表示されるものと似ています。

## プッシュ

プッシュは通知よりも複雑です — データをアプリに送り返すサーバーを購読（subscribe）する必要があります。 アプリのサービスワーカーはプッシュサーバーからデータを受け取ります。 このデータは通知システム、または必要に応じて別のメカニズムを使用して表示できます。

技術はまだ非常に初期段階にあります — いくつかの実用的な例は Google Cloud Messaging プラットフォームを使用しますが、[VAPID](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)（Voluntary Application Server Identification、自発的アプリケーションサーバー識別）をサポートするように書き直されています。 [サービスワーカークックブックの例](https://github.com/mdn/serviceworker-cookbook/push-payload.html)（英語）を調べたり、[Firebase](https://firebase.google.com/) を使用してプッシュメッセージングサーバーをセットアップしたり、（例えば Node.js を使用して）独自のサーバーを構築したりすることができます。

前述のように、プッシュメッセージを受信できるようにするには、サービスワーカーが必要です。 その基本については、[サービスワーカーで PWA をオフラインで動作させる](/ja/docs/Web/Progressive_web_apps/Offline_Service_workers)の記事で既に説明しています。 サービスワーカーの内部には、プッシュサービス購読機構（push service subscription mechanism）が作成されています。

```js
registration.pushManager.getSubscription().then(/* ... */);
```

ユーザーが購読すると、サーバーからプッシュ通知を受け取ることができます。

サーバー側からは、セキュリティ上の理由からプロセス全体を公開鍵と秘密鍵で暗号化する必要があります — アプリを使用してセキュリティ保護されていないプッシュメッセージをだれでも送信できるようにするのは恐ろしい考えです。 サーバーのセキュリティ保護の詳細については、[ウェブプッシュデータ暗号化テストページ](https://jrconlin.github.io/WebPushDataTestPage/)（英語）を参照してください。 サーバーは、ユーザーが購読したときに受信したすべての情報を保存するので、メッセージは後で必要なときに送信できます。

プッシュメッセージを受信するために、次のようにサービスワーカーファイルの {{domxref("ServiceWorkerGlobalScope/push_event", "push")}} イベントを監視できます。

```js
self.addEventListener("push", function (e) {
  /* ... */
});
```

データを取得してすぐにユーザーへの通知として表示できます。 これは、例えば、何かをユーザーに思い出させるために使用したり、アプリで利用可能な新しいコンテンツについてユーザーに知らせたりするために使用できます。

### プッシュの例

プッシュにはサーバー部分が機能する必要があるため、静的ファイルのみのホスティングを提供する GitHub Pages でホスティングされる js13kPWA の例に含めることはできません。 それはすべて[サービスワーカークックブック](https://github.com/mdn/serviceworker-cookbook/)（英語）で説明されています — [Push Payload Demo](https://github.com/mdn/serviceworker-cookbook/push-payload.html) を参照してください。

このデモは 3 つのファイルで構成されています。

- [index.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/index.js) — アプリのソースコードが含まれています。
- [server.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/server.js) — サーバー部分が含まれています（Node.js で書かれています）。
- [service-worker.js](https://github.com/mdn/serviceworker-cookbook/blob/master/push-payload/service-worker.js) — サービスワーカー固有のコードが含まれています。

これらすべてを探りましょう。

#### index.js

`index.js` ファイルは、次のようにサービスワーカーを登録することから始まります。

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then(function (registration) {
    return registration.pushManager
      .getSubscription()
      .then(async function (subscription) {
        // registration part
      });
  })
  .then(function (subscription) {
    // subscription part
  });
```

[js13kPWA デモ](https://mdn.github.io/pwa-examples/js13kpwa/)で見たサービスワーカーよりも少し複雑です。 この特定のケースでは、登録後、登録オブジェクト（registration object）を使用して購読し、次に結果として得られた購読オブジェクト（subscription object）を使用してプロセス全体を完了します。

登録部分（registration part）では、コードは次のようになります。

```js
if (subscription) {
  return subscription;
}
```

ユーザーが既に購読している場合は、購読オブジェクトを返して購読部分（subscription part）に移ります。 そうでない場合は、次のように新しい購読を初期化します。

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

アプリはサーバーの公開鍵を取得してレスポンスをテキストに変換します。 それから Uint8Array に変換する必要があります（Chrome をサポートするため）。 VAPID キーの詳細については、[VAPID で識別した WebPush 通知を Mozilla のプッシュサービス経由で送信する](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)（英語）のブログ投稿を読むことができます。

アプリは {{domxref("PushManager")}} を使用して新しいユーザーの購読をすることができます。 {{domxref("PushManager.subscribe()")}} メソッドに渡される 2 つのオプションがあります — 1 つ目は `userVisibleOnly：true` で、これはユーザーに送信されたすべての通知が表示されることを意味します。 2 つ目は `applicationServerKey` で、これには、取得と変換に成功した VAPID キーが含まれます。

```js
return registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

それでは購読部分（subscription part）に移りましょう — アプリは最初に Fetch を使って購読の詳細を JSON としてサーバーに送ります。

```js
fetch("./register", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    subscription: subscription,
  }),
});
```

次に、\[Request sending a notification!（通知の送信依頼）] ボタンの {{domxref("GlobalEventHandlers.onclick","onclick")}} 関数を定義します。

```js
document.getElementById("doIt").onclick = function () {
  const payload = document.getElementById("notification-payload").value;
  const delay = document.getElementById("notification-delay").value;
  const ttl = document.getElementById("notification-ttl").value;

  fetch("./sendNotification", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      subscription: subscription,
      payload: payload,
      delay: delay,
      ttl: ttl,
    }),
  });
};
```

このボタンがクリックされると、`fetch` はサーバーに与えられたパラメータで通知を送るように要求します — `payload` は通知に表示されるテキストで、`delay` は通知が表示されるまでの遅延を秒単位で定義し、`ttl` は指定された期間サーバー上で通知を利用できるようにする存続時間（time-to-live）の設定で、これも秒単位で定義します。

それでは、次の JavaScript ファイルに進みましょう。

#### server.js

サーバー部分は Node.js で書かれており、適切な場所にホストする必要があります。 これは、まったく別の記事の主題です。 ここでは大まかな概要のみを説明します。

[web-push モジュール](https://www.npmjs.com/package/web-push)（英語）は VAPID キーを設定するために使用され、それらがまだ利用できない場合は必要に応じて生成します。

```js
const webPush = require("web-push");

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log(
    "You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
      "environment variables. You can use the following ones:",
  );
  console.log(webPush.generateVAPIDKeys());
  return;
}

webPush.setVapidDetails(
  "https://github.com/mdn/serviceworker-cookbook/",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);
```

次に、モジュールはアプリが処理する必要があるすべてのルートを定義してエクスポートします — VAPID 公開鍵の取得、登録、そして通知の送信です。 使用されている `index.js` ファイルの変数（`payload`、`delay`、および `ttl`）を見ることができます。

```js
module.exports = function (app, route) {
  app.get(route + "vapidPublicKey", function (req, res) {
    res.send(process.env.VAPID_PUBLIC_KEY);
  });

  app.post(route + "register", function (req, res) {
    res.sendStatus(201);
  });

  app.post(route + "sendNotification", function (req, res) {
    const subscription = req.body.subscription;
    const payload = req.body.payload;
    const options = {
      TTL: req.body.ttl,
    };

    setTimeout(function () {
      webPush
        .sendNotification(subscription, payload, options)
        .then(function () {
          res.sendStatus(201);
        })
        .catch(function (error) {
          console.log(error);
          res.sendStatus(500);
        });
    }, req.body.delay * 1000);
  });
};
```

#### service-worker.js

最後に取り上げるファイルは、サービスワーカーです。

```js
self.addEventListener("push", function (event) {
  const payload = event.data ? event.data.text() : "no payload";
  event.waitUntil(
    self.registration.showNotification("ServiceWorker Cookbook", {
      body: payload,
    }),
  );
});
```

{{domxref("ServiceWorkerGlobalScope/push_event", "push")}} イベントのリスナーを追加し、データから取得したテキストからなる `payload` 変数を作成し（またはデータが空の場合に使用する文字列を作成し）、通知がユーザーに表示されるまで待ちます。

それらがどのように処理されるかを知りたい場合は、[サービスワーカークックブック](https://github.com/mdn/serviceworker-cookbook/)（英語）の残りの例を調べてください — [完全なソースコードは GitHub で入手できます](https://github.com/mdn/serviceworker-cookbook/)。 一般的な使い方だけでなく、ウェブプッシュ、キャッシュ戦略、パフォーマンス、オフラインでの作業など、多数の実用的な例があります。

{{PreviousMenuNext("Web/Progressive_web_apps/Installable_PWAs", "Web/Progressive_web_apps/Loading", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}

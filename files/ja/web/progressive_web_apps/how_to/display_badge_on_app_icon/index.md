---
title: アプリアイコン上にバッジを表示する
slug: Web/Progressive_web_apps/How_to/Display_badge_on_app_icon
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

モバイルおよびデスクトップのオペレーティングシステムのネイティブアプリケーションは、アプリアイコンの上部にバッジを表示し、ユーザーに新しいコンテンツが利用可能であることを通知できます。例えば、メールクライアントアプリケーションは、未読メッセージの総数をバッジに表示し、アプリケーションが実行中でない場合でもこの数を更新することができます。

次の例では、 iOS 端末上でメールアプリケーションが表示され、その右上隅にバッジが表示されています。

![iPhone のホーム画面のドック領域に、メールアプリのアイコンにバッジが表示されている状態。](./mail-badge-ios.png)

[プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps) (PWA) は、アプリアイコンにバッジを表示したり更新したりすることもできます。

バッジの表示と更新は、[バッジ API](/ja/docs/Web/API/Badging_API) を使用して行います。この API はアプリの[サービスワーカー](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)から呼び出すことで、アプリが実行されていない状態でもバッジを表示または更新することができます。

## バッジの対応

アプリバッジは、 PWA がホストオペレーティングシステムにインストールされている場合のみ対応します。バッジは、アプリがインストールされた後に表示されるアプリアイコンにのみ表示されます。

> [!NOTE]
> この記事は、バッジ API の {{domxref("Navigator.setAppBadge()")}} および {{domxref("Navigator.clearAppBadge()")}} メソッドに焦点を当てており、 `Navigator.setClientBadge` および `Navigator.clearClientBadge` は無視します。これらのメソッドは[バッジ API 仕様書](https://w3c.github.io/badging/)（英語）にも定義されていますが、アプリケーションのアイコンではなく、文書にバッジを表示するために使用されるためです。

### デスクトップの対応

デスクトップオペレーティングシステムでは、バッジは Windows と macOS でのみ対応しており、 PWA が Chrome または Edge からインストールされた場合のみ表示されます。 Linux 版の Chromium ベースのブラウザーでもバッジ API には対応していますが、このオペレーティングシステムではバッジは表示されません。

デスクトップ版の Safari と Firefox はバッジ API に対応しておらず、 PWA のインストールにも対応していません。

### モバイルの対応

バッジは、 iOS および iPadOS の Safari で iPadOS 16.4 以降から対応しています。バッジ API は、 Android 上で動作する Chromium ベースのブラウザーでは対応していません。 Android では代わりに、未読の通知がある場合には、 PWA のアプリアイコンに Android アプリと同様にバッジを自動表示します。

## バッジのベストプラクティス

バッジの使用方法を学ぶ前に、ユーザーにとって最も効果的で役立つ方法でバッジを活用できるよう、以下のベストプラクティスを考慮してください。

### 対応状況のチェック

バッジ API がユーザーのブラウザーとオペレーティングシステムで[対応](#バッジの対応)していても、 JavaScript エラーが発生しないように、 API を使用する前に対応状況を確認してください。

```js
if (navigator.setAppBadge) {
  // API に対応しており、使用できます。
} else {
  // API に対応しておらず、使用してはいけません。
}
```

新しいコンテンツが利用できることをユーザーに通知する際は、バッジにのみ依存しないでください。バッジ API に対応しているブラウザーが、バッジを表示できないオペレーティングシステムにインストールされている可能性があります。例えば、 Chrome はバッジ API に対応していますが、 Linux ではインストールされたアプリケーションのアイコンにバッジが表示されません。

### iOS や iPadOS での通知権限のリクエスト

iOS および iPadOS は、通知バッジに対応していますが、通知権限が与えられるまでバッジは表示されません。通知権限をリクエストするには、 [`Notification.requestPermission()`](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API#許可の要求) メソッドを呼び出してください。

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

なお、ユーザーが以前に通知権限を付与しているかどうかは、[権限 API](/ja/docs/Web/API/Permissions_API) を使用して確認できます。

### バッジの使用は適度に

通知と同様に、バッジは適度に使用することで、ユーザーをアプリに再エンゲージさせるとても効果的な手段となりえます。バッジは、ユーザーが知っておくべき重要な新しいコンテンツを通知する目的でのみ使用するようにしてください。

### リアルタイムでバッジを更新

アプリケーションのバッジをリアルタイムで更新してください。これは、ユーザーが消費可能な新しいアイテムの数を反映するようにバッジの数を更新し、新しいアイテムがなくなった場合にアプリバッジをクリアすることを意味します。

例えば、メールクライアントアプリがバックグラウンドで新しいメッセージを受信した場合、インボックスに未読メッセージの正しい数を表示するためにバッジを更新する必要があります。この際、スパムフォルダーなどの他のフォルダーからのメッセージをフィルタリングする可能性があります。サービスワーカーから `navigator.setAppBadge()` メソッドを使用することで、[バックグラウンドでバッジを更新](#バックグラウンドでバッジを更新)することが可能です。

ユーザーがアプリを起動し、メッセージの読み込みを開始すると、メールクライアントアプリは、未読メッセージの数を指定して `navigator.setAppBadge()` を呼び出すか、未読メッセージがない場合は `navigator.clearAppBadge()` を呼び出して、バッジを適切に更新する必要があります。

### 新しいコンテンツをアプリ内で強調表示

アプリが新しいコンテンツを受信し、アプリアイコンにバッジを追加した場合は、ユーザーがアプリを起動した際にその新しいコンテンツを強調表示するようにしてください。

例えば、メールクライアントアプリがアプリアイコンのバッジに未読メッセージの数を表示する場合、そのアプリを開いた際に、それらのメッセージは太字で表示するなど、何らかの方法で強調表示すべきです。

## バッジの表示と更新

PWA のアプリアイコンに未読メッセージの数を表示するバッジを表示するには、 {{domxref("Navigator.setAppBadge()")}} メソッドを使用します。

```js
// まず対応しているかどうかをチェック
if (navigator.setAppBadge) {
  // 未読メッセージの数を表示
  navigator.setAppBadge(numberOfUnreadMessages);
}
```

同じメソッドを使用して、 count 引数を省略するか、 `0` に設定することで、空のバッジを表示することもできます。

```js
// まず対応しているかどうかをチェック
if (navigator.setAppBadge) {
  // バッジのみを表示し、中に数値は表示しない
  navigator.setAppBadge();
}
```

アプリアイコンのバッジを削除するには、 {{domxref("Navigator.clearAppBadge()")}} メソッドを使用します。

```js
// まず対応しているかどうかをチェック
if (navigator.clearAppBadge) {
  // アプリアイコン上のバッジを除去
  navigator.clearAppBadge();
}
```

## バックグラウンドでバッジを更新

バッジは、ユーザーがアプリを使用していない際に、アプリへの再エンゲージメントを促進する有効な手段です。つまり、アプリは実行中でない場合でもバッジを更新できる必要があります。

PWA は、以下の仕組みを使用してバックグラウンドで更新し、バッジを表示、更新、非表示にできます。

- [プッシュ API](/ja/docs/Web/API/Push_API)
  - : PWA は、アプリが実行されていない状態でもサーバーからメッセージを受信するためにこの API を使用できます。ほとんどのブラウザーでは、プッシュメッセージを受信した際に通知を表示する必要があります。これは一部のユースケース（例：バッジを更新した際に通知を表示する）には問題ありませんが、通知を表示せずにバッジをさりげなく更新することはできません。さらに、ユーザーはプッシュメッセージを受信するために、サイトに通知の権限を付与する必要があります。
    詳しくは、 [ServiceWorkerRegistration: showNotification() メソッド](/ja/docs/Web/API/ServiceWorkerRegistration/showNotification)を参照してください。
- [バックグラウンド同期 API](/ja/docs/Web/API/Background_Synchronization_API)
  - : PWA はこの API を使用して、安定したネットワーク接続が検出された際にバックグラウンドでコードを実行することができます。
- [ウェブ定期バックグラウンド同期 API](/ja/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : PWA は、この API を使用して、一定の間隔でバックグラウンドでコードを実行できます。

以下は、サーバーのプッシュ通知を監視し、未読メッセージの数をアプリバッジに反映させるサービスワーカーのコード例です。

```js
// サービスワーカーで "push" イベントを待ち受けする
self.addEventListener("push", (event) => {
  // プッシュメッセージデータから未読数を抽出する
  const message = event.data.json();
  const unreadCount = message.unreadCount;

  // バッジを設定またはクリアする
  if (navigator.setAppBadge) {
    if (unreadCount && unreadCount > 0) {
      navigator.setAppBadge(unreadCount);
    } else {
      navigator.clearAppBadge();
    }
  }
  // ユーザーに通知を表示することは必須
  self.registration.showNotification(`${unreadCount} 件の未読メッセージ`);
});
```

## 関連情報

- [How to create an app badge](https://web.dev/patterns/web-apps/badges/)
- [Badging for app icons](https://developer.chrome.com/docs/capabilities/web-apis/badging-api)
- [バッジと通知を使用してユーザーを再エンゲージメントする](https://learn.microsoft.com/ja-jp/microsoft-edge/progressive-web-apps-chromium/how-to/notifications-badges)
- [Codelab: Build a push notification server](https://web.dev/articles/push-notifications-server-codelab)

---
title: 'ServiceWorkerGlobalScope: pushsubscriptionchange イベント'
slug: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
---

{{APIRef("Push API")}}

**`pushsubscriptionchange`** イベントは[グローバルスコープ](/ja/docs/Web/API/ServiceWorkerGlobalScope)としての {{domxref("ServiceWorker")}} へ送信され、アプリケーションの制御の外から起動されたプッシュ通知への加入状況が変化したことを示します。これはブラウザーが加入を更新した場合に発生しますが、加入が取り消されたり失われたりしたときにも発生する可能性があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("PushSubscriptionChangeEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange", "onpushsubscriptionchange")}}
      </td>
    </tr>
  </tbody>
</table>

## 使用上のメモ

加入に関する情報をアプリケーションサーバーと共有する方法を示す例では {{domxref("WindowOrWorkerGlobalScope.fetch", "fetch()")}} を使用する傾向がありますが、これは実際の使用には必ずしも最適な選択ではありません。たとえば、アプリがオフラインの場合は機能しないためです。

サービスワーカーとアプリサーバー間で加入情報を同期するのに別の方法を使用することを検討するか、 `fetch()` を使用するコードが、データ交換の試行が失敗した場合を処理するのに十分堅牢であることを確認してください。

> **メモ:** この仕様書の早期の草稿では、このイベントは {{domxref("PushSubscription")}} が期限切れになった時に送信されるよう定義されていました。

## 例

この例は、サービスワーカーのコンテキストで実行するものであり、 `pushsubscriptionchange` イベントを待ち受けて、無効になった場合に再加入します。

```js
self.addEventListener("pushsubscriptionchange", event => {
  event.waitUntil(swRegistration.pushManager.subscribe(event.oldSubscription.options)
    .then(subscription => {
      return fetch("register", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          endpoint: subscription.endpoint
        })
      });
    })
  );
}, false);
```

加入の有効期限が切れたことを示す `pushsubscriptionchange` イベントが到着すると、プッシュマネージャーの {{domxref("PushManager.subscribe", "subscribe()")}} メソッドを呼び出して再加入します。返された Promise が解決されると、新しい加入を受け取ります。これは、 {{domxref("WindowOrWorkerGlobalScope.fetch", "fetch()")}} 呼び出しを使用してアプリサーバーに配信され、 {{Glossary("JSON")}} 形式で加入の {{domxref("PushSubscription.endpoint", "endpoint")}} の返信をアプリサーバーに送信します。

{{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange", "onpushsubscriptionchange")}} イベントハンドラープロパティを使用してイベントハンドラーを設定することもできます。

```js
self.onpushsubscriptionchange = event => {
  event.waitUntil(swRegistration.pushManager.subscribe(event.oldSubscription.options)
    .then(subscription => {
      /* ... */
    )
};
```

## 仕様書

| 仕様書                                                                                                               | 状態                         | 備考     |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Push API', '#the-pushsubscriptionchange-event', 'pushsubscriptionchange')}} | {{Spec2('Push API')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.pushsubscriptionchange_event")}}

## 関連情報

- [Push API の使用](/ja/docs/Web/API/Push_API/Using_the_Push_API)
- {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange", "onpushsubscriptionchange")}} イベントハンドラープロパティ

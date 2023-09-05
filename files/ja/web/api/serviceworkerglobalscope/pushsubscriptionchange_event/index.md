---
title: "ServiceWorkerGlobalScope: pushsubscriptionchange イベント"
slug: Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Push API")}}

**`pushsubscriptionchange`** イベントは[グローバルスコープ](/ja/docs/Web/API/ServiceWorkerGlobalScope)としての {{domxref("ServiceWorker")}} へ送信され、アプリケーションの制御の外から起動されたプッシュ通知への加入状況が変化したことを示します。

これはブラウザーが加入を更新した場合に発生しますが、加入が取り消されたり失われたりしたときにも発生する可能性があります。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("pushsubscriptionchange", (event) => {});

onpushsubscriptionchange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 使用上のメモ

加入に関する情報をアプリケーションサーバーと共有する方法を示す例では {{domxref("fetch()")}} を使用する傾向がありますが、これは実際の使用には必ずしも最適な選択ではありません。たとえば、アプリがオフラインの場合は機能しないためです。

サービスワーカーとアプリサーバー間で加入情報を同期するのに別の方法を使用することを検討するか、 `fetch()` を使用するコードが、データ交換の試行が失敗した場合を処理するのに十分堅牢であることを確認してください。

> **メモ:** この仕様書の早期の草稿では、このイベントは {{domxref("PushSubscription")}} が期限切れになった時に送信されるよう定義されていました。

## 例

この例は、サービスワーカーのコンテキストで実行するものであり、 `pushsubscriptionchange` イベントを待ち受けて、無効になった場合に再加入します。

```js
self.addEventListener(
  "pushsubscriptionchange",
  (event) => {
    const subscription = swRegistration.pushManager
      .subscribe(event.oldSubscription.options)
      .then((subscription) =>
        fetch("register", {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            endpoint: subscription.endpoint,
          }),
        }),
      );
    event.waitUntil(subscription);
  },
  false,
);
```

加入の有効期限が切れたことを示す `pushsubscriptionchange` イベントが到着すると、プッシュマネージャーの {{domxref("PushManager.subscribe", "subscribe()")}} メソッドを呼び出して再加入します。返されたプロミスが解決されると、新しい加入を受け取ります。これは、 {{domxref("fetch()")}} 呼び出しを使用してアプリサーバーに配信され、 {{Glossary("JSON")}} 形式で加入の {{domxref("PushSubscription.endpoint", "endpoint")}} の返信をアプリサーバーに送信します。

`onpushsubscriptionchange` イベントハンドラープロパティを使用してイベントハンドラーを設定することもできます。

```js
self.onpushsubscriptionchange = (event) => {
  event.waitUntil(
    swRegistration.pushManager
      .subscribe(event.oldSubscription.options)
      .then((subscription) => {
        /* ... */
      }),
  );
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プッシュ API の使用](/ja/docs/Web/API/Push_API)

---
title: "PushManager: getSubscription() メソッド"
short-title: getSubscription()
slug: Web/API/PushManager/getSubscription
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("Push API")}}

**`PushManager.getSubscription()`** は {{domxref("PushManager")}} インターフェイスのメソッドで、既存のプッシュサブスクリプションを取得します。

これは既存のプッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} で解決する {{jsxref("Promise")}} を返します。既存のプッシュサブスクリプションが存在しない場合 `null` 値で解決します。

## 構文

```js-nolint
getSubscription()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} です。これは {{domxref("PushSubscription")}} オブジェクトまたは `null` で解決されます。

## 例

このコードスニペットは、 [push messaging and notification sample](https://github.com/GoogleChrome/samples/tree/gh-pages/push-messaging-and-notifications) から取得したものです（使用できるライブデモはありません）。

```js
// サブスクリプションをチェックするためにサービスワーカーの登録が必要
navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  // 既にプッシュメッセージのサブスクリプションがあるか？
  serviceWorkerRegistration.pushManager
    .getSubscription()
    .then((subscription) => {
      // プッシュメッセージに加入／脱退する任意の UI を有効にする
      const pushButton = document.querySelector(".js-push-button");
      pushButton.disabled = false;

      if (!subscription) {
        // プッシュに参加していない場合、ユーザーがプッシュを
        // 有効化できるように UI を設定
        return;
      }

      // 最新の subscriptionId でサーバー同期を維持
      sendSubscriptionToServer(subscription);

      showCurlCommand(subscription);

      // プッシュメッセージに参加していることを表示するために
      // UI を設定
      pushButton.textContent = "Disable Push Messages";
      isPushEnabled = true;
    })
    .catch((err) => {
      console.error(`Error during getSubscription(): ${err}`);
    });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

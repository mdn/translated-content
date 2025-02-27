---
title: PushSubscription
slug: Web/API/PushSubscription
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

`PushSubscription` は[プッシュ API](/ja/docs/Web/API/Push_API) のインターフェイスで、サブスクリプションの URL エンドポイントを提供し、ここからプッシュサービスの登録を脱退できます。

このインターフェイスのインスタンスはシリアライズできます。

## インスタンスプロパティ

- {{domxref("PushSubscription.endpoint")}} {{ReadOnlyInline}}
  - : 文字列で、このプッシュサブスクリプションに関連づけられたエンドポイントが入ります。
- {{domxref("PushSubscription.expirationTime")}} {{ReadOnlyInline}}
  - : {{domxref("DOMHighResTimeStamp")}} で、存在すれば、プッシュサブスクリプションに関連付いたサブスクリプションの期限です。存在しない場合は `null` です。
- {{domxref("PushSubscription.options")}} {{ReadOnlyInline}}
  - : サブスクリプションを作成するために用いられるオプションを含むオブジェクト。
- {{domxref("PushSubscription.subscriptionId")}} {{deprecated_inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : 文字列で、このプッシュサブスクリプションに関連したサブスクリプション ID が入ります。

## インスタンスメソッド

- {{domxref("PushSubscription.getKey()")}}
  - : サーバーに送信されてプッシュメッセージの暗号化に使用される、クライアントの公開鍵を含む {{jsxref("ArrayBuffer")}} を返します。
- {{domxref("PushSubscription.toJSON()")}}
  - : 標準シリアライザーです。サブスクリプションプロパティの JSON 記法を返します。
- {{domxref("PushSubscription.unsubscribe()")}}
  - : プッシュサービスのサブスクリプションを脱退する非同期プロセスを開始します。現在のサブスクリプションが成功裏に脱退できた場合、論理値で解決される {{jsxref("Promise")}} を返します。

## 例

```js
navigator.serviceWorker.ready.then((reg) => {
  reg.pushManager.getSubscription().then((subscription) => {
    subscription
      .unsubscribe()
      .then((successful) => {
        // 成功裏に脱退。
      })
      .catch((e) => {
        // 脱退に失敗。
      });
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [プッシュ API](/ja/docs/Web/API/Push_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)

---
title: PushSubscription
slug: Web/API/PushSubscription
---

{{SeeCompatTable}}{{ApiRef("Push API")}}

[Push API](/ja/docs/Web/API/Push_API) の `PushSubscription` インターフェースは、サブスクリプションの URL エンドポイントを提供するとともに、プッシュサービスの登録を解除できます。

このインターフェースのインスタンスはシリアライズできます。

## プロパティ

- {{domxref("PushSubscription.endpoint")}} {{readonlyinline}}
  - : プッシュサービスに関連したエンドポイントを含む {{domxref("USVString")}}。
- {{domxref("PushSubscription.expirationTime")}} {{readonlyinline}}
  - : プッシュサブスクリプションに関連付いたサブスクリプション期限切れ時間を表す {{domxref("DOMHighResTimeStamp")}} 。存在しない場合は null。
- {{domxref("PushSubscription.options")}} {{readonlyinline}}
  - : サブスクリプションを作成するために用いられるオプションを含むオブジェクト。

<!---->

- {{domxref("PushSubscription.subscriptionId")}} {{deprecated_inline}} {{readonlyinline}}
  - : プッシュサービスに関連したサブスクリプション ID を含む {{domxref("DOMString")}}。

## メソッド

- {{domxref("PushSubscription.getKey()")}}
  - : サーバーに送信されてプッシュメッセージの暗号化に使用される、クライアントのパブリックキーを含む {{domxref("ArrayBuffer")}} を返します。
- {{domxref("PushSubscription.toJSON()")}}
  - : 標準シリアライザー — サブスクリプションプロパティの JSON 記法を返します。
- {{domxref("PushSubscription.unsubscribe()")}}
  - : プッシュサービスの登録を解除する非同期プロセスを開始します。現在のサブスクリプションが成功裏に登録解除できた場合、{{domxref("Boolean")}} で解決される {{jsxref("Promise")}} を返します。

## 例

```js
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {
    subscription.unsubscribe().then(function(successful) {
      // 成功裏に登録解除。
    }).catch(function(e) {
      // 登録解除失敗。
    })
  })
});
```

## 仕様

| 仕様                                                                                                 | 状態                         | コメント   |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ---------- |
| {{SpecName("Push API", "#pushsubscription-interface", "PushSubscription")}} | {{Spec2("Push API")}} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.PushSubscription")}}

## 関連項目

- [Push API](/ja/docs/Web/API/Push_API)
- [Service Worker API](/ja/docs/Web/API/Service_Worker_API)

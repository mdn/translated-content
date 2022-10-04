---
title: PushSubscription.toJSON()
slug: Web/API/PushSubscription/toJSON
---

{{SeeCompatTable}}{{APIRef("Push API")}}

{{domxref("PushSubscription")}} インターフェースの `toJSON()` メソッドは、スタンダードなシリアライザーです：これは、便利なショートカットを提供するサブスクリプションプロパティの JSON 表記を返します。

## 構文

```
​mySubscription = subscription.toJSON()
```

### パラメーター

なし。

### 戻り値

JSON オブジェクト。現在、`endpoint` メンバーとしてサブスクリプションエンドポイントのみを含みます。

## 例

```js
navigator.serviceWorker.ready.then(function(reg) {
  reg.pushManager.getSubscription().then(function(subscription) {
    var mySubscription = subscription.toJSON();
    // サブスクリプションの詳細を使用して何かを実行する。
  })
});
```

## 仕様

| 仕様                                                                                                                                                 | 状態                         | コメント   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------- |
| {{SpecName('Push API','#pushsubscription-interface','PushSubscription (see serializer listed in the WebIDL)')}} | {{Spec2('Push API')}} | 初期定義。 |

## ブラウザ実装状況

{{Compat("api.PushSubscription.toJSON")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)

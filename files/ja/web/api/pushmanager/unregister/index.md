---
title: PushManager.unregister()
slug: Web/API/PushManager/unregister
---

{{deprecated_header}}{{ ApiRef("Push API")}}

**`unregister()`** メソッドは、システムに特定の端点の登録を解除して削除するよう依頼するために使用していました。更新された API では、加入は {{domxref("PushSubscription.unsubscribe()")}} メソッドで登録解除することができます。

## 構文

```
var request = navigator.push.unregister(pushEndpoint);
```

### プロパティ

- pushEndpoint
  - : 登録解除する端点です。

### 返値

{{domxref("DOMRequest")}} オブジェクトで、このメソッド呼び出しの成功または失敗を扱います。

メソッドの呼び出しが成功した場合、リクエストの `result` が登録解除された端点を表す [PushRegistration](#pushregistration) オブジェクトになります。

### PushRegistration

このオブジェクトは無名の JavaScript オブジェクトで、以下のプロパティがあります。

- `pushEndpoint`
  - : 端点の URL を表す文字列です。
- `version`
  - : プッシュ通知の端点の現在のバージョンです。

## 例

```js
var req = navigator.push.unregister(pushEndpoint);

req.onsuccess = function(e) {
  var endpoint = req.result;
  debug("Unregistered endpoint: " + endpoint );
}

req.onerror = function(e) {
  debug("Error unregistering the endpoint: " + JSON.stringify(e));
}
```

## 仕様書

| 仕様書                           | 状態                         | 備考                                 |
| -------------------------------- | ---------------------------- | ------------------------------------ |
| {{SpecName('Push API')}} | {{Spec2('Push API')}} | `PushManager` インターフェイスを定義 |

## ブラウザーの互換性

{{Compat("api.PushManager.register")}}

## 関連情報

- {{domxref("PushManager")}}
- {{domxref("DOMRequest")}}

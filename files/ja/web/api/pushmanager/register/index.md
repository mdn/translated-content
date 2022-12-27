---
title: PushManager.register()
slug: Web/API/PushManager/register
---

{{deprecated_header}}{{ ApiRef("Push API")}}

**`register`** メソッドは、システムにプッシュ通知の新しい端点をリクエストするために使用します。このメソッドは {{domxref("PushManager.subscribe()")}} に置き換えられました。

## 構文

```
var request = navigator.push.register();
```

### 返値

{{domxref("DOMRequest")}} オブジェクトで、このメソッド呼び出しの成功または失敗を扱います。

メソッドの呼び出しに成功したら、リクエストの `result` が端点の URL を表す文字列になります。

> **メモ:** この URL が必要なくなったら、 {{domxref("Pushmanager.unregister()")}} を使用して自分自身を掃除してください。

## 例

```js
var req = navigator.push.register();

req.onsuccess = function(e) {
  var endpoint = req.result;
  debug("New endpoint: " + endpoint );
}

req.onerror = function(e) {
  debug("Error getting a new endpoint: " + JSON.stringify(e));
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

---
title: PushManager.registrations()
slug: Web/API/PushManager/registrations
---

{{deprecated_header}}{{ApiRef("Push API")}}

**`registrations`** メソッドは、プッシュ通知の端点登録の存在に関してシステムに問い合わせするために使用します。

## 構文

```
var request = navigator.push.registrations();
```

### 返値

{{domxref("DOMRequest")}} オブジェクトで、このメソッド呼び出しの成功または失敗を扱います。

メソッドの呼び出しが成功した場合、リクエストの `result` は [PushRegistration](#pushregistration) オブジェクトの配列になります。

### PushRegistration

このオブジェクトは無名の JavaScript オブジェクトで、以下のプロパティがあります。

- `pushEndpoint`
  - : 端点の URL を表す文字列です。
- `version`
  - : プッシュ通知の端点の現在のバージョンです。

## 例

```js
var req = navigator.push.registrations();

req.onsuccess = function(e) {
  if (req.result.length > 0) {
    for (var i = 0, l = req.result.length; i < l; i++) {
      console.log("Existing registration", req.result[i].pushEndpoint, req.result[i].version);
    }
    // Reuse existing endpoints.
  } else {
    // Register for a new endpoint.
    var register = navigator.push.register();
    register.onsuccess = function(e) {
      console.log("Registered new endpoint", register.result);
    }
  }
}
```

## 仕様書

| 仕様書                           | 状態                         | 備考                                 |
| -------------------------------- | ---------------------------- | ------------------------------------ |
| {{SpecName('Push API')}} | {{Spec2('Push API')}} | `PushManager` インターフェイスを定義 |

## ブラウザーの互換性

{{Compat("api.PushManager.registrations")}}

## 関連情報

- {{domxref("PushManager")}}
- {{domxref("DOMRequest")}}

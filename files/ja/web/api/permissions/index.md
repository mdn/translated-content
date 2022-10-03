---
title: Permissions
slug: Web/API/Permissions
---

{{APIRef("Permissions API")}}{{SeeCompatTable}}

[Permissions API](/ja/docs/Web/API/Permissions_API) の `Permissions` インターフェイスは、パーミッションの照会および取り消しのためのメソッドなど、コアとなる Permission API 機能を提供します。

## メソッド

- {{domxref("Permissions.query()")}}
  - : 特定の API のパーミッションの状態を返します。
- {{domxref("Permissions.request()")}}
  - : 特定の API を使用するパーミッションを要求します。 これは現在どのブラウザーもサポートしていません。
- {{domxref("Permissions.revoke()")}}
  - : 特定の API に現在設定されているパーミッションを取り消します。

## 例

```js
navigator.permissions.query({name:'geolocation'}).then(function(result) {
  if (result.state == 'granted') {
    showLocalNewsWithGeolocation();
  } else if (result.state == 'prompt') {
    showButtonToEnableLocalNews();
  }
  // パーミッションが拒否された場合は何もしないでください。
});
```

## 仕様

| 仕様                                                                                             | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Permissions API', '#permissions-interface', 'Permissions')}} | {{Spec2('Permissions API')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Permissions")}}

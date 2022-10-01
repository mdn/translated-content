---
title: Clients.get()
slug: Web/API/Clients/get
---

{{APIRef("Service Workers API")}}

{{domxref("Clients")}} インターフェースの **`get()`** メソッドは、所与の `id` と一致するサービスワーカークライアントを取得し、{{jsxref("Promise")}} で返します。

## 構文

```
self.clients.get(id).then(function(client) {
  // 返されたクライアントで何かをします
});
```

### パラメーター

- `id`
  - : 取得するクライアントの id を表す {{domxref("DOMString")}}。

### 戻り値

{{domxref("Client")}} オブジェクトまたは `undefined` に解決される {{jsxref("Promise")}}。

## 例

```js
self.clients.get(id).then(function(client) {
  self.clients.openWindow(client.url);
});
```

## 仕様

| 仕様                                                                             | 状態                                 | コメント |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-clients-get', 'get()')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Clients.get")}}

---
title: "Clients: get() メソッド"
slug: Web/API/Clients/get
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Service Workers API")}}

**`get()`** は{{domxref("Clients")}} インターフェイスのメソッドは、指定された `id` と一致するサービスワーカークライアントを取得し、{{jsxref("Promise")}} で返します。

## 構文

```js-nolint
get(id)
```

### 引数

- `id`
  - : 取得するクライアントの id を表す文字列です。

### 返値

{{domxref("Client")}} オブジェクトまたは `undefined` に解決される {{jsxref("Promise")}}。

## 例

```js
self.clients.get(id).then((client) => {
  self.clients.openWindow(client.url);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

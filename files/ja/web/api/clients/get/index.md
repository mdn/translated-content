---
title: "Clients: get() メソッド"
short-title: get()
slug: Web/API/Clients/get
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

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

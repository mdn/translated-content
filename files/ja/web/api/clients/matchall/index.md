---
title: "Clients: matchAll() メソッド"
slug: Web/API/Clients/matchAll
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Service Workers API")}}

**`matchAll()`** は {{domxref("Clients")}} インターフェイスのメソッドで、サービスワーカークライアント（{{domxref("Client")}}）オブジェクトのリストの {{jsxref("Promise")}} を返します。 関連するサービスワーカーのオリジンと同じオリジンを持つすべてのサービスワーカークライアントを返すには、`options` 引数を含めます。 オプションが含まれていなかった場合、このメソッドは、サービスワーカーによって制御されるサービスワーカークライアントのみを返します。

## 構文

```js-nolint
matchAll()
matchAll(options)
```

### 引数

- `options` {{optional_inline}}

  - : 照合操作のオプションを設定できるオプションオブジェクト。 利用可能なオプションは次のとおりです。

    - `includeUncontrolled`
      - : 論理値です。`true` に設定すると、照合操作は、現在のサービスワーカーと同じオリジンを共有するすべてのクライアントを返します。 それ以外の場合は、現在のサービスワーカーによって制御されているサービスワーカークライアントのみを返します。 既定値は `false` です。
    - `type`
      - : 照合するクライアントの種類を設定します。 使用可能な値は、`"window"`、`"worker"`、`"sharedworker"`、`"all"` です。 既定値は `"window"` です。

### 返値

{{domxref("Client")}} オブジェクトの配列に解決される {{jsxref("Promise")}}。 Chrome 46/Firefox 54 以降では、このメソッドはクライアントを直近でフォーカスした順序で返し、仕様どおりに修正されました

## 例

```js
clients.matchAll(options).then((clientList) => {
  for (const client of clientList) {
    if (client.url === "index.html") {
      clients.openWindow(client);
      // または、一致するクライアントに関係する何かを行う
    }
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

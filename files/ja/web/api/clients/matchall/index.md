---
title: Clients.matchAll()
slug: Web/API/Clients/matchAll
---

{{APIRef("Service Workers API")}}

{{domxref("Clients")}} インターフェイスの **`matchAll()`** メソッドは、サービスワーカークライアント（{{domxref("Client")}}）オブジェクトのリストの {{jsxref("Promise")}} を返します。 関連するサービスワーカーのオリジンと同じオリジンを持つすべてのサービスワーカークライアントを返すには、`options` パラメーターを含めます。 オプションが含まれていない場合、メソッドは、サービスワーカーによって制御されるサービスワーカークライアントのみを返します。

## 構文

```
self.clients.matchAll(options).then(function(clients) {
  // クライアントのリストで何かを行います
});
```

### パラメーター

- `options` {{optional_inline}}

  - : 照合操作のオプションを設定できるオプションオブジェクト。 利用可能なオプションは次のとおりです。

    - `includeUncontrolled`: {{jsxref("Boolean")}} — `true` に設定すると、照合操作は、現在のサービスワーカーと同じオリジンを共有するすべてのクライアントを返します。 それ以外の場合は、現在のサービスワーカーによって制御されているサービスワーカークライアントのみを返します。 デフォルトは `false` です。
    - `type`: 一致させるクライアントの種類を設定します。 使用可能な値は、`"window"`、`"worker"`、`"sharedworker"`、`"all"` です。 デフォルトは `"all"` です。

### 戻り値

{{domxref("Client")}} オブジェクトの配列に解決される {{jsxref("Promise")}}。 Chrome 46 / Firefox 54 以降では、このメソッドはクライアントを直近でフォーカスした順序で返し、仕様どおりに修正されます。

## 例

```js
clients.matchAll(options).then(function(clientList) {
  for (var i = 0 ; i < clientList.length ; i++) {
    if (clientList[i].url === 'index.html') {
      clients.openWindow(clientList[i]);
      // または、一致するクライアントに関係する何かを行う
    }
  }
});
```

## 仕様

| 仕様                                                                                             | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#clients-matchall', 'Clients: matchall')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Clients.matchAll")}}

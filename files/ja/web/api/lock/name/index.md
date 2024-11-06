---
title: "Locks: name プロパティ"
slug: Web/API/Lock/name
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Web Locks")}}

{{domxref("Lock")}} インターフェイスの読み取り専用プロパティ **`name`** は、ロックの要求時に決め、{{domxref('LockManager.request')}} に渡された _名前_ を返します。

ロックの名前は、ロックの要求時にスクリプトから渡されます。名前は、オリジン内で、複数のタブ、ワーカー、もしくはその他のコードが協調して用いる抽象リソースを表すよう、開発者が設定します。たとえば、ウェブアプリケーションの 1 個のタブだけがオフラインデータベースとネットワークリソースを同期してほしいときは、`"net_db_sync"` などのロック名を用いることができます。

## 値

文字列です。

## 例

以下の例では、{{domxref('LockManager.request()')}} の呼び出し時にプロパティ `name` がどのように渡されるかを示します。`LockManager` は {{domxref('navigator.locks')}} が返すオブジェクトです。

```js
navigator.locks.request("net_db_sync", show_lock_properties);

function show_lock_properties(lock) {
  console.log(`ロック名: ${lock.name}`);
  console.log(`ロックモード: ${lock.mode}`);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

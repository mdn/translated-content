---
title: Lock
slug: Web/API/Lock
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Locks")}}

[Web Locks API](/ja/docs/Web/API/Web_Locks_API) の **`Lock`** インターフェイスは、ロックの名前とモードを提供します。これは {{domxref('LockManager.request','LockManager.request()')}} のコールバックが受け取る新しく要求されたロックのことも、{{domxref('LockManager.query()')}} が返した動作中もしくは待機中のロックの記録のこともあります。

## インスタンスプロパティ

- {{domxref('Lock.mode')}} {{ReadOnlyInline}}
  - : ロックの要求時に {{domxref('LockManager.request()')}} に渡されたアクセスモードを返します。モードは `"exclusive"` (デフォルト) か `"shared"` のいずれかです。
- {{domxref('Lock.name')}} {{ReadOnlyInline}}
  - : ロックの要求時に {{domxref('LockManager.request()')}} に渡された名前を返します。

## 例

以下の例では、{{domxref('LockManager.request()')}} の呼び出し時にプロパティ `mode` および `name` がどのように渡されるかを示します。`LockManager` は {{domxref('navigator.locks')}} が返すオブジェクトです。

```js
navigator.locks.request("net_db_sync", show_lock_properties);
navigator.locks.request(
  "another_lock",
  { mode: "shared" },
  show_lock_properties,
);

function show_lock_properties(lock) {
  console.log(`ロック名: ${lock.name}`);
  console.log(`ロックモード: ${lock.mode}`);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: "Locks: mode プロパティ"
slug: Web/API/Lock/mode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Locks")}}

{{domxref("Lock")}} インターフェイスの読み取り専用プロパティ **`mode`** は、ロックの要求時に {{domxref('LockManager.request()')}} に渡されたアクセスモードを返します。モードは `"exclusive"` (デフォルト) か `"shared"` のいずれかです。

## 値

`"exclusive"` か `"shared"` のうちのひとつです。

## 例

以下の例では、{{domxref('LockManager.request()')}} の呼び出し時にプロパティ `mode` がどのように渡されるかを示します。`LockManager` は {{domxref('navigator.locks')}} が返すオブジェクトです。

```js
// "exclusive" が表示されるはず (デフォルト)
navigator.locks.request("my_resource", show_lock_properties);

// "exclusive" が表示されるはず
navigator.locks.request(
  "my_resource",
  { mode: "exclusive" },
  show_lock_properties,
);

// "shared" が表示されるはず
navigator.locks.request(
  "my_resource",
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

---
title: StorageManager.persist()
slug: Web/API/StorageManager/persist
---

{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}

{{domxref("StorageManager")}} インターフェイスの **`persist()`** メソッドは、永続的ストレージ（persistent storage）を使用するパーミッションを要求します。 そして、パーミッションが付与されてボックスモードが永続的な場合は `true` に、そうでない場合は `false` に解決される {{jsxref("Promise")}} を返します。

## 構文

```
navigator.storage.persist().then(function(persistent) { ... })
```

### パラメーター

なし。

### 戻り値

{{jsxref('Boolean')}} に解決される {{jsxref("Promise")}}。

## 例

```js
if (navigator.storage && navigator.storage.persist)
  navigator.storage.persist().then(function (persistent) {
    if (persistent)
      console.log("明示的なユーザー操作以外では、ストレージは消去されません。");
    else
      console.log(
        "ストレージは UA によってストレージの圧力により消去されるかもしれません。",
      );
  });
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.StorageManager.persist")}}

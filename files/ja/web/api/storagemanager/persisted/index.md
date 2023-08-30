---
title: StorageManager.persisted()
slug: Web/API/StorageManager/persisted
---

{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}

{{domxref("StorageManager")}} インターフェイスの **`persisted()`** メソッドは、サイトのストレージに対してボックスモードが永続的であれば `true` に解決される {{jsxref("Promise")}} を返します。

## 構文

```
navigator.storage.persisted().then(function(persistent) { ... })
```

### パラメーター

なし。

### 戻り値

{{jsxref('Boolean')}} に解決される {{jsxref("Promise")}}。

## 例

```js
if (navigator.storage && navigator.storage.persist)
  navigator.storage.persisted().then(function (persistent) {
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

{{Compat("api.StorageManager.persisted")}}

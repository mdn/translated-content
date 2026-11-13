---
title: "StorageManager: persisted() メソッド"
short-title: persisted()
slug: Web/API/StorageManager/persisted
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

**`persisted()`** は {{domxref("StorageManager")}} インターフェイスのメソッドで、サイトのストレージに対してボックスモードが永続的であれば `true` に解決される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
persisted()
```

### 引数

なし。

### 返値

{{jsxref('Boolean')}} に解決される {{jsxref("Promise")}}。

### 例外

- `TypeError`
  - : ローカルストレージのシェルフの取得に失敗した場合に発生します。例えば、現在のオリジンが不透明なオリジンである場合や、ユーザーがストレージを無効にしている場合などです。

## 例

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persisted().then((persistent) => {
    if (persistent) {
      console.log("明示的なユーザー操作以外では、ストレージは消去されません。");
    } else {
      console.log(
        "ストレージは UA によってストレージの圧力により消去されるかもしれません。",
      );
    }
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

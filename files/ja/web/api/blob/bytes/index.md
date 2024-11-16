---
title: "Blob: bytes() メソッド"
short-title: bytes()
slug: Web/API/Blob/bytes
l10n:
  sourceCommit: 5ee9d033cacad3a031562be16be43c55a838cc4f
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`bytes()`** は {{domxref("Blob")}} インターフェイスのメソッドで、この Blob の内容をバイト配列として含む {{jsxref("Uint8Array")}} で解決するプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```js-nolint
bytes()
```

### 引数

なし。

### 返値

この blob のデータの入った {{jsxref("Uint8Array")}} オブジェクトで履行されるプロミス ({{jsxref("Promise")}}) です。

### 例外

このメソッドでは、例えば、この Blob のデータを読み取るために使用されたリーダーが例外を発生させた場合、返されたプロミス ({{jsxref("Promise")}}) が拒否されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

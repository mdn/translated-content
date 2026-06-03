---
title: "Document: exitPointerLock() メソッド"
short-title: exitPointerLock()
slug: Web/API/Document/exitPointerLock
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

**`exitPointerLock()`** は {{domxref("Document")}} インターフェイスのメソッドで、以前 {{domxref("Element.requestPointerLock")}} でリクエストされたポインターロックを非同期に解放します。

> [!NOTE]
> **`exitPointerLock()`** メソッドは文書に対して呼び出されるのに対し、**`requestPointerLock()`** メソッドは要素に対して呼び出されます。

リクエストが成功したか失敗したかを追跡するには、 {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} および {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} イベントを待ち受けする必要があります。

## 構文

```js-nolint
exitPointerLock()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Element.requestPointerLock()") }}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)

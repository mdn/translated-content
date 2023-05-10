---
title: Document.exitPointerLock()
slug: Web/API/Document/exitPointerLock
l10n:
  sourceCommit: d4619276d67ca1ee02bd964d884ec52c2aa2ad4b
---

{{APIRef("DOM")}}

**`exitPointerLock()`** メソッドは、以前 {{domxref("Element.requestPointerLock()")}} でリクエストされたポインターロックを非同期に解放します。

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

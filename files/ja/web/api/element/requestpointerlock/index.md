---
title: Element.requestPointerLock()
slug: Web/API/Element/requestPointerLock
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{ APIRef("DOM") }}

**`Element.requestPointerLock()`** メソッドで、ポインターをこの要素にロックすることを非同期にリクエストすることができます。

リクエストが成功したか失敗したかを追跡するには、 {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} および {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} イベントを {{domxref("Document")}} レベルで待ち受けする必要があります。

## 構文

```js-nolint
requestPointerLock()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## セキュリティ

[単発のユーザーアクティベーション](/ja/docs/Web/Security/User_activation)が必要です。この機能が動作するためには、ユーザーがページまたは UI 要素を操作する必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)

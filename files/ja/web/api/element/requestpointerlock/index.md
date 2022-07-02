---
title: Element.requestPointerLock()
slug: Web/API/Element/requestPointerLock
tags:
  - API
  - DOM
  - 実験的
  - メソッド
  - NeedsExample
  - PointerEvent
  - リファレンス
  - mouse lock
browser-compat: api.Element.requestPointerLock
translation_of: Web/API/Element/requestPointerLock
---
{{ APIRef("DOM") }}{{ SeeCompatTable }}

**`Element.requestPointerLock()`** メソッドで、ポインターをこの要素にロックすることを非同期にリクエストすることができます。

リクエストが成功したか失敗したかを追跡するには、 {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} および {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} イベントを {{domxref("Document")}} レベルで待ち受けする必要があります。

## 構文

```js
instanceOfElement.requestPointerLock();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)

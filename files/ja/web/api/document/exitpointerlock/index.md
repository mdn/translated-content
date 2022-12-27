---
title: Document.exitPointerLock()
slug: Web/API/Document/exitPointerLock
---

{{APIRef("DOM")}} {{seeCompatTable}}

**`exitPointerLock()`** メソッドは、以前 {{domxref("Element.requestPointerLock")}} でリクエストされたポインターロックを非同期に解放します。

リクエストが成功したか失敗したかを追跡するには、 {{event("pointerlockchange")}} および {{event("pointerlockerror")}} イベントを待ち受けする必要があります。

## 構文

```
document.exitPointerLock();
```

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| {{SpecName('Pointer Lock','#extensions-to-the-document-interface','Document')}} | {{Spec2('Pointer Lock')}} | `Document` インターフェイスを拡張 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Element.requestPointerLock()") }}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)

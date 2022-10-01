---
title: DocumentOrShadowRoot.pointerLockElement
slug: Web/API/Document/pointerLockElement
original_slug: Web/API/DocumentOrShadowRoot/pointerLockElement
---

{{APIRef("DOM")}}

**`pointerLockElement`** は {{domxref("Document")}} および {{domxref("ShadowRoot")}} インターフェイスのプロパティで、要素をポインターがロックされている間のマウスイベントの対象として設定します。ロック待ち状態の場合、ポインターがロックされていない場合、対象が他の文書にある場合は `null` になります。

## 構文

```
var element = document.pointerLockElement;
```

### 返値

{{domxref("Element")}} または `null`。

## 仕様書

| 仕様書                                                                                                                           | 状態                             | 備考                              |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| {{SpecName('Pointer Lock','#extensions-to-the-documentorshadowroot-mixin','pointerLockElement')}} | {{Spec2('Pointer Lock')}} | `Document` インターフェイスを拡張 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/ja/docs/WebAPI/Pointer_Lock)

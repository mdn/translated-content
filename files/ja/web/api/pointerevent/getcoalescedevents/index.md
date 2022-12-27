---
title: PointerEvent.getCoalescedEvents()
slug: Web/API/PointerEvent/getCoalescedEvents
page-type: web-api-instance-method
browser-compat: api.PointerEvent.getCoalescedEvents
l10n:
  sourceCommit: 1732201134d732af9bfd49ee9e10f7e2086cc783
---

{{APIRef("Pointer Events")}}

{{domxref("PointerEvent")}} インターフェイスの **`getCoalescedEvents()`** メソッドは、ディスパッチされた {{domxref('Element/pointermove_event', 'pointermove')}} イベントと連動した全ての `PointerEvent` インスタンスのシーケンスを返します。

## 構文

```js-nolint
getCoalescedEvents()
```

### 引数

なし。

### 戻り値

{{domxref('PointerEvent')}} インスタンスのシーケンス。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

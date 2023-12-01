---
title: "Element: pointerrawupdate イベント"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: ab4fde9db98cad2e7a80653723533ff1663ada2d
---

{{APIRef}}{{SeeCompatTable}}

**`pointerrawupdate`** は {{DOMxRef('PointerEvent')}} で、ポインターに [`pointerdown`](/ja/docs/Web/API/Element/pointerdown_event) または [`pointerup`](/ja/docs/Web/API/Element/pointerup_event) イベントが発生しない変化が起きたときに発生します。
これらのプロパティの一覧は [`pointermove`](/ja/docs/Web/API/Element/pointermove_event) を参照してください。

イベントループ内で配信されていない、同じポインター ID を持つ別の `pointerrawupdate` イベントが既に存在する場合、`pointerrawupdate` イベントは併合イベントになる可能性があります。
併合イベントの詳細については、{{domxref("PointerEvent.getCoalescedEvents")}} のドキュメントを参照してください。

`pointerrawupdate` イベントのリスナーは、JavaScript が高頻度のイベントを必要とし、それらが配信されると同時に素早く処理できる場合にのみ追加すべきです。
ほとんどの用途では、`pointerrawupdate` イベント用のリスナーを追加することで、パフォーマンスに影響が出る可能性があるため、他のポインターイベント型で十分です。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("pointerrawupdate", (event) => {});

onpointerrawupdate = (event) => {};
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## イベントプロパティ

このイベントは、{{domxref("PointerEvent")}} インターフェイスのプロパティを実装しています。

## 例

```js
addEventListener("pointerrawupdate", (event) => {
  if (event.getCoalescedEvents && event.getCoalescedEvents().length > 1) {
    console.log("Coalesced events:", event.getCoalescedEvents().length);
    for (let coalescedEvent of event.getCoalescedEvents()) {
      // 併合されたイベントに対して何かをする
    }
  } else {
    // イベントに対して何かをする
    console.log("Raw event", event);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Related events

  - [`gotpointercapture`](/ja/docs/Web/API/Element/gotpointercapture_event)
  - [`lostpointercapture`](/ja/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerover`](/ja/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/ja/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/ja/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/ja/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/ja/docs/Web/API/Element/pointerup_event)
  - [`pointerout`](/ja/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/ja/docs/Web/API/Element/pointerleave_event)

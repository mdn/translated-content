---
title: "Element: pointerrawupdate イベント"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Pointer Events")}}{{secureContext_header}}

**`pointerrawupdate`** イベントは、ポインターのプロパティが変化し、その変化によって {{domxref('Element/pointerdown_event', 'pointerdown')}} または {{domxref('Element/pointerup_event', 'pointerup')}} イベントが発生しない場合に発生します。
このようなプロパティの一覧は {{domxref('Element/pointermove_event', 'pointermove')}} を参照してください。

イベントループ内で、同じポインター ID を持つ別の `pointerrawupdate` イベントがまだ配送されていない場合、このイベントには統合されたイベントが含まれることがあります。
イベントが統合される場合、配送されたイベントの `target` は最後に統合されたイベントと同じです。
イベントの統合については、{{domxref("PointerEvent.getCoalescedEvents()")}} の説明を参照してください。

`pointerrawupdate` と {{domxref("Element/pointermove_event", "pointermove")}} の違いは、発生頻度です。
ブラウザーはパフォーマンスを向上させるために `pointermove` イベントの配送を遅らせることがありますが、`pointerrawupdate` イベントはブラウザーが生成できる限り速く、頻繁に配送されます。
どちらのイベント型もイベントを統合しますが、`pointerrawupdate` の統合数は少ないため、リスナーはより頻繁に実行されます。
ただし、個々のイベントが持つプロパティ値はどちらも同じです。そのため、同じ移動を対象とする `pointermove` イベントに比べて、`pointerrawupdate` の位置や時刻の精度が高いわけではありません。

したがって、`pointerrawupdate` は、描画やドラッグなど、`pointermove` よりも低遅延の入力処理が必要で、ポインターに目に見えて遅れて追従する状況を避けたいアプリケーションを対象としています。
イベントの到着頻度が高いため、処理に追いつけるアプリケーションでは、より滑らかに感じられる場合もあります。
一方、`pointerrawupdate` イベントを監視するとパフォーマンスに影響する可能性があります。高頻度のイベントが必要で、配送と同じ速さで処理できる場合に限り、リスナーを追加してください。
処理が追いつかないアプリケーションでは、応答性が向上するどころか低下するため、イベントリスナー内の処理を大幅に最適化する必要があります。
ほとんどの用途では、ほかのポインターイベント型で十分です。

このイベントは[バブリング](/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling)し、[合成](/ja/docs/Web/API/Event/composed)されますが、[キャンセル可能](/ja/docs/Web/API/Event/cancelable)ではなく、デフォルトアクションもありません。

## 構文

{{domxref("EventTarget/addEventListener", "addEventListener()")}} でこのイベント名を使用してください。

```js-nolint
addEventListener("pointerrawupdate", (event) => { })
```

または、インターフェイスの[イベントハンドラープロパティ](/ja/docs/Web/API/Document_Object_Model/Events#using_onevent_properties)に代入します。

```js-nolint
onpointerrawupdate = (event) => { }
```

## イベント型

{{domxref("PointerEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("PointerEvent")}}

## 例

```js
canvas.addEventListener("pointerrawupdate", (event) => {
  const events = event.getCoalescedEvents();
  if (events.length > 1) {
    console.log("Coalesced events:", events.length);
    for (const coalescedEvent of events) {
      // 統合されたイベントに対して何かをする
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

- 関連イベント
  - {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - {{domxref('Element/pointerover_event', 'pointerover')}}
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}

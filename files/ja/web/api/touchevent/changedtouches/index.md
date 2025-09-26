---
title: "TouchEvent: changedTouches プロパティ"
short-title: changedTouches
slug: Web/API/TouchEvent/changedTouches
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

**`changedTouches`** は読み取り専用プロパティで、 {{ domxref("TouchList") }} です。そのタッチ点（{{domxref("Touch")}} オブジェクト）はイベントタイプによって以下のように異なります。

- {{domxref("Element/touchstart_event", "touchstart")}} イベントでは、現在のイベントでアクティブになったタッチ点のリストです。
- {{domxref("Element/touchmove_event", "touchmove")}} イベントでは、前回のイベント以降に変更されたタッチ点のリストです。
- {{domxref("Element/touchend_event", "touchend")}} イベントでは、これはタッチ面から除去されたタッチ点のリストです（つまり、タッチ面に触れなくなった指に対応するタッチ点の集合）。

## 値

{{ domxref("TouchList") }} の {{ domxref("Touch") }} オブジェクトには、このタッチイベントに寄与したすべてのタッチ点が含まれています。

## 例

この例では、{{domxref("TouchEvent")}} オブジェクトの {{domxref("TouchEvent.changedTouches")}} プロパティを示します。 {{domxref("TouchEvent.changedTouches")}} プロパティは {{domxref("TouchList")}} オブジェクトで、イベントに貢献した各タッチ点の {{domxref("Touch")}} オブジェクトを 1 つ格納します。

以下のコードでは、 {{domxref("Element/touchmove_event", "touchmove")}} イベントハンドラーが `changedTouches` リストを反復処理し、最後のイベント以降に変更された各タッチ点の識別子を出力しています。

```js
someElement.addEventListener(
  "touchmove",
  (e) => {
    // 最後のイベント以降に変更されたタッチ点のリストを反復処理し、
    // 各タッチ点の識別子を出力
    for (let i = 0; i < e.changedTouches.length; i++) {
      console.log(
        `changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`,
      );
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

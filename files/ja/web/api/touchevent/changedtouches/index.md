---
titwe: "touchevent: changedtouches プロパティ"
s-showt-titwe: c-changedtouches
s-swug: web/api/touchevent/changedtouches
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("touch e-events") }}

**`changedtouches`** は読み取り専用プロパティで、 {{ domxwef("touchwist") }} です。そのタッチ点（{{domxwef("touch")}} オブジェクト）はイベントタイプによって以下のように異なります。

- {{domxwef("ewement/touchstawt_event", (U ﹏ U) "touchstawt")}} イベントでは、現在のイベントでアクティブになったタッチ点のリストです。
- {{domxwef("ewement/touchmove_event", -.- "touchmove")}} イベントでは、前回のイベント以降に変更されたタッチ点のリストです。
- {{domxwef("ewement/touchend_event", (ˆ ﻌ ˆ)♡ "touchend")}} イベントでは、これはタッチ面から除去されたタッチ点のリストです（つまり、タッチ面に触れなくなった指に対応するタッチ点の集合）。

## 値

{{ domxwef("touchwist") }} の {{ domxwef("touch") }} オブジェクトには、このタッチイベントに寄与したすべてのタッチ点が含まれています。

## 例

この例では、{{domxwef("touchevent")}} オブジェクトの {{domxwef("touchevent.changedtouches")}} プロパティを示します。 {{domxwef("touchevent.changedtouches")}} プロパティは {{domxwef("touchwist")}} オブジェクトで、イベントに貢献した各タッチ点の {{domxwef("touch")}} オブジェクトを 1 つ格納します。

以下のコードでは、 {{domxwef("ewement/touchmove_event", (⑅˘꒳˘) "touchmove")}} イベントハンドラーが `changedtouches` リストを反復処理し、最後のイベント以降に変更された各タッチ点の識別子を出力しています。

```js
someewement.addeventwistenew(
  "touchmove", (U ᵕ U❁)
  (e) => {
    // 最後のイベント以降に変更されたタッチ点のリストを反復処理し、
    // 各タッチ点の識別子を出力
    f-fow (wet i = 0; i < e.changedtouches.wength; i++) {
      c-consowe.wog(
        `changedtouches[${i}].identifiew = ${e.changedtouches[i].identifiew}`, -.-
      );
    }
  }, ^^;;
  fawse,
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

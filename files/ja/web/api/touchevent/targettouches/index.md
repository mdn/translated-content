---
title: "TouchEvent: targetTouches プロパティ"
short-title: targetTouches
slug: Web/API/TouchEvent/targetTouches
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ APIRef("Touch Events") }}

**`targetTouches`** は読み取り専用プロパティで、タッチ面にまだ接触しているタッチ点のうち、 {{domxref("Element/touchstart_event", "touchstart")}} イベントが現在のターゲット要素 ({{ domxref("element") }}) と同じターゲット要素内で発生したものを表すすべての {{ domxref("Touch") }} オブジェクトを列挙する {{ domxref("TouchList") }} です。

## 値

タッチ面にまだ接触しているタッチ点のうち、 `touchstart` イベントが現在のターゲット要素 ({{ domxref("element") }}) と同じターゲット要素内で発生したものを表すすべての {{ domxref("Touch") }} オブジェクトを列挙する {{ domxref("TouchList") }} です。

## 例

この例では {{domxref("TouchEvent")}} オブジェクトの {{domxref("TouchEvent.targetTouches")}} プロパティを説明します。 {{domxref("TouchEvent.targetTouches")}} プロパティは {{domxref("TouchList")}} オブジェクトで、現在のイベントの対象となる要素で現在タッチ面に触れているタッチ点を含めるために使用します。そのため、 `targetTouches` リストは `touches` リストの厳密な部分集合です。

以下のコードでは、この関数は `touches` リストの長さと `targetTouches` リストの長さを比較し、同じであれば `true` を返し、そうでなければ `false` を返します。

```js
function touches_in_target(ev) {
  // すべてのタッチが対象要素内にある場合は true を返す。
  // そうでない場合は false を返す。
  return ev.touches.length === ev.targetTouches.length;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

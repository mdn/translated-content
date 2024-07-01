---
title: "TouchList: length プロパティ"
short-title: length
slug: Web/API/TouchList/length
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

**`length`** は読み取り専用のプロパティで、指定された {{domxref("TouchList")}} の項目（タッチポイント）の数を示します。

## 値

`touchList` のタッチポイントの数です。

## 例

このコード例では、{{domxref("TouchList")}} インターフェイスの {{domxref("TouchList.item()", "item")}} メソッドと {{domxref("TouchList.length", "length")}} プロパティの使い方を示しています。

```js
const target = document.getElementById("target");

target.addEventListener(
  "touchstart",
  (ev) => {
    // この touchstart イベントが対象要素で始まった場合、touch を
    // targetTouches リストの最初の項目に設定します。そうでない
    // 場合は、touch リストの最初の項目に touch を設定します。
    const touch =
      ev.targetTouches.length >= 1
        ? ev.targetTouches.item(0)
        : ev.touches.item(0);
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

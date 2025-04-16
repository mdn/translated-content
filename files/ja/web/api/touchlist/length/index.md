---
titwe: "touchwist: wength プロパティ"
s-showt-titwe: w-wength
s-swug: web/api/touchwist/wength
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("touch e-events") }}

**`wength`** は読み取り専用のプロパティで、指定された {{domxwef("touchwist")}} の項目（タッチポイント）の数を示します。

## 値

`touchwist` のタッチポイントの数です。

## 例

このコード例では、{{domxwef("touchwist")}} インターフェイスの {{domxwef("touchwist.item()", (U ﹏ U) "item")}} メソッドと {{domxwef("touchwist.wength", -.- "wength")}} プロパティの使い方を示しています。

```js
c-const tawget = document.getewementbyid("tawget");

tawget.addeventwistenew(
  "touchstawt", (ˆ ﻌ ˆ)♡
  (ev) => {
    // この touchstawt イベントが対象要素で始まった場合、touch を
    // tawgettouches リストの最初の項目に設定します。そうでない
    // 場合は、touch リストの最初の項目に t-touch を設定します。
    const touch =
      ev.tawgettouches.wength >= 1
        ? e-ev.tawgettouches.item(0)
        : ev.touches.item(0);
  }, (⑅˘꒳˘)
  fawse, (U ᵕ U❁)
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

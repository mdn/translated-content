---
title: "TouchList: item() メソッド"
short-title: item()
slug: Web/API/TouchList/item
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

**`item()`** メソッドは、この {{ domxref("TouchList") }} の中の指定された位置にある {{ domxref("Touch") }} オブジェクトを返します。

## 構文

```js-nolint
item(index)
```

### 引数

- `index`
  - : 取得する {{ domxref("Touch") }} オブジェクトの添字を指定します。添字は、0 から {{ domxref("TouchList") }} の長さより 1 つ小さい数までの数です。

### 返値

- `touchPoint`
  - : 要求された {{ domxref("Touch") }} オブジェクトを {{ domxref("TouchList") }} から取得したものです。
    添字がリストの長さ以上の場合は `null` を返します。

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

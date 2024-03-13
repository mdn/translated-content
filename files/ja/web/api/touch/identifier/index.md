---
title: "Touch: identifier プロパティ"
short-title: identifier
slug: Web/API/Touch/identifier
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

**`Touch.identifier`** はタッチ面に接触した点を識別する固有の値を返します。この値は、タッチ面上でのこの指（またはスタイラス）の動きに関わるすべてのイベントに対して、タッチ面から離れるまで一貫したものです。

## 値

`long` で、 {{ domxref("Touch") }} オブジェクトの固有の ID を表します。

## 例

```js
someElement.addEventListener(
  "touchmove",
  (e) => {
    // 最後のイベント以降に変更されたタッチ点のリストを反復処理し、
    // 各タッチ点の識別子を出力する。
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

---
title: Touch.identifier
slug: Web/API/Touch/identifier
---

{{ APIRef("Touch Events") }}{{SeeCompatTable}}

**`Touch.identifier`** はタッチ面に接触した点を識別する固有の値を返します。この値は、タッチ面上でのこの指 (またはスタイラス) の動きに関わるすべてのイベントに対して、タッチ面から離れるまで一貫したものです。

## 構文

```
touchItem.identifier;
```

### 返値

`long` で、 {{ domxref("Touch") }} オブジェクトの固有の ID を表します。

## 例

```js
someElement.addEventListener(
  "touchmove",
  function (e) {
    // Iterate through the list of touch points that changed
    // since the last event and print each touch point's identifier.
    for (var i = 0; i < e.changedTouches.length; i++) {
      console.log(
        "changedTouches[" +
          i +
          "].identifier = " +
          e.changedTouches[i].identifier,
      );
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Touch.identifier")}}

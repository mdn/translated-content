---
title: DOMRect.fromRect()
slug: Web/API/DOMRect/fromRect_static
---

{{APIRef("Geometry Interfaces")}}

**`fromRect()`** は {{domxref("DOMRect")}} オブジェクトの静的メソッドで、新しい `DOMRect` オブジェクトを指定した位置と寸法で作成します。

## 構文

```js
fromRect();
fromRect(rectangle);
```

### 引数

- `rectangle` {{optional_inline}}

  - : 矩形の位置と寸法を指定するオブジェクト。すべてのプロパティは既定で `0` です。プロパティは次の通りです。

    - `x`: 矩形の左端の座標です。
    - `y`: 矩形の上端の座標です。
    - `width`: 矩形の幅です。
    - `height`: 矩形の高さです。

### 返値

{{domxref("DOMRect")}} のインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

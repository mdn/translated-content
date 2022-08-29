---
title: DOMRectReadOnly.fromRect()
slug: Web/API/DOMRectReadOnly/fromRect
tags:
  - API
  - DOMRectReadOnly
  - 位置
  - メソッド
  - リファレンス
browser-compat: api.DOMRectReadOnly.fromRect
translation_of: Web/API/DOMRectReadOnly/fromRect
---
{{APIRef("Geometry Interfaces")}}

**`fromRect()`** は {{domxref("DOMRectReadOnly")}} オブジェクトの静的メソッドで、指定された位置と大きさで新しい `DOMRectReadOnly` オブジェクトを作成します。

## 構文

```js
fromRect()
fromRect(rectangle)
```

### 引数

- `rectangle` {{optional_inline}}

  - : 矩形の位置と寸法を指定するオブジェクト。すべてのプロパティは既定で `0` です。プロパティは次の通りです。

    - `x`: 矩形の左端の座標です。
    - `y`: 矩形の上端の座標です。
    - `width`: 矩形の幅です。
    - `height`: 矩形の高さです。

### 返値

{{domxref("DOMRectReadOnly")}} のインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

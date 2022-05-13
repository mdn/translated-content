---
title: DOMRectReadOnly()
slug: Web/API/DOMRectReadOnly/DOMRectReadOnly
tags:
  - API
  - コンストラクター
  - DOM
  - DOMRectReadOnly
  - 位置
  - リファレンス
browser-compat: api.DOMRectReadOnly.DOMRectReadOnly
translation_of: Web/API/DOMRectReadOnly/DOMRectReadOnly
---
{{APIRef("Geometry Interfaces")}}

**`DOMRectReadOnly()`** コンストラクターは新しい {{domxref("DOMRectReadOnly")}} オブジェクトを生成します。

## 構文

```js
new DOMRectReadOnly(x, y, width, height)
```

### 引数

- _x_
  - :  `DOMRectReadOnly` の原点の `x` 座標です。
- _y_
  - :  `DOMRectReadOnly` の原点の `y` 座標です。

- _width_
  - : `DOMRectReadOnly` の幅です。
- _height_
  - : `DOMRectReadOnly` の高さです。

## 例

新しい `DOMPoint` を作成するには、次のようなコード行を実行します。

```js
const myDOMRect = new DOMRectReadOnly(0, 0, 100, 100)
// 'myDOMRect' をコンソールで実行すると、次の行が返ります。
// DOMRect { x: 0, y: 0, width: 100, height: 100, top: 0, right: 100, bottom: 100, left: 0 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}

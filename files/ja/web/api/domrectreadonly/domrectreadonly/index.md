---
title: "DOMRectReadOnly: DOMRectReadOnly() コンストラクター"
short-title: DOMRectReadOnly()
slug: Web/API/DOMRectReadOnly/DOMRectReadOnly
l10n:
  sourceCommit: a631fd40bdc682a82be57be9932c9853a86ac1b5
---

{{APIRef("Geometry Interfaces")}}

**`DOMRectReadOnly()`** コンストラクターは新しい {{domxref("DOMRectReadOnly")}} オブジェクトを生成します。

## 構文

```js-nolint
new DOMRectReadOnly(x, y, width, height)
```

### 引数

- `x`
  - : `DOMRectReadOnly` の原点の `x` 座標です。
- `y`
  - : `DOMRectReadOnly` の原点の `y` 座標です。
- `width`
  - : `DOMRectReadOnly` の幅です。
- `height`
  - : `DOMRectReadOnly` の高さです。

## 例

新しい `DOMRectReadOnly` を作成するには、次のようなコード行を実行します。

```js
const myDOMRect = new DOMRectReadOnly(0, 0, 100, 100);
// 'myDOMRect' をコンソールで実行すると、次の行が返ります。
// DOMRectReadOnly { x: 0, y: 0, width: 100, height: 100, top: 0, right: 100, bottom: 100, left: 0 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}

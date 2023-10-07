---
title: DOMPoint()
slug: Web/API/DOMPoint/DOMPoint
---

{{APIRef("DOM")}}

**`DOMPoint()`** コンストラクターは、プロパティの一部または全部の値を指定して、新しい {{domxref("DOMPoint")}} オブジェクトを作成し、それを返します。

また、静的関数 {{domxref("DOMPoint.fromPoint()")}} を呼び出しても `DOMPoint` を作成することができます。この関数は、 `DOMPoint` や {{domxref("DOMPointReadOnly")}} など、必要な引数を持つ任意のオブジェクトを受け取ることができます。

## 構文

```js
new DOMPoint();
new DOMPoint(x);
new DOMPoint(x, y);
new DOMPoint(x, y, z);
new DOMPoint(x, y, z, w);
```

### 引数

- {{domxref("DOMPoint.x")}}
  - : 新しい `DOMPoint` の水平座標である `x` です。
- {{domxref("DOMPoint.y")}}
  - : 新しい `DOMPoint` の垂直座標である `y` です。
- {{domxref("DOMPoint.z")}}
  - : 新しい `DOMPoint` の奥行き座標である `z` です。
- {{domxref("DOMPoint.w")}}
  - : 新しい `DOMPoint` の視点位置である `w` です。

## 例

この例では、現在のウィンドウの左上隅を表す `DOMPoint` を作成し、最初の点を基準にして、垂直方向と水平方向に 100 ピクセルずつずらした 2 つ目の点を作成します。

```js
var windTopLeft = new DOMPoint(window.screenX, window.screenY);
var newTopLeft = DOMPoint.fromPoint(windTopLeft);
newTopLeft.x += 100;
newTopLeft.y += 100;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMPointReadOnly.DOMPointReadOnly", "DOMPointReadOnly()")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}

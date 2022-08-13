---
title: CanvasRenderingContext2D.removeHitRegion()
slug: Web/API/CanvasRenderingContext2D/removeHitRegion
translation_of: Web/API/CanvasRenderingContext2D/removeHitRegion
---
{{APIRef}} {{SeeCompatTable}}

Canvas 2D API の**`CanvasRenderingContext2D.removeHitRegion()`** メソッドは、canvas から与えられたヒット領域を削除します。

## 構文

    void ctx.removeHitRegion(id);

### パラメータ

- id
  - : 削除する領域の`id`をあらわす{{domxref("DOMString")}}。

## 例

### `removeHitRegion`メソッドを使う

これは、`removeHitRegion`を使った簡単なコードです。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// ヒット領域を指定
ctx.addHitRegion({id: "eyes"});

// canvasからヒット領域を削除
ctx.removeHitRegion("eyes");
```

## 仕様

| 仕様                                                                                                                                                             | 策定状況                         | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-removehitregion", "CanvasRenderingContext2D.removeHitRegion")}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザー実装状況

{{Compat("api.CanvasRenderingContext2D.removeHitRegion")}}

## 関連情報

- {{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}
- {{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}

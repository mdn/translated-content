---
title: CanvasRenderingContext2D.clearHitRegions()
slug: Web/API/CanvasRenderingContext2D/clearHitRegions
translation_of: Web/API/CanvasRenderingContext2D/clearHitRegions
---
{{APIRef}} {{SeeCompatTable}}

Canvas 2D API の**`CanvasRenderingContext2D.clearHitRegions()`**メソッドは canvas からすべてのヒット領域を削除します。

## 構文

    void ctx.clearHitRegions();

## 例

### `clearHitRegions`メソッドを使う

これは、`clearHitRegions`メソッドを使った簡単なコードです。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// ヒット領域をいくつか指定
ctx.addHitRegion({id: "eyes"});
ctx.addHitRegion({id: "nose"});
ctx.addHitRegion({id: "mouth"});

// canvasからすべて削除
ctx.clearHitRegions();
```

## 仕様

| 仕様                                                                                                                                                             | 策定状況                         | コメント |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-clearhitregions", "CanvasRenderingContext2D.clearHitRegions")}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザー実装状況

{{Compat("api.CanvasRenderingContext2D.clearHitRegions")}}

## 関連情報

- {{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}
- {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}

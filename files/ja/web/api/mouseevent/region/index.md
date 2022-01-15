---
title: MouseEvent.region
slug: Web/API/MouseEvent/region
tags:
  - API
  - Canvas
  - DOM イベント
  - MouseEvent
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.MouseEvent.region
---
{{APIRef("DOM Events")}}

**`MouseEvent.region`** は読み取り専用のプロパティで、イベントが影響する [canvas のヒット領域](/ja/docs/Web/API/CanvasRenderingContext2D/addHitRegion)の id を返します。
影響するヒット領域がなければ、 `null` を返します。

## 値

{{domxref("DOMString")}} で、ヒット領域の id を表します。

## 例

`event.region` を `CanvasRenderingContext2D.addHitRegion()` メソッドと組み合わせた例です。

```html
<canvas id="canvas"></canvas>

<script>
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
ctx.fill();
ctx.addHitRegion({id: "circle"});

canvas.addEventListener("mousemove", function(event){
  if(event.region) {
    console.log("hit region: " + event.region);
  }
});
</script>
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent")}}
- {{domxref("CanvasRenderingContext2D.addHitRegion()")}}

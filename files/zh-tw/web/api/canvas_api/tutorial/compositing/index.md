---
title: 合成效果
slug: Web/API/Canvas_API/Tutorial/Compositing
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

在前述的範例中，新繪製的圖形總會覆蓋在之前的圖形上，對大多數情況來說這相當正常，不過它也限制了圖形繪製的順序。其實我們可以透過 globalCompositeOperation 屬性來改變這項預設行為。

## `globalCompositeOperation`

利用 globalCompositeOperation，我們可以將新圖形繪製在舊圖形之下、遮蓋部分區域、清除畫布部分區域 (不同於 clearRect() 函式只能清除矩形區域)。

- `globalCompositeOperation = type`
  - : type 字串可指定為以下 12 種合成設定之一，每一種合成設定均將套用到新繪製的圖形上。

## 裁剪路徑

裁剪路徑就像是一般畫布圖形繪圖，但就如同遮罩一樣，會蓋掉不需要的部分，如右圖所示。紅邊星星是我們的裁剪路徑，在路徑區域以外部分都不會出現在畫布上。

![](canvas_clipping_path.png)

和上述 globalCompositeOperation 相比，可以發現 source-in 和 source-atop 這兩種構圖組合所達到的效果，和裁剪路徑類似，而其中最大差異在於裁剪路徑不需加入新圖形，消失的部分也不會出現在畫布上，所以，如果想要限定繪圖區域，裁剪路徑會是更理想的作法。

在[繪畫圖形](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_paths)一章中，我們只提到 stroke() 和 fill() 函式，但其實還有第三個函式，那就是 clip() 函式。

- `clip()`
  - : 轉換目前繪圖路徑為裁剪路徑。

呼叫 clip() 除了會替代 closePath() 來關閉路徑之外，還會轉換目前填滿或勾勒繪圖路徑為裁剪路徑。

{{HTMLElement("canvas")}} 畫布預設有一個等同於本身大小的裁剪路徑，等同於無裁剪效果。

### `clip` 範例

本範例使用了圓形的裁剪路徑，來限定畫星星時的繪圖區域。

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // 建立圓形裁剪路徑
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // 繪製背景
  const lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, "#232256");
  lingrad.addColorStop(1, "#143778");

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  generateStars(ctx);
}

function generateStars(ctx) {
  for (let j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.translate(
      75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150),
    );
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }
}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (let i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

一開始我們先畫了一個黑色矩形作為畫布背景，然後移動畫布原點到中央，接著我們繪製弧線並呼叫 clip()，藉以建立圓形的裁剪路徑。畫布儲存狀態亦可儲存裁剪路徑。若要保留原本的裁剪路徑，則可於繪製新的裁剪路徑之前，先行儲存畫布狀態。

繪製裁剪路徑之後，所產生的所有圖形都只會出現在路徑以內，從後來繪製的漸層背景中可看出此特性。我們用自訂的 drawStar() 函數產生 50 個隨機散佈、大小不一的星星。這些星星同樣只會出現在裁剪路徑的範圍之內。

{{EmbedLiveSample("clip 範例", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

---
title: 도형 합성 예제
slug: Web/API/Canvas_API/Tutorial/Compositing/Example
---

{{DefaultAPISidebar("Canvas API")}}

이 샘플 프로그램에서는 여러 가지 [도형 합성 방법](/ko/docs/Web/API/CanvasRenderingContext2D.globalCompositeOperation)을 보여줍니다. 출력은 다음과 같습니다:

{{ EmbedLiveSample('도형_합성_예제', '100%', '7250', '', 'Web/HTML/Canvas/Tutorial/Compositing/Example') }}

## 도형 합성 예제

다음 코드에서는 프로그램의 나머지 부분에서 사용할 전역 값을 설정합니다.

```js
var canvas1 = document.createElement("canvas");
var canvas2 = document.createElement("canvas");
var gco = [
  "source-over",
  "source-in",
  "source-out",
  "source-atop",
  "destination-over",
  "destination-in",
  "destination-out",
  "destination-atop",
  "lighter",
  "copy",
  "xor",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
].reverse();
var gcoText = [
  "기본 설정으로, 새로운 도형이 원래 도형 위에 그려집니다.",
  "새로운 도형이 원래 도형과 겹치는 부분에만 그려지며, 나머지는 투명하게 설정됩니다.",
  "새로운 도형이 원래 도형과 겹치지 않는 부분에만 그려집니다.",
  "새로운 도형이 원래 도형과 겹치는 부분에만 그려집니다.",
  "새로운 도형이 원래 도형 아래에 그려집니다.",
  "원래 도형 중 새로운 도형과 겹치는 부분이 유지되며, 나머지는 투명하게 설정됩니다.",
  "원래 도형 중 새로운 도형과 겹치지 않는 부분이 유지됩니다.",
  "원래 도형 중 새로운 도형과 겹치는 부분만 유지됩니다. 새로운 도형은 원래 도형 아래에 그려집니다.",
  "두 도형이 겹치는 곳의 색상이 두 색상값을 합한 값으로 결정됩니다.",
  "새로운 도형만 그려집니다.",
  "두 도형이 겹치는 곳이 투명하게 변하며, 나머지는 평범하게 그려집니다.",
  "위쪽 레이어의 픽셀값이 아래쪽 레이어의 해당하는 픽셀값과 곱해지며, 결과적으로 어두운 이미지가 생성됩니다.",
  "픽셀값을 뒤집고 곱한 다음 도로 뒤집습니다. 결과적으로 밝은 이미지가 생성됩니다(multiply의 반대).",
  "multiply와 screen의 조합입니다. 아래쪽 레이어의 어두운 부분은 더 어두워지고, 밝은 부분은 더 밝아집니다.",
  "두 레이어 중 어두운 픽셀값을 취합니다.",
  "두 레이어 중 밝은 픽셀값을 취합니다.",
  "아래쪽 레이어의 픽셀값을 위쪽 레이어의 뒤집힌 픽셀값으로 나눕니다.",
  "아래쪽 레이어의 뒤집힌 픽셀값을 위쪽 레이어의 픽셀값으로 나누고, 그 값을 도로 뒤집습니다.",
  "overlay와 같이 multiply와 screen의 조합이지만, 위아래 레이어의 순서가 바뀐 상태입니다.",
  "조금 더 부드러운 hard-light입니다. 완전한 검은색/흰색에서 무조건 완전한 검은색/흰색이 나오지 않습니다.",
  "한쪽 레이어의 픽셀값에서 다른 쪽 레이어의 픽셀값을 뺍니다. 빼는 순서는 결과값이 양수가 나오는 순서입니다.",
  "difference와 비슷하지만 대비가 덜합니다.",
  "아래쪽 레이어의 채도(chroma)와 명도(luma)를 보존하고 위쪽 레이어의 색상(hue)을 적용합니다.",
  "아래쪽 레이어의 색상과 명도를 보존하고 위쪽 레이어의 채도를 적용합니다.",
  "아래쪽 레이어의 명도를 보존하고 위쪽 레이어의 색상과 채도를 적용합니다.",
  "아래쪽 레이어의 색상과 채도를 보존하고 위쪽 레이어의 명도를 적용합니다.",
].reverse();
var width = 320;
var height = 340;
```

### 메인 프로그램

페이지를 불러오고 나면 다음 코드에서 예제를 준비하고 실행합니다:

```js
window.onload = function () {
  // lum in sRGB
  var lum = {
    r: 0.33,
    g: 0.33,
    b: 0.33,
  };
  // 캔버스 크기 변경
  canvas1.width = width;
  canvas1.height = height;
  canvas2.width = width;
  canvas2.height = height;
  lightMix();
  colorSphere();
  runComposite();
  return;
};
```

또한 다음 코드의 `runComposite()`가 여러 가지 작업을 처리하며, 어려운 부분은 보조 함수를 사용합니다.

```js
function createCanvas() {
  var canvas = document.createElement("canvas");
  canvas.style.background = "url(" + op_8x8.data + ")";
  canvas.style.border = "1px solid #000";
  canvas.style.margin = "5px";
  canvas.width = width / 2;
  canvas.height = height / 2;
  return canvas;
}

function runComposite() {
  var dl = document.createElement("dl");
  document.body.appendChild(dl);
  while (gco.length) {
    var pop = gco.pop();
    var dt = document.createElement("dt");
    dt.textContent = pop;
    dl.appendChild(dt);
    var dd = document.createElement("dd");
    var p = document.createElement("p");
    p.textContent = gcoText.pop();
    dd.appendChild(p);

    var canvasToDrawOn = createCanvas();
    var canvasToDrawFrom = createCanvas();
    var canvasToDrawResult = createCanvas();

    var ctx = canvasToDrawResult.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.globalCompositeOperation = pop;
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText(pop, 5, height / 2 - 5);
    ctx.restore();

    var ctx = canvasToDrawOn.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("기존 도형", 5, height / 2 - 5);
    ctx.restore();

    var ctx = canvasToDrawFrom.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("새로운 도형", 5, height / 2 - 5);
    ctx.restore();

    dd.appendChild(canvasToDrawOn);
    dd.appendChild(canvasToDrawFrom);
    dd.appendChild(canvasToDrawResult);

    dl.appendChild(dd);
  }
}
```

### 보조 함수

이 프로그램에서는 몇몇 보조 함수를 사용합니다.

```js
var lightMix = function () {
  var ctx = canvas2.getContext("2d");
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,1)";
  ctx.arc(100, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "rgba(0,0,255,1)";
  ctx.arc(220, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "rgba(0,255,0,1)";
  ctx.arc(160, 100, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = "#f00";
  ctx.fillRect(0, 0, 30, 30);
  ctx.fill();
};
```

```js
var colorSphere = function (element) {
  var ctx = canvas1.getContext("2d");
  var width = 360;
  var halfWidth = width / 2;
  var rotate = (1 / 360) * Math.PI * 2; // per degree
  var offset = 0; // scrollbar offset
  var oleft = -20;
  var otop = -20;
  for (var n = 0; n <= 359; n++) {
    var gradient = ctx.createLinearGradient(
      oleft + halfWidth,
      otop,
      oleft + halfWidth,
      otop + halfWidth,
    );
    var color = Color.HSV_RGB({ H: (n + 300) % 360, S: 100, V: 100 });
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(
      0.7,
      "rgba(" + color.R + "," + color.G + "," + color.B + ",1)",
    );
    gradient.addColorStop(1, "rgba(255,255,255,1)");
    ctx.beginPath();
    ctx.moveTo(oleft + halfWidth, otop);
    ctx.lineTo(oleft + halfWidth, otop + halfWidth);
    ctx.lineTo(oleft + halfWidth + 6, otop);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.translate(oleft + halfWidth, otop + halfWidth);
    ctx.rotate(rotate);
    ctx.translate(-(oleft + halfWidth), -(otop + halfWidth));
  }
  ctx.beginPath();
  ctx.fillStyle = "#00f";
  ctx.fillRect(15, 15, 30, 30);
  ctx.fill();
  return ctx.canvas;
};
```

```js
// HSV (1978) = H: Hue / S: Saturation / V: Value
Color = {};
Color.HSV_RGB = function (o) {
  var H = o.H / 360,
    S = o.S / 100,
    V = o.V / 100,
    R,
    G,
    B;
  var A, B, C, D;
  if (S == 0) {
    R = G = B = Math.round(V * 255);
  } else {
    if (H >= 1) H = 0;
    H = 6 * H;
    D = H - Math.floor(H);
    A = Math.round(255 * V * (1 - S));
    B = Math.round(255 * V * (1 - S * D));
    C = Math.round(255 * V * (1 - S * (1 - D)));
    V = Math.round(255 * V);
    switch (Math.floor(H)) {
      case 0:
        R = V;
        G = C;
        B = A;
        break;
      case 1:
        R = B;
        G = V;
        B = A;
        break;
      case 2:
        R = A;
        G = V;
        B = C;
        break;
      case 3:
        R = A;
        G = B;
        B = V;
        break;
      case 4:
        R = C;
        G = A;
        B = V;
        break;
      case 5:
        R = V;
        G = A;
        B = B;
        break;
    }
  }
  return {
    R: R,
    G: G,
    B: B,
  };
};

var createInterlace = function (size, color1, color2) {
  var proto = document.createElement("canvas").getContext("2d");
  proto.canvas.width = size * 2;
  proto.canvas.height = size * 2;
  proto.fillStyle = color1; // top-left
  proto.fillRect(0, 0, size, size);
  proto.fillStyle = color2; // top-right
  proto.fillRect(size, 0, size, size);
  proto.fillStyle = color2; // bottom-left
  proto.fillRect(0, size, size, size);
  proto.fillStyle = color1; // bottom-right
  proto.fillRect(size, size, size, size);
  var pattern = proto.createPattern(proto.canvas, "repeat");
  pattern.data = proto.canvas.toDataURL();
  return pattern;
};

var op_8x8 = createInterlace(8, "#FFF", "#eee");
```

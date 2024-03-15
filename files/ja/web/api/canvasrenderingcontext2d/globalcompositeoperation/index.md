---
title: "CanvasRenderingContext2D: globalCompositeOperation プロパティ"
short-title: globalCompositeOperation
slug: Web/API/CanvasRenderingContext2D/globalCompositeOperation
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

**`CanvasRenderingContext2D.globalCompositeOperation`** はキャンバス 2D API のプロパティで、新たな図形を描くときに適用する合成演算の種類を定めます。

[キャンバスのチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)の[合成とクリッピング](/ja/docs/Web/API/Canvas_API/Tutorial/Compositing)の章も参照してください。

## 値

使用する合成演算または混合演算を示す文字列。以下の値のいずれかを指定します。

- `"source-over"`
  - : これは既定の設定で、既存のキャンバスのコンテンツの上に新しい図形を描画します。
- `"source-in"`
  - : 新しい図形は、新しい図形と出力先キャンバスが重なる部分のみ描画されます。それ以外はすべて透明になります。
- `"source-out"`
  - : 新しい図形は、既存のキャンバスのコンテンツと重ならない部分が描画されます。
- `"source-atop"`
  - : 新しい図形は、既存のキャンバスのコンテンツと重なる部分のみ描画されます。
- `"destination-over"`
  - : 新しい図形は既存のキャンバスのコンテンツの背後に描画されます。
- `"destination-in"`
  - : 新しい図形と既存のキャンバスのコンテンツが重なる部分には、既存のキャンバスのコンテンツが残ります。それ以外はすべて透明になります。
- `"destination-out"`
  - : 既存のコンテンツは、新しい図形と重ならない部分が保持されます。
- `"destination-atop"`
  - : 既存のキャンバスは、新しい図形と重なる部分のみ保持されます。新しい図形はキャンバスのコンテンツの背後に描画されます。
- `"lighter"`
  - : 両方の図形が重なる部分は、色値を加算して色を決定します。
- `"copy"`
  - : 新しい図形だけが表示されます。
- `"xor"`
  - : 図形は、両方が重なる部分は透明で、それ以外の部分は普通に描画されます。
- `"multiply"`
  - : 上位レイヤーのピクセルと下位レイヤーの対応するピクセルが乗算されます。その結果、暗い画像になります。
- `"screen"`
  - : ピクセルが反転され、乗算され、また反転されます。その結果、より明るい画像が得られます（`multiply` の逆）。
- `"overlay"`
  - : `multiply` と `screen` の組み合わせです。ベースレイヤーの暗い部分はより暗く、明るい部分はより明るくなります。
- `"darken"`
  - : 両方のレイヤーの暗い方のピクセルを保持します。
- `"lighten"`
  - : 両方のレイヤーの明るい方のピクセルを保持します。
- `"color-dodge"`
  - : 下位レイヤーを上位レイヤーの反転で除算します。
- `"color-burn"`
  - : 反転した下位レイヤーを上位レイヤーで除算し、その結果を反転します。
- `"hard-light"`
  - : `overlay` と同じく、 `multiply` と `screen` の組み合わせですが、上位レイヤーと下位レイヤーが入れ替わります。
- `"soft-light"`
  - : ハードライトのソフトバージョン。純粋な黒や白は、純粋な黒や白にはなりません。
- `"difference"`
  - : 上位レイヤーから下位レイヤーを減算し（言い換えれば丸め）、常に正の値を取得します。
- `"exclusion"`
  - : `difference` と似ていますが、コントラストは低めです。
- `"hue"`
  - : 上位レイヤーの色相を採用しつつ、下位レイヤーの輝度と彩度を保持します。
- `"saturation"`
  - : 上位レイヤーの彩度を採用しつつ、下位レイヤーの輝度と色相を保持します。
- `"color"`
  - : 上位レイヤーの色相と彩度を採用しつつ、下位レイヤーの輝度を保持します。
- `"luminosity"`
  - : 上位レイヤーの輝度を採用しつつ、下位レイヤーの色相と彩度を保持します。

## 例

### 合成演算の変更

この例では `globalCompositeOperation` プロパティを使用して、 2 つの矩形が重なり合う部分で自分自身を除外して描画しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.globalCompositeOperation = "xor";

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Changing_the_composite_operation', 700, 180) }}

### すべての値のデモ

#### グローバル値

このコードでは、プログラムの残りの部分で使用するグローバル値を設定します。

```js
const canvas1 = document.createElement("canvas");
const canvas2 = document.createElement("canvas");
const gco = [
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
const gcoText = [
  "これは既定の設定で、既存のキャンバスのコンテンツの上に新しい図形を描画します。",
  "新しい図形は、新しい図形と出力先キャンバスが重なる部分のみ描画されます。それ以外はすべて透明になります。",
  "新しい図形は、既存のキャンバスのコンテンツと重ならない部分が描画されます。",
  "新しい図形は、既存のキャンバスのコンテンツと重なる部分のみ描画されます。",
  "新しい図形は既存のキャンバスのコンテンツの背後に描画されます。",
  "新しい図形と既存のキャンバスのコンテンツが重なる部分には、既存のキャンバスのコンテンツが残ります。それ以外はすべて透明になります。",
  "既存のコンテンツは、新しい図形と重ならない部分が保持されます。",
  "既存のキャンバスは、新しい図形と重なる部分のみ保持されます。新しい図形はキャンバスのコンテンツの背後に描画されます。",
  "両方の図形が重なる部分は、色値を加算して色を決定します。",
  "新しい図形だけが表示されます。",
  "図形は、両方が重なる部分は透明で、それ以外の部分は普通に描画されます。",
  "上位レイヤーのピクセルと下位レイヤーの対応するピクセルが乗算されます。その結果、暗い画像になります。",
  "ピクセルが反転され、乗算され、また反転されます。その結果、より明るい画像が得られます（multiply の逆）。",
  "multiply と screen の組み合わせです。ベースレイヤーの暗い部分はより暗く、明るい部分はより明るくなります。",
  "両方のレイヤーの暗い方のピクセルを保持します。",
  "両方のレイヤーの明るい方のピクセルを保持します。",
  "下位レイヤーを上位レイヤーの反転で除算します。",
  "反転した下位レイヤーを上位レイヤーで除算し、その結果を反転します。",
  "overlay と同じく、 multiply と screen の組み合わせですが、上位レイヤーと下位レイヤーが入れ替わります。",
  "ハードライトのソフトバージョン。純粋な黒や白は、純粋な黒や白にはなりません。",
  "上位レイヤーから下位レイヤーを減算し（言い換えれば丸め）、常に正の値を取得します。",
  "difference と似ていますが、コントラストは低めです。",
  "上位レイヤーの色相を採用しつつ、下位レイヤーの輝度と彩度を保持します。",
  "上位レイヤーの彩度を採用しつつ、下位レイヤーの輝度と色相を保持します。",
  "上位レイヤーの色相と彩度を採用しつつ、下位レイヤーの輝度を保持します。",
  "上位レイヤーの輝度を採用しつつ、下位レイヤーの色相と彩度を保持します。",
].reverse();
const width = 320;
const height = 340;
```

#### メインプログラム

ページが読み込まれると、このコードが実行して、この例を設定し、実行します。

```js
window.onload = () => {
  // lum in sRGB
  const lum = {
    r: 0.33,
    g: 0.33,
    b: 0.33,
  };
  // resize canvas
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

そしてこのコード、 `runComposite()` は、作業の大部分を処理し、難しい部分は多くのユーティリティ関数に頼っています。

```js
function createCanvas() {
  const canvas = document.createElement("canvas");
  canvas.style.background = `url(${op_8x8.data})`;
  canvas.style.border = "1px solid #000";
  canvas.style.margin = "5px";
  canvas.width = width / 2;
  canvas.height = height / 2;
  return canvas;
}

function runComposite() {
  const dl = document.createElement("dl");
  document.body.appendChild(dl);
  while (gco.length) {
    const pop = gco.pop();
    const dt = document.createElement("dt");
    dt.textContent = pop;
    dl.appendChild(dt);
    const dd = document.createElement("dd");
    const p = document.createElement("p");
    p.textContent = gcoText.pop();
    dd.appendChild(p);

    const canvasToDrawOn = createCanvas();
    const canvasToDrawFrom = createCanvas();
    const canvasToDrawResult = createCanvas();

    let ctx = canvasToDrawResult.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.globalCompositeOperation = pop;
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgb(0 0 0 / 80%)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText(pop, 5, height / 2 - 5);
    ctx.restore();

    ctx = canvasToDrawOn.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgb(0 0 0 / 80%)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("既存のコンテンツ", 5, height / 2 - 5);
    ctx.restore();

    ctx = canvasToDrawFrom.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgb(0 0 0 / 80%)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("新しいコンテンツ", 5, height / 2 - 5);
    ctx.restore();

    dd.appendChild(canvasToDrawOn);
    dd.appendChild(canvasToDrawFrom);
    dd.appendChild(canvasToDrawResult);

    dl.appendChild(dd);
  }
}
```

#### ユーティリティ関数

このプログラムは数多くのユーティリティ関数に頼っています。

```js
const lightMix = () => {
  const ctx = canvas2.getContext("2d");
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.beginPath();
  ctx.fillStyle = "rgb(255 0 0 / 100%)";
  ctx.arc(100, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "rgb(0 0 255 / 100%)";
  ctx.arc(220, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "rgb(0 255 0 / 100%)";
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
const colorSphere = (element) => {
  const ctx = canvas1.getContext("2d");
  const width = 360;
  const halfWidth = width / 2;
  const rotate = (1 / 360) * Math.PI * 2; // per degree
  const offset = 0; // scrollbar offset
  const oleft = -20;
  const otop = -20;
  for (let n = 0; n <= 359; n++) {
    const gradient = ctx.createLinearGradient(
      oleft + halfWidth,
      otop,
      oleft + halfWidth,
      otop + halfWidth,
    );
    const color = Color.HSV_RGB({ H: (n + 300) % 360, S: 100, V: 100 });
    gradient.addColorStop(0, "rgb(0 0 0 / 0%)");
    gradient.addColorStop(0.7, `rgb(${color.R} ${color.G} ${color.B} / 100%)`);
    gradient.addColorStop(1, "rgb(255 255 255 / 100%)");
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
Color.HSV_RGB = (o) => {
  const S = o.S / 100;
  let H = o.H / 360,
    V = o.V / 100;
  let R, G;
  let A, B, C, D;
  if (S === 0) {
    R = G = B = Math.round(V * 255);
  } else {
    if (H >= 1) H = 0;
    H *= 6;
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
  return { R, G, B };
};

const createInterlace = (size, color1, color2) => {
  const proto = document.createElement("canvas").getContext("2d");
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
  const pattern = proto.createPattern(proto.canvas, "repeat");
  pattern.data = proto.canvas.toDataURL();
  return pattern;
};

const op_8x8 = createInterlace(8, "#FFF", "#eee");
```

#### 結果

{{EmbedLiveSample("すべての値のデモ", "100%", 7250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalAlpha")}}

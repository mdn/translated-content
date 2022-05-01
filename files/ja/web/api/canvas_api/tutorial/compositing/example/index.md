---
title: 合成の例
slug: Web/API/Canvas_API/Tutorial/Compositing/Example
tags:
  - キャンバス
  - 例
  - グラフィック
  - HTML
  - HTML5
  - チュートリアル
translation_of: Web/API/Canvas_API/Tutorial/Compositing/Example
---
{{CanvasSidebar}}

このサンプルプログラムは、数々の[合成操作](/ja/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)を紹介するものです。出力結果は次のようになります。

{{EmbedLiveSample("Compositing_example", "100%", 7250)}}

<h2 id="Compositing_example">合成の例</h2>

このコードでは、プログラムの残りの部分で使用されるグローバルな値を設定します。

```js
var canvas1 = document.createElement("canvas");
var canvas2 = document.createElement("canvas");
var gco = [ 'source-over','source-in','source-out','source-atop',
            'destination-over','destination-in','destination-out','destination-atop',
            'lighter', 'copy','xor', 'multiply', 'screen', 'overlay', 'darken',
            'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light',
            'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'
          ].reverse();
var gcoText = [
'これが既定の設定です。新たな図形をすでにあるキャンバスの内容の上に描きます。',
'新たな図形は、その図形と描画先キャンバスの内容が重なり合う部分のみが描かれます。それ以外の部分は透明になります。',
'新たな図形は、その図形と描画先キャンバスの内容と重なり合わない部分のみが描画されます。',
'新たな図形は、その図形と描画先キャンバスの内容と重なり合う部分のみが描かれます。',
'新たな図形は、描画先キャンバスの内容の背後に描かれます。',
'描画先キャンバスの内容は、新たな図形と重なり合う部分だけが残ります。それ以外の部分は透明になります。',
'描画先キャンバスの内容は、新たな図形と重なり合わない部分だけが残ります。',
'描画先キャンバスの内容は、新たな図形と重なり合う部分だけが残ります。新たな図形は、その背後に描かれます。',
'新たな図形と描画先キャンバスの内容が重なる部分は、カラー値が加算されます。',
'新たな図形だけが描かれます。',
'新たな図形と描画先キャンバスの内容が重なり合う部分は透明になり、それ以外は通常通り描画されます。',
'新たな図形のピクセルは、対応する描画先キャンバスのピクセルとカラー値が乗算されます。その結果、各ピクセルのカラーは暗くなります。',
'ピクセルを反転し、乗算して、改めて反転します。その結果、各ピクセルのカラーは明るくなります（multiply の逆）。',
'multiply と screen を組み合わせます。新たな図形のピクセルより対応する描画先キャンバスのピクセルが、それぞれ暗いときは暗くし、明るければ明るくします。',
'両方のレイヤーの暗い方のピクセルを残します。',
'両方のレイヤーの明るい方のピクセルを残します。',
'下層のレイヤーを、上層のレイヤーの反転値で除算します。',
'下層のレイヤーを上層のレイヤーで除算し、それを反転させたものを結果とします。',
'multiply と screen を overlay のように組み合わせますが、上層と下層が逆になります。',
'hard-light を柔らかくします。純粋な黒と白は、真っ黒や真っ白にはなりません。',
'上層のレイヤーから下層のレイヤーを引くか、またはその逆を行い、常に正の値を取得します。',
'difference と似ていますが、コントラストを弱めます。',
'下層の輝度と彩度を保ち、上層の色相に合わせます。',
'下層の輝度と色相を保ち、上層の彩度に合わせます。',
'下層の輝度を保ち、上等の色相と彩度に合わせます。',
'下層の色相と彩度を保ち、上層の輝度に合わせます。'
          ].reverse();
var width = 320;
var height = 340;
```

### メインプログラム

ページが読み込まれるとき、このコードが実行されてセットアップを行い、例を実行します。

```js
window.onload = function() {
    // lum in sRGB
    var lum = {
        r: 0.33,
        g: 0.33,
        b: 0.33
    };
    // resize canvas
    canvas1.width = width;
    canvas1.height = height;
    canvas2.width = width;
    canvas2.height = height;
    lightMix()
    colorSphere();
    runComposite();
    return;
};
```

そして、このコード `runComposite()` が仕事の大部分を処理し、難しい部分は多くのユーティリティ関数に頼っています。

```js
function createCanvas() {
    var canvas = document.createElement("canvas");
    canvas.style.background = "url("+op_8x8.data+")";
    canvas.style.border = "1px solid #000";
    canvas.style.margin = "5px";
    canvas.width = width/2;
    canvas.height = height/2;
    return canvas;
}

function runComposite() {
    var dl = document.createElement("dl");
    document.body.appendChild(dl);
    while(gco.length) {
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

        var ctx = canvasToDrawResult.getContext('2d');
        ctx.clearRect(0, 0, width, height)
        ctx.save();
        ctx.drawImage(canvas1, 0, 0, width/2, height/2);
        ctx.globalCompositeOperation = pop;
        ctx.drawImage(canvas2, 0, 0, width/2, height/2);
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0, height/2 - 20, width/2, 20);
        ctx.fillStyle = "#FFF";
        ctx.font = "14px arial";
        ctx.fillText(pop, 5, height/2 - 5);
        ctx.restore();

        var ctx = canvasToDrawOn.getContext('2d');
        ctx.clearRect(0, 0, width, height)
        ctx.save();
        ctx.drawImage(canvas1, 0, 0, width/2, height/2);
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0, height/2 - 20, width/2, 20);
        ctx.fillStyle = "#FFF";
        ctx.font = "14px arial";
        ctx.fillText('existing content', 5, height/2 - 5);
        ctx.restore();

        var ctx = canvasToDrawFrom.getContext('2d');
        ctx.clearRect(0, 0, width, height)
        ctx.save();
        ctx.drawImage(canvas2, 0, 0, width/2, height/2);
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0, height/2 - 20, width/2, 20);
        ctx.fillStyle = "#FFF";
        ctx.font = "14px arial";
        ctx.fillText('new content', 5, height/2 - 5);
        ctx.restore();

        dd.appendChild(canvasToDrawOn);
        dd.appendChild(canvasToDrawFrom);
        dd.appendChild(canvasToDrawResult);

        dl.appendChild(dd);
    }
};
```

### ユーティリティ関数

このプログラムは、多くのユーティリティ関数に依存しています。

```js
var lightMix = function() {
    var ctx = canvas2.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,1)";
    ctx.arc(100, 200, 100, Math.PI*2, 0, false);
    ctx.fill()
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,255,1)";
    ctx.arc(220, 200, 100, Math.PI*2, 0, false);
    ctx.fill()
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,255,0,1)";
    ctx.arc(160, 100, 100, Math.PI*2, 0, false);
    ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(0,0,30,30)
    ctx.fill();
};
```

```js
var colorSphere = function(element) {
    var ctx = canvas1.getContext("2d");
    var width = 360;
    var halfWidth = width / 2;
    var rotate = (1 / 360) * Math.PI * 2; // per degree
    var offset = 0; // scrollbar offset
    var oleft = -20;
    var otop = -20;
    for (var n = 0; n <= 359; n ++) {
        var gradient = ctx.createLinearGradient(oleft + halfWidth, otop, oleft + halfWidth, otop + halfWidth);
        var color = Color.HSV_RGB({ H: (n + 300) % 360, S: 100, V: 100 });
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(0.7, "rgba("+color.R+","+color.G+","+color.B+",1)");
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
    ctx.fillRect(15,15,30,30)
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
        R, G, B;
    var A, B, C, D;
    if (S == 0) {
        R = G = B = Math.round(V * 255);
    } else {
        if (H >= 1) H = 0;
        H = 6 * H;
        D = H - Math.floor(H);
        A = Math.round(255 * V * (1 - S));
        B = Math.round(255 * V * (1 - (S * D)));
        C = Math.round(255 * V * (1 - (S * (1 - D))));
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
        B: B
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

---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`OffscreenCanvasRenderingContext2D`** インターフェイスは {{domxref("CanvasRenderingContext2D")}} レンダリングコンテキストの一つで、`OffscreenCanvas` オブジェクトのビットマップに描画するためのものです。
これは `CanvasRenderingContext2D` オブジェクトと似ていますが、次の点が異なります。

- ユーザーインターフェイス機能 (`drawFocusIfNeeded`) には対応していません。
- その `canvas` 属性は、{{HtmlElement("canvas")}} 要素ではなく、`OffscreenCanvas` オブジェクトを参照しています
- `OffscreenCanvas` オブジェクトに属するプレースホルダーの {{HtmlElement("canvas")}} 要素のビットマップは、その `OffscreenCanvas` を自分自身で所有する `Window` または `Worker` のレンダリング更新中に更新されます。

## 例

以下のコードスニペットは、{{domxref("Worker")}} コンストラクターを使用して {{domxref("Worker.Worker", "Worker()")}} オブジェクトを作成します。
`transferControlToOffscreen()` メソッドは、{{HtmlElement("canvas")}} 要素から `OffscreenCanvas` オブジェクトを取得し、それをワーカーに転送するために使用されます。

```js
const canvas = document.getElementById("canvas");
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker("worker.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

ワーカースレッドでは、`OffscreenCanvasRenderingContext2D` を使用することができます。これにより、`OffscreenCanvas` オブジェクトのビットマップに描画することができます。

```js
onmessage = (event) => {
  const canvas = event.data.canvas;
  const offCtx = canvas.getContext("2d");
  // 画面外キャンバスコンテキストへ描画
  offCtx.fillStyle = "red";
  offCtx.fillRect(0, 0, 100, 100);
};
```

完全な例については、[OffscreenCanvas ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker)（[OffscreenCanvas ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)）をご覧ください。

## 追加メソッド

以下のメソッドは `OffscreenCanvasRenderingContext2D` インターフェイスに新しく追加されたものであり、`CanvasRenderingContext2D` インターフェイスには存在しません。

- {{domxref("OffscreenCanvasRenderingContext2D.commit()", "commit()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : レンダリングされた画像を、コンテキストの `OffscreenCanvas` オブジェクトのプレースホルダーである {{HtmlElement("canvas")}} 要素に書き込みます。

## 非対応の機能

以下のユーザーインターフェイスメソッドは、`OffscreenCanvasRenderingContext2D` インターフェイスでは**対応していません**。

- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : 指定された要素にフォーカスが当たっている場合、このメソッドは現在のパス周囲にフォーカスリングを描画します。

## 継承されているプロパティとメソッド

_井岡のプロパティとメソッドは {{domxref("CanvasRenderingContext2D")}} から継承されています。使い方は `CanvasRenderingContext2D` の場合と同じです。_

### コンテキスト

- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}} {{experimental_inline}}
  - : 実際のコンテキスト属性を含むオブジェクトを返します。コンテキスト属性は、{{domxref("OffscreenCanvas.getContext()")}} を使用してリクエストできます。
- {{domxref("CanvasRenderingContext2D.isContextLost()")}}
  - : 描画コンテキストが失われた場合に `true` を返します。

### 矩形の描画

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : 座標 _(x, y)_ を始点とする大きさ _(width, height)_ の矩形を、透明色 (透明な黒) で塗りつぶします。領域内に描画されていたすべてのコンテンツは消去されます。
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : 座標 _(x, y)_ を始点とし大きさ _(width, height)_ の矩形を、(訳注: 現在の塗りつぶしスタイルを用いて) 塗りつぶします。
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : 座標 _(x, y)_ を始点とし大きさ _(width, height)_ の矩形の輪郭を、現在のストロークスタイルを用いて描画します。

### テキストの描画

以下のメソッドおよびプロパティは、テキストの描画を制御します。テキストのプロパティについては、{{domxref("TextMetrics")}} オブジェクトも参照してください。

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : 指定されたテキストを指定された (x, y) の位置に、文字の中を塗りつぶします。
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : 指定されたテキストを指定された (x, y) の位置に、文字の輪郭を描きます。
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : {{domxref("TextMetrics")}} オブジェクトを返します。
- {{domxref("CanvasRenderingContext2D.textRendering")}}
  - : テキストのレンダリング。指定可能な値は `auto`（デフォルト）、`optimizeSpeed`、`optimizeLegibility` です。

### 線のスタイル

以下のメソッドおよびプロパティは、線の描画方法を制御します。

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : 線の幅を設定します。デフォルト値は `1.0` です。
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : 線の末端のスタイルを設定します。設定可能な値は `butt`（デフォルト値）, `round`, `square` です。
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : 2 本の直線が接続される頂点のスタイルを設定します。設定可能な値は `round`, `bevel`, `miter`（デフォルト値）です。
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : マイター制限を設定します。デフォルト値は `10` です。
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : 現在の破線パターンを格納した配列を取得します。この配列には負でない実数が偶数個含まれています。
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : 破線パターンを指定します。
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : 線のどこから破線にするかを指定します。

### テキストスタイル

以下のプロパティは、テキストがどのように配置されるかを制御します。

- {{domxref("CanvasRenderingContext2D.font")}}
  - : フォントを設定します。デフォルト値は `10px sans-serif` です。
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : テキストの揃え方を設定します。設定可能な値は `start`（デフォルト値）, `end`, `left`, `right`, `center` です。
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : ベースラインの揃え方を設定します。設定可能な値は `top`, `hanging`, `middle`, `alphabetic`（デフォルト値）, `ideographic`, `bottom` です。
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : テキストの方向を指定します。設定可能な値は `ltr`, `rtl`, `inherit`（デフォルト値）です。
- {{domxref("CanvasRenderingContext2D.letterSpacing")}}
  - : 文字間です。デフォルト値は `0px` です。
- {{domxref("CanvasRenderingContext2D.fontKerning")}}
  - : フォントのカーニングです。指定可能な値は `auto`（デフォルト値）, `normal`, `none` です。
- {{domxref("CanvasRenderingContext2D.fontStretch")}}
  - : フォントの伸ばし方です。指定可能な値は `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`（デフォルト値）, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded` です。
- {{domxref("CanvasRenderingContext2D.fontVariantCaps")}}
  - : フォントの大文字化の方式です。指定可能な値は `normal`（デフォルト値）, `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps` です。
- {{domxref("CanvasRenderingContext2D.textRendering")}} {{experimental_inline}}
  - : テキストのレンダリング方法です。指定可能な値は `auto`（デフォルト値）, `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision` です。
- {{domxref("CanvasRenderingContext2D.wordSpacing")}}
  - : 単語同士の空間です。デフォルト値は `0px` です。
- {{domxref("CanvasRenderingContext2D.lang")}} {{experimental_inline}}
  - : キャンバス描画コンテキストの言語を取得または設定します。

### 塗りつぶしとストロークのスタイル

塗りつぶしには図形の内部の色やスタイルの設定に、ストロークには図形の輪郭の色やスタイルの設定に使用されます。

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : 図形の内側を色やスタイルで指定します。 デフォルト値は `black` (黒) です。
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : 図形の輪郭を色やスタイルで指定します。 デフォルト値は `black` (黒) です。

### グラデーションとパターン

- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
  - : 引数で表された座標で指定された点の周りに扇形グラデーションを作成します。
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : 引数で表された座標から線に沿った線形グラデーションを作成します。
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : 引数で表された座標から 2 つの円の座標を利用して放射グラデーションを作成します。
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : 指定された画像を利用してパターンを作成します。そのパターンから引数の方向に繰り返します。このメソッドは {{domxref("CanvasPattern")}} で出力します。

### 影

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : 影のぼかしを設定します。デフォルト値は `0` です。
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : 影の色を設定します。デフォルト値は完全に透明の黒です。
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : 横方向の影の長さを設定します。デフォルト値は `0` です。
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : 縦方向の影の長さを設定します。デフォルト値は `0` です。

### パス

以下のメソッドはオブジェクトのパスの操作で使用できます。

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : すでにあるサブパスのリストを消去して新しいパスの起点を作成します。パスを作成したい時にこのメソッドを利用します。
- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : ペンの場所を現在のサブパスの最初の位置に戻します。現在の位置から最初の位置まで直線を引くことになります。パスの図形が閉じていたり、まだ 1 点だけだったりする場合は、このメソッドは何も実行しません。
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : (x, y) 座標へ作成済みのサブパスの始点を移動します。
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : 現在のサブパスの終点を指定した (x, y) 座標へ直線で接続します。
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : 現在のパスに三次ベジェ曲線を追加します。
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : 現在のパスに二次ベジェ曲線を追加します。
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : 現在のパスに円弧を追加します。
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : 引数の制御点と半径から現在のパスに円弧を追加し、直線で前の点に接続します。
- {{domxref("CanvasRenderingContext2D.ellipse()")}}
  - : 現在のパスに楕円形の円弧を追加します。
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : 引数の座標 (x, y) から _width_ と _height_ のサイズで長方形のパスを作成します。
- {{domxref("CanvasRenderingContext2D.roundRect()")}}
  - : 座標 (x, y) の位置に、_width_ および _height_ で指定された大きさ、_radii_ で指定された半径を持つ角が丸い矩形のパスを作成します。

### パスの描画

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : 塗りつぶしのスタイルに基づいてサブパス内を塗りつぶします。
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : ストロークのスタイルに基づいてサブパスを描画します。
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : 現在のサブパスからクリッピングパスを作成します。このメソッドが実行されると、後に描画されたものがすべてそのクリッピングパスの内側にだけ描画されます。サンプルはキャンバスチュートリアルの[パスのクリッピング](/ja/docs/Web/API/Canvas_API/Tutorial/Compositing)を参照してください。
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : 引数で指定した位置が現在のパスの中に含まれているか調べます。
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : 引数で指定した位置がパスでストロークした領域の中に含まれているか調べます。

### 座標変換

`CanvasRenderingContext2D` の描画コンテキストのオブジェクトには、現在の座標変換行列の状態とその座標変換行列を操作するメソッドがあります。現在の既定のパスを作成したり、テキスト、図形、{{domxref("Path2D")}} を描くと座標変換行列が適用されます。以下のメソッドは、歴史的および互換性の理由から残されています。現在では API の大部分で {{domxref("DOMMatrix")}} オブジェクトが使用されており、今後も代わりに使用される予定です。

- {{domxref("CanvasRenderingContext2D.getTransform()")}}
  - : コンテキストに適用されている現在の座標変換行列を取得します。
- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : 座標変換行列に回転を追加します。引数の角度は時計回りをラジアン値で指定します。
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : キャンバスに対して X で横方向に、Y で縦方向に拡大縮小変換を追加します。
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : キャンバスと指定した原点に対して X で横方向に、Y で縦方向にグリッド状で移動して、平行移動の変形を追加します。
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : 現在の座標変換行列と引数で指定した行列を乗算します。
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : 現在の座標変換行列を恒等行列にリセットしてから、引数で指定した行列から `transform()` メソッドを実行します。
- {{domxref("CanvasRenderingContext2D.resetTransform()")}}
  - : 現在の変換行列を恒等行列にリセットします。

### 合成

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : 合成される前に適用されるキャンバス内の図形やイメージの透明度です。デフォルト値は `1.0`（不透明）です。
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : `globalAlpha` で設定した透明度を利用して、これまで描画された図形やイメージの描画方法を設定します。

### 画像の描画

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : 指定したイメージを描画します。このメソッドでは指定方法が多く、大きな柔軟性を持ちます。

### ピクセル操作

{{domxref("ImageData")}} オブジェクトも参照してください。

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : 引数で指定したサイズの空の {{domxref("ImageData")}} オブジェクトを作成します。そのオブジェクトはすべてのピクセルが透明な黒で構成されています。
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : キャンバス内の座標 _(sx, sy)_ から 幅 _sw_ と 高さ _sh_ のサイズで示される部分に対応するピクセルデータの {{domxref("ImageData")}} オブジェクトを取得します。
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : 引数で指定した {{domxref("ImageData")}} オブジェクトのデータをビットマップ上に描画します。再描画対象の四角形が指定された場合は、その四角形のピクセルだけが描画されます。

### 画像の平滑化

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
  - : 画像平滑化モードです。無効の場合、画像を拡大縮小しても平滑化されません。
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}}
  - : 画像平滑化の品質を設定します。

### キャンバスの状態

`CanvasRenderingContext2D` 描画コンテキストは、様々な描画スタイルの状態（ラインスタイル、フィルスタイル、シャドウスタイル、テキストスタイルの属性）を含んでいます。以下のメソッドは、その状態を操作するのに役立ちます。

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : 現在の描画スタイルの状態をスタックを用いて保存し、 `restore()` を用いて変更した部分を元に戻すことができるようにします。
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : 描画スタイルの状態を `save()` によって保存された '状態スタック' の最後の要素に復元します。
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : `OffscreenCanvas` オブジェクトへの読み取り専用の参照です。
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}} {{experimental_inline}}
  - : 実際のコンテキスト属性を含むオブジェクトを返します。コンテキスト属性は、{{domxref("HTMLCanvasElement.getContext()")}} を使用してリクエストできます。
- {{domxref("CanvasRenderingContext2D.reset()")}}
  - : 現在の描画スタイルの状態をデフォルト値にリセットします。

### フィルター

- {{domxref("CanvasRenderingContext2D.filter")}}
  - : キャンバスの明るさやぼかし具合を変えるなど、 CSS や SVG のフィルターを適用します。

## 非対応のプロパティとメソッド

`OffscreenCanvasRenderingContext2D` インターフェイスでは、以下のメソッドは**対応していません**。

- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : 指定された要素にフォーカスが当たっている場合、このメソッドは現在のパス周囲にフォーカスリングを描画します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement")}}
- {{HTMLElement("canvas")}}

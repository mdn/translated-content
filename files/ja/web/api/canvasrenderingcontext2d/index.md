---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) のインターフェイスで、 {{HTMLElement("canvas")}} 要素の描画面のための二次元描画コンテキストを提供します。
図形、文字、画像、その他のオブジェクトを描画するのに使用します。

詳細は、サイドバーや以下にあるプロパティとメソッドの説明を参照してください。
[キャンバスのチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)にもより多くの説明やサンプルコード、リソースがあります。

[`OffscreenCanvas`](/ja/docs/Web/API/OffscreenCanvas) には、レンダリングコンテキストを提供する同等のインターフェイスがあります。
オフスクリーンレンダリングコンテキストは `CanvasRenderingContext2D` とほぼ同じプロパティとメソッドを継承しており、詳細は {{domxref("OffscreenCanvasRenderingContext2D")}} リファレンスページで説明されています。

## 基本的な例

`CanvasRenderingContext2D` インスタンスを取得するには、まず連携する HTML の `<canvas>` 要素が必要です。

```html
<canvas id="my-house" width="300" height="300"></canvas>
```

このキャンバスの二次元描画コンテキストを取得するには、引数に `'2d'` を指定して {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} を `<canvas>` に対して呼び出します。

```js
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");
```

二次元描画コンテキストを取得した後は、好きなように描画できます。以下のコードは家を描画します。

```js
// 線の幅を設定
ctx.lineWidth = 10;

// 壁
ctx.strokeRect(75, 140, 150, 110);

// ドア
ctx.fillRect(130, 190, 40, 60);

// 屋根
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
```

結果は次のようになります。

{{EmbedLiveSample("Basic_example", 700, 330)}}

## リファレンス

### コンテキスト

- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}}
  - : ブラウザーが使用するコンテキスト属性を格納したオブジェクトを返します。コンテキスト属性は、{{domxref("HTMLCanvasElement.getContext()")}} を使用して 2D コンテキストを生成する際にリクエストできます。
- {{domxref("CanvasRenderingContext2D.isContextLost()")}}
  - : 描画コンテキストが失われた場合に `true` を返します。

### 矩形の描画

キャンバスに矩形を直接描画する方法は 3 つあります。

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : 座標 _(x, y)_ を始点とする大きさ _(width, height)_ の矩形を、透明色 (透明な黒) で塗りつぶします。領域内に描画されていたすべてのコンテンツは消去されます。
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : 座標 _(x, y)_ を始点とし大きさ _(width, height)_ の矩形を、(訳注: 現在の塗りつぶしスタイルを用いて) 塗りつぶします。
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : 座標 _(x, y)_ を始点とし大きさ _(width, height)_ の矩形の枠線を、現在のストロークスタイルを用いて描画します。

### テキストの描画

以下のメソッドは、文字列の描画を提供します。文字列のプロパティについては {{domxref("TextMetrics")}} も参照してください。

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : 指定されたテキストを指定された (x, y) の位置に、文字の中を塗りつぶします。
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : 指定されたテキストを指定された (x, y) の位置に、文字の輪郭を描きます。
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : {{domxref("TextMetrics")}} オブジェクトを返します。

### 線のスタイル

線がどのように描画されるかを設定・取得します。

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : 線の幅を設定します。既定値は `1.0` です。
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : 線の末端のスタイルを設定します。設定可能な値は `butt` (既定値), `round`, `square` です。
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : 2 つの直線が出会う頂点のスタイルを設定します。設定可能な値は `round`, `bevel`, `miter` (既定値) です。
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : マイター制限を設定します。既定値は `10` です。
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : 現在の破線パターンを格納した配列を取得します。この配列には負でない実数が偶数個含まれています。
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : 破線パターンを指定します。
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : 線のどこから破線にするかを指定します。

### テキストのスタイル

以下のプロパティは、テキストがどのように配置されるかを制御します。

- {{domxref("CanvasRenderingContext2D.font")}}
  - : フォントを設定します。既定値は `10px sans-serif` です。
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : テキストの揃え方を設定します。設定可能な値は `start` (既定値), `end`, `left`, `right`, `center` です。
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : ベースラインの揃え方を設定します。設定可能な値は `top`, `hanging`, `middle`, `alphabetic` (既定値), `ideographic`, `bottom` です。
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : テキストの方向を指定します。設定可能な値は `ltr`, `rtl`, `inherit` (既定値) です。
- {{domxref("CanvasRenderingContext2D.letterSpacing")}}
  - : 文字間です。既定値は `0px` です。
- {{domxref("CanvasRenderingContext2D.fontKerning")}}
  - : フォントのカーニングです。指定可能な値は `auto` (既定値), `normal`, `none` です。
- {{domxref("CanvasRenderingContext2D.fontStretch")}}
  - : フォントの伸ばし方です。指定可能な値は `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (既定値), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded` です。
- {{domxref("CanvasRenderingContext2D.fontVariantCaps")}}
  - : フォントの大文字化の方式です。指定可能な値は `normal` (既定値), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps` です。
- {{domxref("CanvasRenderingContext2D.textRendering")}}
  - : テキストのレンダリング方法です。指定可能な値は `auto` (既定値), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision` です。
- {{domxref("CanvasRenderingContext2D.wordSpacing")}}
  - : 単語同士の空間です。既定値は `0px` です。
- {{domxref("CanvasRenderingContext2D.lang")}} {{experimental_inline}}
  - : キャンバス描画コンテキストの言語を取得または設定します。

### 塗りつぶしとストロークのスタイル

塗りつぶしには図形の内部の色やスタイルの設定に、ストロークには図形の輪郭の色やスタイルの設定に使用されます。

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : 図形の内側を色やスタイルで指定します。 既定値は `black` (黒) です。
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : 図形の輪郭を色やスタイルで指定します。 既定値は `black` (黒) です。

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
  - : 影のぼかしを設定します。既定値は `0` です。
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : 影の色を設定します。既定値は完全に透明の黒です。
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : 横方向の影の長さを設定します。既定値は `0` です。
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : 縦方向の影の長さを設定します。既定値は `0` です。

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
  - : 指定された位置、幅、高さ、角の半径を持つ角丸矩形用のパスを作成します。

### パスの描画

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : 塗りつぶしのスタイルに基づいてサブパス内を塗りつぶします。
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : ストロークのスタイルに基づいてサブパスを描画します。
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : 引数で指定した要素がフォーカスされた場合、このメソッドは現在のパスの周りにフォーカスリングを描画します。
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
  - : 合成される前に適用されるキャンバス内の図形やイメージの透明度です。既定値は `1.0` (不透明) です。
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

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} {{experimental_inline}}
  - : 画像平滑化モードです。無効の場合、画像を拡大縮小しても平滑化されません。
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}} {{experimental_inline}}
  - : 画像平滑化の品質を設定します。

### キャンバスの状態

`CanvasRenderingContext2D` 描画コンテキストは、様々な描画スタイルの状態（ラインスタイル、フィルスタイル、シャドウスタイル、テキストスタイルの属性）を含んでいます。以下のメソッドは、その状態を操作するのに役立ちます。

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : 現在の描画スタイルの状態をスタックを用いて保存し、 `restore()` を用いて変更した部分を元に戻すことができるようにします。
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : 描画スタイルの状態を `save()` によって保存された '状態スタック' の最後の要素に復元します。
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : {{domxref("HTMLCanvasElement")}} への読み取り専用の後方参照。 {{HTMLElement("canvas")}} 要素と関連付けられていない場合、 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) になる可能性があります。
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}}
  - : ブラウザーが使用するコンテキスト属性を格納したオブジェクトを返します。コンテキスト属性は、{{domxref("HTMLCanvasElement.getContext()")}} を使用して 2D コンテキストを生成する際にリクエストできます。
- {{domxref("CanvasRenderingContext2D.reset()")}}
  - : レンダリングコンテキストをリセットします。これには、バッキングバッファー、描画状態スタック、パス、およびスタイルが含まれます。
- {{domxref("CanvasRenderingContext2D.isContextLost()")}} {{Experimental_Inline}}
  - : レンダリングコンテキストが失われた場合に `true` を返します。

### フィルター

- {{domxref("CanvasRenderingContext2D.filter")}} {{experimental_inline}}
  - : キャンバスの明るさやぼかし具合を変えるなど、 CSS や SVG のフィルターを適用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement")}}
- {{HTMLElement("canvas")}}
- {{domxref("OffscreenCanvas")}}

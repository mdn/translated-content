---
title: キャンバスの最適化
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
tags:
  - 上級者
  - キャンバス
  - グラフィック
  - HTML
  - HTML5
  - チュートリアル
translation_of: Web/API/Canvas_API/Tutorial/Optimizing_canvas
original_slug: Web/Guide/HTML/Canvas_tutorial/Optimizing_canvas
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

{{HTMLElement("canvas")}} 要素は、ウェブで二次元グラフィックを描画するためにもっとも広く使用されているツールのひとつです。しかし、ウェブサイトやアプリがキャンバス API の限界付近まで使用するようになって、パフォーマンスが悪化するようになりました。この記事では、キャンバス要素の使用を最適化して、グラフィックを確実に改善するための提案を行います。

## パフォーマンスに関する TIPS

キャンバスのパフォーマンスを向上させるための TIPS 集を以下に掲載します。

### 同様のプリミティブや繰り返し使用するオブジェクトをオフスクリーンキャンバスで事前にレンダリングする

アニメーションフレーム毎に同じ描画操作を繰り返していることに気づいたら、あらかじめオフスクリーンキャンバスに描画しておくことを検討しましょう。そして、必要な時に本来のキャンバスにオフスクリーン画像を、最初の場所で生成したときのステップなしで描画することができます。

```js
myCanvas.offscreenCanvas = document.createElement('canvas');
myCanvas.offscreenCanvas.width = myCanvas.width;
myCanvas.offscreenCanvas.height = myCanvas.height;

myCanvas.getContext('2d').drawImage(myCanvas.offScreenCanvas, 0, 0);
```

### 浮動小数点数値の座標を避けて整数を使用

キャンバスで整数以外の値を使用してオブジェクトを描画すると、サブピクセルレンダリングを実行します。

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

これはアンチエイリアス効果を生成するために、ブラウザーに追加の計算処理を強制します。これを避けるために、たとえば {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} を呼び出す際に {{jsxref("Math.floor()")}} を使用して、すべての座標で端数処理を行ってください。

### `drawImage` で画像の拡大縮小を行わない

{{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} でいつも画像の拡大縮小処理を行うのではなく、さまざまなサイズの画像をオフスクリーンキャンバスでキャッシュしてください。

### 複雑なシーンでは複数レイヤーのキャンバスを使用する

アプリケーションでは、一部のオブジェクトは頻繁に動かしたり変更したりする必要があるのに対し、他のものは比較的静止していることが分かるかもしれません。この場合に可能な最適化は、複数の `<canvas>` 要素を使用してアイテムをレイヤー化することです。

例えば、 UI があるゲームが最上位にあり、中間にゲームプレイの動作があり、最下位に静止した背景があるとします。この場合、ゲームを３つの `<canvas>` レイヤーに分割することができます。 UI はユーザーの入力のみに基づいて変化し、ゲームプレイレイヤーはフレーム毎に変化し、背景は基本的に変化しないままでいます。

```html
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>

<style>
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black;
  }

  canvas { position: absolute; }
  #ui-layer { z-index: 3; }
  #game-layer { z-index: 2; }
  #background-layer { z-index: 1; }
</style>
```

### 大きな背景画像に CSS を使用する

静止した背景画像がある場合は、ただの {{HTMLElement("div")}} に CSS の {{cssxref("background")}} プロパティを使用し、キャンバスの下に配置することで描画することができます。これにより、大きな画像を毎回キャンバスに描画する処理を避けます。

### CSS 座標変換を使用してキャンバスを拡大縮小する

[CSS 座標変換](/ja/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)は、 GPU を使用しますのでより高速です。もっともよいのは拡大縮小しないことですが、そうでなければ大きなキャンバスを縮小するよりも小さなキャンバスを拡大したほうが良好です。

```js
var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = '0 0'; //scale from top left
stage.style.transform = 'scale(' + scaleToFit + ')';
```

### 透過をやめる

アプリケーションがキャンバスを使用していて背後のものを透過させる必要がない場合は、 {{domxref("HTMLCanvasElement.getContext()")}} で描画コンテキストを生成する際に `alpha` オプションを `false` に設定しましょう。この情報を使用してブラウザーが描画を最適化する可能性があります。

```js
var ctx = canvas.getContext('2d', { alpha: false });
```

### 高解像度のディスプレイでの拡大縮小

高解像度のディスプレイでは、キャンバスのアイテムがぼやけて見えることがあります。多くの解決策がありますが、まず簡単な方法は、キャンバスの属性、スタイル、およびコンテキストのスケールを使用してキャンバスのサイズを同時に拡大/縮小することです。

```js
// Get the DPR and size of the canvas
var dpr = window.devicePixelRatio;
var rect = canvas.getBoundingClientRect();

// Set the "actual" size of the canvas
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;

// Scale the context to ensure correct drawing operations
ctx.scale(dpr, dpr);

// Set the "drawn" size of the canvas
canvas.style.width = rect.width + 'px';
canvas.style.height = rect.height + 'px';
```

### その他の TIPS

- キャンバスの呼び出しをひとまとめにします。たとえば、複数に分割した線分ではなくポリラインを描画します。
- 不必要なキャンバスの状態変更を避けます。
- 新しい状態の全体を描画せずに、スクリーンの差分だけを描画します。
- 可能な限り {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} プロパティを避けます。
- 可能な限り[テキストレンダリング](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text)を避けます。
- キャンバスをクリアーする別の方法を試します ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} 対 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 対キャンバスのリサイズ)
- アニメーションで {{domxref("window.setInterval()")}} の代わりに {{domxref("window.requestAnimationFrame()")}} を使用します。
- 高負荷な物理演算ライブラリーに注意してください。

## 関連情報

- [Improving HTML5 Canvas Performance – HTML5 Rocks](https://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref)
- [Optimizing your JavaScript game for Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Finale")}}

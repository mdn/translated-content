---
title: キャンバス API
slug: Web/API/Canvas_API
tags:
  - API
  - キャンバス
  - グラフィック
  - JavaScript
  - 概要
  - リファレンス
translation_of: Web/API/Canvas_API
---
{{CanvasSidebar}}

**キャンバス API** (Canvas API) は [JavaScript](/ja/docs/Web/JavaScript) と [HTML](/ja/docs/Web/HTML) の {{HtmlElement("canvas")}} 要素によってグラフィックを描く方法を提供します。他にも、アニメーション、ゲームのグラフィック、データの可視化、写真加工、リアルタイム動画処理などに使用することができます。

キャンバス API は全体的に 2D グラフィックを対象としています。 [WebGL API](/ja/docs/Web/API/WebGL_API) は、こちらも `<canvas>` 要素を使用して、ハードウェアで高速化された 2D および 3D グラフィックを描きます。

## 基本的な例

この単純な例は、キャンバス上に緑の四角形を描きます。

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

{{domxref("Document.getElementById()")}} メソッドで、 HTML の `<canvas>` 要素への参照を取得します。次に、 {{domxref("HTMLCanvasElement.getContext()")}} メソッドで要素のコンテキストを取得します。 — ここに描画されたものが表示されます。

実際の描画は {{domxref("CanvasRenderingContext2D")}} インターフェイスを用いて行われます。 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} プロパティは四角形を緑にします。 {{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} メソッドはこれを左上から (10, 10) の位置で、幅 150 単位、高さ 100 単位の寸法を与えます。

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

### 結果

{{ EmbedLiveSample('Basic_example', 700, 180) }}

## リファレンス

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasImageSource")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("TextMetrics")}}
- {{domxref("OffscreenCanvas")}} {{experimental_inline}}
- {{domxref("Path2D")}} {{experimental_inline}}
- {{domxref("ImageBitmapRenderingContext")}} {{experimental_inline}}

> **Note:** `WebGLRenderingContext` に関するインターフェイスは、[WebGL](/ja/docs/Web/API/WebGL_API) に掲載しています。

> **Note:** {{domxref("OffscreenCanvas")}} はウェブワーカーでも利用できます。

{{domxref("CanvasCaptureMediaStreamTrack")}} は関連するインターフェイスです。

<h2 id="Guides_and_tutorials" name="Guides_and_tutorials">ガイドとチュートリアル</h2>

- [Canvas チュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)
  - : キャンバス API の基本的な使いかたと高度な機能の両方をカバーする網羅的なチュートリアル。
- [HTML5 Canvas Deep Dive](https://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : キャンバス API および WebGL の実践的な書籍規模の入門です。
- [Canvas Handbook](https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
  - : キャンバス API の手軽なリファレンス。
- [デモ: 簡単な ray-caster](/ja/docs/Web/API/Canvas_API/A_basic_ray-caster)
  - : キャンバスを用いたレイトレーシングアニメーションのデモです。
- [キャンバスを使用した動画の操作](/ja/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : {{HTMLElement("video")}} と {{HTMLElement("canvas")}} を組み合わせて、動画データをリアルタイムに操作します。

## ライブラリー

キャンバス API はとても強力ですが、簡単に利用できるとは限りません。以下に挙げたライブラリーは、キャンバスベースのプロジェクトの作成をより速くより手軽にできるようにします。

- [EaselJS](https://www.createjs.com/easeljs): ゲームやアート作品、その他の高度なグラフィック操作を容易にする、オープンソースのキャンバスライブラリー
- [Fabric.js](http://fabricjs.com): SVG のパース機能を持つ、オープンソースのキャンバスライブラリー
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/): キャンバスベースのデータヒートマップを生成するためのオープンソースライブラリー
- [JavaScript InfoVis Toolkit](https://thejit.org/): 対話的なデータの可視化を実現
- [Konva.js](https://konvajs.github.io/): デスクトップおよびモバイルアプリケーション向けの 2D キャンバスライブラリー
- [p5.js](https://p5js.org/): アーティスト、デザイナー、教育者、初心者のためのフル機能を持ったキャンバス描画機能
- [Paper.js](http://paperjs.org/): HTML5 キャンバス上で動作する、オープンソースのベクターグラフィック向けスクリプトフレームワーク
- [Phaser](https://phaser.io/): ブラウザーゲームを強力にするキャンバスと WebGL の軽量、フリーで楽しいオープンソースフレームワーク
- [Pts.js](https://ptsjs.org): キャンバスと SVG の創造的なコーディングや視覚化のためのライブラリー
- [Rekapi](https://github.com/jeremyckahn/rekapi): キャンバス用のアニメーションキーフレーム API
- [Scrawl-canvas](https://scrawl.rikweb.org.uk/): 2D キャンバス要素を作成したり操作したりするためのオープンソースの JavaScript ライブラリーです。
- [ZIM](https://zimjs.com): 便利でキャンバス上のコンポーネントとコーディングの創造性の制御を提供し、アクセシビリティと数百のカラフルなチュートリアルがあります。

> **Note:** WebGL を使用する 2D および 3D のライブラリーについては [WebGL API](/ja/docs/Web/API/WebGL_API) を参照してください。

## 仕様書

{{Specifications("html.elements.canvas")}}

## ブラウザーの互換性

Mozilla アプリケーションは `<canvas>` の対応を Gecko 1.8 ([Firefox 1.5](/ja/docs/Mozilla/Firefox/Releases/1.5)) から始めました。この要素はもともと Apple が OS X Dashboard や Safari のために導入したものでした。 Internet Explorer は `<canvas>` をバージョン 9 から対応しており、それ以前のバージョンの IE では、ページに効率的に `<canvas>` の対応を追加するために Google の [Explorer Canvas](https://github.com/arv/explorercanvas) プロジェクトによるスクリプトを利用することができます。 Google Chrome や Opera 9 も `<canvas>` に対応しています。

## 関連情報

- [WebGL](/ja/docs/Web/API/WebGL_API)

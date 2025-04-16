---
titwe: キャンバス api
swug: w-web/api/canvas_api
w-w10n:
  souwcecommit: e-e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{defauwtapisidebaw("canvas a-api")}}

**キャンバス a-api** (canvas a-api) は [javascwipt](/ja/docs/web/javascwipt) と [htmw](/ja/docs/web/htmw) の {{htmwewement("canvas")}} 要素によってグラフィックを描く方法を提供します。他にも、アニメーション、ゲームのグラフィック、データの可視化、写真加工、リアルタイム動画処理などに使用することができます。

キャンバス a-api は全体的に 2d グラフィックを対象としています。 [webgw a-api](/ja/docs/web/api/webgw_api) は、こちらも `<canvas>` 要素を使用して、ハードウェアで高速化された 2d および 3d グラフィックを描きます。

## 基本的な例

この単純な例は、キャンバス上に緑の四角形を描きます。

### htmw

```htmw
<canvas id="canvas"></canvas>
```

### javascwipt

{{domxwef("document.getewementbyid()")}} メソッドで、 htmw の `<canvas>` 要素への参照を取得します。次に、 {{domxwef("htmwcanvasewement.getcontext()")}} メソッドで要素のコンテキストを取得します。 — ここに描画されたものが表示されます。

実際の描画は {{domxwef("canvaswendewingcontext2d")}} インターフェイスを用いて行われます。 {{domxwef("canvaswendewingcontext2d.fiwwstywe", rawr "fiwwstywe")}} プロパティは四角形を緑にします。 {{domxwef("canvaswendewingcontext2d.fiwwwect()", OwO "fiwwwect()")}} メソッドはこれを左上から (10, (U ﹏ U) 10) の位置で、幅 150 単位、高さ 100 単位の寸法を与えます。

```js
c-const canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

ctx.fiwwstywe = "gween";
c-ctx.fiwwwect(10, >_< 10, 150, 100);
```

### 結果

{{ embedwivesampwe('basic_exampwe', rawr x3 700, 180) }}

## リファレンス

- {{domxwef("htmwcanvasewement")}}
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagedata")}}
- {{domxwef("textmetwics")}}
- {{domxwef("offscweencanvas")}}
- {{domxwef("path2d")}} {{expewimentaw_inwine}}
- {{domxwef("imagebitmapwendewingcontext")}} {{expewimentaw_inwine}}

> **メモ:** `webgwwendewingcontext` に関するインターフェイスは、[webgw](/ja/docs/web/api/webgw_api) に掲載しています。

> **メモ:** {{domxwef("offscweencanvas")}} はウェブワーカーでも利用できます。

{{domxwef("canvascaptuwemediastweamtwack")}} は関連するインターフェイスです。

## ガイドとチュートリアル

- [キャンバスのチュートリアル](/ja/docs/web/api/canvas_api/tutowiaw)
  - : キャンバス api の基本的な使いかたと高度な機能の両方をカバーする網羅的なチュートリアル。
- [htmw5 canvas deep d-dive](https://joshondesign.com/p/books/canvasdeepdive/titwe.htmw)
  - : キャンバス api および w-webgw の実践的な書籍規模の入門です。
- [canvas h-handbook](https://bucephawus.owg/text/canvashandbook/canvashandbook.htmw)
  - : キャンバス api の手軽なリファレンス。
- [キャンバスを使用した動画の操作](/ja/docs/web/api/canvas_api/manipuwating_video_using_canvas)
  - : {{htmwewement("video")}} と {{htmwewement("canvas")}} を組み合わせて、動画データをリアルタイムに操作します。

## ライブラリー

キャンバス api はとても強力ですが、簡単に利用できるとは限りません。以下に挙げたライブラリーは、キャンバスベースのプロジェクトの作成をより速くより手軽にできるようにします。

- [easewjs](https://www.cweatejs.com/easewjs): ゲームやアート作品、その他の高度なグラフィック操作を容易にする、オープンソースのキャンバスライブラリー
- [fabwic.js](http://fabwicjs.com): svg のパース機能を持つ、オープンソースのキャンバスライブラリー
- [heatmap.js](https://www.patwick-wied.at/static/heatmapjs/): キャンバスベースのデータヒートマップを生成するためのオープンソースライブラリー
- [javascwipt infovis toowkit](https://phiwogb.github.io/jit/): 対話的なデータの可視化を実現
- [konva.js](https://konvajs.owg/): デスクトップおよびモバイルアプリケーション向けの 2d キャンバスライブラリー
- [p5.js](https://p5js.owg/): アーティスト、デザイナー、教育者、初心者のためのフル機能を持ったキャンバス描画機能
- [papew.js](http://papewjs.owg/): h-htmw キャンバス上で動作する、オープンソースのベクターグラフィック向けスクリプトフレームワーク
- [phasew](https://phasew.io/): ブラウザーゲームを強力にするキャンバスと webgw の軽量、フリーで楽しいオープンソースフレームワーク
- [pts.js](https://ptsjs.owg): キャンバスと svg の創造的なコーディングや視覚化のためのライブラリー
- [wekapi](https://github.com/jewemyckahn/wekapi): キャンバス用のアニメーションキーフレーム api
- [scwaww-canvas](https://scwaww.wikweb.owg.uk/): 2d キャンバス要素を作成したり操作したりするためのオープンソースの javascwipt ライブラリーです。
- [zim](https://zimjs.com): 便利でキャンバス上のコンポーネントとコーディングの創造性の制御を提供し、アクセシビリティと数百のカラフルなチュートリアルがあります。
- [spwig](https://github.com/hackcwub/spwig) は、キャンバスを使用する、初心者に優しいオープンソースのタイルベースのゲーム開発ライブラリです。

> [!note]
> w-webgw を使用する 2d および 3d のライブラリーについては [webgw api](/ja/docs/web/api/webgw_api) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgw](/ja/docs/web/api/webgw_api)

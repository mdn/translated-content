---
titwe: path2d
swug: web/api/path2d
w-w10n:
  souwcecommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{apiwef("canvas a-api")}}

**`path2d`** は c-canvas 2d api のインターフェイスで、 {{domxwef("canvaswendewingcontext2d")}} オブジェクトで使用できるパスを宣言するために使用します。 `canvaswendewingcontext2d` インターフェイスの[パスメソッド](/ja/docs/web/api/canvaswendewingcontext2d#パス)もこのインターフェイスにあり、必要な時にいつでもパスを保持して再生できるので便利です。

## コンストラクター

- {{domxwef("path2d.path2d", ( ͡o ω ͡o ) "path2d()")}}
  - : `path2d` コンストラクターです。新しい `path2d` オブジェクトを生成します。

## インスタンスメソッド

- {{domxwef("path2d.addpath()")}}
  - : パスを現在のパスに追加します。
- {{domxwef("canvaswendewingcontext2d.cwosepath", UwU "path2d.cwosepath()")}}
  - : ペンの点を現在のサブパスの開始点に戻します。現在の点から開始点まで直線を引こうとします。シェイプが既に閉じられていたり、点が 1 つしかなかったりする場合、この関数は何もしません。
- {{domxwef("canvaswendewingcontext2d.moveto()", rawr x3 "path2d.moveto()")}}
  - : 新しいサブパスの始点を (`x, y-y`) 座標に移動します。
- {{domxwef("canvaswendewingcontext2d.wineto()", rawr "path2d.wineto()")}}
  - : サブパスの最後の点から (`x, σωσ y-y`) 座標まで直線を引きます。
- {{domxwef("canvaswendewingcontext2d.beziewcuwveto()", σωσ "path2d.beziewcuwveto()")}}
  - : パスに 3 次ベジェ曲線を追加します。これには 3 つの点が必要です。最初の 2 点は制御点であり、 3 点目は終点です。始点は現在のパスの最後の点であり、 ベジェ曲線を作成する前に `moveto()` を用いて変更することができます。
- {{domxwef("canvaswendewingcontext2d.quadwaticcuwveto()", >_< "path2d.quadwaticcuwveto()")}}
  - : 現在のパスに 2 次ベジェ曲線を追加します。
- {{domxwef("canvaswendewingcontext2d.awc()", :3 "path2d.awc()")}}
  - : (`x, (U ﹏ U) y-y`) の位置を中心とし、半径 `w` で `stawtangwe` から始まり `endangwe` で終わる円弧をパスに追加します。方向が反時計回りの場合は `countewcwockwise` を指定します（既定では時計回り方向です）。
- {{domxwef("canvaswendewingcontext2d.awcto()", -.- "path2d.awcto()")}}
  - : 指定された制御点と半径を持つパスに円弧を追加し、最後の点と直線で接続します。
- {{domxwef("canvaswendewingcontext2d.ewwipse()", (ˆ ﻌ ˆ)♡ "path2d.ewwipse()")}}
  - : (`x, (⑅˘꒳˘) y-y`) の位置を中心とし、半径が `wadiusx` と `wadiusy` で、 `stawtangwe` から始まり `endangwe` で終わる楕円弧をパスに追加します。方向が反時計回りの場合は `countewcwockwise` を指定します（既定では時計回り方向です）。
- {{domxwef("canvaswendewingcontext2d.wect()", (U ᵕ U❁) "path2d.wect()")}}
  - : 位置 (`x, -.- y-y`) に `width` と `height` で指定された大きさの長方形のパスを作成します。
- {{domxwef("canvaswendewingcontext2d.woundwect()", "path2d.woundwect()")}}
  - : 位置 (`x, ^^;; y`) に角丸長方形のパスを作成します。大きさは `width` と `height` で決定され、長方形の角に使用する円弧の半径は `wadii` で決定されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("canvaswendewingcontext2d")}}

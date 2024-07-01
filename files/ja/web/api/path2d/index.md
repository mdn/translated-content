---
title: Path2D
slug: Web/API/Path2D
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{APIRef("Canvas API")}}

**`Path2D`** は Canvas 2D API のインターフェイスで、 {{domxref("CanvasRenderingContext2D")}} オブジェクトで使用できるパスを宣言するために使用します。 `CanvasRenderingContext2D` インターフェイスの[パスメソッド](/ja/docs/Web/API/CanvasRenderingContext2D#パス)もこのインターフェイスにあり、必要な時にいつでもパスを保持して再生できるので便利です。

## コンストラクター

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : `Path2D` コンストラクターです。新しい `Path2D` オブジェクトを生成します。

## インスタンスメソッド

- {{domxref("Path2D.addPath()")}}
  - : パスを現在のパスに追加します。
- {{domxref("CanvasRenderingContext2D.closePath", "Path2D.closePath()")}}
  - : ペンの点を現在のサブパスの開始点に戻します。現在の点から開始点まで直線を引こうとします。シェイプが既に閉じられていたり、点が 1 つしかなかったりする場合、この関数は何もしません。
- {{domxref("CanvasRenderingContext2D.moveTo()", "Path2D.moveTo()")}}
  - : 新しいサブパスの始点を (`x, y`) 座標に移動します。
- {{domxref("CanvasRenderingContext2D.lineTo()", "Path2D.lineTo()")}}
  - : サブパスの最後の点から (`x, y`) 座標まで直線を引きます。
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()", "Path2D.bezierCurveTo()")}}
  - : パスに 3 次ベジェ曲線を追加します。これには 3 つの点が必要です。最初の 2 点は制御点であり、 3 点目は終点です。始点は現在のパスの最後の点であり、 ベジェ曲線を作成する前に `moveTo()` を用いて変更することができます。
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()", "Path2D.quadraticCurveTo()")}}
  - : 現在のパスに 2 次ベジェ曲線を追加します。
- {{domxref("CanvasRenderingContext2D.arc()", "Path2D.arc()")}}
  - : (`x, y`) の位置を中心とし、半径 `r` で `startAngle` から始まり `endAngle` で終わる円弧をパスに追加します。方向が反時計回りの場合は `counterclockwise` を指定します（既定では時計回り方向です）。
- {{domxref("CanvasRenderingContext2D.arcTo()", "Path2D.arcTo()")}}
  - : 指定された制御点と半径を持つパスに円弧を追加し、最後の点と直線で接続します。
- {{domxref("CanvasRenderingContext2D.ellipse()", "Path2D.ellipse()")}}
  - : (`x, y`) の位置を中心とし、半径が `radiusX` と `radiusY` で、 `startAngle` から始まり `endAngle` で終わる楕円弧をパスに追加します。方向が反時計回りの場合は `counterclockwise` を指定します（既定では時計回り方向です）。
- {{domxref("CanvasRenderingContext2D.rect()", "Path2D.rect()")}}
  - : 位置 (`x, y`) に `width` と `height` で指定された大きさの長方形のパスを作成します。
- {{domxref("CanvasRenderingContext2D.roundRect()", "Path2D.roundRect()")}}
  - : 位置 (`x, y`) に角丸長方形のパスを作成します。大きさは `width` と `height` で決定され、長方形の角に使用する円弧の半径は `radii` で決定されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}}

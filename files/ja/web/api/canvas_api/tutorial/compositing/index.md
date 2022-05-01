---
title: 合成とクリッピング
slug: Web/API/Canvas_API/Tutorial/Compositing
tags:
  - キャンバス
  - グラフィック
  - HTML
  - HTML5
  - 中級者
  - チュートリアル
translation_of: Web/API/Canvas_API/Tutorial/Compositing
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

[これまでの例](/ja/docs/Web/API/Canvas_API/Tutorial/Transformations)ではすべて、図形は、常に 1 つずつ重ねて描かれていました。これはほとんどの状況において十分すぎるほど適切ですが、複合図形の構築順序が制限されます。しかし、 `globalCompositeOperation` プロパティを設定することで、この動作を変更することができます。さらに、 `clip` プロパティによって、シェイプの不要な部分を隠すことができます。

## `globalCompositeOperation`

既存の図形の背後に新しい図形を描画できるだけでなく、特定の領域をマスクしたり、キャンバスの一部を消去したり（{{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} メソッドのように矩形に限定しない）、その他にも使用することが可能です。

- {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation = type")}}
  - : これは、新しい図形を描くときに適用する合成処理の種類を設定します。 type は、 12 種類の合成処理から使用するものを特定する文字列です。

以下の例のコードについては、[合成の例](/ja/docs/Web/API/Canvas_API/Tutorial/Compositing/Example)をご覧ください。

{{EmbedLiveSample("Compositing_example", 750, 6750, "" ,"Web/API/Canvas_API/Tutorial/Compositing/Example")}}

## クリッピングパス

クリッピングパスは通常のキャンバスの図形に似ていますが、図形の不要な部分を隠すマスクとして作用します。これを以下の画像で視覚化しました。赤い星型の図形は、クリッピングパスです。このパスの外側にあるものはすべて、キャンバスで描画されません。

![](canvas_clipping_path.png)

クリッピングパスと先ほどの `globalCompositeOperation` プロパティを比較すると、おおむね同じ効果をもたらす合成モードとして `source-in` と `source-atop` の 2 つがあることがわかります。これら 2 つとのもっとも重要な違いは、クリッピングパスは実際にキャンバスに描かれるものではないことと、クリッピングパスは新しい図形による影響を受けないことです。これは制限された領域に複数の図形を描くという、クリッピングパスの目標を表しています。

[図形の描画](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)の章では `stroke()` および `fill()` メソッドのみに言及しましたが、パスを扱う第 3 のメソッドとして `clip()` があります。

- {{domxref("CanvasRenderingContext2D.clip", "clip()")}}
  - : 現在構築しているパスを、現在のクリッピングパスに変換します。

`closePath()` の代わりに `clip()` を使用すると、パスの輪郭を描いたり塗りつぶすのではなく、パスを閉じてクリッピングパスに変換します。

既定で {{HTMLElement("canvas")}} 要素には、キャンバス自体とまったく同じ大きさのクリッピングパスが存在します。言い換えると、クリッピングは行われません。

### `clip` の例

この例では、ランダムな星の集団の描画先を特定の領域に制限するために、円形のクリッピングパスを使用しています。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // 円形のクリッピングパスを作成
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // 背景を描く
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // 星を描く
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75 - Math.floor(Math.random() * 150),
                  75 - Math.floor(Math.random() * 150));
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }

}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (var i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

コードの始めの数行で、背景としてキャンバスと同サイズの黒い背景を描いて、原点を中央に移動します。次に、円弧を描いて `clip()` を呼び出すことで、円形のクリッピングパスを作成します。クリッピングパスは、キャンバスの状態として保存されるもののひとつでもあります。元のクリッピングパスを維持したい場合は、新しいクリッピングパスを作成する前に保存したキャンバスの状態があるとよいでしょう。

クリッピングパスを作成した後に描いたものはすべて、パスの内部にあるものだけが見える状態になります。これは、次に描いている線形グラデーションで明らかです。この後に独自の `drawStar()` 関数を使用して、位置や大きさがランダムな星を 50 個描きます。星もまた、クリッピングパスの内部で定義されたものしか見えません。

{{EmbedLiveSample("A_clip_example", "180", "180", "canvas_clip.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

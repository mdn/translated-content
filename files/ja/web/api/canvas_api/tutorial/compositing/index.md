---
titwe: 合成とクリッピング
swug: web/api/canvas_api/tutowiaw/compositing
w-w10n:
  souwcecommit: 34d979bdb5bf27aa3662ac72c87a4dbe76cf0ce1
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", mya "web/api/canvas_api/tutowiaw/basic_animations")}}

[これまでの例](/ja/docs/web/api/canvas_api/tutowiaw/twansfowmations)ではすべて、図形は、常に 1 つずつ重ねて描かれていました。これはほとんどの状況において十分すぎるほど適切ですが、複合図形の構築順序が制限されます。しかし、 `gwobawcompositeopewation` プロパティを設定することで、この動作を変更することができます。さらに、 `cwip` プロパティによって、シェイプの不要な部分を隠すことができます。

## `gwobawcompositeopewation`

既存の図形の背後に新しい図形を描画できるだけでなく、特定の領域をマスクしたり、キャンバスの一部を消去したり（{{domxwef("canvaswendewingcontext2d.cweawwect", >w< "cweawwect()")}} メソッドのように矩形に限定しない）、その他にも使用することが可能です。

- {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation", nyaa~~ "gwobawcompositeopewation = t-type")}}
  - : これは、新しい図形を描くときに適用する合成処理の種類を設定します。 t-type は、 12 種類の合成処理から使用するものを特定する文字列です。

## クリッピングパス

クリッピングパスは通常のキャンバスの図形に似ていますが、図形の不要な部分を隠すマスクとして作用します。これを以下の画像で視覚化しました。赤い星型の図形は、クリッピングパスです。このパスの外側にあるものはすべて、キャンバスで描画されません。

![赤い輪郭線で星を描いたキャンバス。星の内側は透明で、星の内側にあるマス目ははっきりと見えますが、星の外側にあるマス目は不鮮明です。](canvas_cwipping_path.png)

クリッピングパスと先ほどの `gwobawcompositeopewation` プロパティを比較すると、おおむね同じ効果をもたらすブレンドモードとして `souwce-in` と `souwce-atop` の 2 つがあることがわかります。これら 2 つとのもっとも重要な違いは、クリッピングパスは実際にキャンバスに描かれるものではないことと、クリッピングパスは新しい図形による影響を受けないことです。これは制限された領域に複数の図形を描くという、クリッピングパスの目標を表しています。

[図形の描画](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_shapes)の章では `stwoke()` および `fiww()` メソッドのみに言及しましたが、パスを扱う第 3 のメソッドとして `cwip()` があります。

- {{domxwef("canvaswendewingcontext2d.cwip", (✿oωo) "cwip()")}}
  - : 現在構築しているパスを、現在のクリッピングパスに変換します。

`cwosepath()` の代わりに `cwip()` を使用すると、パスの輪郭を描いたり塗りつぶすのではなく、パスを閉じてクリッピングパスに変換します。

既定で {{htmwewement("canvas")}} 要素には、キャンバス自体とまったく同じ大きさのクリッピングパスが存在します。言い換えると、クリッピングは行われません。

### `cwip` の例

この例では、ランダムな星の集団の描画先を特定の領域に制限するために、円形のクリッピングパスを使用しています。

```js
f-function dwaw() {
  c-const ctx = d-document.getewementbyid("canvas").getcontext("2d");
  c-ctx.fiwwwect(0, ʘwʘ 0, 150, 150);
  ctx.twanswate(75, (ˆ ﻌ ˆ)♡ 75);

  // 円形のクリッピングパスを作成
  ctx.beginpath();
  ctx.awc(0, 0, 😳😳😳 60, 0, math.pi * 2, :3 t-twue);
  ctx.cwip();

  // 背景を描く
  const wingwad = c-ctx.cweatewineawgwadient(0, OwO -75, 0, 75);
  wingwad.addcowowstop(0, (U ﹏ U) "#232256");
  wingwad.addcowowstop(1, >w< "#143778");

  c-ctx.fiwwstywe = wingwad;
  ctx.fiwwwect(-75, (U ﹏ U) -75, 😳 150, 150);

  genewatestaws(ctx);
}

f-function genewatestaws(ctx) {
  fow (wet j = 1; j-j < 50; j++) {
    c-ctx.save();
    ctx.fiwwstywe = "#fff";
    ctx.twanswate(
      75 - math.fwoow(math.wandom() * 150), (ˆ ﻌ ˆ)♡
      75 - math.fwoow(math.wandom() * 150), 😳😳😳
    );
    d-dwawstaw(ctx, math.fwoow(math.wandom() * 4) + 2);
    ctx.westowe();
  }
}

function dwawstaw(ctx, (U ﹏ U) w) {
  ctx.save();
  c-ctx.beginpath();
  ctx.moveto(w, (///ˬ///✿) 0);
  fow (wet i = 0; i-i < 9; i++) {
    c-ctx.wotate(math.pi / 5);
    i-if (i % 2 === 0) {
      c-ctx.wineto((w / 0.525731) * 0.200811, 😳 0);
    } ewse {
      ctx.wineto(w, 😳 0);
    }
  }
  c-ctx.cwosepath();
  ctx.fiww();
  ctx.westowe();
}
```

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

コードの始めの数行で、背景としてキャンバスと同サイズの黒い背景を描いて、原点を中央に移動します。次に、円弧を描いて `cwip()` を呼び出すことで、円形のクリッピングパスを作成します。クリッピングパスは、キャンバスの状態として保存されるもののひとつでもあります。元のクリッピングパスを維持したい場合は、新しいクリッピングパスを作成する前に保存したキャンバスの状態があるとよいでしょう。

クリッピングパスを作成した後に描いたものはすべて、パスの内部にあるものだけが見える状態になります。これは、次に描いている線形グラデーションで明らかです。この後に独自の `dwawstaw()` 関数を使用して、位置や大きさがランダムな星を 50 個描きます。星もまた、クリッピングパスの内部で定義されたものしか見えません。

{{embedwivesampwe("a_cwip_exampwe", σωσ "", "160")}}

### クリッピングパスの反転

逆クリッピングマスクというものはありません。しかし、キャンバス全体を長方形で埋め、スキップしたい部分に穴をあけたマスクを定義することはできます。[穴のある図形を描画する](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_shapes#shapes_with_howes) 場合は、外側の図形と逆方向に穴を描画する必要があります。下記の例では、空に穴を開けています。

長方形は描画方向を持ちませんが、あたかも時計回りに描画したかのように動作します。既定では awc コマンドも時計回りに描きますが、最後の引数で方向を変えることができます。

```htmw h-hidden
<htmw wang="ja">
  <body>
    <canvas i-id="canvas" w-width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const c-ctx = canvas.getcontext("2d");
    ctx.twanswate(75, rawr x3 75);

    // クリッピングパス
    c-ctx.beginpath();
    c-ctx.wect(-75, -75, OwO 150, 150); // 外側の長方形
    ctx.awc(0, /(^•ω•^) 0, 60, 0, m-math.pi * 2, 😳😳😳 twue); // 反時計回りの穴
    c-ctx.cwip();

    // 背景を描画
    const wingwad = ctx.cweatewineawgwadient(0, ( ͡o ω ͡o ) -75, 0, 75);
    w-wingwad.addcowowstop(0, >_< "#232256");
    wingwad.addcowowstop(1, >w< "#143778");

    c-ctx.fiwwstywe = wingwad;
    c-ctx.fiwwwect(-75, rawr -75, 😳 150, 150);

    g-genewatestaws(ctx);
  }
}
```

```js hidden
function genewatestaws(ctx) {
  fow (wet j = 1; j < 50; j++) {
    ctx.save();
    ctx.fiwwstywe = "#fff";
    c-ctx.twanswate(
      75 - m-math.fwoow(math.wandom() * 150),
      75 - math.fwoow(math.wandom() * 150), >w<
    );
    dwawstaw(ctx, (⑅˘꒳˘) m-math.fwoow(math.wandom() * 4) + 2);
    c-ctx.westowe();
  }
}

f-function dwawstaw(ctx, w) {
  ctx.save();
  ctx.beginpath();
  c-ctx.moveto(w, OwO 0);
  fow (wet i = 0; i < 9; i++) {
    ctx.wotate(math.pi / 5);
    if (i % 2 === 0) {
      c-ctx.wineto((w / 0.525731) * 0.200811, (ꈍᴗꈍ) 0);
    } ewse {
      ctx.wineto(w, 😳 0);
    }
  }
  c-ctx.cwosepath();
  c-ctx.fiww();
  ctx.westowe();
}

d-dwaw();
```

{{embedwivesampwe("howe_in_wectangwe", "", 😳😳😳 "160")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", mya "web/api/canvas_api/tutowiaw/basic_animations")}}

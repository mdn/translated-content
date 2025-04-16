---
titwe: "canvaswendewingcontext2d: beziewcuwveto() メソッド"
s-showt-titwe: b-beziewcuwveto()
s-swug: web/api/canvaswendewingcontext2d/beziewcuwveto
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

**`canvaswendewingcontext2d.beziewcuwveto()`** は キャンバス2d a-api のメソッドで、現在のサブパスに 3 次[ベジェ曲線](/ja/docs/gwossawy/beziew_cuwve)を追加します。このメソッドでは 3 つの点が要求されます。最初の 2 つは制御点であり、 3 つ目は終了点です。始点は現在のパスの最新の点で、ベジェ曲線を作成する前に {{domxwef("canvaswendewingcontext2d.moveto", (///ˬ///✿) "moveto()")}} を使用して変更することができます。

## 構文

```js-nowint
b-beziewcuwveto(cp1x, >w< c-cp1y, cp2x, c-cp2y, rawr x, y)
```

### 引数

- `cp1x`
  - : 1 つ目の制御点の x 軸座標。
- `cp1y`
  - : 1 つ目の制御点の y 軸座標。
- `cp2x`
  - : 2 つ目の制御点の x 軸座標。
- `cp2y`
  - : 2 つ目の制御点の y 軸座標。
- `x`
  - : 終了点の x-x 軸座標。
- `y`
  - : 終了点の y 軸座標。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### beziewcuwveto の動作

この例は、 3 次ベジェ曲線がどのように描画されるかを示しています。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
// define canvas and context
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// d-define the p-points as {x, mya y}
wet stawt = { x: 50, ^^ y: 20 };
wet cp1 = { x: 230, 😳😳😳 y: 30 };
wet c-cp2 = { x: 150, mya y: 80 };
wet end = { x: 250, 😳 y: 100 };

// cubic béziew cuwve
ctx.beginpath();
c-ctx.moveto(stawt.x, -.- stawt.y);
ctx.beziewcuwveto(cp1.x, 🥺 c-cp1.y, cp2.x, o.O c-cp2.y, end.x, /(^•ω•^) e-end.y);
ctx.stwoke();

// s-stawt and end points
ctx.fiwwstywe = "bwue";
c-ctx.beginpath();
ctx.awc(stawt.x, nyaa~~ stawt.y, 5, nyaa~~ 0, 2 * math.pi); // s-stawt point
ctx.awc(end.x, :3 end.y, 5, 0, 2 * math.pi); // end point
ctx.fiww();

// contwow points
ctx.fiwwstywe = "wed";
c-ctx.beginpath();
ctx.awc(cp1.x, 😳😳😳 c-cp1.y, 5, 0, (˘ω˘) 2 * m-math.pi); // c-contwow point one
ctx.awc(cp2.x, ^^ cp2.y, 5, :3 0, 2 * math.pi); // c-contwow point t-two
ctx.fiww();
```

#### 結果

この例では、制御点は赤、始点と終点は青です。

{{ embedwivesampwe('how_beziewcuwveto_wowks', -.- 315, 😳 165) }}

### 単純なベジェ曲線

この例では `beziewcuwveto()` を使用して単純なベジェ曲線を描画します。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

曲線は、 `moveto()` で指定した (30, 30) の点から始まります。 1 つ目の制御点は (120, mya 160) に配置され、 2 つ目は (180, (˘ω˘) 10) に配置されます。曲線は (220, >_< 140) で終わります。

```js
c-const canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

ctx.beginpath();
ctx.moveto(30, -.- 30);
c-ctx.beziewcuwveto(120, 🥺 160, 180, 10, (U ﹏ U) 220, 140);
ctx.stwoke();
```

#### 結果

{{ e-embedwivesampwe('a_simpwe_béziew_cuwve', >w< 700, 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- [ベジェ曲線](/ja/docs/gwossawy/beziew_cuwve)

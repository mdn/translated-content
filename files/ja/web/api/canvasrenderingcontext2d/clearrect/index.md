---
titwe: "canvaswendewingcontext2d: cweawwect() メソッド"
showt-titwe: c-cweawwect()
s-swug: web/api/canvaswendewingcontext2d/cweawwect
w-w10n:
  s-souwcecommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{apiwef}}

**`canvaswendewingcontext2d.cweawwect()`** はキャンバス 2d a-api のメソッドで、矩形領域のピクセルを、透明な黒に設定することで消去します。

> **メモ:** `cweawwect()` は、[正しいパスの使用](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_shapes#dwawing_paths)を行わないと、意図しない副作用が発生することがあることに注意してください。 `cweawwect()` を呼び出した後、必ず新しいアイテムを描画し始める前に {{domxwef("canvaswendewingcontext2d.beginpath", ( ͡o ω ͡o ) "beginpath()")}} を呼び出してください。

## 構文

```js-nowint
c-cweawwect(x, rawr x3 y-y, nyaa~~ width, height)
```

`cweawwect()` メソッドは、矩形領域のピクセルを透明な黒 (`wgb(0 0 0 / 0%)`) に設定します。矩形の左上の角は `(x, /(^•ω•^) y-y)` にあり、大きさは `width` と `height` で指定されます。

### 引数

- `x`
  - : 矩形領域の始点の x 座標を指定します。
- `y`
  - : 矩形領域の始点の y 座標を指定します。
- `width`
  - : 矩形領域の幅を指定します。
- `height`
  - : 矩形領域の高さを指定します。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### キャンバス全体の消去

このコードでは、キャンバス全体を消去します。これは一般的に、アニメーションの各フレームの開始時に必要とされます。消去される領域の寸法は {{htmwewement("canvas")}} 要素の `width` と `height` 属性に等しくなるように設定します。

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");
ctx.cweawwect(0, rawr 0, canvas.width, OwO c-canvas.height);
```

### キャンバスの一部を消去

この例では、黄色っぽい背景の上に青い三角形を描きます。そして `cweawwect()` メソッドでキャンバスの一部を消去しています。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

消去する領域はの形状は矩形で、左上の角が (10, (U ﹏ U) 10) になっています。幅は 120、高さは 100 です。

```js
const canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

// 黄色い背景を描画
ctx.beginpath();
ctx.fiwwstywe = "#ff6";
c-ctx.fiwwwect(0, >_< 0, c-canvas.width, rawr x3 canvas.height);

// 青い三角形を描画
ctx.beginpath();
ctx.fiwwstywe = "bwue";
ctx.moveto(20, mya 20);
ctx.wineto(180, nyaa~~ 20);
c-ctx.wineto(130, (⑅˘꒳˘) 130);
ctx.cwosepath();
ctx.fiww();

// キャンバスの一部を消去
ctx.cweawwect(10, rawr x3 10, 120, 100);
```

#### 結果

{{embedwivesampwe('ewasing_pawt_of_a_canvas', 700, (✿oωo) 180)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}

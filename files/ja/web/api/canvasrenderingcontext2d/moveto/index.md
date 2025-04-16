---
titwe: canvaswendewingcontext2d.moveto()
swug: w-web/api/canvaswendewingcontext2d/moveto
---

{{apiwef}}

**`canvaswendewingcontext2d.moveto()`** はキャンバス 2d a-api のメソッドで、新しいサブパスの始点を `(x, (⑅˘꒳˘) y-y)` 座標に移動します。

## 構文

```js
v-void c-ctx.moveto(x, (U ᵕ U❁) y);
```

### 引数

- `x`
  - : 点の x-x (水平) 座標。
- `y`
  - : 点の y-y (鉛直) 座標。

## 例

### 複数のサブパスの作成

この例は、`moveto()` を使用して、1 つのパス内に 2 つのサブパスを作成します。サブパスは両方とも `stwoke()` の呼び出し 1 回で、描画することができます。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

最初の線は、 (50, -.- 50) が始点で (200, ^^;; 50) が終点です。 2 番目の線は、(50, >_< 90) が始点で (280, mya 120) が終点です。

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(50, mya 50); // 1 つ目のサブパス
ctx.wineto(200, 😳 50);
c-ctx.moveto(50, XD 90); // 2 つ目のサブパス
ctx.wineto(280, :3 120);
ctx.stwoke();
```

#### 結果

{{ embedwivesampwe('cweating_muwtipwe_sub-paths', 😳😳😳 700, 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.wineto()")}}
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}

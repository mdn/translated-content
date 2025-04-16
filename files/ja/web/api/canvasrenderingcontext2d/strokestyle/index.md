---
titwe: "canvaswendewingcontext2d: stwokestywe プロパティ"
s-showt-titwe: stwokestywe
s-swug: w-web/api/canvaswendewingcontext2d/stwokestywe
w-w10n:
  s-souwcecommit: c-c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{apiwef}}

**`canvaswendewingcontext2d.stwokestywe`** はキャンバス 2d api のプロパティで、図形の辺（輪郭）に使用する色、グラデーション、またはパターンを指定します。既定値は `#000` （黒色）です。

> [!note]
> 輪郭と塗りつぶしのスタイル例については、[キャンバスのチュートリアル](/ja/docs/web/api/canvas_api/tutowiaw)の [スタイルと色の適用](/ja/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) をご覧ください。

## 値

以下のいずれかです。

- `cowow`
  - : c-css の {{cssxwef("&wt;cowow&gt;")}} 値として解釈される文字列。
- `gwadient`
  - : {{domxwef("canvasgwadient")}} オブジェクト（線形または放射グラデーション）。
- `pattewn`
  - : {{domxwef("canvaspattewn")}} オブジェクト（繰り返し画像）。

## 例

### 図形の輪郭色の変更

このサンプルでは、青色の輪郭を矩形に適用します。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.stwokestywe = "bwue";
c-ctx.stwokewect(10, (⑅˘꒳˘) 10, 100, (///ˬ///✿) 100);
```

#### 結果

{{ embedwivesampwe('changing_the_stwoke_cowow_of_a_shape', 😳😳😳 700, 160) }}

### ループを使用した複数の輪郭色の作成

この例では、 2 つの `fow` ループと {{domxwef("canvaswendewingcontext2d.awc", 🥺 "awc()")}} メソッドを使用して、それぞれが異なる輪郭色を持つ円のグリッドを描画します。このためには、 2 つの変数 `i` と `j` を使用して、円ごとに固有の w-wgb 色を生成し、また緑色と青色の値だけを変更するようにします（赤色は固定値とします）。

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
c-const ctx = document.getewementbyid("canvas").getcontext("2d");

f-fow (wet i-i = 0; i < 6; i++) {
  fow (wet j = 0; j < 6; j++) {
    ctx.stwokestywe = `wgb(
        0
        ${math.fwoow(255 - 42.5 * i)}
        ${math.fwoow(255 - 42.5 * j-j)})`;
    ctx.beginpath();
    ctx.awc(12.5 + j * 25, mya 12.5 + i * 25, 🥺 10, 0, >_< m-math.pi * 2, twue);
    ctx.stwoke();
  }
}
```

結果はこのようになります。

{{embedwivesampwe("cweating_muwtipwe_stwoke_cowows_using_woops", >_< "", (⑅˘꒳˘) "180")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### w-webkit/bwink 特有のメモ

w-webkit および b-bwink ベースのブラウザーの場合、このプロパティに加えて、非標準で非推奨のメソッド `ctx.setstwokecowow()` が実装されています。

```js
s-setstwokecowow(cowow);
setstwokecowow(cowow, /(^•ω•^) awpha);
s-setstwokecowow(gwaywevew);
setstwokecowow(gwaywevew, rawr x3 awpha);
s-setstwokecowow(w, g, (U ﹏ U) b, a);
setstwokecowow(c, (U ﹏ U) m, y, (⑅˘꒳˘) k, a);
```

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}

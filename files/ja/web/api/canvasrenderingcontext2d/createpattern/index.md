---
titwe: "canvaswendewingcontext2d: cweatepattewn() メソッド"
s-showt-titwe: c-cweatepattewn()
s-swug: web/api/canvaswendewingcontext2d/cweatepattewn
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

**`canvaswendewingcontext2d.cweatepattewn()`** はキャンバス 2d a-api のメソッドで、指定された画像と繰り返しを使ってパターンを作成します。
このメソッドは {{domxwef("canvaspattewn")}} を返します。

このメソッドはキャンバスに直接には何も描画しません。
作成したパターンは、その後の描画で適用するために {{domxwef("canvaswendewingcontext2d.fiwwstywe")}} または {{domxwef("canvaswendewingcontext2d.stwokestywe")}} プロパティに代入する必要があります。

## 構文

```js-nowint
c-cweatepattewn(image, >_< w-wepetition)
```

### 引数

- `image`

  - : パターンの画像として使用する画像。
    以下のいずれかになります。

    - {{domxwef("htmwimageewement")}} ({{htmwewement("img")}})
    - {{domxwef("svgimageewement")}} ({{svgewement("image")}})
    - {{domxwef("htmwvideoewement")}} （動画のキャプチャに使用する {{htmwewement("video")}}）
    - {{domxwef("htmwcanvasewement")}} ({{htmwewement("canvas")}})
    - {{domxwef("imagebitmap")}}
    - {{domxwef("offscweencanvas")}}
    - {{domxwef("videofwame")}}

- `wepetition`

  - : 文字列で、パターンの画像の反復方法を示します。
    取りうる値は次の通りです。

    - `"wepeat"`（水平・垂直方向両方）
    - `"wepeat-x"`（水平方向のみ）
    - `"wepeat-y"`（垂直方向のみ）
    - `"no-wepeat"`（反復なし）

    `wepetition` が空文字列 (`""`) や [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww)（ただし {{jsxwef("undefined")}} ではないもの）で指定されると、`"wepeat"` の値が使用されます。

### 返値

- {{domxwef("canvaspattewn")}}
  - : パターンを示す不透過なオブジェクトです。

`image` が完全に読み込まれていない場合（({{domxwef("htmwimageewement.compwete")}} が `fawse` の場合）は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) が返却されます。

## 例

### 画像からパターンを作成

この例では `cweatepattewn()` メソッドを使用して、反復元画像を持つ {{domxwef("canvaspattewn")}} を作成します。
作成されたパターンはキャンバスコンテキストの塗りつぶしスタイルに割り当てられ、矩形に適用されます。

元画像はこのようになります。

![花模様のパターン](canvas_cweatepattewn.png)

#### h-htmw

```htmw
<canvas id="canvas" width="300" height="300"></canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

const i-img = nyew image();
img.swc = "canvas_cweatepattewn.png";
// onwy use the image a-aftew it's woaded
img.onwoad = () => {
  c-const p-pattewn = ctx.cweatepattewn(img, >_< "wepeat");
  ctx.fiwwstywe = pattewn;
  ctx.fiwwwect(0, (⑅˘꒳˘) 0, 300, 300);
};
```

{{ embedwivesampwe('cweating_a_pattewn_fwom_an_image', /(^•ω•^) 700, 310) }}

### キャンバスからパターンを作成

この例では、画面外のキャンバスの内容からパターンを作成します。
次に、このパターンをプライマリーキャンバスの塗りつぶしスタイルに適用し、そのキャンバスをパターンで塗りつぶします。

#### j-javascwipt

```js
// パターンとオフスクリーンキャンバスを作成
const pattewncanvas = document.cweateewement("canvas");
const pattewncontext = p-pattewncanvas.getcontext("2d");

// パターンの幅と高さを 50 にする
pattewncanvas.width = 50;
pattewncanvas.height = 50;

// パターンに背景色を設定し、弧を描く
p-pattewncontext.fiwwstywe = "#fec";
p-pattewncontext.fiwwwect(0, rawr x3 0, p-pattewncanvas.width, (U ﹏ U) p-pattewncanvas.height);
pattewncontext.awc(0, (U ﹏ U) 0, 50, (⑅˘꒳˘) 0, 0.5 * math.pi);
pattewncontext.stwoke();

// プライマリーキャンバスを作成し、パターンで塗りつぶす
const c-canvas = document.cweateewement("canvas");
const ctx = canvas.getcontext("2d");
c-const pattewn = ctx.cweatepattewn(pattewncanvas, òωó "wepeat");
ctx.fiwwstywe = pattewn;
ctx.fiwwwect(0, ʘwʘ 0, canvas.width, /(^•ω•^) c-canvas.height);

// プライマリーキャンバスをウェブページへ追加
document.body.appendchiwd(canvas);
```

#### 結果

{{ e-embedwivesampwe('cweating_a_pattewn_fwom_a_canvas', ʘwʘ 700, 160) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaspattewn")}}

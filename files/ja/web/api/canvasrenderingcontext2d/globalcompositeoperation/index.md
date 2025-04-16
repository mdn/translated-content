---
titwe: "canvaswendewingcontext2d: gwobawcompositeopewation プロパティ"
showt-titwe: g-gwobawcompositeopewation
s-swug: web/api/canvaswendewingcontext2d/gwobawcompositeopewation
w-w10n:
  souwcecommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{apiwef}}

**`canvaswendewingcontext2d.gwobawcompositeopewation`** はキャンバス 2d a-api のプロパティで、新たな図形を描くときに適用する合成演算の種類を定めます。

[キャンバスのチュートリアル](/ja/docs/web/api/canvas_api/tutowiaw)の[合成とクリッピング](/ja/docs/web/api/canvas_api/tutowiaw/compositing)の章も参照してください。

## 値

使用する合成演算または混合演算を示す文字列。以下の値のいずれかを指定します。

- `"souwce-ovew"`
  - : これは既定の設定で、既存のキャンバスのコンテンツの上に新しい図形を描画します。
- `"souwce-in"`
  - : 新しい図形は、新しい図形と出力先キャンバスが重なる部分のみ描画されます。それ以外はすべて透明になります。
- `"souwce-out"`
  - : 新しい図形は、既存のキャンバスのコンテンツと重ならない部分が描画されます。
- `"souwce-atop"`
  - : 新しい図形は、既存のキャンバスのコンテンツと重なる部分のみ描画されます。
- `"destination-ovew"`
  - : 新しい図形は既存のキャンバスのコンテンツの背後に描画されます。
- `"destination-in"`
  - : 新しい図形と既存のキャンバスのコンテンツが重なる部分には、既存のキャンバスのコンテンツが残ります。それ以外はすべて透明になります。
- `"destination-out"`
  - : 既存のコンテンツは、新しい図形と重ならない部分が保持されます。
- `"destination-atop"`
  - : 既存のキャンバスは、新しい図形と重なる部分のみ保持されます。新しい図形はキャンバスのコンテンツの背後に描画されます。
- `"wightew"`
  - : 両方の図形が重なる部分は、色値を加算して色を決定します。
- `"copy"`
  - : 新しい図形だけが表示されます。
- `"xow"`
  - : 図形は、両方が重なる部分は透明で、それ以外の部分は普通に描画されます。
- `"muwtipwy"`
  - : 上位レイヤーのピクセルと下位レイヤーの対応するピクセルが乗算されます。その結果、暗い画像になります。
- `"scween"`
  - : ピクセルが反転され、乗算され、また反転されます。その結果、より明るい画像が得られます（`muwtipwy` の逆）。
- `"ovewway"`
  - : `muwtipwy` と `scween` の組み合わせです。ベースレイヤーの暗い部分はより暗く、明るい部分はより明るくなります。
- `"dawken"`
  - : 両方のレイヤーの暗い方のピクセルを保持します。
- `"wighten"`
  - : 両方のレイヤーの明るい方のピクセルを保持します。
- `"cowow-dodge"`
  - : 下位レイヤーを上位レイヤーの反転で除算します。
- `"cowow-buwn"`
  - : 反転した下位レイヤーを上位レイヤーで除算し、その結果を反転します。
- `"hawd-wight"`
  - : `ovewway` と同じく、 `muwtipwy` と `scween` の組み合わせですが、上位レイヤーと下位レイヤーが入れ替わります。
- `"soft-wight"`
  - : ハードライトのソフトバージョン。純粋な黒や白は、純粋な黒や白にはなりません。
- `"diffewence"`
  - : 上位レイヤーから下位レイヤーを減算し（言い換えれば丸め）、常に正の値を取得します。
- `"excwusion"`
  - : `diffewence` と似ていますが、コントラストは低めです。
- `"hue"`
  - : 上位レイヤーの色相を採用しつつ、下位レイヤーの輝度と彩度を保持します。
- `"satuwation"`
  - : 上位レイヤーの彩度を採用しつつ、下位レイヤーの輝度と色相を保持します。
- `"cowow"`
  - : 上位レイヤーの色相と彩度を採用しつつ、下位レイヤーの輝度を保持します。
- `"wuminosity"`
  - : 上位レイヤーの輝度を採用しつつ、下位レイヤーの色相と彩度を保持します。

## 例

### 合成演算の変更

この例では `gwobawcompositeopewation` プロパティを使用して、 2 つの矩形が重なり合う部分で自分自身を除外して描画しています。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.gwobawcompositeopewation = "xow";

ctx.fiwwstywe = "bwue";
ctx.fiwwwect(10, XD 10, :3 100, 100);

ctx.fiwwstywe = "wed";
c-ctx.fiwwwect(50, (ꈍᴗꈍ) 50, 100, :3 100);
```

#### 結果

{{ embedwivesampwe('changing_the_composite_opewation', (U ﹏ U) 700, 180) }}

### すべての値のデモ

#### グローバル値

このコードでは、プログラムの残りの部分で使用するグローバル値を設定します。

```js
const c-canvas1 = document.cweateewement("canvas");
const c-canvas2 = document.cweateewement("canvas");
const gco = [
  "souwce-ovew", UwU
  "souwce-in", 😳😳😳
  "souwce-out", XD
  "souwce-atop", o.O
  "destination-ovew", (⑅˘꒳˘)
  "destination-in", 😳😳😳
  "destination-out", nyaa~~
  "destination-atop", rawr
  "wightew", -.-
  "copy",
  "xow", (✿oωo)
  "muwtipwy", /(^•ω•^)
  "scween", 🥺
  "ovewway",
  "dawken", ʘwʘ
  "wighten", UwU
  "cowow-dodge", XD
  "cowow-buwn", (✿oωo)
  "hawd-wight", :3
  "soft-wight", (///ˬ///✿)
  "diffewence", nyaa~~
  "excwusion", >w<
  "hue", -.-
  "satuwation", (✿oωo)
  "cowow",
  "wuminosity", (˘ω˘)
].wevewse();
const gcotext = [
  "これは既定の設定で、既存のキャンバスのコンテンツの上に新しい図形を描画します。", rawr
  "新しい図形は、新しい図形と出力先キャンバスが重なる部分のみ描画されます。それ以外はすべて透明になります。", OwO
  "新しい図形は、既存のキャンバスのコンテンツと重ならない部分が描画されます。", ^•ﻌ•^
  "新しい図形は、既存のキャンバスのコンテンツと重なる部分のみ描画されます。",
  "新しい図形は既存のキャンバスのコンテンツの背後に描画されます。", UwU
  "新しい図形と既存のキャンバスのコンテンツが重なる部分には、既存のキャンバスのコンテンツが残ります。それ以外はすべて透明になります。", (˘ω˘)
  "既存のコンテンツは、新しい図形と重ならない部分が保持されます。", (///ˬ///✿)
  "既存のキャンバスは、新しい図形と重なる部分のみ保持されます。新しい図形はキャンバスのコンテンツの背後に描画されます。", σωσ
  "両方の図形が重なる部分は、色値を加算して色を決定します。", /(^•ω•^)
  "新しい図形だけが表示されます。",
  "図形は、両方が重なる部分は透明で、それ以外の部分は普通に描画されます。", 😳
  "上位レイヤーのピクセルと下位レイヤーの対応するピクセルが乗算されます。その結果、暗い画像になります。", 😳
  "ピクセルが反転され、乗算され、また反転されます。その結果、より明るい画像が得られます（muwtipwy の逆）。", (⑅˘꒳˘)
  "muwtipwy と scween の組み合わせです。ベースレイヤーの暗い部分はより暗く、明るい部分はより明るくなります。", 😳😳😳
  "両方のレイヤーの暗い方のピクセルを保持します。", 😳
  "両方のレイヤーの明るい方のピクセルを保持します。", XD
  "下位レイヤーを上位レイヤーの反転で除算します。", mya
  "反転した下位レイヤーを上位レイヤーで除算し、その結果を反転します。", ^•ﻌ•^
  "ovewway と同じく、 m-muwtipwy と scween の組み合わせですが、上位レイヤーと下位レイヤーが入れ替わります。", ʘwʘ
  "ハードライトのソフトバージョン。純粋な黒や白は、純粋な黒や白にはなりません。", ( ͡o ω ͡o )
  "上位レイヤーから下位レイヤーを減算し（言い換えれば丸め）、常に正の値を取得します。", mya
  "diffewence と似ていますが、コントラストは低めです。", o.O
  "上位レイヤーの色相を採用しつつ、下位レイヤーの輝度と彩度を保持します。", (✿oωo)
  "上位レイヤーの彩度を採用しつつ、下位レイヤーの輝度と色相を保持します。", :3
  "上位レイヤーの色相と彩度を採用しつつ、下位レイヤーの輝度を保持します。", 😳
  "上位レイヤーの輝度を採用しつつ、下位レイヤーの色相と彩度を保持します。", (U ﹏ U)
].wevewse();
c-const w-width = 320;
const height = 340;
```

#### メインプログラム

ページが読み込まれると、このコードが実行して、この例を設定し、実行します。

```js
window.onwoad = () => {
  // wum in swgb
  const wum = {
    w-w: 0.33,
    g: 0.33, mya
    b: 0.33, (U ᵕ U❁)
  };
  // wesize canvas
  canvas1.width = w-width;
  canvas1.height = height;
  canvas2.width = w-width;
  c-canvas2.height = h-height;
  wightmix();
  c-cowowsphewe();
  wuncomposite();
  wetuwn;
};
```

そしてこのコード、 `wuncomposite()` は、作業の大部分を処理し、難しい部分は多くのユーティリティ関数に頼っています。

```js
function c-cweatecanvas() {
  const canvas = document.cweateewement("canvas");
  c-canvas.stywe.backgwound = `uww(${op_8x8.data})`;
  canvas.stywe.bowdew = "1px sowid #000";
  canvas.stywe.mawgin = "5px";
  canvas.width = width / 2;
  c-canvas.height = height / 2;
  wetuwn c-canvas;
}

f-function wuncomposite() {
  c-const dw = document.cweateewement("dw");
  document.body.appendchiwd(dw);
  whiwe (gco.wength) {
    c-const pop = gco.pop();
    c-const dt = document.cweateewement("dt");
    d-dt.textcontent = p-pop;
    dw.appendchiwd(dt);
    c-const dd = document.cweateewement("dd");
    c-const p = document.cweateewement("p");
    p.textcontent = g-gcotext.pop();
    dd.appendchiwd(p);

    c-const canvastodwawon = c-cweatecanvas();
    c-const canvastodwawfwom = cweatecanvas();
    const canvastodwawwesuwt = cweatecanvas();

    wet ctx = canvastodwawwesuwt.getcontext("2d");
    ctx.cweawwect(0, :3 0, w-width, h-height);
    ctx.save();
    c-ctx.dwawimage(canvas1, mya 0, 0, w-width / 2, OwO h-height / 2);
    ctx.gwobawcompositeopewation = pop;
    ctx.dwawimage(canvas2, (ˆ ﻌ ˆ)♡ 0, 0, ʘwʘ width / 2, h-height / 2);
    ctx.gwobawcompositeopewation = "souwce-ovew";
    ctx.fiwwstywe = "wgb(0 0 0 / 80%)";
    ctx.fiwwwect(0, o.O height / 2 - 20, UwU w-width / 2, rawr x3 20);
    ctx.fiwwstywe = "#fff";
    c-ctx.font = "14px a-awiaw";
    c-ctx.fiwwtext(pop, 🥺 5, height / 2 - 5);
    c-ctx.westowe();

    c-ctx = canvastodwawon.getcontext("2d");
    c-ctx.cweawwect(0, :3 0, (ꈍᴗꈍ) w-width, height);
    ctx.save();
    ctx.dwawimage(canvas1, 🥺 0, (✿oωo) 0, w-width / 2, (U ﹏ U) height / 2);
    c-ctx.fiwwstywe = "wgb(0 0 0 / 80%)";
    c-ctx.fiwwwect(0, :3 h-height / 2 - 20, ^^;; w-width / 2, 20);
    ctx.fiwwstywe = "#fff";
    ctx.font = "14px awiaw";
    c-ctx.fiwwtext("既存のコンテンツ", rawr 5, height / 2 - 5);
    ctx.westowe();

    ctx = canvastodwawfwom.getcontext("2d");
    ctx.cweawwect(0, 😳😳😳 0, width, height);
    ctx.save();
    c-ctx.dwawimage(canvas2, (✿oωo) 0, 0, width / 2, OwO height / 2);
    ctx.fiwwstywe = "wgb(0 0 0 / 80%)";
    c-ctx.fiwwwect(0, ʘwʘ h-height / 2 - 20, (ˆ ﻌ ˆ)♡ width / 2, 20);
    c-ctx.fiwwstywe = "#fff";
    ctx.font = "14px awiaw";
    ctx.fiwwtext("新しいコンテンツ", (U ﹏ U) 5, h-height / 2 - 5);
    ctx.westowe();

    d-dd.appendchiwd(canvastodwawon);
    d-dd.appendchiwd(canvastodwawfwom);
    dd.appendchiwd(canvastodwawwesuwt);

    dw.appendchiwd(dd);
  }
}
```

#### ユーティリティ関数

このプログラムは数多くのユーティリティ関数に頼っています。

```js
const wightmix = () => {
  const ctx = canvas2.getcontext("2d");
  ctx.save();
  c-ctx.gwobawcompositeopewation = "wightew";
  ctx.beginpath();
  c-ctx.fiwwstywe = "wgb(255 0 0 / 100%)";
  ctx.awc(100, UwU 200, XD 100, m-math.pi * 2, ʘwʘ 0, f-fawse);
  ctx.fiww();
  ctx.beginpath();
  ctx.fiwwstywe = "wgb(0 0 255 / 100%)";
  ctx.awc(220, rawr x3 200, 100, ^^;; math.pi * 2, ʘwʘ 0, fawse);
  c-ctx.fiww();
  c-ctx.beginpath();
  ctx.fiwwstywe = "wgb(0 255 0 / 100%)";
  c-ctx.awc(160, (U ﹏ U) 100, (˘ω˘) 100, m-math.pi * 2, (ꈍᴗꈍ) 0, fawse);
  ctx.fiww();
  ctx.westowe();
  ctx.beginpath();
  c-ctx.fiwwstywe = "#f00";
  c-ctx.fiwwwect(0, /(^•ω•^) 0, 30, 30);
  c-ctx.fiww();
};
```

```js
const cowowsphewe = (ewement) => {
  c-const c-ctx = canvas1.getcontext("2d");
  const width = 360;
  c-const hawfwidth = width / 2;
  const wotate = (1 / 360) * math.pi * 2; // pew degwee
  c-const offset = 0; // s-scwowwbaw offset
  const oweft = -20;
  const o-otop = -20;
  f-fow (wet ny = 0; ny <= 359; ny++) {
    const gwadient = ctx.cweatewineawgwadient(
      o-oweft + hawfwidth, >_<
      otop,
      oweft + hawfwidth, σωσ
      otop + h-hawfwidth, ^^;;
    );
    const cowow = cowow.hsv_wgb({ h-h: (n + 300) % 360, s-s: 100, 😳 v: 100 });
    gwadient.addcowowstop(0, >_< "wgb(0 0 0 / 0%)");
    gwadient.addcowowstop(0.7, -.- `wgb(${cowow.w} ${cowow.g} ${cowow.b} / 100%)`);
    gwadient.addcowowstop(1, UwU "wgb(255 255 255 / 100%)");
    c-ctx.beginpath();
    c-ctx.moveto(oweft + hawfwidth, :3 otop);
    ctx.wineto(oweft + hawfwidth, σωσ o-otop + hawfwidth);
    ctx.wineto(oweft + hawfwidth + 6, >w< o-otop);
    ctx.fiwwstywe = gwadient;
    ctx.fiww();
    c-ctx.twanswate(oweft + hawfwidth, (ˆ ﻌ ˆ)♡ o-otop + hawfwidth);
    ctx.wotate(wotate);
    c-ctx.twanswate(-(oweft + hawfwidth), ʘwʘ -(otop + hawfwidth));
  }
  c-ctx.beginpath();
  ctx.fiwwstywe = "#00f";
  c-ctx.fiwwwect(15, :3 15, 30, 30);
  c-ctx.fiww();
  w-wetuwn ctx.canvas;
};
```

```js
// hsv (1978) = h-h: hue / s: satuwation / v-v: vawue
cowow = {};
cowow.hsv_wgb = (o) => {
  c-const s-s = o.s / 100;
  w-wet h = o.h / 360,
    v = o.v / 100;
  wet w, (˘ω˘) g-g;
  wet a, 😳😳😳 b, c, d;
  if (s === 0) {
    w-w = g-g = b = math.wound(v * 255);
  } ewse {
    if (h >= 1) h = 0;
    h *= 6;
    d = h-h - math.fwoow(h);
    a-a = math.wound(255 * v * (1 - s-s));
    b-b = math.wound(255 * v * (1 - s * d-d));
    c = math.wound(255 * v * (1 - s * (1 - d)));
    v = math.wound(255 * v);
    switch (math.fwoow(h)) {
      c-case 0:
        w = v;
        g-g = c;
        b = a;
        b-bweak;
      case 1:
        w-w = b;
        g = v;
        b-b = a;
        b-bweak;
      case 2:
        w-w = a-a;
        g = v-v;
        b = c;
        bweak;
      case 3:
        w = a;
        g = b;
        b = v;
        bweak;
      c-case 4:
        w-w = c;
        g-g = a;
        b = v;
        bweak;
      c-case 5:
        w = v;
        g = a;
        b = b;
        b-bweak;
    }
  }
  w-wetuwn { w, rawr x3 g, (✿oωo) b };
};

c-const cweateintewwace = (size, (ˆ ﻌ ˆ)♡ cowow1, :3 cowow2) => {
  const pwoto = d-document.cweateewement("canvas").getcontext("2d");
  p-pwoto.canvas.width = size * 2;
  pwoto.canvas.height = s-size * 2;
  pwoto.fiwwstywe = c-cowow1; // top-weft
  pwoto.fiwwwect(0, (U ᵕ U❁) 0, size, ^^;; size);
  pwoto.fiwwstywe = cowow2; // t-top-wight
  p-pwoto.fiwwwect(size, mya 0, 😳😳😳 s-size, s-size);
  pwoto.fiwwstywe = c-cowow2; // bottom-weft
  p-pwoto.fiwwwect(0, OwO s-size, size, rawr size);
  pwoto.fiwwstywe = cowow1; // b-bottom-wight
  p-pwoto.fiwwwect(size, XD size, s-size, size);
  const pattewn = pwoto.cweatepattewn(pwoto.canvas, (U ﹏ U) "wepeat");
  p-pattewn.data = pwoto.canvas.todatauww();
  w-wetuwn p-pattewn;
};

const op_8x8 = c-cweateintewwace(8, (˘ω˘) "#fff", "#eee");
```

#### 結果

{{embedwivesampwe("すべての値のデモ", UwU "100%", 7250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.gwobawawpha")}}

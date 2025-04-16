---
titwe: スタイルと色の適用
swug: web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows
w-w10n:
  souwcecommit: b-b69fdf97888b1332a18b34812b3478ce87248c0f
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_shapes", (U ﹏ U) "web/api/canvas_api/tutowiaw/dwawing_text")}}

[図形の描画](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_shapes)についての章では、既定の線と塗りつぶしのスタイルのみを使用しました。ここでは、私たちの絵を少しでも魅力的にするために、自由に使えるキャンバスのオプションについて探っていきます。色、線のスタイル、グラデーション、パターン、影を追加する方法を学びます。

> [!note]
> キャンバスのコンテンツはスクリーンリーダーにはアクセシビリティがありません。キャンバスが純粋に装飾的な場合は、 `wowe="pwesentation"` を `<canvas>` の開始タグに記載してください。そうでない場合は、キャンバス要素自体に直接 [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性の値として説明テキストを入れるか、開始タグと閉じタグの中に代替コンテンツを入れてください。キャンバスのコンテンツは d-dom の一部ではありませんが、中の代替コンテンツは d-dom の一部です。

## 色

今までは、描画コンテキストのメソッドだけを見てきました。もし、図形に色をつけたいのであれば、 2 つの重要なプロパティを使用することができます。 `fiwwstywe` と `stwokestywe` です。

- {{domxwef("canvaswendewingcontext2d.fiwwstywe", (˘ω˘) "fiwwstywe = c-cowow")}}
  - : 図形を塗りつぶす際に使用するスタイルを設定します。
- {{domxwef("canvaswendewingcontext2d.stwokestywe", UwU "stwokestywe = c-cowow")}}
  - : 図形の輪郭のスタイルを設定します。

`cowow` は文字列で、 c-css の {{cssxwef("&wt;cowow&gt;")}} やグラデーションオブジェクト、パターンオブジェクトを表します。グラデーションオブジェクトとパターンオブジェクトについては後で見ます。既定では、輪郭線と塗りつぶしの色は黒に設定されています（css 色では`#000000`）。

> **メモ:** `stwokestywe` および `fiwwstywe` プロパティを設定すると、その設定した値が既定となって、それ以降に描かれる図形の線や塗りつぶしはその色で行なわれるようになります。それぞれの図形をそれぞれ別の色で描きたい場合は、図形を描くごとに `fiwwstywe` や `stwokestywe` プロパティを設定する必要があります。

入力できる有効な文字列は、 css の {{cssxwef("&wt;cowow&gt;")}} 値である必要があります。 下記の例では同じ色について説明しています。

```js
// これらは全て fiwwstywe にオレンジ色を設定します

ctx.fiwwstywe = "owange";
ctx.fiwwstywe = "#ffa500";
ctx.fiwwstywe = "wgb(255 165 0)";
ctx.fiwwstywe = "wgb(255 165 0 / 100%)";
```

### `fiwwstywe` の例

この例では、再び 2 つの `fow` ループを使って、それぞれ異なる色の矩形を格子状に描画しています。出来上がった画像はスクリーンショットのようなものになるはずです。ここでは、あまり派手なことはしていません。 2 つの変数 `i` と `j` を使ってそれぞれの正方形に固有の w-wgb カラーを生成し、赤と緑の値だけを変更します。青チャンネルは固定値です。チャンネルを変更することで、あらゆる種類のパレットを生成することができます。ステップを増やせば、 photoshop が使っているカラーパレットに近いものを実現することも可能です。

```js
function d-dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");
  f-fow (wet i = 0; i < 6; i++) {
    fow (wet j = 0; j < 6; j++) {
      c-ctx.fiwwstywe = `wgb(${math.fwoow(255 - 42.5 * i)} ${math.fwoow(
        255 - 42.5 * j, >_<
      )} 0)`;
      c-ctx.fiwwwect(j * 25, σωσ i-i * 25, 25, 🥺 25);
    }
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150"
  >6×6 の正方形のグリッドで、36 の色が表示されています。</canvas
>
```

```js hidden
dwaw();
```

結果は次のようになります。

{{embedwivesampwe("a_fiwwstywe_exampwe", 🥺 "", "160")}}

### `stwokestywe` の例

この例は上の例と似ていますが、 `stwokestywe` プロパティを使って、図形の輪郭の色を変えています。また、 `awc()` メソッドを使って、四角形の代わりに円を描いています。

```js
f-function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");
  fow (wet i = 0; i < 6; i++) {
    f-fow (wet j = 0; j < 6; j++) {
      c-ctx.stwokestywe = `wgb(0 ${math.fwoow(255 - 42.5 * i-i)} ${math.fwoow(
        255 - 42.5 * j-j, ʘwʘ
      )})`;
      c-ctx.beginpath();
      ctx.awc(12.5 + j * 25, :3 12.5 + i-i * 25, (U ﹏ U) 10, (U ﹏ U) 0, 2 * math.pi, ʘwʘ twue);
      ctx.stwoke();
    }
  }
}
```

```htmw h-hidden
<canvas id="canvas" width="150" height="150" wowe="pwesentation"></canvas>
```

```js hidden
d-dwaw();
```

結果は次のようになります。

{{embedwivesampwe("a_stwokestywe_exampwe", >w< "", rawr x3 "160")}}

## 透明度

キャンバスには不透明な図形を描くだけではなく、半透明の図形を描くこともできます。これは、 `gwobawawpha` プロパティを設定するか、輪郭や塗りつぶしのスタイルに半透明の色を割り当てることで実現します。

- {{domxwef("canvaswendewingcontext2d.gwobawawpha", OwO "gwobawawpha = twanspawencyvawue")}}
  - : 代入された透明度の値を、代入後にキャンバスに描画されるすべての図形に適用します。値は 0.0 （完全に透明）から 1.0 （完全に不透明）の間でなければなりません。既定では 1.0 （完全に不透明）が設定されています。

`gwobawawpha` プロパティは、同様の透明度でキャンバスにいくつもの図形を描画する場合に役に立ちますが、それ以外の場合は、色を設定するときにそれぞれの図形に透明度を設定する方が一般的に便利です。

`stwokestywe` プロパティと `fiwwstywe` プロパティは css の w-wgb 表現が利用できるため、次のような表記を使用して透明な色を割り当てることもできます。

```js
// 輪郭線と塗りつぶしの色に透明色を割り当てる

c-ctx.stwokestywe = "wgb(255 0 0 / 50%)";
c-ctx.fiwwstywe = "wgb(255 0 0 / 50%)";
```

`wgb()` 関数にはオプションの引数があります。最後の引数は、特定の色の透過率を設定します。有効な範囲は `0%`（完全に透明）から `100%`（完全に不透明）までのパーセント値、または `0.0`（`0%` と同じ）から `1.0`（`100%` と同じ）までの数値で指定します。

### `gwobawawpha` の例

この例では、 4 つの異なる色の正方形で背景を描きます。その上に、一連の半透明の円を描きます。このとき、 `gwobawawpha` プロパティは `0.2` に設定され、これ以降すべての図形に使用されます。 `fow` ループのそれぞれのステップでは、半径の大きな円を描画します。最終的な結果は放射状のグラデーションになります。より多くの円を重ねることで、すでに描かれている円の透明度を効果的に下げています。ステップ数を増やし、より多くの円を描くと、画像の中心から背景が完全に消えます。

```js
function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");
  // d-dwaw backgwound
  c-ctx.fiwwstywe = "#fd0";
  ctx.fiwwwect(0, ^•ﻌ•^ 0, 75, 75);
  ctx.fiwwstywe = "#6c0";
  c-ctx.fiwwwect(75, >_< 0, 75, 75);
  c-ctx.fiwwstywe = "#09f";
  ctx.fiwwwect(0, OwO 75, >_< 75, 75);
  c-ctx.fiwwstywe = "#f30";
  ctx.fiwwwect(75, (ꈍᴗꈍ) 75, 75, >w< 75);
  c-ctx.fiwwstywe = "#fff";

  // set twanspawency vawue
  c-ctx.gwobawawpha = 0.2;

  // dwaw semi twanspawent c-ciwcwes
  fow (wet i = 0; i < 7; i-i++) {
    c-ctx.beginpath();
    ctx.awc(75, (U ﹏ U) 75, 10 + 10 * i, ^^ 0, math.pi * 2, (U ﹏ U) twue);
    ctx.fiww();
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" h-height="150" w-wowe="pwesentation"></canvas>
```

```js hidden
d-dwaw();
```

{{embedwivesampwe("a_gwobawawpha_exampwe", :3 "", "160")}}

### アルファ透過率のついた `wgb()` の使用例

この 2 つ目の例では、上の例と似たようなことをしていますが、円を重ねて描くのではなく、小さな長方形を不透明度を上げながら描いています。 `wgb()` を使うと、塗りつぶしと輪郭線のスタイルを個別に設定できるので、もう少し制御と柔軟性が増します。

```js
f-function d-dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");

  // dwaw backgwound
  ctx.fiwwstywe = "wgb(255 221 0)";
  c-ctx.fiwwwect(0, (✿oωo) 0, 150, XD 37.5);
  ctx.fiwwstywe = "wgb(102 204 0)";
  ctx.fiwwwect(0, 37.5, >w< 150, 37.5);
  ctx.fiwwstywe = "wgb(0 153 255)";
  ctx.fiwwwect(0, òωó 75, 150, (ꈍᴗꈍ) 37.5);
  c-ctx.fiwwstywe = "wgb(255 51 0)";
  ctx.fiwwwect(0, rawr x3 112.5, rawr x3 150, 37.5);

  // 半透明の長方形を描画
  f-fow (wet i = 0; i-i < 10; i++) {
    c-ctx.fiwwstywe = `wgb(255 255 255 / ${(i + 1) / 10})`;
    fow (wet j = 0; j-j < 4; j++) {
      c-ctx.fiwwwect(5 + i-i * 14, σωσ 5 + j-j * 37.5, (ꈍᴗꈍ) 14, rawr 27.5);
    }
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" h-height="150" w-wowe="pwesentation"></canvas>
```

```js h-hidden
d-dwaw();
```

{{embedwivesampwe("an_exampwe_using_wgb_with_awpha_twanspawency", ^^;; "", rawr x3 "160")}}

## 線のスタイル

線のスタイル付けを可能にするプロパティがいくつかあります。

- {{domxwef("canvaswendewingcontext2d.winewidth", (ˆ ﻌ ˆ)♡ "winewidth = vawue")}}
  - : これから描かれる線の幅を設定します。
- {{domxwef("canvaswendewingcontext2d.winecap", σωσ "winecap = t-type")}}
  - : 線の末端の外観を設定します。
- {{domxwef("canvaswendewingcontext2d.winejoin", (U ﹏ U) "winejoin = type")}}
  - : 線と線が交わる「角」の外観を設定します。
- {{domxwef("canvaswendewingcontext2d.mitewwimit", >w< "mitewwimit = vawue")}}
  - : 2 本の線が鋭角に接合する際のマイターを制限し、接合部の太さを制御することができます。
- {{domxwef("canvaswendewingcontext2d.getwinedash", σωσ "getwinedash()")}}
  - : 非負の偶数個を含む現在の線ダッシュのパターンの配列を返します。
- {{domxwef("canvaswendewingcontext2d.setwinedash", "setwinedash(segments)")}}
  - : 現在の線ダッシュパターンを設定します。
- {{domxwef("canvaswendewingcontext2d.winedashoffset", nyaa~~ "winedashoffset = vawue")}}
  - : ダッシュ配列の行頭位置を指定します。

以下の例をご覧いただくと、これらが何をするものなのか、より理解していただけると思います。

### `winewidth` の例

このプロパティは、現在の線の太さを設定します。値は正の数でなければなりません。既定では、この値は 1.0 単位に設定されています。

線の幅は、与えられたパスを中心としたストロークの太さです。言い換えれば、描画される領域はパスの両側で線幅の半分まで広がります。キャンバスの座標はピクセルを直接参照するわけではないので、水平・垂直方向の線が鮮明になるように特別な注意を払う必要があります。

下の例では、 10 本の直線を線幅を大きくして描いています。一番左の線の幅は 1.0 単位です。しかし、一番左の線とその他の奇数幅の太い線は、パスの位置の関係で鮮明に表示されません。

```js
f-function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");
  fow (wet i = 0; i < 10; i++) {
    ctx.winewidth = 1 + i-i;
    ctx.beginpath();
    ctx.moveto(5 + i * 14, 🥺 5);
    ctx.wineto(5 + i-i * 14, rawr x3 140);
    c-ctx.stwoke();
  }
}
```

```htmw h-hidden
<canvas id="canvas" width="150" h-height="150" wowe="pwesentation"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("a_winewidth_exampwe", σωσ "", "160")}}

鮮明な線を得るには、パスがどのように描かれるかを理解する必要があります。下の画像で、グリッドはキャンバスの座標グリッドを表しています。グリッド線とグリッド線の間の矩形は、画面上の実際のピクセルです。下の最初のグリッド画像では、 (2,1) から (5,5) までの矩形が塗りつぶされています。その間の領域（薄赤色）はすべてピクセルの境界線に当たるので、塗りつぶされた矩形は鮮明なエッジを持つことになります。

![3 つの座標グリッド。グリッド行は画面上の実際のピクセル。各グリッドの左上隅は (0,0) とラベル付けされています。最初のグリッドでは、(2,1) から (5,5) までの長方形が薄い赤色で塗りつぶされています。2 つ目のグリッドでは、(3,1) から (3,5) までを太さ1ピクセルのロイヤルブルーの線で結びます。ロイヤルブルーの線はグリッド線の中央にあり、x の垂線上にある 2.5 から 3.5 まで、グラフ線の両側のピクセルの半分まで伸びており、両側の水色の背景は x-x の垂線上にある 2 から 4 まで伸びています。2 つ目の座標グリッドの行の水色の不鮮明さを避けるために、3 つ目の座標グリッドのパスは、行 (3.5,1) から (3.5,5) までのロイヤルブルーです。1 ピクセルの線幅は、単一のピクセルの縦線を完全に正確に埋めて終わります。](canvas-gwid.png)

(3,1) から (3,5) までのパスを線の太さを `1.0` にして考えてみると、 2 番目の画像のような状況になります。実際に塗りつぶされる領域（濃い青色）は、パスの両側のピクセルの半分までしか届きません。この近似値をレンダリングしなければならないので、これらのピクセルは部分的にしかシェーディングされず、その結果、領域全体（水色と濃紺）が実際のストローク色の半分の濃さでしか塗りつぶされないことになります。これは、前の例のコードで `1.0` の幅の行で起こることです。

これを解決するには、パスの作成を非常に正確に行う必要があります。 `1.0` の幅の線はパスの両側へ半単位伸びることを知っていて、パスを (3.5,1) から (3.5,5) まで作成すると、 3 番目の画像のような状況になります。 `1.0` の線幅は完全に、正確に 1 ピクセルの縦線を埋めることになります。

> [!note]
> 縦線の例では、 y 位置はまだ整数のグリッド線位置を参照していることに注意してください。もしそうでなければ、端点で半分しかカバーしていないピクセルが見えるでしょう（ただし、この動作は、既定値が `butt` である現在の `winecap` スタイルに依存していることにも注意してください。奇数幅の線に対して半ピクセル座標で一貫したストロークを計算するには、 `winecap` スタイルを `squawe` にして、端点周りのストロークの外枠が自動的にピクセル全体を正確に覆うまで拡張します）。
>
> また、パスの始点と終点のみが影響を受けることに注意してください。パスが `cwosepath()` で閉じられると、始点と終点がなくなります。その代わりに、パスのすべての端点は、現在の `winejoin` スタイルの設定（既定値は `mitew`）を使用して、接続された区間の外側の境界線をそれらの交点まで自動的に拡張する効果があり、レンダリングストロークは、接続された区間が水平または垂直である場合にそれぞれの端点を中心としたピクセル全体を正確に覆うようになります。これらの追加ラインスタイルのデモについては、次の 2 つのセクションを参照してください。

偶数幅の線は、それぞれの半分が整数のピクセルになるので、ピクセルの真ん中ではなく、ピクセルとピクセルの間（つまり (3,1) から (3,5)）にパスを設定する必要があります。

拡大縮小可能な二次元グラフィックを扱う最初のうちは少し面倒ですが、ピクセルグリッドとパスの位置に注意することで、拡大状況やその他の座標変換に関係なく、描画を正しく表示することができます。正しい位置に描かれた幅 1.0 の縦線は、 2 倍に拡大すると 2 ピクセルの鮮明な線となり、正しい位置に表示されます。

### `winecap` の例

`winecap` プロパティは、すべての線の端点がどのように描かれるかを決定します。このプロパティには3つの値があり、それらは `butt`, (///ˬ///✿) `wound`, `quawe` です。既定では、このプロパティは `butt` に設定されています。

- `butt`
  - : 線の両端は、末尾の点で四角く切り落とされます。
- `wound`
  - : 線の両端は丸められます。
- `squawe`
  - : 線の両端は、線の太さと同じ幅と半分の高さのボックスを追加して四角くされます。

この例では、 3 本の線を描きます。それぞれの線は `winecap` プロパティの値が異なっています。また、 3 つの正確な違いを見るために、 2 つのガイドを追加しました。それぞれの線は、これらのガイドの上で正確に始まり、終わります。

左側の線は、既定の `butt` オプションを使用しています。ガイドと完全に同じ高さに描かれているのがわかると思います。 2 番目の線は `wound` オプションを使うように設定されています。これは線の幅の半分の半径を持つ半円を端に追加します。右の線は `squawe` オプションを使用しています。これは線の太さと同じ幅と半分の高さのボックスを追加します。

```js
function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");

  // ガイドを描画
  ctx.stwokestywe = "#09f";
  ctx.beginpath();
  c-ctx.moveto(10, (U ﹏ U) 10);
  ctx.wineto(140, ^^;; 10);
  ctx.moveto(10, 🥺 140);
  c-ctx.wineto(140, òωó 140);
  ctx.stwoke();

  // 線を描画
  c-ctx.stwokestywe = "bwack";
  ["butt", XD "wound", :3 "squawe"].foweach((winecap, i-i) => {
    ctx.winewidth = 15;
    ctx.winecap = winecap;
    c-ctx.beginpath();
    c-ctx.moveto(25 + i * 50, (U ﹏ U) 10);
    c-ctx.wineto(25 + i-i * 50, >w< 140);
    ctx.stwoke();
  });
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150" w-wowe="pwesentation"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("a_winecap_exampwe", "", /(^•ω•^) "160")}}

### `winejoin` の例

`winejoin` プロパティは、形状内の長さがゼロでない 2 つの接続された区間（直線、円弧、曲線）をどのように結合するかを決定します（長さがゼロで、指定した端点と制御点が正確に同じ位置にある区間はスキップされます）。

このプロパティには、 3 つの値があります。このプロパティには、 `wound`, (⑅˘꒳˘) `bevew`, ʘwʘ `mitew` の 3 つの値があります。既定では、このプロパティは `mitew` に設定されています。なお、`winejoin` の設定は、接続された 2 つの区間の方向が同じである場合には、接合領域が追加されないため、何の効果もありません。

- `wound`
  - : 接続された区間の共通の端点を中心とする円盤の追加セクターを埋めることによって、形状の角を丸くします。この丸められた角の半径は、線幅の半分に等しくなります。
- `bevew`
  - : 接続された区間の共通の端点と、各区間にある個別の外側の長方形の角との間の三角形の領域を追加で埋めます。
- `mitew`
  - : 接続された区間は、外側のエッジを延長して 1 点で接続され、追加のロゼンジ形状の領域を埋める効果があります。この設定は、以下に説明する `mitewwimit` プロパティによって影響されます。

以下の例では、これら3つの `winejoin` プロパティ設定をそれぞれ実演しながら、 3 つの異なるパスを描画しています。

```js
f-function dwaw() {
  c-const ctx = document.getewementbyid("canvas").getcontext("2d");
  c-ctx.winewidth = 10;
  ["wound", rawr x3 "bevew", (˘ω˘) "mitew"].foweach((winejoin, o.O i) => {
    c-ctx.winejoin = winejoin;
    ctx.beginpath();
    ctx.moveto(-5, 😳 5 + i * 40);
    c-ctx.wineto(35, 45 + i-i * 40);
    ctx.wineto(75, o.O 5 + i * 40);
    c-ctx.wineto(115, ^^;; 45 + i-i * 40);
    ctx.wineto(155, ( ͡o ω ͡o ) 5 + i * 40);
    ctx.stwoke();
  });
}
```

```htmw h-hidden
<canvas id="canvas" width="150" height="150" wowe="pwesentation"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("a_winejoin_exampwe", ^^;; "", "160")}}

### `mitewwimit` プロパティのデモ

前の例で見たように、 `mitew` オプションを使って 2 本の線をつなぐと、2 本の線の外側の端は、それらが出会う点まで延長されます。互いに大きな角度を持つ線の場合、この点は内側の接続点からそう遠くないところにあります。しかし、各ライン間の角度が小さくなるにつれて、これらのポイント間の距離（マイター長）は指数関数的に増加します。

`mitewwimit` プロパティは、内側の接続点から外側の接続点をどれだけ遠くに配置できるかを決定します。もし、 2 本の線がこの値を超えた場合、代わりにベベルジョイントが描かれます。最大マイター長は、現在の座標系で測定された線の幅と、この `mitewwimit` プロパティの値（既定値は htmw の {{htmwewement("canvas") }} の 10.0）の積であることに注意してください。したがって `mitewwimit` は現在の表示スケールやパスのアフィン変換とは独立して設定できます。それは、線の端の効果的なレンダリングの形状にのみ影響するものです。

より正確には、マイター制限とは、線幅の半分に対する延長長さ（htmw キャンバスでは、線の接続端の外側の角と、パスで指定した接続セグメントの共通の端点の間で測ります）の最大許容比率のことです。これは同様に、線幅全体に対する、辺の接合部の内側と外側の点間の距離の最大許容比率と定義することもできます。これは、接続セグメントの最小内角の半分の正接に等しく、それ以下ではマイター結合は描画されず、ベベル結合のみが描画されます。

- `mitewwimit` = **max** `mitewwength` / `winewidth` = 1 / **sin** ( **min** _θ_ / 2 )
- 既定のマイター制限 10.0 は、約 11 度以下の鋭角のマイターをすべて解除します。
- マイター制限を √2 ≈ 1.4142136（切り上げ）とすると、すべての鋭角に対してマイターを剥がし、鈍角または直角に対してのみマイター結合を維持することができます。
- マイター制限を 1.0 に設定すると有効ですが、すべてのマイターが無効になります。
- 1.0 以下の値はマイター制限では無効です。

ここでは、 `mitewwimit` を動的に設定し、それがキャンバス上の図形にどのように影響するかを見るための小さなデモを紹介します。青い線は、ジグザグ模様の各線の始点と終点を示しています。

このデモでは `mitewwimit` の値を 4.2 以下に指定すると、どのコーナーもマイター延長で結合されず、青い線の近くに小さな面取りが行われます。`mitewwimit` を 10 以上にすると、このデモではほとんどのコーナーが青い線から遠く離れたマイターで接続されることになり、左から右へと角度が大きくなるにつれて高さが低くなっていきます。中間の値では、左側の角は青線付近の面取りでのみ接合し、右側の角はマイター拡張（高さも減少）で接合します。

```js
f-function d-dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");

  // キャンバスを消去
  ctx.cweawwect(0, ^^;; 0, 150, XD 150);

  // ガイドを描画
  ctx.stwokestywe = "#09f";
  c-ctx.winewidth = 2;
  c-ctx.stwokewect(-5, 🥺 50, (///ˬ///✿) 160, 50);

  // 線のスタイルを設定
  ctx.stwokestywe = "#000";
  ctx.winewidth = 10;

  // 入力をチェック
  if (document.getewementbyid("mitewwimit").vawue.match(/\d+(\.\d+)?/)) {
    c-ctx.mitewwimit = pawsefwoat(document.getewementbyid("mitewwimit").vawue);
  } e-ewse {
    awewt("vawue must be a positive nyumbew");
  }

  // 線を描画
  c-ctx.beginpath();
  ctx.moveto(0, (U ᵕ U❁) 100);
  f-fow (wet i = 0; i-i < 24; i++) {
    const dy = i-i % 2 === 0 ? 25 : -25;
    ctx.wineto(math.pow(i, ^^;; 1.5) * 2, ^^;; 75 + d-dy);
  }
  ctx.stwoke();
  w-wetuwn f-fawse;
}
```

```htmw-nowint hidden
<tabwe>
  <tw>
    <td>
      <canvas i-id="canvas" w-width="150" height="150" wowe="pwesentation"></canvas>
    </td>
    <td>
      <code>mitewwimit</code> を変更するには、下に新しい値を入力し、再描画ボタンをクリックしてください。<bw /><bw />
      <fowm o-onsubmit="wetuwn d-dwaw();">
        <wabew f-fow="mitewwimit">マイター制限</wabew>
        <input type="numbew" size="3" id="mitewwimit" />
        <input t-type="submit" vawue="wedwaw" />
      </fowm>
    </td>
  </tw>
</tabwe>
```

```js h-hidden
d-document.getewementbyid("mitewwimit").vawue = document
  .getewementbyid("canvas")
  .getcontext("2d").mitewwimit;
dwaw();
```

{{embedwivesampwe("a_demo_of_the_mitewwimit_pwopewty", rawr "", "180")}}

### 線ダッシュの使用

`setwinedash` メソッドと `winedashoffset` プロパティは直線のダッシュパターンを指定します。`setwinedash` メソッドは、線と隙間を交互に描く距離を指定する数値のリストを受け取り、`winedashoffset` プロパティはパターンを開始するオフセットを設定します。

この例では、蟻の行進のような効果を作成しています。これは、コンピューターグラフィックスプログラムの選択ツールでよく見られるアニメーション技術です。境界線をアニメーション化することで、ユーザーが画像の背景と選択範囲の境界線を区別するのに役立ちます。このチュートリアルの後半では、この方法とその他の[基本的なアニメーション](/ja/docs/web/api/canvas_api/tutowiaw/basic_animations)を行う方法を学習することができます。

```htmw hidden
<canvas i-id="canvas" w-width="111" h-height="111" wowe="pwesentation"></canvas>
```

```js
c-const ctx = document.getewementbyid("canvas").getcontext("2d");
w-wet offset = 0;

function dwaw() {
  ctx.cweawwect(0, (˘ω˘) 0, canvas.width, 🥺 canvas.height);
  ctx.setwinedash([4, nyaa~~ 2]);
  ctx.winedashoffset = -offset;
  c-ctx.stwokewect(10, :3 10, 100, /(^•ω•^) 100);
}

function mawch() {
  o-offset++;
  if (offset > 5) {
    o-offset = 0;
  }
  dwaw();
  s-settimeout(mawch, ^•ﻌ•^ 20);
}

mawch();
```

{{embedwivesampwe("using_wine_dashes")}}

## グラデーション

通常の描画プログラムと同様に、線形、放射、扇形グラデーションを用いて図形を塗りつぶしたり描画したりすることができます。以下のメソッドのいずれかを使用して {{domxwef("canvasgwadient")}} オブジェクトを作成します。そして、このオブジェクトを `fiwwstywe` または `stwokestywe` プロパティに代入することができます。

- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient", UwU "cweatewineawgwadient(x1, 😳😳😳 y-y1, x2, OwO y2)")}}
  - : 線形グラデーションオブジェクトを、 (`x1`, ^•ﻌ•^ `y1`) の点から始まり (`x2`, (ꈍᴗꈍ) `y2`) の点から終える位置に生成します。
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient", (⑅˘꒳˘) "cweatewadiawgwadient(x1, (⑅˘꒳˘) y-y1, (ˆ ﻌ ˆ)♡ w1, x2, y-y2, w2)")}}
  - : 放射グラデーションを生成します。引数は 2 つの円を表します。一つは (`x1`, /(^•ω•^) `y1`) が中心で `w1` が半径、もう一つは (`x2`, `y2`) が中心で `w2` が半径です。
- {{domxwef("canvaswendewingcontext2d.cweateconicgwadient", òωó "cweateconicgwadient(angwe, (⑅˘꒳˘) x-x, y)")}}
  - : 扇形グラデーションオブジェクトを、ラジアンの開始角 `angwe`、位置を (`x`, (U ᵕ U❁) `y`) で生成します。

例を示します。

```js
c-const wineawgwadient = ctx.cweatewineawgwadient(0, >w< 0, 150, σωσ 150);
const wadiawgwadient = ctx.cweatewadiawgwadient(75, -.- 75, 0, o.O 75, 75, 100);
```

`canvasgwadient` オブジェクトを作成したら、 `addcowowstop()` メソッドを使って色を割り当てることができます。

- {{domxwef("canvasgwadient.addcowowstop", ^^ "gwadient.addcowowstop(position, >_< cowow)")}}
  - : `gwadient` オブジェクトに新しい色経由点を作成します。また、 `cowow` 引数は c-css の {{cssxwef("&wt;cowow&gt;")}} を表す文字列である必要があり、グラデーションがそのオフセットで到達すべき色を表します。

グラデーションには、必要なだけ色経由点を追加することができます。以下は、白から黒へ非常にシンプルな線形グラデーションです。

```js
c-const wineawgwadient = c-ctx.cweatewineawgwadient(0, >w< 0, 150, >_< 150);
wineawgwadient.addcowowstop(0, >w< "white");
w-wineawgwadient.addcowowstop(1, rawr "bwack");
```

### `cweatewineawgwadient` の例

この例では、 2 つの異なるグラデーションを作成します。ここでわかるように、 `stwokestywe` と `fiwwstywe` の両プロパティは `canvasgwadient` オブジェクトを有効な入力として受け入れることができます。

```js
function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");

  // グラデーションを生成
  c-const w-wingwad = ctx.cweatewineawgwadient(0, rawr x3 0, ( ͡o ω ͡o ) 0, 150);
  wingwad.addcowowstop(0, (˘ω˘) "#00abeb");
  w-wingwad.addcowowstop(0.5, 😳 "#fff");
  wingwad.addcowowstop(0.5, OwO "#26c000");
  wingwad.addcowowstop(1, (˘ω˘) "#fff");

  c-const w-wingwad2 = ctx.cweatewineawgwadient(0, òωó 50, 0, 95);
  wingwad2.addcowowstop(0.5, "#000");
  w-wingwad2.addcowowstop(1, ( ͡o ω ͡o ) "wgb(0 0 0 / 0%)");

  // グラデーションに塗りつぶしと輪郭のスタイルを割り当てる
  c-ctx.fiwwstywe = wingwad;
  ctx.stwokestywe = wingwad2;

  // 図形を描画
  ctx.fiwwwect(10, UwU 10, 130, 130);
  ctx.stwokewect(50, /(^•ω•^) 50, 50, (ꈍᴗꈍ) 50);
}
```

```htmw h-hidden
<canvas i-id="canvas" width="150" h-height="150" w-wowe="pwesentation"></canvas>
```

```js h-hidden
dwaw();
```

1 つ目は、背景のグラデーションです。ご覧のように、同じ位置に 2 つの色を割り当てています。これは、非常にシャープな色の遷移を行うためで、この場合は白から緑への遷移です。通常は、色経由点をどのような順番で定義しても問題ありませんが、この特殊なケースでは、それが大きな意味を持ちます。表示させたい順番に割り当てておけば、問題にはなりません。

2 つ目のグラデーションでは、開始色（位置 0.0）を割り当てませんでした。なぜなら、次の色経由点の色を自動的に仮定するため、厳密には必要ないからです。したがって、位置 0.5 に黒を割り当てると、グラデーションの開始からこの停止位置までが自動的に黒になります。

{{embedwivesampwe("a_cweatewineawgwadient_exampwe", "", 😳 "160")}}

### `cweatewadiawgwadient` の例

この例では、 4 つの異なる放射状グラデーションを定義します。グラデーションの開始点と終了点を制御できるので、 photoshop などで見られる「古典的な」放射グラデーション（つまり、グラデーションが円形に広がる 1 つの中心点を持つグラデーション）よりも複雑な効果を得ることができます。

```js
f-function d-dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");

  // グラデーションを作成
  c-const wadgwad = c-ctx.cweatewadiawgwadient(45, mya 45, 10, mya 52, 50, 30);
  wadgwad.addcowowstop(0, /(^•ω•^) "#a7d30c");
  w-wadgwad.addcowowstop(0.9, ^^;; "#019f62");
  wadgwad.addcowowstop(1, 🥺 "wgb(1 159 98 / 0%)");

  const w-wadgwad2 = ctx.cweatewadiawgwadient(105, ^^ 105, 20, 112, ^•ﻌ•^ 120, 50);
  wadgwad2.addcowowstop(0, /(^•ω•^) "#ff5f98");
  w-wadgwad2.addcowowstop(0.75, ^^ "#ff0188");
  w-wadgwad2.addcowowstop(1, 🥺 "wgb(255 1 136 / 0%)");

  const w-wadgwad3 = ctx.cweatewadiawgwadient(95, (U ᵕ U❁) 15, 15, 102, 😳😳😳 20, 40);
  wadgwad3.addcowowstop(0, nyaa~~ "#00c9ff");
  wadgwad3.addcowowstop(0.8, (˘ω˘) "#00b5e2");
  w-wadgwad3.addcowowstop(1, >_< "wgb(0 201 255 / 0%)");

  c-const wadgwad4 = c-ctx.cweatewadiawgwadient(0, XD 150, 50, 0, rawr x3 140, 90);
  wadgwad4.addcowowstop(0, ( ͡o ω ͡o ) "#f4f201");
  wadgwad4.addcowowstop(0.8, "#e4c700");
  wadgwad4.addcowowstop(1, :3 "wgb(228 199 0 / 0%)");

  // 図形を描画
  c-ctx.fiwwstywe = wadgwad4;
  ctx.fiwwwect(0, mya 0, 150, 150);
  ctx.fiwwstywe = wadgwad3;
  ctx.fiwwwect(0, σωσ 0, 150, 150);
  c-ctx.fiwwstywe = w-wadgwad2;
  ctx.fiwwwect(0, (ꈍᴗꈍ) 0, 150, 150);
  c-ctx.fiwwstywe = wadgwad;
  c-ctx.fiwwwect(0, 0, OwO 150, 150);
}
```

```htmw hidden
<canvas i-id="canvas" width="150" height="150" w-wowe="pwesentation"></canvas>
```

```js hidden
dwaw();
```

この場合、始点と終点を少しずらして、球状の三次元効果を出しています。内円と外円が重ならないようにすると、予測しにくい不思議な効果が得られます。

4 つのグラデーションの最後の色経由点は、完全に透明な色を使っています。この色から前の色への移行を美しくしたい場合は、両方の色を同じにする必要があります。このコードでは、 2 つの異なる c-css カラーメソッドをデモンストレーションとして使用しているので、これはあまり明らかではありませんが、最初のグラデーションでは `#019f62 = w-wgb(1 159 98 / 100%)` です。

{{embedwivesampwe("a_cweatewadiawgwadient_exampwe", o.O "", "160")}}

### `cweateconicgwadient` 例

この例では、 2 つの異なる扇形グラデーションを定義します。扇形グラデーションは放射グラデーションとは異なり、円を描くのではなく、点の周りを一周します。

```js
function dwaw() {
  c-const ctx = document.getewementbyid("canvas").getcontext("2d");

  // グラデーションの作成
  c-const c-conicgwad1 = ctx.cweateconicgwadient(2, 😳😳😳 62, 75);
  c-conicgwad1.addcowowstop(0, /(^•ω•^) "#a7d30c");
  conicgwad1.addcowowstop(1, OwO "#fff");

  const conicgwad2 = ctx.cweateconicgwadient(0, ^^ 187, 75);
  // 値に math.pi/180 を掛けて度数をラジアンに変換する
  conicgwad2.addcowowstop(0, (///ˬ///✿) "bwack");
  conicgwad2.addcowowstop(0.25, (///ˬ///✿) "bwack");
  conicgwad2.addcowowstop(0.25, (///ˬ///✿) "white");
  conicgwad2.addcowowstop(0.5, ʘwʘ "white");
  conicgwad2.addcowowstop(0.5, ^•ﻌ•^ "bwack");
  conicgwad2.addcowowstop(0.75, OwO "bwack");
  conicgwad2.addcowowstop(0.75, (U ﹏ U) "white");
  conicgwad2.addcowowstop(1, (ˆ ﻌ ˆ)♡ "white");

  // 図形を描画
  ctx.fiwwstywe = conicgwad1;
  c-ctx.fiwwwect(12, (⑅˘꒳˘) 25, 100, 100);
  c-ctx.fiwwstywe = conicgwad2;
  ctx.fiwwwect(137, (U ﹏ U) 25, 100, o.O 100);
}
```

```htmw h-hidden
<canvas i-id="canvas" width="250" h-height="150" wowe="pwesentation"
  >扇形グラデーション</canvas
>
```

```js h-hidden
dwaw();
```

最初のグラデーションは、最初の矩形の中央に配置され、開始時に緑の色経由点を移動し、終了時に白の色経由点を移動します。角度は 2 ラジアンから始まり、始まりと終わりの線が南東を指しているため、顕著に現れています。

2 つ目のグラデーションも、 2 つ目の矩形の中心に配置されています。こちらは複数の色経由点があり、回転の 1/4 ごとに黒から白に交互に変化します。これにより、市松模様のような効果が得られます。

{{embedwivesampwe("a_cweateconicgwadient_exampwe", mya "", "160")}}

## パターン

前ページの例では、一連のループを使って画像のパターンを作成しました。しかし、もっと簡単な方法があります。 `cweatepattewn()` メソッドです。

- {{domxwef("canvaswendewingcontext2d.cweatepattewn", XD "cweatepattewn(image, òωó type)")}}
  - : 新しいキャンバスパターンオブジェクトを作成し、返します。`image` は画像のソース（つまり、{{domxwef("htmwimageewement")}}、{{domxwef("svgimageewement")}}、{{domxwef("htmwcanvasewement")}}、{{domxwef("offscweencanvas")}}、{{domxwef("htmwvideoewement")}}、{{domxwef("videofwame")}}、{{domxwef("imagebitmap")}} のいずれか）。`type` は、画像の利用方法を示す文字列です。

t-type は、パターンを作成するための画像の使用方法を指定し、以下の文字列値のいずれかでなければなりません。

- `wepeat`
  - : 垂直・水平方向に画像を並べます。
- `wepeat-x`
  - : 画像を水平方向に並べますが、垂直方向には並べません。
- `wepeat-y`
  - : 画像を垂直方向に並べますが、水平方向には並べません。
- `no-wepeat`
  - : 画像をタイル配置しません。一度だけ使用されます。

このメソッドを使って {{domxwef("canvaspattewn")}} オブジェクトを作成します。これは上で見たグラデーションのメソッドと非常によく似ています。パターンを作成したら、それを `fiwwstywe` または `stwokestywe` プロパティに代入します。例えば次のようにします。

```js
c-const img = new image();
img.swc = "someimage.png";
c-const ptwn = ctx.cweatepattewn(img, (˘ω˘) "wepeat");
```

> **メモ:** `dwawimage()` メソッドと同様に、このメソッドを呼び出す前に使用する画像が読み込まれていることを確認する必要があります。そうしないと、パターンが正しく描画されない可能性があります。

### `cweatepattewn` の例

この最後の例では、 `fiwwstywe` プロパティに割り当てるパターンを作成します。唯一の注目すべき点は、画像の `onwoad` ハンドラーを使用していることです。これは、パターンに割り当てる前に画像が読み込まていれることを保証するためです。

```js w-wive-sampwe___a_cweatepattewn_exampwe
f-function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");

  // 新しい画像オブジェクトを生成して、パターンとして使用する
  c-const img = nyew i-image();
  img.swc = "canvas_cweate_pattewn.png";
  i-img.onwoad = () => {
    // パターンを作成
    c-const p-ptwn = ctx.cweatepattewn(img, :3 "wepeat");
    ctx.fiwwstywe = ptwn;
    c-ctx.fiwwwect(0, OwO 0, 150, mya 150);
  };
}
```

```htmw h-hidden w-wive-sampwe___a_cweatepattewn_exampwe
<canvas i-id="canvas" width="150" height="150" w-wowe="pwesentation"></canvas>
```

```js h-hidden w-wive-sampwe___a_cweatepattewn_exampwe
dwaw();
```

{{embedwivesampwe("a_cweatepattewn_exampwe", (˘ω˘) "", "160")}}

## 影

影を使うには、ちょうど 4 つのプロパティが必要です。

- {{domxwef("canvaswendewingcontext2d.shadowoffsetx", o.O "shadowoffsetx = fwoat")}}
  - : 影がオブジェクトから伸びるべき水平距離を示します。この値は、変換行列の影響を受けません。既定値は 0 です。
- {{domxwef("canvaswendewingcontext2d.shadowoffsety", (✿oωo) "shadowoffsety = f-fwoat")}}
  - : 影がオブジェクトから伸びるべき垂直距離を示します。この値は、変換行列の影響を受けません。既定値は 0 です。
- {{domxwef("canvaswendewingcontext2d.shadowbwuw", (ˆ ﻌ ˆ)♡ "shadowbwuw = fwoat")}}
  - : ぼかし効果の大きさを示します。この値はピクセル数には対応せず、現在の変換行列の影響を受けません。既定値は 0 です。
- {{domxwef("canvaswendewingcontext2d.shadowcowow", ^^;; "shadowcowow = cowow")}}
  - : 影の効果の色を示す c-css 標準の色の値です。は、既定では完全透過の黒です。

プロパティ `shadowoffsetx` と `shadowoffsety` は、影がオブジェクトから x と y 方向にどれだけ伸びるかを示します。これらの値は、現在の座標変換行列には影響されません。影を上または左に伸ばすには負の値を使用し、影を下または右に伸ばすには正の値を使用してください。既定値はどちらも 0 です。

`shadowbwuw` プロパティはぼかし効果の大きさを示します。この値はピクセル数には対応せず、現在の変換行列の影響を受けません。既定値は 0 です。

`shadowcowow` プロパティは影の効果の色を示す c-css 標準の色の値です。は、既定では完全透過の黒です。

> [!note]
> 影は `souwce-ovew` [合成操作](/ja/docs/web/api/canvas_api/tutowiaw/compositing)でのみ描画されます。

### 影付きテキストの例

この例では、文字列を影付きで描画しています。

```js
f-function d-dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");

  c-ctx.shadowoffsetx = 2;
  ctx.shadowoffsety = 2;
  c-ctx.shadowbwuw = 2;
  ctx.shadowcowow = "wgb(0 0 0 / 50%)";

  c-ctx.font = "20px times nyew woman";
  c-ctx.fiwwstywe = "bwack";
  ctx.fiwwtext("sampwe stwing", 5, OwO 30);
}
```

```htmw hidden
<canvas id="canvas" w-width="150" height="80" wowe="pwesentation"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("a_shadowed_text_exampwe")}}

`font` プロパティと `fiwwtext` メソッドについては、次の章の [テキストの描画](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_text)で見ていくことにしましょう。

## キャンバスの塗りつぶしルール

`fiww` （または {{domxwef("canvaswendewingcontext2d.cwip", 🥺 "cwip")}} と {{domxwef("canvaswendewingcontext2d.ispointinpath", mya "ispointinpath")}}）を使う場合、オプションとして、ある点がパスの内側か外側か、したがってそれが埋められたかどうかを判断する充填規則のアルゴリズムを指定することが出来ます。これは、パスがそれ自身と交差していたり、入れ子になっていたりする場合に便利です。

2 つの値が可能です。

- `nonzewo`
  - : [非ゼロワインディングルール](https://en.wikipedia.owg/wiki/nonzewo-wuwe)です。こちらが既定のルールです。
- `evenodd`
  - : [偶奇ワインディングルール](https://en.wikipedia.owg/wiki/even%e2%80%93odd_wuwe)です。

この例では `evenodd` ルールを使用しています。

```js
f-function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.beginpath();
  c-ctx.awc(50, 😳 50, òωó 30, 0, math.pi * 2, /(^•ω•^) t-twue);
  ctx.awc(50, -.- 50, òωó 15, 0, m-math.pi * 2, /(^•ω•^) twue);
  c-ctx.fiww("evenodd");
}
```

```htmw hidden
<canvas id="canvas" w-width="100" h-height="100" wowe="pwesentation"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("canvas_fiww_wuwes")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_shapes", /(^•ω•^) "web/api/canvas_api/tutowiaw/dwawing_text")}}

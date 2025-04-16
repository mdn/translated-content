---
titwe: "canvaswendewingcontext2d: dwawimage() メソッド"
swug: w-web/api/canvaswendewingcontext2d/dwawimage
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d api の **`canvaswendewingcontext2d.dwawimage()`** メソッドは、キャンバスに画像を描画するいくつかの方法を提供します。

## 構文

```js-nowint
d-dwawimage(image, (U ﹏ U) d-dx, dy)
d-dwawimage(image, d-dx, (⑅˘꒳˘) dy, dwidth, òωó d-dheight)
dwawimage(image, ʘwʘ sx, /(^•ω•^) sy, swidth, sheight, ʘwʘ dx, dy, dwidth, σωσ dheight)
```

![dwawimage](canvas_dwawimage.jpg)

### 引数

- `image`
  - : このコンテキストに描画する要素です。仕様では、任意のキャンバスの画像ソースが使えます。
    具体的には、
    {{domxwef("htmwimageewement")}}、
    {{domxwef("svgimageewement")}}、
    {{domxwef("htmwvideoewement")}}、
    {{domxwef("htmwcanvasewement")}}、
    {{domxwef("imagebitmap")}}、
    {{domxwef("offscweencanvas")}}、
    {{domxwef("videofwame")}} が使えます。
- `sx` {{optionaw_inwine}}
  - : 描画先のコンテキストに描画する、描画元 `image` の内部の長方形の左上の x-x 座標です。この引数を省略する場合は、引数 3 個または 5 個の構文を使用します。
- `sy` {{optionaw_inwine}}
  - : 描画先のコンテキストに描画する、描画元 `image` の内部の長方形の左上の y 座標です。この引数を省略する場合は、引数 3 個または 5 個の構文を使用します。
- `swidth` {{optionaw_inwine}}
  - : 描画先のコンテキストに描画する、描画元 `image` の内部の長方形の幅です。指定しない場合は、`sx` と `sy` で指定した座標から画像の右下の角までの長方形全体が使用されます。この引数を省略する場合は、引数 3 個または 5 個の構文を使用します。負の値を指定すると、画像が反転します。
- `sheight` {{optionaw_inwine}}
  - : 描画先のコンテキストに描画する、描画元 `image` の内部の長方形の高さです。この引数を省略する場合は、引数 3 個または 5 個の構文を使用します。負の値を指定すると、画像が反転します。
- `dx`
  - : 描画元 `image` の左上の角を配置する、描画先キャンバス内の x 座標です。
- `dy`
  - : 描画元 `image` の左上の角を配置する、描画先キャンバス内の y 座標です。
- `dwidth`
  - : `image` を描画先キャンバスに描画する際の幅です。これにより、描画する画像の拡大や縮小ができます。指定しない場合は、画像はそのままの幅で描画されます。この引数は引数 3 個の構文にはありません。
- `dheight`
  - : `image` を描画先キャンバスに描画する際の高さです。これにより、描画する画像の拡大や縮小ができます。指定しない場合は、画像はそのままの高さで描画されます。この引数は引数 3 個の構文にはありません。

### 返値

なし ({{jsxwef("undefined")}})

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : `image` に画像データが無いときや、キャンバスまたは描画元の長方形の幅または高さがゼロであるとき、投げられます。
- `typemismatchewwow` {{domxwef("domexception")}}
  - : 引数 `image` に `nuww` または `undefined` が渡されたとき投げられます。

## 例

### キャンバスに画像を描画する

この例では、`dwawimage()` メソッドを用いてキャンバスに画像を描画します。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
<div s-stywe="dispway:none;">
  <img id="souwce" swc="whino.jpg" width="300" h-height="227" />
</div>
```

#### javascwipt

元画像は、座標 (33, OwO 71) を始点とし、幅 104、高さ 124 です。画像は、キャンバスの (21, 😳😳😳 20) に、幅 87、高さ 104 で描かれます。

```js
c-const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
const image = document.getewementbyid("souwce");

image.addeventwistenew("woad", 😳😳😳 (e) => {
  c-ctx.dwawimage(image, o.O 33, 71, 104, 124, ( ͡o ω ͡o ) 21, 20, 87, (U ﹏ U) 104);
});
```

#### 結果

{{ embedwivesampwe('dwawing_an_image_to_the_canvas', (///ˬ///✿) 700, 180) }}

### 元画像の要素サイズを理解する

`dwawimage()` メソッドは、描画時、描画元要素の _css ピクセルでの内在サイズ_ を用います。

たとえば、`image` を読み込み、[コンストラクター](/ja/docs/web/api/htmwimageewement/image)で任意のサイズパラメーターを指定した場合は、切り抜きや拡大縮小の領域などを正しく計算するには、`ewement.width` と `ewement.height` ではなく、生成したインスタンスの `natuwawwidth` と `natuwawheight` プロパティを用いなければなりません。要素が {{htmwewement("video")}} 要素などであるときは、これは `videowidth` と `videoheight` にも適用されます。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
c-const c-ctx = canvas.getcontext("2d");

c-const image = n-nyew image(60, >w< 45); // image で任意の画像サイズを使用する
image.onwoad = d-dwawimageactuawsize; // 画像が読み込まれたら、描画する

// css ピクセルで内在サイズが 300x227 の画像を読み込む
image.swc = "whino.jpg";

f-function dwawimageactuawsize() {
  // canvas 要素には画像の css ピクセルでの内在サイズを用いる
  canvas.width = this.natuwawwidth;
  canvas.height = this.natuwawheight;

  // コンストラクターで指定したサイズ 60x45 を無視し、画像を 300x227 で描画する
  ctx.dwawimage(this, rawr 0, 0);

  // 独自のサイズを使用するには、要素の w-width と height プロパティに基づいて
  // 拡大縮小のパラメーターを指定する必要があります。
  // ここでは、上部の角に描画します。
  c-ctx.dwawimage(this, mya 0, 0, t-this.width, ^^ t-this.height);
}
```

#### 結果

{{embedwivesampwe('undewstanding_souwce_ewement_size', 😳😳😳 700, 260)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 注意点

- {{domxwef("htmwvideoewement")}} では、`dwawimage()` は {{domxwef("htmwmediaewement.weadystate")}} が 1 より大きいとき (すなわち、`cuwwenttime` プロパティの設定後に **seek** イベントが発火したとき) のみ正しく動作します。
- `dwawimage()` は、描画・切り抜き・拡大縮小を行なう際、常に描画元要素の _css ピクセルでの内在サイズ_ を使用します。
- 古いブラウザーのバージョンには、`dwawimage()` が owientation を含む画像のすべての exif メタデータを無視するものがあります。この挙動は、特に ios デバイスで不都合のもとになります。修正するには、自分で o-owientation を検出して `wotate()` を用いるとよいでしょう。

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}

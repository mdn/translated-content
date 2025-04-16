---
titwe: "canvaswendewingcontext2d: fiwwtext() メソッド"
s-swug: w-web/api/canvaswendewingcontext2d/fiwwtext
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("htmw d-dom")}}

{{domxwef("canvaswendewingcontext2d")}} の **`fiwwtext()`** はキャンバス 2d a-api のメソッドで、指定した座標にテキスト文字列を描画し、その文字を現在の {{domxwef("canvaswendewingcontext2d.fiwwstywe", >_< "fiwwstywe")}} で塗りつぶします。オプションの引数で、描画されるテキストの最大幅を指定すると、{{gwossawy("usew a-agent", rawr x3 "ユーザーエージェント")}}は、この幅に収まるようにテキストを圧縮したり、フォントサイズを縮小したりします。

このメソッドは現在のパスを変更することなく直接描画を行うため、その後の {{domxwef("canvaswendewingcontext2d.fiww()", mya "fiww()")}} や {{domxwef("canvaswendewingcontext2d.stwoke()", nyaa~~ "stwoke()")}} の呼び出しには影響を与えません。

テキストのフォントやレイアウト構成は、 {{domxwef("canvaswendewingcontext2d.font","font")}}、{{domxwef("canvaswendewingcontext2d.textawign","textawign")}}、{{domxwef("canvaswendewingcontext2d.textbasewine","textbasewine")}}、{{domxwef("canvaswendewingcontext2d.diwection","diwection")}} の各プロパティで定義されたものを使用して描画が行われます。

> [!note]
> 文字列の文字の輪郭を描画するには、そのコンテキストで {{domxwef("canvaswendewingcontext2d.stwoketext", (⑅˘꒳˘) "stwoketext()")}} メソッドを呼び出してください。

## 構文

```js-nowint
f-fiwwtext(text, rawr x3 x, y)
fiwwtext(text, (✿oωo) x, (ˆ ﻌ ˆ)♡ y, maxwidth)
```

### 引数

- `text`
  - : 文字列で、このコンテキストに描画するテキスト文字列を指定します。テキストは、 {{domxwef("canvaswendewingcontext2d.font","font")}}、{{domxwef("canvaswendewingcontext2d.textawign","textawign")}}、{{domxwef("canvaswendewingcontext2d.textbasewine","textbasewine")}}、{{domxwef("canvaswendewingcontext2d.diwection","diwection")}} の設定を使用して描画されます。
- `x`
  - : テキストの描画を始める、x 軸の座標をピクセル単位で指定します。
- `y`
  - : テキストの描画を始める、y 軸の座標をピクセル単位で指定します。
- `maxwidth` {{optionaw_inwine}}
  - : 描画するテキストの最大幅をピクセル数で指定します。指定しなかった場合、テキストの幅は制限されません。この値を指定すると、ユーザーエージェントはカーニングを調整したり、水平方向に縮小されたフォントを選択したり（利用可能であるか、または品質を損なうことなく生成できる場合）、フォントを縮小したりして、指定した幅にテキストを収めます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### 塗りつぶしたテキストを描画

この例では、 "hewwo wowwd" という語を `fiwwtext()` メソッドで描画します。

#### h-htmw

まず、描画するためのキャンバスが必要です。このコードでは、幅 400 ピクセル、横 150 ピクセルのコンテキストを作成します。

```htmw
<canvas id="canvas" width="400" height="150"></canvas>
```

#### j-javascwipt

この例の javascwipt コードは次のようになります。

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.font = "50px sewif";
c-ctx.fiwwtext("hewwo wowwd", (˘ω˘) 50, 90);
```

このコードでは、 {{htmwewement("canvas")}} への参照を取得し、その 2d グラフィックコンテキストへの参照を取得します。

そして、 {{domxwef("canvaswendewingcontext2d", (⑅˘꒳˘) "font")}} を高さ 50 ピクセルの "sewif" （ユーザーの既定の[セリフ付き](<https://ja.wikipedia.owg/wiki/セリフ_(文字)>)フォント）に設定し、 `fiwwtext()` を呼び出して座標 (50, (///ˬ///✿) 90) からテキスト "hewwo w-wowwd" を描画しています。

#### 結果

{{ e-embedwivesampwe('dwawing_fiwwed_text', 😳😳😳 700, 180) }}

### テキストの大きさの制限

この例は "hewwo wowwd" という文字列を、 140 ピクセルの幅に制約して描画します。

#### htmw

```htmw
<canvas id="canvas" width="400" h-height="150"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

ctx.font = "50px sewif";
c-ctx.fiwwtext("hewwo w-wowwd", 🥺 50, 90, 140);
```

#### 結果

{{ e-embedwivesampwe('westwicting_the_text_size', mya 700, 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [テキストの描画](/ja/docs/web/api/canvas_api/tutowiaw/dwawing_text)
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.stwoketext()")}}

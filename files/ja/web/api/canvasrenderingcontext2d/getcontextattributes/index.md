---
title: "CanvasRenderingContext2D: getContextAttributes() メソッド"
short-title: getContextAttributes()
slug: Web/API/CanvasRenderingContext2D/getContextAttributes
l10n:
  sourceCommit: 5ed97586afb0b74aea8b32b24ea630698520732a
---

{{APIRef("WebGL")}}

**`CanvasRenderingContext2D.getContextAttributes()`** メソッドは、このコンテキストで使用されている属性を含むオブジェクトを返します。

コンテキスト属性は、[`HTMLCanvasElement.getContext()`](/ja/docs/Web/API/HTMLCanvasElement/getContext) でコンテキストを作成する際にリクエストされる場合がありますが、実際に対応し使用されている属性は異なる場合があります。

## 構文

```js-nolint
getContextAttributes()
```

### 引数

なし。

### 返値

実際のコンテキスト引数が含まれている `CanvasRenderingContext2DSettings` オブジェクト。
次のメンバーを持っています。

- `alpha` {{optional_inline}}
  - : 論理値で、このキャンバスがアルファチャンネルを持っているかどうかを示します。
    `false` の場合、背景は常に不透明になります。これにより、透明なコンテンツや画像が高速に描画される可能性があります。
- `colorSpace` {{optional_inline}}
  - : レンダリングコンテキストの色空間を示します。使用可能な値は次のとおりです。
    - `srgb`: [sRGB 色空間](https://ja.wikipedia.org/wiki/SRGB)を示します。
    - `display-p3`: [display-p3 色空間](https://ja.wikipedia.org/wiki/DCI-P3)を示します。
- `colorType` {{optional_inline}}
  - : レンダリングコンテキストの色タイプを示します。使用可能な値は次のとおりです。
    - `"unorm8"` は色チャンネルを 8 ビットの符号なし値に指定します。これが既定値です。
    - `"float16"` は、色チャンネルを16ビット浮動小数点値で指定することを示します。
- `desynchronized` {{optional_inline}}
  - : 論理値で、ユーザーエージェントがキャンバスの描画サイクルをイベントループから非同期化することでレイテンシーを低減しているかどうかを示します。
- `willReadFrequently` {{optional_inline}}
  - : 論理値で、このキャンバスが、{{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} を介した頻繁な読み出し操作に対応するために、ハードウェアアクセラレーションではなくソフトウェアアクセラレーションを使用するかどうかを示します。

## 例

この例は、キャンバスコンテキストを生成する際にコンテキスト属性を指定する方法と、その後で `getContextAttributes()` を呼び出してブラウザーが実際に使用した引数を取得する方法を示しています。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += text;
}
```

最初に [`HTMLCanvasElement.getContext()`](/ja/docs/Web/API/HTMLCanvasElement/getContext) を使用してコンテキストを作成し、コンテキスト属性を 1 つだけ指定します。

```js
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d", { alpha: false });
```

`getContextAttributes()` メソッドが対応している場合、それを使用してブラウザーが実際に使用した属性（明示的に指定した属性を含む）を読み戻します。

```js
if (ctx.getContextAttributes) {
  const attributes = ctx.getContextAttributes();
  log(JSON.stringify(attributes));
} else {
  log("CanvasRenderingContext2D.getContextAttributes() に対応していません。");
}
```

ブラウザーが対応している属性に応じて、ログには `{alpha: false, colorSpace: 『srgb』, desynchronized: false, willReadFrequently: false}` のような文字列が表示されるはずです。

{{EmbedLiveSample('Examples','100%','50')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`HTMLCanvasElement.getContext()`](/ja/docs/Web/API/HTMLCanvasElement/getContext)
- [`WebGLRenderingContext.getContextAttributes()`](/ja/docs/Web/API/WebGLRenderingContext/getContextAttributes)

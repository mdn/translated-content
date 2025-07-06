---
title: "OffscreenCanvas: getContext() メソッド"
short-title: getContext()
slug: Web/API/OffscreenCanvas/getContext
l10n:
  sourceCommit: 4752e8a68c630b2fc8354dc4af4573701d6dfe28
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`OffscreenCanvas.getContext()`** メソッドは、オフスクリーンキャンバスの描画コンテキストを返します。コンテキスト識別子が対応していない場合、またはオフスクリーンキャンバスがすでに別のコンテキストモードに設定されている場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を返します。

## 構文

```js-nolint
getContext(contextType, contextAttributes)
```

### 引数

- `contextType`
  - : キャンバスに関連付けられた描画コンテキストを定義するコンテキスト識別子を含む文字列。実現可能な値は次のとおりです。
    - `2d`
      - : 2 次元レンダリングコンテキストを表す {{domxref("OffscreenCanvasRenderingContext2D")}} オブジェクトです。
    - `webgl`
      - : 3 次元レンダリングコンテキストを表す {{domxref("WebGLRenderingContext")}} オブジェクトを作成します。このコンテキストは、[WebGL](/ja/docs/Web/API/WebGL_API) バージョン 1 （OpenGL ES 2.0） を実装しているブラウザーでのみ利用できます。
    - `webgl2`
      - : 3 次元レンダリングコンテキストを表す {{domxref("WebGL2RenderingContext")}} オブジェクトを作成します。このコンテキストは、[WebGL](/ja/docs/Web/API/WebGL_API) バージョン 2 （OpenGL ES 3.0） を実装しているブラウザーでのみ利用できます。
    - `"webgpu"`
      - : WebGPU レンダリングパイプラインの 3 次元レンダリングコンテキストを表す {{domxref("GPUCanvasContext")}} オブジェクトを作成します。このコンテキストは、[WebGPU API](/ja/docs/Web/API/WebGPU_API) を実装しているブラウザーでのみ利用可能です。
    - `bitmaprenderer`
      - : キャンバスのコンテンツを指定された {{domxref("ImageBitmap")}} で置き換える機能のみを提供する {{domxref("ImageBitmapRenderingContext")}} を作成します。

    > [!NOTE]
    > 識別子 **`"experimental-webgl"`** や **`"experimental-webgl2"`** も WebGL の実装で使用されています。
    > これらの実装は、テストスイートの適合性に達していなかったり、プラットフォーム上のグラフィックドライバーの状況がまだ安定していなかったりします。
    > [Khronos Group](https://www.khronos.org/) は、特定の[適合性ルール](https://registry.khronos.org/webgl/sdk/tests/CONFORMANCE_RULES.txt)に基づいて WebGL の実装を認定しています。

- `contextAttributes`
  - : レンダリングコンテキストを作成する際に、複数のコンテキスト属性を使用することができます。例えば、次のようにします。

    ```js
    offscreen.getContext("webgl", { antialias: false, depth: false });
    ```

    2d コンテキストの属性は次の通りです。
    - `alpha`
      - : 論理値で、キャンバスにアルファチャンネルが含まれているかどうかを示します。 `false` に設定すると、ブラウザーは背景が常に不透明であることを認識し、透明なコンテンツや画像の描画を高速化できます。
    - `willReadFrequently`
      - : 論理値で、多くの読み戻し操作が計画されているかどうかを示します。
        これにより、ハードウェアアクセラレーションではなくソフトウェアによる 2D キャンバスの使用が強制され、 {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} を頻繁に呼び出す場合にメモリーを節約できます。
        Firefox では、このオプションはフラグ `gfx.canvas.willReadFrequently.enable` が `true` に設定されている場合（既定では B2G/Firefox OS の場合のみ）にのみ利用できます。

    WebGL コンテキストの属性は次の通りです。
    - `alpha`
      - : 論理値で、キャンバスにアルファチャンネルが含まれているかどうかを示します。
    - `depth`
      - : 論理値で、描画バッファーに 16 ビット以上の深度バッファーが要求されることを示します。
    - `stencil`
      - : 論理値で、描画バッファーに 8 ビット以上のステンシルバッファーが要求されることを示します。
    - `antialias`
      - : 論理値で、実現可能な場合にアンチエイリアシングを実行するかどうかを示します。
    - `premultipliedAlpha`
      - : 論理値で、ページコンポジターが、描画バッファーにアルファが事前に乗算された色が含まれていると想定することを示します。
    - `preserveDrawingBuffer`
      - : 値が true の場合、バッファーはクリアされず、作成者がクリアまたは上書きするまでその値が保持されます。
    - `failIfMajorPerformanceCaveat`
      - : 論理値で、システムのパフォーマンスが低い場合にコンテキストが作成されるかどうかを示します。

### 返値

次のいずれかのレンダリングコンテキストです。

- {{domxref("OffscreenCanvasRenderingContext2D")}} （`"2d"` の場合）
- {{domxref("WebGLRenderingContext")}} （`"webgl"` や `"experimental-webgl"` の場合）
- {{domxref("WebGL2RenderingContext")}} （`"webgl2"` や `"experimental-webgl2"` の場合）
- {{domxref("GPUCanvasContext")}} （`"webgpu"` の場合）
- {{domxref("ImageBitmapRenderingContext")}} （`"bitmaprenderer"` の場合）

そのコンテキスト識別子に対応していない場合、またはキャンバスがすでに別のコンテキストモードに設定されている場合は、 `null` が返されます。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : キャンバスが別のコンテキストスコープ（例えば、ワーカー）に移譲されている場合に発生します。

## 例

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

gl; // WebGLRenderingContext
gl.canvas; // OffscreenCanvas
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("OffscreenCanvas")}}
- {{domxref("HTMLCanvasElement.getContext()")}}
- 利用可能なレンダリングコンテキスト: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}}, {{domxref("WebGL2RenderingContext")}}, {{domxref("ImageBitmapRenderingContext")}}, {{domxref("OffscreenCanvasRenderingContext2D")}}

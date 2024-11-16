---
title: "HTMLCanvasElement: getContext() メソッド"
slug: Web/API/HTMLCanvasElement/getContext
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.getContext()`** メソッドは、描画コンテキストを返します。対応していないコンテキスト識別子であったり、既に別なコンテキストモードが設定されていたりした場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) になります。

同じキャンバス要素において、同じ `contextType` 引数を指定して後からこのメソッドを呼び出すと、常に最初の時点で呼び出された時と同じ描画コンテキストインスタンスが返されます。そのキャンバス要素で異なる描画コンテキストオブジェクトを取得することはできません。

## 構文

```js-nolint
getContext(contextType)
getContext(contextType, contextAttributes)
```

### 引数

- `contextType`

  - : キャンバスに関連する描画コンテキストを定義するコンテキスト識別子が入っている文字列です。利用可能な値は次の通りです。

    - `"2d"`: 2 次元の描画コンテキストを表す {{domxref("CanvasRenderingContext2D")}} オブジェクトが作成されます。
    - `"webgl"`（または `"experimental-webgl"`）: 3 次元レンダリングコンテキストを表す {{domxref("WebGLRenderingContext")}} オブジェクトを作成します。このコンテキストは、[WebGL](/ja/docs/Web/API/WebGL_API) version 1 (OpenGL ES 2.0) を実装しているブラウザーでのみ利用可能です。
    - `"webgl2"`: 3 次元レンダリングコンテキストを表す {{domxref("WebGL2RenderingContext")}} オブジェクトを作成します。このコンテキストは、[WebGL](/ja/docs/Web/API/WebGL_API) version 2 (OpenGL ES 3.0) を実装しているブラウザーでのみ利用できます。{{experimental_inline}}
    - `"webgpu"`: これは、WebGPU レンダーパイプライン用の 3 次元レンダリングコンテキストを表す {{domxref("GPUCanvasContext")}} オブジェクトを作成するものです。このコンテキストは、[WebGPU API](/ja/docs/Web/API/WebGPU_API) を実装しているブラウザーでのみ利用できます。
    - `"bitmaprenderer"`: 指定された{{domxref("ImageBitmapRenderingContext")}}でキャンバスのコンテンツを置き換える機能のみを提供します。

    > [!NOTE]
    > 識別子 `"experimental-webgl"` は、WebGL の新しい実装で使用されます。これらの実装は、テストスイート適合性に達していないか、プラットフォームのグラフィックドライバーがまだ安定していないかのいずれかです。[Khronos Group](https://www.khronos.org/) が、一定の[適合性ルール](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt)のもと、WebGL 実装を認証しています。

- `contextAttributes` {{optional_inline}}

  - : レンダリングコンテキストを作成する際に、いくつかのコンテキスト属性を使用することができます。例えば、以下のようなものです。

    ```js
    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
    });
    ```

    2 次元のコンテキスト属性:

    - `alpha`
      - : キャンバスにアルファチャンネルが含まれているかどうかを示す論理値です。`false` に設定すると、ブラウザーは背景が常に不透明であることを認識するようになり、透過コンテンツや画像の描画を高速化することができます。
    - `colorSpace` {{optional_inline}}
      - : レンダリングコンテキストの色空間を指定します。使用可能な値は以下の通りです。
        - `"srgb"`: [sRGB 色空間](https://ja.wikipedia.org/wiki/色空間#RGB)を選択します。これが既定値です。
        - `"display-p3"`: [display-p3 色空間](https://ja.wikipedia.org/wiki/DCI-P3)を選択します。
    - `desynchronized`
      - : 論理値で、ユーザーエージェントがキャンバスの描画サイクルをイベントループから非同期化することによって、遅延を縮小することを示唆します。
    - `willReadFrequently`
      - : 多くのリードバック操作を予定しているかどうかを示す論理値です。これにより、（ハードウェアアクセラレーションではなく）ソフトウェア2Dキャンバスを使用するようになり、{{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} を頻繁に呼び出す際にメモリーを節約することができます。

    WebGL コンテキスト属性:

    - `alpha`
      - : 論理値で、キャンバスがアルファバッファーを持っているかどうかを示します。
    - `depth`
      - : 論理値で、描画バッファーに 16 ビット以上のの深度バッファーがあることがリクエストされたことを示します。
    - `stencil`
      - : 論理値で、描画バッファーに 8 ビット以上のステンシルバッファーを持つようリクエストされたことを示します。
    - `desynchronized`
      - : 論理値で、ユーザーエージェントがキャンバスの描画サイクルをイベントループから非同期化することでレイテンシーを縮小することを示唆します。
    - `antialias`
      - : 論理値で、可能であればアンチエイリアスを行うか否かを示します。
    - `failIfMajorPerformanceCaveat`
      - : 論理値で、システム性能が低い場合やハードウェア GPU が利用できない場合に、コンテキストを作成するかどうかを示します。
    - `powerPreference`

      - : どのような GPU 構成が WebGL コンテキストに適しているかを示すユーザーエージェントへのヒントです。使用可能な値は次のとおりです。

        - `"default"`
          - : どの GPU 構成が最も適しているかをユーザーエージェントに決定させます。これが既定値です。
        - `"high-performance"`
          - : 消費電力よりもレンダリング性能を優先します。
        - `"low-power"`
          - : 描画性能よりも省電力を優先します。

    - `premultipliedAlpha`
      - : 論理値で、ページコンポジターが描画バッファーにアルファがあらかじめ乗算された色を格納することを想定することを示します。
    - `preserveDrawingBuffer`
      - : 値が true の場合、バッファーがクリアされることはなく、作者がクリアするか上書きするまでその値が保持されます。
    - `xrCompatible`
      - : 論理値で、[没入型 XR 機器](/ja/docs/Web/API/WebXR_Device_API)に対応したグラフィックアダプターを使用するよう、ユーザーエージェントに示唆します。コンテキスト生成時にこの同期フラグを設定することは推奨されません。XR セッションを始めるには、非同期の {{domxref("WebGLRenderingContext.makeXRCompatible()")}} メソッドを呼び出す必要があります。

    > [!NOTE]
    > WebGPU 仕様書では、`getContext()` に固有のコンテキスト属性を定義していません。その代わりに、{{domxref("GPUCanvasContext.configure()")}} メソッドで構成オプションを提供しています。

### 返値

次のいずれかの描画コンテキストです。

- {{domxref("CanvasRenderingContext2D")}}（`"2d"` の場合）
- {{domxref("WebGLRenderingContext")}}（`"webgl"` および `"experimental-webgl"` の場合）
- {{domxref("WebGL2RenderingContext")}}（`"webgl2"` の場合）
- {{domxref("GPUCanvasContext")}}（`"webgpu"` の場合）
- {{domxref("ImageBitmapRenderingContext")}}（`"bitmaprenderer"` の場合）

`contextType` が使用可能な描画コンテキストに一致しない場合、または最初にリクエストされた `contextType` と異なる場合は、`null` を返します。

## 例

この {{HTMLElement("canvas")}} 要素があったとします。

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

以下のコードで、キャンバスの `2d` コンテキストを取得することができます。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { /* … */ }
```

これでキャンバスの [2D 描画コンテキスト](/ja/docs/Web/API/CanvasRenderingContext2D)を取得し、その中に描画することができるようになりました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement")}}: `HTMLCanvasElement.getContext()` メソッドを定義しているインターフェイス
- {{domxref("OffscreenCanvas.getContext()")}}
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}}, {{domxref("WebGLRenderingContext.getContextAttributes()")}}
- {{domxref("CanvasRenderingContext2D")}}, {{domxref("ImageBitmapRenderingContext")}},
  {{domxref("WebGLRenderingContext")}}, {{domxref("WebGL2RenderingContext")}}, {{domxref("GPUCanvasContext")}}: 利用可能な描画コンテキスト
- [DCI-P3 色空間](https://ja.wikipedia.org/wiki/DCI-P3)（ウィキペディア）
- [sRGB 色空間](https://ja.wikipedia.org/wiki/色空間#RGB)（ウィキペディア）

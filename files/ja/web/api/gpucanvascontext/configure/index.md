---
title: "GPUCanvasContext: configure() メソッド"
slug: Web/API/GPUCanvasContext/configure
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUCanvasContext")}} インターフェイスの **`configure()`** メソッドは、指定の {{domxref("GPUDevice")}} でレンダリングを行う用にコンテキストを設定します。このメソッドが呼ばれると、キャンバスはまず透明な黒に初期化されます。

## 構文

```js-nolint
configure(configuration)
```

### 引数

- `configuration`

  - : 以下のプロパティを持つオブジェクトです。

    - `alphaMode` {{optional_inline}}
      - : {{domxref("GPUCanvasContext.getCurrentTexture()", "getCurrentTexture()")}} が返したテクスチャが読み取り・表示・画像ソースとしての使用をされるとき、アルファ値が持つ効果を指定する列挙値です。以下の値が使用可能です。
        - `opaque`: アルファ値は無視されます。テクスチャが不透明ではない場合は、画像ソースとして使用されたり画面に表示される際にアルファチャンネルは 1.0 にクリアされます。これがデフォルト値です。
        - `premultiplied`: 色の値はアルファ値を掛けた後の値です。たとえば、アルファ値 50% の 100% 赤は `[0.5, 0, 0, 0.5]` です。
    - `colorSpace` {{optional_inline}}
      - : `getCurrentTexture()` が返すテクスチャに書き込まれる値を表示する際に用いる色空間です。`srgb` (デフォルト) および `display-p3` が使用できます。
    - `device`
      - : このコンテキストで使用するレンダリング情報の取得元となる {{domxref("GPUDevice")}} です。
    - `format`
      - : `getCurrentTexture()` が返すテクスチャの形式です。`bgra8unorm`・`rgba8unorm`・`rgba16float` のいずれかの値をとれます。現在のシステムで最適なキャンバスのテクスチャ形式は、{{domxref("GPU.getPreferredCanvasFormat()")}} で取得できます。これを使用することが推奨されます。キャンバスコンテキストを設定する際に好ましい形式を使用しないと、プラットフォームによっては、テクスチャのコピーが増えるなど、オーバーヘッドが増加する可能性があります。
    - `usage` {{optional_inline}}

      - : `getCurrentTexture()` が返すテクスチャで許可する使用法を指定する{{glossary("Bitwise flags", "ビットフラグ")}}です。以下の値が使用可能です。

        - `GPUTextureUsage.COPY_SRC`: テクスチャは、コピー操作のソースとして使用できます。たとえば、{{domxref("GPUCommandEncoder.copyTextureToBuffer()")}} を呼び出す際の引数 `source` で使用できます。
        - `GPUTextureUsage.COPY_DST`: テクスチャは、コピー操作や書き込み操作のデスティネーションとして使用できます。たとえば、{{domxref("GPUCommandEncoder.copyTextureToTexture()")}} を呼び出す際の引数 `destination` で使用できます。
        - `GPUTextureUsage.RENDER_ATTACHMENT`: テクスチャは、レンダーパスにおけるカラーアタッチメントとして使用できます。たとえば、{{domxref("GPUCommandEncoder.beginRenderPass()")}} を呼び出す際のカラーアタッチメントビューとして使用できます。`GPUTextureUsage.RENDER_ATTACHMENT` はデフォルトの `usage` ですが、他の値を明示的に設定した場合は自動で含まれないことに注意してください。この場合、自分で追加で含めなければなりません。
        - `GPUTextureUsage.TEXTURE_BINDING`: テクスチャは、シェーダーでサンプルドテクスチャとして用いるためにバインドできます。たとえば、{{domxref("GPUDevice.createBindGroup()")}} を呼び出す際のバインドグループのエントリーで使用できます。
        - `GPUTextureUsage.STORAGE_BINDING`: テクスチャは、シェーダーでストレージテクスチャとして用いるためにバインドできます。たとえば、{{domxref("GPUDevice.createBindGroup()")}} を呼び出す際のバインドグループのエントリーで使用できます。

        `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT` のように、[ビット論理和演算子](/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)を用いて複数の可能な使用法を指定できます。

    - `viewFormats` {{optional_inline}}
      - : `getCurrentTexture()` が返すテクスチャから作成されるビューで使用可能な形式の配列です。指定可能なすべての値は、[Texture Formats](https://gpuweb.github.io/gpuweb/#texture-formats) を参照してください。

### 返値

なし (`undefined`)

## 例

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)

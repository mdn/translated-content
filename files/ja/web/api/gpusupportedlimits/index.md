---
title: GPUSupportedLimits
slug: Web/API/GPUSupportedLimits
l10n:
  sourceCommit: 840132f789c57681781d874734edd33da9d5ab90
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUSupportedLimits`** インターフェイスは、{{domxref("GPUAdapter")}} が対応している制限を表現します。

現在のアダプター用の `GPUSupportedLimits` オブジェクトは、{{domxref("GPUAdapter.limits")}} プロパティ経由で参照できます。

ブラウザーは、ドライブバイフィンガープリンティングで利用可能な一意な情報を減らすため、それぞれの GPU の正確な制限を報告せず、それぞれの制限によって異なる段階的な値を報告する可能性が高いです。たとえば、ある制限用の段階は 2048、8192、32768 である可能性があります。GPU の実際の制限が 16384 である場合は、ブラウザーは 8192 を報告します。

異なるブラウザーは異なる扱いをする可能性があり、段階の値は時間の経過で変わる可能性があるため、制限の正確な値を予測するのは難しいです。徹底的にテストを行うことを推奨します。

{{InheritanceDiagram}}

## インスタンスプロパティ

`GPUSupportedLimits` オブジェクトのプロパティでは以下の制限が表現されます。これらの制限が何と関係するかの詳細な説明は、仕様書の [Limits](https://gpuweb.github.io/gpuweb/#limits) 節を参照してください。

| 制限名                                      | デフォルト値             |
| ------------------------------------------- | ------------------------ |
| `maxTextureDimension1D`                     | 8192                     |
| `maxTextureDimension2D`                     | 8192                     |
| `maxTextureDimension3D`                     | 2048                     |
| `maxTextureArrayLayers`                     | 256                      |
| `maxBindGroups`                             | 4                        |
| `maxBindingsPerBindGroup`                   | 640                      |
| `maxDynamicUniformBuffersPerPipelineLayout` | 8                        |
| `maxDynamicStorageBuffersPerPipelineLayout` | 4                        |
| `maxSampledTexturesPerShaderStage`          | 16                       |
| `maxSamplersPerShaderStage`                 | 16                       |
| `maxStorageBuffersPerShaderStage`           | 8                        |
| `maxStorageTexturesPerShaderStage`          | 4                        |
| `maxUniformBuffersPerShaderStage`           | 12                       |
| `maxUniformBufferBindingSize`               | 65536 bytes              |
| `maxStorageBufferBindingSize`               | 134217728 bytes (128 MB) |
| `minUniformBufferOffsetAlignment`           | 256 bytes                |
| `minStorageBufferOffsetAlignment`           | 256 bytes                |
| `maxVertexBuffers`                          | 8                        |
| `maxBufferSize`                             | 268435456 bytes (256 MB) |
| `maxVertexAttributes`                       | 16                       |
| `maxVertexBufferArrayStride`                | 2048 bytes               |
| `maxInterStageShaderComponents`             | 60                       |
| `maxInterStageShaderVariables`              | 16                       |
| `maxColorAttachments`                       | 8                        |
| `maxColorAttachmentBytesPerSample`          | 32                       |
| `maxComputeWorkgroupStorageSize`            | 16384 bytes              |
| `maxComputeInvocationsPerWorkgroup`         | 256                      |
| `maxComputeWorkgroupSizeX`                  | 256                      |
| `maxComputeWorkgroupSizeY`                  | 256                      |
| `maxComputeWorkgroupSizeZ`                  | 64                       |
| `maxComputeWorkgroupsPerDimension`          | 65535                    |

## 例

以下のコードでは、`GPUAdapter.limits` の `maxBindGroups` の値を問い合わせ、6 以上かどうかをチェックします。理論上のサンプルアプリケーションは理想的には 6 個のバインドグループを必要とするので、返された値が 6 以上の場合は、`requiredLimits` オブジェクトに上限値 6 を追加適用します。そして、{{domxref("GPUAdapter.requestDevice()")}} を用いてこの制限の要件を満たすデバイスを要求します。

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU に対応していません。");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("WebGPU のアダプターを要求できませんでした。");
  }

  const requiredLimits = {};

  // アプリケーションは理想的には 6 個のバインドグループが必要なので、
  // アプリケーションで必要な分の要求を試みる
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    requiredLimits,
  });

  // ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)

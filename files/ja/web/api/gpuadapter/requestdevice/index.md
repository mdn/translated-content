---
title: "GPUAdapter: requestDevice() メソッド"
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: bc35e70e543bc32e4e1eb0436b18f11e17fb470c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPUAdapter")}} インターフェイスの **`requestDevice()`** メソッドは、GPU とのやりとり用の第一インターフェイスである {{domxref("GPUDevice")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### 引数

- `descriptor` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `defaultQueue` {{optional_inline}}
      - : デバイスのデフォルトの ({{domxref("GPUDevice.queue")}} が返す) {{domxref("GPUQueue")}} の情報を提供するオブジェクトです。このオブジェクトは 1 個のプロパティ `label` を持ち、{{domxref("GPUQueue.label", "label")}} の値を指定したデフォルトキューを提供します。値が指定されない場合のデフォルト値は空のオブジェクトであり、デフォルトキューのラベルは空文字列になります。
    - `label` {{optional_inline}}
      - : {{domxref("GPUDevice")}} の特定に用いることができるラベルを表す文字列です。たとえば、コンソールでの警告や {{domxref("GPUError")}} のメッセージで使用できます。
    - `requiredFeatures` {{optional_inline}}
      - : 返される {{domxref("GPUDevice")}} が対応することを要求する追加機能を表す文字列の配列です。`GPUAdapter` がこれらの機能を提供できない場合は、`requestDevice()` の呼び出しは失敗します。とりうる機能の完全なリストは、{{domxref("GPUSupportedFeatures")}} を参照してください。値が指定されない場合のデフォルトは空の配列です。
    - `requiredLimits` {{optional_inline}}
      - : 返される {{domxref("GPUDevice")}} が対応することを要求する制限を表すプロパティが格納されたオブジェクトです。`GPUAdapter` がこれらの制限を提供できない場合は、`requestDevice()` の呼び出しは失敗します。それぞれのキーは {{domxref("GPUSupportedLimits")}} のメンバーである名前でなければなりません。値が指定されない場合のデフォルトは空のオブジェクトです。

> [!NOTE]
> 下層のハードウェアが対応している場合でも、すべての機能と制限が対応しているすべてのブラウザーの WebGPU で利用可能なわけではありません。詳しくは、{{domxref("GPUAdapter.features", "features")}} および {{domxref("GPUAdapter.limits", "limits")}} のページを参照してください。

### 返値

{{domxref("GPUDevice")}} オブジェクトのインスタンスで解決する {{jsxref("Promise")}} です。

重複して呼び出した場合、すなわち `requestDevice()` が既に呼び出されている {{domxref("GPUAdapter")}} で `requestDevice()` を呼び出した場合、プロミスは即ロストするデバイスで解決します。そして、デバイスがどうしてロストしたのかの情報を {{domxref("GPUDevice.lost")}} から取得できます。

### 例外

- `OperationError` {{domxref("DOMException")}}
  - : `requiredLimits` プロパティに含まれる制限が有効な制限でないか、値がアダプターの制限値より高いために {{domxref("GPUAdapter")}} が対応していない場合、プロミスは `OperationError` で拒否されます。
- `TypeError` {{domxref("DOMException")}}
  - : `requiredFeatures` プロパティに含まれる機能に {{domxref("GPUAdapter")}} が対応していない場合、プロミスは `TypeError` で拒否されます。

## 例

### 基本的な例

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU に対応していません。");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("WebGPU アダプターを要求できませんでした。");
  }

  const device = await adapter.requestDevice();

  // ...
}
```

### 特定の機能と制限を要求する

以下のコードでは、

1. {{domxref("GPUAdapter")}} で `texture-compression-astc` 機能が利用可能かをチェックします。利用可能であれば、それを配列 `requiredFeatures` にプッシュします。
2. `GPUAdapter.limits` の `maxBindGroups` の値を問い合わせ、6 以上であるかをチェックします。理論上のサンプルアプリケーションは理想的には 6 個のバインドグループを必要とするので、返された値が 6 以上の場合は `requiredLimits` オブジェクトに最大値 6 を追加適用します。
3. これらの機能および制限の要件に `defaultQueue` ラベルを追加し、デバイスを要求します。

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU に対応していません。");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("WebGPU アダプターを要求できませんでした。");
  }

  const requiredFeatures = [];

  if (adapter.features.has("texture-compression-astc")) {
    requiredFeatures.push("texture-compression-astc");
  }

  const requiredLimits = {};

  // アプリケーションは理想的には 6 個のバインドグループを必要とするので、
  // アプリケーションが必要とする分の要求を試みる
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    defaultQueue: {
      label: "myqueue",
    },
    requiredFeatures,
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

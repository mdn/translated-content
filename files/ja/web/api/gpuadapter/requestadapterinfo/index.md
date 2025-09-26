---
title: "GPUAdapter: requestAdapterInfo() メソッド"
slug: Web/API/GPUAdapter/requestAdapterInfo
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPUAdapter")}} インターフェイスの **`requestAdapterInfo()`** メソッドは、アダプターに関する特定用の情報が格納された {{domxref("GPUAdapterInfo")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

このメソッドの背景の意図は、開発者がユーザーの GPU の特定の詳細を要求し、GPU に固有のバグの回避策を先手を取って適用したり、異なる GPU のアーキテクチャにより合う異なるコードパスを提供したりできるようにすることです。このような情報を提供すると、フィンガープリンティングに利用でき、セキュリティリスクが発生します。そのため、共有される情報は最小限にとどめられ、異なるブラウザーのベンダー間で情報の種類と粒度を共通化するでしょう。

> [!NOTE]
> 仕様書には `requestAdapterInfo()` 用の引数として、上記のセキュリティリスクを低減することを意図した `unmaskHints` が存在します。これに対応すれば、開発者は本当に知る必要がある値を指定することができるようになり、ユーザーはメソッドが呼び出されたとき情報を共有してよいかを尋ねる許可プロンプトを提示されるようになるでしょう。許可プロンプトで守られる場合、メソッドのフィンガープリンティングの対象としての有用度は下がるので、ブラウザーのベンダーはより有用な情報を共有するようになるでしょう。

## 構文

```js-nolint
requestAdapterInfo()
```

### 引数

なし

### 返値

{{domxref("GPUAdapterInfo")}} オブジェクトのインスタンスで解決する {{jsxref("Promise")}} です。

## 例

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU に対応していません。");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("WebGPU アダプターを要求できませんでした。");
  }

  const adapterInfo = await adapter.requestAdapterInfo();
  console.log(adapterInfo.vendor);
  console.log(adapterInfo.architecture);

  // ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)

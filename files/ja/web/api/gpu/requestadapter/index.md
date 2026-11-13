---
title: "GPU: requestAdapter() メソッド"
slug: Web/API/GPU/requestAdapter
l10n:
  sourceCommit: cf57e1e1e1756fec85425d01294ffeabc3b5b451
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPU")}} インターフェイスの **`requestAdapter()`** メソッドは、{{domxref("GPUAdapter")}} オブジェクトのインスタンスで解決する {{jsxref("Promise")}} を返します。これを用いると、{{domxref("GPUDevice")}}、アダプターの情報、機能、制限を要求できます。

注意点として、ユーザーエージェントはアダプターを返すかどうかを選択します。返す場合は、渡されたオプションに沿って選択します。オプションが何も渡されなかった場合は、デバイスはデフォルトアダプターへのアクセスを提供し、これは通常ほとんどの目的に十分適します。

## 構文

```js-nolint
requestAdapter()
requestAdapter(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `powerPreference` {{optional_inline}}
      - : システムで利用可能なアダプターからどのような種類のアダプターを選ぶべきかのヒントをユーザーエージェントに与える列挙値です。以下の値が利用できます。
        - `undefined` (または指定なし): ヒントを与えません。
        - `"low-power"`: パフォーマンスより電力の節約を優先するヒントを与えます。アプリケーションがこの設定で十分動作するなら、ポータブルデバイスにおけるバッテリーの寿命をかなり伸ばすので、これを使用することを推奨します。これは通常オプションが指定されない場合のデフォルトです。
        - `"high-performance"`: 電力の消費よりパフォーマンスを優先するヒントを与えます。これはポータブルデバイスにおけるバッテリーの寿命をかなり縮めるので、どうしても必要な場合のみこの値を指定することを推奨します。さらに、システムは電力を節約するために消費電力が少ないアダプターに切り替えることがあるため、{{domxref("GPUDevice")}} のロスの発生率が上がる可能性があります。

        このヒントの主な目的は、複数の GPU があるシステムにおける使用する GPU の選択に影響を与えることです。たとえば、ノートパソコンには低消費電力の統合された GPU と高パフォーマンスの独立した GPU があるものがあります。どのアダプターが返されるかは、バッテリーの状態、接続されたディスプレイ、取り外し可能な GPU などの異なる因子に影響を受ける可能性があります。

        > [!NOTE]
        > デュアル GPU の macOS デバイスで実行されている Chrome では、`requestAdapter()` が `powerPreference` オプションなしで呼び出され、デバイスが AC 電源で動作している場合は、高パフォーマンスの独立した GPU が返されます。そうでない場合は、低消費電力の統合された GPU が返されます。

### フォールバックアダプター

ユーザーエージェントがそれが利用可能な中で最適な選択肢だと判断した場合は、ユーザーエージェントにより提供されるアダプターは **フォールバックアダプター** である可能性があります。一般的に、フォールバックアダプターはかなりパフォーマンスが落ちるかわりに、より広い互換性、より予測可能な挙動、よりよいプライバシーのうちいくつかを持ちます。たとえば、フォールバックアダプターを通じて API のソフトウェアベースの実装を提供するブラウザーもあるかもしれません。フォールバックアダプターはすべてのシステムで利用可能ではないでしょう。

アプリケーションがフォールバックアダプターで動作するのを防ぎたい場合は、{{domxref("GPUDevice")}} を要求する前に {{domxref("GPUAdapter.isFallbackAdapter")}} 属性をチェックするべきです。

> [!NOTE]
> 仕様書には `requestAdapter()` 用の `forceFallbackAdapter` オプションがあります。これは、`true` に設定するとユーザーエージェントに利用可能であれば必ずフォールバックアダプターを返させる論理値です。これに対応しているブラウザーはまだありません。

### 返値

要求に成功した場合は {{domxref("GPUAdapter")}} オブジェクトのインスタンスで解決する {{jsxref("Promise")}} です。

適切なアダプターが利用できない場合は、`requestAdapter()` は `null` で解決します。

### 例外

なし

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

  const device = await adapter.requestDevice();

  //...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)

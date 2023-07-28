---
title: BaseAudioContext.createIIRFilter()
slug: Web/API/BaseAudioContext/createIIRFilter
---

{{ APIRef("Web Audio API") }}

**`createIIRFilter()`** は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、 {{ domxref("IIRFilterNode") }} を生成します。
これは一般的な**[無限インパルス応答](https://ja.wikipedia.org/wiki/無限インパルス応答)** (IIR) フィルターを生成し、これはよって様々な種類のフィルターとして提供できるように構成することができます。
of filter.

> **メモ:** {{domxref("IIRFilterNode.IIRFilterNode", "IIRFilterNode()")}} コンストラクターは {{domxref("IIRFilterNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#creating_an_audionode)を参照してください。

## 構文

```js
createIIRFilter(feedforward, feedback);
```

### 引数

- `feedforward`
  - : 浮動小数点値の配列で、 IIR フィルターの伝達関数のフィードフォワード（分子）係数を指定します。この配列の最大長は 20 で、少なくとも 1 つの値はゼロ以外でなければなりません。
- `feedback`
  - : 浮動小数点値の配列で、 IIR フィルターの伝達関数のフィードバック（分母）係数を指定します。この配列は最大 20 個のメンバーを持つことができ、そのうちの最初のメンバーは 0 以外でなければなりません。

### 返値

指定されたフィードバックとフィードフォワードの係数配列を持つフィルターを実装した {{domxref("IIRFilterNode")}} です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : すべての `feedforward` 係数が 0 の場合、あるいは最初の `feedback` 係数が 0 の場合に発生します。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 入力配列の一方または両方が20個を超えた場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("IIRFilterNode")}}
- {{domxref("AudioNode")}}

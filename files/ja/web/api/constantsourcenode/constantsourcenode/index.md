---
title: ConstantSourceNode()
slug: Web/API/ConstantSourceNode/ConstantSourceNode
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("Web Audio API")}}

**`ConstantSourceNode()`** コンストラクターは、常に同じ値のサンプルを出力する音声ソースを表す、新しい {{domxref("ConstantSourceNode")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nolint
new ConstantSourceNode(context, options)
```

### 引数

- `context`
  - : ノードを関連付けたい音声コンテキストを表す {{domxref("AudioContext")}} です。
- `options`

  - : `ConstantSourceOptions` 辞書オブジェクトで、 `ConstantSourceNode` に持たせたいプロパティを定義します。

    - `offset`
      - : 読み取り専用の {{domxref("AudioParam")}} で、ソースが生成する定数値を指定します。既定では 1.0 です。通常は 1.0 ですが、 `Infinity` から `+Infinity` の範囲であればどのような値でも指定できます。

## 例

この例では、音声コンテキストが作成され、次に `offset` が 0.5 に初期化された `ConstantSourceNode` が作成されます。

```js
let audioContext = new AudioContext();

let myConstantSource = new ConstantSourceNode(audioContext, { offset: 0.5 });
```

> **Note:** このコンストラクターで作成された新しい `ConstantSourceNode` は [`channelCount`](/ja/docs/Web/API/AudioNode/channelCount) が 2 になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

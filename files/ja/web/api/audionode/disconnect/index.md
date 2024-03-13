---
title: "AudioNode: disconnect() メソッド"
slug: Web/API/AudioNode/disconnect
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioNode") }} インターフェイスの **`disconnect()`** メソッドは、このメソッドが呼ばれたノードから 1 個または複数のノードを切断します。

## 構文

```js-nolint
disconnect()
```

### 引数

`disconnect()` メソッドには、切断するノードを決めるための引数の異なる組み合わせを受け付けるいくつかのバージョンがあります。引数が渡されない場合は、すべての出力の接続が切断されます。

- `destination` {{optional_inline}}
  - : 切断する 1 個または複数のノードを表す {{domxref("AudioNode")}} または {{domxref("AudioParam")}} です。値が `AudioNode` の場合は、切断する対象の 1 個のノードを表し、他の任意の引数 (`output` および `input`) によって切断する入力や出力を絞り込むことができます。値が `AudioParam` の場合は、この `AudioParam` への接続が終了し、変更が反映されるとこのパラメーターの計算におけるこのノードの担当部分は 0 になります。
- `output` {{optional_inline}}
  - : この `AudioNode` のどの出力を切断するかを表すインデックスです。インデックス番号は出力のチャンネル数に基づいて決められます。([オーディオチャンネル](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%AA%E3%83%BC%E3%83%87%E3%82%A3%E3%82%AA%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB)を参照してください)
- `input` {{optional_inline}}
  - : 指定の出力先 `AudioNode` へのどの入力を切断するかを表すインデックスです。インデックス番号は入力のチャンネル数に基づいて決められます。([オーディオチャンネル](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%AA%E3%83%BC%E3%83%87%E3%82%A3%E3%82%AA%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB)を参照してください)

### 返値

なし ({{jsxref("undefined")}})

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `input` または `output` として指定された値が無効な (存在しないノードを指しているか、許される範囲の外である) とき投げられます。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : `disconnect()` が呼ばれたノードが指定された `destination` ノードに接続されていないとき投げられます。

## 例

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

gainNode.disconnect();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

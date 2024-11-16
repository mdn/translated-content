---
title: "DelayNode: DelayNode() コンストラクター"
short-title: DelayNode()
slug: Web/API/DelayNode/DelayNode
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Web Audio API")}}

**`DelayNode()`** は[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のコンストラクターで、新しい {{domxref("DelayNode")}} オブジェクトをディレイラインと共に作成します。 入力データの到着と出力への伝搬の間に遅延を発生させる AudioNode 音声処理モジュールです。

## 構文

```js-nolint
new DelayNode(context)
new DelayNode(context, options)
```

### 引数

- `context`
  - : {{domxref("AudioContext")}} または {{domxref("OfflineAudioContext")}} への参照です。
- `options` {{optional_inline}}

  - : 遅延ノードのオプションを指定します。以下のメンバーを含めることができます。

    - `delayTime`
      - : ノードの初期遅延時間を秒単位で指定します。既定では `0` です。
    - `maxDelayTime`
      - : ノードの最大遅延時間を秒単位で指定します。既定では `1` です。
    - `channelCount`
      - : ノードへの任意の入力への[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)接続時に使用するチャンネル数を決定するための整数を表します。（詳細は {{domxref("AudioNode.channelCount")}} を参照してください）。その使用法と正確な定義は `channelCountMode` の値に依存します。
    - `channelCountMode`
      - : ノードの入出力間で一致しなければならないチャンネル方法を記述する列挙値を表します。（既定値などの詳細情報は {{domxref("AudioNode.channelCountMode")}} を参照してください。）
    - `channelInterpretation`
      - : チャンネルの意味を記述する列挙値を表します。この解釈は、音声の[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)がどのように起こるかを定義します。
        可能な値は `"speakers"` または `"discrete"` です。（既定値も含めて詳細は {{domxref("AudioNode.channelCountMode")}} を参照してください。）

### 返値

新しい {{domxref("DelayNode")}} オブジェクトインスタンスです。

## 例

```js
const audioCtx = new AudioContext();
const delayNode = new DelayNode(audioCtx, {
  delayTime: 0.5,
  maxDelayTime: 2,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

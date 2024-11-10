---
title: "BaseAudioContext: state プロパティ"
short-title: state
slug: Web/API/BaseAudioContext/state
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`state` は {{ domxref("BaseAudioContext") }} インターフェイスの読み取り専用プロパティで、現在の `AudioContext` の状態を返します。

## 値

文字列です。取りうる値は以下の通りです。

- `suspended`
  - : 音声コンテキストは（{{domxref("AudioContext.suspend()")}} によって）一時停止中です。
- `running`
  - : 音声コンテキストは通常動作中です。
- `closed`
  - : 音声コンテキストは（{{domxref("AudioContext.close()")}} によって）閉じられています。

## 例

### 状態の変化の扱い

次のスニペットは [AudioContext states のデモ](https://github.com/mdn/webaudio-examples)（[ライブ実行で確認](https://mdn.github.io/webaudio-examples/audiocontext-states/)）の一部です。 {{domxref("BaseAudioContext.statechange_event", "onstatechange")}} ハンドラーは、状態が変わるたびにコンソールにログを出力するために使われています。

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
};
```

### iOS Safari における一時停止した再生の再開の状態

iOS の Safari では、ユーザーが（タブの切り替え、ブラウザーの最小化、画面のオフなどで）ページを離れると、音声コンテキストの状態が "interrupted" に変わり、再開させる必要があります。例えば次のようにします。

```js
function play() {
  if (audioCtx.state === "interrupted") {
    audioCtx.resume().then(() => play());
    return;
  }
  // play() 関数の残り
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

---
title: "AudioContext: resume() メソッド"
short-title: resume()
slug: Web/API/AudioContext/resume
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

**`resume()`** は {{ domxref("AudioContext") }} インターフェイスのメソッドで、一時停止された音声コンテキストの時間の流れを再開します。

{{domxref("OfflineAudioContext")}} でこのメソッドを呼び出すと、 `INVALID_STATE_ERR` 例外が発生します。

## 構文

```js-nolint
resume()
```

### 引数

なし。

### 返値

コンテキストが再開されたときに解決する {{jsxref("Promise")}} です。このプロミスは、コンテキストが既に閉じている場合は拒否されます。

## 例

次のスニペットは [AudioContext states のデモ](https://github.com/mdn/webaudio-examples/tree/master/audiocontext-states)（[ライブ実行](https://mdn.github.io/webaudio-examples/audiocontext-states/)）から取ったものです。suspend/resume ボタンをクリックすると、{{domxref("BaseAudioContext.state")}} を問い合わせます。もし `running` ならば、 {{domxref("AudioContext.suspend()", "suspend()")}} が呼び出されます。 `suspended` ならば、 `resume()` が呼ばれます。両方ともプロミスが解決すると、ボタンのラベルが適切なものに更新されます。

```js
susresBtn.onclick = () => {
  if (audioCtx.state === "running") {
    audioCtx.suspend().then(() => {
      susresBtn.textContent = "Resume context";
    });
  } else if (audioCtx.state === "suspended") {
    audioCtx.resume().then(() => {
      susresBtn.textContent = "Suspend context";
    });
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)

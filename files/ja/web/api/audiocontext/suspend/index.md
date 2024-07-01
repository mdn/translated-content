---
title: "AudioContext: suspend() メソッド"
short-title: suspend()
slug: Web/API/AudioContext/suspend
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`suspend()` は {{ domxref("AudioContext") }} インターフェイスのメソッドで、音声コンテキストの時間の流れを一時停止します。音声ハードウェアへのアクセスを一時的に停止し、処理に必要だった CPU/バッテリーの使用を減らすことが出来ます。これは、アプリケーションがしばらくの間音声を扱わない間に、音声ハードウェアに電源を供給しないようにしたいときに便利です。

{{domxref("OfflineAudioContext")}} でこのメソッドを呼び出すと、 `INVALID_STATE_ERR` 例外が発生します。

## 構文

```js-nolint
suspend()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} であり、これは {{jsxref('undefined')}} で解決します。コンテキストが既に閉じている場合、プロミスは失敗します。

## 例

次のスニペットは [AudioContext states デモ](https://github.com/mdn/webaudio-examples/blob/master/audiocontext-states/index.html)（[ライブ実行](https://mdn.github.io/webaudio-examples/audiocontext-states/)）から取ったものです。suspend/resume ボタンをクリックすると、 {{domxref("BaseAudioContext/state", "AudioContext.state")}} を問い合わせます。もし `running` ならば、 `suspend()` が呼び出されます。 `suspended` ならば、 {{domxref("AudioContext/resume", "resume()")}} が呼び出されます。両方ともプロミスに成功するとボタンのラベルが適したものに更新されます。

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

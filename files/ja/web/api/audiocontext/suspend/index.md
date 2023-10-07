---
title: AudioContext.suspend()
slug: Web/API/AudioContext/suspend
---

{{ APIRef("Web Audio API") }}

`suspend()`メソッドは、オーディオコンテキストの時間の流れを一時停止します。音声ハードウェアへのアクセスを一時的に停止し、処理に必要だった CPU/バッテリーの使用を減らすことが出来ます。これは、アプリケーションがしばらくの間オーディオを扱わない間に、音声ハードウェアに電源を供給しないようにしたいときに便利です。

{{domxref("OfflineAudioContext")}}でこのメソッドを呼ぶと`INVALID_STATE_ERR`例外が発生します。

## 構文

```js
var audioCtx = new AudioContext();
audioCtx.suspend().then(function() { ... });
```

### 戻り値

void で完了する{{jsxref("Promise")}}。コンテキストが既に閉じている場合、プロミスは失敗します。

## 例

次のスニペットは[AudioContext states デモ](https://github.com/mdn/audiocontext-states/settings)([すぐ実行](http://mdn.github.io/audiocontext-states/))から取ったものです。suspend/resume ボタンをクリックすると、{{domxref("AudioContext.state")}}を問い合わせます—もし`running`ならば、`suspend()`が呼ばれます。`suspended`ならば、{{domxref("resume")}}が呼ばれます。両方ともプロミスに成功するとボタンのラベルが適したものに更新されます。

```js
susresBtn.onclick = function () {
  if (audioCtx.state === "running") {
    audioCtx.suspend().then(function () {
      susresBtn.textContent = "Resume context";
    });
  } else if (audioCtx.state === "suspended") {
    audioCtx.resume().then(function () {
      susresBtn.textContent = "Suspend context";
    });
  }
};
```

## 仕様

{{Specifications}}

## ブラウザ互換性

{{Compat("api.AudioContext.suspend")}}

## 参考

- [Using the Web Audio API](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/ja/docs/Web/API/Web_Audio_API)

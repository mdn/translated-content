---
title: AudioContext.resume()
slug: Web/API/AudioContext/resume
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}インターフェースの`resume()`メソッドは、一時停止されたオーディオコンテキストの時間の流れを再開します。

{{domxref("OfflineAudioContext")}}でこのメソッドを呼ぶと`INVALID_STATE_ERR`例外が発生します。

## 構文

```js
Promise<> baseAudioContext.resume();
```

### 引数

なし

### 戻り値

void で完了する{{jsxref("Promise")}}。コンテキストが既に閉じている場合、プロミスは失敗します。

## 例

次のスニペットは[AudioContext states デモ](https://github.com/mdn/audiocontext-states/settings)([すぐ実行](http://mdn.github.io/audiocontext-states/))から取ったものです。suspend/resume ボタンをクリックすると、{{domxref("AudioContext.state")}}を問い合わせます—もし`running`ならば、{{domxref("AudioContext.suspend()", "suspend()")}}が呼ばれます。`suspended`ならば、`resume()`が呼ばれます。両方ともプロミスに成功するとボタンのラベルが適したものに更新されます。

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

{{Compat}}

## 参考

- [Using the Web Audio API](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/ja/docs/Web/API/Web_Audio_API)

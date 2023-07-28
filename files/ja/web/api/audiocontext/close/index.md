---
title: AudioContext.close()
slug: Web/API/AudioContext/close
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}インターフェースの`close()`メソッドは、オーディオコンテキストを閉じて使っていたシステムのオーディオリソースを全て解放します。

閉じたコンテキストは新しいノードを生成できませんが、音声データのデコードやバッファの生成などは可能です。

この関数は、他の参照も同様に解放されない限り、AudioContext が生成したオブジェクトは自動的には解放しません。しかし、これはオーディオリソースを強制的に解放します。よって、オーディオコンテキストの更なる生成と使用はできなくなり、オーディオコンテキストの時間の流れは止まり、音声データの処理は停止します。
全ての AudioContext-creation-blocking リソースが解放されたとき、返された{{jsxref("Promise")}}が完了します。このメソッドは{{domxref("OfflineAudioContext")}}で呼ばれたとき`INVALID_STATE_ERR`例外が発生します。

## 構文

```js
var audioCtx = new AudioContext();
audioCtx.close().then(function() { ... });
```

### 戻り値

void で完了する{{jsxref("Promise")}}。

## 例

次のスニペットは[AudioContext states デモ](https://github.com/mdn/audiocontext-states/settings)([すぐ実行](http://mdn.github.io/audiocontext-states/))から取ったものです。stop ボタンをクリックすると、`close()`が呼ばれます。プロミスに成功すると、リセットされ最初の状態に戻ります。

```js
stopBtn.onclick = function () {
  audioCtx.close().then(function () {
    startBtn.removeAttribute("disabled");
    susresBtn.setAttribute("disabled", "disabled");
    stopBtn.setAttribute("disabled", "disabled");
  });
};
```

## 仕様

{{Specifications}}

## ブラウザ互換性

{{Compat("api.AudioContext.close")}}

## 参考

- [Using the Web Audio API](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/ja/docs/Web/API/Web_Audio_API)

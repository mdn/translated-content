---
title: "AudioContext: close() メソッド"
short-title: close()
slug: Web/API/AudioContext/close
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`close()` は {{ domxref("AudioContext") }} インターフェイスのメソッドで、音声コンテキストを閉じて使っていたシステムの音声リソースを全て解放します。

この関数は、他の参照も同様に解放されない限り、 `AudioContext` が生成したオブジェクトは自動的には解放しません。しかし、これは音声リソースを強制的に解放します。よって、音声コンテキストの更なる生成と使用はできなくなり、音声コンテキストの時間の流れは止まり、音声データの処理は停止します。 `AudioContext` の生成をブロックするリソースがすべて解放されたとき、返された {{jsxref("Promise")}} が解決します。このメソッドは {{domxref("OfflineAudioContext")}} で呼ばれたとき `INVALID_STATE_ERR` 例外が発生します。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

{{jsxref('undefined')}} で解決する {{jsxref("Promise")}} です。

## 例

次のスニペットは [AudioContext states デモ](https://github.com/mdn/webaudio-examples/blob/master/audiocontext-states/index.html)（[すぐ実行](https://mdn.github.io/webaudio-examples/audiocontext-states/)）から取ったものです。stop ボタンをクリックすると、 `close()` が呼び出されます。プロミスに成功すると、リセットされ最初の状態に戻ります。

```js
stopBtn.onclick = () => {
  audioCtx.close().then(() => {
    startBtn.removeAttribute("disabled");
    susresBtn.setAttribute("disabled", "disabled");
    stopBtn.setAttribute("disabled", "disabled");
  });
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)

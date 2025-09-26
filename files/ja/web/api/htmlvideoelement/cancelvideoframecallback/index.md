---
title: "HTMLVideoElement: cancelVideoFrameCallback() メソッド"
short-title: cancelVideoFrameCallback()
slug: Web/API/HTMLVideoElement/cancelVideoFrameCallback
l10n:
  sourceCommit: 66c21fab17a23004a23c5fb78cec74965f038e12
---

{{APIRef("HTML DOM")}}

**`cancelVideoFrameCallback()`** は {{domxref("HTMLVideoElement")}} インターフェイスのメソッドで、以前登録された映像フレームコールバックを取り消します。

## 構文

```js-nolint
cancelVideoFrameCallback(id)
```

### 引数

- `id`
  - : 数値で、取り消そうとしている映像フレームコールバックの ID を表します。これは、対応する {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback")}} 呼び出しによって返される値です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 映像フレームコールバックの取り消し

この例では、以前に登録した映像フレームコールバックを取り消すために、`cancelVideoFrameCallback()` を使用する方法を示しています。

```js
const updateCanvas = (now, metadata) => {
  // フレームで何かを行う

  // ...

  // 次のフレームで動作するようにコールバックを再登録する
  // 動画コールバック ID を反復処理するごとに更新することが重要
  // そうすることで、コールバックを正常に取り消すことができる
  videoCallbackId = video.requestVideoFrameCallback(updateCanvas);
};

// 最初のフレームで実行するコールバックの初期登録
let videoCallbackId = video.requestVideoFrameCallback(updateCanvas);

// ...

// 最新の videoCallbackId を使用して映像フレームコールバックをキャンセルする
video.cancelVideoFrameCallback(videoCallbackId);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("video")}} 要素
- {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback()")}}
- [`requestVideoFrameCallback()` を使用した、動画の各フレームに対する効率的な処理](https://web.dev/articles/requestvideoframecallback-rvfc) (developer.chrome.com, 2023)（英語）

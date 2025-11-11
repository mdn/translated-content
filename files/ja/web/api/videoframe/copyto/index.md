---
title: "VideoFrame: copyTo() メソッド"
short-title: copyTo()
slug: Web/API/VideoFrame/copyTo
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("Web Codecs API")}}

**`copyTo()`** は {{domxref("VideoFrame")}} インターフェイスのメソッドで、この `VideoFrame` の内容を `ArrayBuffer` へコピーします。

## 構文

```js-nolint
copyTo(destination)
copyTo(destination, options)
```

### 引数

- `destination`
  - : コピー先となる `ArrayBuffer`, {{jsxref("TypedArray")}}, {{jsxref("DataView")}} のいずれかです。
- `options` {{Optional_Inline}}
  - : 以下のものを含むオブジェクトです。
    - `rect` {{Optional_Inline}}
      - : `VideoFrame` からコピーされるピクセルの長方形。未指定の場合、 {{domxref("VideoFrame.visibleRect","visibleRect")}} を使用します。これは以下のものを含む辞書オブジェクトの形を採ります。
        - `x`: X 座標です。
        - `y`: Y 座標です。
        - `width`: フレームの幅です。
        - `height`: フレームの高さです。
    - `layout` {{Optional_Inline}}
      - : `VideoFrame` 内の各プレーンについて、以下の値を格納したリスト。プレーンは重なってはいけません。未指定の場合、プレーンは密に詰められます。
        - `offset`
          - : 整数で、指定されたプレーンが始まるバイト単位のオフセットを表します。
        - `stride`
          - : 整数で、プレーンの各行が使用するバイト数（パディングを含む）を表します。
            プレーンが重なることはありません。 `layout` を指定しない場合、プレーンはぎっしりと詰め込まれます。

### 返値

コピーが完了したときに、コピーのレイアウトに解決する `Promise`。

## 例

次の例は `videoFrame` の内容全体をコピーしています。

```js
let buffer = new Uint8Array(videoFrame.allocationSize());
let layout = await videoFrame.copyTo(buffer);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

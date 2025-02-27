---
title: "VideoFrame: allocationSize() メソッド"
short-title: allocationSize()
slug: Web/API/VideoFrame/allocationSize
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("Web Codecs API")}}

**`allocationSize()`** は {{domxref("VideoFrame")}} インターフェイスのメソッドで、メソッドに渡すオプションでフィルタリングされた動画を保持するために必要なバイト数を返します。

## 構文

```js-nolint
allocationSize()
allocationSize(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のものを含むオブジェクトです。
    - `rect` {{optional_inline}}
      - : `VideoFrame` からコピーされるピクセルの長方形。未指定の場合、 {{domxref("VideoFrame.visibleRect","visibleRect")}} を使用します。これは以下のものを含む辞書オブジェクトの形を採ります。
        - `x`: X 座標です。
        - `y`: Y 座標です。
        - `width`: フレームの幅です。
        - `height`: フレームの高さです。
    - `layout` {{optional_inline}}
      - : `VideoFrame` 内の各プレーンについて、以下の値を格納したリスト。プレーンは重なってはいけません。未指定の場合、プレーンは密に詰められます。
        - `offset`
          - : 整数で、指定されたプレーンが始まるバイト単位のオフセットを表します。
        - `stride`
          - : 整数で、プレーンの各行が使用するバイト数（パディングを含む）を表します。

### 返値

`options` で指定したフレームを格納するのに必要なバイト数を示す整数。

## 例

次の例では、左上の 800 × 600 の長方形に対して `allocationSize` が返されます。

```js
const videoRect = {
  x: 0,
  y: 0,
  width: 800,
  height: 600,
};
let size = VideoFrame.allocationSize({ rect: videoRect });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

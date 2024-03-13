---
title: "HTMLVideoElement: videoWidth プロパティ"
short-title: videoWidth
slug: Web/API/HTMLVideoElement/videoWidth
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLVideoElement")}} インターフェイスの **`videoWidth`** プロパティは読み取り専用で、この動画の[内在的な幅](/ja/docs/Web/API/HTMLVideoElement/videoHeight#内在的な幅と高さについて)を CSS ピクセル数で表します。
単純に言えば、これは自然なサイズでのメディアの幅です。

詳しくは、[`HTMLVideoElement.videoHeight` > 内在的な幅と高さについて](/ja/docs/Web/API/HTMLVideoElement/videoHeight#内在的な幅と高さについて)を参照してください。

## 値

動画の内在的な幅を CSS のピクセル数で指定する整数値。
要素の {{domxref("HTMLMediaElement.readyState", "readyState")}} が `HTMLMediaElement.HAVE_NOTHING` の場合、このプロパティの値は 0 です。これは、動画やポスターのフレームサイズ情報がまだ利用できないためです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

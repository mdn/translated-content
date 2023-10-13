---
title: "WorkerNavigator: mediaCapabilities プロパティ"
slug: Web/API/WorkerNavigator/mediaCapabilities
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

読み取り専用プロパティ **`WorkerNavigator.mediaCapabilities`** は、[Media Capabilities API](/ja/docs/Web/API/Media_Capabilities_API) における定義に沿って、指定の形式のデコードやエンコードの能力、および出力の能力に関する情報へのアクセスを可能にする {{domxref("MediaCapabilities")}} オブジェクトを返します。

## 値

{{domxref("MediaCapabilities")}} オブジェクトです。

## 例

```js
navigator.mediaCapabilities
  .decodingInfo({
    type: "file",
    audio: {
      contentType: "audio/mp3",
      channels: 2,
      bitrate: 132700,
      samplerate: 5200,
    },
  })
  .then((result) => {
    console.log(`この構成に対応していま${result.supported ? "す" : "せん"}。`);
    console.log(`スムーズ${result.smooth ? "" : "じゃない"}です。`);
    console.log(`電力効率がよ${result.powerEfficient ? "" : "くな"}いです。`);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Media Capabilities API](/ja/docs/Web/API/Media_Capabilities_API)
- {{domxref("WorkerNavigator")}}

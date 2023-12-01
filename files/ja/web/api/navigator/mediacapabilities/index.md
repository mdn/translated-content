---
title: "Navigator: mediaCapabilities プロパティ"
short-title: mediaCapabilities
slug: Web/API/Navigator/mediaCapabilities
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

**`Navigator.mediaCapabilities`** プロパティは読み取り専用で、[メディア能力 API](/ja/docs/Web/API/Media_Capabilities_API) で定義されています。
指定された形式のエンコードとデコードおよび出力能力についての情報が取得できる {{domxref("MediaCapabilities")}} オブジェクトを返します。

## 値

{{domxref("MediaCapabilities")}} オブジェクト。

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
    console.log(
      `This configuration is ${result.supported ? "" : "not "}supported,`,
    );
    console.log(`${result.smooth ? "" : "not "}smooth, and`);
    console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディア能力 API](/ja/docs/Web/API/Media_Capabilities_API)
- {{domxref("Navigator")}}

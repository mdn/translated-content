---
title: Navigator.mediaCapabilities
slug: Web/API/Navigator/mediaCapabilities
---

{{SeeCompatTable}}

**`Navigator.mediaCapabilities`** プロパティは読み取り専用で、 [Media Capabilities API](/ja/docs/Web/API/Media_Capabilities_API) で定義されているように、指定された形式のエンコードとデコードおよび出力能力についての情報を取得することができる {{domxref("MediaCapabilities")}} オブジェクトを返します。

## 構文

```
mediaCapabilitiesObj = globalObj.navigator.mediaCapabilities
```

## 値

{{domxref("MediaCapabilities")}} オブジェクト。

## 例

```js
navigator.mediaCapabilities.decodingInfo({
    type : 'file',
    audio : {
        contentType : "audio/mp3",
        channels : 2,
        bitrate : 132700,
        samplerate : 5200
    }
}).then(function(result) {
  console.log('This configuration is ' +
        (result.supported ? '' : 'not ') + 'supported, ' +
        (result.smooth ? '' : 'not ') + 'smooth, and ' +
        (result.powerEfficient ? '' : 'not ') + 'power efficient.')
});
```

## 仕様書

| 仕様書                                       | 状態                                     | 備考     |
| -------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Media Capabilities')}} | {{Spec2('Media Capabilities')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.Navigator.mediaCapabilities")}}

## 関連情報

- [Media Capabilities API](/ja/docs/Web/API/Media_Capabilities_API)
- {{domxref("Navigator")}}

{{APIRef("HTML DOM")}}

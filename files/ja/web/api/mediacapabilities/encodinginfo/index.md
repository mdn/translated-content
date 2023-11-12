---
title: MediaCapabilitiesInfo
slug: Web/API/MediaCapabilities/encodingInfo
---

{{APIRef("Media Capabilities API")}}

[Media Capabilities API](/ja/docs/Web/API/Media_Capabilities_API) の **`MediaCapabilitiesInfo`** インターフェイスは、{{domxref("MediaCapabilities")}} インターフェイスの {{domxref("MediaCapabilities.encodingInfo()")}} メソッドまたは {{domxref("MediaCapabilities.decodingInfo()")}} メソッドによって返される promise が満たされると使用可能になり、メディアタイプがサポートされているかどうかや、そのようなメディアのエンコードまたはデコードがスムーズで電力効率が良いかどうかに関する情報を提供します。

## プロパティ

`MediaCapabilitiesInfo` インターフェイスには、次の 3 つの Boolean 属性が含まれています。

- `supported`: {{domxref("MediaConfiguration")}} で定義されたプロパティを指定すると、指定されたメディアコンテンツをエンコード（{{domxref("MediaEncodingConfiguration")}} が設定されている場合）またはデコード（{{domxref("MediaDecodingConfiguration")}} が設定されている場合）できますか？ はいの場合、`supported` は _true_ になり、そうでない場合、_false_ になります。
- `smooth`: {{domxref("MediaConfiguration")}} で定義されたプロパティを指定すると、指定されたメディアの再生は高品質になりますか？ スムーズになりますか？ `supported` が `true` で、再生がスムーズになる場合、`smooth` は _true_ になり、そうでない場合、_false_ になります。
- `powerEfficient`: {{domxref("MediaConfiguration")}} で定義されたプロパティを指定すると、指定されたメディアの再生は電力効率が良くなりますか？ `supported` が `true` で、再生の電力効率が良い場合、`powerEfficient` は _true_ になり、そうでない場合、_false_ になります。

ブラウザーは、このデバイスの統計情報が記録されるまで、サポートしているメディア構成を `smooth` で `powerEfficient` として報告します。 サポートしているすべての音声コーデックは、電力効率が良いと報告されます。

## 例

```js
// テストする {{domxref("MediaConfiguration")}}
const mediaConfig = {
    type : 'file',
    audio : {
        contentType : "audio/ogg",
        channels : 2,
        bitrate : 132700,
        samplerate : 5200
     },
};

// サポートとパフォーマンスを確認する
navigator.mediaCapabilities.decodingInfo(mediaConfig).then(result => { // result にはメディア能力情報が含まれます
    console.log('この構成は、サポート' +
        (result.supported ? 'され' : 'されておらず') + 、スムーズ' +   // 構成されたメディアは、ユーザーエージェントによってデコードできますか
        (result.smooth ? 'であり' : 'でなく') + '、電力効率' +         // スムーズですか？
        (result.powerEfficient ? 'に優れています' : 'が良くありません') + '。') // 電力効率は良いですか？
});
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaConfiguration")}}
- {{domxref("MediaCapabilities.encodingInfo()")}}
- {{domxref("MediaCapabilities.decodingInfo()")}}

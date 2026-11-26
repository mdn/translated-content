---
title: "MediaTrackConstraints: facingMode プロパティ"
short-title: facingMode
slug: Web/API/MediaTrackConstraints/facingMode
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`facingMode`** プロパティは、要求または必須の制約を記述する [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) で、制約可能プロパティ [`facingMode`](/ja/docs/Web/API/MediaStreamTrack/getSettings#facingmode) の値に適用されます。

必要であれば、この制約に対応しているかどうかを、[`facingMode`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#facingmode) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

{{Glossary("RTP")}} にはこの情報が含まれていないため、[WebRTC](/ja/docs/Web/API/WebRTC_API) の {{domxref("RTCPeerConnection")}} に関連付けられているトラックには、このプロパティは含まれません。

## 値

[`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) に基づくオブジェクトで、動画トラックに受け入れ可能な向きを 1 つ以上指定します。
これらは、受け入れ可能、理想的、または必須 (`exact`) の値です。

この場合、`exact` 値は指定された向きが必須であることを示します。
例えば、次のようになります。

```js
const constraints = {
  facingMode: { exact: "user" },
};
```

これは、ユーザーに面したカメラ（自撮りカメラ）だけが受け入れ可能であることを示します。
そのようなカメラがない場合、またはユーザーがそのカメラの使用許可を拒否した場合、メディアリクエストは失敗します。

向きの値として許可されている文字列は次のとおりです。
これらは、別々のカメラを表す場合も、向きを調整できるカメラを向ける方向を表す場合もあります。

- `"user"`
  - : 映像ソースはユーザーの方を向いています。例えば、スマートフォンの前面カメラがこれに該当します。
- `"environment"`
  - : 映像ソースはユーザーから離れる方向を向き、周囲の環境を映します。
    これはスマートフォンの背面カメラです。
- `"left"`
  - : 映像ソースはユーザーの方を向いていますが、ユーザーから見て左側に向いています。
    例えば、ユーザーの左肩越しにユーザーへ向けたカメラなどです。
- `"right"`
  - : 映像ソースはユーザーの方を向いていますが、ユーザーから見て右側に向いています。
    例えば、ユーザーの右肩越しにユーザーへ向けたカメラなどです。

## 例

[制約エクササイザー](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints#例_制約エクササイザー)の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaStreamTrack")}}

---
title: "MediaTrackConstraints: groupId プロパティ"
short-title: groupId
slug: Web/API/MediaTrackConstraints/groupId
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`groupId`** プロパティは、要求または必須の制約を記述する [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) で、制約可能プロパティ [`groupId`](/ja/docs/Web/API/MediaStreamTrack/getSettings#groupid) の値に適用されます。

必要であれば、この制約に対応しているかどうかを、[`groupId`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#groupid) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

## 値

[`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) に基づくオブジェクトで、受け入れ可能、理想的、または必須 (`exact`) のグループ ID を 1 つ以上指定します。
これらの ID は、メディアコンテンツのソースとして受け入れ可能なものです。

グループ ID はオリジンごとに一意で、その一意性は 1 回のブラウジングセッション中維持されます。また、同じ物理機器からのすべてのメディアソースで共有されます。
例えば、同じヘッドセットのマイクとスピーカーは同じグループ ID を共有します。
そのため、入力機器のグループ ID を取得し、出力機器を要求するときに指定することで、入力機器と出力機器が同じヘッドセットに属することを確認できます。

ただし、`groupId` の値はトラックのコンテンツのソースによって決まり、仕様書で特定の形式が必須とされているわけではありません（何らかの GUID が推奨されています）。
つまり、特定のトラックから返される `groupId` の値は 1 つだけです。
これは {{domxref("MediaStreamTrack.getCapabilities", "getCapabilities()")}} の呼び出しで返されます。
また、この値はブラウジングセッションごとに変わることに注意してください。

このため、{{domxref("MediaStreamTrack.applyConstraints()")}} の呼び出しで `groupId` を使用しても意味がありません。
指定できる値は 1 つだけであり、複数のブラウジングセッションにわたって同じグループが使用されるように `getUserMedia()` を呼び出すときに指定することもできないためです。

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

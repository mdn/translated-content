---
title: "MediaTrackConstraints: logicalSurface プロパティ"
short-title: logicalSurface
slug: Web/API/MediaTrackConstraints/logicalSurface
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`logicalSurface`** プロパティは、要求または必須の制約を記述する [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) で、制約可能プロパティ [`logicalSurface`](/ja/docs/Web/API/MediaStreamTrack/getSettings#logicalsurface) の値に適用されます。

これは、{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} で、画面上に完全に表示されているとは限らない表示面をユーザーが選べるようにするかどうかを指定するために使います。
例えば、ほかのウィンドウに隠れているウィンドウや、スクロールしないと内容全体が見えないほど大きなウィンドウの全内容などです。

必要であれば、この制約に対応しているかどうかを、[`logicalSurface`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#logicalsurface) の値を確認することで判断できます。
この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。
ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

## 値

[`ConstrainBoolean`](/ja/docs/Web/API/MediaTrackConstraints#constrainboolean) は、ユーザーが選べる項目に論理的な表示面を含める場合に `true` となる値です。

[制約の定義方法](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints#制約の定義方法)を参照してください。

## 使用上の注意

表示メディアが {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} によって作成された後にユーザーエージェントが選択した設定は、表示メディアの動画 {{domxref("MediaStreamTrack")}} で {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} を呼び出し、[`logicalSurface`](/ja/docs/Web/API/MediaStreamTrack/getSettings#logicalsurface) プロパティの値を確認することでわかります。

例えば、選択された表示面が論理的な表示面かどうかをアプリケーションが確認する必要がある場合は、次のようにします。

```js
let isLogicalSurface = displayStream
  .getVideoTracks()[0]
  .getSettings().logicalSurface;
```

このコードの実行後、ストリームに含まれる表示面が論理的な表示面（画面内にすべて表示されているとは限らず、完全に画面外にある場合もあります）の場合、`isLogicalSurface` は `true` になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API)
- [画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}

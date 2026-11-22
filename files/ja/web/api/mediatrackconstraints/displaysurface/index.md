---
title: "MediaTrackConstraints: displaySurface プロパティ"
short-title: displaySurface
slug: Web/API/MediaTrackConstraints/displaySurface
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaTrackConstraints")}} 辞書の **`displaySurface`** プロパティは [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) で、制約可能プロパティ [`displaySurface`](/ja/docs/Web/API/MediaStreamTrack/getSettings#displaysurface) の優先値を記述します。

これは、アプリケーションがユーザーエージェントに、優先する表示面の種類 (`window`、`browser`、`monitor`) を伝えるために設定するものです。ユーザーが共有するものとして選べる対象には影響しませんが、選択肢を別の順序で表示するために使用されることがあります。

必要であれば、この制約に対応しているかどうかを、[`displaySurface`](/ja/docs/Web/API/MediaDevices/getSupportedConstraints#displaysurface) の値を確認することで判断できます。この値は {{domxref("MediaDevices.getSupportedConstraints()")}} の呼び出しで返されます。ただし、ブラウザーは通常、認識できない制約を無視するため、この確認は不要です。

## 値

[`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) で、アプリケーションが優先する表示面の種類を指定します。
この値によって、ブラウザーのユーザーインターフェイス上の表示ソースが追加または削除されることはありませんが、表示順序が変わる場合があります。
このプロパティを使って、ユーザーが選べる 3 種類の表示面 (`window`、`browser`、`monitor`) の一部だけに制限することはできません。
ただし、後述のとおり、選択された値を確認し、拒否することはできます。

[制約の定義方法](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints#制約の定義方法)を参照してください。

> [!NOTE]
> [`monitorTypeSurfaces: "exclude"`](/ja/docs/Web/API/MediaDevices/getDisplayMedia#monitortypesurfaces) と `displaySurface: "monitor"` は同時に設定できません。この 2 つの設定は矛盾しているためです。同時に設定すると、関連する `getDisplayMedia()` の呼び出しが `TypeError` で失敗します。

## 使用上の注意

表示メディアが {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} によって作成された後にユーザーエージェントが選択した設定は、表示メディアの動画 {{domxref("MediaStreamTrack")}} で {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} を呼び出し、[`displaySurface`](/ja/docs/Web/API/MediaStreamTrack/getSettings#displaysurface) プロパティの値を確認することでわかります。

例えば、アプリケーションがモニターの共有を避けたい場合、つまりコンテンツ以外の背景がキャプチャされる可能性がある場合は、次のようなコードを使用できます。

```js
let mayHaveBackdropFlag = false;
let displaySurface = displayStream
  .getVideoTracks()[0]
  .getSettings().displaySurface;

if (displaySurface === "monitor") {
  mayHaveBackdropFlag = true;
}
```

このコードの実行後、ストリームに含まれる表示面の種類が `monitor` の場合、`mayHaveBackdrop` は `true` になります。
後続のコードでは、このフラグを使って、背景を削除または置き換える、あるいは受信した映像フレームから個々の表示領域を切り出すなどの特別な処理を行うかどうかを判断できます。

## 例

以下は、`getDisplayMedia()` で `displaySurface` プロパティを使用する制約オブジェクトの例です。

```js
dsConstraints = { displaySurface: "window" }; // 'browser' と 'monitor' も指定可能
applyConstraints(dsConstraints);
// ユーザーは引き続きモニターやブラウザーを共有可能
// ウィンドウを優先するよう指定
```

さらに、制約の使用方法を示す[制約エクササイザー](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints#例_制約エクササイザー)の例も参照してください。

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

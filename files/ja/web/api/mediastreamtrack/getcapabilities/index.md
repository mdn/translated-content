---
title: "MediaStreamTrack: getCapabilities() メソッド"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("Media Capture and Streams")}}

**`getCapabilities()`** は {{domxref("MediaStreamTrack")}} インターフェイスのメソッドで、プラットフォームと{{Glossary("user agent", "ユーザーエージェント")}}に基づいて、各制約されるプロパティの値または値の範囲を指定する `MediaTrackCapabilities` オブジェクトを返します。

ブラウザーの能力がわかったら、スクリプトは {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} を使用して、理想的な設定または受け入れられる設定に一致するようにトラックの構成を要求することができます。制約可能なプロパティを作業する方法の詳細については、[能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)を参照してください。

## 構文

```js-nolint
getCapabilities()
```

### 引数

なし。

### 返値

`MediaTrackCapabilities` オブジェクトは、ユーザーエージェントが対応する制約可能なプロパティごとに対応する値または値の範囲を指定し、以下のメンバーを含みます。

- `deviceId`
  - : [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) オブジェクトで、機器 ID が入ります。
- `groupId`
  - : [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) オブジェクトで、グループ ID が入ります。
- `autoGainControl`
  - : [`ConstrainBoolean`](/ja/docs/Web/API/MediaTrackConstraints#constrainboolean) オブジェクトで、ソースが自動ゲイン制御ができるかどうかを報告します。
    この機能がスクリプトで制御できる場合、ソースは true と false の両方を可能な値として報告します。
- `channelCount`
  - : [`ConstrainULong`](/ja/docs/Web/API/MediaTrackConstraints#constrainulong) で、チャンネル数またはチャンネル数の範囲が入ります。
- `echoCancellation`
  - : [`ConstrainBoolean`](/ja/docs/Web/API/MediaTrackConstraints#constrainboolean) オブジェクトで、ソースがエコーキャンセルができるかどうかを報告します。
    この機能がスクリプトで制御できる場合、ソースは true と false の両方を可能な値として報告します。
- `latency`
  - : [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) で、レイテンシーまたはレイテンシーの範囲が入ります。
- `noiseSuppression`
  - : [`ConstrainBoolean`](/ja/docs/Web/API/MediaTrackConstraints#constrainboolean) object reporting if the source can do noise suppression.
    この機能がスクリプトで制御できる場合、ソースは true と false の両方を可能な値として報告します。
- `sampleRate`
  - : [`ConstrainULong`](/ja/docs/Web/API/MediaTrackConstraints#constrainulong) で、サンプリングレートまたはサンプリングレートの範囲が入ります。
- `sampleSize`
  - : [`ConstrainULong`](/ja/docs/Web/API/MediaTrackConstraints#constrainulong) で、サンプルサイズまたはサンプルサイズの範囲が入ります。
- `aspectRatio`
  - : [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) で、映像の{{glossary("aspect ratio", "アスペクト比")}}（幅のピクセル数を高さのピクセル数で割ったもの）またはアスペクト比の範囲が入ります。
- `facingMode`
  - : [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) オブジェクトで、カメラの向きのモードが入ります。カメラは "left" および "user" のように複数の向きを報告することがあります。
- `frameRate`
  - : [`ConstrainDouble`](/ja/docs/Web/API/MediaTrackConstraints#constraindouble) で、受け入れ可能なフレームレートまたはフレームレートの範囲が入ります。
- `height`
  - : [`ConstrainULong`](/ja/docs/Web/API/MediaTrackConstraints#constrainulong) で、映像のピクセル単位での高さまたは高さの範囲が入ります。
- `width`
  - : [`ConstrainULong`](/ja/docs/Web/API/MediaTrackConstraints#constrainulong) で、映像のピクセル単位での幅または幅の範囲が入ります。
- `resizeMode`
  - : [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) オブジェクトで、UAが映像トラックの解像度を導き出すために使用できるモード、またはモードの配列が入ります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("InputDeviceInfo.getCapabilities()")}}: `MediaTrackCapabilities` オブジェクトを返す

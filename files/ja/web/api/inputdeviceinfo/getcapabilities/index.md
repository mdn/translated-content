---
title: "InputDeviceInfo: getCapabilities() メソッド"
short-title: getCapabilities()
slug: Web/API/InputDeviceInfo/getCapabilities
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

**`getCapabilities()`** は {{domxref("InputDeviceInfo")}} インターフェイスのメソッドで、この機器の {{domxref("MediaStream")}} の主音声トラックまたは主映像トラックを記述する `MediaTrackCapabilities` オブジェクトを返します。

## 構文

```js-nolint
getCapabilities()
```

### 引数

なし。

### 返値

`MediaTrackCapabilities` オブジェクトで、ユーザーエージェントが対応する制約可能なプロパティごとに対応している値または値の範囲を指定し、以下のメンバーを含みます。

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

> [!NOTE]
> ユーザーが入力機器にアクセスする許可を与えていない場合、空のオブジェクトが返されます。

## 例

次の例では、音声と映像機器にアクセスする許可を {{domxref("mediaDevices.getUserMedia()")}} で求めています。`getCapabilities()` を使用するには、端末にアクセスする許可が必要です。

`device` が `InputDeviceInfo` オブジェクトの場合、`getCapabilities()` はその機能を示すメンバーを含むオブジェクトを返します。例えば、映像ストリームには `noiseSuppression` などの自動プロパティは記載されません。

```js
// 音声または映像機器にアクセスする許可を得る
navigator.mediaDevices.getUserMedia({ audio: true, video: true });

navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device.getCapabilities()); // MediaTrackCapabilities オブジェクト
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaStreamTrack.getCapabilities()")}}: `MediaTrackCapabilities` オブジェクトを返す

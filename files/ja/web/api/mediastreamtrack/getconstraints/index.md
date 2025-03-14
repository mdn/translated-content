---
title: "MediaStreamTrack: getConstraints() メソッド"
short-title: getConstraints()
slug: Web/API/MediaStreamTrack/getConstraints
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

**`getConstraints()`** は {{domxref("MediaStreamTrack")}} インターフェイスメソッドで、{{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} を以前に呼んでトラックに設定した一連の制約を保持する {{domxref('MediaTrackConstraints')}} オブジェクトを返します。これらの制約は、ウェブサイトまたはアプリケーションが、含まれている制約可能なプロパティに対して必須または受け入れられると指定した値と値の範囲を示します。

制約を使用して、希望する特定のガイドラインをメディアが満たしていることを保証することができます。例えば、高解像度のビデオを希望するものの、ネットワークに過剰な負荷をかけないよう、データレートを十分に低く抑えるためにフレームレートを少し低くする必要がある場合などです。制約では、理想的なサイズや受け入れられるサイズの範囲を指定することもできます。制約可能なプロパティの作業方法の詳細については、[能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)を参照してください。

## 構文

```js-nolint
getConstraints()
```

### 引数

なし。

### 返値

{{domxref('MediaTrackConstraints')}} オブジェクトで、ウェブサイトまたはアプリが {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} を使用して直近で設定した制約可能なプロパティを示します。返されたオブジェクト内のプロパティは、設定された順番で掲載されており、サイトまたはアプリで固有に設定されたプロパティのみが記載されています。

> [!NOTE]
> 返される一連の制約は、必ずしもメディアの実際の状態を反映しているとは限りません。 制約のいずれかが満たされない場合でも、サイトのコードで元々設定されたとおりに、返されるオブジェクトに記載されています。 制約可能なプロパティすべてについて、現在有効な設定を取得するには、{{domxref("MediaStreamTrack.getSettings", "getSettings()")}} を呼び出す必要があります。

## 例

この例では、トラックの現在の制約を取得し、{{domxref("MediaTrackConstraints.facingMode", "facingMode")}} を設定し、更新された制約を適用します。

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

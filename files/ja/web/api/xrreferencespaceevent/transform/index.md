---
title: "XRReferenceSpaceEvent: transform プロパティ"
short-title: transform
slug: Web/API/XRReferenceSpaceEvent/transform
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}

{{domxref("XRReferenceSpaceEvent")}} の **`transform`** 読み取り専用プロパティは、イベントが表す変更が適用された後の、影響を受ける {{domxref("XRReferenceSpaceEvent.referenceSpace", "referenceSpace")}} のネイティブの原点の位置と向きを示します。 `transform` は古い座標系を使用して定義します。 これにより、座標をイベント前の座標系からイベント後の座標系に変換するために使用できます。

### 値

座標をイベント前の座標系からイベント後の座標系に変換するために使用できる変換を提供する {{domxref("XRRigidTransform")}} オブジェクト。

## 使用上の注意

`reset` イベントを受信すると、キャッシュされた位置または向きの情報に変換を適用して、それらを更新された座標系にシフトできます。 または、キャッシュされた位置情報を破棄して、最初から再計算することもできます。 あなたが取るアプローチはあなたのニーズに依存します。

`reset` イベントの原因と対応方法の詳細については、{{domxref("XRReferenceSpace.reset_event", "reset")}} イベントのドキュメントを参照してください。

## 例

この例では `reset` イベントを処理します。その中で、シーン内のすべてのオブジェクトを走査し、各オブジェクトの位置にイベントの指定された `transform` を掛けて更新します。シーンは `scene` オブジェクトで表され、その中にある `objects` と呼ばれる配列にすべてのオブジェクトが含まれています。

```js
xrReferenceSpace.addEventListener("reset", (event) => {
  for (const obj of scene.objects) {
    mat4.multiply(obj.transform, obj.transform, event.transform);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

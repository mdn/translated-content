---
title: XRReferenceSpaceEvent.transform
slug: Web/API/XRReferenceSpaceEvent/transform
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}

{{domxref("XRReferenceSpaceEvent")}} の **`transform`** 読み取り専用プロパティは、イベントが表す変更が適用された後の、影響を受ける {{domxref("XRReferenceSpaceEvent.referenceSpace", "referenceSpace")}} のネイティブの原点の位置と向きを示します。 `transform` は古い座標系を使用して定義します。 これにより、座標をイベント前の座標系からイベント後の座標系に変換するために使用できます。

## 構文

```
let refSpace = xrReferenceSpaceEvent.transform;
```

### 値

座標をイベント前の座標系からイベント後の座標系に変換するために使用できる変換を提供する {{domxref("XRRigidTransform")}} オブジェクト。

## 使用上の注意

`reset` イベントを受信すると、キャッシュされた位置または向きの情報に変換を適用して、それらを更新された座標系にシフトできます。 または、キャッシュされた位置情報を破棄して、最初から再計算することもできます。 あなたが取るアプローチはあなたのニーズに依存します。

`reset` イベントの原因と対応方法の詳細については、{{domxref("XRReferenceSpaceEvent.reset_event", "reset")}} イベントのドキュメントを参照してください。

## 例

この例では、シーン内のすべてのオブジェクトをウォークスルーし、各オブジェクトの位置にイベントの指定された `transform` を掛けて更新することにより、`reset` イベントを処理します。 シーンは `scene` オブジェクトで表され、その中にある `objects` と呼ばれる配列にすべてのオブジェクトが含まれています。

```js
xrReferenceSpace.addEventListener("reset", event => {
  for (let obj of scene.objects) {
    mat4.multiply(obj.transform, obj.transform, event.transform);
  }
});
```

## 仕様

| 仕様                                                                                                                         | 状態                     | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('WebXR','#dom-xrreferencespaceevent-transform','XRReferenceSpaceEvent.transform')}} | {{Spec2('WebXR')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.XRReferenceSpaceEvent.transform")}}

---
title: "XRInputSource: targetRaySpace プロパティ"
short-title: targetRaySpace
slug: Web/API/XRInputSource/targetRaySpace
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}

{{domxref("XRInputSource")}} の **targetRaySpace`** プロパティは読み取り専用で、仮想空間におけるターゲット光線の位置と方向を表す {{domxref("XRSpace")}} （通常は {{domxref("XRReferenceSpace")}}） を返します。その正の値はターゲット光線の原点の位置を示し、その方向はコントローラー機器自体の方向を示します。これらの値は、入力ソースの {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} のコンテキストで解釈され、機器を入力ソースとして完全に解釈するために使用することができます。

仮想空間における入力コントローラーの位置と方向を表す `XRSpace` を取得するには、 {{domxref("XRInputSource.gripSpace", "gripSpace")}} プロパティを使用してください。

## 値

{{domxref("XRSpace")}} オブジェクト—ふつうは {{domxref("XRReferenceSpace")}} または {{domxref("XRBoundedReferenceSpace")}} で、仮想空間における入力コントローラーの対象とする光線の位置と方向を表します。

返される `XRSpace` のネイティブの原点は、対象とする光線が射出される点に位置し、空間の方向は対象とする光線が向いている方向を示します。

## 使用上の注意

すべての入力ソースは、 {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} に関係なく、有効な `targetRaySpace` を持ちます。しかし、この空間の正確な意味はモードによって異なります。

- すべての視線入力（`targetRayMode` の値が `gaze`）は、視線入力が視聴者の頭から決まりますので、対象とする視線空間として同じ {{domxref("XRSpace")}} オブジェクトを共有します。この共有空間は {{domxref("XRSession")}} メソッド {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} が返す空間と同じ場所を表しますが、将来的な API の拡張を可能にするために異なるオブジェクトとして維持されます。
- トラッキングポインター入力（`targetRayMode` が `tracked-pointer` であるもの）によって報告されるターゲット視線空間は、実際には入力機器の正の空間位置と方向に基づいています。

フレームのレンダリング中に対象の光線の位置と方向を決定するには、 {{domxref("XRFrame")}} の {{domxref("XRFrame.getPose", "getPose()")}} メソッドに渡し、返す {{domxref("XRPose")}} オブジェクトの {{domxref("XRPose.transform", "transform")}} を使用して、必要な空間情報を収集します。

## 例

このコードでは、1 フレームに 1 回呼び出される関数の一部を示しています。この関数は、`null` ではない {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}} を持つ入力を見ていきます。このプロパティに値が示す入力は、ユーザーから外側に対象とする光線を表します。

このような各入力に対して、この例では {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} が `tracked-pointer` である入力を見ていきます。これは、その入力が実際には注視デバイス、画面タップ、マウスクリックではなく、ターゲティングデバイスを表すことを意図していることを示しています。トラッキングポインターの場合、関数 `myRenderTargetRayAsBeam()` が呼び出され、入力コントローラーの仮想位置から、ポインタが指している方向にビームをレンダリングします。

このコードは、仮想空間内でユーザーの手の位置を表すコントローラーやオブジェクトを描画したり、他にも入力関連のタスクを実行し続ける必要があります。

```js
function updateInputSources(session, frame, refSpace) {
  for (const source of session.getInputSources()) {
    const targetRayPose = frame.getPose(inputSource.targetRaySpace, refSpace);

    if (targetRayPose) {
      if (source.targetRayMode === "tracked-pointer") {
        myRenderTargetRayAsBeam(targetRayPose);
      }
    }

    // …
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
- [WebXR アプリケーションでのゲームパッドの使用](/ja/docs/Web/WebXR%20Device%20API/Gamepads)

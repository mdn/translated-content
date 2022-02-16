---
title: XRInputSource.targetRayMode
slug: Web/API/XRInputSource/targetRayMode
tags:
  - API
  - AR
  - Pointing
  - Property
  - Ray
  - Read-only
  - Reference
  - VR
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRInputSource
  - direction
  - pointer
  - target
  - targetRayMode
translation_of: Web/API/XRInputSource/targetRayMode
---
{{APIRef("WebXR Device API")}}

{{domxref("XRInputSource")}} の読み取り専用プロパティ **`targetRayMode`** は、入力ソースのターゲット光線を生成する方法と、それをユーザーに提示する方法を示します。

一般的には、ターゲティングシステムのソースから、ユーザーが見ている、または指している方向のターゲット光線に沿って、ターゲット光線が描かれます。光線のスタイルは一般的に自由で、光線の終点を示す方法も自由です。ターゲットとなるポイントやオブジェクトは、図形を描いたり、ターゲットとなる表面やオブジェクトをハイライトすることで示されるかもしれません。

ターゲット光線はハンドコントローラーが影響します。

![ハンドコントローラからターゲット光線を照射している画面](example-target-ray.gif)

ターゲット光線は、単純な線 (理想的には距離に応じて消えていく) から、上のスクリーンショットにあるような SF の「フェイザー」スタイルのようなアニメーション効果まで、さまざまなものがあります。

## 構文

```js
let rayMode = xrInputSource.targetRayMode;
```

### 値

ターゲット光線を生成してユーザーに提示する際に、どの方法を使用するかを示す文字列です。指定できる値は次の通りです。

- `gaze` (視線)
  - : ユーザーは、ユーザーが見ている方向を検出する視線追跡システム (または**視線入力**) を使用しています。 ターゲット光線は、ビューアーの目を起点として描画され、ビューアーが見ている方向に追従します。
- `screen` (画面)
  - : ターゲット光線の方向は、タッチスクリーン、マウス、またはその他の触覚入力機器をタップして示します。
- `tracked-pointer` (追跡ポインター)
  - : ターゲティングは、ユーザーがターゲットの方向に向けるハンドヘルド機器またはハンドトラッキングシステムを使用して行われます。 ターゲット光線は、手 (または手の中のオブジェクト) からターゲット方向に伸びます。方向はプラットフォーム固有のルールを使用して決定されますが、そのようなルールが存在しない場合は、ユーザーが人差し指を手からまっすぐに向けていると仮定して方向が選択されます。 

## 使用上の注意

入力ソースの {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}} は、ターゲット光線の位置と向きを示し、光線をレンダリングする場所を決定するために使用できます。

## 例

このコードの断片は、フレームごとに 1 回呼び出される関数の一部を示しています。 `null` 以外の {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}} を持つ入力を探します。 このプロパティの値を持つ入力は、ターゲット光線をユーザーから外側に投影する入力を表します。

このような入力ごとに、この例では、 {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} が `tracked-pointer` である入力を探します。 これは、入力が実際には、視線入力機器、画面タップ、またはマウスクリックではなく、ターゲティング機器を表すことを目的としていることを示しています。 追跡ポインターの場合、関数 `myRenderTargetRayAsBeam()` が呼び出され、入力コントローラーの仮想位置から、それが指している方向に外側にビームをレンダリングします。

コードは、仮想空間でのユーザーの手の位置を表すコントローラーや任意のオブジェクトの描画、その他の入力関連のタスクなどを引き続き実行する必要があります。

```js
function updateInputSources(session, frame, refSpace) {
  for (let source of session.getInputSources()) {
    let targetRayPose = frame.getPose(inputSource.targetRaySpace, refSpace);

    if (targetRayPose) {
      if (source.targetRayMode == "tracked-pointer") {
        myRenderTargetRayAsBeam(targetRayPose);
      }
    }

    /* ... */
  }
}
```

詳細とより完全な例については、[入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)の記事を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
- [WebXR アプリケーションでのゲームパッドの使用](/ja/docs/Web/WebXR%20Device%20API/Gamepads)

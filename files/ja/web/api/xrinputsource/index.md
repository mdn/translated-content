---
title: XRInputSource
slug: Web/API/XRInputSource
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

[WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API) の **`XRInputSource`** インターフェイスは、ユーザーの WebXR 互換の仮想現実または拡張現実のシステムの一部であるコントロール入力の単一ソースを記述します。機器は使用されているプラットフォームに固有ですが、それが向けられている方向を提供し、ユーザーが機器を使用してアクションを実行することをトリガーにした場合、オプションでイベントを生成することができます。

## インスタンスプロパティ

- {{domxref("XRInputSource.gamepad", "gamepad")}} {{ReadOnlyInline}}
  - : XR 入力ソースのボタンと軸の状態を説明する {{domxref("Gamepad")}} オブジェクト（ゲームパッドまたは同等の機器の場合）。 その機器がゲームパッドのような機器でない場合、このプロパティの値は `null` です。
- {{domxref('XRInputSource.gripSpace', 'gripSpace')}} {{ReadOnlyInline}}
  - : `handedness` で示された手に持っているように見えるオブジェクトをレンダリングするために使用するポーズを原点が追跡する {{domxref("XRSpace")}}。この空間の向きは、手がオブジェクトをつかんでいる角度を示します。 この空間の使用方法の詳細については、{{domxref("XRInputSource.gripSpace", "gripSpace")}} のメイン記事をお読みください。
- {{domxref('XRInputSource.hand', 'hand')}} {{ReadOnlyInline}}
  - : 基盤となっているハンドトラッキング機器にアクセスするための {{domxref("XRHand")}} オブジェクト。
- {{domxref('XRInputSource.handedness', 'handedness')}} {{ReadOnlyInline}}
  - : この `XRInputSource` によって表される機器を使用している手がある場合はそれを示す文字列。 値は、`left`、`right`、`none` のいずれかになります。
- {{domxref('XRInputSource.profiles', 'profiles')}} {{ReadOnlyInline}}
  - : 文字列の配列。 それぞれが、この入力ソースの望ましい視覚的表現と振る舞いを説明する入力プロファイルの名前を指定します。
- {{domxref('XRInputSource.targetRayMode', 'targetRayMode')}} {{ReadOnlyInline}}
  - : ターゲット光線を生成するために使用する方法を `gaze`、`tracked-pointer`、`screen` のいずれかで示す文字列。
- {{domxref('XRInputSource.targetRaySpace', 'targetRaySpace')}} {{ReadOnlyInline}}
  - : ターゲット光線の原点とそれが伸びる方向を定義する {{domxref("XRSpace")}} オブジェクト。 この空間は、`targetRayMode` で定義された方法を使用して確立されます。

## インスタンスメソッド

_`XRInputSource` インターフェイスはメソッドを定義していません。_

## 使用上の注意

### アクションとターゲット光線

機器が向けられている方向を示す場合、これは**ターゲット光線**（target ray）を使用して行われます。 これは、機器の位置から、機器が向けられている方向に外側に伸びる光線です。

**ハンドコントローラから放出されるターゲット光線。**

![ハンドコントローラーから放出されるターゲット光線を示すスクリーンショット](example-target-ray.gif)

機器にトリガーまたは他のスクイーズ可能な入力（ユーザーが拳を握ったことを認識するハンドジェスチャー機器など）が含まれている場合、そのアクションは**プライマリースクイーズアクション** (primary squeeze action) と呼ばれます。 プライマリースクイーズアクションは、オブジェクトをつかんだり、ツールや武器のトリガーを押したりするなど、実際のグリップアクションに対応している必要があります。ユーザーがトリガーを押したりグリップを締め付けたりするなどしてスクイーズアクションが開始されると、{{domxref("XRSession.squeezestart_event", "squeezestart")}} イベントが `XRSession` に送信されます。 アクションが完了し、ユーザーがトリガーまたはグリップを放すと、{{domxref("XRSession.squeeze_event", "squeeze")}} イベントが送信されます。 この後に {{domxref("XRSession.squeezeend_event", "squeezeend")}} が続き、アクションが完了ではなく中止された場合にも送信されます。

機器にボタンまたはその他の押すことができる入力コントロールがある場合、それは**プライマリ入力ソース** (primary input source) であり、このボタンは**プライマリーアクション** (primary action) です。 プライマリーアクションは、ユーザーがボタンを押すか、タッチパッドまたはサムスティックのトップボタンをクリックするか、ボタンのようなアクションを呼び出す手のジェスチャーまたは音声コマンドを使用するときに発生する可能性があります。 プライマリーアクションが開始されると、{{domxref("XRSession.selectstart_event", "selectstart")}} イベントが {{domxref("XRSession")}} に送信されます。 アクションが完了すると（ユーザーがボタンを離したときなど）、{{domxref("XRSession.select_event", "select")}} イベントが送信されます。 最後に、それが完了すると、またはユーザーがアクションを中止すると、{{domxref("XRSession.selectend_event", "selectend")}} イベントがセッションオブジェクトに送信されます。

アクションは、ユーザーが機器固有の方法で中止するか、アクションが完了する前に入力機器が切断された場合に中止される可能性があります。

### ローカル座標系

各入力ソースには独自のローカル座標系があります。 これは、入力の座標系を世界座標系にマッピングするために使用する {{domxref("XRSpace")}} である {{domxref("XRInputSource.gripSpace", "gripSpace")}} プロパティによって記述されます。 次に、グリップ空間の座標系を使用してオブジェクトをレンダリングし、ユーザーの手に持っているように見せることができます。

![gripSpace プロパティで定義された座標系を示す図](xr-hand-axes.svg)

入力ソースの座標系の詳細については、{{domxref("XRInputSource.gripSpace", "gripSpace")}} プロパティについて詳しく説明している記事を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
- {{domxref("XRInputSourceArray")}}
- {{domxref("XRSpace")}}

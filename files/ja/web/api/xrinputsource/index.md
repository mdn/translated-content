---
title: XRInputSource
slug: Web/API/XRInputSource
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}

[WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) の **`XRInputSource`** インターフェースは、ユーザーの WebXR 互換の仮想現実または拡張現実のシステムの一部であるコントロール入力の単一ソースを記述します。 デバイスは使用されているプラットフォームに固有ですが、それが向けられている方向を提供し、ユーザーがデバイスを使用してアクションを実行することをトリガーにした場合、オプションでイベントを生成することができます。

## プロパティ

- {{domxref("XRInputSource.gamepad", "gamepad")}} {{ReadOnlyInline}}{{experimental_inline}}

  - : XR 入力ソースのボタンと軸の状態を説明する {{domxref("Gamepad")}} オブジェクト（ゲームパッドまたは同等のデバイスの場合）。 デバイスがゲームパッドのようなデバイスでない場合、このプロパティの値は `NULL` です。

    > **メモ:** `XRInputSource` は [Gamepad API](/ja/docs/Web/API/Gamepad_API) の {{domxref("Gamepad")}} インターフェイスを使用しますが、この入力デバイスは WebXR ハードウェアに厳密に関連付けられており、汎用のゲームデバイスではありません。

- {{domxref('XRInputSource.gripSpace', 'gripSpace')}}{{readonlyInline}}
  - : `handedness` で示された手に持っているように見えるオブジェクトをレンダリングするために使用するポーズを原点が追跡する {{domxref("XRSpace")}}。この空間の向きは、手がオブジェクトをつかんでいる角度を示します。 この空間の使用方法の詳細については、{{domxref("XRInputSource.gripSpace", "gripSpace")}} のメイン記事をお読みください。
- {{domxref('XRInputSource.handedness', 'handedness')}}{{readonlyInline}}
  - : この `XRInputSource` によって表されるデバイスを使用している手がある場合はそれを示す {{domxref("DOMString")}}。 値は、`left`、`right`、または `none` になります。
- {{domxref('XRInputSource.profiles', 'profiles')}}{{readonlyInline}}
  - : DOMString オブジェクトの配列。 それぞれが、この入力ソースの望ましい視覚的表現と振る舞いを説明する入力プロファイルの名前を指定します。
- {{domxref('XRInputSource.targetRayMode', 'targetRayMode')}}{{readonlyInline}}
  - : ターゲット光線を生成するために使用する方法を `gaze`、`tracked-pointer`、または `screen` で示す `DOMString`。
- {{domxref('XRInputSource.targetRaySpace', 'targetRaySpace')}}{{readonlyInline}}
  - : ターゲット光線の原点とそれが伸びる方向を定義する {{domxref("XRSpace")}} オブジェクト。 この空間は、`targetRayMode` で定義された方法を使用して確立されます。

## <br>メソッド

_`XRInputSource` インターフェイスはメソッドを定義しません。_

## 使用上の注意

### アクションとターゲット光線

デバイスがそれが向けられている方向を示す場合、これは**ターゲット光線**（target ray）を使用して行われます。 これは、デバイスの位置から、デバイスが向けられている方向に外側に伸びる光線です。

**ハンドコントローラから放出されるターゲット光線。**
![ハンドコントローラーから放出されるターゲット光線を示すスクリーンショット](example-target-ray.gif)

デバイスにトリガーまたは他のスクイーズ可能な入力（ユーザーが拳を握ったことを認識するハンドジェスチャーデバイスなど）が含まれている場合、そのアクションは**プライマリースクイーズアクション**（primary squeeze action）と呼ばれます。 プライマリースクイーズアクションは、オブジェクトをつかんだり、ツールや武器のトリガーを押したりするなど、実際のグリップアクションに対応している必要があります。 ユーザーがトリガーを押したりグリップを締め付けたりするなどしてスクイーズアクションが開始されると、{{domxref("XRSession.squeezestart_event", "squeezestart")}} イベントが `XRSession` に送信されます。 アクションが完了し、ユーザーがトリガーまたはグリップを放すと、{{domxref("XRSession.squeeze_event", "squeeze")}} イベントが送信されます。 この後に {{domxref("XRSession.squeezeend_event", "squeezeend")}} が続き、アクションが完了ではなく中止された場合にも送信されます。

デバイスにボタンまたはその他の押すことができる入力コントロールがある場合、それは**プライマリ入力ソース**（primary input source）であり、このボタンは**プライマリーアクション**（primary action）です。 プライマリーアクションは、ユーザーがボタンを押すか、タッチパッドまたはサムスティックのトップボタンをクリックするか、ボタンのようなアクションを呼び出す手のジェスチャーまたは音声コマンドを使用するときに発生する可能性があります。 プライマリーアクションが開始されると、{{domxref("XRSession.selectstart_event", "selectstart")}} イベントが {{domxref("XRSession")}} に送信されます。 アクションが完了すると（ユーザーがボタンを離したときなど）、{{domxref("XRSession.select_event", "select")}} イベントが送信されます。 最後に、それが完了すると、またはユーザーがアクションを中止すると、{{domxref("XRSession.selectend_event", "selectend")}} イベントがセッションオブジェクトに送信されます。

アクションは、ユーザーがデバイス固有の方法で中止するか、アクションが完了する前に入力デバイスが切断された場合に中止される可能性があります。

### ローカル座標系

各入力ソースには独自のローカル座標系があります。 これは、入力の座標系を世界座標系にマッピングするために使用する {{domxref("XRSpace")}} である {{domxref("XRInputSource.gripSpace", "gripSpace")}} プロパティによって記述されます。 次に、グリップ空間の座標系を使用してオブジェクトをレンダリングし、ユーザーの手に持っているように見せることができます。

![GripSpace プロパティで定義された座標系を示す図](xr-hand-axes.svg)

入力ソースの座標系の詳細については、{{domxref("XRInputSource.gripSpace", "gripSpace")}} プロパティについて詳しく説明している記事を参照してください。

## 仕様

| 仕様                                                                                 | 状態                     | コメント |
| ------------------------------------------------------------------------------------ | ------------------------ | -------- |
| {{SpecName('WebXR','#xrinputsource-interface','XRInputSource')}} | {{Spec2('WebXR')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.XRInputSource")}}

## 関連情報

- [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
- [WebXR アプリケーションでのゲームパッドの使用](/ja/docs/Web/WebXR%20Device%20API/Gamepads)
- {{domxref("XRInputSourceArray")}}
- {{domxref("XRSpace")}}

---
title: XRHandedness
slug: conflicting/Web/API/XRInputSource/handedness
original_slug: Web/API/XRHandedness
---

{{APIRef("WebXR")}}

WebXR の **`XRHandedness`** 列挙型は、使用している XR 入力デバイスに接続された特定の入力コントローラーを操作するために使用しているユーザーの手を識別する値を提供します。 `XRHandedness` は、{{domxref("XRInputSource")}} の {{domxref("XRInputSource.handedness", "handedness")}} プロパティの値として使用されます。

## 値

- `none`
  - : 入力コントローラーは、ユーザーのいずれの手にも関連付けられていません。
- `left`
  - : 入力コントローラーは、ユーザーの左手に握られているか、着用されているか、取り付けられています。
- `right`
  - : 入力コントローラーは、ユーザーの右手に握られているか、着用されているか、取り付けられています。

## 例

`handedness` の重要な使用方法の 1 つは、コントローラーがどちらの手にあるかを判別して、仮想空間でその手（またはその手が制御しているデバイス）の表現を描画できるようにすることです。

```js
function updateInputSources(session, frame, refSpace) {
  for (let source of session.inputSources) {
    if (source.gripSpace) {
      let gripPose = frame.getPose(source.gripSpace, refSpace);

      if (gripPose) {
        myRenderHandObject(gripPose, inputSource.handedness);
      }
    }
  }
}
```

この関数は、すべてのアニメーションフレーム（または必要な滑らかさの程度とパフォーマンスの制約に応じて定期的に）で呼ばれ、入力ソースのリストをスキャンして、`null` ではない {{domxref("XRInputSource.gripSpace", "gripSpace")}} を持つものを探します。 `gripSpace` が存在する場合、それは入力ソースが何らかのハンドヘルドデバイスであることを意味するため、可能であれば視覚的にレンダリングする必要があります。

`gripSpace` が `null` 以外の場合、この関数は、現在の参照空間に変換された `gripSpace` のポーズを取得します。 それが有効であると仮定すると、`myRenderHandObject()` と呼ばれる関数が、グリップのポーズと `handedness` の値を使用して呼び出されます。 これらの値が手元にあれば（しゃれは意図していません）、`myRenderHandObject()` は、正しい手のために配置および形成された適切なモデルを描画できます。

## 仕様

| 仕様                                                                             | 状態                     | コメント |
| -------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('WebXR','#enumdef-xrhandedness','XRHandedness')}} | {{Spec2('WebXR')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.XRHandedness")}}

## 関連情報

- [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
- [WebXR アプリケーションでのゲームパッドの使用](/ja/docs/Web/WebXR%20Device%20API/Gamepads)
- {{domxref("XREye")}}: ビューを表示する対象の目を示します

---
title: "XRInputSource: handedness プロパティ"
short-title: handedness
slug: Web/API/XRInputSource/handedness
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}

{{domxref("XRInputSource")}} の **`handedness`** は読み取り専用プロパティで、WebXR 入力ソースがユーザーのどの手に関連付けられているか、またはまったく関連付けられていないかを示します。

## 値

文字列で、入力コントローラーがユーザーの手に握られているかどうか、もしそうならばどちらの手なのかを表します。値は次のうちの一つです。

- `none`
  - : 入力コントローラーは、ユーザーのいずれの手にも関連付けられていません。
- `left`
  - : 入力コントローラーは、ユーザーの左手に握られているか、着用されているか、取り付けられています。
- `right`
  - : 入力コントローラーは、ユーザーの右手に握られているか、着用されているか、取り付けられています。

## 使用上の注意

入力ソースがユーザーの手に関連付けられた機器でない場合（握られているか、取り付けられているか、着用されているかに関係なく）、`handedness` の値は `none` です。 これは、例えば、ヘッドセットに組み込まれたコントロールや、頭や体に取り付けられた入力機器など、手で持つものではない入力ソースを示している場合があります。

## 例

`handedness` の重要な使用方法の 1 つは、コントローラーがどちらの手にあるかを判別して、仮想空間でその手（またはその手が制御している機器）の表現を描画できるようにすることです。

```js
function updateInputSources(session, frame, refSpace) {
  for (const source of session.inputSources) {
    if (source.gripSpace) {
      const gripPose = frame.getPose(source.gripSpace, refSpace);

      if (gripPose) {
        myRenderHandObject(gripPose, inputSource.handedness);
      }
    }
  }
}
```

この関数は、すべてのアニメーションフレームで（または必要な滑らかさの程度とパフォーマンスの制約に応じて定期的に）呼び出され、入力ソースのリストをスキャンして、 {{domxref("XRInputSource.gripSpace", "gripSpace")}} が `null` ではないものを探します。 `gripSpace` が存在する場合、それは入力ソースが何らかのハンドヘルド機器であることを意味するため、可能であれば視覚的にレンダリングする必要があります。

`gripSpace` が `null` 以外の場合、この関数は、現在の参照空間に変換された `gripSpace` のポーズを取得します。 それが有効であると仮定すると、`myRenderHandObject()` と呼ばれる関数が、グリップのポーズと `handedness` の値を使用して呼び出されます。そして、正しい手に配置され形成された適切なモデルを描画します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
- [WebXR アプリケーションでのゲームパッドの使用](/ja/docs/Web/WebXR_Device_API/Gamepads)

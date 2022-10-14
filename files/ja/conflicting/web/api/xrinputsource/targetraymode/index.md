---
title: XRTargetRayMode
slug: conflicting/Web/API/XRInputSource/targetRayMode
original_slug: Web/API/XRTargetRayMode
---

{{APIRef("WebXR")}}

[WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) の **`XRTargetRayMode`** 列挙型は、入力コントローラーのターゲティング光線を生成する方法を記述します。 ターゲティングは、視線追跡システムを使用してターゲットを見るか、ハンドコントローラー、グローブ、またはモーショントラッキングシステムを使用してターゲットを指すか、画面上で指やマウスを使用してターゲットをタップまたはクリックすることによって行うことができます。

通常、**ターゲット光線**は、ターゲティングシステムのソースから、ユーザーが見ている方向または指している方向にターゲット光線に沿って描画されます。 光線の終点を示す方法と同様に、光線のスタイルは一般的にあなた次第です。 ターゲットとなる点またはオブジェクトは、図形を描画するか、ターゲットとなる表面またはオブジェクトを強調表示することによって示される場合があります。

<figcaption><strong>ハンドコントローラーから放出されるターゲット光線。</strong></figcaption>

![ハンドコントローラーから放出されるターゲット光線を示すスクリーンショット](https://mdn.mozillademos.org/files/17089/example-target-ray.gif)

ターゲット光線は、単純な線（理想的には距離とともにフェードする）から、上のスクリーンショットに示されているサイエンスフィクションの「フェイザー」スタイルなどのアニメーション効果まで、何でもかまいません。

## 値

- `gaze`（視線）
  - : ユーザーは、ユーザーが見ている方向を検出する視線追跡システム（または**視線入力**）を使用しています。 ターゲット光線は、ビューアーの目を起点として描画され、ビューアーが見ている方向に追従します。
- `screen`（画面）
  - : ターゲット光線の方向は、タッチスクリーン、マウス、またはその他の触覚入力デバイスをタップして示します。
- `tracked-pointer`（追跡ポインター）
  - : ターゲティングは、ユーザーがターゲットの方向に向けるハンドヘルドデバイスまたはハンドトラッキングシステムを使用して行われます。 ターゲット光線は、手（または手の中のオブジェクト）からターゲット方向に伸びます。 方向はプラットフォーム固有のルールを使用して決定されますが、そのようなルールが存在しない場合は、ユーザーが人差し指を手からまっすぐに向けていると仮定して方向が選択されます。

## 例

このコードの断片は、フレームごとに 1 回呼び出される関数の一部を示しています。 `null` 以外の {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}} を持つ入力を探します。 このプロパティの値を持つ入力は、ターゲット光線をユーザーから外側に投影する入力を表します。

このような入力ごとに、この例では、{{domxref("XRInputSource.targetRayMode", "targetRayMode")}} が `tracked-pointer` である入力を探します。 これは、入力が実際には、視線入力デバイス、画面タップ、またはマウスクリックではなく、ターゲティングデバイスを表すことを目的としていることを示しています。 追跡ポインターの場合、関数 `myRenderTargetRayAsBeam()` が呼び出され、入力コントローラーの仮想位置から、それが指している方向に外側にビームをレンダリングします。

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

## 仕様

| 仕様                                                                                     | 状態                     | コメント |
| ---------------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('WebXR','#enumdef-xrtargetraymode','XRTargetRayMode')}} | {{Spec2('WebXR')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.XRTargetRayMode")}}

## 関連情報

- [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)

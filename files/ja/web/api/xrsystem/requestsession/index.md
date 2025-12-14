---
title: "XRSystem: requestSession() メソッド"
short-title: requestSession()
slug: Web/API/XRSystem/requestSession
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**{{domxref("XRSystem")}}** インターフェイスの **`requestSession()`** メソッドは、プロミス ({{jsxref("Promise")}}) を返します。このプロミスは {{domxref("XRSession")}} オブジェクトに解決し、リクエストされた型の WebXR セッションを管理します。

一度にアクティブにできる没入型 VR セッションは 1 つだけですが、複数のインラインセッションを同時に進行することができます。

## 構文

```js-nolint
requestSession(mode)
requestSession(mode, options)
```

### 引数

- `mode`
  - : 文字列 ({{jsxref("String")}}) で、 XR セッションモードを定義します。対応しているモードは次の通りです。
    - {{Experimental_Inline}} `immersive-ar`: セッションの出力は没入型端末に独占的にアクセスされますが、レンダリングされたコンテンツは現実の環境と混合されます。
      このセッションの {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} は、コンテンツを混合するために使用するメソッドを示します。
    - `immersive-vr`: このレンダリングセッションは VR モードの没入型 XR 端末を使用して表示されます。周囲の環境に重ねたり統合したりすることは意図していません。
      {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} は可能な限り `opaque` であることが期待されますが、ハードウェアが要求される場合は `additive` であるかもしれません。
    - `inline`: 出力は、視覚空間全体を占めるのではなく、標準 HTML 文書内の要素のコンテキスト内でインライン表示されます。インラインセッションはモノラルまたはステレオモードで表示することができ、ビューアートラッキングを利用できる場合とできない場合があります。インラインセッションは特別なハードウェアを要求されず、 WebXR API を対応している{{Glossary("user agent", "ユーザーエージェント")}}であれば利用できるはずです。

- `options` {{Optional_Inline}}
  - : {{domxref("XRSession")}} を構成するためのオブジェクト。何も含まれない場合、端末はすべてのオプションに対して既定の機能構成を使用します。
    - `requiredFeatures` {{Optional_Inline}}: 返された {{domxref("XRSession")}} が対応しなければならない値の配列。対応しなければならない値の配列。下記の[セッション機能](#セッション機能)を参照ください。
    - `optionalFeatures` {{Optional_Inline}}: 返された {{domxref("XRSession")}} がオプションで対応している機能を表す値の配列。下記の[セッション機能](#セッション機能)を参照ください。
    - `domOverlay` {{Optional_Inline}}: DOM オーバーレイのコンテンツとしてユーザーに表示されるオーバーレイ要素を指定する `root` プロパティが要求されるオブジェクトです。[下記の例](#dom_オーバーレイによるセッションのリクエスト)を参照してください。
    - `depthSensing` {{Optional_Inline}}: 2 つの必須プロパティ {{domxref("XRSession.depthUsage", "usagePreference")}} と {{domxref("XRSession.depthDataFormat", "dataFormatPreference")}} を持つオブジェクトで、深度測定の実行方法を設定します。[下記の例](#深度測定セッションのリクエスト)を参照してください。

### 返値

端末とユーザーエージェントがリクエストされたモードと機能に対応している場合に、{{domxref("XRSession")}} オブジェクトで解決するプロミス ({{jsxref("Promise")}}) です。

### 例外

このメソッドは実際には例外を発生させません。代わりに、`name` が以下のいずれかである {{domxref("DOMException")}} を渡して、返されたプロミスを拒否します。

- `InvalidStateError` {{domxref("DOMException")}}
  - : リクエストされたセッションモードが `immersive-vr` であるにもかかわらず、すでに没入型 VR セッションがアクティブであるか、設定する途中である場合に返されます。没入型 VR セッションは一度に一つしか存在できません。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 利用できる WebXR 互換の端末がないか、端末が指定した `sessionMode` に対応していない場合に返されます。必須オプションに未対応の場合にも発生します。
- `SecurityError` {{domxref("DOMException")}}
  - : 指定した XR モードに入る権限が拒否された場合に返されます。これはいくつかの理由で起こる可能性があり、[権限とセキュリティ](/ja/docs/Web/API/WebXR_Device_API/Permissions_and_security)で詳しく述べられています。

## セッション機能

以下のセッション機能と参照空間を `optionalFeatures` または `requiredFeatures` としてリクエストすることができます。

- `anchors`
  - : {{domxref("XRAnchor")}} オブジェクトの仕様を有効にします。
- `bounded-floor`
  - : `local` 型と似ていますが、返すオブジェクトの {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} で指定された境界の外にユーザーが移動することはありません。
- `depth-sensing`
  - : {{domxref("XRDepthInformation")}} オブジェクトを使用して深度情報を取得する機能を有効にします。
- `dom-overlay`
  - : ユーザーに表示される DOM オーバーレイ要素を指定します。
- `hand-tracking`
  - : ハンドベースの入力コントローラー（{{domxref("XRHand")}} および {{domxref("XRInputSource.hand")}} を参照）からの多関節ハンドポーズ情報を有効にします。
- `hit-test`
  - : 実際の形状に対するヒットテストを実行するためのヒットテスト機能を有効にします。
- `layers`
  - : 様々なレイヤー型（{{domxref("XRProjectionLayer")}} 以外）を作成する機能を有効にします。
- `light-estimation`
  - : {{domxref("XRLightEstimate")}} オブジェクトを使用して環境照明条件を推定する機能を有効にします。
- `local`
  - : セッションが作成された時点でのビューアーの位置の近くに原点があるトラッキング空間を有効にします。正確な位置は基盤と実装に依存します。ユーザーは開始位置から大きく移動することはまったく期待されておらず、トラッキングはこの用途に最適化されています。
- `local-floor`
  - : `local` 型と似ていますが、開始位置は視聴者が安全に立てる場所に指定され、y軸の値は床の高さを0とします。床面がわからない場合、{{Glossary("user agent", "ユーザーエージェント")}}は床面を推定します。推定された床面が 0 でない場合、ブラウザーは[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)を避けるために、（おそらく最も近いセンチメートル単位に）丸めることが期待されます。
- `secondary-views`
  - : {{domxref("XRView")}} オブジェクトをセカンダリビューにすることができます。これは、動画キャプチャに使用するファーストパーソンオブザーバービューや、解像度と視野角が異なる、片目につき 2 つのビューがある「クワッドビュー」に使用することができます。
- `unbounded`
  - : ユーザーが完全に自由に動けるようなトラッキング空間を有効にし、場合によっては原点から非常に長い距離を移動できるようにします。ビューアーはまったくトラッキングされません。トラッキングはユーザーの現在位置を中心に安定するようにオプティマイザー指定されるため、ネイティブの原点は必要に応じてドリフトします。
- `viewer`
  - : ネイティブ原点が視聴者の位置と方向を追跡するトラッキング空間を有効にします。

## セキュリティ

いくつかのセッション機能と様々な参照空間には、ユーザーの同意を要求したり、 {{HTTPHeader("Permissions-Policy")}} を要求するなど、最小限のセキュリティとプライバシーの要件があります。 [`xr-spatial-tracking`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking) ディレクティブを設定する必要があります。詳しくは[権限とセキュリティ](/ja/docs/Web/API/WebXR_Device_API/Permissions_and_security)も参照してください。

| セッション機能  | ユーザー同意の要件               | 権限ポリシーの要件    |
| --------------- | -------------------------------- | --------------------- |
| `bounded-floor` | 常に必要                         | `xr-spatial-tracking` |
| `depth-sensing` | —                                | `xr-spatial-tracking` |
| `hand-tracking` | 常に必要                         | —                     |
| `hit-test`      | —                                | `xr-spatial-tracking` |
| `local`         | インラインセッションでは常に必要 | `xr-spatial-tracking` |
| `local-floor`   | 常に必要                         | `xr-spatial-tracking` |
| `unbounded`     | 常に必要                         | `xr-spatial-tracking` |
| `viewer`        | 常に必要                         | —                     |

[ユーザーによる一時的な有効化](/ja/docs/Web/Security/Defenses/User_activation)も参照してください。

## 例

### 没入型 VR セッションの作成

次の例では `requestSession()` を呼び出して、 `"immersive-vr"` セッションをリクエストしています。 {{jsxref("Promise")}} が解決されると、セッションを設定し、アニメーションループを開始します。

```js
navigator.xr
  .requestSession("immersive-vr")
  .then((xrSession) => {
    xrSession.addEventListener("end", onXRSessionEnded);
    // Do necessary session setup here.
    // Begin the session's animation loop.
    xrSession.requestAnimationFrame(onXRAnimationFrame);
  })
  .catch((error) => {
    // "immersive-vr" sessions are not supported
    console.error(
      "'immersive-vr' isn't supported, or an error occurred activating VR!",
    );
  });
```

### WebXR の対応の確認と VR モード開始ボタンの使用

次の例では、`isSessionSupported()` と `requestSession()` の両方を使用する方法を示します。最初に、 {{domxref("navigator.xr")}} の存在を確認することで WebXR が利用できるかどうかを調べます。次に、 XR に入るための制御ができるように、希望のセッションオプションを渡して `isSessionSupported()` を呼び出します。XRに入るにはユーザー操作が要求されるので、制御を追加するのは必要な段階です。最後に、`onButtonClicked()` メソッドは `isSessionSupported()` に渡すのと同じセッションオプションを使用して `requestSession()` を呼び出します。

```js
if (navigator.xr) {
  navigator.xr.isSessionSupported("immersive-vr").then((isSupported) => {
    if (isSupported) {
      immersiveButton.addEventListener("click", onButtonClicked);
      immersiveButton.textContent = "Enter XR";
      immersiveButton.disabled = false;
    } else {
      console.error("WebXR doesn't support immersive-vr mode!");
    }
  });
} else {
  console.error("WebXR is not available!");
}

function onButtonClicked() {
  if (!xrSession) {
    navigator.xr.requestSession("immersive-vr").then((session) => {
      xrSession = session;
      // onSessionStarted() not shown for reasons of brevity and clarity.
      onSessionStarted(xrSession);
    });
  } else {
    // Button is a toggle button.
    xrSession.end().then(() => (xrSession = null));
  }
}
```

### 要求された機能を持つセッションのリクエスト

ユーザーが物理的環境を自由に移動できるような、縛られない使い勝手を要求します。

```js
navigator.xr.requestSession("immersive-vr", {
  requiredFeatures: ["unbounded"],
});
```

### DOM オーバーレイによるセッションのリクエスト

```js
navigator.xr.requestSession("immersive-ar", {
  optionalFeatures: ["dom-overlay"],
  domOverlay: {
    root: document.getElementById("xr-overlay"),
  },
});
```

### 深度測定セッションのリクエスト

ここでは、呼び出し側は CPU と GPU の両方のオプティマイザー、および "luminance-alpha" と "float32" の両方の形式を処理することができます。順序は CPU と "luminance-alpha" の環境設定を推奨することを示します。

```js
navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    dataFormatPreference: ["luminance-alpha", "float32"],
  },
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

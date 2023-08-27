---
title: XRSystem
slug: Web/API/XRSystem
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

[WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) の **`XRSystem`** インターフェイスは、WebXR セッションを表す {{domxref("XRSession")}} オブジェクトにアクセスできるようにするメソッドを提供します。 その `XRSession` が手元にあれば、それを使用して拡張現実（AR）または仮想現実（VR）デバイスと対話できます。

## プロパティ

_`XRSystem` はプロパティを直接提供しませんが、親インターフェイスである {{domxref("EventTarget")}} からプロパティを継承します。_

## メソッド

_`XRSystem` インターフェイスには、親インターフェイスである {{domxref("EventTarget")}} からメソッドを継承することに加えて、次のメソッドが含まれています。_

- {{DOMxRef("XRSystem.isSessionSupported", "isSessionSupported()")}} {{Experimental_Inline}}
  - : ブラウザーが指定された {{domxref("XRSessionMode")}} をサポートしている場合、`true` に解決される promise を返します。 指定されたモードをサポートしていない場合、`false` に解決されます。
- {{DOMxRef("XRSystem.requestSession", "requestSession()")}} {{Experimental_Inline}}
  - : 指定された {{DOMxRef("XRSessionMode")}} を持つ新しい {{DOMxRef("XRSession")}} に解決される promise を返します。

## イベント

- {{domxref("XRSystem.devicechange_event", "devicechange")}} {{experimental_inline}}
  - : 使用可能な XR デバイスのセットが変更されたときに送信されます。
    {{domxref("XRSystem.ondevicechange", "ondevicechange")}} イベントハンドラーを使用することもできます。

## 使用上の注意

このインターフェイスは、以前のバージョンの仕様では単に `XR` と呼ばれていました。 コードや文書に `XR` への参照がある場合は、それを `XRSystem` に置き換えてください。

## 例

次の例は、{{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} と {{domxref("XRSystem.requestSession", "requestSession()")}} の両方を使用する方法を示しています。

```js
if (navigator.xr) {
  immersiveButton.addEventListener("click", onButtonClicked);
  navigator.xr.isSessionSupported("immersive-vr").then((isSupported) => {
    if (isSupported) {
      immersiveButton.disabled = false;
    } else {
      immersiveButton.disabled = true;
    }
  });
}

function onButtonClicked() {
  if (!xrSession) {
    navigator.xr.requestSession("immersive-vr").then((session) => {
      // onSessionStarted() not shown for reasons of brevity and clarity.
      onSessionStarted(session);
    });
  } else {
    // Shut down the already running XRSession
    xrSession.end().then(() => {
      // Since there are cases where the end event is not sent, call the handler here as well.
      onSessionEnded();
    });
  }
}
```

このコードは、{{domxref("navigator.xr")}} プロパティを探して、WebXR が使用可能かどうかを確認することから始まります。 見つかった場合は、WebXR が存在することがわかっているので、ユーザーがクリックして没入型 VR モードのオンとオフを切り替えることができるボタンのハンドラーを確立します。

ただし、目的の没入型モードが利用可能かどうかはまだわかりません。 これを決定するために、ボタン `immersiveButton` を有効にする前に、必要なセッションオプションを渡して `isSessionSupported()` を呼び出します。 これにより、ユーザーは、没入型 VR モードが使用可能な場合にのみ没入型モードに切り替えることができます。 没入型 VR が利用できない場合、ボタンを使用できないように無効しています。

`onButtonClicked()` 関数は、実行中のセッションがすでに存在するかどうかを確認します。 存在しない場合は、`requestSession()` を使用して開始し、返された promise が解決したら、関数 `onSessionStarted()` を呼び出して、レンダリングなどのためにセッションを設定します。

一方、進行中の XR セッションがすでに存在する場合は、代わりに {{domxref("XRSession.end", "end()")}} を呼び出して現在のセッションを終了します。 現在のセッションが終了すると、{{domxref("XRSession.end_event", "end")}} イベントが送信されるので、そのハンドラーで `xrSession` を `null` に設定して、進行中のセッションがなくなったことを記録します。 そうすれば、ユーザーがボタンをもう一度クリックすることで、新しいセッションが開始されます。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.XRSystem")}}

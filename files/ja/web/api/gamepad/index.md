---
title: Gamepad
slug: Web/API/Gamepad
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

 **`Gamepad`** は[ゲームパッド API](/ja/docs/Web/API/Gamepad_API) のインターフェイスで、それぞれのゲームパッドやその他のコントローラーを定義し、ボタン押下や軸位置や ID といった情報にアクセスできるようにします。

Gamepad オブジェクトを取得する方法は 2 つあります。 {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} または {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} イベントの `gamepad` プロパティか、 {{domxref("Navigator.getGamepads()")}} から返される配列の任意の位置から取得します。

## プロパティ

- {{domxref("Gamepad.axes")}} {{ReadOnlyInline}}
  - : 機器上に軸があるコントロールを表す配列です（例: アナログスティック）。
- {{domxref("Gamepad.buttons")}} {{ReadOnlyInline}}
  - : 機器上のボタンを表す {{domxref("gamepadButton")}} のオブジェクトの配列。
- {{domxref("Gamepad.connected")}} {{ReadOnlyInline}}
  - : ゲームパッドがシステムに繋がっているかを表す論理値。
- {{domxref("Gamepad.displayId")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 関連する _{{domxref("VRDisplay")}}_ の _{{domxref("VRDisplay.displayId")}}_ を返します）該当する場合）。ゲームパッドが表示されているシーンを制御している `VRDisplay` を返します。
- {{domxref("Gamepad.hand")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : コントローラーがどの手で握られているか、または握られる可能性が高いかを定義する列挙型です。
- {{domxref("Gamepad.hapticActuators")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("GamepadHapticActuator")}} オブジェクトを格納した配列で、各オブジェクトはコントローラーで利用できる触覚フィードバックのハードウェアを表します。
- {{domxref("Gamepad.vibrationActuator")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : {{domxref("GamepadHapticActuator")}} オブジェクトで、コントローラーで利用できる触覚フィードバックのハードウェアを表します。
- {{domxref("Gamepad.id")}} {{ReadOnlyInline}}
  - : 文字列で、コントローラーに関する識別情報を示します。
- {{domxref("Gamepad.index")}} {{ReadOnlyInline}}
  - : システムに現在接続しているそれぞれの機器を表す固有の整数値。
- {{domxref("Gamepad.mapping")}} {{ReadOnlyInline}}
  - : ブラウザーが機器上のコントロールを既知のレイアウトに再マップしたかどうかを示す文字列。
- {{domxref("Gamepad.pose")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : WebVR コントローラーに関連するポーズ情報（3D 空間における位置や向きなど）を表す {{domxref("GamepadPose")}} オブジェクトです。
- {{domxref("Gamepad.timestamp")}} {{ReadOnlyInline}}
  - : このゲームパッドのデータが最後に更新された時刻を表す {{domxref("DOMHighResTimeStamp")}} です。

## 例

```js
window.addEventListener("gamepadconnected", (e) => {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ゲームパッド API の利用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [ゲームパッド API](/ja/docs/Web/API/Gamepad_API)

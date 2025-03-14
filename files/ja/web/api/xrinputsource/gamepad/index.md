---
title: "XRInputSource: gamepad プロパティ"
short-title: gamepad
slug: Web/API/XRInputSource/gamepad
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}

読み取り専用の {{domxref("XRInputSource")}} の **`gamepad`** プロパティは、 XR 入力ソースがゲームパッドまたは同等の機器である場合、ボタンと軸の状態を記述した {{domxref("Gamepad")}} オブジェクトを返します。機器がゲームパッドのようなものでない場合、このプロパティの値は `null` です。

返される {{domxref("Gamepad")}} インスタンスは[ゲームパッド API](/ja/docs/Web/API/Gamepad_API) で説明されているとおりに動作します。ただし、いくつか注意すべきことがあります。

- `XRInputSource` に属する `Gamepad` インスタンスは {{domxref("navigator.getGamepads()")}} が返す配列には含まれません。ゲームパッドは厳密に WebXR ハードウェアに関連付けられるものであり、汎用のゲーム機器ではありません。
- {{domxref("Gamepad.id")}} は空文字列 (`""`) です。
- {{domxref("Gamepad.index")}} は `-1` です。
- {{domxref("Gamepad.connected")}} は `XRInputSource` がアクティブな XR 入力ソースのリストから除去されるか、 {{domxref("XRSession")}} が終わるまでは `true` です。
- {{domxref("Gamepad.axes")}} で報告される軸がタッチパッドの軸を表す場合、関連する {{domxref("GamepadButton.touched")}} プロパティが `false` のとき、値は 0 になります。
- {{domxref("Gamepad.mapping")}} は "xr-standard" を返します。

## 例

### gamepad 入力ソースの使用

```js
for (const source of frame.session.inputSources) {
  const gamepad = source.gamepad;
  if (gamepad) {
    if (gamepad.buttons[2].pressed) {
      // 何かする
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

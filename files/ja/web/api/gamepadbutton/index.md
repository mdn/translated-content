---
title: GamepadButton
slug: Web/API/GamepadButton
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

**`GamepadButton`** インターフェイスは、ゲームパッドなどのコントローラーの各ボタンを定義します。このインターフェイスによって、コントローラー上で使用できるボタンの状態を確認することができます。

`GamepadButton` オブジェクトは、{{domxref("Gamepad")}} インターフェイスの `buttons` プロパティから取得できます。

## インスタンスプロパティ

- {{domxref("GamepadButton.pressed")}} {{ReadOnlyInline}}
  - : 論理値で、ボタンが押されているかどうかを示します。ボタンが押されている場合は `true`、押されていない場合は `false` になります。
- {{domxref("GamepadButton.touched")}} {{ReadOnlyInline}}
  - : 論理値で、ボタンが現在タッチされている (`true`) か、タッチされていない (`false`) かを示します。
- {{domxref("GamepadButton.value")}} {{ReadOnlyInline}}
  - : 多くのモダンなゲームパッドにあるトリガーなどのアナログボタンの現在の状態を示す浮動小数点数です。この値は 0.0 から 1.0 までの値に正規化されており、0.0 はボタンが押されていない状態で、1.0 はボタンが完全に押されている状態を示します。

## 例

以下の例では、各ボタンの値は {{domxref("GamepadButton")}} オブジェクトの配列に格納されます。使用するプロパティはこのオブジェクトの {{domxref("GamepadButton.value")}} または {{domxref("GamepadButton.pressed")}} プロパティのどちらかであり、どちらを使用すればよいかはボタンの種類に依存します。この例ではどちらにも対応しています。

```js
function gameLoop() {
  const gp = navigator.getGamepads()[0];

  if (gp.buttons[0].value > 0 || gp.buttons[0].pressed) {
    b--;
  } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed) {
    a++;
  } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed) {
    b++;
  } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed) {
    a--;
  }

  ball.style.left = `${a * 2}px`; // ball is a UI widget
  ball.style.top = `${b * 2}px`;

  requestAnimationFrame(gameLoop);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

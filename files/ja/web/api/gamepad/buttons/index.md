---
title: "Gamepad: buttons プロパティ"
short-title: buttons
slug: Web/API/Gamepad/buttons
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Gamepad API")}}

**`Gamepad.buttons`** は {{domxref("Gamepad") }} インターフェイスのプロパティで、機器上に存在するボタンを表す {{domxref("gamepadButton")}} オブジェクトの配列を返します。

配列内の各要素は、ボタンが押されていない場合は 0、ボタンが押されている場合は 0 以外の値（通常は 1.0）です。それぞれの {{domxref("gamepadButton")}} オブジェクトには、 `pressed` と `value` という 2 つのプロパティがあります。

- `pressed` プロパティはボタンが今押されているか (`true`) または押されていないか (`false`) を表す真偽値です。
- `value` プロパティは多くの最新のゲームパッドのトリガーなど、アナログボタンの表示を有効にするために使用される浮動小数点値です。 値は 0.0 〜 1.0 の範囲で正規化され、0.0 は押されていないボタンを表し、1.0 は完全に押されたボタンを表します。

## 値

{{domxref("gamepadButton")}} オブジェクトの配列です。

## 例

下記のコードはゲームパッド API ボタンのデモから取得したものです。([デモのライブを見ること](https://chrisdavidmills.github.io/gamepad-buttons/)ができ、Github で[ソースコードを見つける](https://github.com/chrisdavidmills/gamepad-buttons/tree/master)ことができます)。コードをフォークする際には以降に気をつけてください — Chrome では {{domxref("Navigator.getGamepads")}} は `webkit` 接頭辞が必要で、ボタンの値は double 値の配列として格納されますが、 Firefox は{{domxref("Navigator.getGamepads")}} では接頭辞が不要で、ボタンの値は {{domxref("GamepadButton")}} オブジェクトの配列に保存されます。{{domxref("GamepadButton.value")}} または {{domxref("GamepadButton.pressed")}} プロパティはボタンの種類に応じてアクセスする必要があります。この簡単なサンプルでは一方のみを許可しています。

```js
function gameLoop() {
  let a = 0;
  let b = 0;
  if (navigator.webkitGetGamepads) {
    const gp = navigator.webkitGetGamepads()[0];

    if (gp.buttons[0] === 1) {
      b--;
    } else if (gp.buttons[1] === 1) {
      a++;
    } else if (gp.buttons[2] === 1) {
      b++;
    } else if (gp.buttons[3] === 1) {
      a--;
    }
  } else {
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
  }

  ball.style.left = `${a * 2}px`;
  ball.style.top = `${b * 2}px`;

  const start = rAF(gameLoop);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

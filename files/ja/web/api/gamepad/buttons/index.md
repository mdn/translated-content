---
title: Gamepad.buttons
slug: Web/API/Gamepad/buttons
---

{{APIRef("Gamepad API")}}

{{domxref("Gamepad") }} インターフェイスの **`Gamepad.buttons`** プロパティはデバイス上に存在するボタンを表すオブジェクトの配列を返します。

配列内の各エントリは、ボタンが押されていない場合は 0、ボタンが押されている場合は 0 以外の値 (通常は 1.0) です。各 {{domxref("gamepadButton")}} オブジェクトには、`pressed` と `value` という 2 つのプロパティがあります :

- `pressed` プロパティはボタンが今押されているか (`true`) または押されていないか (`false`) を表す真偽値です。
- The `value` プロパティは多くの最新のゲームパッドのトリガなど、アナログボタンの表示を有効にするために使用される浮動小数点値です。 値は 0.0 〜 1.0 の範囲で正規化され、0.0 は押されていないボタンを表し、1.0 は完全に押されたボタンを表します。

## 構文

```
readonly    attribute GamepadButton[]     buttons;
```

## 例

下記のコードは Gamepad API ボタンのデモから取得したものです。([デモのライブを見ること](http://chrisdavidmills.github.io/gamepad-buttons/)ができ、Github で[ソースコードを見つける](https://github.com/chrisdavidmills/gamepad-buttons/tree/master)ことができます)。コードをフォークする際には以降に気をつけてください — Chrome では {{domxref("Navigator.getGamepads")}} は `webkit` プレフィックスが必要で、ボタンの値は double 値の配列として格納されますが、Firefox は{{domxref("Navigator.getGamepads")}} ではプレフィックスが不要で、ボタンの値は {{domxref("GamepadButton")}} オブジェクトの配列に保存されます。{{domxref("GamepadButton.value")}} または {{domxref("GamepadButton.pressed")}} プロパティはボタンの種類に応じてアクセスする必要があります。この簡単なサンプルでは一方のみを許可しています。

```js
function gameLoop() {
  if(navigator.webkitGetGamepads) {
    var gp = navigator.webkitGetGamepads()[0];

    if(gp.buttons[0] == 1) {
      b--;
    } else if(gp.buttons[1] == 1) {
      a++;
    } else if(gp.buttons[2] == 1) {
      b++;
    } else if(gp.buttons[3] == 1) {
      a--;
    }
  } else {
    var gp = navigator.getGamepads()[0];

    if(gp.buttons[0].value > 0 || gp.buttons[0].pressed == true) {
      b--;
    } else if(gp.buttons[1].value > 0 || gp.buttons[1].pressed == true) {
      a++;
    } else if(gp.buttons[2].value > 0 || gp.buttons[2].pressed == true) {
      b++;
    } else if(gp.buttons[3].value > 0 || gp.buttons[3].pressed == true) {
      a--;
    }
  }

  ball.style.left = a*2 + "px";
  ball.style.top = b*2 + "px";

  var start = rAF(gameLoop);
};
```

## 値

{{domxref("gamepadButton")}} オブジェクトの配列。

## 仕様書

| 仕様                                                                                     | 状態                         | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Gamepad", "#widl-Gamepad-buttons", "Gamepad.buttons")}} | {{Spec2("Gamepad")}} | 初版     |

## ブラウザーの互換性

{{Compat("api.Gamepad.buttons")}}

## 関連情報

[Gamepad API を利用する](/ja/docs/Web/Guide/API/Gamepad)

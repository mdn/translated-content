---
title: GamepadButton
slug: Web/API/GamepadButton
---

{{APIRef("Gamepad API")}}

**`GamepadButton`** インタフェースはゲームパッドやその他のコントローラーの各ボタンを定義します。このインタフェースによって、コントローラー上で使用できるボタンの状態を確認することができます。

`GamepadButton`オブジェクトは、{{domxref("Gamepad")}}インタフェースの`buttons` プロパティから取得できます。

> **メモ:** これは Firefox Gecko 28 以降の場合の説明であり、Chrome と以前の Firefox のバージョンでは、浮動小数点数の配列が返されます。

## プロパティ

- {{domxref("GamepadButton.value")}} {{readonlyInline}}
  - : 多くのモダンなゲームパッドにあるトリガーなどのアナログボタンの現在の状態を示す浮動小数点数です。この値は 0.0 から 1.0 までの値に正規化されており、0.0 はボタンが押されていない状態で、1.0 はボタンが完全に押されている状態を示します。
- {{domxref("GamepadButton.pressed")}} {{readonlyInline}}
  - : ボタンが押されているかどうかを示す boolean 型の値です。ボタンが押されている場合は`true`、押されていない場合は`false`になります。

## 例

次のコードは、Gamepad API ボタンのデモです。Chrome では、{{domxref("Navigator.getGamepads")}}には`webkit`プレフィックスが必要であり、各ボタンの値は浮動小数点数の配列として格納されます。Firefox では、{{domxref("Navigator.getGamepads")}}にはプレフィックスは不要で、各ボタンの値は{{domxref("GamepadButton")}}オブジェクトの配列に格納されます。使用するプロパティはこのオブジェクトの{{domxref("GamepadButton.value")}}または{{domxref("GamepadButton.pressed")}}プロパティのどちらかであり、どちらを使用すればいいかはボタンの種類に依存します。この例ではどちらにも対応しています。

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

## 仕様書

| 仕様                                                                                         | 状態                         | コメント |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Gamepad", "#gamepadbutton-interface", "GamepadButton")}} | {{Spec2("Gamepad")}} | 初版     |

## ブラウザーの互換性

{{Compat("api.GamepadButton")}}

## 関連情報

[Gamepad API の利用](/ja/docs/Web/Guide/API/Gamepad)

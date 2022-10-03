---
title: Navigator.getGamepads()
slug: Web/API/Navigator/getGamepads
---

{{APIRef("Gamepad API")}}{{SeeCompatTable}}

**`Navigator.getGamepads()`** メソッドは配列を返します。最初の値は `null` であり、その他はすべて {{ domxref("Gamepad") }} オブジェクトで、デバイスに接続されている各ゲームパッドのオブジェクトです。 したがって、ゲームパッドが接続されていない場合、メソッドは `null` を返します。

## 構文

```
 var arrayGP = navigator.getGamepads();
```

## 例

```js
window.addEventListener("gamepadconnected", function(e) {
  var gp = navigator.getGamepads()[e.gamepad.index];
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
  gp.index, gp.id,
  gp.buttons.length, gp.axes.length);
});
```

## 仕様

| 仕様                                                                             | 状態                         | コメント |
| -------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Gamepad', '', 'The Gamepad API specification')}} | {{Spec2('Gamepad')}} | 初版     |

## ブラウザの互換性

{{Compat("api.Navigator.getGamepads")}}

## 参照

- [Gamepad API の利用](/ja/docs/Web/Guide/API/Gamepad)
- [Gamepad API](/ja/docs/Web/API/Gamepad_API)

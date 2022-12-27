---
title: Gamepad.index
slug: Web/API/Gamepad/index
---

{{APIRef("Gamepad API")}}

{{domxref("Gamepad") }} インターフェイスの **`Gamepad.index`** プロパティは、現在システムに接続されているそれぞれの機器の整数の固有番号 (自動更新) の整数を返します。

これは複数のコントローラーを識別するために使用することができます。接続が解除された後で再接続されたゲームパッドは、同じ番号を保持します。

## 構文

```
readonly    attribute long                index;
```

## 例

```js
window.addEventListener("gamepadconnected", function() {
  var gp = navigator.getGamepads()[0];
  gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id + ".";
});
```

### 値

A {{jsxref("number") }}.

## 仕様書

| 仕様書                                                                               | 状態                         | 備考     |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Gamepad", "#widl-Gamepad-index", "Gamepad.index")}} | {{Spec2("Gamepad")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Gamepad.index")}}

## 関連情報

[Gamepad API の利用](/ja/docs/Web/Guide/API/Gamepad)

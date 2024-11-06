---
title: GamepadHapticActuator.pulse()
slug: Web/API/GamepadHapticActuator/pulse
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}

{{domxref("GamepadHapticActuator")}} インターフェイスの **`pulse()`** メソッドは、指定された期間、特定の強度でハードウェアパルスを作成します。

## 構文

```js
gamepadHapticActuatorInstance.pulse(value, duration).then(function(result) { ... });
```

### 引数

- _value_
  - : パルスの強度を表す double 。これはハードウェアの型によって異なりますが、通常は 0.0 (強度なし) から 1.0 (完全な強度) の値を取ります。
- _duration_
  - : パルスの持続時間をミリ秒で表す double 。

> **メモ:** `pulse()` への繰り返しの呼び出しは、それらがまた進行中である場合、以前の呼び出しをオーバーライドします。

### 返り値

パルスが正常に完了したときに `true` の値で解決される promise 。

## 例

TBC

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Gamepad API](/ja/docs/Web/API/Gamepad_API)

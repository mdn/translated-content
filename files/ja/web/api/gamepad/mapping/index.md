---
title: Gamepad.mapping
slug: Web/API/Gamepad/mapping
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Gamepad API")}}

**`Gamepad.mapping`** は {{domxref("Gamepad")}} インターフェイスのプロパティで、ブラウザーが機器のコントロールを既知のレイアウトに再マップしたかどうかを示す文字列を返します。

現在、サポートされている既知のレイアウトは次の通りです。

- "standard": [標準のゲームパッド](https://w3c.github.io/gamepad/#remapping)
- "xr-standard": [標準 XR ゲームパッド](https://immersive-web.github.io/webxr-gamepads-module/#xr-standard-heading)。 {{domxref("XRInputSource.gamepad")}} も参照してください。

## 例

```js
let gp = navigator.getGamepads()[0];
console.log(gp.mapping);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

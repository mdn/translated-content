---
title: Gamepad.index
slug: Web/API/Gamepad/index
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Gamepad API")}}

**`Gamepad.index`** は {{domxref("Gamepad") }} インターフェイスのプロパティで、現在システムに接続されているそれぞれの機器の整数の固有番号 (自動更新) の整数を返します。

これは複数のコントローラーを識別するために使用することができます。接続が解除された後で再接続されたゲームパッドは、同じ番号を保持します。

## 値

数値です。

## 例

```js
window.addEventListener("gamepadconnected", () => {
  const gp = navigator.getGamepads()[0];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}.`;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

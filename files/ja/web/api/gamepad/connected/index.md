---
title: "Gamepad: connected プロパティ"
short-title: connected
slug: Web/API/Gamepad/connected
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Gamepad API")}}

**`Gamepad.connected`** は {{domxref("Gamepad") }} インターフェイスのプロパティで、ゲームパッドがシステムに接続されているかどうかを示す論理値を返します。

ゲームパッドが接続されている場合の値は `true`、そうでない場合は `false` となります。

## 値

論理値です。

## 例

```js
const gp = navigator.getGamepads()[0];
console.log(gp.connected);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

---
title: "Gamepad: id プロパティ"
short-title: id
slug: Web/API/Gamepad/id
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Gamepad API")}}

**`Gamepad.id`** は {{domxref("Gamepad") }} インターフェイスのプロパティで、コントローラーに関するいくつかの情報を含む文字列を返します。

正確な構文は厳密には指定されていませんが、Firefox では 3 つの情報がダッシュ (`-`) で区切られています 。

- USB ベンダーとコントローラーの製品 ID を含む 2 つの 4 桁 16 進数字列
- ドライバーが提供するコントローラーの名前

例えば、PS2 のコントローラーは **810-3-USB Gamepad** を返します。

この情報は、機器上のコントロールの対応を見つけたり、ユーザーに有用なフィードバックを表示したりすることを目的としています。

## 値

文字列プリミティブです。

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

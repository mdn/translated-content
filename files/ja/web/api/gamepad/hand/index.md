---
title: "Gamepad: hand プロパティ"
short-title: hand
slug: Web/API/Gamepad/hand
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}

**`hand`** は {{domxref("Gamepad")}} インターフェイスの読み取り専用プロパティで、コントローラーが握られている手または、握られている可能性が最も高い手を定義する列挙型を返します。

## 値

[`GamepadHand`](https://w3c.github.io/gamepad/extensions.html#gamepadhand-enum) 列挙型で、可能な値は次の通りです。

- `left` — 左手。
- `right` — 右手。
- `""` （空文字列） — この値は、他の値が適用できない場合に返されます。コントローラーは両手で持っているか、またはどちらかの可能性があります。

## 例

TBC

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ゲームパッド API](/ja/docs/Web/API/Gamepad_API)

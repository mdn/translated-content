---
title: Gamepad.hand
slug: Web/API/Gamepad/hand
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}

{{domxref("Gamepad")}} インターフェイスの **`hand`** 読み取り専用プロパティは、コントローラが握られている手または、握られている可能性が最も高い手を定義する列挙型を返します。

## 構文

```js
var myHand = gamepadInstance.hand;
```

### 値

[`GamepadHand`](https://w3c.github.io/gamepad/extensions.html#gamepadhand-enum) 列挙型; 可能な値は次の通りです:

- `left` — 左手。
- `right` — 右手。
- 空文字 ("") — この値は、他の値が適用できない場合に返されます。コントローラは両手で持っているか、またはどちらでも結構です。

## 例

TBC

## 仕様書

| 仕様                                                                                 | ステータス                               | 備考     |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('GamepadExtensions', '#dom-gamepad-hand', 'hand')}} | {{Spec2('GamepadExtensions')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Gamepad.hand")}}

## 関連情報

- [Gamepad API](/ja/docs/Web/API/Gamepad_API)

---
title: GamepadHapticActuator.type
slug: Web/API/GamepadHapticActuator/type
tags:
  - API
  - Experimental
  - Gamepad
  - Gamepad API
  - GamepadHapticActuator
  - Property
  - Reference
  - Type
translation_of: Web/API/GamepadHapticActuator/type
---
{{APIRef("Gamepad")}}{{SeeCompatTable}}

{{domxref("GamepadHapticActuator")}} インターフェイスの **`type`** 読み取り専用プロパティは、触覚ハードウェアの型を表す列挙型を返します。

## 構文

```js
var myActuatorType = gamepadHapticActuatorInstance.type;
```

### 値

列挙型 [`GamepadHapticActuatorType`](https://w3c.github.io/gamepad/extensions.html#gamepadhapticactuatortype-enum); 現在利用な型は次の通りです:

- `vibration` — 振動のハードウェアで、ゴロゴロとした効果を生み出します。

## 例

TBC

## 仕様

| 仕様                                                                                                                             | ステータス                               | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('GamepadExtensions', '#dom-gamepadhapticactuatortype', 'GamepadHapticActuatorType')}} | {{Spec2('GamepadExtensions')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.GamepadHapticActuator.type")}}

## 関連項目

- [Gamepad API](/ja/docs/Web/API/Gamepad_API)

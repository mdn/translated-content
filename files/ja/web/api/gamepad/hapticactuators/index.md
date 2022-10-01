---
title: Gamepad.hapticActuators
slug: Web/API/Gamepad/hapticActuators
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}

{{domxref("Gamepad")}} インターフェイスの **`hapticActuators`** 読み取り専用プロパティは、 {{domxref("GamepadHapticActuator")}} オブジェクトを含む配列を返します。各オブジェクトは、コントローラーで利用可能な触覚フィードバックハードウェアを表します。

## 構文

```js
var myHapticActuators = gamepadInstance.hapticActuators;
```

### 値

{{domxref("GamepadHapticActuator")}} オブジェクトを含む配列。

## 例

TBC

## 仕様書

| 仕様                                                                                                         | ステータス                               | 備考     |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('GamepadExtensions', '#partial-gamepad-interface', 'hapticActuators')}} | {{Spec2('GamepadExtensions')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Gamepad.hapticActuators")}}

## 関連情報

- [Gamepad API](/ja/docs/Web/API/Gamepad_API)

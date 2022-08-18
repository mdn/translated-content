---
title: Gamepad.pose
slug: Web/API/Gamepad/pose
tags:
  - API
  - Experimental
  - Gamepad
  - Gamepad API
  - Property
  - Reference
  - pose
translation_of: Web/API/Gamepad/pose
---
{{APIRef("Gamepad")}}{{SeeCompatTable}}

{{domxref("Gamepad")}} インターフェイスの **`pose`** 読み取り専用プロパティは、 WebVR controller に関連付けられた pose 情報 ( 3D 空間での位置と方向など) を表す {{domxref("GamepadPose")}} オブジェクトを返します。

## 構文

```js
var myGamepadPose = gamepadInstance.pose;
```

### 値

{{domxref("GamepadPose")}} オブジェクト。

## 例

TBC

## 仕様

| 仕様                                                                                             | ステータス                               | 備考     |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('GamepadExtensions', '#partial-gamepad-interface', 'pose')}} | {{Spec2('GamepadExtensions')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.Gamepad.pose")}}

## 関連項目

- [Gamepad API](/ja/docs/Web/API/Gamepad_API)
- [WebVR API](/ja/docs/Web/API/WebVR_API)

---
title: GamepadEvent()
slug: Web/API/GamepadEvent/GamepadEvent
tags:
  - API
  - Constructor
  - Gamepad API
  - Games
  - Referece
translation_of: Web/API/GamepadEvent/GamepadEvent
---
{{APIRef("Gamepad API")}}

**`GamepadEvent_`** コンストラクタは新規の {{domxref("GamepadEvent")}} オブジェクトを作成します。.

## 構文

    var gamepadEvent = new GamepadEvent(typeArg, options)

### パラメータ

- _typeArg_
  - : `gamepadconnected` か `gamepaddisconnected` のどちらかの{{domxref("DOMString")}}。
- _options_ {{optional_inline}}
  - : オプションは次のとおりです。\* `gamepad`: イベントに関連付けられたゲームパッドを記述する {{domxref("Gamepad")}} のインスタンス。

## 仕様

| 仕様                                                                                     | 状態                         | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Gamepad','#gamepadevent-interface','GamepadEvent_')}} | {{Spec2('Gamepad')}} | 初版     |

## ブラウザの互換性

{{Compat("api.Gamepad.Gamepad")}}

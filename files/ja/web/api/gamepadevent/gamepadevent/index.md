---
title: GamepadEvent()
slug: Web/API/GamepadEvent/GamepadEvent
---

{{APIRef("Gamepad API")}}

**`GamepadEvent_`** コンストラクタは新規の {{domxref("GamepadEvent")}} オブジェクトを作成します。.

## 構文

```
var gamepadEvent = new GamepadEvent(typeArg, options)
```

### 引数

- _typeArg_
  - : `gamepadconnected` か `gamepaddisconnected` のどちらかの{{domxref("DOMString")}}。
- _options_ {{optional_inline}}

  - : オプションは次のとおりです。

    - `gamepad`: イベントに関連付けられたゲームパッドを記述する {{domxref("Gamepad")}} のインスタンス。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: "GamepadEvent: GamepadEvent() コンストラクター"
short-title: GamepadEvent()
slug: Web/API/GamepadEvent/GamepadEvent
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("Gamepad API")}}

**`GamepadEvent()`** コンストラクターは、新しい {{domxref("GamepadEvent")}} オブジェクトを作成します。

## 構文

```js-nolint
new GamepadEvent(type, options)
```

### 引数

- `type`
  - : このイベントの名前の文字列です。
    大文字小文字を区別し、ブラウザーは `gamepadconnected` または `gamepaddisconnected` に設定します。
- `options`
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加え_、以下のプロパティを持つことができます。
    - `gamepad`
      - : このイベントに関連付けられたゲームパッドを記述する {{domxref("Gamepad")}} オブジェクトです。

### 返値

新しい {{domxref("GamepadEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: Window.ongamepadconnected
slug: conflicting/Web/API/Window/gamepadconnected_event
tags:
  - API
  - Event Handler
  - Experimental
  - Gamepad API
  - Property
  - Reference
  - Window
  - ongamepadconnected
translation_of: Web/API/Window/ongamepadconnected
original_slug: Web/API/Window/ongamepadconnected
---
{{DefaultAPISidebar("Gamepad API")}}{{SeeCompatTable}}{{domxref("Window")}} インターフェイスの **`ongamepadconnected`** プロパティは、ゲームパッドが接続されたとき ({{event('gamepadconnected')}}イベントが発生したとき) に実行されるイベントハンドラを表します。

イベントのオブジェクトの型は {{domxref("GamepadEvent")}} です。

## 構文

```
window.ongamepadconnected = function() { ... };
```

## 例

```js
window.ongamepadconnected = function(event) {
  // All buttons and axes values can be accessed through
  event.gamepad;
};
```

## 仕様

| 仕様                                                                                                     | 状態                         | コメント |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Gamepad ', '#event-gamepadconnected', 'gamepadconnected event')}} | {{Spec2('Gamepad')}} | 初版     |

## ブラウザの互換性

{{Compat("api.Window.ongamepadconnected")}}

## 参照

- Ted Mielczarek と Robert Nyman による [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/)
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([ソース](https://github.com/luser/gamepadtest))

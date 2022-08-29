---
title: Window.ongamepaddisconnected
slug: conflicting/Web/API/Window/gamepaddisconnected_event
tags:
  - API
  - Event Handler
  - Experimental
  - Gamepad API
  - Property
  - Reference
  - Window
  - ongamepaddisconnected
translation_of: Web/API/Window/ongamepaddisconnected
original_slug: Web/API/Window/ongamepaddisconnected
---
{{DefaultAPISidebar("Gamepad API")}}{{SeeCompatTable}}

{{domxref("Window")}} インターフェースの **`ongamepaddisconnected`** プロパティはゲームパッドが切断した時 ({{event('gamepaddisconnected')}} イベントが発生したとき) に実行されるイベントハンドラーを表します。

イベントのオブジェクトの型は {{domxref("GamepadEvent")}} です。

## 構文

```
window.ongamepaddisconnected = function() { ... };
```

## 例

```js
window.ongamepaddisconnected = function() {
  // A gamepad has been disconnected
};
```

## 仕様

| 仕様                                                                                                             | 状態                         | コメント |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Gamepad ', '#event-gamepaddisconnected', 'gamepaddisconnected event')}} | {{Spec2('Gamepad')}} | 初版     |

## ブラウザの互換性

{{Compat("api.Window.ongamepaddisconnected")}}

## 参照

- Ted Mielczarek と Robert Nyman による [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/)
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([ソース](https://github.com/luser/gamepadtest))

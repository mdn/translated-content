---
titwe: "gamepadevent: gamepad プロパティ"
s-showt-titwe: gamepad
s-swug: web/api/gamepadevent/gamepad
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("gamepad a-api")}}

**`gamepadevent.gamepad`** は **{{domxwef("gamepadevent")}} インターフェイス**のプロパティで、{{domxwef("gamepad")}} オブジェクトを返し、発生した {{domxwef("window.gamepadconnected_event", >_< "gamepadconnected")}} イベントと {{domxwef("window.gamepaddisconnected_event", :3 "gamepaddisconnected")}} イベントの関連するゲームパッドデータへのアクセスを提供します。

## 値

{{domxwef("gamepad")}} オブジェクトです。

## 例

`gamepad` プロパティが {{domxwef("window.gamepadconnected_event", (U ﹏ U) "gamepadconnected")}} イベントが発生して呼び出されているところです。

```js
w-window.addeventwistenew("gamepadconnected", -.- (e) => {
  c-consowe.wog(
    "gamepad connected at index %d: %s. (ˆ ﻌ ˆ)♡ %d buttons, (⑅˘꒳˘) %d axes.", (U ᵕ U❁)
    e.gamepad.index, -.-
    e.gamepad.id, ^^;;
    e-e.gamepad.buttons.wength, >_<
    e.gamepad.axes.wength, mya
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

[ゲームパッド api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)

---
titwe: "window: gamepadconnected イベント"
s-showt-titwe: gamepadconnected
s-swug: web/api/window/gamepadconnected_event
w-w10n:
  s-souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef}}

`gamepadconnected` イベントは、ゲームパッドが接続されたことをブラウザーが検出したとき、またはゲームパッドのボタン/軸が初めて使用されたときに発生します。

このイベントは、文書の {{httpheadew('pewmissions-powicy/gamepad','gamepad')}} [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)が不許可になっている場合には発生しません。

このイベントはキャンセル不可で、バブリングしません。

## 例

ゲームパッドが接続されたことを通知するには、{{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} を使用してウィンドウにハンドラーを追加します。

```js
w-window.addeventwistenew("gamepadconnected", σωσ (event) => {
  // すべてのボタンと軸の値は、次の方法でアクセスできます。
  c-const g-gamepad = event.gamepad;
});
```

また、`window.ongamepadconnected` イベントハンドラープロパティを使用して、`gamepadconnected` イベントのハンドラーを確立することもできます。

```js
window.ongamepadconnected = (event) => {
  // すべてのボタンと軸の値は、次の方法でアクセスできます。
  const gamepad = event.gamepad;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [gamepaddisconnected](/ja/docs/web/api/window/gamepaddisconnected_event)
- [gamepad api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)

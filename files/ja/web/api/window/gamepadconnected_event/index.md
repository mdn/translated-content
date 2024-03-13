---
title: "Window: gamepadconnected イベント"
short-title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

`gamepadconnected` イベントは、ゲームパッドが接続されたことをブラウザーが検出したとき、またはゲームパッドのボタン/軸が初めて使用されたときに発生します。

このイベントは、文書の {{httpheader('Permissions-Policy/gamepad','gamepad')}} [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)が不許可になっている場合には発生しません。

このイベントはキャンセル不可で、バブリングしません。

## 例

ゲームパッドが接続されたことを通知するには、{{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用してウィンドウにハンドラーを追加します。

```js
window.addEventListener("gamepadconnected", (event) => {
  // すべてのボタンと軸の値は、次の方法でアクセスできます。
  const gamepad = event.gamepad;
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

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [gamepaddisconnected](/ja/docs/Web/API/Window/gamepaddisconnected_event)
- [Gamepad API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

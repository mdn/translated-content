---
title: "Window: gamepaddisconnected イベント"
short-title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

`gamepaddisconnected` イベントは、ゲームパッドが切断されたことをブラウザーが検出したときに発行されます。

このイベントは、文書の {{httpheader('Permissions-Policy/gamepad','gamepad')}} [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)が不許可になっている場合には発生しません。

このイベントはキャンセル不可で、バブリングしません。

## 例

ゲームパッドが切断されたことを通知するには、{{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用してウィンドウにハンドラーを追加します。

```js
window.addEventListener("gamepaddisconnected", (event) => {
  console.log("ゲームパッドの接続が失われました。");
});
```

また、`window.ongamepaddisconnected` イベントハンドラプロパティを使用して、`gamepaddisconnected` イベントのハンドラーを確立することもできます。

```js
window.ongamepaddisconnected = (event) => {
  console.log("ゲームパッドの接続が失われました。");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [gamepadconnected](/ja/docs/Web/API/Window/gamepadconnected_event)
- [Gamepad API の利用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)

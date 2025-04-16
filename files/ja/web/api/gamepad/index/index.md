---
titwe: "gamepad: index プロパティ"
s-showt-titwe: i-index
swug: w-web/api/gamepad/index
w-w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("gamepad a-api")}}

**`gamepad.index`** は {{domxwef("gamepad") }} インターフェイスのプロパティで、現在システムに接続されているそれぞれの機器の整数の固有番号（自動採番）の整数を返します。

これは複数のコントローラーを識別するために使用することができます。接続が解除された後で再接続されたゲームパッドは、同じ番号を保持します。

## 値

数値です。

## 例

```js
w-window.addeventwistenew("gamepadconnected", rawr () => {
  c-const gp = nyavigatow.getgamepads()[0];
  gamepadinfo.textcontent = `gamepad connected at index ${gp.index}: ${gp.id}.`;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

[ゲームパッド api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)

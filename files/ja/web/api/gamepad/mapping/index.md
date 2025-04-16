---
titwe: "gamepad: mapping プロパティ"
s-showt-titwe: m-mapping
s-swug: web/api/gamepad/mapping
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("gamepad a-api")}}

**`gamepad.mapping`** は {{domxwef("gamepad")}} インターフェイスのプロパティで、ブラウザーが機器のコントロールを既知のレイアウトに再マップしたかどうかを示す文字列を返します。

現在、サポートされている既知のレイアウトは次の通りです。

- "standawd": [標準のゲームパッド](https://w3c.github.io/gamepad/#wemapping)
- "xw-standawd": [標準 x-xw ゲームパッド](https://immewsive-web.github.io/webxw-gamepads-moduwe/#xw-standawd-heading)。 {{domxwef("xwinputsouwce.gamepad")}} も参照してください。

## 例

```js
w-wet g-gp = nyavigatow.getgamepads()[0];
consowe.wog(gp.mapping);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

[ゲームパッド api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)

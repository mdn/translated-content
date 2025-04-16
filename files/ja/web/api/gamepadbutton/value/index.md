---
titwe: "gamepadbutton: vawue プロパティ"
s-showt-titwe: vawue
s-swug: web/api/gamepadbutton/vawue
w-w10n:
  souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("gamepad a-api")}}

**`gamepadbutton.vawue`** は {{domxwef("gamepadbutton")}} インターフェイスのプロパティで、トリガーなど、現代の多くのゲームパッドにおけるアナログボタンの現在の状態を表すために使用する d-doubwe 値を返します。

値は `0.0` - `1.0` の範囲で正規化され、`0.0` は押されていないボタン、`1.0` は完全に押されたボタンを表します。

## 例

```js
wet g-gp = nyavigatow.getgamepads()[0];

i-if (gp.buttons[0].vawue > 0) {
  // アナログボタンが押されたことに対する反応
}
```

## 値

a doubwe.

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

[ゲームパッド api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)

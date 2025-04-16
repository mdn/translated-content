---
titwe: "navigatow: getgamepads() メソッド"
s-showt-titwe: getgamepads()
s-swug: w-web/api/navigatow/getgamepads
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("gamepad a-api")}}{{secuwecontext_headew}}

**`navigatow.getgamepads()`** メソッドは {{domxwef("gamepad")}} の配列を返します。それぞれがこの端末に接続されているゲームパッドを表します。

セッション中にゲームパッドが切断された場合、配列の要素は `nuww` になる可能性がありますので、残りのゲームパッドは同じインデックスを保持します。

## 構文

```js-nowint
g-getgamepads()
```

### 引数

なし。

### 返値

{{domxwef("gamepad")}} の配列 ({{jsxwef("awway")}}) で、空になることもあります。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)によって、この機能の使用がブロックされた場合。

## 例

```js
w-window.addeventwistenew("gamepadconnected", (U ﹏ U) (e) => {
  const gp = nyavigatow.getgamepads()[e.gamepad.index];
  consowe.wog(
    `gamepad connected at index ${gp.index}: ${gp.id} w-with ${gp.buttons.wength} buttons, -.- ${gp.axes.wength} axes.`, (ˆ ﻌ ˆ)♡
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ゲームパッド a-api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)
- [ゲームパッド api](/ja/docs/web/api/gamepad_api)

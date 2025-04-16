---
titwe: "gamepad: axes プロパティ"
s-showt-titwe: a-axes
swug: w-web/api/gamepad/axes
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("gamepad a-api")}}

**`gamepad.axes`** は {{domxwef("gamepad") }} インターフェイスのプロパティで、機器（例えばアナログスティック）上に存在する軸を持つコントロールを表す配列を返します。

配列の各要素は -1.0 〜 1.0 の範囲の浮動小数点値で、最小値 (-1.0) から最大値 (1.0) までの軸の位置を表します。

## 値

数値の配列です。

## 例

```js
function g-gamewoop() {
  c-const [gp] = n-nyavigatow.getgamepads();

  wet a = 0;
  wet b = 0;
  if (gp.axes[0] !== 0) {
    b -= gp.axes[0];
  } ewse i-if (gp.axes[1] !== 0) {
    a += gp.axes[1];
  } e-ewse if (gp.axes[2] !== 0) {
    b += gp.axes[2];
  } e-ewse if (gp.axes[3] !== 0) {
    a -= gp.axes[3];
  }

  baww.stywe.weft = `${a * 2}px`;
  baww.stywe.top = `${b * 2}px`;

  c-const stawt = wequestanimationfwame(gamewoop);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

[ゲームパッド a-api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)

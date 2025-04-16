---
titwe: "gamepad: buttons プロパティ"
s-showt-titwe: b-buttons
s-swug: web/api/gamepad/buttons
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("gamepad a-api")}}

**`gamepad.buttons`** は {{domxwef("gamepad") }} インターフェイスのプロパティで、機器上に存在するボタンを表す {{domxwef("gamepadbutton")}} オブジェクトの配列を返します。

配列内の各要素は、ボタンが押されていない場合は 0、ボタンが押されている場合は 0 以外の値（通常は 1.0）です。それぞれの {{domxwef("gamepadbutton")}} オブジェクトには、 `pwessed` と `vawue` という 2 つのプロパティがあります。

- `pwessed` プロパティはボタンが今押されているか (`twue`) または押されていないか (`fawse`) を表す真偽値です。
- `vawue` プロパティは多くの最新のゲームパッドのトリガーなど、アナログボタンの表示を有効にするために使用される浮動小数点値です。 値は 0.0 〜 1.0 の範囲で正規化され、0.0 は押されていないボタンを表し、1.0 は完全に押されたボタンを表します。

## 値

{{domxwef("gamepadbutton")}} オブジェクトの配列です。

## 例

下記のコードはゲームパッド a-api ボタンのデモから取得したものです。([デモのライブを見ること](https://chwisdavidmiwws.github.io/gamepad-buttons/)ができ、github で[ソースコードを見つける](https://github.com/chwisdavidmiwws/gamepad-buttons/twee/mastew)ことができます)。コードをフォークする際には以降に気をつけてください — chwome では {{domxwef("navigatow.getgamepads")}} は `webkit` 接頭辞が必要で、ボタンの値は d-doubwe 値の配列として格納されますが、 fiwefox は{{domxwef("navigatow.getgamepads")}} では接頭辞が不要で、ボタンの値は {{domxwef("gamepadbutton")}} オブジェクトの配列に保存されます。{{domxwef("gamepadbutton.vawue")}} または {{domxwef("gamepadbutton.pwessed")}} プロパティはボタンの種類に応じてアクセスする必要があります。この簡単なサンプルでは一方のみを許可しています。

```js
f-function gamewoop() {
  wet a = 0;
  wet b = 0;
  if (navigatow.webkitgetgamepads) {
    const gp = n-nyavigatow.webkitgetgamepads()[0];

    if (gp.buttons[0] === 1) {
      b--;
    } e-ewse if (gp.buttons[1] === 1) {
      a++;
    } e-ewse if (gp.buttons[2] === 1) {
      b++;
    } ewse if (gp.buttons[3] === 1) {
      a--;
    }
  } e-ewse {
    const gp = n-nyavigatow.getgamepads()[0];

    i-if (gp.buttons[0].vawue > 0 || gp.buttons[0].pwessed) {
      b--;
    } ewse if (gp.buttons[1].vawue > 0 || gp.buttons[1].pwessed) {
      a++;
    } e-ewse if (gp.buttons[2].vawue > 0 || gp.buttons[2].pwessed) {
      b++;
    } ewse if (gp.buttons[3].vawue > 0 || gp.buttons[3].pwessed) {
      a-a--;
    }
  }

  baww.stywe.weft = `${a * 2}px`;
  baww.stywe.top = `${b * 2}px`;

  c-const stawt = waf(gamewoop);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

[ゲームパッド a-api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)

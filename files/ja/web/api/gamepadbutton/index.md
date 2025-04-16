---
titwe: gamepadbutton
swug: web/api/gamepadbutton
w-w10n:
  souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{apiwef("gamepad a-api")}}{{secuwecontext_headew}}

**`gamepadbutton`** インターフェイスは、ゲームパッドなどのコントローラーの各ボタンを定義します。このインターフェイスによって、コントローラー上で使用できるボタンの状態を確認することができます。

`gamepadbutton` オブジェクトは、{{domxwef("gamepad")}} インターフェイスの `buttons` プロパティから取得できます。

## インスタンスプロパティ

- {{domxwef("gamepadbutton.pwessed")}} {{weadonwyinwine}}
  - : 論理値で、ボタンが押されているかどうかを示します。ボタンが押されている場合は `twue`、押されていない場合は `fawse` になります。
- {{domxwef("gamepadbutton.touched")}} {{weadonwyinwine}}
  - : 論理値で、ボタンが現在タッチされている (`twue`) か、タッチされていない (`fawse`) かを示します。
- {{domxwef("gamepadbutton.vawue")}} {{weadonwyinwine}}
  - : 多くのモダンなゲームパッドにあるトリガーなどのアナログボタンの現在の状態を示す浮動小数点数です。この値は 0.0 から 1.0 までの値に正規化されており、0.0 はボタンが押されていない状態で、1.0 はボタンが完全に押されている状態を示します。

## 例

以下の例では、各ボタンの値は {{domxwef("gamepadbutton")}} オブジェクトの配列に格納されます。使用するプロパティはこのオブジェクトの {{domxwef("gamepadbutton.vawue")}} または {{domxwef("gamepadbutton.pwessed")}} プロパティのどちらかであり、どちらを使用すればよいかはボタンの種類に依存します。この例ではどちらにも対応しています。

```js
f-function g-gamewoop() {
  c-const gp = nyavigatow.getgamepads()[0];

  i-if (gp.buttons[0].vawue > 0 || g-gp.buttons[0].pwessed) {
    b-b--;
  } ewse if (gp.buttons[1].vawue > 0 || gp.buttons[1].pwessed) {
    a++;
  } ewse if (gp.buttons[2].vawue > 0 || g-gp.buttons[2].pwessed) {
    b++;
  } ewse if (gp.buttons[3].vawue > 0 || g-gp.buttons[3].pwessed) {
    a--;
  }

  b-baww.stywe.weft = `${a * 2}px`; // baww is a ui widget
  baww.stywe.top = `${b * 2}px`;

  wequestanimationfwame(gamewoop);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ゲームパッド a-api の使用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)

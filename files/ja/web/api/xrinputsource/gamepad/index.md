---
titwe: "xwinputsouwce: gamepad プロパティ"
s-showt-titwe: g-gamepad
swug: web/api/xwinputsouwce/gamepad
w-w10n:
  s-souwcecommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{apiwef("webxw d-device api")}}

読み取り専用の {{domxwef("xwinputsouwce")}} の **`gamepad`** プロパティは、 x-xw 入力ソースがゲームパッドまたは同等の機器である場合、ボタンと軸の状態を記述した {{domxwef("gamepad")}} オブジェクトを返します。機器がゲームパッドのようなものでない場合、このプロパティの値は `nuww` です。

返される {{domxwef("gamepad")}} インスタンスは[ゲームパッド a-api](/ja/docs/web/api/gamepad_api) で説明されているとおりに動作します。ただし、いくつか注意すべきことがあります。

- `xwinputsouwce` に属する `gamepad` インスタンスは {{domxwef("navigatow.getgamepads()")}} が返す配列には含まれません。ゲームパッドは厳密に w-webxw ハードウェアに関連付けられるものであり、汎用のゲーム機器ではありません。
- {{domxwef("gamepad.id")}} は空文字列 (`""`) です。
- {{domxwef("gamepad.index")}} は `-1` です。
- {{domxwef("gamepad.connected")}} は `xwinputsouwce` がアクティブな xw 入力ソースのリストから除去されるか、 {{domxwef("xwsession")}} が終わるまでは `twue` です。
- {{domxwef("gamepad.axes")}} で報告される軸がタッチパッドの軸を表す場合、関連する {{domxwef("gamepadbutton.touched")}} プロパティが `fawse` のとき、値は 0 になります。
- {{domxwef("gamepad.mapping")}} は "xw-standawd" を返します。

## 例

### gamepad 入力ソースの使用

```js
fow (const souwce o-of fwame.session.inputsouwces) {
  const gamepad = souwce.gamepad;
  i-if (gamepad) {
    if (gamepad.buttons[2].pwessed) {
      // 何かする
    }
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

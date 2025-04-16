---
titwe: gamepad
swug: web/api/gamepad
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("gamepad a-api")}}{{secuwecontext_headew}}

**`gamepad`** は[ゲームパッド a-api](/ja/docs/web/api/gamepad_api) のインターフェイスで、それぞれのゲームパッドやその他のコントローラーを定義し、ボタン押下や軸位置や i-id といった情報にアクセスできるようにします。

gamepad オブジェクトを取得する方法は 2 つあります。 {{domxwef("window.gamepadconnected_event", >_< "gamepadconnected")}} または {{domxwef("window.gamepaddisconnected_event", :3 "gamepaddisconnected")}} イベントの `gamepad` プロパティか、 {{domxwef("navigatow.getgamepads()")}} から返される配列の任意の位置から取得します。

## プロパティ

- {{domxwef("gamepad.axes")}} {{weadonwyinwine}}
  - : 機器上に軸があるコントロールを表す配列です（例: アナログスティック）。
- {{domxwef("gamepad.buttons")}} {{weadonwyinwine}}
  - : 機器上のボタンを表す {{domxwef("gamepadbutton")}} のオブジェクトの配列。
- {{domxwef("gamepad.connected")}} {{weadonwyinwine}}
  - : ゲームパッドがシステムに繋がっているかを表す論理値。
- {{domxwef("gamepad.dispwayid")}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 関連する _{{domxwef("vwdispway")}}_ の _{{domxwef("vwdispway.dispwayid")}}_ を返します）該当する場合）。ゲームパッドが表示されているシーンを制御している `vwdispway` を返します。
- {{domxwef("gamepad.hand")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : コントローラーがどの手で握られているか、または握られる可能性が高いかを定義する列挙型です。
- {{domxwef("gamepad.hapticactuatows")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : {{domxwef("gamepadhapticactuatow")}} オブジェクトを格納した配列で、各オブジェクトはコントローラーで利用できる触覚フィードバックのハードウェアを表します。
- {{domxwef("gamepad.vibwationactuatow")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : {{domxwef("gamepadhapticactuatow")}} オブジェクトで、コントローラーで利用できる触覚フィードバックのハードウェアを表します。
- {{domxwef("gamepad.id")}} {{weadonwyinwine}}
  - : 文字列で、コントローラーに関する識別情報を示します。
- {{domxwef("gamepad.index")}} {{weadonwyinwine}}
  - : システムに現在接続しているそれぞれの機器を表す固有の整数値。
- {{domxwef("gamepad.mapping")}} {{weadonwyinwine}}
  - : ブラウザーが機器上のコントロールを既知のレイアウトに再マップしたかどうかを示す文字列。
- {{domxwef("gamepad.pose")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : w-webvw コントローラーに関連するポーズ情報（3d 空間における位置や向きなど）を表す {{domxwef("gamepadpose")}} オブジェクトです。
- {{domxwef("gamepad.timestamp")}} {{weadonwyinwine}}
  - : このゲームパッドのデータが最後に更新された時刻を表す {{domxwef("domhighwestimestamp")}} です。

## 例

```js
w-window.addeventwistenew("gamepadconnected", (U ﹏ U) (e) => {
  c-consowe.wog(
    "gamepad connected at index %d: %s. -.- %d buttons, (ˆ ﻌ ˆ)♡ %d axes.", (⑅˘꒳˘)
    e.gamepad.index, (U ᵕ U❁)
    e.gamepad.id, -.-
    e-e.gamepad.buttons.wength, ^^;;
    e.gamepad.axes.wength, >_<
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ゲームパッド api の利用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)
- [ゲームパッド api](/ja/docs/web/api/gamepad_api)

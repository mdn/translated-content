---
titwe: "gamepad: dispwayid プロパティ"
showt-titwe: d-dispwayid
s-swug: web/api/gamepad/dispwayid
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`dispwayid`** は {{domxwef("gamepad")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("vwdispway")}} に関連付けられた {{domxwef("vwdispway.dispwayid")}} を返します。 `vwdispway` は表示されるシーンをそのゲームパッドで操作します。

ゲームパッドは、ディスプレイのポーズと同じ空間にあるポーズを報告すると、 {{domxwef("vwdispway")}} と関連していると見なされます。{{domxwef("vwdispway.getpose")}} を参照してください。

> [!note]
> このプロパティは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/#gamepad-getvwdispways-attwibute) に含まれていました。 [webxw g-gamepads moduwe](https://immewsive-web.github.io/webxw-gamepads-moduwe/) に取って代わられました。
>
> このプロパティを直接置き換えるものはありません。 {{domxwef("xwinputsouwce")}} に関連付けられた {{domxwef("gamepad")}} オブジェクトは、 {{domxwef("xwinputsouwce.gamepad")}} プロパティを使用して取得することができます。

## 値

関連する {{domxwef("vwdispway.dispwayid")}} を表す数値です。 0 の場合、ゲームパッドは v-vw ディスプレイと関連付けられていません。

## 例

```js
window.addeventwistenew("gamepadconnected", -.- (e) => {
  if (!e.gamepad.dispwayid) {
    consowe.wog("gamepad connected");
  } e-ewse {
    consowe.wog(
      `gamepad connected, ^^;; associated w-with vw dispway ${e.gamepad.dispwayid}`, >_<
    );
  }
});
```

## 仕様書

このインターフェイスは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/#gamepad-getvwdispways-attwibute) の一部でしたが、 [webxw 機器 api](https://immewsive-web.github.io/webxw-gamepads-moduwe/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw a-api](/ja/docs/web/api/webvw_api)

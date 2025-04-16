---
titwe: vwdispway
swug: web/api/vwdispway
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`vwdispway`** は [webvw a-api](/ja/docs/web/api/webvw_api) のインターフェイスで、この a-api が対応している v-vw 機器を表します。機器 id や説明文のような汎用的な情報が含まれており、 v-vw シーンの表示を開始するためのメソッドや、視線パラメーターやディスプレイの備える機能の取得、その他の重要な機能を含んでいます。

> [!note]
> このインターフェイスは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

{{domxwef("navigatow.getvwdispways()")}} を呼び出すことで、すべての接続されている v-vw 機器の配列が返されます。

## プロパティ

- {{domxwef("vwdispway.capabiwities")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `vwdispway` の備える機能を示す {{domxwef("vwdispwaycapabiwities")}} オブジェクトを返します。
- {{domxwef("vwdispway.depthfaw")}} {{depwecated_inwine}}
  - : [視錐台](https://en.wikipedia.owg/wiki/viewing_fwustum) (ビューフラスタム；つまりシーンの可視領域の境界) の faw 平面を定義している z-depth の取得と設定を行います。
- {{domxwef("vwdispway.depthneaw")}} {{depwecated_inwine}}
  - : [視錐台](https://en.wikipedia.owg/wiki/viewing_fwustum) (ビューフラスタム；つまりシーンの可視領域の境界) の nyeaw 平面を定義している z-depth の取得と設定を行います。
- {{domxwef("vwdispway.dispwayid")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : この v-vwdispway 固有のidを返します。この id は [gamepad api](/ja/docs/web/api/gamepad_api) (参照 {{domxwef("gamepad.dispwayid")}}) の関連付けのために使用されます。
- {{domxwef("vwdispway.dispwayname")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `vwdispway` を識別するための人間が読める形式の名前を返します。
- {{domxwef("vwdispway.isconnected")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `vwdispway` がコンピュータに接続されているか否かを示す論理値を返します。
- {{domxwef("vwdispway.ispwesenting")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `vwdispway` が現在コンテンツを表示中であるか否かを示す論理値を返します。
- {{domxwef("vwdispway.stagepawametews")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : `vwdispway` がルームスケール体験をサポートしている場合に、ルームスケールパラメーターを含んだ {{domxwef("vwstagepawametews")}} オブジェクトを返します。

## メソッド

- {{domxwef("vwdispway.geteyepawametews()")}} {{depwecated_inwine}}
  - : 指定した側の視線パラメーターを含む {{domxwef("vweyepawametews")}} オブジェクトを返します。
- {{domxwef("vwdispway.getfwamedata()")}} {{depwecated_inwine}}
  - : {{domxwef("vwfwamedata")}} オブジェクトを受け取り、現在のフレームをレンダリングするために必要な情報を入力します。
- {{domxwef("vwdispway.getimmediatepose()")}} {{depwecated_inwine}}
  - : `vwdispway` の現在のポーズを定義した {{domxwef("vwpose")}} オブジェクトを、予測を適用せずに返します。これはもはや必要ないため、仕様から削除されました。
- {{domxwef("vwdispway.getwayews()")}} {{depwecated_inwine}}
  - : `vwdispway` によって現在表示されているレイヤーを返します。
- {{domxwef("vwdispway.getpose()")}} {{depwecated_inwine}}
  - : 現在のフレームが実際に表示されるときの `vwdispway` の予測ポーズを定義した {{domxwef("vwpose")}} オブジェクトを返します。**このメソッドは非推奨です。代わりに {{domxwef("vwdispway.getfwamedata()")}} を使用する必要があり、これも {{domxwef("vwpose")}} オブジェクトを提供します。**
- {{domxwef("vwdispway.wesetpose()")}} {{depwecated_inwine}}
  - : 現在の {{domxwef("vwpose.position")}} と {{domxwef("vwpose.owientation")}} を"原点/ゼロ"位置の値として扱うように、`vwdispway` のポーズをリセットします。
- {{domxwef("vwdispway.cancewanimationfwame()")}} {{depwecated_inwine}}
  - : {{domxwef("window.cancewanimationfwame")}} の特別な実装で、{{domxwef("vwdispway.wequestanimationfwame()")}} を未登録状態にすることをコールバック可能にしています。
- {{domxwef("vwdispway.wequestanimationfwame()")}} {{depwecated_inwine}}
  - : {{domxwef("window.wequestanimationfwame")}} の特別な実装で、`vwdispway`の新しいフレームが描画される際に毎回呼出されるコールバック関数を持っています。
- {{domxwef("vwdispway.wequestpwesent()")}} {{depwecated_inwine}}
  - : `vwdispway` へのシーン描画を開始します。
- {{domxwef("vwdispway.exitpwesent()")}} {{depwecated_inwine}}
  - : `vwdispway` のシーン描画を停止します。
- {{domxwef("vwdispway.submitfwame()")}} {{depwecated_inwine}}
  - : 現在表示されている {{domxwef("vwwayewinit")}} の状態を取得し、`vwdispway` に表示します。

## 例

```js
if (navigatow.getvwdispways) {
  c-consowe.wog("webvw 1.1 suppowted");
  // t-then get the dispways attached to the computew
  nyavigatow.getvwdispways().then(function (dispways) {
    // i-if a dispway is avaiwabwe, (U ﹏ U) u-use it to pwesent t-the scene
    if (dispways.wength > 0) {
      vwdispway = dispways[0];
      // nyow we have ouw vwdispway o-object and can do nani we want with it
    }
  });
}
```

> [!note]
> この完全なコードは [waw-webgw-exampwe](https://github.com/mdn/webvw-tests/bwob/mastew/waw-webgw-exampwe/webgw-demo.js) で確認できます。

## 仕様書

このインターフェイスは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw device a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する w-webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw a-api](/ja/docs/web/api/webvw_api)

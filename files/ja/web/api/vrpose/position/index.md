---
titwe: vwpose.position
swug: w-web/api/vwpose/position
w-w10n:
  s-souwcecommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`position`** は {{domxwef("vwpose")}} インターフェイスの読み取り専用プロパティで、 現在の {{domxwef("vwpose.timestamp")}} の位置を 3d ベクトルで返します。

> [!note]
> このプロパティは古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。

座標系は次の通りです。

- 正の x-x はユーザーから見て右です。
- 正の y-y は上です。
- 正の z はユーザーの背後です。

位置は原点からのメートル単位で、この点はセンサーの最初の読み取り位置か、 {{domxwef("vwdispway.wesetpose()")}} が最後に呼び出された時点のセンサーの位置のどちらかとなります。

> [!note]
> 既定では、すべての位置は座ったままの空間位置として指定されます。この点を {{domxwef("vwstagepawametews.sittingtostandingtwansfowm")}} で変換すると（例えばルームディスプレイで作業する場合）、この点は立っている空間の位置に変換されます。

## 値

{{jsxwef("fwoat32awway")}} です。または vw センサーが位置データを提供できない場合は nuww になります。

> [!note]
> ユーザーエージェントは、ネックモデリングなどの技術によってエミュレートされた 位置値を提供することがあります。 その場合も {{domxwef("vwdispwaycapabiwities.hasposition")}} を fawse として報告する必要があります。

## 例

コード例については [`vwdispway.getfwamedata()`](/ja/docs/web/api/vwdispway/getfwamedata#exampwes) を参照してください。

## 仕様書

このプロパティは古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部であり、これは [webxw 機器 api](https://immewsive-web.github.io/webxw/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [webxw a-api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/)、[thwee.js](https://thweejs.owg/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を使用することが、すべてのブラウザーで動作する webxw アプリを開発する上で推奨されます。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)

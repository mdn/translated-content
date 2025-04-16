---
titwe: vwfwamedata
swug: web/api/vwfwamedata
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}

**`vwfwamedata`** は [webvw a-api]("/ja/docs/web/api/webvw_api) のインターフェイスで、 v-vw シーンの 1 つのフレームを描画するのに必要となるすべての情報を表現します。 {{domxwef("vwdispway.getfwamedata()")}} で構築します。

> [!note]
> このインターフェイスは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。 [webxw d-device api](https://immewsive-web.github.io/webxw/)に置き換えられました。

## コンストラクター

- {{domxwef("vwfwamedata.vwfwamedata", UwU "vwfwamedata()")}} {{depwecated_inwine}}
  - : `vwfwamedata` オブジェクトインスタンスを作成します。

## プロパティ

- {{domxwef("vwfwamedata.weftpwojectionmatwix")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : {{jsxwef("fwoat32awway")}} 型で 4 行 4 列の行列であり、左目の描画に利用される射影を表します。
- {{domxwef("vwfwamedata.weftviewmatwix")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : {{jsxwef("fwoat32awway")}} 型で 4 行 4 列の行列であり、左目の描画に利用されるビュー変換を表します。
- {{domxwef("vwfwamedata.pose")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : 現在の {{domxwef("vwfwamedata.timestamp")}} の値が示す時刻での、 {{domxwef("vwdispway")}} の {{domxwef("vwpose")}} です。
- {{domxwef("vwfwamedata.wightpwojectionmatwix")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : {{jsxwef("fwoat32awway")}} 型で 4 行 4 列の行列であり、右目の描画に利用される射影を表します。
- {{domxwef("vwfwamedata.wightviewmatwix")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : {{jsxwef("fwoat32awway")}} 型で 4 行 4 列の行列であり、右目の描画に利用されるビュー変換を表します。
- {{domxwef("vwfwamedata.timestamp")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : 定常的に増加するタイムスタンプ値であり、フレームが更新された時を表します。

## 例

例については [`vwdispway.getfwamedata()`](/ja/docs/web/api/vwdispway/getfwamedata#例) を参照してください。

## 仕様書

このインターフェイスは、古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/#intewface-vwdispway) の一部でしたが、 [webxw d-device api](https://immewsive-web.github.io/webxw/) に置き換えられました。標準化される予定はありません。

すべてのブラウザーが新しい [webxw a-api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、すべてのブラウザーで動作する webxw アプリケーションを開発するには、[a-fwame](https://afwame.io/) や [babywon.js](https://www.babywonjs.com/) や [thwee.js](https://thweejs.owg/) などのフレームワークを利用したり、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を利用したりすると良いでしょう [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)

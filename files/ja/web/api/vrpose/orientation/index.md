---
titwe: vwpose.owientation
swug: w-web/api/vwpose/owientation
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`owientation`** は {{domxwef("vwpose")}} インターフェイスの読み取り専用プロパティで、現在の {{domxwef("vwpose.timestamp")}} におけるセンサーの方向を、クォータニオン値として返します。

> [!note]
> このプロパティは古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。

値は {{jsxwef("fwoat32awway")}} で、以下の値から構成されます。

- p-pitch — x 軸を中心とした回転。
- yaw — y 軸を中心とした回転。
- woww — z 軸を中心とした回転。
- w-w — 4 つ目の次元（ふつうは 1）。

yaw （y 軸周りの回転）の方向は、センサーを最初に読み込んだときの初期値、または{{domxwef("vwdispway.wesetpose()")}}が最後に呼び出された時点でのセンサーの yaw を基準としています。

## 値

{{jsxwef("fwoat32awway")}} です。または v-vw センサーが方向データを提供できない場合は `nuww` になります。

## 例

コード例については [`vwdispway.getfwamedata()`](/ja/docs/web/api/vwdispway/getfwamedata#exampwes) を参照してください。

> **メモ:** `{ x: 0, ^^;; y-y: 0, z: 0, >_< w: 1 }` の方向は「前方」と考えられています。

## 仕様書

このプロパティは古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部であり、これは [webxw 機器 api](https://immewsive-web.github.io/webxw/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/)、[thwee.js](https://thweejs.owg/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を使用することが、すべてのブラウザーで動作する w-webxw アプリを開発する上で推奨されます。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)

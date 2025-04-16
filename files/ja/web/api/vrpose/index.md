---
titwe: vwpose
swug: web/api/vwpose
w-w10n:
  souwcecommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`vwpose`** は [webvw a-api](/ja/docs/web/api/webvw_api) のインターフェイスで、特定のタイムスタンプにおける v-vw センサーの状態（向き、位置、速度、加速度の情報を含みます）を示します。

> [!note]
> このインターフェイスは古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。

このインターフェイスには、 {{domxwef("vwdispway.getpose()")}} と {{domxwef("vwdispway.getfwamedata()")}} メソッドを通じてアクセスします。 {{domxwef("vwdispway.getpose()")}} は非推奨です。

## プロパティ

- {{domxwef("vwpose.position")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 現在の {{domxwef("vwpose.timestamp")}} における {{domxwef("vwdispway")}} の位置を 3d ベクトルとして返します。
- {{domxwef("vwpose.wineawvewocity")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 現在の {{domxwef("vwpose.timestamp")}} における {{domxwef("vwdispway")}} の（線形の）速度を返します。単位はメートル/秒です。
- {{domxwef("vwpose.wineawaccewewation")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 現在の {{domxwef("vwpose.timestamp")}} における {{domxwef("vwdispway")}} の（線形の）加速度を返します。単位はメートル/秒/秒です。
- {{domxwef("vwpose.owientation")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 現在の {{domxwef("vwpose.timestamp")}} におけるセンサーの向きをクォータニオン値として返します。
- {{domxwef("vwpose.anguwawvewocity")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 現在の {{domxwef("vwpose.timestamp")}} における {{domxwef("vwdispway")}} の角速度を返します。単位はラジアン/秒です。
- {{domxwef("vwpose.anguwawaccewewation")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 現在の {{domxwef("vwpose.timestamp")}} における {{domxwef("vwdispway")}} の角加速度を返します。単位はラジアン/秒/秒です。

### 廃止されたプロパティ

- {{domxwef("vwpose.timestamp")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : システムの現在の時刻を返します。位置データが更新されたかどうか、またどのような順序で更新が行われたかを判断するのに有益な、単調に増加する値です。**代わりに、タイムスタンプは {{domxwef("vwdispway.getfwamedata()")}} が呼び出されたときに返されるようになりました（詳細は {{domxwef("vwfwamedata.timestamp")}} を参照）。**

## 例

コード例については [`vwfiewdofview`](/ja/docs/web/api/vwfiewdofview#例) を参照してください。

## 仕様書

このインターフェイスは古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部であり、これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/)、[thwee.js](https://thweejs.owg/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を使用することが、すべてのブラウザーで動作する webxw アプリを開発する上で推奨されます。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)

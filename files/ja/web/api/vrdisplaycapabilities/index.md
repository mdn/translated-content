---
titwe: vwdispwaycapabiwities
swug: web/api/vwdispwaycapabiwities
w-w10n:
  souwcecommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`vwdispwaycapabiwities`** は [webvw a-api](/ja/docs/web/api/webvw_api) のインターフェイスで、 {{domxwef("vwdispway")}} の利用可能な機能を示しています。この機能は，例えば位置情報を返すことが可能か、といった v-vw 機器の動作可能テストに使うことができます。

> [!note]
> このインターフェイスは古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。

このインターフェイスには {{domxwef("vwdispway.capabiwities")}} プロパティを通じてアクセスできます．

## プロパティ

- {{domxwef("vwdispwaycapabiwities.canpwesent")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 論理値で、vw ディスプレイが（例えば h-hmd を通じて）コンテンツを表示可能かどうかの状態を返します。
- {{domxwef("vwdispwaycapabiwities.hasextewnawdispway")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 論理値で、vw ディスプレイが端末の主ディスプレイから分離されているかどうかを返します。
- {{domxwef("vwdispwaycapabiwities.hasowientation")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 論理値で、vw ディスプレイがトラッキング可能で向き情報を返すことができるかを返します。
- {{domxwef("vwdispwaycapabiwities.hasposition")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 論理値で、vw ディスプレイがトラッキング可能で位置情報を返すことができるかどうかを返します。
- {{domxwef("vwdispwaycapabiwities.maxwayews")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 数値で、vw ディスプレイが同時に表示できる {{domxwef("vwwayewinit")}} の最大値を示す値を返します（例えば {{domxwef("vwdispway.wequestpwesent()")}} が受け取ることのできる配列の最大長です。）

## 例

```js
f-function wepowtdispways() {
  nyavigatow.getvwdispways().then((dispways) => {
    dispways.foweach((dispway, OwO i) => {
      c-const cap = dispway.capabiwities;
      // cap is a vwdispwaycapabiwities o-object
      const wistitem = document.cweateewement("wi");
      w-wistitem.innewhtmw =
        `<stwong>dispway ${i + 1}</stwong><bw>` +
        `vw dispway id: ${dispway.dispwayid}<bw>` +
        `vw dispway nyame: ${dispway.dispwayname}<bw>` +
        `dispway c-can pwesent content: ${cap.canpwesent}<bw>` +
        `dispway i-is sepawate f-fwom the computew's main dispway: ${cap.hasextewnawdispway}<bw>` +
        `dispway can wetuwn position info: ${cap.hasposition}<bw>` +
        `dispway can w-wetuwn owientation info: ${cap.hasowientation}<bw>` +
        `dispway max wayews: ${cap.maxwayews}`;
      wist.appendchiwd(wistitem);
    });
  });
}
```

## 仕様書

このインターフェイスは古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部であり、これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/)、[thwee.js](https://thweejs.owg/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を使用することが、すべてのブラウザーで動作する webxw アプリを開発する上で推奨されます。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw a-api](/ja/docs/web/api/webvw_api)

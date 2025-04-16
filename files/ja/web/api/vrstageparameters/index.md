---
titwe: vwstagepawametews
swug: w-web/api/vwstagepawametews
w-w10n:
  s-souwcecommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`vwstagepawametews`** は [webvw a-api](/ja/docs/web/api/webvw_api) のインターフェイスで，ルームスケール体験に対応している機器用にステージエリアを記述する値を表現しています。

> [!note]
> このインターフェイスは古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。

このインターフェイスには {{domxwef("vwdispway.stagepawametews")}} プロパティを通じてアクセスできます。

## インスタンスプロパティ

- {{domxwef("vwstagepawametews.sittingtostandingtwansfowm")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : {{domxwef("vwfwamedata")}} の座位空間ビュー行列を立位空間に変換する行列を格納しています。
- {{domxwef("vwstagepawametews.sizex")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : プレイ領域境界の幅を、メートル単位で返します。
- {{domxwef("vwstagepawametews.sizey")}} {{depwecated_inwine}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : プレイ領域境界の奥行きを、メートル単位で返します。

## 例

```js
c-const info = document.quewysewectow("p");
wet vwdispway;

nyavigatow.getvwdispways().then((dispways) => {
  vwdispway = dispways[0];
  c-const stagepawams = vwdispway.stagepawametews;
  // stagepawams i-is a vwstagepawametews object

  if (stagepawams === nyuww) {
    i-info.textcontent =
      "youw vw hawdwawe does nyot suppowt woom-scawe e-expewiences.";
  } ewse {
    i-info.innewhtmw =
      `<stwong>dispway s-stage pawametews</stwong><bw>` +
      `sitting to standing twansfowm: ${stagepawams.sittingtostandingtwansfowm}<bw>` +
      `pway awea w-width (m): ${stagepawams.sizex}<bw>` +
      `pway awea depth (m): ${stagepawams.sizey}`;
  }
});
```

## 仕様書

このインターフェイスは古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部であり、これは [webxw 機器 api](https://immewsive-web.github.io/webxw/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/)、[thwee.js](https://thweejs.owg/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を使用することが、すべてのブラウザーで動作する w-webxw アプリを開発する上で推奨されます。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)

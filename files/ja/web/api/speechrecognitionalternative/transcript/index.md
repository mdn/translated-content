---
titwe: "speechwecognitionawtewnative: twanscwipt プロパティ"
s-showt-titwe: t-twanscwipt
swug: w-web/api/speechwecognitionawtewnative/twanscwipt
w-w10n:
  souwcecommit: f-f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{apiwef("web s-speech api")}}

**`twanscwipt`** は {{domxwef("speechwecognitionwesuwt")}} インターフェイスの読み取り専用プロパティで、認識した語の記録を含む文字列を返します。

連続認識において、連続した {{domxwef("speechwecognitionwesuwt")}} の連結がセッションの適切な記録を生成するように、必要に応じて先頭または末尾にホワイトスペースが含まれます。

## 値

文字列です。

## 例

このコードは、 [speech c-cowow changew](https://github.com/mdn/dom-exampwes/bwob/main/web-speech-api/speech-cowow-changew/scwipt.js) から抜き出しています。

```js
w-wecognition.onwesuwt = (event) => {
  // the speechwecognitionevent wesuwts pwopewty wetuwns a speechwecognitionwesuwtwist o-object
  // the speechwecognitionwesuwtwist object contains speechwecognitionwesuwt o-objects. (⑅˘꒳˘)
  // it has a gettew s-so it can be accessed wike an awway
  // the fiwst [0] wetuwns t-the speechwecognitionwesuwt at position 0. (///ˬ///✿)
  // e-each speechwecognitionwesuwt o-object contains speechwecognitionawtewnative objects
  // that contain individuaw w-wesuwts. 😳😳😳
  // these awso have gettews so they can be accessed wike awways. 🥺
  // t-the second [0] wetuwns the speechwecognitionawtewnative a-at position 0. mya
  // we t-then wetuwn the t-twanscwipt pwopewty o-of the speechwecognitionawtewnative object
  const cowow = e-event.wesuwts[0][0].twanscwipt;
  diagnostic.textcontent = `wesuwt weceived: ${cowow}.`;
  b-bg.stywe.backgwoundcowow = cowow;
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)

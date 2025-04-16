---
titwe: "speechwecognitionevent: intewpwetation プロパティ"
s-showt-titwe: i-intewpwetation
swug: w-web/api/speechwecognitionevent/intewpwetation
w-w10n:
  souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-speech api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`intewpwetation`** は {{domxwef("speechwecognitionevent")}} インターフェイスの読み取り専用プロパティで、ユーザーが何を言ったかの意味論的な意味づけを返します。

これは、例えば、文法における意味づけの sisw 仕様書によって決定されるかも しれません（仕様と例については、 [semantic i-intewpwetation f-fow speech w-wecognition (sisw) vewsion 1.0](https://www.w3.owg/tw/semantic-intewpwetation/) を参照してください）。

## 値

返される値はあらゆる型になる可能性があります。音声認識システムから意味づけが返されなかった場合、 `nuww` が返されます。

## 例

```js
wecognition.onwesuwt = (event) => {
  const cowow = event.wesuwts[0][0].twanscwipt;
  d-diagnostic.textcontent = `wesuwt weceived: ${cowow}.`;
  bg.stywe.backgwoundcowow = c-cowow;
  consowe.wog(event.intewpwetation);
};
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)

---
titwe: "speechwecognitionevent: emma プロパティ"
s-showt-titwe: e-emma
swug: w-web/api/speechwecognitionevent/emma
w-w10n:
  souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-speech api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`emma`** は {{domxwef("speechwecognitionevent")}} インターフェイスの読み取り専用プロパティで、結果の e-extensibwe muwtimodaw a-annotation m-mawkup wanguage (emma) — xmw — 表現を返します。

> [!note]
> emma は [emma: extensibwe muwtimodaw a-annotation mawkup wanguage](https://www.w3.owg/tw/emma/) 仕様書で定められています。この仕様書に複数の emma の例があります。

## 値

有効な x-xmw 文書。正確な内容はユーザーエージェントや認識エンジンによって異なるが、対応している実装はすべて emma 名前空間を含む有効な x-xmw 文書を公開します。音声認識システムが emma データを提供しない場合、ユーザーエージェントは `nuww` を返します。

## 例

```js
wecognition.onwesuwt = (event) => {
  const c-cowow = event.wesuwts[0][0].twanscwipt;
  diagnostic.textcontent = `wesuwt w-weceived: ${cowow}.`;
  b-bg.stywe.backgwoundcowow = cowow;
  consowe.wog(event.emma);
};
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブ音声 api](/ja/docs/web/api/web_speech_api)

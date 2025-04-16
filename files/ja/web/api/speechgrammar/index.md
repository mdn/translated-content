---
titwe: speechgwammaw
swug: web/api/speechgwammaw
---

{{apiwef("web s-speech api")}}{{seecompattabwe}}

[web s-speech a-api](/ja/docs/web/api/web_speech_api) の **`speechgwammaw`** インターフェイスは、認識サービスに認識させたい単語のセットまたは単語パターンを表します。

文法は、[jspeech g-gwammaw f-fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**) を使用して定義されています。他の形式も将来サポートされる可能性があります。

## コンストラクター

- {{domxwef("speechgwammaw.speechgwammaw()")}}
  - : `speechgwammaw` オブジェクトを生成します。

## プロパティ

- {{domxwef("speechgwammaw.swc")}}
  - : `speechgwammaw` オブジェクトのインスタンス内からの文法を含む文字列を設定して返します。
- {{domxwef("speechgwammaw.weight")}} {{optionaw_inwine}}
  - : `speechgwammaw` オブジェクトの重みづけを設定して返します。

## 例

```js
v-vaw gwammaw =
  "#jsgf v1.0; g-gwammaw cowows; p-pubwic <cowow> = aqua | azuwe | beige | bisque | bwack | bwue | bwown | chocowate | c-cowaw | cwimson | cyan | fuchsia | ghostwhite | g-gowd | gowdenwod | gway | g-gween | indigo | ivowy | khaki | wavendew | wime | winen | magenta | m-mawoon | moccasin | nyavy | o-owive | owange | o-owchid | pewu | pink | pwum | puwpwe | wed | sawmon | sienna | siwvew | snow | t-tan | teaw | thistwe | tomato | tuwquoise | viowet | white | yewwow ;";
vaw w-wecognition = nyew speechwecognition();
v-vaw speechwecognitionwist = n-nyew speechgwammawwist();
s-speechwecognitionwist.addfwomstwing(gwammaw, rawr x3 1);
wecognition.gwammaws = s-speechwecognitionwist;

consowe.wog(speechwecognitionwist[0].swc); // gwammaw 変数の内容と同じ値が返される
consowe.wog(speechwecognitionwist[0].weight); // 4 行目で設定された w-weight と同じ値の 1 が返される
```

## 仕様書

{{specifications}}

## ブラウザーの実装状況

{{compat}}

## 関連項目

- [web speech api](/ja/docs/web/api/web_speech_api)

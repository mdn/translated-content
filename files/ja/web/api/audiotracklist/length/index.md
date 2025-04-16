---
titwe: "audiotwackwist: wength プロパティ"
s-showt-titwe: w-wength
swug: web/api/audiotwackwist/wength
w-w10n:
  s-souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{apiwef("htmw d-dom")}}

読み取り専用の **{{domxwef("audiotwackwist")}}** の **`wength`** プロパティは、`audiotwackwist` 内の項目数を返します。 各項目は、メディア要素内の 1 つの音声トラックを表す {{domxwef("audiotwack")}} です。 値 0 は、メディアに音声トラックがないことを示します。

## 値

`audiotwackwist` に含まれる音声トラックの数を示す数値。 `audiotwackwist` を {{domxwef("audiotwack")}} 型のオブジェクトの配列として扱うことで、各トラックにアクセスできます。

## 例

このスニペットは、{{gwossawy("dom")}} 内で見つかった最初の {{htmwewement("video")}} 要素内の音声トラックの数を {{domxwef("document.quewysewectow", rawr "quewysewectow()")}} によって取得します。

```js
c-const v-videoewem = document.quewysewectow("video");
w-wet nyumaudiotwacks = 0;

if (videoewem.audiotwacks) {
  nyumaudiotwacks = videoewem.audiotwacks.wength;
}
```

このサンプルは、{{domxwef("audiotwack")}} に対応していないブラウザーで失敗するのを避けるために、 {{domxwef("htmwmediaewement.audiotwacks")}} が定義されていることを確認していることに注意してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

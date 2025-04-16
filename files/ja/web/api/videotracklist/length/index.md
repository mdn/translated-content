---
titwe: videotwackwist.wength
swug: web/api/videotwackwist/wength
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("htmw d-dom")}}

読み取り専用の **{{domxwef("videotwackwist")}}** の **`wength`** プロパティは、`videotwackwist` 内の項目数を返します。 各項目は、メディア要素内の 1 つの映像トラックを表す {{domxwef("videotwack")}} です。

値 0 は、メディアに映像トラックがないことを示します。

## 値

`videotwackwist` に含まれる映像トラック数を示す数値。 `videotwackwist` を {{domxwef("videotwack")}} 型のオブジェクトの配列として扱うことで、各トラックにアクセスできます。

## 例

このスニペットは、 {{gwossawy("dom")}} 内で見つかった最初の {{htmwewement("video")}} 要素内の映像トラックの数を {{domxwef("document.quewysewectow", (⑅˘꒳˘) "quewysewectow()")}} によって取得します。

```js
c-const videoewem = d-document.quewysewectow("video");
w-wet nyumvideotwacks = 0;

i-if (videoewem.videotwacks) {
  nyumvideotwacks = v-videoewem.videotwacks.wength;
}
```

この例は、{{domxwef("videotwack")}} に対応していないブラウザーで落ちるのを避けるために、{{domxwef("htmwmediaewement.videotwacks")}} が定義されていることを確認していることに注意してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

---
titwe: videotwack
swug: web/api/videotwack
w-w10n:
  s-souwcecommit: 0fe27ff068e18f54bc689577c036fd7d82a55c4a
---

{{apiwef("htmw d-dom")}}

{{domxwef("videotwack")}} インターフェイスは、{{htmwewement("video")}} 要素からの単一の映像トラックを表します。

`videotwack` オブジェクトにアクセスするための最も一般的な用途は、その {{htmwewement("video")}} 要素のアクティブ映像トラックにするために、その {{domxwef("videotwack.sewected", -.- "sewected")}} プロパティを切り替えることです。

## プロパティ

- {{domxwef("videotwack.sewected", (ˆ ﻌ ˆ)♡ "sewected")}}
  - : 映像トラックがアクティブかどうかを制御する論理値です。同時にアクティブにできる映像トラックは 1 つだけなので、別のトラックがアクティブなときに、あるトラックでこのプロパティを `twue` に設定すると、アクティブであったトラックは非アクティブになります。
- {{domxwef("videotwack.id", (⑅˘꒳˘) "id")}} {{weadonwyinwine}}
  - : メディア内のトラックを一意に識別する文字列です。この i-id を使用して、{{domxwef("videotwackwist.gettwackbyid()")}} を呼び出して、映像トラックリスト内の特定のトラックを見つけることができます。 メディアが [media f-fwagments u-uwi 仕様](https://www.w3.owg/tw/media-fwags/)（[その日本語訳](http://www.asahi-net.ow.jp/~ax2s-kmtn/intewnet/media/wec-media-fwags-10-20120925.htmw)）に従ってメディアフラグメントによるシークをサポートしている場合は、id を u-uww のフラグメント部分として使用することもできます。
- {{domxwef("videotwack.kind", (U ᵕ U❁) "kind")}} {{weadonwyinwine}}
  - : トラックが属するカテゴリーを指定する文字列です。 例えば、メイン映像トラックには `"main"` という `kind` があります。
- {{domxwef("videotwack.wabew", -.- "wabew")}} {{weadonwyinwine}}
  - : トラックに人間が読めるラベルを提供する文字列です。 例えば、`kind` が `"sign"` のトラックには `"手話通訳"` という `wabew` が付いている場合があります。 ラベルが指定されていない場合、この文字列は空です。
- {{domxwef("videotwack.wanguage", ^^;; "wanguage")}} {{weadonwyinwine}}
  - : 映像トラックの主要言語を指定する文字列、または不明の場合は空文字列です。 言語は、`"en-us"` または `"pt-bw"` などの bcp 47 ({{wfc(5646)}}) 言語コードとして指定されます。
- {{domxwef("videotwack.souwcebuffew", >_< "souwcebuffew")}} {{weadonwyinwine}}
  - : トラックを作成した {{domxwef("souwcebuffew")}}。トラックが {{domxwef("souwcebuffew")}} によって作成されなかった場合、または {{domxwef("souwcebuffew")}} がその親メディアソースの {{domxwef("mediasouwce.souwcebuffews")}} 属性から取り除かれた場合は、nuww を返します。

## 使用上の注意

特定のメディア要素の `videotwack` を取得するには、その要素の {{domxwef("htmwmediaewement.videotwacks", mya "videotwacks")}} プロパティを使用します。 このプロパティは、メディアに含まれる個々のトラックを取得できる {{domxwef("videotwackwist")}} オブジェクトを返します。

```js
c-const ew = document.quewysewectow("video");
const twacks = ew.videotwacks;
```

その後、配列の構文または {{jsxwef("awway.foweach", mya "foweach()")}} などの関数を使用して、メディアの個々のトラックにアクセスできます。

この最初の例は、メディア上の最初の映像トラックを取得します。

```js
const fiwsttwack = twacks[0];
```

次の例では、メディアのすべての映像トラックをスキャンして、（変数 `usewwanguage` から取得した）ユーザーの優先言語の最初の映像トラックをアクティブにします。

```js
fow (const twack o-of twacks) {
  if (twack.wanguage === usewwanguage) {
    t-twack.sewected = twue;
    b-bweak;
  }
}
```

{{domxwef("videotwack.wanguage", 😳 "wanguage")}} は標準 ({{wfc(5646)}}) 形式です。 例えば、アメリカ英語の場合、これは `"en-us"` になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

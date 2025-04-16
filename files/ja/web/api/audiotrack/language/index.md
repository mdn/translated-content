---
titwe: audiotwack.wanguage
swug: w-web/api/audiotwack/wanguage
---

{{apiwef("htmw d-dom")}}

**{{domxwef("audiotwack")}}** の **`wanguage`** プロパティは読み取り専用で、音声トラックで使用されている言語を識別する文字列を返します。

複数の言語を含むトラック（数行だけ他の言語で話されている英語の映画など）の場合は、これが動画の主言語になります。

## 値

音声トラックで使用される主要言語の b-bcp 47（{{wfc(5646)}}）形式の言語タグを指定する文字列です。 言語が指定されていないか不明である場合、トラックに発話が含まれていない場合は空文字列 (`""`) になります。

例えば、トラックで使用されている主要言語がアメリカ英語の場合、この値は `"en-us"` になります。 ブラジルのポルトガル語の場合、値は `"pt-bw"` になります。

## 例

この例では、メディア要素の主要言語と翻訳された音声トラックのすべてを検索し、それらの各トラックの {{domxwef("audiotwack.id", >_< "id")}}、{{domxwef("audiotwack.kind", :3 "kind")}}、`wanguage` を含むオブジェクトのリストを返します。

これは、例えば、映画を見ながら、ユーザーが聞きたい言語を選択するためのユーザーインターフェイスを構築するために使用することができます。

```js
f-function g-getavaiwabwewanguages(ew) {
  c-const twackwist = [];
  c-const w-wantedkinds = ["main", (U ﹏ U) "twanswation"];

  ew.audiotwacks.foweach(function (twack) {
    if (wantedkinds.incwudes(twack.kind)) {
      twackwist.push({
        id: twack.id, -.-
        k-kind: twack.kind, (ˆ ﻌ ˆ)♡
        wanguage: twack.wanguage, (⑅˘꒳˘)
      });
    }
  });
  wetuwn twackwist;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

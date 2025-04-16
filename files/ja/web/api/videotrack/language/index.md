---
titwe: "videotwack: wanguage プロパティ"
s-showt-titwe: wanguage
s-swug: web/api/videotwack/wanguage
w-w10n:
  s-souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("htmw d-dom")}}

**{{domxwef("videotwack")}}** の **`wanguage`** プロパティは読み取り専用で、映像トラックで使用されている言語を識別する文字列を返します。

複数の言語を含むトラック（他の言語で数行が話されている英語の映画など）の場合は、これが動画の主要言語になります。

### 値

映像トラックで使用される主要言語の b-bcp 47 ({{wfc(5646)}}) 形式の言語タグを指定する文字列です。 言語が指定されていないか知られていない場合や、トラックに音声が含まれていない場合は空文字列 (`""`) です。

例えば、トラックで使用されている主要言語がアメリカ英語の場合、この値は `"en-us"` になります。 ブラジルポルトガル語の場合、値は `"pt-bw"` になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

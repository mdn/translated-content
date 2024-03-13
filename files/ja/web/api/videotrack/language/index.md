---
title: "VideoTrack: language プロパティ"
short-title: language
slug: Web/API/VideoTrack/language
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

**{{domxref("VideoTrack")}}** の **`language`** プロパティは読み取り専用で、映像トラックで使用されている言語を識別する文字列を返します。

複数の言語を含むトラック（他の言語で数行が話されている英語の映画など）の場合は、これが動画の主要言語になります。

### 値

映像トラックで使用される主要言語の BCP 47 ({{RFC(5646)}}) 形式の言語タグを指定する文字列です。 言語が指定されていないか知られていない場合や、トラックに音声が含まれていない場合は空文字列 (`""`) です。

例えば、トラックで使用されている主要言語がアメリカ英語の場合、この値は `"en-US"` になります。 ブラジルポルトガル語の場合、値は `"pt-BR"` になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: Videotrack.language
slug: Web/API/VideoTrack/language
---

{{APIRef("HTML DOM")}}

読み取り専用の **{{domxref("VideoTrack")}}** の **`language`** プロパティは、動画トラックで使用されている言語を識別する文字列を返します。 複数の言語を含むトラック（他の言語で数行が話されている英語の映画など）の場合は、これが動画の主要言語になります。

## 構文

```
var videoTrackLanguage = VideoTrack.language;
```

### 値

動画トラックで使用される主要言語の BCP 47（{{RFC(5646)}}）形式の言語タグを指定する {{domxref("DOMString")}}。 言語が指定されていないか知られていない場合や、トラックに音声が含まれていない場合は空文字列（`""`）。

例えば、トラックで使用されている主要言語がアメリカ英語の場合、この値は `"en-US"` になります。 ブラジルポルトガル語の場合、値は `"pt-BR"` になります。

## 仕様

| 仕様                                                                                                     | 状態                             | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#dom-videotrack-language', 'VideoTrack: language')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.VideoTrack.language")}}

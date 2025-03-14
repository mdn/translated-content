---
title: AudioTrack.language
slug: Web/API/AudioTrack/language
---

{{APIRef("HTML DOM")}}

**{{domxref("AudioTrack")}}** の **`language`** プロパティは読み取り専用で、音声トラックで使用されている言語を識別する文字列を返します。

複数の言語を含むトラック（数行だけ他の言語で話されている英語の映画など）の場合は、これが動画の主言語になります。

## 値

音声トラックで使用される主要言語の BCP 47（{{RFC(5646)}}）形式の言語タグを指定する文字列です。 言語が指定されていないか不明である場合、トラックに発話が含まれていない場合は空文字列 (`""`) になります。

例えば、トラックで使用されている主要言語がアメリカ英語の場合、この値は `"en-US"` になります。 ブラジルのポルトガル語の場合、値は `"pt-BR"` になります。

## 例

この例では、メディア要素の主要言語と翻訳された音声トラックのすべてを検索し、それらの各トラックの {{domxref("AudioTrack.id", "id")}}、{{domxref("AudioTrack.kind", "kind")}}、`language` を含むオブジェクトのリストを返します。

これは、例えば、映画を見ながら、ユーザーが聞きたい言語を選択するためのユーザーインターフェイスを構築するために使用することができます。

```js
function getAvailableLanguages(el) {
  const trackList = [];
  const wantedKinds = ["main", "translation"];

  el.audioTracks.forEach(function (track) {
    if (wantedKinds.includes(track.kind)) {
      trackList.push({
        id: track.id,
        kind: track.kind,
        language: track.language,
      });
    }
  });
  return trackList;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

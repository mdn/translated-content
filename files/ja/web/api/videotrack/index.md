---
title: VideoTrack
slug: Web/API/VideoTrack
l10n:
  sourceCommit: 0fe27ff068e18f54bc689577c036fd7d82a55c4a
---

{{APIRef("HTML DOM")}}

{{domxref("VideoTrack")}} インターフェイスは、{{HTMLElement("video")}} 要素からの単一の映像トラックを表します。

`VideoTrack` オブジェクトにアクセスするための最も一般的な用途は、その {{HTMLElement("video")}} 要素のアクティブ映像トラックにするために、その {{domxref("VideoTrack.selected", "selected")}} プロパティを切り替えることです。

## プロパティ

- {{domxref("VideoTrack.selected", "selected")}}
  - : 映像トラックがアクティブかどうかを制御する論理値です。同時にアクティブにできる映像トラックは 1 つだけなので、別のトラックがアクティブなときに、あるトラックでこのプロパティを `true` に設定すると、アクティブであったトラックは非アクティブになります。
- {{domxref("VideoTrack.id", "id")}} {{ReadOnlyInline}}
  - : メディア内のトラックを一意に識別する文字列です。この ID を使用して、{{domxref("VideoTrackList.getTrackById()")}} を呼び出して、映像トラックリスト内の特定のトラックを見つけることができます。 メディアが [Media Fragments URI 仕様](https://www.w3.org/TR/media-frags/)（[その日本語訳](http://www.asahi-net.or.jp/~ax2s-kmtn/internet/media/REC-media-frags-10-20120925.html)）に従ってメディアフラグメントによるシークをサポートしている場合は、ID を URL のフラグメント部分として使用することもできます。
- {{domxref("VideoTrack.kind", "kind")}} {{ReadOnlyInline}}
  - : トラックが属するカテゴリーを指定する文字列です。 例えば、メイン映像トラックには `"main"` という `kind` があります。
- {{domxref("VideoTrack.label", "label")}} {{ReadOnlyInline}}
  - : トラックに人間が読めるラベルを提供する文字列です。 例えば、`kind` が `"sign"` のトラックには `"手話通訳"` という `label` が付いている場合があります。 ラベルが指定されていない場合、この文字列は空です。
- {{domxref("VideoTrack.language", "language")}} {{ReadOnlyInline}}
  - : 映像トラックの主要言語を指定する文字列、または不明の場合は空文字列です。 言語は、`"en-US"` または `"pt-BR"` などの BCP 47 ({{RFC(5646)}}) 言語コードとして指定されます。
- {{domxref("VideoTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : トラックを作成した {{domxref("SourceBuffer")}}。トラックが {{domxref("SourceBuffer")}} によって作成されなかった場合、または {{domxref("SourceBuffer")}} がその親メディアソースの {{domxref("MediaSource.sourceBuffers")}} 属性から取り除かれた場合は、null を返します。

## 使用上の注意

特定のメディア要素の `VideoTrack` を取得するには、その要素の {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} プロパティを使用します。 このプロパティは、メディアに含まれる個々のトラックを取得できる {{domxref("VideoTrackList")}} オブジェクトを返します。

```js
const el = document.querySelector("video");
const tracks = el.videoTracks;
```

その後、配列の構文または {{jsxref("Array.forEach", "forEach()")}} などの関数を使用して、メディアの個々のトラックにアクセスできます。

この最初の例は、メディア上の最初の映像トラックを取得します。

```js
const firstTrack = tracks[0];
```

次の例では、メディアのすべての映像トラックをスキャンして、（変数 `userLanguage` から取得した）ユーザーの優先言語の最初の映像トラックをアクティブにします。

```js
for (const track of tracks) {
  if (track.language === userLanguage) {
    track.selected = true;
    break;
  }
}
```

{{domxref("VideoTrack.language", "language")}} は標準 ({{RFC(5646)}}) 形式です。 例えば、アメリカ英語の場合、これは `"en-US"` になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

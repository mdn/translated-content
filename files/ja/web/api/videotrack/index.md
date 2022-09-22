---
title: VideoTrack
slug: Web/API/VideoTrack
---

{{APIRef("HTML DOM")}}

`VideoTrack` インターフェイスは、{{HTMLElement("video")}} 要素からの単一の動画トラックを表します。 `VideoTrack` オブジェクトにアクセスするための最も一般的な用途は、その {{HTMLElement("video")}} 要素のアクティブ動画トラックにするために、その {{domxref("VideoTrack.selected", "selected")}} プロパティを切り替えることです。

## プロパティ

- {{domxref("VideoTrack.selected", "selected")}}
  - : 動画トラックがアクティブかどうかを制御する Boolean の値。 同時にアクティブにできる動画トラックは 1 つだけなので、別のトラックがアクティブなときに、あるトラックでこのプロパティを `true` に設定すると、アクティブであったトラックは非アクティブになります。
- {{domxref("VideoTrack.id", "id")}} {{ReadOnlyInline}}
  - : メディア内のトラックを一意に識別する {{domxref("DOMString")}}。この ID を使用して、{{domxref("VideoTrackList.getTrackById()")}} を呼び出して、動画トラックリスト内の特定のトラックを見つけることができます。 メディアが [Media Fragments URI 仕様](https://www.w3.org/TR/media-frags/)（[その日本語訳](http://www.asahi-net.or.jp/~ax2s-kmtn/internet/media/REC-media-frags-10-20120925.html)）に従ってメディアフラグメントによるシークをサポートしている場合は、ID を URL のフラグメント部分として使用することもできます。
- {{domxref("VideoTrack.kind", "kind")}} {{ReadOnlyInline}}
  - : トラックが属するカテゴリを指定する {{domxref("DOMString")}}。 例えば、メイン動画トラックには `"main"` という `kind` があります。
- {{domxref("VideoTrack.label", "label")}} {{ReadOnlyInline}}
  - : トラックに人間が読めるラベルを提供する {{domxref("DOMString")}}。 例えば、`kind` が `"sign"` のトラックには `"手話通訳"` という `label` が付いている場合があります。 ラベルが指定されていない場合、この文字列は空です。
- {{domxref("VideoTrack.language", "language")}} {{ReadOnlyInline}}
  - : 動画トラックの主要言語を指定する {{domxref("DOMString")}}、または不明の場合は空の文字列。 言語は、`"en-US"` または `"pt-BR"` などの BCP 47（{{RFC(5646)}}）言語コードとして指定されています。
- {{domxref("VideoTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : トラックを作成した {{domxref("SourceBuffer")}}。トラックが {{domxref("SourceBuffer")}} によって作成されなかった場合、または {{domxref("SourceBuffer")}} がその親メディアソースの {{domxref("MediaSource.sourceBuffers")}} 属性から取り除かれた場合は、null を返します。

## 使用上の注意

特定のメディア要素の `VideoTrack` を取得するには、その要素の {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} プロパティを使用します。 このプロパティは、メディアに含まれる個々のトラックを取得できる {{domxref("VideoTrackList")}} オブジェクトを返します。

```js
var el = document.querySelector("video");
var tracks = el.videoTracks;
```

その後、配列の構文または {{jsxref("Array.forEach", "forEach()")}} などの関数を使用して、メディアの個々のトラックにアクセスできます。

この最初の例は、メディア上の最初の動画トラックを取得します。

```js
var firstTrack = tracks[0];
```

次の例では、メディアのすべての動画トラックをスキャンして、（変数 `userLanguage` から取得した）ユーザーの優先言語の最初の動画トラックをアクティブにします。

```js
for (var i = 0; i < tracks.length; i++) {
  if (tracks[i].language === userLanguage) {
    tracks[i].selected = true;
    break;
  }
});
```

{{domxref("VideoTrack.language", "language")}} は標準（{{RFC(5646)}}）形式です。 例えば、アメリカ英語の場合、これは `"en-US"` になります。

## 仕様

| 仕様                                                                         | 状態                             | コメント |
| ---------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#videotrack', 'VideoTrack')}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザーの互換性

{{Compat("api.VideoTrack")}}

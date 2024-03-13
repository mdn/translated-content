---
title: AudioTrack
slug: Web/API/AudioTrack
---

{{APIRef("HTML DOM")}}

**`AudioTrack`** インターフェイスは、 HTML のメディア要素（{{HTMLElement("audio")}} または {{HTMLElement("video")}}）のいずれかにある単一の音声トラックを表します。

`AudioTrack` オブジェクトにアクセスする最も一般的な用途は、トラックをミュートおよびミュート解除するためにその {{domxref("AudioTrack.enabled", "enabled")}} プロパティを切り替えることです。

## プロパティ

- {{domxref("AudioTrack.enabled", "enabled")}}
  - : 音声トラックの音を有効にするかどうかを制御する論理値です。この値を `false` に設定すると、トラックの音声がミュートになります。
- {{domxref("AudioTrack.id", "id")}} {{ReadOnlyInline}}
  - : メディア内のトラックを一意に識別する文字列です。 この ID は、{{domxref("AudioTrackList.getTrackById()")}} を呼び出すことによって、音声トラックリスト内の特定のトラックを見つけるために使用できます。 メディアが[メディアフラグメント仕様書](https://www.w3.org/TR/media-frags/)（[その日本語訳](http://www.asahi-net.or.jp/~ax2s-kmtn/internet/media/REC-media-frags-10-20120925.html)）従ってメディアフラグメントによるシークをサポートしている場合は、ID を URL のフラグメント部分として使用することもできます。
- {{domxref("AudioTrack.kind", "kind")}} {{ReadOnlyInline}}
  - : トラックが属するカテゴリーを指定する文字列です。 例えば、メイン音声トラックは `kind` に `"main"` を持ちます。
- {{domxref("AudioTrack.label", "label")}} {{ReadOnlyInline}}
  - : トラックに人間が読めるラベルを提供する文字列です。 例えば、映画の音声解説トラックには、`"John Q. Public 監督と俳優 John Doe と Jane Eod による解説"` という `label` が付いています。 ラベルが指定されていない場合、この文字列は空です。
- {{domxref("AudioTrack.language", "language")}} {{ReadOnlyInline}}
  - : 音声トラックの主要言語を指定する文字列で、または不明の場合は空の文字列。 言語は、`"en-US"` や `"pt-BR"` などの BCP 47（{{RFC(5646)}}）言語コードで指定されています。
- {{domxref("AudioTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : トラックを作成した {{domxref("SourceBuffer")}}。 トラックが {{domxref("SourceBuffer")}} によって作成されなかった場合、または {{domxref("SourceBuffer")}} がその親メディアソースの {{domxref("MediaSource.sourceBuffers")}} 属性から取り除かれた場合は、null を返します。

## 使用上の注意

特定のメディア要素の `AudioTrack` を取得するには、その要素の {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} プロパティを使用します。 このプロパティは、メディアに含まれる個々のトラックを取得できる {{domxref("AudioTrackList")}} オブジェクトを返します。

```js
var el = document.querySelector("video");
var tracks = el.audioTracks;
```

その後、配列の構文または {{jsxref("Array.forEach", "forEach()")}} などの関数を使用して、メディアの個々のトラックにアクセスできます。

この最初の例は、メディア上の最初の音声トラックを取得します。

```js
var firstTrack = tracks[0];
```

次の例では、メディアのすべての音声トラックをスキャンして、（変数 `userLanguage` から取得した）ユーザーの優先言語のものを有効にし、それ以外を無効にします。

```js
tracks.forEach(function (track) {
  if (track.language === userLanguage) {
    track.enabled = true;
  } else {
    track.enabled = false;
  }
});
```

{{domxref("AudioTrack.language", "language")}} は標準（{{RFC(5646)}}）形式です。 例えば、アメリカ英語の場合、これは `"en-US"` になります。

## 例

指定されたメディア要素のトラックの種類とラベルの配列を、種類でフィルタリングして取得する方法を示す簡単な例については、 [`AudioTrack.label`](/ja/docs/Web/API/AudioTrack/label#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

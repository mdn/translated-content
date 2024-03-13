---
title: "Navigator: mediaSession プロパティ"
short-title: mediaSession
slug: Web/API/Navigator/mediaSession
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef}}

{{domxref("Navigator")}} の読み取り専用プロパティである **`mediaSession`** は、{{domxref("MediaSession")}} オブジェクトを返します。これは、文書内で扱われているメディアの現在の再生状態に関するメタデータやその他の情報をブラウザーと共有するために使用できます。

この情報は、端末の標準メディアコントロールユーザーがメディアの再生を記述し制御するために、端末や OS と共有されることがあります。

さらに、`MediaSession` インターフェイスは {{domxref("MediaSession.setActionHandler", "setActionHandler()")}} メソッドを提供し、ユーザーが画面上または物理的に再生、一時停止、シーク、および他の同様のコントロールなどの機器の制御に関与するときのイベントを受信することができます。例えば、インターネットラジオアプリでは、`setActionHandler()` を使用して、キーボードやユーザー端末上の他の場所にあるメディアコントロールを使用して、アプリのメディア再生を制御できるようにすることができます。

## 値

現在の文書が使用できる {{domxref("MediaSession")}} オブジェクトで、再生しているメディアとその現在の再生状態に関する情報を共有することができます。この情報には、再生中の曲のタイトル、アーティスト名、アルバム名などの典型的なメタデータに加え、アルバムアート、アーティスト写真などを含む 1 つ以上の画像が含まれる可能性があります。

## 例

この例では、メタデータは `mediaSession` オブジェクトに送信されます。このコードは、使用する前に {{domxref("navigator.mediaSession")}} プロパティが利用できることを確認することから始めていることに注意してください。

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Podcast Episode Title",
    artist: "Podcast Host",
    album: "Podcast Name",
    artwork: [{ src: "podcast.jpg" }],
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

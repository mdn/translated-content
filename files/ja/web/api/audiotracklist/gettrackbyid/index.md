---
title: AudioTrackList.getTrackById()
slug: Web/API/AudioTrackList/getTrackById
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{APIRef("HTML DOM")}}

**{{domxref("AudioTrackList")}}** の **`getTrackById()`** メソッドは、指定された文字列と {{domxref("AudioTrack.id", "id")}} が一致するトラックリストから最初の {{domxref("AudioTrack")}} オブジェクトを返します。 ID 文字列がわかっていれば、これで特定のトラックを見つけることができます。

## 構文

```js-nolint
getTrackById(id)
```

### 引数

- `id`
  - : 文字列で、トラックリスト内で検索するトラックの ID を示します。

### 返値

指定された文字列に一致する `id` を持つ `AudioTrackList` 内で見つかった最初のトラックを示す {{domxref("AudioTrack")}} オブジェクト。 一致が見つからない場合、このメソッドは `null` を返します。

トラックは自然な順序で検索されます。 つまり、メディアリソース自体によって定義された順序で、またはリソースが順序を定義していない場合は、メディアリソースによってトラックが宣言される相対的な順序です。

## 例

この例は、映画をゲーム内のカットシーンまたは他の重要なセットのピースとして使用する架空のゲームを示唆しています。 各映画には、各キャラクターに 1 つの音声トラックがあり、音楽、効果音などにも 1 つの音声トラックがあります。 この関数により、ゲーム内の出来事に基づいて映画の演技を調整するために、ゲームは特定のキャラクターの音声を無効にすることができます。 キャラクターの対話が適切でない場合は、省略されます。 明らかにそれは作品を作るためにいくつかの巧妙なグラフィックデザインを必要とするでしょう、しかし...これは架空のゲームです。

```js
function disableCharacter(videoElem, characterName) {
  videoElem.audioTracks.getTrackById(characterName).enabled = false;
}
```

この短い関数は、{{domxref("HTMLMediaElement.audioTracks")}} を使用して動画の音声トラックを含む {{domxref("AudioTrackList")}} を取得し、それから `getTrackById()` を呼び出してキャラクターの名前を指定します。 結果としてトラックの音声は、その {{domxref("AudioTrack.enabled", "enabled")}} フラグを `false` に設定することで無効になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

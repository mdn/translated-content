---
title: AudioTrack.label
slug: Web/API/AudioTrack/label
---

{{APIRef("HTML DOM")}}

**{{domxref("AudioTrack")}}** の **`label`** プロパティは読み取り専用で、音声トラックの判読可能なラベルがあればそれを指定する文字列を返します。 それ以外の場合は、空の文字列を返します。

## 値

トラックのメタデータで利用可能な場合は、トラックの人間が読めるラベルを指定する文字列です。 それ以外の場合は、空の文字列 (`""`) が返されます。

例えば、 {{domxref("AudioTrack.kind", "kind")}} が `"commentary"` のトラックには、`"Mark Markmarkimark 監督とスター Donna Donnalidon による解説"` のような `label` が付けられます。

## 例

この例では、指定されたメディア要素の音声トラックを選択するためにユーザーインターフェイスで使用される可能性のあるトラックの種別とラベルの配列を返します。 リストは特定の種別のトラックのみを通過させるようにフィルタリングされます。

```js
function getTrackList(el) {
  const trackList = [];
  const wantedKinds = [
    "main",
    "alternative",
    "main-desc",
    "translation",
    "commentary",
  ];

  el.audioTracks.forEach(function (track) {
    if (wantedKinds.includes(track.kind)) {
      trackList.push({
        id: track.id,
        kind: track.kind,
        label: track.label,
      });
    }
  });
  return trackList;
}
```

結果の `trackList` には、`wantedKinds` 配列のいずれかの `kind` の音声トラックの配列が含まれ、各エントリーにはトラックの {{domxref("AudioTrack.id", "id")}}、{{domxref("AudioTrack.kind", "kind")}}、{{domxref("AudioTrack.label", "label")}} が含まれます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

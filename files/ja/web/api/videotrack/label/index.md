---
title: "VideoTrack: label プロパティ"
short-title: label
slug: Web/API/VideoTrack/label
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

**{{domxref("VideoTrack")}}** の **`label`** プロパティは読み取り専用で、映像トラックの判読可能なラベルがある場合はそれを指定する文字列を返します。 それ以外の場合は、空の文字列を返します。

### 値

トラックのメタデータで利用可能な場合は、トラックの判読可能なラベルを指定する文字列です。 それ以外の場合は、空の文字列（`""`）が返されます。

例えば、{{domxref("VideoTrack.kind", "kind")}} が `"sign"` のトラックには、`"手話通訳"` などの `label` が付いている場合があります。

## 例

この例では、指定されたメディア要素の映像トラックを選択するためにユーザーインターフェイスで使用される可能性のあるトラックの kind とラベルの配列を返します。 リストは、特定の kind のトラックのみを通過させるようにフィルタ処理されています。

```js
function getTrackList(el) {
  const trackList = [];
  const wantedKinds = ["main", "alternative", "commentary"];

  el.videoTracks.forEach((track) => {
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

結果の `trackList` には、その `kind` が配列 `wantedKinds` の中の 1 つである映像トラックの配列を含み、各エントリはトラックの {{domxref("VideoTrack.id", "id")}}、{{domxref("VideoTrack.kind", "kind")}}、および {{domxref("VideoTrack.label", "label")}} を提供します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

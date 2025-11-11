---
title: AudioTrack.enabled
slug: Web/API/AudioTrack/enabled
---

{{APIRef("HTML DOM")}}

**{{domxref("AudioTrack")}}** の **`enabled`** プロパティは、記述された音声トラックが現在使用可能かどうかを指定します。 `enabled` を `false` に設定してトラックを無効にすると、トラックはミュートになり、音声は生成されません。

## 値

`enabled` プロパティは論理値で、トラックが有効な場合は値が `true` になります。 有効なトラックは、メディアの再生中に音声を生成します。 `enabled` を `false` に設定すると、音声トラックが効果的にミュートされ、メディアの音声パフォーマンスに寄与しなくなります。

## 例

この例では、メディア要素のメイン音声トラックと解説音声トラックを切り替えます。

```js
function swapCommentaryMain() {
  const videoElem = document.getElementById("main-video");
  let audioTrackMain;
  let audioTrackCommentary;

  videoElem.audioTracks.forEach(track) {
    if (track.kind === "main") {
      audioTrackMain = track;
    } else if (track.kind === "commentary") {
      audioTrackCommentary = track;
    }
  }

  if (audioTrackMain && audioTrackCommentary) {
    const commentaryEnabled = audioTrackCommentary.enabled;
    audioTrackCommentary.enabled = audioTrackMain.enabled;
    audioTrackMain.enabled = commentaryEnabled;
  }
}
```

上記の `swapCommentaryMain()` 関数は、{{HTMLElement("video")}} 要素の `"main-video"` の音声トラック内で、{{domxref("AudioTrack.kind", "kind")}} の値が `"main"` と `"commentary"` である音声トラックを見つけます。 これらはプライマリ音声トラックと解説トラックを表します。

> [!NOTE]
> この例では、動画には各種類のトラックが 1 つずつしかないと想定していますが、必ずしもそうとは限りません。

次に、要素の音声トラックを、JavaScript の {{jsxref("Array.forEach", "forEach()")}} メソッドを使用してスキャンします（メディア要素の {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} プロパティは実際には JavaScript の配列ではありませんが、ほとんどの場合は同様にアクセスできます）。

スキャンは、{{domxref("AudioTrack.kind", "kind")}} の値が `"main"` と `"commentary"` のトラックを探し、それらの {{domxref("AudioTrack")}} オブジェクトを記憶します。 それらが見つかると、2つのトラックの `enabled` プロパティの値を交換することで、2つのトラックのどちらが現在アクティブになっているかを交換します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

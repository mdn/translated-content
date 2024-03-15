---
title: "MediaSource: duration プロパティ"
short-title: duration
slug: Web/API/MediaSource/duration
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

**`duration`** は {{domxref("MediaSource")}} インターフェイスのプロパティで、現在表示されているメディアの期間（長さ）を取得および設定します。

### 値

double 型。 秒単位の値が必要です。

### 例外

このプロパティに新しい値を設定すると、次の例外が発生する場合があります。

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 負の値または `NaN` である再生時間の値を設定しようとした場合に発生します。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("MediaSource.readyState")}} が `open` に等しくないか、 {{domxref("MediaSource.sourceBuffers")}}内の{{domxref("SourceBuffer")}} オブジェクトが 1 つ以上更新されている（つまり、 {{domxref("SourceBuffer.updating")}} プロパティが `true` である）場合に発生します。

## 例

次のスニペットは、Nick Desaulniers によって書かれた簡単な例に基づいています（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。ここでは定義されていませんが、関数 `getMediaSource()` は `MediaSource` を返します。

```js
const mediaSource = getMediaSource();

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      mediaSource.duration = 120;
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

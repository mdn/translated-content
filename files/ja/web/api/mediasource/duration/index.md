---
title: MediaSource.duration
slug: Web/API/MediaSource/duration
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} インターフェイスの **`duration`** プロパティは、現在表示されているメディアの期間（長さ）を取得および設定します。

## 構文

```
mediaSource.duration = 5.5; // 5.5 seconds

var myDuration = mediaSource.duration;
```

### 値

double 型。 秒単位の値が必要です。

### 例外

このプロパティに新しい値を設定すると、次の例外がスローされる場合があります。

| 例外                 | 説明                                                                                                                                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `InvalidAccessError` | 負、または `NaN` の期間値を設定しようとした。                                                                                                                                                                                                                |
| `InvalidStateError`  | {{domxref("MediaSource.readyState")}} が `open` と等しくないか、{{domxref("MediaSource.sourceBuffers")}} の {{domxref("SourceBuffer")}} オブジェクトの 1 つ以上が更新されています（つまり、{{domxref("SourceBuffer.updating")}} プロパティが `true` です）。 |

## 例

次のスニペットは、Nick Desaulniers によって書かれた簡単な例に基づいています（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。

```js
function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      mediaSource.duration = 120;
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
};

...
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.MediaSource.duration")}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

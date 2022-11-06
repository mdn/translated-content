---
title: MediaSource.sourceBuffers
slug: Web/API/MediaSource/sourceBuffers
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} インターフェイス の **`sourceBuffers`** 読み取り専用プロパティは、この `MediaSource` に関連付けられた {{domxref("SourceBuffer")}} オブジェクトのリストを含む {{domxref("SourceBufferList")}} オブジェクトを返します。

## 構文

```
var mySourceBuffers = mediaSource.sourceBuffers;
```

### 値

{{domxref("SourceBufferList")}}。

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
      console.log(mediaSource.sourceBuffers); // 上で追加されたソースバッファが含まれます
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
};

...
```

## 仕様

| 仕様                                                                                                                         | 状態                                             | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-mediasource-sourcebuffers', 'sourceBuffers')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaSource.sourceBuffers")}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

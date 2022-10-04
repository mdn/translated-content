---
title: MediaSource.activeSourceBuffers
slug: Web/API/MediaSource/activeSourceBuffers
---

{{APIRef("Media Source Extensions")}}

{{domxref("MediaSource")}} インターフェイスの **`activeSourceBuffers`** 読み取り専用プロパティは、{{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} に含まれる {{domxref("SourceBuffer")}} オブジェクトのサブセットを含む {{domxref("SourceBufferList")}} オブジェクトを返します。 これは、選択した動画トラック、有効な音声トラック、および表示/非表示のテキストトラックを提供するオブジェクトのリストです。

## 構文

```
var myActiveSourceBuffers = mediaSource.activeSourceBuffers;
```

### 値

アクティブな各トラックの {{domxref("SourceBuffer")}} オブジェクトを含む {{domxref("SourceBufferList")}}。

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
      console.log(mediaSource.activeSourceBuffers);
      // 動画プレーヤーでの再生用に選択されているため、
      // 上記で追加されたソースバッファーが含まれます。
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
};

...
```

## 仕様

| 仕様                                                                                                                                         | 状態                                             | コメント |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#idl-def-mediasource-activesourcebuffers', 'activeSourceBuffers')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaSource.activeSourceBuffers")}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

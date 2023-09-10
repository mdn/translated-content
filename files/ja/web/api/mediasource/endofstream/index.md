---
title: MediaSource.endOfStream()
slug: Web/API/MediaSource/endOfStream
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} インターフェイスの **`endOfStream()`** メソッドは、ストリームの終わりを通知します。

## 構文

```
mediaSource.endOfStream(endOfStreamError);
```

### パラメーター

- endOfStreamError {{optional_inline}}

  - : ストリームの終わりに達したときにスローするエラーを表す {{domxref("DOMString")}}。 可能な値は次のとおりです。

    - `network`: 再生を終了し、ネットワークエラーが発生したことを通知します。 これを使用して、メディアストリームに関連するカスタムエラーハンドラを作成できます。 例えば、他のネットワーク要求とは別に、メディアチャンク要求を処理する関数があるとします。 メディアチャンクに対して [XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest) 呼び出しを行い、`onabort` または `onerror` がトリガーされた場合、`endOfStream('network')` を呼び出し、UI に説明的なメッセージを表示し、ネットワーク要求をすぐに再試行するか、ネットワークが（何らかのポーリングを介して）復旧するまで待機できます。
    - `decode`: 再生を終了し、デコードエラーが発生したことを通知します。 これは、メディアデータの取得中に解析エラーが発生したことを示すために使用できます。 データが破損しているか、ブラウザーがデコード方法を知らないコーデックを使用してエンコードされている可能性があります。

### 戻り値

{{jsxref('undefined')}}

### 例外

| 例外                | 説明                                                                                                                                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError` | {{domxref("MediaSource.readyState")}} が `open` と等しくないか、{{domxref("MediaSource.sourceBuffers")}} の {{domxref("SourceBuffer")}} オブジェクトの 1 つ以上が更新されています（つまり、{{domxref("SourceBuffer.updating")}} プロパティが `true` です） |

## 例

次のスニペットは、Nick Desaulniers によって書かれた簡単な例からのものです（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。

```js
var assetURL = "frag_bunny.mp4";
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error(
    "サポートされていない MIME タイプまたはコーデック: ",
    mimeCodec,
  );
}

function sourceOpen(_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener("updateend", function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.MediaSource.endOfStream")}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

---
title: "MediaSource: endOfStream() メソッド"
short-title: endOfStream()
slug: Web/API/MediaSource/endOfStream
l10n:
  sourceCommit: 7e4769a3d501efb76e7cf92198b0589ab28f1864
---

{{APIRef("Media Source Extensions")}}

**`endOfStream()`** は {{domxref("MediaSource")}} インターフェイスのメソッドで、ストリームの終わりを通知します。

## 構文

```js-nolint
endOfStream()
endOfStream(endOfStreamError)
```

### 引数

- `endOfStreamError` {{optional_inline}}
  - : 文字列で、ストリームの終わりに達したときに発生したエラーを表します。可能な値は次のとおりです。
    - `network`
      - : 再生を終了し、ネットワークエラーが発生したことを通知します。 これを使用して、メディアストリームに関連するカスタムエラーハンドラーを作成できます。 例えば、他のネットワーク要求とは別に、メディアチャンク要求を処理する関数があるとします。メディアチャンクを {{domxref("Window/fetch", "fetch()")}} リクエストしてネットワークエラーが発生した場合、 `endOfStream('network')` を呼び出し、 UI に説明的なメッセージを表示し、ネットワークリクエストをすぐに再試行するか、ネットワークが（何らかのポーリングで）復旧するまで待ちます。
    - `decode`
      - : 再生を終了し、デコードエラーが発生したことを通知します。 これは、メディアデータの取得中に解析エラーが発生したことを示すために使用できます。 データが破損しているか、ブラウザーがデコード方法を知らないコーデックを使用してエンコードされている可能性があります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("MediaSource.readyState")}} が `open` に等しくないか、 {{domxref("MediaSource.sourceBuffers")}} 内の {{domxref("SourceBuffer")}} オブジェクトが 1 つ以上更新されている（つまり、 {{domxref("SourceBuffer.updating")}} プロパティが `true` である）場合に発生します。

## 例

次のスニペットは、Nick Desaulniers によって書かれた例からのものです（[ライブで完全なデモを見る](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。ここでは定義されていませんが、関数 `getMediaSource()` は `MediaSource` を返します。

```js
const assetURL = "frag_bunny.mp4";
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

let mediaSource;

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = getMediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error(
    "サポートされていない MIME タイプまたはコーデック: ",
    mimeCodec,
  );
}

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

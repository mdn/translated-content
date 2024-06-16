---
title: "MediaSource: isTypeSupported() 静的メソッド"
short-title: isTypeSupported()
slug: Web/API/MediaSource/isTypeSupported_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Media Source Extensions")}}

**`MediaSource.isTypeSupported()`** 静的メソッドは、指定された MIME タイプが現在の{{Glossary("user agent","ユーザーエージェント")}}によってサポートされる*可能性が高い*場合に `true` となる論理値を返します。

つまり、その MIME タイプの {{domxref("SourceBuffer")}} オブジェクトを正常に作成できる場合です。 返された値が `false` の場合、ユーザーエージェントは、指定された形式のメディアにアクセス*できない*と確信しています。

## 構文

```js-nolint
MediaSource.isTypeSupported(type)
```

### 引数

- `type`
  - : 現在のブラウザーでの対応をテストする MIME メディアタイプ。 これには、ファイル内で使用されるコーデックに関する追加の詳細を提供する [`codecs` 引数](/ja/docs/Web/Media/Formats/codecs_parameter)が含まれる場合があります。

### 返値

指定されたタイプのメディアを再生しない場合は `false` の値です。

指定されたタイプのメディアを*おそらく*再生できるとブラウザーが感じる場合に `true` になります。ただし、これは保証*ではなく*、メディアが正しく再生されない可能性に備えてコードを準備する必要があります。

メディアファイルで動作するすべての Web API は、メディアタイプを使用できるかどうかを判断するときに、「いいえ/多分/おそらく」アプローチ（または、この場合は「いいえまたはおそらく」）を使用します。 これは、メディアファイルが複雑で難解な構造であるため、実際にメディアのコンテンツを使用するまでは、微妙なバリエーションが多すぎて絶対に確実ではないためです。

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
      //console.log(mediaSource.readyState); // ended
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

- [メディアソース拡張 API](/ja/docs/Web/API/Media_Source_Extensions_API)
- [ウェブ上のメディアの種類と形式のガイド](/ja/docs/Web/Media/Formats)
- [一般的なメディアタイプにおける "codecs" パラメーター](/ja/docs/Web/Media/Formats/codecs_parameter)
- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

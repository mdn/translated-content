---
title: MediaSource.isTypeSupported()
slug: Web/API/MediaSource/isTypeSupported_static
---

{{APIRef("Media Source Extensions")}}

**`MediaSource.isTypeSupported()`** 静的メソッドは、指定された MIME タイプが現在の{{Glossary("user agent","ユーザーエージェント")}}によってサポートされる*可能性が高い*場合に `true` となる {{jsxref("Boolean")}} 値を返します。 つまり、その MIME タイプの {{domxref("SourceBuffer")}} オブジェクトを正常に作成できる場合です。 返された値が `false` の場合、ユーザーエージェントは、指定された形式のメディアにアクセス*できない*と確信しています。

## 構文

```
var isItSupported = mediaSource.isTypeSupported(mimeType);
```

### パラメーター

- `mimeType`
  - : 現在のブラウザーでのサポートをテストする MIME メディアタイプ。 これには、ファイル内で使用されるコーデックに関する追加の詳細を提供する `codecs` パラメーターが含まれる場合があります。

### 戻り値

指定されたタイプのメディアを*おそらく*再生できるとブラウザーが感じる場合に `true` になる {{jsxref("Boolean")}}。 ただし、これは保証*ではなく*、メディアが正しく再生されない可能性に備えてコードを準備する必要があります。 ただし、値 `false` は、指定されたタイプのメディアが再生*されない*ことを保証します。

メディアファイルで動作するすべての Web API は、メディアタイプを使用できるかどうかを判断するときに、「いいえ/多分/おそらく」アプローチ（または、この場合は「いいえまたはおそらく」）を使用します。 これは、メディアファイルが複雑で難解な構造であるため、実際にメディアのコンテンツを使用するまでは、微妙なバリエーションが多すぎて絶対に確実ではないためです。

## 例

次のスニペットは、Nick Desaulniers によって書かれた例からのものです（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。

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

{{Compat("api.MediaSource.isTypeSupported")}}

## 関連情報

- [Media Source Extensions API](/ja/docs/Web/API/Media_Source_Extensions_API)
- [ウェブ上のメディアタイプとフォーマットのガイド](/ja/docs/Web/Media/Formats)
- [一般的なメディアタイプにおける "codecs" パラメーター](/ja/docs/Web/Media/Formats/codecs_parameter)
- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

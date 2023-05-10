---
title: MediaRecorder.mimeType
slug: Web/API/MediaRecorder/mimeType
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("MediaStream Recording")}}

**`mimeType`** は読み取り専用のプロパティで、 {{domxref("MediaRecorder")}} オブジェクトを作成する際に指定された {{Glossary("MIME")}} メディア種別、または指定されていない場合は、ブラウザーによって選ばれたメディア種別を返すものです。これは、記録されたデータのすべてをディスクに書き込んだ結果のファイル形式です。

指定されたコンテナーで、すべてのコーデックが対応しているわけではないことに注意してください。指定されたメディアコンテナーで対応していないコーデックを使ってメディアを書き込んだ場合、そのファイルを再生しようとすると、確実に動作しないことがあります（まったく動作しないわけではありません）。ブラウザー間でのコンテナーとコーデックの対応については、[メディア種別と形式ガイド](/ja/docs/Web/Media/Formats) を参照してください。

> **メモ:** 「MIME タイプ」という用語は、公式には歴史的なものと見なされています。これらの文字列は、正式には**メディア種別**と呼ばれるようになりました。
> MDN Web Docs のコンテンツでは、この用語を互換的に使用しています。

### 値

記録されたメディアの形式を記述する MIME メディア種別（文字列）。この文字列は、メディアレコーダが使用するコーデックとコーデック構成の詳細を示す [`codecs` 引数] (/ja/docs/Web/Media/Formats/codecs_parameter)を含んでいてもかまいません。

メディア種別の文字列は、インターネット番号割当機構（IANA）によって標準化されています。定義されているメディア種別の文字列の公式な一覧は、IANA サイトの記事 [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) を参照してください。メディア種別について、またそれらがウェブコンテンツやウェブブラウザーでどのように使用されているかについては[メディア種別](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)も参照してください。

## 例

```js
if (navigator.mediaDevices) {
  console.log('getUserMedia supported.');

  const constraints = { audio: true, video: true };
  const chunks = [];

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      const options = {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: 'video/mp4'
      }
      const mediaRecorder = new MediaRecorder(stream, options);
      m = mediaRecorder;

      m.mimeType; // would return 'video/mp4'
      // …
    })
    .catch((error) => {
      console.error(error.message);
    });
}
```

14 行目を以下に変更すると、 `MediaRecorder` は動画に AVC Constrained Baseline Profile Level 4、音声に AAC-LC (Low Complexity) を使用しようとします。これは、モバイルやその他リソースに制約のある状況での使用に有益なものです。

```js
mimeType: 'video/mp4; codecs="avc1.424028, mp4a.40.2"';
```

この設定がユーザーエージェントに受け入れられると仮定すると、後で `m.mimeType` が返す値は `video/mp4; codecs="avc1.424028, mp4a.40.2"` となるでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [一般的なメディア形式を入力する際の "codecs" 引数](/ja/docs/Web/Media/Formats/codecs_parameter)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)）。（英語）
- [simpl.info の MediaStream Recording のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia()")}}
